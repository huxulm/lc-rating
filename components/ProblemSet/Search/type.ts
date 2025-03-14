import { TableCol } from "../ProblemTable/types";

export type FilterFn = (item: TableCol) => number;
export type ResetFn = () => void;
