export const BASE_PATH = process.env.NEXT_PUBLIC_LC_BASE_PATH ?? "/lc-rating";

export const LC_HOST_ZH = `https://leetcode.cn`;
export const LC_HOST_EN = `https://leetcode.com`;

export const LC_RATING_GLOBAL_SETTING_KEY = "lc-rating-global-settings";
export const LC_RATING_PROGRESS_KEY = "lc-rating-progress";
export const LC_RATING_OPTION_KEY = "lc-rating-option";
export const LC_RATING_AUTH_TOKEN_KEY = "lc-rating-auth-token";
export const LC_RATING_LAST_SYNC_AT_KEY = "lc-rating-last-sync-at";
export const LC_RATING_PROBLEMSET_TABLE_KEY =
  "lc-rating-problemset-table-state";
export const STORAGE_VERSION = 0;

// Auto-detect backend based on deployment domain
const getApiBase = () => {
  if (process.env.NEXT_PUBLIC_API_BASE) {
    return process.env.NEXT_PUBLIC_API_BASE;
  }

  // Server-side: default to prod backend (for huxulm)
  if (typeof window === "undefined") {
    return "https://lc-rating-backend-prod.kuangwinnie.workers.dev";
  }

  // Client-side: detect domain
  const hostname = window.location.hostname;

  // Wenyi's deployment uses default worker
  if (hostname.includes("wnykuang")) {
    return "https://lc-rating-backend.kuangwinnie.workers.dev";
  }

  // Huxulm uses prod worker
  if (hostname.includes("huxulm") || hostname.includes("huxu")) {
    return "https://lc-rating-backend-prod.kuangwinnie.workers.dev";
  }

  // Default to prod worker
  return "https://lc-rating-backend-prod.kuangwinnie.workers.dev";
};

export const API_BASE = getApiBase();

export const BILIBILI_0X3F_SPACE = {
  url: "https://space.bilibili.com/206214/",
  title: "灵茶山艾府(0x3F)@B站",
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
  v2: { title: "👉旧版", href: `/v0` },
};
