"use client";
import { useEffect, useState, useTransition } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

// Question Data Type
type ConstQuestion = {
  cont_title: string;
  cont_title_slug: string;
  title: string;
  title_slug: string;
  question_id: string;
  paid_only: boolean;
  rating: number;
  _hash: number;
};

const LC_RATING_PROGRESS_KEY = (questionID: string) =>
  `lc-rating-zen-progress-${questionID}`;
const LC_RATING_ZEN_LAST_USED_FILTER_KEY = `lc-rating-zen-last-used-filter`;

// Progress Related
type ProgressData = Record<string, string>;

enum Progress {
  TODO = "TODO",
  WORKING = "WORKING",
  TOO_HARD = "TOO_HARD",
  REVIEW_NEEDED = "REVIEW_NEEDED",
  AC = "AC",
}

export function useZen(setLocalStorageProgressData: any) {
  const { data, isFetching } = useSuspenseQuery({
    queryKey: [],
    queryFn: () =>
      fetch("/lc-rating/zenk.json")
        .then((res) => res.json())
        .then((result: ConstQuestion[]) => {
          return result;
        }),
  });
  useEffect(() => {
    const loadedLocalStorageData: ProgressData = {};
    data.forEach((item) => {
      loadedLocalStorageData[item.question_id] =
        localStorage.getItem(LC_RATING_PROGRESS_KEY(item.question_id)) ||
        Progress.TODO;
    });
    if (setLocalStorageProgressData) {
      setLocalStorageProgressData(loadedLocalStorageData);
    }
  }, [data]);
  return { zen: data, isPending: isFetching };
}
