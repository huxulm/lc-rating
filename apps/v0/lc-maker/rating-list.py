from typing import Dict, Any
from requests import get
from collections import defaultdict
import time
from leetcode_api import load_headers, LeetCodeApi

rating_data_url = 'https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json'

def group_mapping() -> Dict[str, Any]:
    data = get(rating_data_url)
    if data.status_code != 200:
        return {}
    g = defaultdict(list)
    for v in data.json():
        r = v['Rating']
        if r < 1200:
            g['<1200'].append(v)
        elif r < 1400:
            g['[1200, 1400)'].append(v)
        elif r < 1600:
            g['[1400, 1600)'].append(v)
        elif r < 1900:
            g['[1600, 1900)'].append(v)
        elif r < 2100:
            g['[1900, 2100)'].append(v)
        elif r < 2400:
            g['[2100, 2400)'].append(v)
        else:
            g['>=2400'].append(v)
    for k in g.keys():
        g[k].sort(key=lambda v: v['Rating'])
    return g

if __name__ == '__main__':
    hds = load_headers()
    lc = LeetCodeApi(headers=hds)
    g = group_mapping()
    cnt = 0
    for k, plist in g.items():
        hash = ""
        for i, p in enumerate(plist):
            slug = p['TitleSlug']
            cnt += 1
            try:
                id = lc.queryByTitleSlug(slug)["question"]["questionId"]
                if i == 0:
                    hash = lc.addFav("# " + k, id, True)["addQuestionToNewFavorite"]["favoriteIdHash"]
                else:
                    print(lc.addQuestionToFav(id, hash))
            except:
                print("error: ", slug)
                pass
            if cnt % 50 == 0: # 防机器人识别
                time.sleep(5)                
        
    
    
