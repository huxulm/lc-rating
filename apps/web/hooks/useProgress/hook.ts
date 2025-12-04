import { LC_RATING_PROGRESS_KEY, STORAGE_VERSION } from "@/config/constants";
import { OptionKey } from "@/hooks/useOptions/types_v2";
import { progressToLTS } from "@/migrate/toLatest";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { migrateFromLocalStorage } from "./migrateFromV1";
import { ProgressStore, ProgressStoreState } from "./types_v2";

const persistOption: PersistOptions<ProgressStore, ProgressStoreState> = {
  name: LC_RATING_PROGRESS_KEY,
  version: STORAGE_VERSION,
  migrate: progressToLTS,
};

const sharedOption = {
  name: LC_RATING_PROGRESS_KEY,
};

export const useProgressStore = create<ProgressStore>()(
  shared(
    persist(
      (set, get) => ({
        ...migrateFromLocalStorage(),

        setProgress: (id, value) =>
          set((state) => ({
            progress: {
              ...state.progress,
              [id]: value,
            },
          })),

        delProgress: (id) =>
          set((state) => {
            const progress = { ...state.progress };
            delete progress[id];
            return {
              progress,
            };
          }),

        setAllProgress: (progress: Record<string, OptionKey>) => {
          set((state) => {
            return {
              progress: {
                ...state.progress,
                ...progress,
              },
            };
          });
        },

        getProgress: (id) => get().progress[id],
      }),
      persistOption
    ),
    sharedOption
  )
);

export const useProgress = () => {
  const progress = useProgressStore((state) => state.progress);
  const setProgress = useProgressStore((state) => state.setProgress);
  const delProgress = useProgressStore((state) => state.delProgress);

  return {
    progress,
    setProgress,
    delProgress,
  };
};
