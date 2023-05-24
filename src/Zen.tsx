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

const host = `https://leetcode.cn`;

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
        },
        (error) => {}
      );
  }, []);
  return (
    <Container fluid="md" className="" style={{ width: "60%" }}>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th style={{width: "100px"}}>#</th>
            <th>Contest</th>
            <th style={{width: "400px"}}>Question</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td style={{width: "100px"}}></td>
                <td><a href={`${host}/contest/${item.cont_title_slug}`}>{item.cont_title}</a></td>
                <td style={{width: "350px"}}><a href={`${host}/problems/${item.title_slug}`} >{item.question_id}.{item.title}</a></td>
                <td>{item.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Zenk;