import { Double } from "./common";

export interface Problem {
  id: string;
  title: string;
  titleSlug: string;
  rating: number;
  premium: boolean;
  _hash: string;

  contestId?: string;
  solutionId?: string;
  tagIds: string[];
}

export type ProblemMap = Record<string, Problem>;
