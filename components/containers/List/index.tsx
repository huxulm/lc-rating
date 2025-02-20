"use client";
import Container from "react-bootstrap/Container";
import ProblemCategory, { hashCode } from "@components/ProblemCatetory";
import {
  TableOfContent,
  TOC,
} from "@components/ProblemCatetory/TableOfContent";
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

  if (!child) return toc;

  if (!isLeaf) {
    toc.children = child.map((c) => mapCategory2TOC(c, level + 1));
    toc.children.forEach((t) => {
      toc.count += t.count;
    });
  } else {
    toc.count = child.length;
  }
  return toc;
};

export default function ({ data }: { data: ProblemCategory }) {
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
  const [showPremium, setPremium] = useState<boolean>(true);
  return (
    <Container fluid className="p-2 problem-list order-1">
      <div className="toc" id="toc">
        <TableOfContent toc={mapCategory2TOC(data, 0)} />
      </div>
      <div
        className="pb-content ms-5 p-2"
        data-bs-spy="scroll"
        data-bs-target="#toc"
      >
        <Form
          className="position-absolute d-flex justify-content-end gap-3 fw-bold"
          style={{ top: "80px", right: "10px" }}
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
          <Form.Check
            checked={showPremium}
            onChange={() => {
              setPremium(!showPremium);
            }}
            type="switch"
            label="会员题"
            id="toggle-premiums"
          />
        </Form>
        <ProblemCategory
          title={`<p class="fs-6 fw-bold fst-italic">来源:<a target="_blank" class="ms-2 fs-6 link" href="${data.original_src}">${data.original_src}</a> <span class="ms-3 fw-semibold fst-italic">最近更新: ${data["last_update"]}</span></p>`}
          data={[data]}
          showEn={showEn}
          showRating={showRating}
          showPremium={showPremium}
          summary={data.summary}
        />
      </div>
    </Container>
  );
}
