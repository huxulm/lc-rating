"use client";

import FixedSidebar from "@components/FixedSidebar";
import MoveToTopButton from "@components/MoveToTopButton";
import { useQuestionTags } from "@hooks/useQuestionTags";
import { useSolutions } from "@hooks/useSolutions";
import { useTags } from "@hooks/useTags";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const LC_HOST = `https://leetcode.cn`;
const columnHelper = createColumnHelper<filtSolnsType>();

interface filtSolnsType {
  idx: number;
  questTitle: string;
  questLink: string;
  tags: string[];
  solnTitle: string;
  solnLink: string;
}

interface PaginatedTableProps {
  data: filtSolnsType[];
}

function PaginatedTable({ data }: PaginatedTableProps) {
  const renderTags = (tags: string[]) => {
    return (
      <div className="d-flex flex-wrap" style={{ gap: ".3rem" }}>
        {tags.map((t) => {
          return (
            <span className="rounded fw-medium tag active1 sm" key={t}>
              {t}
            </span>
          );
        })}
      </div>
    );
  };

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "index",
        header: "编号",
        cell: ({ row }) => (
          <span className="d-flex">{row.original.idx + 1}</span>
        ),
      }),
      columnHelper.accessor("questTitle", {
        header: "题目",
        cell: ({ row }) => (
          <a className="fw-medium" href={row.original.questLink}>
            {row.original.questTitle}
          </a>
        ),
      }),
      columnHelper.accessor("tags", {
        header: "标签",
        cell: ({ row }) => renderTags(row.original.tags),
      }),
      columnHelper.accessor("solnTitle", {
        header: "题解",
        cell: ({ row }) => (
          <a className="fw-medium" href={row.original.solnLink}>
            {row.original.solnTitle}
          </a>
        ),
      }),
    ],
    []
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: (pagination) => {
      setPagination(pagination);
    },
  });

  const [curPage, setCurPage] = useState(1);

  const paginationRow = () => {
    return (
      <div className="d-flex align-items-center justify-content-evenly mt-3 mb-3">
        <span className="d-flex align-items-center gap-2">
          <Button
            variant="primary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            上一页
          </Button>
          <span>
            第 {table.getState().pagination.pageIndex + 1} 页 / 共{" "}
            {table.getPageCount()} 页
          </span>
          <Button
            variant="primary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            下一页
          </Button>
        </span>
        <span className="d-flex align-items-center gap-2">
          <span>跳转至第</span>
          <input
            value={curPage}
            min={1}
            max={table.getPageCount()}
            type="number"
            onChange={(e) => {
              setCurPage(Number(e.target.value));
            }}
          />
          <span>页</span>
          <Button
            variant="primary"
            onClick={() => {
              table.setPageIndex(curPage - 1);
            }}
          >
            确认
          </Button>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 50, 100].map((size) => (
            <option key={size} value={size}>
              每页 {size} 条
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div>
      {paginationRow()}
      <table className="search-table">
        <thead className="table-head">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="table-row" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="d-flex align-items-center" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="table-body">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr className="table-row bg-color" key={row.id}>
              {row.getVisibleCells().map((cell) => {
                const context = {
                  ...cell.getContext(),
                  rowIndex,
                };
                return (
                  <td className="d-flex align-items-center" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, context)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {paginationRow()}
    </div>
  );
}

export default function Search() {
  const [filter, setFilter] = useState("");
  const onSearchTextChange = (e: React.ChangeEvent) => {
    // @ts-ignore
    setFilter(e.target.value);
  };

  const { solutions, isPending: solLoading } = useSolutions();
  const { tags: qtags, isPending: tgLoading } = useQuestionTags(filter);
  const { tags } = useTags();

  const [lang, setLang] = useState<"zh" | "en">("zh");
  const onChangeLang = () => {
    setLang(() => (lang === "en" ? "zh" : "en"));
  };

  const [selectedTags, setSelectedTags] = useState<Record<string, Boolean>>({});
  const onSelectTags = (key: string) => {
    setSelectedTags({ ...selectedTags, [key]: !!!selectedTags[key] });
  };
  const onResetTags = () => {
    setSelectedTags({});
  };

  const filtSolns = useMemo<filtSolnsType[]>(() => {
    const selectedTagIds = Object.keys(selectedTags).filter(
      (id) => !!selectedTags[id]
    );

    return Object.keys(solutions)
      .filter((hash) => {
        let sol = solutions[hash];
        return (
          filter === "" ||
          sol.solnTitle.indexOf(filter) != -1 ||
          sol.questId.indexOf(filter) != -1 ||
          sol.questTitle.indexOf(filter) != -1
        );
      })
      .filter((hash) => {
        const tags = qtags[hash]?.[0] || [];
        if (selectedTagIds.length == 0) return true;
        return tags.some((tag) => selectedTags[tag]);
      })
      .sort(function (hash_a, hash_b) {
        let a = solutions[hash_a];
        let b = solutions[hash_b];
        return a.solnTime < b.solnTime ? 1 : a.solnTime == b.solnTime ? 0 : -1;
      })
      .map((key, idx) => {
        const soln = solutions[key];
        const questLink = `${LC_HOST}/problems/${soln.questSlug}`;
        const solnLink = `${LC_HOST}/problems/${soln.questSlug}/solution/${soln.solnSlug}`;
        const questTitle = `${soln.questId}. ${soln.questTitle}`;
        const tags =
          qtags[soln._hash.toString()]?.[lang === "en" ? 0 : 1] || [];
        const solnTitle = soln.solnTitle;

        return {
          idx,
          questTitle,
          questLink,
          tags,
          solnTitle,
          solnLink,
        };
      });
  }, [filter, solutions, selectedTags, solLoading]);

  return (
    <Container className="search">
      <FixedSidebar
        items={[
          {
            id: "back-to-top",
            content: <MoveToTopButton />,
          },
        ]}
        position="bottom"
        initialOffset={{ x: "2rem", y: "2rem" }}
        gap={3}
      />
      <Row
        as="div"
        className="justify-content-center p-3 position-sticky top-0 z-3"
        style={{ zIndex: 1000 }}
      >
        <Row
          md={12}
          sm={12}
          lg={12}
          className="justify-content-center"
          style={{ gap: ".5rem" }}
        >
          <Col md={5} sm={12} lg={5} className="position-relative">
            <input
              className="form-control"
              placeholder="题号、标目、题解标题（模糊匹配）"
              onChange={onSearchTextChange}
            ></input>
            <span className="qtot">总数：{filtSolns.length}</span>
          </Col>
          <Col md={2} sm={12} lg={2}>
            <ButtonGroup className="w-100">
              <Button
                className="fw-medium"
                variant="outline-secondary"
                size="sm"
                onClick={onChangeLang}
              >{`${lang === "en" ? "中文" : "英文"}标签`}</Button>
              <Button
                className="fw-medium"
                variant="outline-secondary"
                onClick={onResetTags}
              >
                重置
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Row>
      <Row className="justify-content-center">
        <Col as="ul" md={8} sm={12} lg={10}>
          <div className="d-flex flex-wrap" style={{ columnGap: "1rem" }}>
            {tags.map((tag) => {
              return (
                <span
                  onClick={() => onSelectTags(tag[1])}
                  className="p-1"
                  key={tag[1]}
                >
                  <span
                    className={`rounded p-1 fw-medium tag ${
                      !!selectedTags[`${tag[1]}`] ? "active" : ""
                    }`}
                  >
                    {lang === "en" ? tag[1] : tag[2]}
                  </span>
                </span>
              );
            })}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col as="ul" md={8} sm={12} lg={10}>
          {solLoading && (
            <Row className="justify-content-center">
              <Spinner animation="border"></Spinner>
            </Row>
          )}
          <PaginatedTable data={filtSolns} />
        </Col>
      </Row>
    </Container>
  );
}
