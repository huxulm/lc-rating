# HTML to Markdown Converter

这个工具用于将 LeetCode 讨论页面的 HTML 转换为 Markdown 格式。

## 文件说明

- `extract_html2md.py` - Python 版本（使用 markdownify）
- `extract_html2md.ts` - TypeScript 版本（使用 turndown）

## TypeScript 版本使用方法

### 安装依赖

```bash
cd apps/web
pnpm install
```

### 运行脚本

```bash
npx tsx lc-parser/extract_html2md.ts
```

## 主要依赖

### Python 版本
- `beautifulsoup4` - HTML 解析
- `markdownify` - HTML 转 Markdown
- `requests` - HTTP 请求

### TypeScript 版本
- `cheerio` - HTML 解析（类似 BeautifulSoup）
- `turndown` - HTML 转 Markdown（类似 markdownify）
- `axios` - HTTP 请求（类似 requests）

## 功能对比

两个版本实现了完全相同的功能：

1. 从指定 URL 下载 HTML 文件
2. 解析 HTML 并提取标题和内容
3. 将 HTML 转换为 Markdown 格式
4. 保存为 `.md` 文件

## 配置

脚本会处理以下 LeetCode 算法题单：

- 滑动窗口与双指针
- 二分算法
- 单调栈
- 网格图
- 位运算
- 图论算法
- 动态规划
- 常用数据结构
- 数学算法
- 贪心算法
- 链表、二叉树与回溯
- 字符串
