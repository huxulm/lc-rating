"use client";
import Container from "react-bootstrap/Container";
import ProblemCategory, { hashCode } from "@components/ProblemCatetory";
import {
  TableOfContent,
  TOC,
} from "@components/ProblemCatetory/TableOfContent";
import Data from "@components/containers/List/data/binarysearch";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/esm/Form";

const mapCategory2TOC = (
  { title, child, isLeaf }: ProblemCategory,
  level: number
): TOC => {
  let toc = {
    id: `#${hashCode(title)}`,
    title: title,
    level: level,
    count: 0,
  } as TOC;
  // console.log(toc.title, toc.id);
  if (child && !isLeaf) {
    toc.children = child.map((c) => mapCategory2TOC(c, level + 1));
    toc.children.forEach((t) => {
      toc.count += t.count;
    });
  }
  if (isLeaf) {
    toc.count = child ? child.length : 0;
  }
  return toc;
};

export default function () {
  const scrollToComponent = () => {
    if (window.location.hash) {
      let id = window.location.hash.replace("#", "");
      const ele = document.getElementById(id);
      if (ele) {
        ele.scrollIntoView({ behavior: "instant" });
        ele.focus();
      }
    }
  };

  useEffect(() => scrollToComponent(), []);
  const [showEn, setShowEn] = useState<boolean>(true);
  const [showRating, setShowRating] = useState<boolean>(true);
  return (
    <Container fluid className="p-2 problem-list order-1">
      <div className="toc" id="toc">
        <TableOfContent toc={mapCategory2TOC(Data, 0)} />
      </div>
      <div
        className="pb-content ms-5 p-2"
        data-bs-spy="scroll"
        data-bs-target="#toc"
      >
        <Form
          className="position-absolute d-flex justify-content-end gap-3 fw-bold"
          style={{ top: "80px", right: '10px' }}
        >
          <Form.Check
            checked={showEn}
            onChange={() => {
              setShowEn(!showEn);
            }}
            type="switch"
            label="英文链接"
            id="toggle-tags"
          />
          <Form.Check
            checked={showRating}
            onChange={() => {
              setShowRating(!showRating);
            }}
            type="switch"
            label="难度分"
            id="toggle-ratings"
          />
        </Form>
        <ProblemCategory
          title={`<p class="fs-6 fw-bold fst-italic">来源:<a target="_blank" class="ms-2 fs-6 link" href="${Data.original_src}">${Data.original_src}</a> <span class="ms-3 fw-semibold fst-italic">最近更新: ${Data["last_update"]}</span></p>`}
          data={[Data]}
          en={showEn}
          rating={showRating}
          summary={Data.summary}
        />
      </div>
    </Container>
  );
}
