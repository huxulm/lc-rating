import { LC_RATING_PROGRESS_KEY } from "@/config/constants";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OptionKey } from "./useOptions";

interface ProgressStore {
  progress: Record<string, OptionKey>;
  setProgress: (id: string, value: OptionKey) => void;
  delProgress: (id: string) => void;
  setAllProgress: (progress: Record<string, OptionKey>) => void;
  getProgress: (id: string) => OptionKey | undefined;
}

export const useProgressStore = create<ProgressStore>()(
  shared(
    persist(
      (set, get) => ({
        progress: {},

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
          set((state) => ({
            progress: {
              ...state.progress,
              ...progress,
            },
          }));
        },

        getProgress: (id) => get().progress[id],
      }),
      {
        name: LC_RATING_PROGRESS_KEY,
      }
    )
  )
);

export const useProgress = (id: string) => {
  const progress = useProgressStore((state) => state.progress[id]);
  const setProgress = useProgressStore((state) => state.setProgress);
  const delProgress = useProgressStore((state) => state.delProgress);

  return {
    progress,
    setProgress: (value: OptionKey) => setProgress(id, value),
    delProgress: () => delProgress(id),
  };
};
