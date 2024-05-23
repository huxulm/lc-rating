from typing import List, Dict, Any, Optional
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
from requests import delete

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
