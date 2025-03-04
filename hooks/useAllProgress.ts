import { useState, useEffect } from "react";

const getProgressKey = (questID: string) => `lc-rating-zen-progress-${questID}`;

export enum Progress {
  TODO = "TODO",
  WORKING = "WORKING",
  TOO_HARD = "TOO_HARD",
  REVIEW_NEEDED = "REVIEW_NEEDED",
  AC = "AC",
}

type AllProgressType = Record<string, Progress>;

function useAllProgress(): [
  AllProgressType,
  (newProgress: AllProgressType) => void,
  (questID: string, progress: Progress) => void,
  (questID: string) => void
] {
  const [allProgress, setAllProgress] = useState<AllProgressType>({});

  if (typeof window === "undefined") {
    return [allProgress, () => {}, () => {}, () => {}];
  }

  const getAllProgressKeys = () => {
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith("lc-rating-zen-progress-")
    );
    return keys;
  };

  const fetchAllProgress = () => {
    const keys = getAllProgressKeys();
    const newProgressMap: AllProgressType = {};
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      const questID = key.replace("lc-rating-zen-progress-", "");
      if (value) {
        newProgressMap[questID] = value as Progress;
      }
    });
    setAllProgress(newProgressMap);
  };

  useEffect(() => {
    fetchAllProgress();
  }, []);

  const set = (newProgress: AllProgressType) => {
    Object.entries(newProgress).forEach(([questID, progress]) => {
      const key = getProgressKey(questID);
      localStorage.setItem(key, progress);
    });

    setAllProgress(newProgress);
  };

  const updateProgress = (questID: string, progress: Progress) => {
    const key = getProgressKey(questID);
    localStorage.setItem(key, progress);
    setAllProgress((prev) => ({ ...prev, [questID]: progress }));
  };

  const deleteProgress = (questID: string) => {
    const key = getProgressKey(questID);
    localStorage.removeItem(key);
    setAllProgress((prev) => {
      const { [questID]: _, ...rest } = prev;
      return rest;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key?.startsWith("lc-rating-zen-progress-") &&
        e.storageArea === localStorage
      ) {
        const questID = e.key.replace("lc-rating-zen-progress-", "");
        const newProgress = e.newValue as Progress;
        setAllProgress((prev) => ({ ...prev, [questID]: newProgress }));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return [allProgress, set, updateProgress, deleteProgress];
}

export default useAllProgress;
