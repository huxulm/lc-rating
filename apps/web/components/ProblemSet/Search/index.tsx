"use client";

import { useOptions } from "@/hooks/useOptions";
import {
  RATING_MAX,
  RATING_MIN,
  countActiveFilters,
  useProblemFilters,
} from "@/hooks/useProblemFilters";
import { X } from "lucide-react";
import React, { type ReactNode } from "react";
import type { TableCol } from "../ProblemTable/types";
import { PremiumFilterSwitch, ProgressFilter } from "./ProgressFilter";
import { RatingFilter, formatRating } from "./RatingFilter";
import { SearchInput } from "./SearchInput";
import { TagFilter, useTagLabel } from "./TagFilter";

export { applyProblemFilters } from "./filter";

interface SearchProps {
  /** 全部题目（用于统计各标签、进度的题量） */
  data: TableCol[];
  /** 筛选后的题目数 */
  resultCount: number;
}

function Chip({ children, onRemove }: { children: ReactNode; onRemove: () => void }) {
  return (
    <span className="inline-flex h-6 items-center gap-1 rounded-full border bg-muted/50 pr-1 pl-2.5 text-xs">
      {children}
      <button
        type="button"
        onClick={onRemove}
        className="rounded-full p-0.5 text-muted-foreground hover:bg-background hover:text-foreground"
        aria-label="移除该条件"
      >
        <X className="size-3" />
      </button>
    </span>
  );
}

function ActiveFilters() {
  const f = useProblemFilters();
  const label = useTagLabel();
  const { getOption } = useOptions();

  const chips: ReactNode[] = [];
  const ranged = f.rating[0] !== RATING_MIN || f.rating[1] !== RATING_MAX;
  if (ranged)
    chips.push(
      <Chip key="rating" onRemove={() => f.set({ rating: [RATING_MIN, RATING_MAX] })}>
        难度 {formatRating(f.rating)}
      </Chip>
    );
  if (!f.includeUnrated)
    chips.push(
      <Chip key="unrated" onRemove={() => f.set({ includeUnrated: true })}>
        排除无难度分
      </Chip>
    );
  f.tags.forEach((id, i) =>
    chips.push(
      <Chip key={`tag-${id}`} onRemove={() => f.set({ tags: f.tags.filter((t) => t !== id) })}>
        {i > 0 && (
          <span className="text-muted-foreground">
            {f.tagMode === "all" ? "且" : "或"}
          </span>
        )}
        {label(id)}
      </Chip>
    )
  );
  f.progress.forEach((key) => {
    const o = getOption(key);
    chips.push(
      <Chip key={`p-${key}`} onRemove={() => f.set({ progress: f.progress.filter((k) => k !== key) })}>
        <span className="size-2 rounded-full" style={{ backgroundColor: o.color }} />
        {o.label || "未开始"}
      </Chip>
    );
  });
  if (f.premium !== "all")
    chips.push(
      <Chip key="premium" onRemove={() => f.set({ premium: "all" })}>
        {f.premium === "free" ? "仅免费题" : "仅会员题"}
      </Chip>
    );

  if (!chips.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {chips}
      <button
        type="button"
        onClick={() => f.reset()}
        className="ml-1 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        清除全部
      </button>
    </div>
  );
}

const Search = React.memo(({ data, resultCount }: SearchProps) => {
  const activeCount = useProblemFilters(countActiveFilters);
  const hasKeyword = useProblemFilters((s) => s.keyword.trim().length > 0);
  const filtered = activeCount > 0 || hasKeyword;

  return (
    <div className="space-y-3">
      <SearchInput />
      <div className="flex flex-wrap items-center gap-2">
        <RatingFilter />
        <TagFilter data={data} />
        <ProgressFilter data={data} />
        <PremiumFilterSwitch />
        <div className="ml-auto text-sm text-muted-foreground tabular-nums">
          {filtered ? (
            <>
              筛选出 <span className="font-medium text-foreground">{resultCount}</span>
              {" / "}
              {data.length} 题
            </>
          ) : (
            <>共 {data.length} 题</>
          )}
        </div>
      </div>
      <ActiveFilters />
    </div>
  );
});

Search.displayName = "Search";
export { Search };
