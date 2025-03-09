import type { Contest } from "./contest";
import type { Problem } from "./problem";
import type { Solution } from "./solution";
import type { Tag } from "./tag";

type ProblemOmitId = Omit<Problem, "contestId" | "solutionId" | "tagIds">;
type ContestOmitId = Omit<Contest, "problemIds">;
type SolutionOmitId = Omit<Solution, "problemId">;

export type JoinProblem = ProblemOmitId & {
  contest?: ContestOmitId;
  solution?: SolutionOmitId;
  tags: Tag[];
};
