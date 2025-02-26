"use client";

import FixedSidebar from "@components/FixedSidebar";
import MoveToTopButton from "@components/MoveToTopButton";
import ProblemCategory from "@components/ProblemCatetory";
import {
  TableOfContent,
  TOC,
} from "@components/ProblemCatetory/TableOfContent";
import { hashCode } from "@utils/hash";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/esm/Form";
import MoveToTodoButton from "./MoveToTodoButton";

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
      <FixedSidebar
        items={[
          {
            id: "move-to-top",
            content: <MoveToTopButton />,
          },
          {
            id: "move-to-todo",
            content: <MoveToTodoButton />,
            tooltip: "下一题",
          },
          {
            id: "move-to-random-todo",
            content: <MoveToTodoButton random />,
            tooltip: "随机下一题",
          },
        ]}
        position="bottom"
        initialOffset={{ x: "2rem", y: "2rem" }}
        gap={3}
      />
      <div className="toc" id="toc">
        <TableOfContent toc={mapCategory2TOC(data, 0)} />
      </div>
      <div
        className="pb-content ms-5 p-2"
        data-bs-spy="scroll"
        data-bs-target="#toc"
      >
        <FixedSidebar
          position="top"
          direction="horizontal"
          initialOffset={{ x: "1rem", y: "4rem" }}
          gap={3}
          className="fw-bold"
          items={[
            {
              id: "toggle-tags",
              content: (
                <Form.Check
                  checked={showEn}
                  onChange={() => {
                    setShowEn(!showEn);
                  }}
                  type="switch"
                  label="英文链接"
                />
              ),
            },
            {
              id: "toggle-ratings",
              content: (
                <Form.Check
                  checked={showRating}
                  onChange={() => {
                    setShowRating(!showRating);
                  }}
                  type="switch"
                  label="难度分"
                />
              ),
            },
            {
              id: "toggle-premiums",
              content: (
                <Form.Check
                  checked={showPremium}
                  onChange={() => {
                    setPremium(!showPremium);
                  }}
                  type="switch"
                  label="会员题"
                />
              ),
            },
          ]}
        />
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
