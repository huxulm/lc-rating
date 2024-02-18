import { useSolutions } from "./hooks/useSolutions";
import "./app.scss";
import { useState } from "react";
const LC_HOST = `https://leetcode.cn`;
export default function Search() {
    const [filter, setFilter] = useState("");
    const solutions = useSolutions(filter);
    const onSearchTextChange = (e: React.ChangeEvent) => {
        // @ts-ignore
        setFilter(e.target.value);
    }
    return <ul className="search">
        <li className="search-input">
            <input className="form-control fw-light" placeholder="题目 或 题解标题（模糊匹配）" onChange={onSearchTextChange}></input>
            <span className="qtot">总数：{Object.keys(solutions).length}</span>
        </li>
        {Object.keys(solutions).sort(function (ia: any, ib: any) {
            let a = solutions[ia]
            let b = solutions[ib]
            return a[2] < b[2] ? 1 : (a[2] == b[2] ? 0 : -1);
        }).map((id, i) => {
            const sol = solutions[id];
            let link = "";
            if (sol) {
                link = LC_HOST + "/problems/" + sol[5] + "/solution/" + sol[1]
            }
            return <li><a href={link}><span className="fw-bold">{`${sol[3]}. ${sol[4]}`}</span><span className="text-primary">{sol[0]}</span></a></li>
        })}
    </ul>
}