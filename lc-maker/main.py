from typing import List, Dict, Any, Optional
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
from requests import delete
import time

class LeetCodeApi:
    def __init__(self, headers) -> None:
        self.baseURL = "https://leetcode.cn"
        self.headers = headers
        # Select your transport with a defined url endpoint
        transport = AIOHTTPTransport(url="https://leetcode.cn/graphql/", headers=headers)
        # Create a GraphQL client using the defined transport
        self.client = Client(transport=transport, fetch_schema_from_transport=False)

    def problemList(self, skip, limit):
        query = gql("""
    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  problemsetQuestionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    hasMore
    total
    questions {
      acRate
      difficulty
      freqBar
      frontendQuestionId
      isFavor
      paidOnly
      solutionNum
      status
      title
      titleCn
      titleSlug
      topicTags {
        name
        nameTranslated
        id
        slug
      }
    }
  }
}
""")
        return self.client.execute(query,variable_values={"categorySlug": "all-code-essentials", "limit": "%d" % limit, "skip": "%d" % skip}, operation_name="problemsetQuestionList")

    def getMyFav(self) -> Dict[str, Any]:
        query = gql("\n        query favoriteMyFavorites($limit: Int, $skip: Int) {\n          __typename\n          favoriteMyFavorites(limit: $limit, skip: $skip) {\n            hasMore\n            total\n            favorites {\n              acNumber\n              coverUrl\n              created\n              isPublicFavorite\n              name\n              link\n              idHash\n              questionNumber\n              creator {\n                realName\n                userSlug\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n        }\n      ")
        variables = {"limit": "100", "skip": "0"}
        op = "favoriteMyFavorites"
        return self.client.execute(query, variable_values=variables, operation_name=op)
    def getMyFav_0(self):
        query = gql("\n    query myFavoriteList {\n  myCreatedFavoriteList {\n    favorites {\n      coverUrl\n      coverEmoji\n      coverBackgroundColor\n      hasCurrentQuestion\n      isPublicFavorite\n      lastQuestionAddedAt\n      name\n      slug\n    }\n    hasMore\n    totalLength\n  }\n  myCollectedFavoriteList {\n    hasMore\n    totalLength\n    favorites {\n      coverUrl\n      coverEmoji\n      coverBackgroundColor\n      hasCurrentQuestion\n      isPublicFavorite\n      name\n      slug\n      lastQuestionAddedAt\n    }\n  }\n}\n    ")
        return self.client.execute(query, variable_values={}, operation_name="myFavoriteList")

    def addFav(self, name: str, questionId: Optional[str],isPublic: Optional[bool] = True):
        operationName = "addQuestionToNewFavorite"
        variables = {
            "questionId": questionId,
            "isPublicFavorite": isPublic,
            "name": name
        }
        query = gql("\n        mutation addQuestionToNewFavorite(\n          $name: String!\n          $isPublicFavorite: Boolean!\n          $questionId: String!\n        ) {\n          addQuestionToNewFavorite(\n            name: $name\n            isPublicFavorite: $isPublicFavorite\n            questionId: $questionId\n          ) {\n            ok\n            error\n            name\n            isPublicFavorite\n            favoriteIdHash\n            questionId\n            __typename\n          }\n        }\n      ")
        return self.client.execute(query, variable_values=variables, operation_name=operationName)

    def delFav(self, idHash):
        return delete((self.baseURL + "/list/api/%s") % idHash, headers=self.headers)
    
    def addQuestionToFav(self, questionId, favoriteIdHash):
        query = gql("""
    mutation addQuestionToFavorite($favoriteIdHash: String!, $questionId: String!) {
        addQuestionToFavorite(favoriteIdHash: $favoriteIdHash, questionId: $questionId) {
            ok
            error
            favoriteIdHash
            questionId
        }
    }
""")    
        return self.client.execute(query, variable_values={"favoriteIdHash": favoriteIdHash, "questionId": questionId}, operation_name="addQuestionToFavorite")

    def delQuestionFromFav(self, questionId, favoriteIdHash):
        query = gql("""         
        mutation removeQuestionFromFavorite($favoriteIdHash: String!, $questionId: String!) {
            removeQuestionFromFavorite(
                favoriteIdHash: $favoriteIdHash
                questionId: $questionId
            ) {
                ok
                error
                favoriteIdHash
                questionId
            }
        }
     """)
        return self.client.execute(query, variable_values={"favoriteIdHash": favoriteIdHash, "questionId": questionId}, operation_name="removeQuestionFromFavorite")

    def queryByTitleSlug(self, titleSlug):
        query = gql("""
            query questionTitle($titleSlug: String!) {
                question(titleSlug: $titleSlug) {
                    questionId
                    questionFrontendId
                    title
                    titleSlug
                    isPaidOnly
                    difficulty
                    likes
                    dislikes
                    categoryTitle
                }
            }
    """)
        return self.client.execute(query, variable_values={"titleSlug": titleSlug}, operation_name="questionTitle")
def load_headers():
    hds = {}
    with open("hds.txt", 'r', encoding="utf-8") as r:
        for line in r.readlines():
            sep = line.find(":")
            if sep != -1:
                hds[line[:sep]] = line[sep+1:].strip()
    return hds

def load_list_as_dict():
    with open("list.json", 'r', encoding="utf-8") as r:
        import json
        return json.load(r)
    
def deleteAllFavs(lc: LeetCodeApi):
    # 删除个人所有收藏夹
    for fav in lc.getMyFav()["favoriteMyFavorites"]["favorites"]:
        print(lc.delFav(fav["idHash"]))

'''
创建题单 需要先提供 list.json
'''
def createList(lc: LeetCodeApi):
    pb = load_list_as_dict()
    cnt = 0
    for k, v in pb.items():
        hash = ""
        for i, q in enumerate(v):
            slug = q["src"][29:-1]
            cnt += 1
            try:
                id = lc.queryByTitleSlug(slug)["question"]["questionId"]
                if i == 0:
                    hash = lc.addFav(k, id, True)["addQuestionToNewFavorite"]["favoriteIdHash"]
                else:
                    print(lc.addQuestionToFav(id, hash))
            except:
                print("error: ", slug)
                pass
            if cnt % 50 == 0: # 防机器人识别
                time.sleep(5)    


'''
打印我的题单列表 （markdown 格式）
'''
def printList():
    links = [ (fav['name'], 'https://leetcode.cn/problem-list/%s' % fav['idHash']) for fav in lc.getMyFav()["favoriteMyFavorites"]["favorites"] ]
    print("\n".join( '[%s](%s)' % (title, link) for title, link in links ))

if __name__ == "__main__":
    hds = load_headers()
    lc = LeetCodeApi(headers=hds)
    # createList(lc)
    printList()
    
    
