"use client";

import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { LC_HOST_EN, LC_HOST_ZH } from "@/config/constants";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { useOptions } from "@/hooks/useOptions";
import { useProgress, useProgressStore } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import type { StudyPlanData } from "@/types";
import React, { useEffect, useMemo } from "react";
import { Markdown } from "./Markdown";

interface ProblemListProps {
  problems: StudyPlanData.Item[];
}

/** 把连续的同组题目切成若干段，以便渲染组标签（如「思维扩展」） */
function splitGroups(problems: StudyPlanData.Item[]) {
  const groups: { label?: string; items: StudyPlanData.Item[] }[] = [];
  for (const p of problems) {
    const last = groups[groups.length - 1];
    if (last && last.label === p.group) last.items.push(p);
    else groups.push({ label: p.group, items: [p] });
  }
  return groups;
}

const ProblemRow = React.memo(
  ({ problem, host }: { problem: StudyPlanData.Item; host: string }) => {
    const { progress } = useProgress();
    const { getOption } = useOptions();
    const status = progress[problem.id];
    const done = !!status && status !== getOption().key;
    const info = problem.score ? ratingInfo(problem.score) : null;

    return (
      <li
        className={cn(
          "group flex min-w-0 items-center gap-2 rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-border hover:bg-muted/40 sm:gap-3 sm:px-3",
          done && "opacity-60 hover:opacity-100"
        )}
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <a
              href={`${host}/problems/${problem.slug}/`}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "truncate font-medium underline-offset-4 hover:underline",
                done && "line-through decoration-muted-foreground/60"
              )}
              title={`${problem.id}. ${problem.title}`}
            >
              <span className="mr-1.5 tabular-nums text-muted-foreground">
                {problem.id}.
              </span>
              {problem.title}
            </a>
            {problem.isPremium && (
              <span className="shrink-0 rounded border border-amber-500/40 px-1 text-[10px] leading-4 text-amber-600 dark:text-amber-400">
                会员
              </span>
            )}
          </div>
          {problem.note && (
            <Markdown
              inline
              content={problem.note}
              className="mt-0.5 block text-xs leading-relaxed text-muted-foreground"
            />
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {info && problem.score ? (
            <span
              className="flex items-center gap-1 text-sm tabular-nums"
              style={{ color: info.color }}
              title={problem.scoreApprox ? "估计难度分" : "难度分"}
            >
              <RatingCircle rating={problem.score} {...info} />
              {problem.scoreApprox && (
                <span className="text-xs text-muted-foreground">约</span>
              )}
              {problem.score}
            </span>
          ) : null}
          <ProgressSelector problemId={problem.id} />
        </div>
      </li>
    );
  }
);
ProblemRow.displayName = "ProblemRow";

export const ProblemList = React.memo(({ problems }: ProblemListProps) => {
  const linkLanguage = useGlobalSettingsStore((state) => state.linkLanguage);
  const host = linkLanguage === "zh" ? LC_HOST_ZH : LC_HOST_EN;
  const groups = useMemo(() => splitGroups(problems), [problems]);

  useEffect(() => {
    // 兼容迁移：早期进度以 title 中「题号. 」前的部分为 key，现统一为 problem.id
    const { getProgress, setProgress, delProgress } =
      useProgressStore.getState();
    problems.forEach((problem) => {
      const titleSplit = problem.title.split(".");
      if (titleSplit.length > 1) return;
      const oldId = titleSplit[0];
      if (oldId && oldId !== problem.id) {
        const p = getProgress(oldId);
        if (p && !getProgress(problem.id)) setProgress(problem.id, p);
        if (p) delProgress(oldId);
      }
    });
  }, [problems]);

  return (
    <div className="space-y-3">
      {groups.map((g, i) => (
        <div key={`${g.label ?? ""}-${i}`}>
          {g.label && (
            <div className="mb-1 flex items-center gap-2 px-3 pt-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              {g.label}
            </div>
          )}
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-x-4 gap-y-0.5 xl:grid-cols-[repeat(2,minmax(0,1fr))]">
            {g.items.map((p) => (
              <ProblemRow key={`${p.id}-${p.slug}`} problem={p} host={host} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});
ProblemList.displayName = "ProblemList";
