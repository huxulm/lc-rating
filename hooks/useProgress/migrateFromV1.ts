import { Progress, ProgressStoreState } from "./types_v2";
import { isBrowser } from "@/utils/client";

const LC_RATING_PROGRESS_KEY_PREFIX = "lc-rating-zen-progress-";

export const migrateFromLocalStorage = (): ProgressStoreState => {
  if (!isBrowser()) {
    return { progress: {} };
  }

  try {
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith(LC_RATING_PROGRESS_KEY_PREFIX)
    );

    const progress: Progress = {};

    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      const questID = key.replace(LC_RATING_PROGRESS_KEY_PREFIX, "");
      if (value) {
        progress[questID] = value;
      }
    });
    return { progress };
  } catch (error) {
    console.error("Progress migration from localStorage failed:", error);
    return { progress: {} };
  }
};
