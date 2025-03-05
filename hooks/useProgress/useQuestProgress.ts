import { useEffect, useState } from "react";
import { ProgressKeyType } from "./useProgressOption";

const getStorageKey = (questID: string) => `lc-rating-zen-progress-${questID}`;

type QuestProgressType = Record<string, ProgressKeyType>;

function useQuestProgress(): [
  QuestProgressType,
  (newProgress: QuestProgressType) => void,
  (questID: string, progress: ProgressKeyType) => void,
  (questID: string) => void
] {
  const [questProgress, setQuestProgress] = useState<QuestProgressType>({});

  if (typeof window === "undefined") {
    return [questProgress, () => {}, () => {}, () => {}];
  }

  const getQuestProgressKeys = () => {
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith("lc-rating-zen-progress-")
    );
    return keys;
  };

  const getQuestProgress = () => {
    const keys = getQuestProgressKeys();
    const newProgressMap: QuestProgressType = {};
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      const questID = key.replace("lc-rating-zen-progress-", "");
      if (value) {
        newProgressMap[questID] = value as ProgressKeyType;
      }
    });
    setQuestProgress(newProgressMap);
  };

  useEffect(() => {
    getQuestProgress();
  }, []);

  const set = (next: QuestProgressType) => {
    Object.entries(next).forEach(([questID, progress]) => {
      const key = getStorageKey(questID);
      localStorage.setItem(key, progress);
    });

    setQuestProgress(next);
  };

  const updateProgress = (questID: string, progress: ProgressKeyType) => {
    const key = getStorageKey(questID);
    localStorage.setItem(key, progress);
    setQuestProgress((prev) => ({ ...prev, [questID]: progress }));
  };

  const deleteProgress = (questID: string) => {
    const key = getStorageKey(questID);
    localStorage.removeItem(key);
    setQuestProgress((prev) => {
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
        const newProgress = e.newValue as ProgressKeyType;
        setQuestProgress((prev) => ({ ...prev, [questID]: newProgress }));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return [questProgress, set, updateProgress, deleteProgress];
}

export default useQuestProgress;
