import { PageControl } from "@/components/common/PageControl";
import { Separator } from "@/components/ui/separator";
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
import { useEffect, useMemo } from "react";
import { columnInitialTableState, getColumns } from "./columns";
import { TableCol } from "./types";
import { VisibilityControl } from "./VisibilityControl";

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

  const table = useReactTable({
    data,
    columns,
    state: useTableState(),
    onStateChange: (state) => setState(state),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
  });

  const tableState = table.getState();

  useEffect(() => {
    table.resetSorting();
  }, [data, table]);

  return (
    <div>
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

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="border border-gray-200">
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
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border border-gray-200">
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
