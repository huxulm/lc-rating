"use client";
import { PageContainer, PageHeader } from "@/components/common/PageHeader";
import { LC_HOST_EN, LC_HOST_ZH } from "@/config/constants";
import { useContests } from "@/hooks/useContests";
import { useProblems } from "@/hooks/useProblems";
import { useSolutions } from "@/hooks/useSolutions";
import { useTags } from "@/hooks/useTags";
import { isTruthy } from "@/types/common";
import { useOptions } from "@/hooks/useOptions";
import { useProblemFilters } from "@/hooks/useProblemFilters";
import { useProgress } from "@/hooks/useProgress";
import { useMemo } from "react";
import { ProblemsTable } from "./ProblemTable";
import { TableCol } from "./ProblemTable/types";
import { Search, applyProblemFilters } from "./Search";

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

  const tableData: TableCol[] = useMemo(() => {
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
  }, [isPending]);

  // 筛选条件实时生效（两千多题的过滤只需几毫秒，无需防抖）
  const filters = useProblemFilters();
  const keyword = filters.keyword;
  const { progress } = useProgress();
  const todoKey = useOptions().getOption().key;

  const searchedData = useMemo(
    () =>
      applyProblemFilters(tableData, { ...filters, keyword }, progress, todoKey),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      tableData,
      keyword,
      filters.fuzzy,
      filters.rating,
      filters.includeUnrated,
      filters.tags,
      filters.tagMode,
      filters.progress,
      filters.premium,
      progress,
      todoKey,
    ]
  );

  return (
    <PageContainer>
      <PageHeader
        title="题库"
        description="按题号、标题、难度分、算法标签和完成进度查找题目。"
      />
      <div className="rounded-xl border bg-card p-4 shadow-xs">
        <Search data={tableData} resultCount={searchedData.length} />
      </div>
      <ProblemsTable tableData={searchedData} isPending={isPending} />
    </PageContainer>
  );
}

export default ProblemSet;
