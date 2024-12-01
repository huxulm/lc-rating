import re
import json
import argparse
import sys
from leetcode_api import load_headers, LeetCodeApi
from tqdm import tqdm
from typing import List, Dict
from dataclasses import dataclass, asdict

split_url = "https://leetcode.cn/problems"
rating_url = "https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json"
discussion_url_map = {
    "0viNMK":"sliding_window",
    "SqopEo":"binary_search",
    "9oZFK9":"monotonic_stack",
    "YiXPXW":"grid",
    "dHn9Vk":"bitwise_operations",
    "01LUak":"graph",
    "tXLS3i":"dynamic_programming",
    "mOr1u6":"data_structure",
    "IYT3ss":"math",
    "g6KTKL":"greedy",
    "K0n2gO":"trees",
    "SJFwQI":"string",
}

@dataclass
class ContentNode:
    title: str
    sort: int
    src: str
    score: int
    solution: str
    isPremium: bool

@dataclass
class SubtitleNode:
    title: str
    sort: int
    isLeaf: bool
    summary: str
    child: List[Dict] # List[Dict[ContentNode]]

@dataclass   
class TitleNode:
    title: str
    sort: int
    summary: str
    child: List[Dict] # List[Dict[SubtitleNode]]

@dataclass   
class RootNode:
    title: str
    original_src: str
    last_update: str
    sort: int
    child: List[Dict] # List[Dict[TitleNode]]

def get_discussion(uuid: str, lc: LeetCodeApi):
    res = lc.qaQuestionDetail(uuid)
    # we only focus on title, content
    return (res["qaQuestion"]["title"], res["qaQuestion"]["content"], res["qaQuestion"]["updatedAt"])


def refactor_summary(summary: str):
    summary = summary.strip()
    # replace all link to html format
    pattern = r'\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)'
    def replace_link(match: re.Match):
        title = match.group(1)
        url = match.group(2)
        prefix_url = "https://leetcode.cn/circle/discuss/"
        suffix = url.split(prefix_url)
        if len(suffix) > 1 and suffix[1].strip('/') in discussion_url_map:
            suffix = suffix[1].strip('/')
            return f'<a href="/lc-rating/list/{discussion_url_map[suffix]}">{title}</a>'
        return f'<a href="{url}">{title}</a>'
    return re.sub(pattern, replace_link, summary)

def refactor_discussion(root: RootNode, content: str, rating: Dict, isSubExist: bool):
    contents = content.split("\n")
    curr_title_node = TitleNode("", 0, "", [])
    curr_subtitle_node = SubtitleNode("", 0, True, "", [])
    for cont in contents:
        if isSubExist and cont.startswith("###"): # subtitle init
            # finish summary adding from subtitle or title
            if curr_subtitle_node:
                curr_subtitle_node.summary = refactor_summary(curr_subtitle_node.summary)
                # add old subtitle node to title node
                curr_title_node.child.append(asdict(curr_subtitle_node))
                curr_subtitle_node = None
            else:
                curr_title_node.summary = refactor_summary(curr_title_node.summary)
            # create new subtitle node
            title = cont.split("### ")[1]
            curr_subtitle_node = SubtitleNode(title, len(curr_title_node.child), True, "", [])

        elif isSubExist and cont.startswith("##"): # title init
            # finish summary adding from subtitle or title
            if curr_subtitle_node:
                curr_subtitle_node.summary = refactor_summary(curr_subtitle_node.summary)
                # add old subtitle node to title node
                curr_title_node.child.append(asdict(curr_subtitle_node))
                curr_subtitle_node = None
            if curr_title_node:
                curr_title_node.summary = refactor_summary(curr_title_node.summary)
                # add old title node to root node
                root.child.append(asdict(curr_title_node))
                curr_title_node = None
            # create new title node
            title = cont.split("## ")[1]
            curr_title_node = TitleNode(title, len(root.child), "", [])

        elif not isSubExist and cont.startswith("##"): # title init without subtitle
            # add old subtitle node to title node, and add title node to root node
            # finish summary adding from subtitle or title
            if curr_subtitle_node:
                curr_subtitle_node.summary = refactor_summary(curr_subtitle_node.summary)
                curr_title_node.child.append(asdict(curr_subtitle_node))
                curr_subtitle_node = None
            if curr_title_node:
                curr_title_node.summary = refactor_summary(curr_title_node.summary)
                root.child.append(asdict(curr_title_node))
                curr_title_node = None
            # create new title node
            title = cont.split("## ")[1]
            curr_title_node = TitleNode(title, len(root.child), "", [])
            # since no subtitle, create a empty subtitle node
            curr_subtitle_node = SubtitleNode("", 0, True, "", [])
        
        elif cont.startswith("- ["): # content init
            # in some case, there is no subtitle, so we need to create a empty subtitle node
            if not curr_subtitle_node:
                curr_subtitle_node = SubtitleNode("", 0, True, "", [])
            # use regex get []()（） content
            markdown_match = re.match(r"-\s*\[(.*?)\]\((.*?)\)\s*(?:（(.*?)）)?", cont)
            title = markdown_match.group(1)
            src = markdown_match.group(2)
            additional = markdown_match.group(3)
            title_id = title.split(".")[0]
            if title_id.isdigit():
                title_id = int(title_id)
            score = rating[title_id] if title_id in rating else None
            # 将slug从src中根据split_url前缀提取出来(ps: 有些题目不一定有split_url前缀)
            if split_url in src:
                src = src.split(split_url)[1]
            solution = None
            isPremium = additional != None and "会员题" in additional
            # 判断是否还有hyperlink, 一般来说即题解
            second_markdown_match = re.match(r"\[(.*)\]\((.*)\)", cont[cont.find(")")+2:])
            if second_markdown_match:
                solution = second_markdown_match.group(2)
                if split_url in solution:
                    solution = solution.split(split_url)[1]
            curr_node = ContentNode(title, len(curr_subtitle_node.child), src, score, solution, isPremium)
            curr_subtitle_node.child.append(asdict(curr_node))

        else:
            cont = cont.strip()
            if cont == "":
                continue
            if curr_subtitle_node:
                curr_subtitle_node.summary += cont + "<br>"
            elif curr_title_node:
                curr_title_node.summary += cont + "<br>"
    # 最后一个title没有加入，这里检查的是倒数第二个title
    if root.child[-1]['title'] == "关联题单":
        root.child.pop()
  
def get_rating():
    import requests
    from collections import defaultdict
    res = requests.get(rating_url).json()
    dic = defaultdict(int)
    for item in res:
        dic[item["ID"]] = item["Rating"]
    return dic

if __name__ == "__main__":
    # read from args
    parser = argparse.ArgumentParser()
    parser.add_argument("--uuid", help="uuid of discussion")
    parser.add_argument("--o", help="title of discussion, default it as uuid")
    parser.add_argument("--f", help="uuids and title of discussion from a file")
    args = parser.parse_args()
    if len(sys.argv) == 1:
        parser.print_help()
        sys.exit(1)
    uuid = args.uuid
    path = args.f
    output_file = args.o
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
            uuids_title.append([uuid, "./" + uuid + ".ts"])
        else:
            uuids_title.append([uuid, output_file])
    # get and analysis discussion content according to uuid
    for uuid, file_path in tqdm(uuids_title):
        title, content, last_update = get_discussion(uuid, lc)
        # format last_update into yyyy-mm-dd hh:mm:ss
        temp_split = last_update.split("T")
        last_update = temp_split[0] + " " + temp_split[1].split(".")[0]
        content = content.replace("\r\n", "\n")
        original_src = "https://leetcode.cn/circle/discuss/" + uuid
        isSubExist = re.search(r'\n## [^\n]*\n', content) and re.search(r'\n### [^\n]*\n', content)
        parent = RootNode(title, original_src, last_update, 0, [])
        refactor_discussion(parent, content, rating, isSubExist)
        try:
            with open(file_path, "w") as f:
                f.write("import ProblemCategory from \"@components/ProblemCatetory\";\n\nexport default" + json.dumps(asdict(parent), indent=4, ensure_ascii=False) + " as ProblemCategory;")
        except:
            print("Error: ", uuid, file_path)

        # make a waiting for 1s
        import time
        time.sleep(2)