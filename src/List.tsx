import Container from "react-bootstrap/Container";
import ProblemCategory, { DP, hashCode } from "./components/ProblemCatetory";
import {
  TableOfContent,
  TOC,
} from "./components/ProblemCatetory/TableOfContent";

const mapCategory2TOC = (
  { title, child, isLeaf }: ProblemCategory,
  level: number
): TOC => {
  let toc = {
    id: `#${hashCode(title)}`,
    title: title,
    level: level,
  } as TOC;
  // console.log(toc.title, toc.id);
  if (child && !isLeaf) {
    toc.children = child.map((c) => mapCategory2TOC(c, level + 1));
  }
  return toc;
};

export default function () {
  return (
    <Container className="p-2 problem-list order-1">
      <div className="toc" id="toc">
        <TableOfContent toc={mapCategory2TOC(DP[0], 0)} />
      </div>
      <div className="pb-content ms-5 p-2" data-bs-spy="scroll" data-bs-target="#toc">
        <ProblemCategory
          title={`<span>DP</span><p class="fs-6">整理自 &nbsp;&nbsp;<a target="_blank" class="fs-6 link" href="https://leetcode.cn/circle/discuss/tXLS3i/">https://leetcode.cn/circle/discuss/tXLS3i/</a></p>`}
          data={DP}
          summary={DP[0].summary}
        />
      </div>
    </Container>
  );
}
