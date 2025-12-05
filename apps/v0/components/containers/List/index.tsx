"use client";

import FixedSidebar from "@components/FixedSidebar";
import MoveToTopButton from "@components/MoveToTopButton";
import ProblemCategory from "@components/ProblemCatetory";
import {
  TableOfContent,
  TOC,
} from "@components/ProblemCatetory/TableOfContent";
import useStorage from "@hooks/useStorage";
import { hashCode } from "@utils/hash";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/esm/Form";
import MoveToTodoButton from "./MoveToTodoButton";

const mapCategory2TOC = (
  { title, leafChild, nonLeafChild }: ProblemCategory,
  level: number
): TOC => {
  let toc = {
    id: `#${hashCode(title)}`,
    title: title,
    level: level,
    count: 0,
  } as TOC;
  toc.count = leafChild?.length || 0;
  toc.children = nonLeafChild.map((c) => {
    if (c) return mapCategory2TOC(c, level + 1);
    return null;
  });
  toc.children.forEach((t) => {
    toc.count += t.count;
  });
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

  const settingDefault = {
    showEn: true,
    showRating: true,
    showPremium: true,
  };

  const [setting = settingDefault, setSetting] = useStorage(
    "lc-rating-list-settings",
    {
      defaultValue: settingDefault,
    }
  );

  const buttons = [
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
  ];

  const switchers = [
    {
      id: "toggle-tags",
      content: (
        <Form.Check
          checked={setting.showEn}
          onChange={() => {
            setSetting({ ...setting, showEn: !setting.showEn });
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
          checked={setting.showRating}
          onChange={() => {
            setSetting({ ...setting, showRating: !setting.showRating });
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
          checked={setting.showPremium}
          onChange={() => {
            setSetting({ ...setting, showPremium: !setting.showPremium });
          }}
          type="switch"
          label="会员题"
        />
      ),
    },
  ];

  return (
    <Container fluid className="p-2 problem-list order-1">
      <FixedSidebar
        gap={3}
        initialOffset={{ x: "2rem", y: "2rem" }}
        items={buttons}
        position="bottom"
      />
      <FixedSidebar
        className="fw-bold"
        direction="horizontal"
        gap={3}
        initialOffset={{ x: "1rem", y: "4rem" }}
        items={switchers}
        position="top"
      />
      <div className="toc" id="toc">
        <TableOfContent toc={mapCategory2TOC(data, 0)} />
      </div>
      <div
        className="pb-content ms-5 p-2"
        data-bs-spy="scroll"
        data-bs-target="#toc"
      >
        <ProblemCategory
          title={`<p class="fs-6 fw-bold fst-italic">来源:<a target="_blank" class="ms-2 fs-6 link" href="${data.original_src}">${data.original_src}</a> <span class="ms-3 fw-semibold fst-italic">最近更新: ${data["last_update"]}</span></p>`}
          data={[data]}
          showEn={setting.showEn}
          showRating={setting.showRating}
          showPremium={setting.showPremium}
          summary={""}
        />
      </div>
    </Container>
  );
}
