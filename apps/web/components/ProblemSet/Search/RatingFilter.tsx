"use client";

import { ratingInfo } from "@/components/common/RatingCircle";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  RATING_MAX,
  RATING_MIN,
  isRatingFiltered,
  useProblemFilters,
} from "@/hooks/useProblemFilters";
import { cn } from "@/lib/utils";
import { Gauge } from "lucide-react";
import { useEffect, useState } from "react";
import { FilterButton, PanelFooter } from "./FilterButton";

const PRESETS: [number, number][] = [
  [1000, 1200],
  [1200, 1400],
  [1400, 1600],
  [1600, 1900],
  [1900, 2100],
  [2100, 2400],
  [2400, 3000],
  [3000, RATING_MAX],
];

export const formatRating = ([min, max]: [number, number]) =>
  max >= RATING_MAX ? `≥ ${min}` : min <= RATING_MIN ? `< ${max}` : `${min}–${max}`;

export function RatingFilter() {
  const rating = useProblemFilters((s) => s.rating);
  const includeUnrated = useProblemFilters((s) => s.includeUnrated);
  const set = useProblemFilters((s) => s.set);

  // 滑块拖动时先更新本地值，松手后再提交，避免频繁重算整张表
  const [draft, setDraft] = useState<[number, number]>(rating);
  useEffect(() => setDraft(rating), [rating]);

  const ranged = rating[0] !== RATING_MIN || rating[1] !== RATING_MAX;
  const summary = isRatingFiltered({ rating, includeUnrated })
    ? ranged
      ? formatRating(rating)
      : "排除无分数"
    : undefined;

  const commit = (next: [number, number]) => {
    const lo = Math.max(RATING_MIN, Math.min(next[0], next[1]));
    const hi = Math.min(RATING_MAX, Math.max(next[0], next[1]));
    set({ rating: [lo, hi] });
  };

  return (
    <FilterButton
      label="难度分"
      icon={<Gauge />}
      summary={summary}
      contentClassName="w-[22rem]"
    >
      <div className="space-y-4 p-3">
        <div className="grid grid-cols-4 gap-1.5">
          {PRESETS.map(([lo, hi]) => {
            const selected = rating[0] === lo && rating[1] === hi;
            const color = ratingInfo(lo).color;
            return (
              <button
                key={lo}
                type="button"
                onClick={() =>
                  set({ rating: selected ? [RATING_MIN, RATING_MAX] : [lo, hi] })
                }
                className={cn(
                  "rounded-md border px-1 py-1.5 text-xs whitespace-nowrap tabular-nums transition-colors",
                  selected ? "font-medium" : "hover:bg-accent"
                )}
                style={
                  selected
                    ? { borderColor: color, backgroundColor: `${color}22`, color }
                    : { color }
                }
              >
                {hi >= RATING_MAX ? `${lo}+` : `${lo}–${hi}`}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <Slider
            value={draft}
            min={RATING_MIN}
            max={RATING_MAX}
            step={10}
            minStepsBetweenThumbs={5}
            onValueChange={(v) => setDraft([v[0]!, v[1]!])}
            onValueCommit={(v) => commit([v[0]!, v[1]!])}
          />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <RangeInput
              value={draft[0]}
              onCommit={(v) => commit([v, draft[1]])}
            />
            <span>至</span>
            <RangeInput
              value={draft[1]}
              onCommit={(v) => commit([draft[0], v])}
            />
            <span className="ml-auto">
              {draft[1] >= RATING_MAX ? "上限不限" : "左闭右开"}
            </span>
          </div>
        </div>

        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox
            checked={includeUnrated}
            onCheckedChange={(v) => set({ includeUnrated: v === true })}
          />
          包含没有难度分的题目
        </label>
      </div>
      <PanelFooter
        disabled={!summary}
        onClear={() =>
          set({ rating: [RATING_MIN, RATING_MAX], includeUnrated: true })
        }
      >
        难度分来自周赛数据，非周赛题通常没有分数
      </PanelFooter>
    </FilterButton>
  );
}

function RangeInput({
  value,
  onCommit,
}: {
  value: number;
  onCommit: (v: number) => void;
}) {
  const [text, setText] = useState(String(value));
  useEffect(() => setText(String(value)), [value]);
  const submit = () => {
    const n = parseInt(text, 10);
    if (Number.isNaN(n)) setText(String(value));
    else onCommit(n);
  };
  return (
    <input
      inputMode="numeric"
      value={text}
      onChange={(e) => setText(e.target.value.replace(/\D/g, ""))}
      onBlur={submit}
      onKeyDown={(e) => e.key === "Enter" && submit()}
      className="h-7 w-16 rounded-md border bg-background text-center text-xs text-foreground tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    />
  );
}
