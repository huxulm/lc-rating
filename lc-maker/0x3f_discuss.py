import re
import json
import argparse
from leetcode_api import load_headers, LeetCodeApi

split_url = "https://leetcode.cn/problems"

class DiscussionNode:
    title: str
    sort: int
    src: str
    scores: int
    solution: str
    isPremium: bool
    def __init__(self, title: str, sort: int, src: str, scores: int, solution: str, isPremium: bool):
        self.title = title
        self.sort = sort
        self.src = src
        self.scores = scores
        self.solution = solution
        self.isPremium = isPremium

    def to_dict(self):
        return {
            "title": self.title,
            "sort": self.sort,
            "src": self.src,
            "scores": self.scores,
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

def refactor_discussion_with_sub(content: str):# 有x.x的时候用这个
    contents = content.split("\r\n")
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
        elif cont.startswith("-"):
            # use regex get []() content
            parts = cont[2:].split("（")
            part1 = parts[0]
            markdown_match = re.match(r"\[(.*)\]\((.*)\)", part1)
            title = markdown_match.group(1)
            src = markdown_match.group(2)
            scores = None
            remain = part1.split(f"[{title}]({src})")
            if len(remain) > 1:
                remain = remain[1].strip()
                if remain.isnumeric():
                    scores = int(remain)
            # 有些题目只有国服有不一定有split_url 前缀
            if split_url in src:
                src = src.split(split_url)[1]
            solution = None
            isPremium = False
            if len(parts) > 1:
                part2 = parts[1]
                isPremium = part2.startswith("会员题")
                second_markdown_match = re.match(r"\[(.*)\]\((.*)\)", part2)
                if second_markdown_match:
                    solution = second_markdown_match.group(2)
                    if split_url in solution:
                        solution = solution.split(split_url)[1]
            curr_node = DiscussionNode(title, len(node_list), src, scores, solution, isPremium)
            node_list.append(curr_node)
        else:
            summary += cont + "<br>"
    return sub_node_list

def refactor_discussion(content: str):# 没有x.x的时候用这个
    contents = content.split("\r\n")
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
            summary = ""
            title = cont.split("### ")[1]
            sub_node = DiscussionSubNode(title, len(sub_node_list), "", [])
            leaf_node_list = sub_node.child
            sub_node_list.append(sub_node)
            curr_leaf = DiscussionLeafNode("", len(leaf_node_list), True, "", [])
            leaf_node_list.append(curr_leaf)
            node_list = curr_leaf.child
        elif cont.startswith("- ["):
            # use regex get []() content
            parts = cont[2:].split("（")
            part1 = parts[0]
            markdown_match = re.match(r"\[(.*)\]\((.*)\)", part1)
            title = markdown_match.group(1)
            src = markdown_match.group(2)
            scores = None
            remain = part1.split(f"[{title}]({src})")
            if len(remain) > 1:
                remain = remain[1].strip()
                if remain.isnumeric():
                    scores = int(remain)
            # 有些题目只有国服有不一定有split_url 前缀
            if split_url in src:
                src = src.split(split_url)[1]
            solution = None
            isPremium = False
            if len(parts) > 1:
                part2 = parts[1]
                isPremium = part2.startswith("会员题")
                second_markdown_match = re.match(r"\[(.*)\]\((.*)\)", part2)
                if second_markdown_match:
                    solution = second_markdown_match.group(2)
                    if split_url in solution:
                        solution = solution.split(split_url)[1]
            curr_node = DiscussionNode(title, len(node_list), src, scores, solution, isPremium)
            node_list.append(curr_node)
        else:
            summary += cont + "<br>"
    return sub_node_list

if __name__ == "__main__":
    hds = load_headers()
    lc = LeetCodeApi(headers=hds)
    # read from args
    parser = argparse.ArgumentParser()
    parser.add_argument("--uuid", help="uuid of discussion")
    args = parser.parse_args()
    if not args.uuid:
        print("usage: python 0x3f_discuss.py --uuid <uuid>")
        exit(1)
    uuid = args.uuid
    title, content, last_update = get_discussion(uuid, lc)
    original_src = "https://leetcode.cn/circle/discuss/" + uuid
    child_list = None
    if re.search(r'\n## [^\n]*\n', content): # 一般来说 二级标题前会有换行符不对的话可以检查这里
        child_list = refactor_discussion_with_sub(content)
    else:
        child_list = refactor_discussion(content)
    parent = {
        "title": title,
        "original_src": original_src,
        "last_update": last_update,
        "sort": 0,
        "child": [child.to_dict() for child in child_list if child.title != "分类题单"]
    }
    print("import ProblemCategory from \"@components/ProblemCatetory\";\n\nexport default" + json.dumps(parent, indent=4, ensure_ascii=False) + " as ProblemCategory;")