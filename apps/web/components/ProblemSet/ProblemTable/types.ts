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
  problem: {
    id: string;
    title: string;
    link: {
      zh: string;
      en: string;
    };
    rating: number;
    premium: boolean;
  };
  rating: number;
  tags: {
    id: string;
    label: {
      zh: string;
      en: string;
    };
  }[];
  progress: {
    problemId: string;
  };
  solution: {
    id: string;
    title: string;
    link: {
      zh: string;
      en: string;
    };
    time: number;
  };
};

export const key2Label: { [K in keyof TableCol]: string } = {
  contest: "比赛",
  problem: "题目",
  rating: "难度",
  tags: "算法标签",
  progress: "进度",
  solution: "0x3F 题解",
};
