export const BASE_PATH = process.env.NEXT_PUBLIC_LC_BASE_PATH ?? "/lc-rating";

export const LC_HOST_ZH = `https://leetcode.cn`;
export const LC_HOST_EN = `https://leetcode.com`;

export const LC_RATING_GLOBAL_SETTING_KEY = "lc-rating-global-settings";
export const LC_RATING_PROGRESS_KEY = "lc-rating-progress";
export const LC_RATING_OPTION_KEY = "lc-rating-option";
export const LC_RATING_PROBLEMSET_TABLE_KEY =
  "lc-rating-problemset-table-state";
export const STORAGE_VERSION = 0;

export const BILIBILI_0X3F_SPACE = {
  url: "https://space.bilibili.com/206214/",
  title: "bilibili@灵茶山艾府",
};

export const STUDYPLANS = {
  binary_search: "二分查找",
  bitwise_operations: "位运算",
  data_structure: "数据结构",
  dynamic_programming: "动态规划",
  graph: "图论算法",
  greedy: "贪心",
  grid: "网格图",
  math: "数学",
  monotonic_stack: "单调栈",
  sliding_window: "滑动窗口",
  string: "字符串",
  trees: "树和二叉树",
};

export const ROUTERS = {
  contest: { title: "竞赛", href: `/contest` },
  problemset: { title: "题库", href: `/problemset` },
  studyPlans: {
    title: "题单",
    children: Object.entries(STUDYPLANS).reduce(
      (acc: { title: string; href: string }[], [key, title]) => [
        ...acc,
        { title, href: `/studyplan/${key}` },
      ],
      []
    ),
  },
};
