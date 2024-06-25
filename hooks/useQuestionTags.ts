import { useSuspenseQuery } from "@tanstack/react-query";
type Tags = Record<string, any>;

export function useQuestionTags(filter: any) {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: ["qtags"],
    queryFn: () => {
      return fetch(
        "/lc-rating/qtags.json?t=" + (new Date().getTime() / 100000).toFixed(0)
      )
        .then((res) => res.json())
        .then((result: Tags) => {
          return result;
        });
    },
    refetchOnWindowFocus: false,
  });

  return { tags: data, isPending: isFetching };
}
