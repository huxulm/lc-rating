"use client";
import BackToTopButton from "@components/BackToTop";
import { useQuestionTags } from "@hooks/useQuestionTags";
import { Solutions, useSolutions } from "@hooks/useSolutions";
import { useTags } from "@hooks/useTags";
import { useEffect, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const LC_HOST = `https://leetcode.cn`;

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
      });
  }, [selectedTags, solutions, solLoading]);

  const renderTags = (tags: [number, string[]]) => {
    return (
      <div className="d-flex flex-wrap" style={{ gap: ".3rem" }}>
        {tags[1].map((t) => {
          return (
            <span
              className={`rounded fw-medium tag text-info active1 sm`}
              key={t}
            >
              {t}
            </span>
          );
        })}
      </div>
    );
  };

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
          <table className="search-table">
            <thead className="table-head">
              <tr className="table-row">
                <th className="d-flex align-items-center">编号</th>
                <th className="d-flex align-items-center text-left">题目</th>
                <th className="d-flex align-items-center">标签</th>
                <th className="d-flex align-items-center text-center">题解</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredSolutions.map((id, i) => {
                const sol = solutions[id];
                let link = "";
                let link1 = "";
                if (sol) {
                  link =
                    LC_HOST + "/problems/" + sol[5] + "/solution/" + sol[1];
                  link1 = LC_HOST + "/problems/" + sol[5];
                }
                let _tags = qtags["" + sol[6]];
                return (
                  <tr className="table-row bg-color" key={sol[6]}>
                    <td className="d-flex align-items-center">{i + 1}</td>
                    <td className="fw-medium text-left d-flex align-items-center">
                      <a href={link1}>{`${sol[3]}. ${sol[4]}`}</a>
                    </td>
                    <td className="d-flex align-items-center">
                      {_tags &&
                        renderTags([
                          sol[6],
                          _tags[lang === "en" ? 0 : 1] || [],
                        ])}
                    </td>
                    <td className="d-flex align-items-center">
                      <a className="nav-link fw-medium" href={link}>
                        {sol[0]}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}
