import { LC_RATING_PROGRESS_KEY_PREFIX } from "@/config/constants";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OptionKey } from "./useOptions";

interface ProgressStore {
  progresses: Record<string, OptionKey>;
  setProgress: (id: string, value: OptionKey) => void;
  getProgress: (id: string) => OptionKey | undefined;
}

export const useProgressStore = create<ProgressStore>()(
  shared(
    persist(
      (set, get) => ({
        progresses: {},

        setProgress: (id, value) =>
          set((state) => ({
            progresses: {
              ...state.progresses,
              [id]: value,
            },
          })),

        getProgress: (id) => get().progresses[id],
      }),
      {
        name: LC_RATING_PROGRESS_KEY_PREFIX,
      }
    )
  )
);

export const useProgress = (id: string) => {
  const progress = useProgressStore((state) => state.progresses[id]);
  const setProgress = useProgressStore((state) => state.setProgress);

  return {
    progress,
    setProgress: (value: OptionKey) => setProgress(id, value),
  };
};
