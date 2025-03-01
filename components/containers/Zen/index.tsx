"use client";

import React, { useCallback, useMemo, useState, useTransition } from "react";

import {
  Column,
  ColumnDef,
  ColumnResizeDirection,
  ColumnResizeMode,
  PaginationState,
  Table as TTable,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";

// Custom components
import RatingCircle, { ColorRating } from "@components/RatingCircle";
import { FilterIcon, ShareIcon } from "@components/icons";

// hooks
import Loading from "@components/Loading";
import { QTag, useQuestionTags } from "@hooks/useQuestionTags";
import { SolutionType, useSolutions } from "@hooks/useSolutions";
import useStorage from "@hooks/useStorage";
import { Tags, useTags } from "@hooks/useTags";
import { useZen } from "@hooks/useZen";

// Constants and Enums
const LC_HOST = `https://leetcode.cn`;
const LC_HOST_EN = `https://leetcode.com`;
const LC_RATING_PROGRESS_KEY = (questionID: string) =>
  `lc-rating-zen-progress-${questionID}`;
const LC_RATING_ZEN_LAST_USED_FILTER_KEY = `lc-rating-zen-last-used-filter`;
const LC_RATING_ZEN_SETTINGS_KEY = `lc-rating-zen-settings`;

// Question Data Type
interface ConstQuestion {
  cont_title: string;
  cont_title_slug: string;
  title: string;
  title_slug: string;
  question_id: string;
  paid_only: boolean;
  rating: number;
  _hash: number;
}

// Filter Related
interface Filter {
  label: string;
  fn: (r: ConstQuestion) => boolean;
}
const createRatingFilter = (min: number, max?: number) => {
  return (r: ConstQuestion) => {
    return max === undefined
      ? r.rating >= min
      : r.rating >= min && r.rating < max;
  };
};

const ALL_FILTER_LABEL = "< ALL >";

const ratingFilters: Filter[] = [
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
interface FilterButtonProps {
  label: string;
  variant: string;
  onFilterChange: (filterKey: string) => void;
}

const FilterButton = React.memo(
  ({ label, variant, onFilterChange }: FilterButtonProps) => (
    <Button onClick={() => onFilterChange(label)} variant={variant}>
      {label}
    </Button>
  )
);

function buildTagFilterFn(
  selectedTags: Record<string, boolean>,
  q: (id: string) => QTag
) {
  return Object.keys(selectedTags).length == 0
    ? () => true
    : (v: ConstQuestion) => {
        const tags = q(v._hash.toString());
        if (!tags || !tags[0] || tags[0].length == 0) {
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

function buildProgressFilterFn(selectedProgress: string) {
  if (!selectedProgress) {
    return () => true;
  }
  return (v: ConstQuestion) => {
    const progress =
      localStorage.getItem(LC_RATING_PROGRESS_KEY(v.question_id)) ||
      Progress.TODO;
    return progress === selectedProgress;
  };
}

interface FilterSettingsProps {
  handleClose: () => void;
  onSettingsSaved: React.Dispatch<React.SetStateAction<SettingsType>>;
  tags: Tags;
  lang: "zh" | "en";
  settings: SettingsType;
}

const FilterSettings: React.FunctionComponent<FilterSettingsProps> = ({
  tags,
  handleClose,
  onSettingsSaved,
  settings,
  lang,
}: FilterSettingsProps) => {
  const [curSetting, setCurSetting] = useState<SettingsType>(settings);

  const onTagsChange = (key: string) => {
    if (curSetting.selectedTags[key]) {
      const { [key]: _, ...rest } = curSetting.selectedTags;
      setCurSetting({ ...curSetting, selectedTags: rest });
    } else {
      setCurSetting({
        ...curSetting,
        selectedTags: { ...curSetting.selectedTags, [key]: true },
      });
    }
  };

  const onTagsReset = () => {
    setCurSetting({ ...curSetting, selectedTags: {} });
  };

  const onVisibilityChange = (name: string) => {
    setCurSetting({
      ...curSetting,
      columnVisibility: {
        ...curSetting.columnVisibility,
        [name]: !curSetting.columnVisibility[name],
      },
    });
  };

  const onProgressChange = (progress: Progress) => {
    setCurSetting({ ...curSetting, selectedProgress: progress });
  };

  const onCancel = () => {
    handleClose();
  };

  const onConfirm = () => {
    onSettingsSaved(curSetting);
    handleClose();
  };

  const RenderTags = (tags: Tags) => {
    if (!tags) return;
    return (
      <div
        className="d-flex flex-wrap zen-filter-tag"
        style={{ columnGap: "1rem" }}
      >
        {tags.map((tag) => {
          return (
            <span
              onClick={() => onTagsChange(tag[1])}
              className="p-1"
              key={tag[1]}
            >
              <Button
                size="sm"
                variant={
                  curSetting.selectedTags[tag[1]] ? "primary" : "secondary"
                }
              >
                {lang === "en" ? tag[1] : tag[2]}
              </Button>
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Modal
        show={true}
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
                checked={Boolean(curSetting.columnVisibility.tags)}
                onChange={() => onVisibilityChange("tags")}
                type="switch"
                label="算法标签"
                id="toggle-tags"
              />
              <Form.Check
                checked={Boolean(curSetting.columnVisibility.en)}
                onChange={() => onVisibilityChange("en")}
                type="switch"
                label="英文链接"
                id="toggle-en"
              />
              <Form.Check
                checked={Boolean(curSetting.columnVisibility.ratings)}
                onChange={() => onVisibilityChange("ratings")}
                type="switch"
                label="难度分"
                id="toggle-ratings"
              />
            </Form>
          </h5>
          <hr />
          <h5>
            标签 <Button onClick={onTagsReset}>重置</Button>
          </h5>
          {RenderTags(tags)}
          <hr />
          <h5 className="pt-1 pb-1">进度选择</h5>
          <Form.Select
            className={
              curSetting.selectedProgress
                ? progressOptionClassNames[curSetting.selectedProgress]
                : ""
            }
            value={curSetting.selectedProgress}
            onChange={(e) => {
              onProgressChange(e.target.value as Progress);
            }}
          >
            <option value=""></option>

            {[
              Progress.TODO,
              Progress.WORKING,
              Progress.TOO_HARD,
              Progress.REVIEW_NEEDED,
              Progress.AC,
            ].map((p) => (
              <option key={p} value={p} className={progressOptionClassNames[p]}>
                {progressTranslations[p]}
              </option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            关闭
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            应用设置
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

interface SettingsType {
  columnVisibility: VisibilityState;
  selectedProgress: Progress | "";
  selectedTags: Record<string, boolean>;
}

const defaultSettings: SettingsType = {
  columnVisibility: { tags: true, ratings: true, en: true },
  selectedProgress: "",
  selectedTags: {},
};

export default function Zenk() {
  // State and hooks
  const [_, startTransition] = useTransition();
  const [localStorageProgressData, setLocalStorageProgressData] =
    useState<ProgressData>({});

  const { zen: data, isPending: loading } = useZen(setLocalStorageProgressData);

  const [currentFilterKey, setCurrentFilterKey] = useStorage(
    LC_RATING_ZEN_LAST_USED_FILTER_KEY,
    {
      defaultValue: ALL_FILTER_LABEL,
    }
  );

  const curRatingFilter = useMemo(() => {
    return (
      ratingFilters.find((filter) => filter.label === currentFilterKey)?.fn ||
      (() => true)
    );
  }, [currentFilterKey]);

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

  const { solutions } = useSolutions();
  const { tags, isPending: tagsLoading } = useQuestionTags(null);
  const queryTags = (id: string): QTag => {
    return tags ? tags[id] : [[], []];
  };

  const { tags: qtags } = useTags();
  const [showFilter, setShowFilter] = useState(false);

  const [settings, setSettings] = useStorage(LC_RATING_ZEN_SETTINGS_KEY, {
    defaultValue: defaultSettings,
  });

  const filteredData = useMemo(() => {
    const tagsFilter = buildTagFilterFn(settings.selectedTags, queryTags);
    const progressFilter = buildProgressFilterFn(settings.selectedProgress);
    return data
      .filter(curRatingFilter)
      .filter(tagsFilter)
      .filter(progressFilter);
  }, [data, curRatingFilter, settings]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container fluid="lg" className="zen-container">
      <nav className="nav navbar z-3 zen-nav justify-content-start postion-sticky">
        <ButtonGroup>
          {ratingFilters.map((filter: Filter) => (
            <FilterButton
              key={filter.label}
              label={filter.label}
              variant={
                filter.label === currentFilterKey ? "primary" : "secondary"
              }
              onFilterChange={(filterKey) => {
                setCurrentFilterKey(filterKey);
              }}
            />
          ))}
        </ButtonGroup>
        <Button variant="outline-secondary" onClick={() => setShowFilter(true)}>
          <FilterIcon width={24} height={24} />
        </Button>
      </nav>

      {showFilter && (
        <FilterSettings
          lang={"zh"}
          tags={qtags}
          handleClose={() => setShowFilter(false)}
          onSettingsSaved={setSettings}
          settings={settings}
        />
      )}
      <div style={{ width: "100%" }}>
        <ZenTableComp
          querySolution={(id: string) => {
            return solutions[id];
          }}
          columnVisibility={settings.columnVisibility}
          queryTags={queryTags}
          data={filteredData}
          progress={(item: ConstQuestion) =>
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
    columnVisibility: VisibilityState;
    queryTags: (id: string) => QTag;
    data: ConstQuestion[];
    querySolution: (id: string) => SolutionType;
    progress: (v: ConstQuestion) => Progress;
    handleProgressSelectChange: (questionId: string, value: string) => void;
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
            const soln = querySolution(item._hash.toString());
            let link = soln
              ? LC_HOST +
                "/problems/" +
                soln.questSlug +
                "/solution/" +
                soln.solnSlug
              : null;
            return (
              <div className="d-flex justify-content-between align-items-center">
                {!!item.paid_only && <span>👑</span>}
                <div>
                  <a
                    href={`${LC_HOST}/problems/${item.title_slug}`}
                    target="_blank"
                  >
                    {item.question_id}. {item.title}
                  </a>
                  {columnVisibility["en"] && (
                    <a
                      href={`${LC_HOST_EN}/problems/${item.title_slug}`}
                      target="_blank"
                      className="ms-2"
                    >
                      <ShareIcon height={16} width={16} />
                    </a>
                  )}
                </div>
                <div>
                  {link && (
                    <span className="zen-ans">
                      <a href={link}>🎈</a>
                    </span>
                  )}
                </div>
              </div>
            );
          },
          enableColumnFilter: false,
          header: () => <span>题号</span>,
          // footer: (props) => props.column.id,
        },
        {
          accessorKey: "rating",
          id: "ratings",
          header: () => "难度分",
          size: 80,
          enableColumnFilter: false,
          cell: (info) => (
            <>
              <RatingCircle rating={Number(info.getValue())} />
              <ColorRating rating={Number(info.getValue())}>
                {Number(info.getValue()).toFixed(0)}
              </ColorRating>
            </>
          ),
        },
        {
          accessorFn: (row) => {
            let tags = queryTags(row._hash.toString());
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
          enableSorting: false,
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
    data: ConstQuestion[];
    columns: ColumnDef<ConstQuestion>[];
    columnVisibility?: VisibilityState;
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
                <Dropdown.Item key={`opt-${idx}`} eventKey={pageSize}>
                  {pageSize}
                </Dropdown.Item>
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
                            : "select-none",
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
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() ? "↕️" : null)}
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
                <Dropdown.Item key={`opt-${idx}`} eventKey={pageSize}>
                  {pageSize}
                </Dropdown.Item>
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
  column: Column<ConstQuestion, unknown>;
  table: TTable<ConstQuestion>;
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
