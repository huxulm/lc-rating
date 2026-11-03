import { useOptions } from "@/hooks/useOptions";
import { useProgress } from "@/hooks/useProgress";
import type { StudyPlanData } from "@/types";
import { useMemo } from "react";

export interface Stats {
  total: number;
  done: number;
}

/** 统计整个题单以及每个章节（含子章节）的完成情况，key 为章节 id，"root" 为全部 */
export function useSectionStats(plan: StudyPlanData.Root | undefined) {
  const { progress } = useProgress();
  const { getOption } = useOptions();
  const todoKey = getOption().key;

  return useMemo(() => {
    const map = new Map<string, Stats>();
    if (!plan) return map;

    const isDone = (id: string) => {
      const p = progress[id];
      return !!p && p !== todoKey;
    };

    const walk = (section: StudyPlanData.Section): Stats => {
      const stats: Stats = {
        total: section.problems.length,
        done: section.problems.filter((p) => isDone(p.id)).length,
      };
      for (const child of section.children) {
        const s = walk(child);
        stats.total += s.total;
        stats.done += s.done;
      }
      map.set(section.id, stats);
      return stats;
    };

    const root: Stats = { total: 0, done: 0 };
    for (const section of plan.children) {
      const s = walk(section);
      root.total += s.total;
      root.done += s.done;
    }
    map.set("root", root);
    return map;
  }, [plan, progress, todoKey]);
}
