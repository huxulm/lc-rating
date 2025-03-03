import { useSuspenseQuery } from "@tanstack/react-query";

export type QTag = [string[], string[]];
export type QTags = Record<string, QTag>;

export function useQuestionTags(filter: any) {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: ["qtags"],
    queryFn: () => {
      return fetch(
        "/lc-rating/qtags.json?t=" + (new Date().getTime() / 100000).toFixed(0)
      )
        .then((res) => res.json())
        .then((result: QTags) => {
          return result;
        });
    },
    refetchOnWindowFocus: false,
  });

  return { tags: data, isPending: isFetching };
}
