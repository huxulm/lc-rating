import type { ProblemMap } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/utils/fetch";

export function useProblems() {
  const {
    data: problemMap,
    isPending,
    error,
  } = useQuery<ProblemMap>({
    queryKey: ["problems"],
    queryFn: () =>
      fetchApi(
        "/problemset/problems.json?t=" +
          (new Date().getTime() / 100000).toFixed(0)
      ).then((res) => res.json()),
      staleTime: 3600 * 1000, // 1 hour
  });

  return { problemMap, isPending, error };
}
