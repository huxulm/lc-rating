import { useEffect, useState, useTransition } from "react";

export type SolutionType = [
  string,
  string,
  string,
  `${number}`,
  string,
  string,
  number
];
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
      .then((result: Solutions) => {
        startTransition(() => {
          setSolutions(result);
        });
      });
  }, []);

  return { solutions, isPending };
}
