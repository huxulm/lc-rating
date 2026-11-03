/**
 * 灵茶山艾府（0x3F）题单在力扣讨论区的帖子 uuid。
 * key 与前端 `config/constants.ts` 中的 STUDYPLANS 保持一致，
 * 也是 `public/studyplan/<key>.json` 的文件名。
 */
export const PLANS = [
  { key: "sliding_window", uuid: "0viNMK" },
  { key: "binary_search", uuid: "SqopEo" },
  { key: "monotonic_stack", uuid: "9oZFK9" },
  { key: "grid", uuid: "YiXPXW" },
  { key: "bitwise_operations", uuid: "dHn9Vk" },
  { key: "graph", uuid: "01LUak" },
  { key: "dynamic_programming", uuid: "tXLS3i" },
  { key: "data_structure", uuid: "mOr1u6" },
  { key: "math", uuid: "IYT3ss" },
  { key: "greedy", uuid: "g6KTKL" },
  { key: "trees", uuid: "K0n2gO" },
  { key: "string", uuid: "SJFwQI" },
] as const;

export type PlanKey = (typeof PLANS)[number]["key"];

export const discussUrl = (uuid: string) =>
  `https://leetcode.cn/circle/discuss/${uuid}/`;
