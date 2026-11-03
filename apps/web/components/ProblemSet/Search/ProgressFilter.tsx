"use client";

import { useOptions } from "@/hooks/useOptions";
import { useProblemFilters, type PremiumFilter } from "@/hooks/useProblemFilters";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { Check, CircleDashed, Crown } from "lucide-react";
import { useMemo } from "react";
import type { TableCol } from "../ProblemTable/types";
import { FilterButton, PanelFooter } from "./FilterButton";

export function ProgressFilter({ data }: { data: TableCol[] }) {
  const selected = useProblemFilters((s) => s.progress);
  const set = useProblemFilters((s) => s.set);
  const { optionKeys, getOption } = useOptions();
  const { progress } = useProgress();
  const todoKey = getOption().key;

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const row of data) {
      const p = progress[row.progress.problemId] || todoKey;
      m.set(p, (m.get(p) ?? 0) + 1);
    }
    return m;
  }, [data, progress, todoKey]);

  const toggle = (key: string) =>
    set({
      progress: selected.includes(key)
        ? selected.filter((k) => k !== key)
        : [...selected, key],
    });

  const summary =
    selected.length === 0
      ? undefined
      : selected.length === 1
        ? getOption(selected[0]).label || "未开始"
        : `${selected.length} 项`;

  return (
    <FilterButton
      label="进度"
      icon={<CircleDashed />}
      summary={summary}
      contentClassName="w-60"
    >
      <div className="p-1">
        {optionKeys.map((key) => {
          const option = getOption(key);
          const checked = selected.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
            >
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: option.color }}
              />
              <span className="flex-1 truncate text-left">
                {option.label || "未开始"}
              </span>
              <span className="text-xs tabular-nums text-muted-foreground">
                {counts.get(key) ?? 0}
              </span>
              <Check className={cn("size-4", !checked && "opacity-0")} />
            </button>
          );
        })}
      </div>
      <PanelFooter
        disabled={!selected.length}
        onClear={() => set({ progress: [] })}
      >
        可多选
      </PanelFooter>
    </FilterButton>
  );
}

const PREMIUM_OPTIONS: { key: PremiumFilter; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "free", label: "仅免费" },
  { key: "premium", label: "仅会员" },
];

export function PremiumFilterSwitch() {
  const premium = useProblemFilters((s) => s.premium);
  const set = useProblemFilters((s) => s.set);
  return (
    <div
      className={cn(
        "inline-flex h-8 items-center gap-0.5 rounded-md border p-0.5 text-sm",
        premium === "all" ? "border-dashed" : "border-brand/50"
      )}
      role="radiogroup"
      aria-label="会员题"
    >
      <Crown className="mx-1.5 size-3.5 text-muted-foreground" />
      {PREMIUM_OPTIONS.map((o) => (
        <button
          key={o.key}
          type="button"
          role="radio"
          aria-checked={premium === o.key}
          onClick={() => set({ premium: o.key })}
          className={cn(
            "h-full rounded px-2 text-xs transition-colors",
            premium === o.key
              ? o.key === "all"
                ? "bg-accent font-medium text-foreground"
                : "bg-brand/15 font-medium text-brand"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
