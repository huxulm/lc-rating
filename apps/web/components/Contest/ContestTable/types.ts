export interface Q {
  problem: {
    id: string;
    title: string;
    link: {
      zh: string;
      en: string;
    };
    rating: number;
    premium?: boolean;
  };
  solution?: {
    id: string;
    title: string;
    link: {
      zh: string;
      en: string;
    };
    time: number;
  };
}

export type TableCol = {
  contest: {
    id: string;
    time: number;
    title: string;
    link: {
      zh: string;
      en: string;
    };
    company?: object;
  };
  Q1: Q;
  Q2: Q;
  Q3: Q;
  Q4: Q;
};

export const key2Label: { [K in keyof TableCol]: string } = {
  contest: "比赛",
  Q1: "Q1",
  Q2: "Q2",
  Q3: "Q3",
  Q4: "Q4",
};
