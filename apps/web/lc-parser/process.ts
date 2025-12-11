// import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText } from 'ai';
import "dotenv/config";
import { readFileSync, writeFileSync } from 'fs';
import { globSync } from "glob";
import { ProxyAgent, type RequestInit as UndiciRequestInit, fetch as undiciFetch } from 'undici';

const HTTP_PROXY = process.env.HTTP_PROXY!; // eg. http://localhost:8080/

function proxyFetch(input: RequestInfo | URL, init?: RequestInit) {
  console.log('使用代理进行请求:', HTTP_PROXY);
  const dispatcher = new ProxyAgent({
    uri: HTTP_PROXY,
    requestTls: {
      rejectUnauthorized: false,
    },
    proxyTls: {
      rejectUnauthorized: false,
    },
  });

  let url: string | URL;
  if (typeof input === 'string') {
    url = input;
  } else if (input instanceof URL) {
    url = input;
  } else if (input instanceof Request) {
    url = input.url;
  } else {
    throw new Error(`Unsupported input type: ${typeof input}`);
  }

  if (!init) {
    return undiciFetch(url, {
      dispatcher,
    }) as Promise<Response>;
  }

  (init as UndiciRequestInit).dispatcher = dispatcher;
  return undiciFetch(url, init as UndiciRequestInit) as Promise<Response>;
}

const openai = createOpenAICompatible({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.MY_API_KEY!,
  name: 'qwen'
});

// const google = createGoogleGenerativeAI({
//   apiKey: process.env.GOOGLE_API_KEY!,
//   fetch: proxyFetch,
// });

// const model_id='qwen-plus-latest';
const model_id=process.env.MODEL_ID!;

console.log('🤖 使用的模型接口地址:', process.env.BASE_URL);
console.log('🤖 使用的模型 API Key:', process.env.MY_API_KEY);

const systemPrompt = `你是一个专业的技术文档整理助手。处理用户输入 Markdown 文档，严格按照指定的 JSON 格式输出，输出内容不要包含代码标签。

## 输出要求

请严格按照以下 JSON Schema 输出：

{
  "title": "文档标题，字符串",
  "src": "文档源链接，字符串", // 如果是一级章节则为主页链接，二级章节则为 null,
  "summary": "章节的描述性内容，字符串，可选",
  "children": [ // 子章节数组
    {
      "title": "子章节标题，字符串",
      "src": "子章节源链接，字符串，可选", // 如果是题目则为题目链接，否则为 null
      "summary": "子章节的描述性内容，字符串，可选",
      "problems": [ // 题目列表
        {
          "id": "题号，字符串",
          "title": "题目标题，字符串",
          "slug": "题目路径，字符串",
          "src": "题目链接，字符串",
          "solution": "题解链接，字符串，如果没有则为 null",
          "score": "题目分数，整数",
          "isPremium": "是否为付费题目，布尔值"
        }
      ],
      "children": [ /* 递归子章节结构，最大深度 3 */ ]
    }
  ],
}

## 处理规则

1. **提取标题层级**：识别 Markdown 的标题层级（#, ##, ###, ####）作为章节结构，章节结构通过 \`children\` 数组字段表示章节和子章节的嵌套关系
2. **章节描述性内容**：不要包含题目列表信息，保留原文中的图片、链接和非格式化文本，放在 \`summary\` 字段中，如果没有描述性内容，\`summary\` 字段忽略
3. **识别问题列表**：提取文档中的问题、题目，练习等列表项，放在章节的 \`problems\` 数组字段中，每个问题包含 \`id\`（题号）、\`title\`（题目标题）、\`slug\`（题目路径）、\`src\`（题目链接）、\`solution\`（题解链接，如果有的话，否则为 null）、\`score\`（题目分数）、\`isPremium\`（是否为付费题目，布尔值）
4. **提取元数据**：识别难度、标签、链接等信息

## 重要提示
- 如果输出被截断，下一轮会发送"继续"，请从截断处继续输出，不要重复已输出的内容
- 确保 JSON 格式完整，所有括号和引号都要闭合
`;

/**
 * 检查 JSON 是否完整
 */
function isJsonComplete(text: string): boolean {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * 检查 JSON 是否可能被截断（启发式检查）
 */
function isLikelyTruncated(text: string): boolean {
  const trimmed = text.trim();
  // 检查是否以完整的 JSON 结尾
  if (!trimmed.endsWith('}') && !trimmed.endsWith(']')) {
    return true;
  }
  // 检查括号是否匹配
  const openBraces = (trimmed.match(/\{/g) || []).length;
  const closeBraces = (trimmed.match(/\}/g) || []).length;
  const openBrackets = (trimmed.match(/\[/g) || []).length;
  const closeBrackets = (trimmed.match(/\]/g) || []).length;
  
  return openBraces !== closeBraces || openBrackets !== closeBrackets;
}

const runProcess = async (input_file: string) => {
  const fullText = readFileSync(input_file, 'utf-8');
  let shouldContinue = true;
  let consecutiveStops = 0; // ✅ 新增：连续 stop 计数
  let fullResponse = '';
  let iterationCount = 0;
  const maxIterations = 10;
  
  // 计算输入文本的大致 token 数（中文约 1 字符 = 1.5-2 tokens）
  const estimatedInputTokens = fullText.length * 1.5;
  console.log(`📄 文件大小: ${(fullText.length / 1024).toFixed(2)} KB`);
  console.log(`📊 估计输入 tokens: ${Math.round(estimatedInputTokens)}`);

  while (shouldContinue && iterationCount < maxIterations) {
    iterationCount++;
    console.log(`\n🔄 第 ${iterationCount} 轮处理...`);

    let messages: any[] = [];
    
    if (iterationCount === 1) {
      // ✅ 第一轮：完整输入
      messages = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: fullText }
      ];
    } else {
      // ✅ 续写策略：滑动窗口 + 原文摘要
      const CONTEXT_WINDOW = 3000; // 保留最近 3000 字符
      const recentOutput = fullResponse.length > CONTEXT_WINDOW ? fullResponse.slice(-CONTEXT_WINDOW) : fullResponse;
      const omittedChars = fullResponse.length > CONTEXT_WINDOW ? fullResponse.length - CONTEXT_WINDOW : 0;
      // 提取最后几个字符作为续写锚点
      const lastChars = fullResponse.slice(-100); // 最后100个字符      
      // 构建上下文提示
      let contextHint = '';
      if (omittedChars > 0) {
        contextHint = `[已省略前面 ${omittedChars} 字符的输出]\n...\n`;
      }
      contextHint += recentOutput;
      
      messages = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: fullText }, // ✅ 保留原文
        { role: 'assistant', content: contextHint },
        { 
              role: 'user', 
              content: `你的上一轮输出在这里停止：
"""
${lastChars}
"""

请注意：
1. 这是第 ${iterationCount} 轮续写，你已经输出了 ${fullResponse.length} 字符
2. 上面显示的是你输出的最后部分内容
3. 请直接从截断处继续，补全剩余的 JSON 内容
4. **不要**重复已输出的内容
5. **不要**重新开始
6. 直接继续写，就像接着上面的内容继续打字一样

继续：` }
      ];
    }

    try {
      const result = streamText({
        model: openai(model_id),
        // model: google("gemini-2.5-flash"),
        messages,
        // ✅ 设置足够大的输出 token（根据模型支持调整）
        maxOutputTokens: 32768, // 或更大, 视模型支持而定
        temperature: 0.1, // 降低随机性，提高一致性
      });
      
      let chunk = '';
      for await (const delta of result.textStream) {
        chunk += delta;
        process.stdout.write(delta);
      }
      
      fullResponse += chunk;
      
      const reason = await result.finishReason;
      console.log(`\n--- 完成原因: ${reason} ---`);
      console.log(`--- 本轮输出: ${chunk.length} 字符 ---`);
      console.log(`--- 累计输出: ${fullResponse.length} 字符 ---`);
      
      // ✅ 改进的判断逻辑
      if (reason === 'length') {
        // 因长度限制被截断，需要继续
        shouldContinue = true;
        consecutiveStops = 0; // 重置计数
        console.log('⚠️  输出因长度限制被截断，将继续...');
      } else if (reason === 'stop') {
          
        // 保存结果
        const outputPath = input_file.replace(/\.md$/, `_iter${iterationCount}.json`);
        writeFileSync(outputPath, fullResponse, 'utf-8');

        consecutiveStops++; // 累加 stop 次数
        
        const jsonComplete = isJsonComplete(fullResponse);
        const likelyTruncated = isLikelyTruncated(fullResponse);
        
        console.log(`JSON 完整性: ${jsonComplete ? '✅' : '❌'}`);
        console.log(`截断检测: ${likelyTruncated ? '⚠️  可能截断' : '✅ 看起来完整'}`);
        console.log(`连续 stop 次数: ${consecutiveStops}`);
        
        if (jsonComplete) {
          // JSON 完整，立即停止
          shouldContinue = false;
          console.log('✅ JSON 格式完整且可解析，处理完成');
        } else if (likelyTruncated) {
          // 明显截断，继续
          shouldContinue = true;
          consecutiveStops = 0; // 重置（因为确实需要继续）
          console.log('⚠️  JSON 不完整，将继续...');
        } else if (consecutiveStops >= 2) {
          // ✅ 连续 2 次 stop 且 JSON 看起来完整（虽然解析失败）
          // 可能是格式问题，不是截断问题，应该停止
          shouldContinue = false;
          console.log('⚠️  连续 2 次正常停止，但 JSON 格式有误，强制结束');
        } else if (chunk.length < 50) {
          // ✅ 输出很少且非截断，可能已完成
          shouldContinue = false;
          console.log('⚠️  输出极少，判断为已完成');
        } else {
          // 不确定，再试一轮
          shouldContinue = true;
          console.log('⚠️  状态不明确，尝试继续...');
        }
      } else {
        // 其他原因（error 等），停止
        shouldContinue = false;
        console.log(`❌ 异常停止: ${reason}`);
      }
      
    } catch (error) {
      console.error(`\n❌ 第 ${iterationCount} 轮处理出错:`, error);
      shouldContinue = false;
    }
    
    // ✅ 添加轮次间延迟，避免限流
    if (shouldContinue) {
      console.log('\n⏳ 等待 1 秒后继续...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  if (iterationCount >= maxIterations) {
    console.log(`\n⚠️  达到最大迭代次数 (${maxIterations})，强制停止`);
  }
  
  // 保存结果
  const outputPath = input_file.replace(/\.md$/, '.json');
  writeFileSync(outputPath, fullResponse, 'utf-8');

  console.log(`\n✅ 生成完成，已保存到: ${outputPath}`);
  console.log(`📊 最终输出: ${fullResponse.length} 字符`);
  console.log(`📊 总轮次: ${iterationCount}`);
  
  // ✅ 验证最终 JSON
  if (isJsonComplete(fullResponse)) {
    console.log('✅ 最终 JSON 验证通过');
  } else {
    console.warn('⚠️  警告：最终 JSON 可能不完整');
  }
};

// 主函数：顺序处理所有 md 文件
async function main() {
  const files = globSync('dist/dynamic_programming.md');
  console.log(`\n📚 找到 ${files.length} 个文件待处理\n`);
  const skipFiles = ['string.md', 'trees.md', 'sliding_window.md', 'monotonic_stack.md', 'grid.md'];
  for (let i = 0; i < files.length; i++) {
    const file = files[i]!;
    if (skipFiles.some(skip => file.endsWith(skip))) {
      console.log(`跳过示例文件: ${file}`);
      continue;
    }
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 [${i + 1}/${files.length}] 处理文件: ${file}`);
    console.log(`${'='.repeat(60)}\n`);
    
    try {
      await runProcess(file);
    } catch (error) {
      console.error(`\n❌ 处理文件失败: ${file}`, error);
    }
    
    // 添加延迟避免 API 限流
    if (i < files.length - 1) {
      console.log('\n⏳ 等待 2 秒后处理下一个文件...\n');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🎉 所有文件处理完成！`);
  console.log(`${'='.repeat(60)}\n`);
}

// 执行主函数
main().catch(console.error);

// const result = streamText({
//   model: createOpenAICompatible({
//     baseURL: process.env.BASE_URL!,
//     apiKey: process.env.MY_API_KEY!,
//     name: 'qwen',
//   })('qwen-plus-latest'),
//   messages: [
//     { role: 'user', content: '你好' }
//   ],
// });

// for await (const delta of result.textStream) {
//   process.stdout.write(delta);
// }




