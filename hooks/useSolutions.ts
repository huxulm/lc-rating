import { useEffect, useState, useTransition } from "react";

type SolutionsResponse = Record<
  string,
  [string, string, string, `${number}`, string, string, number]
>;

export interface SolutionType {
  questTitle: string;
  questSlug: string;
  questId: string;
  solnTitle: string;
  solnSlug: string;
  solnTime: string;
  _hash: number;
}

export type Solutions = Record<string, SolutionType>;

export function useSolutions() {
  // solutions
  const [isPending, startTransition] = useTransition();
  const [solutions, setSolutions] = useState<Solutions>({});

  useEffect(() => {
    fetch(
      "/lc-rating/solutions.json?t=" +
        (new Date().getTime() / 100000).toFixed(0)
    )
      .then((res) => res.json())
      .then((result: SolutionsResponse) => {
        startTransition(() => {
          let solutions: Solutions = {};
          for (let key in result) {
            const [
              solnTitle,
              solnSlug,
              solnTime,
              questId,
              questTitle,
              questSlug,
              _hash,
            ] = result[key];

            solutions[key] = {
              questTitle,
              questSlug,
              questId,
              solnTitle,
              solnSlug,
              solnTime,
              _hash,
            };
          }
          setSolutions(solutions);
        });
      });
  }, []);

  return { solutions, isPending };
}
