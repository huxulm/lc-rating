import { OptionKey } from "@/hooks/useOptions";

export type Progress = Record<string, OptionKey>;

export interface ProgressStoreState {
  progress: Progress;
}

interface ProgressStoreActions {
  getProgress: (id: string) => OptionKey | undefined;
  setProgress: (id: string, value: OptionKey) => void;
  delProgress: (id: string) => void;
  setAllProgress: (progress: Record<string, OptionKey>) => void;
}

export type ProgressStore = ProgressStoreState & ProgressStoreActions;
