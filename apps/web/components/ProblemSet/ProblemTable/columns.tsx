import { I18NLink } from "@/components/common/I18NLink";
import { I18NTag } from "@/components/common/I18NTag";
import { ProgressSelector } from "@/components/common/ProgressSelector";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { createColumnHelper, InitialTableState } from "@tanstack/react-table";
import { key2Label, TableCol } from "./types";

const columnHelper = createColumnHelper<TableCol>();

export const getColumns = () => [
  columnHelper.accessor("contest", {
    header: () => <div>{key2Label["contest"]}</div>,
    cell: ({ row }) => {
      const contest = row.getValue<TableCol["contest"]>("contest");
      return (
        <I18NLink
          link={contest.link}
          title={contest.title}
          className="text-pretty"
        />
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
        <I18NLink
          link={problem.link}
          title={`${problem.id}. ${problem.title}`}
          className="text-pretty"
        />
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
      const tags = row.getValue<TableCol["tags"]>("tags");
      return (
        <div className="flex flex-wrap justify-center items-center gap-1 text-pretty w-75 m-auto">
          {tags.map((tag) => (
            <I18NTag key={tag.id} label={tag.label} />
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
      return (
        <div className="w-fit m-auto">
          <ProgressSelector problemId={progress.problemId} />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  }),
  columnHelper.accessor("solution", {
    header: () => <div>{key2Label["solution"]}</div>,
    cell: ({ row }) => {
      const solution = row.getValue<TableCol["solution"]>("solution");
      return (
        <I18NLink
          link={solution.link}
          title={solution.title}
          className="text-pretty blur-xs hover:blur-none transition duration-300"
        />
      );
    },
    enableSorting: false,
    enableHiding: true,
  }),
];

export const columnInitialTableState: InitialTableState = {
  sorting: [
    // {
    //   id: "problem",
    //   desc: true,
    // },
  ],
};
