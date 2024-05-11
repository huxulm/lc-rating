"use client";
import Container from "react-bootstrap/Container";
import ProblemCategory, {
  hashCode,
} from "@components/ProblemCatetory";
import {
  TableOfContent,
  TOC,
} from "@components/ProblemCatetory/TableOfContent";
import Data from "@components/containers/List/data/dynamicprogramming";
import { useEffect } from "react";

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
    toc.children.forEach(t => {
      toc.count += t.count;
    })
  }
  if (isLeaf) {
    toc.count = child.length;
  }
  return toc;
};

export default function () {
  const scrollToComponent = () => {
    if (window.location.hash) {
      let id = window.location.hash.replace("#", "");
      const ele = document.getElementById(id);
      if (ele) {
        ele.scrollIntoView({behavior: "instant"});
        ele.focus();
      }
    }
  }

  useEffect(() => scrollToComponent(), []);
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
        <ProblemCategory
          title={`<p class="fs-6 p-0">来源 &nbsp;<a target="_blank" class="fs-6 link" href="${Data.original_src}">${Data.original_src}</a></p>`}
          data={[Data]}
          summary={Data.summary}
        />
      </div>
    </Container>
  );
}
