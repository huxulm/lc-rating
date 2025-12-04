export interface Solution {
  id: string;
  title: string;
  titleSlug: string;
  time: number;

  problemId: string;
}

export type SolutionMap = Record<string, Solution | undefined>;
