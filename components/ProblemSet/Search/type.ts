import type { JoinProblem } from "@/types";

export type FilterFn = (item: JoinProblem) => boolean;
export type ResetFn = () => void;
