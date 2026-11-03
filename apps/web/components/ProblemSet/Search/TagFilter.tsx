"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { useProblemFilters, type TagMode } from "@/hooks/useProblemFilters";
import { useTags } from "@/hooks/useTags";
import { cn } from "@/lib/utils";
import { Check, Tags } from "lucide-react";
import { useMemo } from "react";
import type { TableCol } from "../ProblemTable/types";
import { FilterButton, PanelFooter } from "./FilterButton";

export function useTagLabel() {
  const isZh = useGlobalSettingsStore((s) => s.tagLanguage) === "zh";
  const { tagMap = {} } = useTags();
  return (id: string) => {
    const tag = tagMap[id];
    return tag ? (isZh ? tag.zh : tag.en) : id;
  };
}

export function TagFilter({ data }: { data: TableCol[] }) {
  const tags = useProblemFilters((s) => s.tags);
  const tagMode = useProblemFilters((s) => s.tagMode);
  const set = useProblemFilters((s) => s.set);
  const { tagMap = {} } = useTags();
  const label = useTagLabel();

  // 每个标签的题目数，按题量从多到少排序
  const options = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of data) {
      for (const t of row.tags) counts.set(t.id, (counts.get(t.id) ?? 0) + 1);
    }
    return Object.values(tagMap)
      .map((t) => ({ id: t.id, count: counts.get(t.id) ?? 0 }))
      .filter((t) => t.count > 0)
      .sort((a, b) => b.count - a.count);
  }, [data, tagMap]);

  const selected = new Set(tags);
  const toggle = (id: string) =>
    set({
      tags: selected.has(id) ? tags.filter((t) => t !== id) : [...tags, id],
    });

  const summary =
    tags.length === 0
      ? undefined
      : tags.length === 1
        ? label(tags[0]!)
        : `${tags.length} 个`;

  return (
    <FilterButton label="算法标签" icon={<Tags />} summary={summary}>
      <Command
        filter={(value, search) => {
          const tag = tagMap[value];
          const text = tag ? `${tag.zh} ${tag.en}`.toLowerCase() : value;
          return text.includes(search.toLowerCase()) ? 1 : 0;
        }}
      >
        <CommandInput placeholder="搜索标签（中英文均可）" />
        <CommandList className="max-h-72">
          <CommandEmpty>没有匹配的标签</CommandEmpty>
          <CommandGroup>
            {options.map(({ id, count }) => {
              const checked = selected.has(id);
              return (
                <CommandItem
                  key={id}
                  value={id}
                  onSelect={() => toggle(id)}
                  className="gap-2"
                >
                  <span
                    className={cn(
                      "grid size-4 shrink-0 place-items-center rounded-[4px] border",
                      checked
                        ? "border-brand bg-brand text-brand-foreground"
                        : "border-muted-foreground/40"
                    )}
                  >
                    {checked && <Check className="size-3" />}
                  </span>
                  <span className="flex-1 truncate">{label(id)}</span>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {count}
                  </span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </Command>
      <PanelFooter disabled={!tags.length} onClear={() => set({ tags: [] })}>
        <span className="mr-1.5">匹配</span>
        <ModeSwitch value={tagMode} onChange={(m) => set({ tagMode: m })} />
      </PanelFooter>
    </FilterButton>
  );
}

function ModeSwitch({
  value,
  onChange,
}: {
  value: TagMode;
  onChange: (m: TagMode) => void;
}) {
  const items: { key: TagMode; label: string; title: string }[] = [
    { key: "any", label: "任一", title: "包含任意一个所选标签" },
    { key: "all", label: "全部", title: "同时包含所有所选标签" },
  ];
  return (
    <span className="inline-flex rounded-md border p-0.5">
      {items.map((it) => (
        <button
          key={it.key}
          type="button"
          title={it.title}
          onClick={() => onChange(it.key)}
          className={cn(
            "rounded px-2 py-0.5 transition-colors",
            value === it.key
              ? "bg-accent font-medium text-foreground"
              : "hover:text-foreground"
          )}
        >
          {it.label}
        </button>
      ))}
    </span>
  );
}
