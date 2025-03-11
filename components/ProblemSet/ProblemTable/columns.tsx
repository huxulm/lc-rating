// components/DataTable/columns.ts
import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { Badge } from "@/components/ui/badge";
import { createColumnHelper, InitialTableState } from "@tanstack/react-table";
import Link from "next/link";
import { key2Label, TableCol } from "./types";

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

export const columnInitialTableState: InitialTableState = {
  sorting: [
    {
      id: "problem",
      desc: true,
    },
  ],
};
