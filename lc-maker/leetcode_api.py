from typing import List, Dict, Any, Optional
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
from requests import delete

def load_headers():
    hds = {}
    with open("hds.txt", 'r', encoding="utf-8") as r:
        for line in r.readlines():
            sep = line.find(":")
            if sep != -1:
                hds[line[:sep]] = line[sep+1:].strip()
    return hds

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
    
    def qaQuestionDetail(self, uuid):
        query = gql("""query qaQuestionDetail($uuid: ID!) {\n  qaQuestion(uuid: $uuid) {\n    ...qaQuestion\n    myAnswerId\n    __typename\n  }\n}\n\nfragment qaQuestion on QAQuestionNode {\n  ipRegion\n  uuid\n  slug\n  title\n  thumbnail\n  summary\n  content\n  slateValue\n  sunk\n  pinned\n  pinnedGlobally\n  byLeetcode\n  isRecommended\n  isRecommendedGlobally\n  subscribed\n  hitCount\n  numAnswers\n  numPeopleInvolved\n  numSubscribed\n  createdAt\n  updatedAt\n  status\n  identifier\n  resourceType\n  articleType\n  alwaysShow\n  alwaysExpand\n  score\n  favoriteCount\n  isMyFavorite\n  isAnonymous\n  canEdit\n  reactionType\n  atQuestionTitleSlug\n  blockComments\n  reactionsV2 {\n    count\n    reactionType\n    __typename\n  }\n  tags {\n    name\n    nameTranslated\n    slug\n    imgUrl\n    tagType\n    __typename\n  }\n  subject {\n    slug\n    title\n    __typename\n  }\n  contentAuthor {\n    ...contentAuthor\n    __typename\n  }\n  realAuthor {\n    ...realAuthor\n    __typename\n  }\n  __typename\n}\n\nfragment contentAuthor on ArticleAuthor {\n  username\n  userSlug\n  realName\n  avatar\n  __typename\n}\n\nfragment realAuthor on UserNode {\n  username\n  profile {\n    userSlug\n    realName\n    userAvatar\n    __typename\n  }\n  __typename\n}\n""")
        return self.client.execute(query, variable_values={"uuid": uuid}, operation_name="qaQuestionDetail")
