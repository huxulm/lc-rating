import { useEffect, useSyncExternalStore } from "react";
import { ProgressKeyType } from "./useProgressOption";

const storageKeyPrefix = "lc-rating-zen-progress-";
const getStorageKey = (questID: string) => `${storageKeyPrefix}${questID}`;

type QuestProgressType = Record<string, ProgressKeyType>;

const isBrowser = () => typeof window !== "undefined";

const getQuestProgressKeys = () => {
  const keys = Object.keys(localStorage).filter((key) =>
    key.startsWith(storageKeyPrefix)
  );
  return keys;
};

interface StoreType {
  allProgress: QuestProgressType;
  setAllProgress: (newProgress: QuestProgressType) => void;
  updateProgress: (questID: string, progress: ProgressKeyType) => void;
  removeProgress: (questID: string) => void;

  listeners: Set<() => void>;
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => QuestProgressType;
  notifyListeners: () => void;
}

class Store implements StoreType {
  allProgress: QuestProgressType;
  listeners: Set<() => void>;

  constructor() {
    this.allProgress = {};
    this.listeners = new Set();

    if (isBrowser()) {
      const keys = getQuestProgressKeys();
      keys.forEach((key) => {
        const value = localStorage.getItem(key);
        const questID = key.replace(storageKeyPrefix, "");
        if (value) {
          this.allProgress[questID] = value as ProgressKeyType;
        }
      });
    }
  }

  setAllProgress = (newProgress: QuestProgressType) => {
    if (isBrowser()) {
      Object.entries(newProgress).forEach(([questID, progress]) => {
        const key = getStorageKey(questID);
        localStorage.setItem(key, progress);
      });
    }

    this.allProgress = { ...this.allProgress, ...newProgress };
    this.notifyListeners();
  };

  updateProgress = (questID: string, progress: ProgressKeyType) => {
    if (isBrowser()) {
      const key = getStorageKey(questID);
      localStorage.setItem(key, progress);
    }

    this.allProgress = { ...this.allProgress, [questID]: progress };
    this.notifyListeners();
  };

  removeProgress = (questID: string) => {
    if (isBrowser()) {
      const key = getStorageKey(questID);
      localStorage.removeItem(key);
    }

    const { [questID]: _, ...rest } = this.allProgress;
    this.allProgress = rest;
    this.notifyListeners();
  };

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  getSnapshot = () => this.allProgress;

  notifyListeners = () => {
    this.listeners.forEach((listener) => listener());
  };
}

const store = new Store();

function useQuestProgress(): {
  allProgress: QuestProgressType;
  setAllProgress: (newProgress: QuestProgressType) => void;
  updateProgress: (questID: string, progress: ProgressKeyType) => void;
  removeProgress: (questID: string) => void;
} {
  const allProgress = useSyncExternalStore(store.subscribe, store.getSnapshot);

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key?.startsWith(storageKeyPrefix) &&
        e.storageArea === localStorage
      ) {
        const questID = e.key.replace(storageKeyPrefix, "");
        const newProgress = e.newValue as ProgressKeyType;
        if (newProgress) {
          store.updateProgress(questID, newProgress);
        } else {
          store.removeProgress(questID);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return {
    allProgress,
    setAllProgress: store.setAllProgress.bind(store),
    updateProgress: store.updateProgress.bind(store),
    removeProgress: store.removeProgress.bind(store),
  };
}

export default useQuestProgress;
