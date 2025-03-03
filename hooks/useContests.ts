import { useEffect, useState, useTransition } from "react";

type Quadra<T> = [T, T, T, T];

export interface QuestionType {
  question_id: number;
  rating: number;
  title: string;
  title_slug: string;
  _hash: number;
}

export interface Contest {
  ID: number;
  StartTime: number;
  Contest: string;
  TitleSlug: string;
  A: QuestionType;
  B: QuestionType;
  C: QuestionType;
  D: QuestionType;
}

interface ContestType {
  id: number;
  start_time: number;
  title: string;
  title_slug: string;
}

type ContestsResponse = {
  company: {};
  contest: ContestType;
  questions: Quadra<QuestionType>;
}[];

function mapContests(data: ContestsResponse): Contest[] {
  return data.map(({ contest, questions }) => {
    return {
      ID: contest.id,
      StartTime: contest.start_time,
      Contest: contest.title,
      TitleSlug: contest.title_slug,
      A: questions[0],
      B: questions[1],
      C: questions[2],
      D: questions[3],
    };
  });
}

export function useContests() {
  const [isPending, startTransition] = useTransition();
  const [contests, setContests] = useState<Contest[]>([]);

  useEffect(() => {
    fetch(
      "/lc-rating/contest.json?t=" + (new Date().getTime() / 100000).toFixed(0)
    )
      .then((res) => res.json())
      .then((result: ContestsResponse) => {
        startTransition(() => {
          setContests(mapContests(result));
        });
      });
  }, []);

  return { contests, isPending };
}
