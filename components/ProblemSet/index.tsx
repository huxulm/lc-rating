"use client";
import { LC_HOST_EN, LC_HOST_ZH } from "@/config/constants";
import { useContests } from "@/hooks/useContests";
import { useProblems } from "@/hooks/useProblems";
import { useSolutions } from "@/hooks/useSolutions";
import { useTags } from "@/hooks/useTags";
import { isTruthy } from "@/types/common";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProblemsTable } from "./ProblemTable";
import { TableCol } from "./ProblemTable/types";
import { FilterFn, Search } from "./Search";

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
    const joinProblems = Object.values(problemMap).map((problem) => {
      return {
        id: problem.id,
        title: problem.title,
        rating: problem.rating,
        titleSlug: problem.titleSlug,
        premium: problem.premium,
        contest:
          problem.contestId !== undefined
            ? contestMap[problem?.contestId]
            : undefined,
        tags: problem.tagIds.map((tagId) => tagMap[tagId]).filter(isTruthy),
        solution: solutionMap[problem._hash],
      };
    });
    return joinProblems.map((problem) => {
      return {
        contest: {
          id: problem.contest?.id || "",
          time: problem.contest?.time || 0,
          title: problem.contest?.title || "",
          link: {
            zh: problem.contest
              ? `${LC_HOST_ZH}/contest/${problem.contest.titleSlug}`
              : "",
            en: problem.contest
              ? `${LC_HOST_EN}/contest/${problem.contest.titleSlug}`
              : "",
          },
        },
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
        rating: problem.rating,
        tags: problem.tags.map((tag) => ({
          id: tag.id,
          label: { zh: tag.zh, en: tag.en },
        })),
        progress: {
          problemId: problem.id,
        },
        solution: {
          id: problem.solution?.id || "",
          title: problem.solution?.title || "",
          link: {
            zh: problem.solution
              ? `${LC_HOST_ZH}/problems/${problem.titleSlug}/solution/${problem.solution.titleSlug}`
              : "",
            en: problem.solution
              ? `${LC_HOST_EN}/problems/${problem.titleSlug}/solution/${problem.solution.titleSlug}`
              : "",
          },
          time: problem.solution?.time || 0,
        },
      };
    });
  }, [problemPending || contestPending || tagPending || solutionPending]);

  const [filterFn, setFilterFn] = useState<FilterFn>(() => () => 1);

  const handleSearch = useCallback((filter: FilterFn) => {
    setFilterFn(() => filter);
  }, []);

  const sortedTableData = useMemo(() => {
    const filtProblems = tableData.reduce(
      (acc: [number, TableCol][], problem: TableCol) => {
        const sort = filterFn(problem);
        if (sort > 0) {
          acc.push([sort, problem]);
        }
        return acc;
      },
      []
    );
    const sortProblems = filtProblems
      .sort((a, b) => b[0] - a[0])
      .map(([_, problem]) => problem);
    return sortProblems;
  }, [tableData, filterFn]);

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="w-4/5 xl:w-3/4 2xl:w-2/3 m-auto">
        <Search onSearch={handleSearch}></Search>
      </div>
      <div className="w-full 2xl:w-2/3  m-auto">
        <ProblemsTable tableData={sortedTableData} isPending={isPending} />
      </div>
    </div>
  );
}

export default ProblemSet;
