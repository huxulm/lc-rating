import re
import json
import argparse
import sys
import time
from leetcode_api import load_headers, LeetCodeApi
from tqdm import tqdm
from typing import List, Dict
from collections import deque
from dataclasses import dataclass, asdict

LEETCODE_PRE_URL = "https://leetcode.cn/problems"
RATING_URL = (
    "https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json"
)
DISCUSSION_URL_MAP = {
    "0viNMK": "sliding_window",
    "SqopEo": "binary_search",
    "9oZFK9": "monotonic_stack",
    "YiXPXW": "grid",
    "dHn9Vk": "bitwise_operations",
    "01LUak": "graph",
    "tXLS3i": "dynamic_programming",
    "mOr1u6": "data_structure",
    "IYT3ss": "math",
    "g6KTKL": "greedy",
    "K0n2gO": "trees",
    "SJFwQI": "string",
}


@dataclass
class StudyPlan:
    title: str
    src: str
    last_update: str
    children: List["Section"]


@dataclass
class Section:
    title: str
    summary: str
    isLeaf: bool
    children: List["Section"]
    problems: List["Problem"]


@dataclass
class Problem:
    id: str
    title: str
    slug: str
    src: str
    solution: str
    score: int
    isPremium: bool


def get_discussion(uuid: str, lc: LeetCodeApi):
    res = lc.qaQuestionDetail(uuid)
    # we only focus on title, content
    return (
        res["qaQuestion"]["title"],
        res["qaQuestion"]["content"],
        res["qaQuestion"]["updatedAt"],
    )


def refactor_summary(summary: str):
    summary = summary.strip()
    # replace all link to html format, ![]() -> <img src="" alt=""> and []() -> <a href=""></a>
    pattern = r"!\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)"

    def replace_img(match: re.Match):
        alt = match.group(1)
        src = match.group(2)
        return f'<img src="{src}" alt="{alt}" style="width: 100%;">'

    summary = re.sub(pattern, replace_img, summary)

    pattern = r"\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)"

    def replace_link(match: re.Match):
        title = match.group(1)
        url = match.group(2)
        prefix_url = "https://leetcode.cn/circle/discuss/"
        suffix = url.split(prefix_url)
        if len(suffix) > 1 and suffix[1].strip("/") in DISCUSSION_URL_MAP:
            suffix = suffix[1].strip("/")
            return f'<a href="/lc-rating/list/{DISCUSSION_URL_MAP[suffix]}">{title}</a>'
        return f'<a href="{url}">{title}</a>'

    return re.sub(pattern, replace_link, summary)


def extract_content(contents_queue: deque) -> List[str]:
    res = []
    if contents_queue[0].startswith("#"):
        res.append(contents_queue.popleft().strip())
    else:
        res.append("# 介绍")
    while contents_queue:
        if contents_queue[0] and contents_queue[0][0] == "#":
            break
        cont = contents_queue.popleft().strip()
        if cont == "":
            continue
        res.append(cont)
    return res


def refactor_helper(content: List[str], rating: Dict) -> Section:
    node = Section("", "", False, [], [])
    for cont in content:
        if cont.startswith("#"):
            # 这里假设了标题是#开头，且结尾没有#，否则title会出现问题
            node.title = cont.split("#")[-1].strip()
        elif cont.startswith("- ["):
            markdown_match = re.match(r"-\s*\[(.*?)\]\((.*?)\)\s*(?:（(.*?)）)?", cont)
            title = markdown_match.group(1)
            ori_src = markdown_match.group(2)
            additional = markdown_match.group(3)
            title_id = title.split(". ")[0]
            if title_id.isdigit():
                title_id = int(title_id)
            score = rating[title_id] if title_id in rating else None
            if LEETCODE_PRE_URL in ori_src:
                src = ori_src.split(LEETCODE_PRE_URL)[1]
            else:
                src = None
            solution = None
            isPremium = additional is not None and "会员题" in additional
            second_markdown_match = re.match(
                r"\[(.*)\]\((.*)\)", cont[cont.find(")") + 2 :]
            )
            if second_markdown_match:
                solution = second_markdown_match.group(2)
                if LEETCODE_PRE_URL in solution:
                    solution = solution.split(LEETCODE_PRE_URL)[1]
            node.isLeaf = True
            node.problems.append(
                Problem(
                    title_id,
                    title,
                    src,
                    ori_src,
                    solution,
                    score,
                    isPremium,
                )
            )
        else:
            node.summary += cont + "<br>"
    node.summary = refactor_summary(node.summary)
    return node


def depth_helper(line: str) -> int:
    depth = 0
    for char in line:
        if char != "#":
            break
        depth += 1
    return depth


def refactor_discussion_rec(contents_queue: deque, rating: Dict) -> Section:
    contents = extract_content(contents_queue)
    curr_dep = depth_helper(contents[0])
    root = refactor_helper(contents, rating)
    if root.title == "关联题单" or root.title == "分类题单":
        return None
    if not content_queue or depth_helper(content_queue[0]) <= curr_dep:
        return root
    while content_queue and depth_helper(content_queue[0]) > curr_dep:
        child = refactor_discussion_rec(content_queue, rating)
        if child:
            root.children.append(child)
    return root


def get_rating():
    import requests
    from collections import defaultdict

    res = requests.get(RATING_URL).json()
    dic = defaultdict(int)
    for item in res:
        dic[item["ID"]] = item["Rating"]
    return dic


if __name__ == "__main__":
    # read from args
    parser = argparse.ArgumentParser()
    parser.add_argument("-u", "--uuid", help="uuid of discussion")
    parser.add_argument(
        "-o", "--output", help="title of discussion, default it as uuid"
    )
    parser.add_argument(
        "-f", "--file", help="uuids and title of discussion from a file"
    )
    parser.add_argument(
        "--pretty", action="store_true", help="indent the json file with 4 spaces"
    )
    args = parser.parse_args()
    if len(sys.argv) == 1:
        parser.print_help()
        sys.exit(1)
    uuid = args.uuid
    path = args.file
    output_file = args.output
    indent = 4 if args.pretty else None

    # initialize
    hds = load_headers()
    lc = LeetCodeApi(headers=hds)
    rating = get_rating()
    uuids_title = []
    if path:
        with open(path, "r") as f:
            temp = f.readlines()
        for line in temp:
            uuids_title.append(line.strip().split(" "))
    if uuid:
        if not output_file:
            uuids_title.append([uuid, "./" + uuid + ".json"])
        else:
            uuids_title.append([uuid, output_file])

    # get and analysis discussion content according to uuid
    for uuid, file_path in tqdm(uuids_title):
        title, content, last_update = get_discussion(uuid, lc)
        # format last_update into yyyy-mm-dd hh:mm:ss
        content = content.replace("\r\n", "\n").strip()

        try:
            with open(f"raw_md/{uuid}.txt", "w", encoding="utf-8") as f:
                f.write(content)
        except BaseException as e:
            print("Error: ", uuid, file_path, e)

        original_src = "https://leetcode.cn/circle/discuss/" + uuid
        content_queue = deque(content.split("\n"))
        parent = StudyPlan(title, original_src, last_update, [])
        while content_queue:
            node = refactor_discussion_rec(content_queue, rating)
            if node:
                parent.children.append(node)
        try:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(json.dumps(asdict(parent), indent=indent, ensure_ascii=False))
        except BaseException as e:
            print("Error: ", uuid, file_path, e)

        time.sleep(2)
