"use client";

import { cn } from "@/lib/utils";
import type { StudyPlanData } from "@/types";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Markdown } from "./Markdown";
import { ProblemList } from "./ProblemList";
import type { Stats } from "./useSectionStats";

export function ProgressPill({ stats }: { stats?: Stats }) {
  if (!stats || stats.total === 0) return null;
  const complete = stats.done === stats.total;
  return (
    <span
      className={cn(
        "shrink-0 rounded-full border px-2 py-0.5 text-xs tabular-nums",
        complete
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "text-muted-foreground"
      )}
    >
      {complete ? "✓ " : ""}
      {stats.done}/{stats.total}
    </span>
  );
}

/** 较长的章节说明默认折叠，避免题目列表被大段文字挤到下面 */
function Summary({ content }: { content: string }) {
  const long =
    content.length > 360 || /```|!\[|\n#{2,6} /.test(content);
  const [open, setOpen] = useState(!long);

  return (
    <div className="relative">
      <div
        className={cn(
          "overflow-hidden rounded-lg bg-muted/40 px-4 py-3",
          !open && "max-h-28"
        )}
      >
        <Markdown content={content} />
      </div>
      {!open && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-lg bg-gradient-to-t from-background/95 to-transparent" />
      )}
      {long && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          <ChevronDown
            className={cn("size-3.5 transition-transform", open && "rotate-180")}
          />
          {open ? "收起说明" : "展开说明"}
        </button>
      )}
    </div>
  );
}

interface SectionBlockProps {
  section: StudyPlanData.Section;
  depth: number;
  stats: Map<string, Stats>;
}

export const SectionBlock = React.memo(
  ({ section, depth, stats }: SectionBlockProps) => {
    const Heading = depth === 1 ? "h2" : depth === 2 ? "h3" : "h4";
    const body = (
      <>
        {section.summary && <Summary content={section.summary} />}
        {section.problems.length > 0 && (
          <ProblemList problems={section.problems} />
        )}
        {section.children.length > 0 && (
          <div className={cn(depth === 1 ? "space-y-4" : "space-y-5")}>
            {section.children.map((child) => (
              <SectionBlock
                key={child.id}
                section={child}
                depth={depth + 1}
                stats={stats}
              />
            ))}
          </div>
        )}
        {section.epilogue && <Summary content={section.epilogue} />}
      </>
    );

    const header = (
      <div className="flex items-center justify-between gap-3">
        <Heading
          className={cn(
            "font-semibold tracking-tight",
            depth === 1 && "text-xl",
            depth === 2 && "text-base",
            depth >= 3 && "text-sm text-foreground/90"
          )}
        >
          {section.title}
        </Heading>
        <ProgressPill stats={stats.get(section.id)} />
      </div>
    );

    // 一级章节：大标题 + 分隔线；二级章节：卡片；三级及以下：卡片内带左边线的小节
    if (depth === 1) {
      return (
        <section
          id={section.id}
          data-section
          className="scroll-mt-[calc(var(--navbar-height)+1rem)] space-y-4 border-t pt-8 first:border-t-0 first:pt-0"
        >
          {header}
          {body}
        </section>
      );
    }
    if (depth === 2) {
      return (
        <section
          id={section.id}
          data-section
          className="scroll-mt-[calc(var(--navbar-height)+1rem)] space-y-3 rounded-xl border bg-card p-4 shadow-xs md:p-5"
        >
          {header}
          {body}
        </section>
      );
    }
    return (
      <section
        id={section.id}
        data-section
        className="scroll-mt-[calc(var(--navbar-height)+1rem)] space-y-3 border-l-2 border-brand/40 pl-4"
      >
        {header}
        {body}
      </section>
    );
  }
);
SectionBlock.displayName = "SectionBlock";
