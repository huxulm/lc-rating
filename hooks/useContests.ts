import type { ContestMap } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/utils/fetch";

export function useContests() {
  const {
    data: contestMap,
    isPending,
    error,
  } = useQuery<ContestMap>({
    queryKey: ["contests"],
    queryFn: () =>
      fetchApi(
        "/problemset/contests.json?t=" +
          (new Date().getTime() / 100000).toFixed(0)
      ).then((res) => res.json()),
    staleTime: 3600 * 1000, // 1 hour
  });

  return { contestMap, isPending, error };
}
