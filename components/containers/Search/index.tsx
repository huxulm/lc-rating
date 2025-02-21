"use client";
import BackToTopButton from "@components/BackToTop";
import { useQuestionTags } from "@hooks/useQuestionTags";
import { Solutions, useSolutions } from "@hooks/useSolutions";
import { useTags } from "@hooks/useTags";
import {
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

function PaginatedTable({ data }) {
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
      {
        header: "编号",
        cell: ({ row }) => (
          <span className="d-flex">{row.original.idx + 1}</span>
        ),
      },
      {
        header: "题目",
        accessorKey: "QTitle",
        cell: ({ row }) => (
          <a className="fw-medium" href={row.original.QLink}>
            {row.original.QTitle}
          </a>
        ),
      },
      {
        header: "标签",
        accessorKey: "tags",
        cell: ({ row }) => renderTags(row.original.tags),
      },
      {
        header: "题解",
        accessorKey: "ATitle",
        cell: ({ row }) => (
          <a className="fw-medium" href={row.original.ALink}>
            {row.original.ATitle}
          </a>
        ),
      },
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
          {table.getRowModel().rows.map((row) => (
            <tr className="table-row bg-color" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="d-flex align-items-center" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
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

  const { solutions: _solutions, isPending: solLoading } = useSolutions(filter);
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

  const solutions = useMemo(() => {
    let result: Solutions = {};
    Object.keys(_solutions).forEach((id) => {
      let v = _solutions[id];
      let key = v[6];
      if (
        filter === "" ||
        v[3].indexOf(filter) != -1 ||
        v[0].indexOf(filter) != -1 ||
        v[4].indexOf(filter) != -1
      ) {
        result[key] = v; // title_slug_hash => question
      }
    });
    return result;
  }, [filter, _solutions]);

  const filteredSolutions = useMemo(() => {
    const selectedTagIds = Object.keys(selectedTags).filter(
      (id) => !!selectedTags[id]
    );
    return Object.keys(solutions)
      .filter((id) => {
        const tags = qtags[id]?.[0] || [];
        if (selectedTagIds.length == 0) return true;
        return tags.some((tag) => selectedTags[tag]);
      })
      .sort(function (ia, ib) {
        let a = solutions[ia];
        let b = solutions[ib];
        return a[2] < b[2] ? 1 : a[2] == b[2] ? 0 : -1;
      })
      .map((key, idx) => {
        const sol = solutions[key];
        const QLink = `${LC_HOST}/problems/${sol[5]}`;
        const ALink = `${LC_HOST}/problems/${sol[5]}/solution/${sol[1]}`;
        const QTitle = `${sol[3]}. ${sol[4]}`;
        const tags = qtags[sol[6].toString()]?.[lang === "en" ? 0 : 1] || [];
        const ATitle = sol[0];

        return {
          idx,
          QTitle,
          QLink,
          tags,
          ATitle,
          ALink,
        };
      });
  }, [selectedTags, solutions, solLoading]);

  return (
    <Container className="search">
      <BackToTopButton />
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
            <span className="qtot">总数：{filteredSolutions.length}</span>
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
          <PaginatedTable data={filteredSolutions} />
        </Col>
      </Row>
    </Container>
  );
}
