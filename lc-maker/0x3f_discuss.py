import re
import json
import argparse
import sys
from leetcode_api import load_headers, LeetCodeApi

split_url = "https://leetcode.cn/problems"

rating_url = "https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json"

class DiscussionNode:
    title: str
    sort: int
    src: str
    score: int
    solution: str
    isPremium: bool
    def __init__(self, title: str, sort: int, src: str, score: int, solution: str, isPremium: bool):
        self.title = title
        self.sort = sort
        self.src = src
        self.score = score
        self.solution = solution
        self.isPremium = isPremium

    def to_dict(self):
        return {
            "title": self.title,
            "sort": self.sort,
            "src": self.src,
            "score": self.score,
            "solution": self.solution,
            "isPremium": self.isPremium
        }

class DiscussionLeafNode:
    title: str
    sort: int
    isLeaf: bool
    summary: str
    child: list[DiscussionNode]

    def __init__(self, title: str, sort: int, isLeaf: bool, summary: str, child: list[DiscussionNode]):
        self.title = title
        self.sort = sort
        self.isLeaf = isLeaf
        self.summary = summary
        self.child = child

    def to_dict(self):
        return {
            "title": self.title,
            "sort": self.sort,
            "isLeaf": self.isLeaf,
            "summary": self.summary,
            "child": [child.to_dict() for child in self.child]
        }
    
class DiscussionSubNode:
    title: str
    sort: int
    summary: str
    child: list[DiscussionLeafNode]

    def __init__(self, title: str, sort: int, summary: str, child: list[DiscussionLeafNode]):
        self.title = title
        self.sort = sort
        self.summary = summary
        self.child = child

    def to_dict(self):
        return {
            "title": self.title,
            "sort": self.sort,
            "summary": self.summary,
            "child": [child.to_dict() for child in self.child]
        }


def get_discussion(uuid: str, lc: LeetCodeApi):
    res = lc.qaQuestionDetail(uuid)
    # we only focus on title, content
    return (res["qaQuestion"]["title"], res["qaQuestion"]["content"], res["qaQuestion"]["updatedAt"])

def refactor_summary(summary: str):
    summary = summary.strip()
    # replace all link to html format
    pattern = r'\[(.*?)\]\((.*?)\)'
    repl = r'<a href="\2">\1</a>'
    return re.sub(pattern, repl, summary)

def refactor_discussion_with_sub(content: str, rating: dict):# 有x.x的时候用这个
    contents = content.split("\n")
    # split content in section by "##"
    sub_node_list = []
    leaf_node_list = []
    node_list = []
    summary = ""
    for cont in contents:
        if cont.startswith("###"):
            summary = refactor_summary(summary)
            if len(leaf_node_list) > 0:
                leaf_node_list[-1].summary = summary
            else:
                sub_node_list[-1].summary = summary
            summary = ""
            title = cont.split("### ")[1]
            curr_leaf = DiscussionLeafNode(title, len(leaf_node_list), True, "", [])
            leaf_node_list.append(curr_leaf)
            node_list = curr_leaf.child
        elif cont.startswith("##"):
            summary = refactor_summary(summary)
            if len(leaf_node_list) > 0:
                leaf_node_list[-1].summary = summary
            elif len(sub_node_list) > 0:
                sub_node_list[-1].summary = summary
            summary = ""
            title = cont.split("## ")[1]
            curr_sub = DiscussionSubNode(title, len(sub_node_list), "", [])
            sub_node_list.append(curr_sub)
            leaf_node_list = curr_sub.child
        elif cont.startswith("- ["):
            # check if there exists a node to use
            if len(leaf_node_list) == 0:
                title = ""
                curr_leaf = DiscussionLeafNode(title, len(leaf_node_list), True, "", [])
                leaf_node_list.append(curr_leaf)
                node_list = curr_leaf.child
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
            curr_node = DiscussionNode(title, len(node_list), src, score, solution, isPremium)
            node_list.append(curr_node)
        else:
            if cont.strip() == "":
                continue
            summary += cont + "<br>"

    return sub_node_list

def refactor_discussion(content: str, rating: dict):# 没有x.x的时候用这个
    contents = content.split("\n")
    # split content in section by "##"
    sub_node_list = []
    leaf_node_list = []
    node_list = []
    summary = ""
    for cont in contents:
        if cont.startswith("##"):
            summary = refactor_summary(summary)
            if len(leaf_node_list) > 0:
                leaf_node_list[-1].summary = summary
            summary = ""
            title = cont.split("## ")[1]
            sub_node = DiscussionSubNode(title, len(sub_node_list), "", [])
            leaf_node_list = sub_node.child
            sub_node_list.append(sub_node)
            curr_leaf = DiscussionLeafNode("", len(leaf_node_list), True, "", [])
            leaf_node_list.append(curr_leaf)
            node_list = curr_leaf.child
        elif cont.startswith("- ["):
            # use regex get []()（） content
            markdown_match = re.match(r"-\s*\[(.*?)\]\((.*?)\)\s*(?:（(.*?)）)?", cont)
            title = markdown_match.group(1)
            src = markdown_match.group(2)
            additional = markdown_match.group(3)
            title_id = title.split(".")[0]
            if title_id.isdigit():
                title_id = int(title_id)
            score = rating[title_id] if title_id in rating else None
            # # 将slug从src中根据split_url前缀提取出来(ps: 有些题目不一定有split_url前缀)
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
            curr_node = DiscussionNode(title, len(node_list), src, score, solution, isPremium)
            node_list.append(curr_node)
        else:
            if cont.strip() == "":
                continue
            summary += cont + "<br>"
    return sub_node_list

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
            uuids_title.append([uuid, "./output/" + uuid + ".ts"])
        else:
            uuids_title.append([uuid, output_file])
    # get and analysis discussion content according to uuid
    for uuid, file_path in uuids_title:
        title, content, last_update = get_discussion(uuid, lc)
        # format last_update into yyyy-mm-dd hh:mm:ss
        temp_split = last_update.split("T")
        last_update = temp_split[0] + " " + temp_split[1].split(".")[0]
        content = content.replace("\r\n", "\n")
        original_src = "https://leetcode.cn/circle/discuss/" + uuid
        child_list = None
        if re.search(r'\n## [^\n]*\n', content) and re.search(r'\n### [^\n]*\n', content): # 有二级标题和三级标题
            child_list = refactor_discussion_with_sub(content, rating)
        else:
            child_list = refactor_discussion(content, rating)
        parent = {
            "title": title,
            "original_src": original_src,
            "last_update": last_update,
            "sort": 0,
            "child": [child.to_dict() for child in child_list if child.title != "分类题单" and child.title != "关联题单"]
        }
        with open(file_path, "w") as f:
            f.write("import ProblemCategory from \"@components/ProblemCatetory\";\n\nexport default" + json.dumps(parent, indent=4, ensure_ascii=False) + " as ProblemCategory;")
        # make a waiting for 1s
        import time
        time.sleep(1)