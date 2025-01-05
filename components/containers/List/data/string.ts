import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】字符串（KMP/Z函数/Manacher/字符串哈希/AC自动机/后缀数组/子序列自动机）",
    "original_src": "https://leetcode.cn/circle/discuss/SJFwQI",
    "last_update": "2024-12-16 14:46:09",
    "sort": 0,
    "child": [
        {
            "title": "",
            "sort": 0,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "!<a href=\"https://pic.leetcode.cn/1728350300-LGjhkL-Knuth-Morris-Pratt.png\">Knuth-Morris-Pratt.png</a><br>",
                    "child": []
                }
            ]
        },
        {
            "title": "一、KMP",
            "sort": 1,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "定义 $s$ 的真前缀为不等于 $s$ 的前缀，$s$ 的真后缀为不等于 $s$ 的后缀。<br>定义 $s$ 的 $\\text{border}$ 为既是 $s$ 的真前缀又是 $s$ 的真后缀的字符串。例如在 $s=\\texttt{aabcaa}$ 中，$\\texttt{a}$ 和 $\\texttt{aa}$ 都是 $s$ 的 $\\text{border}$。<br>对于模式串 $p$ 的每个前缀 $p[:i]$，计算这个前缀的最长 $\\text{border}$ 长度，记在 $\\pi$ 数组中。<br>利用 $\\pi$ 数组，可以快速计算模式串 $p$ 出现在文本串 $t$ 的哪些位置上。代码模板见 <a href=\"https://leetcode.cn/problems/find-beautiful-indices-in-the-given-array-ii/solutions/2603695/kmper-fen-cha-zhao-by-endlesscheng-7bjm/\">我的题解</a>。<br>> 注：$\\pi$ 数组的定义参考《算法导论》，国内数据结构教材通常定义为 $\\textit{next}$ 数组。以严蔚敏那本为例，二者的关系是 $\\textit{next}[i+1] = \\pi[i]+1$，即 $\\pi$ 数组整体右移一位，元素值加一。<br>",
                    "child": [
                        {
                            "title": "28. 找出字符串中第一个匹配项的下标",
                            "sort": 0,
                            "src": "/find-the-index-of-the-first-occurrence-in-a-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "796. 旋转字符串",
                            "sort": 1,
                            "src": "/rotate-string/",
                            "score": 1167.0749837258,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1392. 最长快乐前缀",
                            "sort": 2,
                            "src": "/longest-happy-prefix/",
                            "score": 1876.146019008,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3036. 匹配模式数组的子数组数目 II",
                            "sort": 3,
                            "src": "/number-of-subarrays-that-match-a-pattern-ii/",
                            "score": 1894.5496928891,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1764. 通过连接另一个数组的子数组得到一个数组",
                            "sort": 4,
                            "src": "/form-array-by-concatenating-subarrays-of-another-array/",
                            "score": 1588.3835994255,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1668. 最大重复子字符串",
                            "sort": 5,
                            "src": "/maximum-repeating-substring/",
                            "score": 1395.5132479177,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "459. 重复的子字符串",
                            "sort": 6,
                            "src": "/repeated-substring-pattern/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3008. 找出数组中的美丽下标 II",
                            "sort": 7,
                            "src": "/find-beautiful-indices-in-the-given-array-ii/",
                            "score": 2016.2085876254,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "214. 最短回文串",
                            "sort": 8,
                            "src": "/shortest-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "686. 重复叠加字符串匹配",
                            "sort": 9,
                            "src": "/repeated-string-match/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1397. 找到所有好字符串",
                            "sort": 10,
                            "src": "/find-all-good-strings/",
                            "score": 2666.668150845,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3037. 在无限流中寻找模式 II",
                            "sort": 11,
                            "src": "/find-pattern-in-infinite-stream-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、Z 函数（扩展 KMP）",
            "sort": 2,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "对于字符串 $s$，定义 $z[i]$ 表示后缀 $s[i:]$ 与 $s$ 的 LCP（最长公共前缀）的长度，其中 $s[i:]$ 表示从 $s[i]$ 到 $s[n-1]$ 的子串。<br>常用技巧是构造字符串 $\\textit{pattern}+\\textit{s}$，如果发现 $z[m+i]\\ge m$（$m$ 是 $\\textit{pattern}$ 的长度），则说明从 $s[i]$ 开始的子串与 $\\textit{pattern}$ 匹配。<br>所以上面的一些 KMP 题目（子串匹配相关的），也可以用 Z 函数解决。读者可以尝试用 Z 函数解决 <a href=\"https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/\">28. 找出字符串中第一个匹配项的下标</a>。<br>**LCP 数组**<br>",
                    "child": [
                        {
                            "title": "2223. 构造字符串的总得分和",
                            "sort": 0,
                            "src": "/sum-of-scores-of-built-strings/",
                            "score": 2220.0903365738,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3031. 将单词恢复初始状态所需的最短时间 II",
                            "sort": 1,
                            "src": "/minimum-time-to-revert-word-to-initial-state-ii/",
                            "score": 2277.9557248587,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3045. 统计前后缀下标对 II",
                            "sort": 2,
                            "src": "/count-prefix-and-suffix-pairs-ii/",
                            "score": 2327.5726642605,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3303. 第一个几乎相等子字符串的下标",
                            "sort": 3,
                            "src": "/find-the-occurrence-of-first-almost-equal-substring/",
                            "score": 2509.3686325754,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3292. 形成目标字符串需要的最少字符串数 II",
                            "sort": 4,
                            "src": "/minimum-number-of-valid-strings-to-form-target-ii/",
                            "score": 2661.736901362,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2430. 对字母串可执行的最大删除数",
                            "sort": 5,
                            "src": "/maximum-deletions-on-a-string/",
                            "score": 2101.867342004,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3388. 统计数组中的美丽分割",
                            "sort": 6,
                            "src": "/count-beautiful-splits-in-an-array/",
                            "score": 2364.6818184488,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1977. 划分数字的方案数",
                            "sort": 7,
                            "src": "/number-of-ways-to-separate-numbers/",
                            "score": 2817.267212602,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "三、Manacher 算法",
            "sort": 3,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "Manacher 算法可以计算以 $s[i]$（或者 $s[i]$ 和 $s[i+1]$）为回文中心的最长回文子串的长度。<br>此外，还可以：<br>- 判断任意子串是否为回文串。<br>- 计算从 $s[i]$ 开始的最长回文子串的长度。<br>- 计算以 $s[i]$ 结尾的最长回文子串的长度。<br>> Z 函数和 Manacher 算法都会用到类似 Z-box 的概念，在学习时，可以对比体会。<br>",
                    "child": [
                        {
                            "title": "5. 最长回文子串",
                            "sort": 0,
                            "src": "/longest-palindromic-substring/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "647. 回文子串",
                            "sort": 1,
                            "src": "/palindromic-substrings/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "214. 最短回文串",
                            "sort": 2,
                            "src": "/shortest-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3327. 判断 DFS 字符串是否是回文串",
                            "sort": 3,
                            "src": "/check-if-dfs-strings-are-palindromes/",
                            "score": 2454.1900261902,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1745. 分割回文串 IV",
                            "sort": 4,
                            "src": "/palindrome-partitioning-iv/",
                            "score": 1924.964639491,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1960. 两个回文子字符串长度的最大乘积",
                            "sort": 5,
                            "src": "/maximum-product-of-the-length-of-two-palindromic-substrings/",
                            "score": 2690.5859406179,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "四、字符串哈希",
            "sort": 4,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "本题单的大多数题目都可以用字符串哈希解决。<br>推荐先把 <a href=\"https://leetcode.cn/problems/find-substring-with-given-hash-value/\">2156. 查找给定哈希值的子串</a> 做了，对理解**多项式哈希**的计算方法有帮助。<br>模板代码见 <a href=\"https://leetcode.cn/problems/construct-string-with-minimum-cost/solutions/2833949/hou-zhui-shu-zu-by-endlesscheng-32h9/\">我的题解</a>，包含单模哈希和双模哈希。<br>",
                    "child": [
                        {
                            "title": "28. 找出字符串中第一个匹配项的下标",
                            "sort": 0,
                            "src": "/find-the-index-of-the-first-occurrence-in-a-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "187. 重复的 DNA 序列",
                            "sort": 1,
                            "src": "/repeated-dna-sequences/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1316. 不同的循环子字符串",
                            "sort": 2,
                            "src": "/distinct-echo-substrings/",
                            "score": 1836.536348078,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1297. 子串的最大出现次数",
                            "sort": 3,
                            "src": "/maximum-number-of-occurrences-of-a-substring/",
                            "score": 1748.1523771585,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2261. 含最多 K 个可整除元素的子数组",
                            "sort": 4,
                            "src": "/k-divisible-elements-subarrays/",
                            "score": 1724.394164934,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3213. 最小代价构造字符串",
                            "sort": 5,
                            "src": "/construct-string-with-minimum-cost/",
                            "score": 2170.7313528632,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1044. 最长重复子串",
                            "sort": 6,
                            "src": "/longest-duplicate-substring/",
                            "score": 2428.7985254341,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "718. 最长重复子数组",
                            "sort": 7,
                            "src": "/maximum-length-of-repeated-subarray/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1923. 最长公共子路径",
                            "sort": 8,
                            "src": "/longest-common-subpath/",
                            "score": 2661.0670044656,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3292. 形成目标字符串需要的最少字符串数 II",
                            "sort": 9,
                            "src": "/minimum-number-of-valid-strings-to-form-target-ii/",
                            "score": 2661.736901362,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2168. 每个数字的频率都相同的独特子字符串的数量",
                            "sort": 10,
                            "src": "/unique-substrings-with-equal-digit-frequency/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1554. 只有一个不同字符的字符串",
                            "sort": 11,
                            "src": "/strings-differ-by-one-character/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1062. 最长重复子串",
                            "sort": 12,
                            "src": "/longest-repeating-substring/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "五、最小表示法",
            "sort": 5,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "定义**循环左移**操作：把字符串 $s$ 的第一个字符 $s[0]$ 移除，添加到 $s$ 的末尾。例如 $\\texttt{abcd}$ 操作一次后得到 $\\texttt{bcda}$。<br>问题：你可以执行任意次循环左移操作，计算你能得到的字典序最小的字符串。<br>推荐先完成 <a href=\"https://leetcode.cn/problems/last-substring-in-lexicographical-order/\">1163. 按字典序排在最后的子串</a>，再做下面这题。<br>",
                    "child": [
                        {
                            "title": "899. 有序队列",
                            "sort": 0,
                            "src": "/orderly-queue/",
                            "score": 2096.6098086765,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "六、字典树",
            "sort": 6,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "- 见 <a href=\"/lc-rating/list/data_structure\">数据结构题单</a> 第六章。<br>",
                    "child": []
                }
            ]
        },
        {
            "title": "七、AC 自动机",
            "sort": 7,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "AC 自动机 = 字典树 + KMP。<br>由于这些题目也可以用其他算法（字符串哈希等）解决，难度分仅供参考。<br>",
                    "child": [
                        {
                            "title": "1032. 字符流",
                            "sort": 0,
                            "src": "/stream-of-characters/",
                            "score": 1970.4608098164,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 17.17. 多次搜索",
                            "sort": 1,
                            "src": "/multi-search-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1408. 数组中的字符串匹配",
                            "sort": 2,
                            "src": "/string-matching-in-an-array/",
                            "score": 1223.3861903833,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3213. 最小代价构造字符串",
                            "sort": 3,
                            "src": "/construct-string-with-minimum-cost/",
                            "score": 2170.7313528632,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3292. 形成目标字符串需要的最少字符串数 II",
                            "sort": 4,
                            "src": "/minimum-number-of-valid-strings-to-form-target-ii/",
                            "score": 2661.736901362,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "八、后缀数组/后缀自动机",
            "sort": 8,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "由于这些题目也可以用其他算法（字符串哈希等）解决，难度分仅供参考。<br>",
                    "child": [
                        {
                            "title": "1163. 按字典序排在最后的子串",
                            "sort": 0,
                            "src": "/last-substring-in-lexicographical-order/",
                            "score": 1864.0948676111,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1754. 构造字典序最大的合并字符串",
                            "sort": 1,
                            "src": "/largest-merge-of-two-strings/",
                            "score": 1828.6438563573,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2904. 最短且字典序最小的美丽子字符串",
                            "sort": 2,
                            "src": "/shortest-and-lexicographically-smallest-beautiful-string/",
                            "score": 1483.3041242255,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3213. 最小代价构造字符串",
                            "sort": 3,
                            "src": "/construct-string-with-minimum-cost/",
                            "score": 2170.7313528632,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1044. 最长重复子串",
                            "sort": 4,
                            "src": "/longest-duplicate-substring/",
                            "score": 2428.7985254341,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "718. 最长重复子数组",
                            "sort": 5,
                            "src": "/maximum-length-of-repeated-subarray/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1923. 最长公共子路径",
                            "sort": 6,
                            "src": "/longest-common-subpath/",
                            "score": 2661.0670044656,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1408. 数组中的字符串匹配",
                            "sort": 7,
                            "src": "/string-matching-in-an-array/",
                            "score": 1223.3861903833,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3076. 数组中的最短非公共子字符串",
                            "sort": 8,
                            "src": "/shortest-uncommon-substring-in-an-array/",
                            "score": 1635.1802054842,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1316. 不同的循环子字符串",
                            "sort": 9,
                            "src": "/distinct-echo-substrings/",
                            "score": 1836.536348078,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3388. 统计数组中的美丽分割",
                            "sort": 10,
                            "src": "/count-beautiful-splits-in-an-array/",
                            "score": 2364.6818184488,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2564. 子字符串异或查询",
                            "sort": 11,
                            "src": "/substring-xor-queries/",
                            "score": 1959.2696201953,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1698. 字符串的不同子字符串个数",
                            "sort": 12,
                            "src": "/number-of-distinct-substrings-in-a-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1062. 最长重复子串",
                            "sort": 13,
                            "src": "/longest-repeating-substring/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3135. 通过添加或删除结尾字符来同化字符串",
                            "sort": 14,
                            "src": "/equalize-strings-by-adding-or-removing-characters-at-ends/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "九、子序列自动机",
            "sort": 9,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "上面都是和**子串**相关的算法，本节是和**子序列**相关的算法：子序列自动机。<br>虽然名字有些高大上，但实际上只是预处理 $s[i]$ 右侧最近字母 $\\textit{c}$ 的下标而已。<br>",
                    "child": [
                        {
                            "title": "792. 匹配子序列的单词数",
                            "sort": 0,
                            "src": "/number-of-matching-subsequences/",
                            "score": 1695.3076664977,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "514. 自由之路",
                            "sort": 1,
                            "src": "/freedom-trail/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2014. 重复 K 次的最长子序列",
                            "sort": 2,
                            "src": "/longest-subsequence-repeated-k-times/",
                            "score": 2558.3297484354,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1055. 形成字符串的最短路径",
                            "sort": 3,
                            "src": "/shortest-way-to-form-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "727. 最小窗口子序列",
                            "sort": 4,
                            "src": "/minimum-window-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        }
    ]
} as ProblemCategory;