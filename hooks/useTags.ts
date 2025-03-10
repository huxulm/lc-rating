import type { TagMap } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/utils/fetch";

export function useTags() {
  const {
    data: tagMap,
    isPending,
    error,
  } = useQuery<TagMap>({
    queryKey: ["tags"],
    queryFn: () =>
      fetchApi(
        "/problemset/tags.json?t=" + (new Date().getTime() / 100000).toFixed(0)
      ).then((res) => res.json()),
      staleTime: 3600 * 1000, // 1 hour
  });

  return { tagMap, isPending, error };
}
