import assert from "node:assert/strict";
import { test } from "node:test";
import {
  cleanPlanTitle,
  countProblems,
  parseProblemLine,
  parseStudyPlan,
} from "./parse";

test("parseProblemLine: 普通题目 / 分数 / 约分数 / 会员题 / 备注", () => {
  assert.deepEqual(
    parseProblemLine("- [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)"),
    {
      id: "70",
      title: "爬楼梯",
      slug: "climbing-stairs",
      src: "https://leetcode.cn/problems/climbing-stairs/",
      score: null,
      isPremium: false,
    }
  );

  const scored = parseProblemLine(
    "- [3693. 爬楼梯 II](https://leetcode.cn/problems/climbing-stairs-ii/) 1560 注意：下标从 $0$ 开始"
  );
  assert.equal(scored?.score, 1560);
  assert.equal(scored?.scoreApprox, undefined);
  assert.equal(scored?.note, "注意：下标从 $0$ 开始");

  const approx = parseProblemLine(
    "- [746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/) 约 1500"
  );
  assert.equal(approx?.score, 1500);
  assert.equal(approx?.scoreApprox, true);
  assert.equal(approx?.note, undefined);

  const premium = parseProblemLine(
    "- [2533. 好二进制字符串的数量](https://leetcode.cn/problems/number-of-good-binary-strings/)（会员题）同 2466 题"
  );
  assert.equal(premium?.isPremium, true);
  assert.equal(premium?.score, null);
  assert.equal(premium?.note, "同 2466 题");
});

test("parseProblemLine: 特殊题号", () => {
  assert.equal(
    parseProblemLine("- [面试题 05.01. 插入](https://leetcode.cn/problems/insert-into-bits-lcci/)")?.id,
    "面试题 05.01"
  );
  assert.equal(
    parseProblemLine("- [LCP 08. 剧情触发时间](https://leetcode.cn/problems/ju-qing-hong-fa-shi-jian/) 2085")?.id,
    "LCP 08"
  );
  // 非题目链接（如其他题单）不应被识别为题目
  assert.equal(
    parseProblemLine("- [数据结构题单](https://leetcode.cn/circle/discuss/mOr1u6/)"),
    null
  );
});

test("cleanPlanTitle", () => {
  assert.equal(
    cleanPlanTitle("分享丨【算法题单】动态规划（入门/背包）"),
    "动态规划（入门/背包）"
  );
  assert.equal(cleanPlanTitle("分享｜【算法题单】单调栈"), "单调栈");
});

const SAMPLE = `## 前言

开篇介绍。

## 一、入门 DP

### §1.1 爬楼梯

[讲解](https://leetcode.cn/problems/climbing-stairs/solution/x/)

- [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
- [746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/) 约 1500

### §1.2 打家劫舍

#### 答疑

**问**：为什么？

\`\`\`py
# 这是代码注释，不是标题
- [1. 两数之和](https://leetcode.cn/problems/two-sum/)
\`\`\`

- [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)

**思维扩展**：

- [2140. 解决智力问题](https://leetcode.cn/problems/solving-questions-with-brainpower/) 1709

### 思考题

章末思考。

## 二、网格图 DP

### §2.1 基础

- [62. 不同路径](https://leetcode.cn/problems/unique-paths/)

## 思考

纯文字章节。

## 关联题单

- [滑动窗口与双指针](https://leetcode.cn/circle/discuss/0viNMK/)
`;

test("parseStudyPlan: 章节层级、分组、代码块、并入说明", () => {
  const plan = parseStudyPlan({
    title: "分享丨【算法题单】动态规划",
    content: SAMPLE,
    src: "https://leetcode.cn/circle/discuss/tXLS3i/",
    updatedAt: "2026-08-17T09:34:24.887732+00:00",
  });

  assert.equal(plan.title, "动态规划");
  assert.equal(plan.last_update, "2026-08-17");
  assert.match(plan.summary ?? "", /开篇介绍/);
  // 前言、关联题单不作为章节
  assert.deepEqual(
    plan.children.map((c) => c.title),
    ["一、入门 DP", "二、网格图 DP", "思考"]
  );

  const [dp, grid, think] = plan.children;
  assert.equal(dp!.id, "s1");
  assert.deepEqual(
    dp!.children.map((c) => [c.id, c.title]),
    [
      ["s1-1", "§1.1 爬楼梯"],
      ["s1-2", "§1.2 打家劫舍"],
    ]
  );

  const [stairs, robber] = dp!.children;
  assert.match(stairs!.summary ?? "", /\[讲解\]/);
  assert.deepEqual(stairs!.problems.map((p) => p.id), ["70", "746"]);

  // 「答疑」小标题与代码块并入说明，代码块内的列表不算题目
  assert.match(robber!.summary ?? "", /#### 答疑/);
  assert.match(robber!.summary ?? "", /# 这是代码注释/);
  assert.deepEqual(robber!.problems.map((p) => p.id), ["198", "2140"]);
  assert.equal(robber!.problems[0]!.group, undefined);
  assert.equal(robber!.problems[1]!.group, "思维扩展");
  assert.doesNotMatch(robber!.summary ?? "", /思维扩展/);

  // 子章节之后的纯文字小节进入 epilogue，而不是章节开头的 summary
  assert.equal(dp!.summary, undefined);
  assert.match(dp!.epilogue ?? "", /#### 思考题\n\n章末思考/);

  assert.equal(grid!.id, "s2");
  assert.equal(think!.problems.length, 0);
  assert.match(think!.summary ?? "", /纯文字章节/);

  assert.equal(countProblems(plan), 5);
});
