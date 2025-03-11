import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { Separator } from "@/components/ui/separator";
import { StudyPlanData } from "@/types";
import React from "react";

interface ProblemListProps {
  problems: StudyPlanData.Item[];
}

const ProblemList = React.memo(({ problems }: ProblemListProps) => {
  return (
    <div className="flex flex-col">
      {problems.map((problem) => {
        const problemId = problem.title.split(". ")[0];
        const info = ratingInfo(problem.score || 0);
        return (
          <div key={problem.title}>
            <Separator />
            <div className="flex flex-row items-center text-pretty justify-between p-1">
              <span>{problem.title}</span>
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
