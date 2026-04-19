import { PageControl } from "@/components/common/PageControl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LC_RATING_PROBLEMSET_TABLE_KEY } from "@/config/constants";
import { createTableStore } from "@/hooks/useTableState";
import { cn } from "@/lib/utils";
import { genericMemo } from "@/types/common";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDownUp, MoveDown, MoveUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { columnInitialTableState, getColumns } from "./columns";
import { TableCol } from "./types";
import { VisibilityControl } from "./VisibilityControl";
import { useOptions } from "@/hooks/useOptions";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui-customized/button";
import { ProgressSelector } from "@/components/common/ProgressSelector";

const { useTableState, setState } = createTableStore({
  key: LC_RATING_PROBLEMSET_TABLE_KEY,
  initialState: {
    pagination: {
      pageIndex: 0,
      pageSize: 20,
    },
  },
  ...columnInitialTableState,
});

interface DataTableProps<TData extends TableCol> {
  data: TData[];
}

export const DataTable = genericMemo(function <TData extends TableCol>({
  data,
}: DataTableProps<TData>) {
  const columns = useMemo(() => getColumns(), []);

  const { getOption } = useOptions();
  const { progress, setProgress, delProgress } = useProgress();
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);

  const table = useReactTable({
    data,
    columns,
    state: useTableState(),
    onStateChange: (state) => setState(state),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
    enableRowSelection: true,
  });

  const tableState = table.getState();

  const handleApplyProgress = () => {
    const selectedRows = table.getSelectedRowModel().rows;
    if (selectedRows.length === 0) return;

    const activeProgress = progress[""];
    const todoOption = getOption();

    selectedRows.forEach(row => {
      const problemId = row.original.problem.id;
      if (!activeProgress || activeProgress === todoOption.key) {
        delProgress(problemId);
      } else {
        setProgress(problemId, activeProgress);
      }
    });

    table.resetRowSelection();
    delProgress("");
  };

  useEffect(() => {
    table.resetSorting();
  }, [data, table]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2 p-2">
        <div className="flex items-center gap-2">
          <Button
            variant={isMultiSelect ? "default" : "outline"}
            onClick={() => {
              const nextState = !isMultiSelect;
              setIsMultiSelect(nextState);
              if (!nextState) {
                table.resetRowSelection();
                setLastSelectedIndex(null);
              }
            }}
          >
            多选
          </Button>
          {isMultiSelect && (
            <>
              <div className="[&_.absolute]:min-w-max">
                <ProgressSelector problemId="" />
              </div>
              <Button onClick={handleApplyProgress} variant="default">应用</Button>
            </>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <PageControl
            pageSize={tableState.pagination.pageSize}
            onPageSizeChange={table.setPageSize}
            pageIndex={tableState.pagination.pageIndex}
            pageCount={table.getPageCount()}
            onPageChange={table.setPageIndex}
            canPreviousPage={table.getCanPreviousPage()}
            canNextPage={table.getCanNextPage()}
            previousPage={table.previousPage}
            nextPage={table.nextPage}
          />
          <VisibilityControl table={table} />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="border border-muted-foreground">
                  <div
                    className={cn("flex items-center justify-center", {
                      "cursor-pointer": header.column.getCanSort(),
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    {(() => {
                      if (!header.column.getCanSort()) {
                        return null;
                      } else if (!header.column.getIsSorted()) {
                        return <ArrowDownUp size="1em" />;
                      } else if (header.column.getIsSorted() === "desc") {
                        return <MoveDown size="1em" />;
                      } else {
                        return <MoveUp size="1em" />;
                      }
                    })()}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
                className={cn({ "cursor-pointer select-none": isMultiSelect })}
                onClick={(e) => {
                  if (!isMultiSelect) return;
                  if (e.shiftKey && lastSelectedIndex !== null) {
                    window.getSelection()?.removeAllRanges();
                    const start = Math.min(lastSelectedIndex, index);
                    const end = Math.max(lastSelectedIndex, index);
                    const rows = table.getRowModel().rows;
                    const newSelection = { ...table.getState().rowSelection };
                    for (let i = start; i <= end; i++) {
                      const currentRow = rows[i];
                      if (currentRow) {
                        newSelection[currentRow.id] = true;
                      }
                    }
                    table.setRowSelection(newSelection);
                  } else {
                    row.toggleSelected();
                    setLastSelectedIndex(index);
                  }
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border border-muted-foreground/30">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                暂无数据
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-center p-2">
        <PageControl
          pageSize={tableState.pagination.pageSize}
          onPageSizeChange={table.setPageSize}
          pageIndex={tableState.pagination.pageIndex}
          pageCount={table.getPageCount()}
          onPageChange={table.setPageIndex}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          previousPage={table.previousPage}
          nextPage={table.nextPage}
        />
        <VisibilityControl table={table} />
      </div>
    </div>
  );
});
