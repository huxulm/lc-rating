import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { LC_HOST_EN, LC_HOST_ZH } from "@/config/constants";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { useProgressStore } from "@/hooks/useProgress";
import { StudyPlanData } from "@/types";
import Link from "next/link";
import React, { useEffect } from "react";

interface ProblemListProps {
  problems: StudyPlanData.Item[];
}

const ProblemList = React.memo(({ problems }: ProblemListProps) => {
  const linkLanguage = useGlobalSettingsStore((state) => state.linkLanguage);
  const LC_HOST = linkLanguage === "zh" ? LC_HOST_ZH : LC_HOST_EN;

  useEffect(() => {
    // 兼容迁移：以前存储使用的是 problem.title.split(". ")[0] 做 key
    // 现在改成了 problem.id，在首次渲染时将旧记录转移并删掉
    const { getProgress, setProgress, delProgress } = useProgressStore.getState();
    problems.forEach((problem) => {
      const newId = problem.id;
      if (!newId) return;
      const oldId = problem.title.split(". ")[0];
      if (oldId && oldId !== newId) {
        const pProgress = getProgress(oldId);
        if (pProgress && !getProgress(newId)) {
          setProgress(newId, pProgress);
        }
        if (pProgress) {
          delProgress(oldId);
        }
      }
    });
  }, [problems]);

  return (
    <div className="flex flex-col flex-1">
      {problems.map((problem) => {
        const problemId = problem.id;
        const info = ratingInfo(problem.score || 0);
        return (
          <div key={problem.title}>
            <div className="flex flex-row items-center text-pretty justify-between rounded p-1 m-1 bg-muted/50">
              <Link
                href={`${LC_HOST}/problems/${problem.slug.replace(/^\/|\/$/g, "")}`}
                target="_blank"
                className="hover:underline"
              >
                {problem.id + ". " + problem.title}
              </Link>
              <div className="flex flex-row items-center gap-2">
                {problem.score ? (
                  <div className="flex flex-row items-center">
                    <RatingCircle rating={Number(problem.score || 0)} {...info} />
                    <span>{problem.score?.toFixed(0)} </span>
                  </div>
                ) : null}
                {problemId ? <ProgressSelector problemId={problemId} /> : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

ProblemList.displayName = "ProblemList";

export { ProblemList };
