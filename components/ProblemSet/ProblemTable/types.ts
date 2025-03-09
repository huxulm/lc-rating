export type TableCol = {
  contest: {
    id: string;
    time: number;
    title: string;
    titleSlug: string;
    company: object;
  };
  problem: {
    id: string;
    title: string;
    titleSlug: string;
    rating: number;
    premium: boolean;
    _hash: string;
  };
  rating: number;
  tags: string[];
  progress: {
    problemId: string;
  };
  solution: {
    id: string;
    title: string;
    titleSlug: string;
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
