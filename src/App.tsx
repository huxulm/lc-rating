import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RatingCircle, { COLORS } from "./components/RatingCircle";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./app.scss";
import {
  Column,
  Table as TTable,
  SortingState,
  ColumnOrderState,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  useReactTable,
  createColumnHelper,
  FilterFn,
  ColumnFiltersState,
  PaginationState,
} from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

import { getMark, setMark } from "./store";

import { useQuery } from "react-query";
import { Contest, fetchData } from "./makeData";

const host = `https://leetcode.cn`;

const columnHelper = createColumnHelper<Contest>();

function openUrl(url: string) {
  window.open(url, "_blank");
}

const ratingFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue<any>(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const problemColDef = (id: string) => {
  return columnHelper.accessor((row: any) => row[id][3], {
    header: id,
    enableColumnFilter: true,
    size: 365,
    cell: (info) => {
      // @ts-ignore
      let val: any = info.row.original[id];
      let link = `${host}/problems/${val[1]}`;
      const onClick = (e: any) => {
        e.preventDefault();
        openUrl(link);
      };
      let difficulty: number = val[3];
      let c = COLORS.find((v) => difficulty >= v.l && difficulty <= v.r);
      let color = (c && c.c) || "#000000";
      let placement = `${difficulty}`;
      return (
        <>
          <OverlayTrigger
            trigger={["hover", "focus"]}
            key={placement}
            placement={"bottom"}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                {/* <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header> */}
                <Popover.Body style={{ color, fontSize: "1.2rem" }}>
                  <strong>难度: </strong> {difficulty.toFixed(2)}
                </Popover.Body>
              </Popover>
            }
          >
            <RatingCircle difficulty={val[3]} />
          </OverlayTrigger>
          <a href={link} onClick={onClick} style={{ color }}>
            {val[2]}.{val[0]}
          </a>
        </>
      );
    },
    footer: (info) => info.column.id,
  });
};

const columns = [
  columnHelper.accessor("Contest", {
    sortingFn: (a, b, id) => {
      return a.original.ID - b.original.ID;
    },
    enableResizing: false,
    enableSorting: true,
    size: 150,
    // filterFn: ratingFilter,
    enableColumnFilter: false,
    cell: (info) => {
      let link = `${host}/contest/${info.row.original.TitleSlug}`;
      const onClick = (e: any) => {
        e.preventDefault();
        openUrl(link);
      };
      let mk = getMark();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [ck, setCk] = React.useState<boolean>(
        mk === info.row.original.TitleSlug
      );
      console.log(ck && mk);
      return (
        <div className={ck ? "contest row-selected" : "contest"}>
          <a href={link} onClick={onClick}>
            {info.getValue()}
          </a>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onChange={(e) => {
                setCk(e.target.checked);
                setMark(e.target.checked ? info.row.original.TitleSlug : "");
              }}
              defaultChecked={ck}
              checked={ck}
            />
          </Form.Group>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  problemColDef("A"),
  problemColDef("B"),
  problemColDef("C"),
  problemColDef("D"),
];

function scrollFunction(btn: any) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function App() {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    });
  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );
  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const dataQuery = useQuery(
    ["data", fetchDataOptions],
    () => fetchData(fetchDataOptions),
    { keepPreviousData: true }
  );

  const defaultData = React.useMemo(() => [], []);

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [selectedRow, setSelectedRow] = React.useState<string>(getMark());
  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>("onChange");
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    pageCount: dataQuery.data?.pageCount ?? -1,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    state: {
      columnVisibility,
      columnOrder,
      sorting,
      columnFilters,
      globalFilter,
      pagination,
    },
    // pageCount: 20,
    filterFns: {
      rating: ratingFilter,
      fuzzy: fuzzyFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    manualPagination: true,
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: false,
  });

  useEffect(() => {
    window.onscroll = function () {
      let btn = document.getElementById("btn-back-to-top");
      scrollFunction(btn);
    };
  }, []);
  return (
    <div className="contest-table">
      <Button
        id="btn-back-to-top"
        style={{
          borderRadius: "50%",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "3.5rem",
          height: "3.5rem",
          visibility: "hidden",
        }}
        onClick={() => {
          backToTop();
        }}
      >
        Top
      </Button>
      <div className="h-4" />
      <Table striped bordered hover className="overflow-x-auto">
        <thead style={{ cursor: "pointer", background: "white" }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: header.getSize(),
                        overflow: "hidden",
                      },
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="th-center">
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                    <div
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer ${
                          header.column.getIsResizing() ? "isResizing" : ""
                        }`,
                        style: {
                          transform:
                            columnResizeMode === "onEnd" &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                  table.getState().columnSizingInfo.deltaOffset
                                }px)`
                              : "",
                        },
                      }}
                    />
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className={
                  selectedRow === row.original.TitleSlug ? "row-selected" : ""
                }
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      {...{
                        key: cell.id,
                        style: {
                          width: cell.column.getSize(),
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        },
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex flex-row justify-content-end w-100">
        <Pagination className="me-2">
          <Pagination.First
            // className="border rounded"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
          <Pagination.Prev
            // className="border rounded"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <Pagination.Next
            // className="border rounded"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
          <Pagination.Last
            className="rounded"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </Pagination>
        <div className="d-flex flex-row mb-1 me-5" style={{ height: '38px' }}>
          <span className="d-sm-inline-flex mh-100 ms-2">
            <strong className="d-inline-flex align-items-center">
              {table.getState().pagination.pageIndex + 1} {" / "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="d-sm-inline-flex mh-100 ms-2">
            <span className="d-flex align-items-center">Page</span>
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="d-inline-block border rounded align-middle ms-1 p-1"
              style={{ width: '100px' }}
              />
          </span>
          <span className="d-sm-inline-flex mh-100 ms-2">
            <span className="d-flex align-items-center">Size</span>
            <select
              className="d-inline-block border rounded align-middle p-1 ms-1"
              style={{ width: '100px' }}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 15, 20, 30, 50, 100, 200].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </div>
  );
}

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: TTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue<any>(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  console.log(sortedUniqueValues);

  return typeof firstValue === "number" ? (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputGroup className="mb-3" style={{ height: "1.2rem" }}>
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
        />
      </InputGroup>
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    // @ts-ignore
    <Form.Control
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default App;
