import type { SolutionMap } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/utils/fetch";

export function useSolutions() {
  const {
    data: solutionMap,
    isPending,
    error,
  } = useQuery<SolutionMap>({
    queryKey: ["solutions"],
    queryFn: () =>
      fetchApi(
        "/data/solutions.json?t=" +
          (new Date().getTime() / 100000).toFixed(0)
      ).then((res) => res.json()),
  });

  return { solutionMap, isPending, error };
}
