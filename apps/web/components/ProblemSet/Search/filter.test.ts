import assert from "node:assert/strict";
import { test } from "node:test";
import { DEFAULT_FILTERS, type ProblemFilters } from "../../../hooks/useProblemFilters";
import type { TableCol } from "../ProblemTable/types";
import { applyProblemFilters } from "./filter";

const row = (
  id: string,
  title: string,
  rating: number,
  tags: string[] = [],
  premium = false
): TableCol => ({
  contest: { id: "", time: 0, title: "第 1 场周赛", link: { zh: "", en: "" } },
  problem: { id, title, link: { zh: "", en: "" }, rating, premium },
  rating,
  tags: tags.map((t) => ({ id: t, label: { zh: t, en: t } })),
  progress: { problemId: id },
  solution: { id: "", title: "", link: { zh: "", en: "" }, time: 0 },
});

const rows = [
  row("1", "两数之和", 1200, ["数组"]),
  row("70", "爬楼梯", 0, ["动态规划"]),
  row("746", "使用最小花费爬楼梯", 1500, ["动态规划", "数组"], true),
  row("11", "盛最多水的容器", 1700, ["数组"]),
  row("2100", "适合打劫银行的日子", 2100),
];

const run = (patch: Partial<ProblemFilters>, progress: Record<string, string> = {}) =>
  applyProblemFilters(rows, { ...DEFAULT_FILTERS, ...patch }, progress, "TODO").map(
    (r) => r.problem.id
  );

test("关键词：多个关键词 AND，题号精确命中排最前", () => {
  assert.deepEqual(run({ keyword: "爬楼梯" }), ["70", "746"]);
  assert.deepEqual(run({ keyword: "爬楼梯 花费" }), ["746"]);
  assert.deepEqual(run({ keyword: "11" })[0], "11");
  assert.deepEqual(run({ keyword: "#70" }), ["70"]);
  assert.deepEqual(run({ keyword: "不存在的题" }), []);
});

test("模糊搜索：容忍错别字", () => {
  assert.deepEqual(run({ keyword: "爬漏梯" }), []);
  assert.ok(run({ keyword: "爬漏梯", fuzzy: true }).includes("70"));
});

test("难度分区间为左闭右开，可排除无分数题目", () => {
  assert.deepEqual(run({ rating: [1400, 1700] }), ["70", "746"]);
  assert.deepEqual(run({ rating: [1400, 1700], includeUnrated: false }), ["746"]);
  assert.deepEqual(run({ includeUnrated: false }), ["1", "746", "11", "2100"]);
});

test("标签：任一 / 全部", () => {
  assert.deepEqual(run({ tags: ["动态规划", "数组"] }), ["1", "70", "746", "11"]);
  assert.deepEqual(run({ tags: ["动态规划", "数组"], tagMode: "all" }), ["746"]);
});

test("进度与会员题", () => {
  assert.deepEqual(run({ progress: ["AC"] }, { "70": "AC" }), ["70"]);
  assert.deepEqual(run({ progress: ["TODO"] }, { "70": "AC" }), ["1", "746", "11", "2100"]);
  assert.deepEqual(run({ premium: "premium" }), ["746"]);
  assert.ok(!run({ premium: "free" }).includes("746"));
});
