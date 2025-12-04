import { I18NLink } from "@/components/common/I18NLink";
import { RatingCircle, ratingInfo } from "@/components/common/RatingCircle";
import { Input } from "@/components/ui/input"; // 确保导入Input组件
import {
  createColumnHelper,
  IdentifiedColumnDef,
  InitialTableState,
  Row,
} from "@tanstack/react-table";
import { ArrowDownUp, MoveDown, MoveUp } from "lucide-react";
import { key2Label, Q, TableCol } from "./types";

const columnHelper = createColumnHelper<TableCol>();

interface RatingFilter {
  min?: number;
  max?: number;
}

const isRatingFilter = (value: unknown): value is RatingFilter => {
  return (
    typeof value === "object" &&
    value !== null &&
    ("min" in value ? typeof value.min === "number" : true) &&
    ("max" in value ? typeof value.max === "number" : true)
  );
};

const generate = (
  key: "Q1" | "Q2" | "Q3" | "Q4"
): IdentifiedColumnDef<TableCol, Q> => {
  return {
    header: ({ column }) => {
      const filterValue = column.getFilterValue();
      const min = isRatingFilter(filterValue) ? filterValue.min : "";
      const max = isRatingFilter(filterValue) ? filterValue.max : "";

      return (
        <div className="flex flex-row items-center gap-2">
          <div>{key2Label[key]}</div>
          {(() => {
            if (!column.getCanSort()) {
              return null;
            } else if (!column.getIsSorted()) {
              return <ArrowDownUp size="1em" />;
            } else if (column.getIsSorted() === "desc") {
              return <MoveDown size="1em" />;
            } else {
              return <MoveUp size="1em" />;
            }
          })()}
          <div className="flex gap-1">
            <Input
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => {
                const value = e.target.value;
                const min = value ? Number(value) : -Infinity;
                column.setFilterValue((prev: RatingFilter | undefined) => ({
                  min,
                  max: prev?.max ?? Infinity,
                }));
              }}
              onClick={(e) => e.stopPropagation()}
              className="h-8 w-20 text-xs"
            />
            <Input
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => {
                const value = e.target.value;
                const max = value ? Number(value) : Infinity;
                column.setFilterValue((prev: RatingFilter | undefined) => ({
                  min: prev?.min ?? -Infinity,
                  max,
                }));
              }}
              onClick={(e) => e.stopPropagation()}
              className="h-8 w-20 text-xs"
            />
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      const Q1 = row.getValue<TableCol[typeof key]>(key);
      const rating = Q1.problem.rating;
      const info = ratingInfo(rating);
      return (
        <div className="flex items-center justify-between">
          <div className="flex flex-row justify-left items-center  gap-1">
            <RatingCircle
              rating={rating}
              color={info.color}
              percent={info.percent}
            />
            <I18NLink
              link={Q1.problem.link}
              title={`${Q1.problem.id}. ${Q1.problem.title}`}
              style={{
                color: info.color,
              }}
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
    enableSorting: true,
    sortingFn: (a, b) => {
      const A = a.getValue<TableCol[typeof key]>(key);
      const B = b.getValue<TableCol[typeof key]>(key);
      return A.problem.rating - B.problem.rating;
    },
    filterFn: (
      row,
      columnId,
      filterValue: { min: number | undefined; max: number | undefined }
    ) => {
      const q = row.getValue<TableCol[typeof key]>(columnId);
      const rating = q.problem.rating;
      const min = filterValue?.min ?? -Infinity;
      const max = filterValue?.max ?? Infinity;
      return rating >= min && rating <= max;
    },
    enableHiding: true,
  };
};

export const getColumns = () => [
  columnHelper.accessor("contest", {
    header: ({ column }) => (
      <div className="flex flex-row items-center gap-2">
        {key2Label["contest"]}
        {(() => {
          if (!column.getCanSort()) {
            return null;
          } else if (!column.getIsSorted()) {
            return <ArrowDownUp size="1em" />;
          } else if (column.getIsSorted() === "desc") {
            return <MoveDown size="1em" />;
          } else {
            return <MoveUp size="1em" />;
          }
        })()}
      </div>
    ),
    cell: ({ row }) => {
      const contest = row.getValue<TableCol["contest"]>("contest");
      return <I18NLink link={contest.link} title={contest.title} />;
    },
    enableSorting: true,
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
