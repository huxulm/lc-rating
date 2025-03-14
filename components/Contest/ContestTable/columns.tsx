import { I18NLink } from "@/components/common/I18NLink";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import {
  createColumnHelper,
  InitialTableState,
  Row,
} from "@tanstack/react-table";
import { key2Label, TableCol } from "./types";

const columnHelper = createColumnHelper<TableCol>();

const generate = (key: "Q1" | "Q2" | "Q3" | "Q4") => {
  return {
    header: () => <div>{key2Label[key]}</div>,
    cell: ({ row }: { row: Row<TableCol> }) => {
      const Q1 = row.getValue<TableCol[typeof key]>(key);
      const rating = Q1.problem.rating;
      const info = ratingInfo(rating);
      return (
        <div className="flex items-center justify-between">
          <div className="flex justify-left items-center gap-1">
            <RatingCircle
              rating={rating}
              color={info.color}
              percent={info.percent}
            />
            <I18NLink
              link={Q1.problem.link}
              title={`${Q1.problem.id}. ${Q1.problem.title}`}
            />
          </div>
          {Q1.solution ? (
            <I18NLink
              link={Q1.solution?.link}
              title={`🎈`}
              className="text-xl hover:no-underline"
            />
          ) : null}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  };
};

export const getColumns = () => [
  columnHelper.accessor("contest", {
    header: () => <div>{key2Label["contest"]}</div>,
    cell: ({ row }) => {
      const contest = row.getValue<TableCol["contest"]>("contest");
      return <I18NLink link={contest.link} title={contest.title} />;
    },
    sortingFn: (a, b) =>
      a.getValue<TableCol["contest"]>("contest").time -
      b.getValue<TableCol["contest"]>("contest").time,
    enableHiding: true,
  }),
  columnHelper.accessor("Q1", generate("Q1")),
  columnHelper.accessor("Q2", generate("Q2")),
  columnHelper.accessor("Q3", generate("Q3")),
  columnHelper.accessor("Q4", generate("Q4")),
];

export const columnInitialTableState: InitialTableState = {
  sorting: [
    {
      id: "contest",
      desc: true,
    },
  ],
};
