import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { Separator } from "@/components/ui/separator";
import { StudyPlanData } from "@/types";
import Link from "next/link";
import React from "react";
import { LC_HOST_ZH, LC_HOST_EN } from "@/config/constants";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";

interface ProblemListProps {
  problems: StudyPlanData.Item[];
}

const ProblemList = React.memo(({ problems }: ProblemListProps) => {
  const { language } = useGlobalSettingsStore();
  const LC_HOST = language === "zh" ? LC_HOST_ZH : LC_HOST_EN;

  return (
    <div className="flex flex-col">
      {problems.map((problem) => {
        const problemId = problem.title.split(". ")[0];
        const info = ratingInfo(problem.score || 0);
        return (
          <div key={problem.title}>
            <Separator />
            <div className="flex flex-row items-center text-pretty justify-between p-1">
              <Link
                href={`${LC_HOST}/problems/${problem.slug}`}
                target="_blank"
                className="hover:underline"
              >
                {problem.title}
              </Link>
              <div className="flex flex-row items-center gap-2">
                {problem.score ? (
                  <div className="flex flex-row items-center">
                    <RatingCircle rating={problem.score} {...info} />
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
