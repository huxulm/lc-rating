import { Quodra } from "./common";

export interface Contest {
  id: string;
  title: string;
  titleSlug: string;
  time: number;

  problemIds: Quodra<string>;
}

export type ContestMap = Record<string, Contest>;
