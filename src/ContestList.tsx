import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
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

import { getMark, setMark, getSize, setSize } from "./store";

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
      let sol = info.row.original.QuerySolution?.(val[4]);
      return (
        <div>
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
          {sol && <div className="fr-wrapper"><OverlayTrigger
            trigger={["hover", "focus"]}
            key={placement}
            placement={"bottom"}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Body style={{ color, fontSize: "1rem" }}>
                  {sol[0]}
                </Popover.Body>
              </Popover>
            }
          >
            <a className="fr text-body" href={host + "/problems/" + sol[5] + "/solution/" + sol[1]}>题解</a>
          </OverlayTrigger></div>}
        </div>
      );
    },
    footer: (info) => info.column.id,
  });
};

const columns = [
  columnHelper.accessor("Contest", {
    sortingFn: (a, b, id) => {
      return a.original.StartTime - b.original.StartTime;
    },
    header: "Contest",
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

// Element or Position to move + Time in ms (milliseconds)
function scrollTo(element: any, duration: any) {
  var e = document.documentElement;
  if (e.scrollTop === 0) {
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t + 1 === e.scrollTop-- ? e : document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element: any, from: any, to: any, duration: any) {
  if (duration <= 0) return;
  if (typeof from === "object") from = from.offsetTop;
  if (typeof to === "object") to = to.offsetTop;
  // Choose one effect like easeInQuart
  scrollToX(element, from, to, 0, 1 / duration, 20, easeInCuaic);
}

function scrollToX(
  element: any,
  xFrom: any,
  xTo: any,
  t01: any,
  speed: any,
  step: any,
  motion: any
) {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo;
    return;
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
  t01 += speed * step;

  setTimeout(function () {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
  }, step);
}

/* Effects List */
function linearTween(t: any) {
  return t;
}

function easeInQuad(t: any) {
  return t * t;
}

function easeInCuaic(t: any) {
  return t * t * t;
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Solution Data Type
type Solution = any[];

function ContestList() {

  // solutions
  const [isPending, startTransition] = React.useTransition();
  const [solutions, setSolutions] = React.useState<Record<string, Solution>>({});

  React.useEffect(() => {
    fetch("/lc-rating/solutions.json?t=" + (new Date().getTime()/100000).toFixed(0))
      .then((res) => res.json())
      .then((result: Solution[]) => {
        console.log(result);
        startTransition(() => {
          let _solutions: any = {};
          result.forEach(v => {
            let key: string = v[6];
            _solutions[key] = v; // title_slug_hash => question
          });
          setSolutions(_solutions);
        });
      });
  }, []);

  const querySolution = (id: any): any => {
    return solutions[id];
  }

  const injectSolutionQuery = (data: Contest[]) => {
    data.forEach(v => {
      v.QuerySolution = querySolution;
    });
    return data;
  }

  const sz = getSize() || "100";
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: parseInt(sz),
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
    data: injectSolutionQuery(dataQuery.data?.rows ?? defaultData),
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

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "Contest") {
      if (table.getState().sorting[0]?.id !== "Contest") {
        table.setSorting([{ id: "Contest", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <>
      <div className="contest-table">
        <Button
          variant="primary"
          id="btn-back-to-top"
          style={{
            borderRadius: "50%",
            position: "fixed",
            zIndex: 10000,
            bottom: "50px",
            right: "5px",
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "1.5rem",
            padding: "0",
          }}
          onClick={() => {
            backToTop();
          }}
        >
          ↑
        </Button>
        <Table striped bordered hover className="overflow-x-auto">
          <thead
            style={{
              cursor: "pointer",
              background: "white",
              position: "sticky",
              top: -1,
            }}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  let hsz = header.getSize();
                  return (
                    <th
                      {...{
                        key: header.id,
                        colSpan: header.colSpan,
                        style: {
                          width: hsz,
                          overflow: "hidden",
                        },
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <Button
                            variant="light"
                            {...{
                              style: { fontWeight: 700, minWidth: 65 },
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {/* {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )} */}
                            <>
                              {{
                                asc: header.column.columnDef.header + " 🔼",
                                desc: header.column.columnDef.header + " 🔽",
                                false: header.column.columnDef.header,
                              }[header.column.getIsSorted() as string] ?? null}
                            </>
                          </Button>
                          {header.column.getCanFilter() ? (
                            <div className="ms-1">
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </div>
                      )}
                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""
                            }`,
                          style: {
                            transform:
                              columnResizeMode === "onEnd" &&
                                header.column.getIsResizing()
                                ? `translateX(${table.getState().columnSizingInfo
                                  .deltaOffset
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
                          className: "tb-overflow",
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
      </div>
      <div className="d-flex flex-row justify-content-center right-side">
        <Pagination className="me-2 mb-0">
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
        <div className="d-flex flex-row mb-1 me-5" style={{ height: "38px" }}>
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
              style={{ width: "60px" }}
            />
          </span>
          <span className="d-sm-inline-flex mh-100 ms-2">
            <span className="d-flex align-items-center me-2">Size</span>
            <ButtonGroup aria-label="Basic example">
              {[20, 50, 100, 200, 500].map((v) => {
                return (
                  <Button
                    className={pageSize === v ? "active" : ""}
                    onClick={(e) => {
                      table.setPageSize(Number(v));
                      setSize(`${v}`);
                    }}
                    variant="outline-secondary"
                  >
                    {v}
                  </Button>
                );
              })}
            </ButtonGroup>
          </span>
        </div>
      </div>
    </>
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

  return typeof firstValue === "number" ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputGroup
        style={
          {
            /* height: "1.2rem" */
          }
        }
      >
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
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
          placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
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

export default ContestList;