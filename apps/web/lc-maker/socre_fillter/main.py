from json import load, dump
from math import ceil
from typing import Dict, Any

from pymongo import MongoClient, database


def get_database():
    # 提供 mongodb atlas url 以使用 pymongo 将 python 连接到 mongodb
    CONNECTION_STRING = "mongodb://root:o039fjf1Ef@127.0.0.1:27017"

    # 使用 MongoClient 创建连接。您可以导入 MongoClient 或者使用 pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)

    # 为我们的示例创建数据库（我们将在整个教程中使用相同的数据库
    return client["lc"]


class ScoreGetter:
    lc: database.Database

    def __init__(self):
        self.lc = get_database()

    def parse(self):
        with open('list.json', 'r', encoding="utf-8") as r:
            d = load(r)
            self.deep_into(d)
            with open("list_v1.json", "w", encoding="utf-8") as w:
                dump(d, w, ensure_ascii=False)

    def get_score_by_slug(self, slug: str) -> Any:
        item = self.lc['problem'].find_one({"titleSlug": slug})
        if item: return item['rating']

    def deep_into(self, d: Dict[str, Any]):
        if "child" in d:
            for v in d["child"]:
                self.deep_into(v)
        if "src" in d and "child" not in d:
            # query score
            slug = d["src"].strip("/")
            score = self.get_score_by_slug(slug)
            print(slug, score)
            if score:
                d['score'] = ceil(score)


if __name__ == "__main__":
    # with open('math.json') as r:
    #     d = load(r)
    #     deep_into(d)
    sg = ScoreGetter()
    sg.parse()
