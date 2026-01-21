import { OptionKey } from "@/hooks/useOptions";

export type Progress = Record<string, OptionKey>;
export type ProgressUpdatedAt = Record<string, number>;

export interface ProgressStoreState {
  progress: Progress;
  progressUpdatedAt: ProgressUpdatedAt;
}

interface ProgressStoreActions {
  getProgress: (id: string) => OptionKey | undefined;
  setProgress: (id: string, value: OptionKey) => void;
  delProgress: (id: string) => void;
  setAllProgress: (
    progress: Record<string, OptionKey>,
    progressUpdatedAt?: ProgressUpdatedAt
  ) => void;
}

export type ProgressStore = ProgressStoreState & ProgressStoreActions;
