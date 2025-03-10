export const BASE_PATH = "";
export const LC_HOST_ZH = `https://leetcode.cn`;
export const LC_HOST_EN = `https://leetcode.com`;
export const LC_RATING_GLOBAL_SETTING_KEY = "lc-rating-global-settings";
export const LC_RATING_PROGRESS_KEY = "lc-rating-progress";
export const LC_RATING_PROGRESS_KEY_PREFIX = "lc-rating-zen-progress-";
export const BILIBILI_0X3F_SPACE = {
  url: "https://space.bilibili.com/206214/",
  title: "bilibili@灵茶山艾府",
};

export const ROUTERS = {
  contest: { title: "竞赛列表", href: `${BASE_PATH}/contest` },
  problemset: { title: "题库", href: `${BASE_PATH}/problemset` },
  studyPlans: [
    { title: "滑动窗口", href: `${BASE_PATH}/studyplan/slide-window` },
    { title: "二分查找", href: `${BASE_PATH}/studyplan/binary-search` },
    { title: "单调栈", href: `${BASE_PATH}/studyplan/monotonic_stack` },
    { title: "网格图", href: `${BASE_PATH}/studyplan/grid` },
    { title: "位运算", href: `${BASE_PATH}/studyplan/bitwise-operations` },
    { title: "图论算法", href: `${BASE_PATH}/studyplan/graph` },
    { title: "数据结构", href: `${BASE_PATH}/studyplan/data_structure` },
    { title: "动态规划", href: `${BASE_PATH}/studyplan/dynamic_programming` },
    { title: "数学", href: `${BASE_PATH}/studyplan/math` },
    { title: "贪心", href: `${BASE_PATH}/studyplan/greedy` },
    { title: "树和二叉树", href: `${BASE_PATH}/studyplan/trees` },
    { title: "字符串", href: `${BASE_PATH}/studyplan/string` },
  ],
};

export const STUDYPLANS = {
  "binary-search": "binary_search",
  "bitwise-operations": "bitwise_operations",
  "data-structure": "data_structure",
  "dynamic-programming": "dynamic_programming",
  graph: "graph",
  greedy: "greedy",
  grid: "grid",
  math: "math",
  "monotonic-stack": "monotonic_stack",
  "slide-window": "slide_window",
  string: "string",
  trees: "trees",
};
