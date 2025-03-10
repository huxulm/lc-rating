import type { JoinProblem } from "@/types";

export type FilterFn = (item: JoinProblem) => number;
export type ResetFn = () => void;
