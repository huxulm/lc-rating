import { STUDYPLANS } from "@/config/constants";
import {
  ArrowLeftRight,
  Binary,
  Boxes,
  CaseSensitive,
  ChartNoAxesColumnIncreasing,
  Coins,
  Crosshair,
  Grid3x3,
  Sigma,
  Table2,
  TreeDeciduous,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export type StudyPlanKey = keyof typeof STUDYPLANS;

export interface StudyPlanMeta {
  key: StudyPlanKey;
  title: string;
  href: string;
  /** 一句话概括题单涵盖的主题 */
  desc: string;
  icon: LucideIcon;
  /** 图标底色与前景色（Tailwind 类名需完整书写，便于静态提取） */
  tone: string;
}

const meta = (
  key: StudyPlanKey,
  desc: string,
  icon: LucideIcon,
  tone: string
): StudyPlanMeta => ({
  key,
  title: STUDYPLANS[key],
  href: `/studyplan/${key}`,
  desc,
  icon,
  tone,
});

/** 按灵茶山艾府推荐的刷题顺序排列 */
export const STUDY_PLAN_META: StudyPlanMeta[] = [
  meta("sliding_window", "定长 / 不定长窗口 · 双指针", ArrowLeftRight, "bg-sky-500/12 text-sky-600 dark:text-sky-400"),
  meta("binary_search", "二分查找 · 二分答案 · 第 K 小", Crosshair, "bg-indigo-500/12 text-indigo-600 dark:text-indigo-400"),
  meta("monotonic_stack", "矩形面积 · 贡献法 · 最小字典序", ChartNoAxesColumnIncreasing, "bg-violet-500/12 text-violet-600 dark:text-violet-400"),
  meta("grid", "网格 DFS / BFS · 综合应用", Grid3x3, "bg-teal-500/12 text-teal-600 dark:text-teal-400"),
  meta("bitwise_operations", "拆位 · 试填 · 恒等式 · LogTrick", Binary, "bg-slate-500/15 text-slate-600 dark:text-slate-300"),
  meta("graph", "拓扑排序 · 最短路 · 生成树 · 网络流", Waypoints, "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400"),
  meta("dynamic_programming", "背包 · 状态机 · 区间 · 状压 · 数位 · 树形", Table2, "bg-orange-500/12 text-orange-600 dark:text-orange-400"),
  meta("data_structure", "前缀和 · 堆 · 并查集 · 树状数组 · 线段树", Boxes, "bg-blue-500/12 text-blue-600 dark:text-blue-400"),
  meta("math", "数论 · 组合 · 概率期望 · 博弈 · 几何", Sigma, "bg-rose-500/12 text-rose-600 dark:text-rose-400"),
  meta("greedy", "反悔 · 区间 · 字典序 · 构造 · 思维", Coins, "bg-amber-500/15 text-amber-600 dark:text-amber-400"),
  meta("trees", "链表 · 二叉树 · LCA · 回溯", TreeDeciduous, "bg-green-500/12 text-green-600 dark:text-green-400"),
  meta("string", "KMP · Z 函数 · Manacher · 哈希 · AC 自动机", CaseSensitive, "bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-400"),
];
