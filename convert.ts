import type { ContestMap, ProblemMap, SolutionMap, TagMap } from "@/types";
import type { Quodra } from "@/types/common";
import { safeParseJSON } from "@/utils/safeParseJSON";
import { zip } from "@/utils/zip";

import fs from "fs/promises";

type ContestsIn = {
  contest: {
    id: number;
    title: string;
    title_slug: string;
    start_time: number;
    is_ee_exam_contest: null;
  };
  questions: Quodra<{
    question_id: number;
    title: string;
    title_slug: string;
    rating: number;
    _hash: number;
    paid_only: boolean;
  }>;
}[];

type ZenkIn = {
  question_id: number;
  title: string;
  title_slug: string;
  rating: number;
  _hash: number;
  paid_only: boolean;
  cont_title: string;
  cont_title_slug: string;
}[];

type SolutionsIn = Record<
  string,
  [string, string, string, string, string, string, number]
>;

type TagsIn = [number, string, string][];

type Q2Tags = Record<string, [string[], string[]]>;

async function convert() {
  const contestMap: ContestMap = {};
  const problemMap: ProblemMap = {};
  const solutionMap: SolutionMap = {};
  const tagMap: TagMap = {};

  const contestsIn = await fs
    .readFile("raw_data/contest.json", "utf-8")
    .then(safeParseJSON<ContestsIn>);

  const problemsIn = await fs
    .readFile("raw_data/zenk.json", "utf-8")
    .then(safeParseJSON<ZenkIn>);
  const solutionsIn = await fs
    .readFile("raw_data/solutions.json", "utf-8")
    .then(safeParseJSON<SolutionsIn>);
  const tagsIn = await fs
    .readFile("raw_data/tags.json", "utf-8")
    .then(safeParseJSON<TagsIn>);
  const qtagsIn = await fs
    .readFile("raw_data/qtags.json", "utf-8")
    .then(safeParseJSON<Q2Tags>);

  if (!contestsIn || !problemsIn || !solutionsIn || !tagsIn || !qtagsIn) {
    console.error("Error reading files");
    return;
  }

  const p2c: Record<string, number> = {};

  for (const { contest, questions } of contestsIn) {
    const { id, title, title_slug: titleSlug, start_time: time } = contest;
    const problemIds = questions.map((q) => q.question_id);
    contestMap[id] = {
      id: id.toString(),
      title,
      titleSlug,
      time: time * 1000,
      problemIds: problemIds.map((i) => i.toString()) as Quodra<string>,
    };
    problemIds.forEach((p) => (p2c[p] = id));
  }

  for (const [id, en, zh] of tagsIn) {
    tagMap[id] = {
      id: id.toString(),
      zh,
      en,
    };
  }

  const tags = Object.values(tagMap);

  for (const {
    question_id: id,
    title,
    title_slug: titleSlug,
    rating,
    paid_only: premium,
    _hash,
  } of problemsIn) {
    problemMap[id] = {
      id: id.toString(),
      _hash: _hash.toString(),
      title,
      titleSlug,
      rating,
      premium,
      tagIds: zip(...(qtagsIn[_hash] || [[], []])).map(([en, zh]) => {
        return (tags.find((t) => t.en === en)?.id || 0).toString();
      }),
      solutionId: _hash.toString(),
      contestId: p2c[id]?.toString() as string,
    };
  }

  for (const [id, solu] of Object.entries(solutionsIn)) {
    solutionMap[id] = {
      id,
      title: solu[0],
      titleSlug: solu[1],
      time: new Date(solu[2]).getTime(),
      problemId: solu[3],
    };
  }

  await fs.writeFile(
    "public/problemset/contests.json",
    JSON.stringify(contestMap, null, 2)
  );
  await fs.writeFile(
    "public/problemset/problems.json",
    JSON.stringify(problemMap, null, 2)
  );
  await fs.writeFile(
    "public/problemset/solutions.json",
    JSON.stringify(solutionMap, null, 2)
  );
  await fs.writeFile(
    "public/problemset/tags.json",
    JSON.stringify(tagMap, null, 2)
  );
}

convert();

// ts-node --compiler-options '{"module": "commonjs"}' .\convert.ts
