interface Problem {
  title: string;
  slug: string;
  src: string;
  solution: string | null;
  score: number | null;
  isPremium: boolean;
}

interface Section {
  title: string;
  summary: string;
  isLeaf: boolean;
  children: Section[];
  problems: Problem[];
}

export interface StudyPlan {
  title: string;
  src: string;
  last_update: string;
  children: Section[];
}
