import { Quodra } from "./common";

export interface Contest {
  id: string;
  title: string;
  titleSlug: string;
  time: number;
  company: {};

  problemIds: Quodra<string>;
}

export type ContestMap = Record<string, Contest>;
