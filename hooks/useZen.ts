"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

// Question Data Type
interface ConstQuestion {
  cont_title: string;
  cont_title_slug: string;
  title: string;
  title_slug: string;
  question_id: string;
  paid_only: boolean;
  rating: number;
  _hash: number;
}

export function useZen() {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: [],
    queryFn: () =>
      fetch("/lc-rating/zenk.json")
        .then((res) => res.json())
        .then((result: ConstQuestion[]) => {
          return result;
        }),
    refetchOnWindowFocus: false,
  });

  return { zen: data, isPending: isFetching };
}
