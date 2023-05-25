import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RatingCircle, { COLORS } from "./components/RatingCircle";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";

import "./app.scss";
import { Contest, Question } from "./makeData";
import RatingText from "./components/RatingText";

const host = `https://leetcode.cn`;

// [1200, 1399] [1400, 1599] [1600, 1899] [1900, 2099] [2100, 2399] [2400, ]
const filters = [
  {
    label: "<=1200",
    fn: function (r: any) { return r.rating && r.rating <= 1199.999 }
  },
  {
    label: "1200 - 1400",
    fn: function (r: any) { return r.rating && r.rating >= 1200.0 && r.rating <= 1399.999 }
  },
  {
    label: "1400 - 1600",
    fn: function (r: any) { return r.rating && r.rating >= 1400.0 && r.rating <= 1599.999 }
  },
  {
    label: "1600 - 1900",
    fn: function (r: any) { return r.rating && r.rating >= 1600.0 && r.rating <= 1899.999 }
  },
  {
    label: "1900 - 2100",
    fn: function (r: any) { return r.rating && r.rating >= 1900.0 && r.rating <= 2099.999 }
  },
  {
    label: "2100 - 2400",
    fn: function (r: any) { return r.rating && r.rating >= 2100.0 && r.rating <= 2399.999 }
  },
  {
    label: ">=2400",
    fn: function (r: any) { return r.rating && r.rating >= 2400.0 }
  },
]

type ConstQuestion = {
  cont_title: string;
  cont_title_slug: string;
  title: string;
  title_slug: string;
  question_id: string;
  rating: string;
};
function Zenk() {
  const [data, setData] = useState<ConstQuestion[]>([]);
  useEffect(() => {
    fetch("/lc-rating/zenk.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setFilteredData(result);
        },
        (error) => { }
      );
  }, []);
  const [filteredData, setFilteredData] = useState<ConstQuestion[]>([]);
  const changeFilter = (fn: any) => setFilteredData(data.filter(fn))
  return (
    <Container fluid="md" className="" style={{ width: "60%" }}>
      <nav className="nav navbar">
        {filters.map((f: any) => {
          return <li className="nav-link"><button onClick={() => {
            changeFilter(f.fn)
          }} className="btn btn-secondary">{f.label}</button></li>
        })}
      </nav>
      <Table bordered hover variant="light">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "100px" }}>#</th>
            <th>Contest</th>
            <th style={{ width: "400px" }}>Question</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            return (
              <tr>
                <td style={{ width: "100px" }}></td>
                <td><a href={`${host}/contest/${item.cont_title_slug}`}>{item.cont_title}</a></td>
                <td style={{ width: "auto" }}><a href={`${host}/problems/${item.title_slug}`} >{item.question_id}.{item.title}</a></td>
                <td style={{ width: "100px" }}><RatingText className="text-center" difficulty={item.rating}>{Number(item.rating).toFixed(0)}</RatingText></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Zenk;