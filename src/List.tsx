import Container from "react-bootstrap/Container";
import ProblemCategory, { DP } from "./components/ProblemCatetory";

export default function () {
    return <Container className="list">
        <div className="justify-content-center bg-white">
            <ProblemCategory title="DP" data={DP} summary={DP[0].summary}/>
            <p>整理自：<a className="link" href="https://leetcode.cn/circle/discuss/tXLS3i/">https://leetcode.cn/circle/discuss/tXLS3i/</a></p>
        </div>
    </Container >
}
