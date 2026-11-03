import { PageControl } from "@/components/common/PageControl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { genericMemo } from "@/types/common";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { columnInitialTableState, getColumns } from "./columns";
import { TableCol } from "./types";
import { VisibilityControl } from "./VisibilityControl";

interface DataTableProps<TData extends TableCol> {
  data: TData[];
}

export const DataTable = genericMemo(function <TData extends TableCol>({
  data,
}: DataTableProps<TData>) {
  const [columnVisibility, setColumnVisibility] = useState({});

  const columns = useMemo(() => getColumns(), []);

  const table = useReactTable({
    data,
    columns,
    initialState: {
      ...columnInitialTableState,
      pagination: {
        pageSize: 20,
      },
    },
    state: {
      columnVisibility,
    },
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
  });

  const tableState = table.getState();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/30 px-3 py-2">
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
                <TableHead key={header.id} className="h-11 border-r bg-muted/50 text-xs font-medium text-muted-foreground last:border-r-0">
                  <div
                    className={cn(
                      "flex items-center justify-center font-extrabold",
                      {
                        "cursor-pointer": header.column.getCanSort(),
                      }
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border-r border-border/60 py-2.5 last:border-r-0">
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


      <div className="flex flex-wrap items-center justify-center gap-2 border-t bg-muted/30 px-3 py-2">
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
      </div>
    </div>
  );
});
