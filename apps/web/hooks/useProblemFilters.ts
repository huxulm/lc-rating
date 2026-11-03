import { STORAGE_VERSION } from "@/config/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const RATING_MIN = 1000;
export const RATING_MAX = 4000;

export type TagMode = "any" | "all";
export type PremiumFilter = "all" | "free" | "premium";

export interface ProblemFilters {
  keyword: string;
  fuzzy: boolean;
  /** 难度分区间 [min, max)；等于 [RATING_MIN, RATING_MAX] 时表示不限 */
  rating: [number, number];
  /** 是否包含没有难度分的题目 */
  includeUnrated: boolean;
  tags: string[];
  tagMode: TagMode;
  progress: string[];
  premium: PremiumFilter;
}

export const DEFAULT_FILTERS: ProblemFilters = {
  keyword: "",
  fuzzy: false,
  rating: [RATING_MIN, RATING_MAX],
  includeUnrated: true,
  tags: [],
  tagMode: "any",
  progress: [],
  premium: "all",
};

interface FilterStore extends ProblemFilters {
  set: (patch: Partial<ProblemFilters>) => void;
  reset: () => void;
}

/** 题库筛选条件；除关键词外持久化到 localStorage，刷新后保留 */
export const useProblemFilters = create<FilterStore>()(
  persist(
    (set) => ({
      ...DEFAULT_FILTERS,
      set: (patch) => set(patch),
      reset: () => set({ ...DEFAULT_FILTERS }),
    }),
    {
      name: "lc-rating-problemset-filters",
      version: STORAGE_VERSION,
      partialize: (s): Omit<ProblemFilters, "keyword"> => ({
        fuzzy: s.fuzzy,
        rating: s.rating,
        includeUnrated: s.includeUnrated,
        tags: s.tags,
        tagMode: s.tagMode,
        progress: s.progress,
        premium: s.premium,
      }),
    }
  )
);

export const isRatingFiltered = (f: Pick<ProblemFilters, "rating" | "includeUnrated">) =>
  f.rating[0] !== RATING_MIN || f.rating[1] !== RATING_MAX || !f.includeUnrated;

export const countActiveFilters = (f: ProblemFilters) =>
  Number(isRatingFiltered(f)) +
  Number(f.tags.length > 0) +
  Number(f.progress.length > 0) +
  Number(f.premium !== "all");
