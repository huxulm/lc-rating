// React imports
import React, {
  useCallback,
  useMemo,
  useState,
  useTransition,
} from "react";

import {
  Column,
  ColumnDef,
  ColumnResizeDirection,
  ColumnResizeMode,
  PaginationState,
  Table as TTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// Bootstrap components
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import FormSelect from "react-bootstrap/FormSelect";
import Modal from "react-bootstrap/Modal";

// Custom components
import RatingText from "./components/RatingText";
import RatingCircle, { ColorRating } from "./components/RatingCircle";
import { useSolutions } from "./hooks/useSolutions";
import { useQuestionTags } from "./hooks/useQuestionTags";
import { useZen } from "./hooks/useZen";
import { useTags } from "./hooks/useTags";
import { FilterIcon } from "./components/icons";

// Constants and Enums
const LC_HOST = `https://leetcode.cn`;
const canUseLocalStorage =
  typeof Storage !== "undefined" && Boolean(window?.localStorage);
const LC_RATING_PROGRESS_KEY = (questionID: string) =>
  `lc-rating-zen-progress-${questionID}`;
const LC_RATING_ZEN_LAST_USED_FILTER_KEY = `lc-rating-zen-last-used-filter`;
const LC_RATING_ZEN_SETTINGS_KEY = `lc-rating-zen-settings`;

// Question Data Type
type ConstQuestion = {
  cont_title: string;
  cont_title_slug: string;
  title: string;
  title_slug: string;
  question_id: string;
  paid_only: boolean;
  rating: number;
  _hash: number;
};

// Filter Related
type Filter = {
  label: string;
  fn: (r: ConstQuestion) => boolean;
};
const createRatingFilter = (min: number, max?: number) => (r: ConstQuestion) =>
  max === undefined ? r.rating >= min : r.rating >= min && r.rating < max;

const ALL_FILTER_LABEL = "< ALL >";

const filters: Filter[] = [
  { label: "(<=1200)", fn: createRatingFilter(1, 1200) }, // starting from 1 to exclude unrated questions
  { label: "(1200 - 1400)", fn: createRatingFilter(1200, 1400) },
  { label: "(1400 - 1600)", fn: createRatingFilter(1400, 1600) },
  { label: "(1600 - 1900)", fn: createRatingFilter(1600, 1900) },
  { label: "(1900 - 2100)", fn: createRatingFilter(1900, 2100) },
  { label: "(2100 - 2400)", fn: createRatingFilter(2100, 2400) },
  { label: "(>=2400)", fn: createRatingFilter(2400) },
  { label: ALL_FILTER_LABEL, fn: createRatingFilter(1) },
];
// Progress Related
type ProgressData = Record<string, string>;

enum Progress {
  TODO = "TODO",
  WORKING = "WORKING",
  TOO_HARD = "TOO_HARD",
  REVIEW_NEEDED = "REVIEW_NEEDED",
  AC = "AC",
}

const progressTranslations = {
  [Progress.TODO]: "下次一定",
  [Progress.WORKING]: "攻略中",
  [Progress.TOO_HARD]: "太难了，不会",
  [Progress.REVIEW_NEEDED]: "回头复习下",
  [Progress.AC]: "过了",
};
const progressOptionClassNames = {
  [Progress.TODO]: "zen-option-TODO",
  [Progress.WORKING]: "zen-option-WORKING",
  [Progress.TOO_HARD]: "zen-option-TOO_HARD",
  [Progress.REVIEW_NEEDED]: "zen-option-REVIEW_NEEDED",
  [Progress.AC]: "zen-option-AC",
};

// Filter Button Component
type FilterButtonProps = {
  filter: Filter;
  currentFilter: Filter;
  onFilterChange: (_: Filter) => void;
};
const FilterButton = React.memo(
  ({ filter, currentFilter, onFilterChange }: FilterButtonProps) => (
    <Button
      onClick={() => onFilterChange(filter)}
      variant={filter.label == currentFilter.label ? "primary" : "secondary"}
    >
      {filter.label}
    </Button>
  )
);

function buildTagFilterFn(selectedTags: Record<string, boolean>, q: any) {
  return Object.keys(selectedTags).length == 0
    ? () => true
    : (v: ConstQuestion) => {
        const tags = q(v._hash);
        if (!tags || !tags[0]) {
          return false;
        }
        if (tags[0].length == 0) {
          return false;
        }
        for (let i = 0; i < tags[0].length; i++) {
          if (selectedTags[tags[0][i]]) {
            return true;
          }
        }
        return false;
      };
}

type FilterSettingsProps = {
  show: boolean;
  handleClose: any;
  onSettingsSaved: any;
  tags: any;
  lang: any;
  settings: Record<string, any>;
  queryTags: any;
};

const FilterSettings: React.FunctionComponent<FilterSettingsProps> = ({
  tags,
  show,
  handleClose,
  onSettingsSaved,
  settings,
  lang,
  queryTags,
}: FilterSettingsProps) => {
  if (!show) return <></>;

  const [selectedTags, setSelectedTags] = useState<Record<string, any>>(
    settings ? settings.selectedTags : {}
  );
  const onSelectTags = (key: string) => {
    setSelectedTags({ ...selectedTags, [key]: !!!selectedTags[key] });
  };
  const RenderTags = (tags: any[]) => {
    if (!tags) return;
    return (
      <div
        className="d-flex flex-wrap zen-filter-tag"
        style={{ columnGap: "1rem" }}
      >
        {tags.map((tag) => {
          return (
            <span onClick={() => onSelectTags(tag[1])} className="p-1">
              <Button
                size="sm"
                variant={!!selectedTags[tag[1]] ? "primary" : "secondary"}
              >
                {lang === "en" ? tag[1] : tag[2]}
              </Button>
            </span>
          );
        })}
      </div>
    );
  };

  const reset = () => {
    setSelectedTags({});
    onSettingsSaved({ ...settings, selectedTags: {}, tagFilterFn: () => true });
  };
  const toggleVisibility = (name: string) => {
    onSettingsSaved({
      ...settings,
      columnVisibility: {
        ...settings.columnVisibility,
        [name]: !settings.columnVisibility[name],
      },
    });
  };
  return (
    <>
      <Modal
        show={show}
        dialogClassName="zen-filter-dialog"
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>设置</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="pt-1 pb-1">
            列显示
            <Form className="d-flex mt-2 gap-3">
              <Form.Check
                checked={Boolean(settings.columnVisibility.tags)}
                onChange={() => toggleVisibility("tags")}
                type="switch"
                label="算法标签"
                id="toggle-tags"
              />
              <Form.Check
                checked={Boolean(settings.columnVisibility.ratings)}
                onChange={() => toggleVisibility("ratings")}
                type="switch"
                label="难度分"
                id="toggle-ratings"
              />
            </Form>
          </h5>
          <hr />
          <h5>
            标签 <Button onClick={reset}>重置</Button>
          </h5>
          {RenderTags(tags)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            关闭
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onSettingsSaved({
                ...settings,
                selectedTags,
                tagFilterFn: buildTagFilterFn(selectedTags, queryTags),
              });
              handleClose();
            }}
          >
            应用设置
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default function Zenk() {
  // State and hooks
  const [isPending, startTransition] = useTransition();
  const [localStorageProgressData, setLocalStorageProgressData] =
    useState<ProgressData>({});

  const { zen: data, isPending: loading } = useZen(setLocalStorageProgressData);

  const [currentFilter, setCurrentFilter] = useState(() => {
    const lastUsedFilterKey = canUseLocalStorage
      ? localStorage.getItem(LC_RATING_ZEN_LAST_USED_FILTER_KEY) ||
        ALL_FILTER_LABEL
      : ALL_FILTER_LABEL;
    return (
      filters.find((filter) => filter.label === lastUsedFilterKey) ||
      (filters.find((filter) => filter.label === ALL_FILTER_LABEL) as Filter)
    );
  });

  // Event handlers
  const handleProgressSelectChange = useCallback(
    (questionId: string, value: string) => {
      const newValue = value || Progress.TODO;

      localStorage.setItem(LC_RATING_PROGRESS_KEY(questionId), newValue);
      setLocalStorageProgressData((prevData) => ({
        ...prevData,
        [questionId]: newValue,
      }));
    },
    []
  );

  const handleFilterChange = useCallback((newFilter: Filter) => {
    canUseLocalStorage &&
      localStorage.setItem(LC_RATING_ZEN_LAST_USED_FILTER_KEY, newFilter.label);
    startTransition(() => {
      setCurrentFilter(newFilter);
    });
  }, []);

  const { solutions } = useSolutions("");
  const { tags, isPending: tagsLoading } = useQuestionTags(null);
  const queryTags = (id: any) => {
    return tags ? tags[id] : [[], []];
  };

  const { tags: qtags } = useTags();
  const [showFilter, setShowFilter] = useState(false);
  const defaultSettings = useMemo<any>(() => {
    const raw = localStorage.getItem(LC_RATING_ZEN_SETTINGS_KEY);
    let defaultSettings = {
      tagFilterFn: () => true,
      selectedTags: {},
      columnVisibility: { tags: true, ratings: true },
    };
    if (!raw || raw === "") {
      return defaultSettings;
    }
    let settings = null;
    try {
      settings = JSON.parse(raw);
      settings;
    } catch (err) {}
    let res = settings || defaultSettings;
    res["__tag"] = true;
    res["tagFilterFn"] = buildTagFilterFn(settings.selectedTags, queryTags);
    return res;
  }, [tags, qtags]);

  const [settings, setSettings] = useState(defaultSettings);

  const filteredData = useMemo(
    () => data.filter(currentFilter.fn).filter(settings.tagFilterFn),
    [data, currentFilter, settings]
  );

  return (
    <Container fluid="lg" className="zen-container">
      <nav className="nav navbar z-3 zen-nav justify-content-start postion-sticky">
        <ButtonGroup>
          {filters.map((filter: Filter) => (
            <FilterButton
              key={filter.label}
              filter={filter}
              currentFilter={currentFilter}
              onFilterChange={handleFilterChange}
            />
          ))}
        </ButtonGroup>
        <Button variant="outline-secondary" onClick={() => setShowFilter(true)}>
          <FilterIcon width={24} height={24} />
        </Button>
      </nav>

      <FilterSettings
        lang={"zh"}
        tags={qtags}
        show={showFilter}
        handleClose={() => setShowFilter(false)}
        onSettingsSaved={(_settings: any) => {
          try {
            localStorage.setItem(
              LC_RATING_ZEN_SETTINGS_KEY,
              JSON.stringify(_settings)
            );
          } catch (err) {}
          setSettings(_settings);
        }}
        settings={settings}
        queryTags={queryTags}
      />
      <div style={{ width: "100%" }}>
        <ZenTableComp
          querySolution={(id: any) => {
            return solutions[id];
          }}
          columnVisibility={settings.columnVisibility}
          queryTags={queryTags}
          data={filteredData}
          progress={(item: any) =>
            (localStorageProgressData[item.question_id] as Progress) ||
            Progress.TODO
          }
          handleProgressSelectChange={handleProgressSelectChange}
        />
      </div>
    </Container>
  );
}

const ZenTableComp = React.memo(
  ({
    queryTags,
    data,
    columnVisibility,
    querySolution,
    progress,
    handleProgressSelectChange,
  }: {
    columnVisibility: any;
    queryTags: any;
    data: any;
    querySolution: any;
    progress: (v: ConstQuestion) => Progress;
    handleProgressSelectChange: any;
  }) => {
    const columns = React.useMemo<ColumnDef<ConstQuestion>[]>(
      () => [
        {
          accessorFn: (row) => row.cont_title_slug,
          id: "场次",
          enableColumnFilter: false,
          cell: (info) => {
            const item = info.row.original;
            return (
              <div className="d-flex justify-content-between align-items-center p-1">
                <a
                  href={`${LC_HOST}/contest/${item.cont_title_slug}`}
                  target="_blank"
                >
                  {item.cont_title}
                </a>
              </div>
            );
          },
        },
        {
          accessorFn: (row) => row.title,
          id: "qustion",
          enableResizing: true,
          size: 300,
          sortingFn: (a, b) => {
            return Number(`${a.original.question_id}`) <
              Number(`${b.original.question_id}`)
              ? -1
              : 1;
          },
          cell: (info) => {
            const item = info.row.original;
            const sol = querySolution(`${item._hash}`);
            let link = sol
              ? LC_HOST + "/problems/" + sol[5] + "/solution/" + sol[1]
              : null;
            return (
              <div className="d-flex justify-content-between align-items-center">
                {!!item.paid_only && <span>👑</span>}
                <a
                  href={`${LC_HOST}/problems/${item.title_slug}`}
                  target="_blank"
                >
                  {item.question_id}. {item.title}
                </a>
                {link && (
                  <span className="zen-ans">
                    <a href={link}>🎈</a>
                  </span>
                )}
              </div>
            );
          },
          enableColumnFilter: false,
          header: () => <span>标题</span>,
          // footer: (props) => props.column.id,
        },
        {
          accessorKey: "rating",
          id: "ratings",
          header: () => "难度分",
          size: 60,
          enableColumnFilter: false,
          cell: (info) => (
            <>
              <RatingCircle difficulty={Number(info.getValue())} />
              <ColorRating rating={Number(info.getValue())}>
                {Number(info.getValue()).toFixed(0)}
              </ColorRating>
            </>
          ),
        },
        {
          accessorFn: (row) => {
            let tags = queryTags(row._hash);
            return tags ? tags[1] : "-";
          },
          header: "算法标签",
          id: "tags",
          footer: (props) => props.column.id,
          enableColumnFilter: false,
          enableSorting: false,
        },
        {
          accessorKey: "progress",
          header: "进度",
          enableColumnFilter: false,
          cell: (info) => {
            const item = info.row.original;
            return (
              <Form.Select
                className={progressOptionClassNames[progress(item)] || ""}
                value={progress(item) === Progress.TODO ? "" : progress(item)}
                onChange={(e) =>
                  handleProgressSelectChange(item.question_id, e.target.value)
                }
              >
                {/* Empty option for TODO */}
                <option value=""></option>

                {[
                  Progress.WORKING,
                  Progress.TOO_HARD,
                  Progress.REVIEW_NEEDED,
                  Progress.AC,
                ].map((p) => (
                  <option
                    key={p}
                    value={p}
                    className={progressOptionClassNames[p] || ""}
                  >
                    {progressTranslations[p]}
                  </option>
                ))}
              </Form.Select>
            );
          },
          footer: (props) => props.column.id,
        },
      ],
      [queryTags]
    );

    // const { zen: data, isPending: loading } = useZen(null);
    return (
      <ZenTable
        {...{
          columnVisibility: columnVisibility,
          data: data,
          columns: columns,
          queryTags: queryTags,
        }}
      />
    );
  }
);

const ZenTable = React.memo(
  ({
    data,
    columns,
    columnVisibility = {
      tags: true,
    },
  }: {
    data: any;
    columns: any;
    columnVisibility?: any;
  }) => {
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 50,
    });

    const [columnResizeMode, setColumnResizeMode] =
      React.useState<ColumnResizeMode>("onChange");

    const [columnResizeDirection, setColumnResizeDirection] =
      React.useState<ColumnResizeDirection>("ltr");

    const table = useReactTable({
      columns,
      data,
      debugTable: false,
      columnResizeDirection,
      columnResizeMode,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
      state: {
        pagination,
        columnVisibility,
      },
      autoResetPageIndex: true, // turn off page index reset when sorting or filtering
    });
    return (
      <div className="p-2">
        <Pagination className="d-flex justify-content-start gap-2">
          <Pagination.First
            className="border rounded p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Pagination.First>
          <Pagination.Prev
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </Pagination.Prev>
          <Pagination.Next
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </Pagination.Next>
          <Pagination.Last
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Pagination.Last>
          <Form className="d-flex align-items-center">
            <FormLabel className="d-flex align-items-center">
              {table.getState().pagination.pageIndex + 1} /{" "}
              {table.getPageCount().toLocaleString()}
            </FormLabel>
          </Form>
          <span className="d-flex align-items-center">
            <Form.Control
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <Dropdown
            onSelect={(e) => {
              //@ts-ignore
              table.setPageSize(Number(e));
            }}
          >
            <Dropdown.Toggle key="dropdown">
              Page size {table.getState().pagination.pageSize}
            </Dropdown.Toggle>
            <Dropdown.Menu key="menu" className="super-colors">
              {[10, 20, 30, 50, 100].map((pageSize, idx) => (
                <Dropdown.Item key={`opt-${idx}`} eventKey={pageSize}>{pageSize}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormLabel className="d-flex justify-content-center align-items-center fs-6 text-success">
            {"Total: "} {table.getRowCount().toLocaleString()}
          </FormLabel>
        </Pagination>
        <div className="h-2" />
        <Table
          hover
          striped
          bordered
          className="overflow-x-auto"
          {...{
            style: {
              width: "100%",
            },
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup, idx) => (
              <tr key={headerGroup.id + idx}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{
                        width: `${header.getSize()}px`,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                          style: {
                            width: header.getSize(),
                          },
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
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="zen-table-row">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
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
        <div className="h-2" />
        <Pagination className="d-flex justify-content-end gap-2">
          <Pagination.First
            className="border rounded p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Pagination.First>
          <Pagination.Prev
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </Pagination.Prev>
          <Pagination.Next
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </Pagination.Next>
          <Pagination.Last
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Pagination.Last>
          <Form className="d-flex align-items-center">
            <FormLabel className="d-flex align-items-center">
              {table.getState().pagination.pageIndex + 1} /{" "}
              {table.getPageCount().toLocaleString()}
            </FormLabel>
          </Form>
          <span className="d-flex align-items-center">
            <Form.Control
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <Dropdown
            onSelect={(e) => {
              //@ts-ignore
              table.setPageSize(Number(e));
            }}
          >
            <Dropdown.Toggle key="dropdown">
              Page size {table.getState().pagination.pageSize}
            </Dropdown.Toggle>
            <Dropdown.Menu key={"menu"} className="super-colors">
              {[10, 20, 30, 50, 100].map((pageSize, idx) => (
                <Dropdown.Item key={`opt-${idx}`} eventKey={pageSize}>{pageSize}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormLabel className="d-flex justify-content-center align-items-center fs-6 text-success">
            {"Total: "} {table.getRowCount().toLocaleString()}
          </FormLabel>
        </Pagination>
      </div>
    );
  }
);

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: TTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="d-flex space-x-2">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  );
}
