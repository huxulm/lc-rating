"use client";

import { useProblemFilters } from "@/hooks/useProblemFilters";
import { cn } from "@/lib/utils";
import { Search, Sparkles, X } from "lucide-react";
import { useEffect, useRef } from "react";

const isTypingTarget = (el: EventTarget | null) =>
  el instanceof HTMLElement &&
  (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName));

export function SearchInput() {
  const keyword = useProblemFilters((s) => s.keyword);
  const fuzzy = useProblemFilters((s) => s.fuzzy);
  const set = useProblemFilters((s) => s.set);
  const inputRef = useRef<HTMLInputElement>(null);

  // 按「/」快速聚焦搜索框
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && !isTypingTarget(e.target)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative flex-1">
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        ref={inputRef}
        type="search"
        value={keyword}
        onChange={(e) => set({ keyword: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            set({ keyword: "" });
            e.currentTarget.blur();
          }
        }}
        placeholder="搜索题号、题目、竞赛、题解或标签，空格分隔多个关键词"
        className={cn(
          "h-10 w-full rounded-lg border bg-background pr-36 pl-9 text-sm shadow-xs outline-none transition-[box-shadow,border-color]",
          "placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "[&::-webkit-search-cancel-button]:hidden"
        )}
      />
      <div className="absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center gap-1">
        {keyword && (
          <button
            type="button"
            onClick={() => {
              set({ keyword: "" });
              inputRef.current?.focus();
            }}
            className="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label="清空搜索"
          >
            <X className="size-3.5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => set({ fuzzy: !fuzzy })}
          aria-pressed={fuzzy}
          title="模糊搜索：容忍错别字，按相似度排序"
          className={cn(
            "inline-flex h-7 items-center gap-1 rounded-md px-2 text-xs transition-colors",
            fuzzy
              ? "bg-brand/15 text-brand"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          )}
        >
          <Sparkles className="size-3.5" />
          模糊
        </button>
        <kbd className="hidden h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
          /
        </kbd>
      </div>
    </div>
  );
}
