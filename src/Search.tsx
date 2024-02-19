import { useSolutions } from "./hooks/useSolutions";
import { useQuestionTags } from "./hooks/useQuestionTags";
import { useTags } from "./hooks/useTags";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import "./app.scss";

const LC_HOST = `https://leetcode.cn`;

export default function Search() {
    const [filter, setFilter] = useState("");
    const { solutions, isPending: solLoading } = useSolutions(filter);
    const { tags: qtags, isPending: tgLoading } = useQuestionTags(filter);
    const { tags } = useTags();
    const onSearchTextChange = (e: React.ChangeEvent) => {
        // @ts-ignore
        setFilter(e.target.value);
    }
    const [lang, setLang] = useState("zh");
    const onChangeLang = () => {
        setLang(() => lang === "en" ? "zh" : "en")
    }

    const renderTags = (tags: any[]) => {
        if (!tags) return
        return <div className="d-flex flex-wrap" style={{ columnGap: ".5rem" }}>
            {tags.map(t => {
                return <span className="rounded p-1 fw-medium tag">{t}</span>
            })}
        </div>
    }
    return (
        <Container className="search" data-bs-theme="dark">
            <Row as="div" className="justify-content-center p-3">
                <Col md={5} sm={12} lg={5} className="position-relative">
                    <input className="form-control fw-light" placeholder="题目 或 题解标题（模糊匹配）" onChange={onSearchTextChange}></input>
                    <span className="qtot">总数：{Object.keys(solutions).length}</span>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col as="ul" md={8} sm={12} lg={10}>
                    <div className="d-flex flex-wrap" style={{ columnGap: "1rem" }}>
                        <Button variant="outline-secondary rounded" size="sm" onClick={onChangeLang}>{`${lang === 'en' ? "中文" : "英文"}标签`}</Button>
                        {tags.map(tag => {
                            return (
                                <span className="p-1">
                                    <span className="rounded p-1 bg-warning-subtle fw-medium tag">{lang === 'en' ? tag[1] : tag[2]}</span>
                                </span>
                            );
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col as="ul" md={8} sm={12} lg={10}>
                    {solLoading && <Spinner animation="border"></Spinner>}
                    <table className="search-table">
                        <thead>
                            <tr className="table-row">
                                <th>编号</th>
                                <th className="text-left">题目</th>
                                <th>标签</th>
                                <th>题解</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {Object.keys(solutions).sort(function (ia: any, ib: any) {
                                let a = solutions[ia]
                                let b = solutions[ib]
                                return a[2] < b[2] ? 1 : (a[2] == b[2] ? 0 : -1);
                            }).map((id, i) => {
                                const sol = solutions[id];
                                let link = "";
                                let link1 = "";
                                if (sol) {
                                    link = LC_HOST + "/problems/" + sol[5] + "/solution/" + sol[1]
                                    link1 = LC_HOST + "/problems/" + sol[5]
                                }
                                return (

                                    <tr className="table-row bg-color">
                                        <td>{i+1}</td>
                                        <td className="fw-bold text-left">
                                            <a href={link1}>{`${sol[3]}. ${sol[4]}`}</a>
                                        </td>
                                        <td>{renderTags(qtags[sol[6]] ? qtags["" + sol[6]][lang === "en" ? 0 : 1] : [])}</td>
                                        <td>
                                            <a href={link}>
                                                <span className="text-primary">{sol[0]}</span>
                                            </a>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}