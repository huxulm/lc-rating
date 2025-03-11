import { JoinProblem } from "@/types";
import { isTruthy } from "@/types/common";
import { useMemo } from "react";
import { useContests } from "./useContests";
import { useProblems } from "./useProblems";
import { useSolutions } from "./useSolutions";
import { useTags } from "./useTags";

export function useJoinProblems() {
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

  const joinProblem: JoinProblem[] = useMemo(() => {
    return Object.values(problemMap).map((problem) => {
      return {
        id: problem.id,
        _hash: problem._hash,
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
  }, [problemMap && contestMap && tagMap && solutionMap]);

  return {
    joinProblem,
    isPending:
      problemPending || contestPending || tagPending || solutionPending,
    errors: { problemError, contestError, tagError, solutionError },
  };
}
