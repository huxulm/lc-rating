"use client";
import { PageContainer, PageHeader } from "@/components/common/PageHeader";
import { LC_HOST_EN, LC_HOST_ZH } from "@/config/constants";
import { useContests } from "@/hooks/useContests";
import { useProblems } from "@/hooks/useProblems";
import { useSolutions } from "@/hooks/useSolutions";
import { useTags } from "@/hooks/useTags";
import { Problem, Solution } from "@/types";
import { Quodra } from "@/types/common";
import { useEffect, useMemo } from "react";
import { ProblemsTable } from "./ContestTable";
import { TableCol } from "./ContestTable/types";

function ProblemSet() {
  const {
    problemMap = {},
    isPending: problemPending,
    error: problemError,
  } = useProblems();
  const {
    contestMap = {},
    isPending: contestPending,
    error: contestError,
  } = useContests();
  const { tagMap = {}, isPending: tagPending, error: tagError } = useTags();
  const {
    solutionMap = {},
    isPending: solutionPending,
    error: solutionError,
  } = useSolutions();

  const isPending =
    problemPending || contestPending || tagPending || solutionPending;

  useEffect(() => {
    if (problemError) {
      console.error("[ProblemSet] problems Error: ", problemError);
    }
    if (contestError) {
      console.error("[ProblemSet] contests Error: ", contestError);
    }
    if (tagError) {
      console.error("[ProblemSet] tags Error: ", tagError);
    }
    if (solutionError) {
      console.error("[ProblemSet] solutions Error: ", solutionError);
    }
  }, [isPending]);

  const tableData: TableCol[] = useMemo(() => {
    const contests = Object.values(contestMap);

    return contests.map((contest) => {
      const problems = contest.problemIds.map(
        (problemId) => problemMap[problemId]
      ) as Quodra<Problem>;

      const solutions = problems.map((problem) =>
        problem ? solutionMap[problem._hash] : undefined
      ) as Quodra<Solution | undefined>;

      const generate = (index: 0 | 1 | 2 | 3) => {
        const problem = problems[index];
        const solution = solutions[index];

        return {
          problem: {
            id: problem.id,
            title: problem.title,
            link: {
              zh: `${LC_HOST_ZH}/problems/${problem.titleSlug}`,
              en: `${LC_HOST_EN}/problems/${problem.titleSlug}`,
            },
            rating: problem.rating,
            premium: problem.premium,
          },
          solution: solution && {
            id: solution.id,
            title: solution.title,
            link: {
              zh: `${LC_HOST_ZH}/problems/${problem.titleSlug}/solution/${solution.titleSlug}`,
              en: `${LC_HOST_EN}/problems/${problem.titleSlug}/solution/${solution.titleSlug}`,
            },
            time: solution.time || 0,
          },
        };
      };

      return {
        contest: {
          id: contest.id,
          time: contest.time,
          title: contest.title,
          link: {
            zh: `${LC_HOST_ZH}/contest/${contest.titleSlug}`,
            en: `${LC_HOST_EN}/contest/${contest.titleSlug}`,
          },
        },
        Q1: generate(0),
        Q2: generate(1),
        Q3: generate(2),
        Q4: generate(3),
      };
    });
  }, [isPending]);

  return (
    <PageContainer>
      <PageHeader
        title="竞赛题目"
        description="按场次浏览力扣周赛 / 双周赛题目，颜色与圆环代表难度分，🎈 链接到 0x3F 题解。"
      />
      <ProblemsTable tableData={tableData} isPending={isPending} />
    </PageContainer>
  );
}

export default ProblemSet;
