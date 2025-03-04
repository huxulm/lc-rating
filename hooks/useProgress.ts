import useStorage from "@hooks/useStorage";

const getProgressKey = (questID: string) => `lc-rating-zen-progress-${questID}`;

export enum Progress {
  TODO = "TODO",
  WORKING = "WORKING",
  TOO_HARD = "TOO_HARD",
  REVIEW_NEEDED = "REVIEW_NEEDED",
  AC = "AC",
}

function useProgress(questID: string) {
  return useStorage<Progress>(getProgressKey(questID), {
    defaultValue: Progress.TODO,
  });
}

export default useProgress;
