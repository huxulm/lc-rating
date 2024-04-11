import { useEffect, useState, useTransition } from "react"

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
    const [isPending, startTransition] = useTransition();
    const [zen, setZen] = useState<ConstQuestion[]>([]);
    useEffect(() => {
        fetch("/lc-rating/zenk.json")
      .then((res) => res.json())
      .then((result: ConstQuestion[]) => {
        const loadedLocalStorageData: ProgressData = {};
        result.forEach((item) => {
          loadedLocalStorageData[item.question_id] =
            localStorage.getItem(LC_RATING_PROGRESS_KEY(item.question_id)) ||
            Progress.TODO;
        });

        startTransition(() => {
          if (setLocalStorageProgressData) {
            setLocalStorageProgressData(loadedLocalStorageData);
          }
          setZen(result);
        });
      });
    }, []);
    return { zen, isPending };
}