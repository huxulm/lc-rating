import Container from "react-bootstrap/Container";
import ProblemCategory, { DP } from "./components/ProblemCatetory";

export default function () {
    return <Container className="list">
        <div className="justify-content-center bg-white">
            <ProblemCategory title={`<span>DP</span><p class="fs-6">整理自：<a target="_blank" className="link" href="https://leetcode.cn/circle/discuss/tXLS3i/">https://leetcode.cn/circle/discuss/tXLS3i/</a></p>`} data={DP} summary={DP[0].summary}/>
        </div>
    </Container >
}
