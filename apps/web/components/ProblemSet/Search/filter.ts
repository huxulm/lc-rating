import {
  RATING_MAX,
  RATING_MIN,
  type ProblemFilters,
} from "@/hooks/useProblemFilters";
import Fuse from "fuse.js";
import type { TableCol } from "../ProblemTable/types";

const haystack = (row: TableCol) =>
  [
    row.problem.id,
    row.problem.title,
    row.contest?.title,
    row.solution?.title,
    ...row.tags.flatMap((t) => [t.label.zh, t.label.en]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const normalizeId = (kw: string) => kw.replace(/^#/, "").trim().toLowerCase();

/**
 * 关键词匹配，返回按相关度排序后的行：
 * - 精确模式：空格分隔的多个关键词需全部命中（AND）；题号完全相同的排最前，标题包含整串关键词的其次
 * - 模糊模式：Fuse.js 相似度搜索，容忍错别字，按相似度排序
 */
function searchKeyword(
  rows: TableCol[],
  keyword: string,
  fuzzy: boolean
): TableCol[] {
  const kw = keyword.trim().toLowerCase();
  if (!kw) return rows;

  if (fuzzy) {
    const fuse = new Fuse(rows, {
      ignoreLocation: true,
      threshold: 0.4,
      keys: [
        { name: "problem.title", weight: 3 },
        { name: "problem.id", weight: 3 },
        { name: "contest.title", weight: 1 },
        { name: "solution.title", weight: 1 },
        { name: "tags.label.zh", weight: 1 },
        { name: "tags.label.en", weight: 1 },
      ],
    });
    return fuse.search(kw).map((r) => r.item);
  }

  const tokens = kw.split(/\s+/).filter(Boolean);
  const id = normalizeId(kw);
  const scored: { row: TableCol; score: number; order: number }[] = [];
  rows.forEach((row, order) => {
    const text = haystack(row);
    if (!tokens.every((t) => text.includes(normalizeId(t)))) return;
    let score = 0;
    if (row.problem.id.toLowerCase() === id) score = 3;
    else if (row.problem.title.toLowerCase().includes(kw)) score = 2;
    else if (row.problem.title.toLowerCase().includes(tokens[0]!)) score = 1;
    scored.push({ row, score, order });
  });
  scored.sort((a, b) => b.score - a.score || a.order - b.order);
  return scored.map((s) => s.row);
}

export function applyProblemFilters(
  rows: TableCol[],
  f: ProblemFilters,
  progress: Record<string, string | undefined>,
  todoKey: string
): TableCol[] {
  const [min, max] = f.rating;
  const ratingLimited = min !== RATING_MIN || max !== RATING_MAX;
  const tagSet = new Set(f.tags);
  const progressSet = new Set(f.progress);

  const filtered = rows.filter((row) => {
    const rating = row.rating || 0;
    if (!rating) {
      if (!f.includeUnrated) return false;
    } else if (ratingLimited && (rating < min || (max < RATING_MAX && rating >= max))) {
      return false;
    }

    if (tagSet.size) {
      const ids = row.tags.map((t) => t.id);
      const hit =
        f.tagMode === "all"
          ? f.tags.every((t) => ids.includes(t))
          : ids.some((t) => tagSet.has(t));
      if (!hit) return false;
    }

    if (progressSet.size) {
      const p = progress[row.progress.problemId] || todoKey;
      if (!progressSet.has(p)) return false;
    }

    if (f.premium === "free" && row.problem.premium) return false;
    if (f.premium === "premium" && !row.problem.premium) return false;

    return true;
  });

  return searchKeyword(filtered, f.keyword, f.fuzzy);
}
