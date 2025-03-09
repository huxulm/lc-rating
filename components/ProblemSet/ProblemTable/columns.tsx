// components/DataTable/columns.ts
import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle } from "@/components/common/RatingCircle";
import { Badge } from "@/components/ui/badge";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { TableCol, key2Label } from "./types";

const ratingList = [
  { l: 0, r: 1200, c: "#C0C0C0" },
  { l: 1200, r: 1400, c: "#A0BA87" },
  { l: 1400, r: 1600, c: "#80B44E" },
  { l: 1600, r: 1900, c: "#FFB800" },
  { l: 1900, r: 2100, c: "#FF9616" },
  { l: 2100, r: 2400, c: "#FF732B" },
  { l: 2400, r: 3000, c: "#FF2D55" },
  { l: 3000, r: Infinity, c: "#663399" },
];

const ratingInfo = (rating: number) => {
  const item = ratingList.find((x) => rating < x.r) || {
    l: 0,
    r: Infinity,
    c: "#ffffff",
  };
  const res = {
    color: item.c,
    percent: ((rating - item.l) / (item.r - item.l)) * 100,
  };
  if (item.r === Infinity) res.percent = 100;
  return res;
};

const columnHelper = createColumnHelper<TableCol>();

export const getColumns = () => [
  columnHelper.accessor("contest", {
    header: () => <div>{key2Label["contest"]}</div>,
    cell: ({ row }) => {
      const contest = row.getValue<TableCol["contest"]>("contest");
      return (
        <Link
          href={contest.titleSlug}
          target="_blank"
          className="text-left text-pretty hover:underline"
        >
          {contest.title}
        </Link>
      );
    },
    sortingFn: (a, b) =>
      a.getValue<TableCol["contest"]>("contest").time -
      b.getValue<TableCol["contest"]>("contest").time,
    enableHiding: true,
  }),
  columnHelper.accessor("problem", {
    header: () => <div>{key2Label["problem"]}</div>,
    cell: ({ row }) => {
      const problem = row.getValue<TableCol["problem"]>("problem");
      return (
        <Link
          href={problem.titleSlug}
          target="_blank"
          className="text-left text-pretty hover:underline"
        >{`${problem.id}. ${problem.title}`}</Link>
      );
    },
    sortingFn: (a, b) =>
      parseInt(a.getValue<TableCol["problem"]>("problem").id) -
      parseInt(b.getValue<TableCol["problem"]>("problem").id),
    enableHiding: true,
  }),
  columnHelper.accessor("rating", {
    header: () => <div>{key2Label["rating"]}</div>,
    cell: ({ row }) => {
      const rating = row.getValue<number>("rating");
      const info = ratingInfo(rating);
      return (
        <div className="flex items-center justify-center gap-1">
          <RatingCircle
            rating={rating}
            color={info.color}
            percent={info.percent}
          />
          <div>{rating.toFixed(0)}</div>
        </div>
      );
    },
    enableHiding: true,
  }),
  columnHelper.accessor("tags", {
    header: () => <div>{key2Label["tags"]}</div>,
    cell: ({ row }) => {
      const tags = row.getValue<string[]>("tags");
      return (
        <div className="flex flex-wrap justify-center gap-1">
          {tags.map((tag) => (
            <Badge variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  }),
  columnHelper.accessor("progress", {
    header: () => <div>{key2Label["progress"]}</div>,
    cell: ({ row }) => {
      const progress = row.getValue<TableCol["progress"]>("progress");
      return <ProgressSelector problemId={progress.problemId} />;
    },
    enableSorting: false,
    enableHiding: true,
  }),
  columnHelper.accessor("solution", {
    header: () => <div>{key2Label["solution"]}</div>,
    cell: ({ row }) => {
      const solution = row.getValue<TableCol["solution"]>("solution");
      return (
        <Link
          href={solution.titleSlug}
          target="_blank"
          className="text-left text-pretty hover:underline blur-xs hover:blur-none transition duration-300"
        >
          {solution.title}
        </Link>
      );
    },
    enableSorting: false,
    enableHiding: true,
  }),
];
