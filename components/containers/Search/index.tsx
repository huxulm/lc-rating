"use client";
import { useSolutions } from "../../../hooks/useSolutions";
import { useQuestionTags } from "../../../hooks/useQuestionTags";
import { useTags } from "../../../hooks/useTags";
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
  const { solutions: _solutions, isPending: solLoading } = useSolutions(filter);
  const { tags: qtags, isPending: tgLoading } = useQuestionTags(filter);
  const { tags } = useTags();
  const onSearchTextChange = (e: React.ChangeEvent) => {
    // @ts-ignore
    setFilter(e.target.value);
  };

  const solutions = useMemo(() => {
    let result: any = {};
    Object.keys(_solutions).forEach((id) => {
      let v = _solutions[id];
      let key: string = v[6];
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

  const [lang, setLang] = useState("zh");
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

  const renderTags = (tags: any[]) => {
    if (!tags) return;
    return (
      <div className="d-flex flex-wrap" style={{ gap: ".3rem" }}>
        {tags[1].map((t: any) => {
          return (
            <span className={`rounded fw-medium tag text-info active1 sm`}>
              {t}
            </span>
          );
        })}
      </div>
    );
  };

  const filteredSolutions = useMemo(
    () =>
      Object.keys(solutions).filter((id) => {
        const tags = qtags[id] ? qtags[id][0] || [] : [];
        if (
          Object.keys(selectedTags).filter((id) => !!selectedTags[id]).length ==
            0 &&
          tags.length == 0
        ) {
          return true;
        }
        if (
          Object.keys(selectedTags).filter((id) => !!selectedTags[id]).length ==
            0 ||
          tags.filter((id: string) => true === selectedTags[id]).length > 0
        ) {
          return true;
        }
        return false;
        // return true;
      }),
    [selectedTags, solutions, solLoading]
  );

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction(btn: any) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      let btn = document.getElementById("btn-back-to-top");
      scrollFunction(btn);
    };
  }, []);

  return (
    <Container className="search" data-bs-theme="dark">
      <Button
        variant="primary"
        id="btn-back-to-top"
        style={{
          borderRadius: "50%",
          position: "fixed",
          zIndex: 10000,
          bottom: "50px",
          right: "5rem",
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
              className="form-control fw-light"
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
                <span onClick={() => onSelectTags(tag[1])} className="p-1">
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
              {filteredSolutions
                .sort(function (ia: any, ib: any) {
                  let a = solutions[ia];
                  let b = solutions[ib];
                  return a[2] < b[2] ? 1 : a[2] == b[2] ? 0 : -1;
                })
                .map((id, i) => {
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
                    <tr className="table-row bg-color">
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
                        <a href={link}>
                          <span className="text-primary">{sol[0]}</span>
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
