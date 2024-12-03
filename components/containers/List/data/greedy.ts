import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】贪心算法（基本贪心策略/反悔/区间/字典序/数学/思维/构造）",
    "original_src": "https://leetcode.cn/circle/discuss/g6KTKL",
    "last_update": "2024-11-16 03:07:39",
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
                    "summary": "!<a href=\"https://pic.leetcode.cn/1719584528-kEceMX-greedy-vs-dp-c.jpg\">贪心算法题贪心题单贪心题目力扣贪心题单leetcode贪心 greedy 灵茶山艾府 灵神</a><br>> 有时候，很难一眼看出一道题是贪心还是 DP。<br>",
                    "child": []
                }
            ]
        },
        {
            "title": "前言",
            "sort": 1,
            "summary": "为方便大家练习，我把比较套路的贪心题目放在前面，更灵活的思维题和构造题放在后面。每个小节的题目均按照从易到难的顺序排列。<br>**如果做题时没有思路，推荐看看本文第五章的「思考清单」。**<br>",
            "child": []
        },
        {
            "title": "一、贪心策略",
            "sort": 2,
            "summary": "有两种**基本贪心策略**：<br>1. 从**最小/最大**开始贪心，优先考虑最小/最大的数，从小到大/从大到小贪心。在此基础上，衍生出了**反悔贪心**。<br>2. 从**最左/最右**开始贪心，思考第一个数/最后一个数的贪心策略，把 $n$ 个数的原问题转换成 $n-1$ 个数（或更少）的子问题。<br>",
            "child": [
                {
                    "title": "§1.1 从最小/最大开始贪心",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "优先考虑最小/最大的数，从小到大/从大到小贪心。<br>如果答案与数组元素顺序无关，一般需要**排序**。排序后，可以遍历计算。<br>",
                    "child": [
                        {
                            "title": "3074. 重新分装苹果",
                            "sort": 0,
                            "src": "/apple-redistribution-into-boxes/",
                            "score": 1197.5462481787,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2279. 装满石头的背包的最大数量",
                            "sort": 1,
                            "src": "/maximum-bags-with-full-capacity-of-rocks/",
                            "score": 1249.2572200035,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1833. 雪糕的最大数量",
                            "sort": 2,
                            "src": "/maximum-ice-cream-bars/",
                            "score": 1252.7479413966,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1005. K 次取反后最大化的数组和",
                            "sort": 3,
                            "src": "/maximize-sum-of-array-after-k-negations/",
                            "score": 1274.6742564805,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1481. 不同整数的最少数目",
                            "sort": 4,
                            "src": "/least-number-of-unique-integers-after-k-removals/",
                            "score": 1284.3625733813,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1403. 非递增顺序的最小子序列",
                            "sort": 5,
                            "src": "/minimum-subsequence-in-non-increasing-order/",
                            "score": 1288.1970048184,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3010. 将数组分成最小总代价的子数组 I",
                            "sort": 6,
                            "src": "/divide-an-array-into-subarrays-with-minimum-cost-i/",
                            "score": 1291.744935731,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1338. 数组大小减半",
                            "sort": 7,
                            "src": "/reduce-array-size-to-the-half/",
                            "score": 1303.022570497,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1710. 卡车上的最大单元数",
                            "sort": 8,
                            "src": "/maximum-units-on-a-truck/",
                            "score": 1309.8100518373,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3075. 幸福值最大化的选择方案",
                            "sort": 9,
                            "src": "/maximize-happiness-of-selected-children/",
                            "score": 1325.805380292,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2554. 从一个范围内选择最多整数 I",
                            "sort": 10,
                            "src": "/maximum-number-of-integers-to-choose-from-a-range-i/",
                            "score": 1333.2008827592,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2126. 摧毁小行星",
                            "sort": 11,
                            "src": "/destroying-asteroids/",
                            "score": 1334.5708444649,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2587. 重排数组以得到最大前缀分数",
                            "sort": 12,
                            "src": "/rearrange-array-to-maximize-prefix-score/",
                            "score": 1336.7830451625,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "976. 三角形的最大周长",
                            "sort": 13,
                            "src": "/largest-perimeter-triangle/",
                            "score": 1340.5559417151,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3301. 高度互不相同的最大塔高和",
                            "sort": 14,
                            "src": "/maximize-the-total-height-of-unique-towers/",
                            "score": 1448.2251797153,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "945. 使数组唯一的最小增量",
                            "sort": 15,
                            "src": "/minimum-increment-to-make-array-unique/",
                            "score": 1448.1207963663,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1846. 减小和重新排列数组后的最大元素",
                            "sort": 16,
                            "src": "/maximum-element-after-decreasing-and-rearranging/",
                            "score": 1454.3901912166,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1647. 字符频次唯一的最小删除次数",
                            "sort": 17,
                            "src": "/minimum-deletions-to-make-character-frequencies-unique/",
                            "score": 1509.5432131875,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2971. 找到最大周长的多边形",
                            "sort": 18,
                            "src": "/find-polygon-with-the-largest-perimeter/",
                            "score": 1521.1616133347,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2178. 拆分成最多数目的正偶数之和",
                            "sort": 19,
                            "src": "/maximum-split-of-positive-even-integers/",
                            "score": 1538.233149704,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2567. 修改两个元素的最小分数",
                            "sort": 20,
                            "src": "/minimum-score-by-changing-two-elements/",
                            "score": 1608.577875807,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1509. 三次操作后最大值与最小值的最小差",
                            "sort": 21,
                            "src": "/minimum-difference-between-largest-and-smallest-value-in-three-moves/",
                            "score": 1653.0356626499,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 40. 心算挑战",
                            "sort": 22,
                            "src": "/uOAnQW/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1262. 可被三整除的最大和",
                            "sort": 23,
                            "src": "/greatest-sum-divisible-by-three/",
                            "score": 1762.0307532652,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "948. 令牌放置",
                            "sort": 24,
                            "src": "/bag-of-tokens/",
                            "score": 1762.3115124143,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1775. 通过最少操作次数使数组的和相等",
                            "sort": 25,
                            "src": "/equal-sum-arrays-with-minimum-number-of-operations/",
                            "score": 1850.4091449367,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2333. 最小差值平方和",
                            "sort": 26,
                            "src": "/minimum-sum-of-squared-difference/",
                            "score": 2011.0496162515,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2412. 完成所有交易的初始最少钱数",
                            "sort": 27,
                            "src": "/minimum-money-required-before-transactions/",
                            "score": 2092.0222850837,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "910. 最小差值 II",
                            "sort": 28,
                            "src": "/smallest-range-ii/",
                            "score": 2134.5448970405,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2835. 使子序列的和等于目标的最少操作次数",
                            "sort": 29,
                            "src": "/minimum-operations-to-form-subsequence-with-target-sum/",
                            "score": 2207.4917475411,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1196. 最多可以买到的苹果数量",
                            "sort": 30,
                            "src": "/how-many-apples-can-you-put-into-the-basket/",
                            "score": 1248.8026990632,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2214. 通关游戏所需的最低生命值",
                            "sort": 31,
                            "src": "/minimum-health-to-beat-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2098. 长度为 K 的最大偶数和子序列",
                            "sort": 32,
                            "src": "/subsequence-of-size-k-with-the-largest-even-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2548. 填满背包的最大价格",
                            "sort": 33,
                            "src": "/maximum-price-to-fill-a-bag/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3119. 最大数量的可修复坑洼",
                            "sort": 34,
                            "src": "/maximum-number-of-potholes-that-can-be-fixed/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2557. 从一个范围内选择最多整数 II",
                            "sort": 35,
                            "src": "/maximum-number-of-integers-to-choose-from-a-range-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.2 单序列配对",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "同上，从最小/最大的元素开始贪心。<br>",
                    "child": [
                        {
                            "title": "2144. 打折购买糖果的最小开销",
                            "sort": 0,
                            "src": "/minimum-cost-of-buying-candies-with-discount/",
                            "score": 1260.9112824221,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "561. 数组拆分",
                            "sort": 1,
                            "src": "/array-partition/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1877. 数组中最大数对和的最小值",
                            "sort": 2,
                            "src": "/minimize-maximum-pair-sum-in-array/",
                            "score": 1301.381757401,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "881. 救生艇",
                            "sort": 3,
                            "src": "/boats-to-save-people/",
                            "score": 1529.7617243868,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2592. 最大化数组的伟大值",
                            "sort": 4,
                            "src": "/maximize-greatness-of-an-array/",
                            "score": 1569.1579260438,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2576. 求出最多标记下标",
                            "sort": 5,
                            "src": "/find-the-maximum-number-of-marked-indices/",
                            "score": 1843.2383664194,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.3 双序列配对",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "同上，从最小/最大的元素开始贪心。<br>",
                    "child": [
                        {
                            "title": "2037. 使每位学生都有座位的最少移动次数",
                            "sort": 0,
                            "src": "/minimum-number-of-moves-to-seat-everyone/",
                            "score": 1356.6925765299,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "455. 分发饼干",
                            "sort": 1,
                            "src": "/assign-cookies/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2410. 运动员和训练师的最大匹配数",
                            "sort": 2,
                            "src": "/maximum-matching-of-players-with-trainers/",
                            "score": 1381.0888968455,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1433. 检查一个字符串是否可以打破另一个字符串",
                            "sort": 3,
                            "src": "/check-if-a-string-can-break-another-string/",
                            "score": 1436.1125054038,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "870. 优势洗牌",
                            "sort": 4,
                            "src": "/advantage-shuffle/",
                            "score": 1648.341757882,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "826. 安排工作以达到最大收益",
                            "sort": 5,
                            "src": "/most-profit-assigning-work/",
                            "score": 1708.812923679,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2449. 使数组相似的最少操作次数",
                            "sort": 6,
                            "src": "/minimum-number-of-operations-to-make-arrays-similar/",
                            "score": 2076.0155978787,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1889. 装包裹的最小浪费空间",
                            "sort": 7,
                            "src": "/minimum-space-wasted-from-packaging/",
                            "score": 2214.4798747386,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2561. 重排水果",
                            "sort": 8,
                            "src": "/rearranging-fruits/",
                            "score": 2221.793185714,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2323. 完成所有工作的最短时间 II",
                            "sort": 9,
                            "src": "/find-minimum-time-to-finish-all-jobs-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.4 从最左/最右开始贪心",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "对于无法排序的题目，尝试从左到右/从右到左贪心。思考第一个数/最后一个数的贪心策略，把 $n$ 个数的原问题转换成 $n-1$ 个数（或更少）的子问题。<br>读者可以对比下面的题目和 <a href=\"/lc-rating/list/dynamic_programming\">动态规划题单</a> 中的线性 DP、状态机 DP 的区别，思考什么情况下只能 DP 不能贪心，从而加深对「局部最优」和「全局最优」的理解。<br>",
                    "child": [
                        {
                            "title": "3191. 使二进制数组全部等于 1 的最少操作次数 I",
                            "sort": 0,
                            "src": "/minimum-operations-to-make-binary-array-elements-equal-to-one-i/",
                            "score": 1311.979717243,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1827. 最少操作使数组递增",
                            "sort": 1,
                            "src": "/minimum-operations-to-make-the-array-increasing/",
                            "score": 1314.8600143277,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2027. 转换字符串的最少操作次数",
                            "sort": 2,
                            "src": "/minimum-moves-to-convert-string/",
                            "score": 1346.3556309143,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "605. 种花问题",
                            "sort": 3,
                            "src": "/can-place-flowers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3111. 覆盖所有点的最少矩形数目",
                            "sort": 4,
                            "src": "/minimum-rectangles-to-cover-points/",
                            "score": 1401.2732392084,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2957. 消除相邻近似相等字符",
                            "sort": 5,
                            "src": "/remove-adjacent-almost-equal-characters/",
                            "score": 1429.9599761889,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3192. 使二进制数组全部等于 1 的最少操作次数 II",
                            "sort": 6,
                            "src": "/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/",
                            "score": 1432.7805314078,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2789. 合并后数组中的最大元素",
                            "sort": 7,
                            "src": "/largest-element-in-an-array-after-merge-operations/",
                            "score": 1484.8385256564,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1529. 最少的后缀翻转次数",
                            "sort": 8,
                            "src": "/minimum-suffix-flips/",
                            "score": 1392.6601629182,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1144. 递减元素使数组呈锯齿状",
                            "sort": 9,
                            "src": "/decrease-elements-to-make-array-zigzag/",
                            "score": 1558.7188539503,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3228. 将 1 移动到末尾的最大操作次数",
                            "sort": 10,
                            "src": "/maximum-number-of-operations-to-move-ones-to-the-end/",
                            "score": 1593.301573479,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2086. 喂食仓鼠的最小食物桶数",
                            "sort": 11,
                            "src": "/minimum-number-of-food-buckets-to-feed-the-hamsters/",
                            "score": 1622.8414025136,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2571. 将整数减少到零需要的最少操作数",
                            "sort": 12,
                            "src": "/minimum-operations-to-reduce-an-integer-to-0/",
                            "score": 1649.2000410344,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2712. 使所有字符相等的最小成本",
                            "sort": 13,
                            "src": "/minimum-cost-to-make-all-characters-equal/",
                            "score": 1791.0336923305,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3326. 使数组非递减的最少除法操作次数",
                            "sort": 14,
                            "src": "/minimum-division-operations-to-make-array-non-decreasing/",
                            "score": 1864.4526192193,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1536. 排布二进制网格的最少交换次数",
                            "sort": 15,
                            "src": "/minimum-swaps-to-arrange-a-binary-grid/",
                            "score": 1880.5909929633,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2673. 使二叉树所有路径值相等的最小代价",
                            "sort": 16,
                            "src": "/make-costs-of-paths-equal-in-a-binary-tree/",
                            "score": 1917.1049672432,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "861. 翻转矩阵后的得分",
                            "sort": 17,
                            "src": "/score-after-flipping-matrix/",
                            "score": 1818.0024504436,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "955. 删列造序 II",
                            "sort": 18,
                            "src": "/delete-columns-to-make-sorted-ii/",
                            "score": 1876.3854625677,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2366. 将数组排序的最少替换次数",
                            "sort": 19,
                            "src": "/minimum-replacements-to-sort-the-array/",
                            "score": 2060.379991517,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2193. 得到回文串的最少操作次数",
                            "sort": 20,
                            "src": "/minimum-number-of-moves-to-make-palindrome/",
                            "score": 2090.6800569319,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2528. 最大化城市的最小电量",
                            "sort": 21,
                            "src": "/maximize-the-minimum-powered-city/",
                            "score": 2235.5784618885,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2422. 使用合并操作将数组转换为回文序列",
                            "sort": 22,
                            "src": "/merge-operations-to-turn-array-into-a-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.5 划分型贪心",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "把数组/字符串划分成满足要求的若干段，最小化/最大化划分的段数。<br>思考方法同上，尝试从左到右/从右到左贪心。<br>读者可以对比下面的题目和 <a href=\"/lc-rating/list/dynamic_programming\">动态规划题单</a> 中的划分型 DP 的区别，思考什么情况下只能 DP 不能贪心，从而加深对「局部最优」和「全局最优」的理解。<br>",
                    "child": [
                        {
                            "title": "1221. 分割平衡字符串",
                            "sort": 0,
                            "src": "/split-a-string-in-balanced-strings/",
                            "score": 1219.5284561367,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2405. 子字符串的最优划分",
                            "sort": 1,
                            "src": "/optimal-partition-of-string/",
                            "score": 1355.3956434989,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2294. 划分数组使最大差为 K",
                            "sort": 2,
                            "src": "/partition-array-such-that-maximum-difference-is-k/",
                            "score": 1416.4124723866,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2358. 分组的最大数量",
                            "sort": 3,
                            "src": "/maximum-number-of-groups-entering-a-competition/",
                            "score": 1502.5363677723,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2522. 将字符串分割成值不超过 K 的子字符串",
                            "sort": 4,
                            "src": "/partition-string-into-substrings-with-values-at-most-k/",
                            "score": 1604.5128423093,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1546. 和为目标值且不重叠的非空子数组的最大数目",
                            "sort": 5,
                            "src": "/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/",
                            "score": 1855.377046154,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2436. 使子数组最大公约数大于一的最小分割数",
                            "sort": 6,
                            "src": "/minimum-split-into-subarrays-with-gcd-greater-than-one/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2892. 将相邻元素相乘后得到最小化数组",
                            "sort": 7,
                            "src": "/minimizing-array-after-replacing-pairs-with-their-product/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.6 先枚举，再贪心",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "枚举题目的其中一个变量，将其视作已知条件，然后在此基础上贪心。<br>也可以枚举答案，检查是否可以满足要求。（类似二分答案）<br>",
                    "child": [
                        {
                            "title": "1007. 行相等的最少多米诺旋转",
                            "sort": 0,
                            "src": "/minimum-domino-rotations-for-equal-row/",
                            "score": 1541.348438509,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2171. 拿出最少数目的魔法豆",
                            "sort": 1,
                            "src": "/removing-minimum-number-of-magic-beans/",
                            "score": 1748.1339100823,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3085. 成为 K 特殊字符串需要删除的最少字符数",
                            "sort": 2,
                            "src": "/minimum-deletions-to-make-string-k-special/",
                            "score": 1764.7072848367,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1727. 重新排列后的最大子矩阵",
                            "sort": 3,
                            "src": "/largest-submatrix-with-rearrangements/",
                            "score": 1926.7059583253,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2749. 得到整数零需要执行的最少操作数",
                            "sort": 4,
                            "src": "/minimum-operations-to-make-the-integer-zero/",
                            "score": 2132.06233459,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2910. 合法分组的最少组数",
                            "sort": 5,
                            "src": "/minimum-number-of-groups-to-create-a-valid-assignment/",
                            "score": 2132.1944636902,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2234. 花园的最大总美丽值",
                            "sort": 6,
                            "src": "/maximum-total-beauty-of-the-gardens/",
                            "score": 2561.508149216,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.7 交换论证法",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "交换论证法（exchange argument）用于证明一类贪心算法的正确性，也可以用来启发思考。做法如下：<br>1. 对于题目，猜想按照「某种顺序」处理数据，可以得到最优解。<br>2. 交换顺序中的两个元素 $a_i$ 和 $a_j$，计算交换后的答案。<br>3. 对比交换前后的答案。如果交换后，答案没有变得更优，则说明猜想成立。<br>也可以不用猜想，而是计算「先 $a_i$ 后 $a_j$」和「先 $a_j$ 后 $a_i$」对应的答案，通过比较两个答案谁更优，来确定按照何种顺序处理数据。<br><a href=\"https://leetcode.cn/problems/minimum-processing-time/solution/tan-xin-pythonjavacgo-by-endlesscheng-8fzf/\">讲解（以 2895 题为例）</a><br>补充：<br>",
                    "child": [
                        {
                            "title": "2895. 最小处理时间",
                            "sort": 0,
                            "src": "/minimum-processing-time/",
                            "score": 1351.6909336495,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3219. 切蛋糕的最小总开销 II",
                            "sort": 1,
                            "src": "/minimum-cost-for-cutting-cake-ii/",
                            "score": 1789.3681547685,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1665. 完成所有任务的最少初始能量",
                            "sort": 2,
                            "src": "/minimum-initial-energy-to-finish-tasks/",
                            "score": 1900.8434122725,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3273. 对 Bob 造成的最少伤害",
                            "sort": 3,
                            "src": "/minimum-amount-of-damage-dealt-to-bob/",
                            "score": 2012.8694334235,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2136. 全部开花的最早一天",
                            "sort": 4,
                            "src": "/earliest-possible-day-of-full-bloom/",
                            "score": 2033.4597721985,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "179. 最大数",
                            "sort": 5,
                            "src": "/largest-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3309. 连接二进制表示可形成的最大数值",
                            "sort": 6,
                            "src": "/maximum-possible-number-by-binary-concatenation/",
                            "score": 1363.7443380057,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.8 相邻不同",
                    "sort": 7,
                    "isLeaf": true,
                    "summary": "给定正整数数组，每次操作，把数组中的两个数各减少一，并去掉变成 $0$ 的数。目标：使最后剩下的数最小，或者最大化操作次数。<br>由于每次操作的都是两个下标不同的数，把这些下标按顺序拼接，可以构造出一个相邻元素不同的序列。例如 $(1,2),(2,3),(3,4)$ 这三个操作，可以拼接成 $[1,2,3,2,3,4]$。<br><a href=\"https://leetcode.cn/problems/reorganize-string/solution/tan-xin-gou-zao-pai-xu-bu-pai-xu-liang-c-h9jg/\">证明/构造方案</a><br>**扩展**：<br>",
                    "child": [
                        {
                            "title": "2335. 装满杯子需要的最短总时长",
                            "sort": 0,
                            "src": "/minimum-amount-of-time-to-fill-cups/",
                            "score": 1360.421258727,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1753. 移除石子的最大得分",
                            "sort": 1,
                            "src": "/maximum-score-from-removing-stones/",
                            "score": 1487.5826663483,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1054. 距离相等的条形码",
                            "sort": 2,
                            "src": "/distant-barcodes/",
                            "score": 1701.5735371897,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2856. 删除数对后的最小数组长度",
                            "sort": 3,
                            "src": "/minimum-array-length-after-pair-removals/",
                            "score": 1749.9743684275,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1953. 你可以工作的最大周数",
                            "sort": 4,
                            "src": "/maximum-number-of-weeks-for-which-you-can-work/",
                            "score": 1803.7518552874,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "767. 重构字符串",
                            "sort": 5,
                            "src": "/reorganize-string/",
                            "score": 1681.3263732456,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3139. 使数组中所有元素相等的最小开销",
                            "sort": 6,
                            "src": "/minimum-cost-to-equalize-array/",
                            "score": 2666.1303987257,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "621. 任务调度器",
                            "sort": 7,
                            "src": "/task-scheduler/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "358. K 距离间隔重排字符串",
                            "sort": 8,
                            "src": "/rearrange-string-k-distance-apart/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "984. 不含 AAA 或 BBB 的字符串",
                            "sort": 9,
                            "src": "/string-without-aaa-or-bbb/",
                            "score": 1474.0150725665,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1405. 最长快乐字符串",
                            "sort": 10,
                            "src": "/longest-happy-string/",
                            "score": 1820.58557644,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.9 反悔贪心",
                    "sort": 8,
                    "isLeaf": true,
                    "summary": "一般要用到**堆**。<br><a href=\"https://leetcode.cn/problems/p0NxJO/solution/fan-hui-tan-xin-fu-ti-dan-pythonjavacgoj-hxup/\">讲解</a><br>> 注：在网络流中，寻找增广路的过程也是一种反悔贪心。<br>",
                    "child": [
                        {
                            "title": "LCP 30. 魔塔游戏",
                            "sort": 0,
                            "src": "/p0NxJO/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1642. 可以到达的最远建筑",
                            "sort": 1,
                            "src": "/furthest-building-you-can-reach/",
                            "score": 1962.2005269503,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "630. 课程表 III",
                            "sort": 2,
                            "src": "/course-schedule-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "871. 最低加油次数",
                            "sort": 3,
                            "src": "/minimum-number-of-refueling-stops/",
                            "score": 2074.4120526679,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2813. 子序列最大优雅度",
                            "sort": 4,
                            "src": "/maximum-elegance-of-a-k-length-subsequence/",
                            "score": 2582.0814855506,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3049. 标记所有下标的最早秒数 II",
                            "sort": 5,
                            "src": "/earliest-second-to-mark-indices-ii/",
                            "score": 3111.1274320356,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2463. 最小移动总距离",
                            "sort": 6,
                            "src": "/minimum-total-distance-traveled/",
                            "score": 2453.9054896968,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2599. 使前缀和数组非负",
                            "sort": 7,
                            "src": "/make-the-prefix-sum-non-negative/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、区间贪心",
            "sort": 3,
            "summary": "区间贪心有如下经典问题：<br>- **不相交区间**（单机器调度/活动安排）：给定一些区间，从中选出尽量多的两两互不相交的区间。<br>- **区间分组**（任务调度/会议室）：给定一些区间，把这些区间分成最少的组，使得每组内的区间互不相交。<br>- **区间选点**（射气球）：给定一些区间，在数轴上放置最少的点，使得每个区间都包含至少一个点。最少要放置多少个点？<br>- **区间覆盖**（灌溉花园）：给定一些区间，从中选出尽量少的区间，覆盖一条指定线段 $[s,t]$。<br>**任务**：总结上述四种区间贪心问题的解法，尤其是排序的规则和理由，什么时候要按照左端点排序？什么时候要按照右端点排序？排序的目的是什么？欢迎在评论区分享你的总结笔记。<br>",
            "child": [
                {
                    "title": "§2.1 不相交区间",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "**变形**：每个区间有各自的分数，从中选一些两两互不相交的区间，最大化得分之和。详见 <a href=\"/lc-rating/list/dynamic_programming\">动态规划题单</a> 中的「§6.4 不相交区间」。<br>",
                    "child": [
                        {
                            "title": "646. 最长数对链",
                            "sort": 0,
                            "src": "/maximum-length-of-pair-chain/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "435. 无重叠区间",
                            "sort": 1,
                            "src": "/non-overlapping-intervals/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1520. 最多的不重叠子字符串",
                            "sort": 2,
                            "src": "/maximum-number-of-non-overlapping-substrings/",
                            "score": 2362.6480880348,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.2 区间分组",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2406. 将区间分为最少组数",
                            "sort": 0,
                            "src": "/divide-intervals-into-minimum-number-of-groups/",
                            "score": 1713.3954468582,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "253. 会议室 II",
                            "sort": 1,
                            "src": "/meeting-rooms-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.3 区间选点",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "452. 用最少数量的箭引爆气球",
                            "sort": 0,
                            "src": "/minimum-number-of-arrows-to-burst-balloons/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "757. 设置交集大小至少为2",
                            "sort": 1,
                            "src": "/set-intersection-size-at-least-two/",
                            "score": 2378.6234112504,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.4 区间覆盖",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/minimum-number-of-taps-to-open-to-water-a-garden/solution/yi-zhang-tu-miao-dong-pythonjavacgo-by-e-wqry/\">图解</a><br>",
                    "child": [
                        {
                            "title": "45. 跳跃游戏 II",
                            "sort": 0,
                            "src": "/jump-game-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1024. 视频拼接",
                            "sort": 1,
                            "src": "/video-stitching/",
                            "score": 1746.135917977,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1326. 灌溉花园的最少水龙头数目",
                            "sort": 2,
                            "src": "/minimum-number-of-taps-to-open-to-water-a-garden/",
                            "score": 1885.0178370385,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.5 合并区间",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "> 可能算不上贪心，但为了题单的完整性，也放到这个分类中。<br>",
                    "child": [
                        {
                            "title": "56. 合并区间",
                            "sort": 0,
                            "src": "/merge-intervals/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "57. 插入区间",
                            "sort": 1,
                            "src": "/insert-interval/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "55. 跳跃游戏",
                            "sort": 2,
                            "src": "/jump-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "763. 划分字母区间",
                            "sort": 3,
                            "src": "/partition-labels/",
                            "score": 1443.0697629277,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3169. 无需开会的工作日",
                            "sort": 4,
                            "src": "/count-days-without-meetings/",
                            "score": 1483.48867803,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2580. 统计将重叠区间合并成组的方案数",
                            "sort": 5,
                            "src": "/count-ways-to-group-overlapping-ranges/",
                            "score": 1631.5850830561,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2963. 统计好分割方案的数目",
                            "sort": 6,
                            "src": "/count-the-number-of-good-partitions/",
                            "score": 1984.9685663849,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2584. 分割数组使乘积互质",
                            "sort": 7,
                            "src": "/split-the-array-to-make-coprime-products/",
                            "score": 2159.4844281244,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "616. 给字符串添加加粗标签",
                            "sort": 8,
                            "src": "/add-bold-tag-in-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "758. 字符串中的加粗单词",
                            "sort": 9,
                            "src": "/bold-words-in-string/",
                            "score": 1547.0385279086,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3323. 通过插入区间最小化连通组",
                            "sort": 10,
                            "src": "/minimize-connected-groups-by-inserting-interval/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "759. 员工空闲时间",
                            "sort": 11,
                            "src": "/employee-free-time/",
                            "score": 1710.1120861153,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2655. 寻找最大长度的未覆盖区间",
                            "sort": 12,
                            "src": "/find-maximal-uncovered-ranges/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.6 其他区间贪心",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1288. 删除被覆盖区间",
                            "sort": 0,
                            "src": "/remove-covered-intervals/",
                            "score": 1375.0234414965,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2054. 两个最好的不重叠活动",
                            "sort": 1,
                            "src": "/two-best-non-overlapping-events/",
                            "score": 1883.3541964032,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1705. 吃苹果的最大数目",
                            "sort": 2,
                            "src": "/maximum-number-of-eaten-apples/",
                            "score": 1929.9086934334,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1353. 最多可以参加的会议数目",
                            "sort": 3,
                            "src": "/maximum-number-of-events-that-can-be-attended/",
                            "score": 2015.7291888336,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2589. 完成所有任务的最少时间",
                            "sort": 4,
                            "src": "/minimum-time-to-complete-all-tasks/",
                            "score": 2380.5983169295,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "三、字符串贪心",
            "sort": 4,
            "summary": "",
            "child": [
                {
                    "title": "§3.1 字典序最小/最大",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "**字典序**的定义如下：<br>- 对于两个字符串 $a$ 和 $b$，从左到右依次比较 $a[i]$ 和 $b[i]$ 的字符 ASCII 值的大小。<br>- $a[i]\\ne b[i]$ 时，如果 $a[i]<b[i]$，那么 $a$ 的字典序更小，否则 $b$ 的字典序更小。<br>- 如果没有出现 $a[i]\\ne b[i]$，则短的字符串字典序更小。<br>- 如果两个字符串的长度和内容均相同，那么两个字符串的字典序一样。<br>字典序的定义也可以推广到数组上，按照上述方法比较两个数组的字典序。<br>",
                    "child": [
                        {
                            "title": "1323. 6 和 9 组成的最大数字",
                            "sort": 0,
                            "src": "/maximum-69-number/",
                            "score": 1193.9819783429,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3216. 交换后字典序最小的字符串",
                            "sort": 1,
                            "src": "/lexicographically-smallest-string-after-a-swap/",
                            "score": 1242.8232032062,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2697. 字典序最小回文串",
                            "sort": 2,
                            "src": "/lexicographically-smallest-palindrome/",
                            "score": 1303.7347742929,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1881. 插入后的最大值",
                            "sort": 3,
                            "src": "/maximum-value-after-insertion/",
                            "score": 1381.2168789318,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2734. 执行子串操作后的字典序最小字符串",
                            "sort": 4,
                            "src": "/lexicographically-smallest-string-after-substring-operation/",
                            "score": 1405.123188264,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1946. 子字符串突变后可能得到的最大整数",
                            "sort": 5,
                            "src": "/largest-number-after-mutating-substring/",
                            "score": 1445.3734269673,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1663. 具有给定数值的最小字符串",
                            "sort": 6,
                            "src": "/smallest-string-with-a-given-numeric-value/",
                            "score": 1460.5903088359,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1328. 破坏回文串",
                            "sort": 7,
                            "src": "/break-a-palindrome/",
                            "score": 1473.864993045,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2259. 移除指定数字得到的最大结果",
                            "sort": 8,
                            "src": "/remove-digit-from-number-to-maximize-result/",
                            "score": 1331.5287857686,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2566. 替换一个数字后的最大差值",
                            "sort": 9,
                            "src": "/maximum-difference-by-remapping-a-digit/",
                            "score": 1396.1044458638,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "670. 最大交换",
                            "sort": 10,
                            "src": "/maximum-swap/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3106. 满足距离约束且字典序最小的字符串",
                            "sort": 11,
                            "src": "/lexicographically-smallest-string-after-operations-with-constraint/",
                            "score": 1515.4316202561,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1053. 交换一次的先前排列",
                            "sort": 12,
                            "src": "/previous-permutation-with-one-swap/",
                            "score": 1633.1789521619,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2375. 根据模式串构造最小数字",
                            "sort": 13,
                            "src": "/construct-smallest-number-from-di-string/",
                            "score": 1641.9424376927,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2182. 构造限制重复的字符串",
                            "sort": 14,
                            "src": "/construct-string-with-repeat-limit/",
                            "score": 1680.1353258588,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "738. 单调递增的数字",
                            "sort": 15,
                            "src": "/monotone-increasing-digits/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3170. 删除星号以后字典序最小的字符串",
                            "sort": 16,
                            "src": "/lexicographically-minimum-string-after-removing-stars/",
                            "score": 1772.4702293335,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1363. 形成三的最大倍数",
                            "sort": 17,
                            "src": "/largest-multiple-of-three/",
                            "score": 1822.9768689716,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1754. 构造字典序最大的合并字符串",
                            "sort": 18,
                            "src": "/largest-merge-of-two-strings/",
                            "score": 1828.6438563573,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1202. 交换字符串中的元素",
                            "sort": 19,
                            "src": "/smallest-string-with-swaps/",
                            "score": 1855.4479039876,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2434. 使用机器人打印字典序最小的字符串",
                            "sort": 20,
                            "src": "/using-a-robot-to-print-the-lexicographically-smallest-string/",
                            "score": 1953.137726744,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1625. 执行操作后字典序最小的字符串",
                            "sort": 21,
                            "src": "/lexicographically-smallest-string-after-applying-operations/",
                            "score": 1992.0032292739,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2948. 交换得到字典序最小的数组",
                            "sort": 22,
                            "src": "/make-lexicographically-smallest-array-by-swapping-elements/",
                            "score": 2047.3919190727,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "564. 寻找最近的回文数",
                            "sort": 23,
                            "src": "/find-the-closest-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1505. 最多 K 次交换相邻数位后得到的最小整数",
                            "sort": 24,
                            "src": "/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/",
                            "score": 2336.5210003185,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2663. 字典序最小的美丽字符串",
                            "sort": 25,
                            "src": "/lexicographically-smallest-beautiful-string/",
                            "score": 2415.7434855724,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3302. 字典序最小的合法序列",
                            "sort": 26,
                            "src": "/find-the-lexicographically-smallest-valid-sequence/",
                            "score": 2473.6778280303,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "555. 分割连接字符串",
                            "sort": 27,
                            "src": "/split-concatenated-strings/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3088. 使字符串反回文",
                            "sort": 28,
                            "src": "/make-string-anti-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.2 回文串贪心",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "> 部分题目也出现在其他贪心分类中，为了题单的完整性整理到一起。<br>",
                    "child": [
                        {
                            "title": "409. 最长回文串",
                            "sort": 0,
                            "src": "/longest-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2697. 字典序最小回文串",
                            "sort": 1,
                            "src": "/lexicographically-smallest-palindrome/",
                            "score": 1303.7347742929,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "680. 验证回文串 II",
                            "sort": 2,
                            "src": "/valid-palindrome-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1328. 破坏回文串",
                            "sort": 3,
                            "src": "/break-a-palindrome/",
                            "score": 1473.864993045,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1400. 构造 K 个回文字符串",
                            "sort": 4,
                            "src": "/construct-k-palindrome-strings/",
                            "score": 1530.495439788,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2131. 连接两字母单词得到的最长回文串",
                            "sort": 5,
                            "src": "/longest-palindrome-by-concatenating-two-letter-words/",
                            "score": 1556.8824239708,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2384. 最大回文数字",
                            "sort": 6,
                            "src": "/largest-palindromic-number/",
                            "score": 1636.47322627,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3035. 回文字符串的最大数量",
                            "sort": 7,
                            "src": "/maximum-palindromes-after-operations/",
                            "score": 1856.6336926997,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1616. 分割两个字符串得到回文串",
                            "sort": 8,
                            "src": "/split-two-strings-to-make-palindrome/",
                            "score": 1868.1914861381,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1147. 段式回文",
                            "sort": 9,
                            "src": "/longest-chunked-palindrome-decomposition/",
                            "score": 1912.0829958001,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2193. 得到回文串的最少操作次数",
                            "sort": 10,
                            "src": "/minimum-number-of-moves-to-make-palindrome/",
                            "score": 2090.6800569319,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "564. 寻找最近的回文数",
                            "sort": 11,
                            "src": "/find-the-closest-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "266. 回文排列",
                            "sort": 12,
                            "src": "/palindrome-permutation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2422. 使用合并操作将数组转换为回文序列",
                            "sort": 13,
                            "src": "/merge-operations-to-turn-array-into-a-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1842. 下个由相同数字构成的回文串",
                            "sort": 14,
                            "src": "/next-palindrome-using-same-digits/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3088. 使字符串反回文",
                            "sort": 15,
                            "src": "/make-string-anti-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "四、数学贪心",
            "sort": 5,
            "summary": "",
            "child": [
                {
                    "title": "§4.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2160. 拆分数位后四位数字的最小和",
                            "sort": 0,
                            "src": "/minimum-sum-of-four-digit-number-after-splitting-digits/",
                            "score": 1314.2912238536,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2578. 最小和分割",
                            "sort": 1,
                            "src": "/split-with-minimum-sum/",
                            "score": 1350.5883729249,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2244. 完成所有任务需要的最少轮数",
                            "sort": 2,
                            "src": "/minimum-rounds-to-complete-all-tasks/",
                            "score": 1371.8092952004,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2870. 使数组为空的最少操作次数",
                            "sort": 3,
                            "src": "/minimum-number-of-operations-to-make-array-empty/",
                            "score": 1392.3629194433,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1217. 玩筹码",
                            "sort": 4,
                            "src": "/minimum-cost-to-move-chips-to-the-same-position/",
                            "score": 1407.5442381391,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCS 01. 下载插件",
                            "sort": 5,
                            "src": "/Ju9Xwi/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3091. 执行操作使数据元素之和大于等于 K",
                            "sort": 6,
                            "src": "/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/",
                            "score": 1521.7402232638,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "397. 整数替换",
                            "sort": 7,
                            "src": "/integer-replacement/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.2 乘积贪心",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "628. 三个数的最大乘积",
                            "sort": 0,
                            "src": "/maximum-product-of-three-numbers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1567. 乘积为正数的最长子数组长度",
                            "sort": 1,
                            "src": "/maximum-length-of-subarray-with-positive-product/",
                            "score": 1710.3243520032,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.3 排序不等式",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "给定两个长度均为 $n$ 的数组 $a$ 和 $b$，可以交换同一数组内的元素，最小化/最大化<br>$$<br>a[0]\\cdot b[0] + a[1]\\cdot b[1] +\\cdots+ a[n-1]\\cdot b[n-1]<br>$$<br>把 $a$ 和 $b$ 都从小到大排序，可以最大化上式。<br>把 $a$ 从小到大排序，$b$ 从大到小排序，可以最小化上式。<br>",
                    "child": [
                        {
                            "title": "2285. 道路的最大总重要性",
                            "sort": 0,
                            "src": "/maximum-total-importance-of-roads/",
                            "score": 1496.2502937005,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3016. 输入单词需要的最少按键次数 II",
                            "sort": 1,
                            "src": "/minimum-number-of-pushes-to-type-word-ii/",
                            "score": 1533.5722750742,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1402. 做菜顺序",
                            "sort": 2,
                            "src": "/reducing-dishes/",
                            "score": 1679.2607152001,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2931. 购买物品的最大开销",
                            "sort": 3,
                            "src": "/maximum-spending-after-buying-items/",
                            "score": 1822.3170524016,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1589. 所有排列中的最大和",
                            "sort": 4,
                            "src": "/maximum-sum-obtained-of-any-permutation/",
                            "score": 1871.3112059413,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1874. 两个数组的最小乘积和",
                            "sort": 5,
                            "src": "/minimize-product-sum-of-two-arrays/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2268. 最少按键次数",
                            "sort": 6,
                            "src": "/minimum-number-of-keypresses/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§4.4 基本不等式",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "**栅栏问题**：长为 $n$ 米的篱笆栅栏，围成一个矩形，矩形面积最大是多少？<br>**变形**：长为 $n$ 米的栅栏分成 $k$ 份，每份围成一个正方形，面积之和最小是多少？<br>",
                    "child": [
                        {
                            "title": "3081. 替换字符串中的问号使分数最小",
                            "sort": 0,
                            "src": "/replace-question-marks-in-string-to-minimize-its-value/",
                            "score": 1904.6714229335,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1969. 数组元素的最小非零乘积",
                            "sort": 1,
                            "src": "/minimum-non-zero-product-of-the-array-elements/",
                            "score": 1966.7067914206,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2939. 最大异或乘积",
                            "sort": 2,
                            "src": "/maximum-xor-product/",
                            "score": 2127.5100545681,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2897. 对数组执行操作使平方和最大",
                            "sort": 3,
                            "src": "/apply-operations-on-array-to-maximize-sum-of-squares/",
                            "score": 2301.4069974024,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.5 中位数贪心",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "给定数组，每次操作可以把其中一个数加一/减一，把所有数都变成一样的，最少要操作多少次？<br>把所有数都变成数组的**中位数**是最优的。<br><a href=\"https://leetcode.cn/problems/5TxKeK/solution/zhuan-huan-zhong-wei-shu-tan-xin-dui-din-7r9b/\">两种证明方法</a><br>",
                    "child": [
                        {
                            "title": "462. 最小操作次数使数组元素相等 II",
                            "sort": 0,
                            "src": "/minimum-moves-to-equal-array-elements-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2033. 获取单值网格的最小操作数",
                            "sort": 1,
                            "src": "/minimum-operations-to-make-a-uni-value-grid/",
                            "score": 1671.9261598,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2448. 使数组相等的最小开销",
                            "sort": 2,
                            "src": "/minimum-cost-to-make-array-equal/",
                            "score": 2005.3737929084,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2607. 使子数组元素和相等",
                            "sort": 3,
                            "src": "/make-k-subarray-sums-equal/",
                            "score": 2071.3208991938,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2967. 使数组成为等数数组的最小代价",
                            "sort": 4,
                            "src": "/minimum-cost-to-make-array-equalindromic/",
                            "score": 2116.3244842355,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1478. 安排邮筒",
                            "sort": 5,
                            "src": "/allocate-mailboxes/",
                            "score": 2190.1757477854,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2968. 执行操作使频率分数最大",
                            "sort": 6,
                            "src": "/apply-operations-to-maximize-frequency-score/",
                            "score": 2444.2791027022,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1703. 得到连续 K 个 1 的最少相邻交换次数",
                            "sort": 7,
                            "src": "/minimum-adjacent-swaps-for-k-consecutive-ones/",
                            "score": 2466.8891773908,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3086. 拾起 K 个 1 需要的最少行动次数",
                            "sort": 8,
                            "src": "/minimum-moves-to-pick-k-ones/",
                            "score": 2672.7613091907,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 24. 数字游戏",
                            "sort": 9,
                            "src": "/5TxKeK/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "296. 最佳的碰头地点",
                            "sort": 10,
                            "src": "/best-meeting-point/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§4.6 归纳法",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2952. 需要添加的硬币的最小数量",
                            "sort": 0,
                            "src": "/minimum-number-of-coins-to-be-added/",
                            "score": 1784.3506628869,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "330. 按要求补齐数组",
                            "sort": 1,
                            "src": "/patching-array/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1798. 你能构造出连续值的最大数目",
                            "sort": 2,
                            "src": "/maximum-number-of-consecutive-values-you-can-make/",
                            "score": 1931.0849921121,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.7 其他数学贪心",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1414. 和为 K 的最少斐波那契数字数目",
                            "sort": 0,
                            "src": "/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/",
                            "score": 1465.7023558248,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3107. 使数组中位数等于 K 的最少操作数",
                            "sort": 1,
                            "src": "/minimum-operations-to-make-median-of-array-equal-to-k/",
                            "score": 1604.9805572557,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "754. 到达终点数字",
                            "sort": 2,
                            "src": "/reach-a-number/",
                            "score": 1880.3261182293,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1058. 最小化舍入误差以满足目标",
                            "sort": 3,
                            "src": "/minimize-rounding-error-to-meet-target/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "五、思维题",
            "sort": 6,
            "summary": "回想一下高考数学的最后一题，三个小问，前两小问让你计算一些特殊情况，第三小问让你计算/证明一个一般的结论。这其实就是**从特殊到一般**的思考方式，我们在做算法题（尤其是思维题和构造题）时，也可以从最简单、最特殊的情况开始，去探索题目的性质，逐渐过渡到一般情况。<br>**思考清单**<br>- **小型数组**：$\\textit{nums}$ 只有 $1$ 个数？只有 $2$ 个数？只有 $3$ 个数？<br>- **万里挑一**：$\\textit{nums}$ 所有数都相同？只有一个数不一样？有两个数不一样？某个数特别大？<br>- **黑白世界**：只有两种数？例如 $[0,1,0,1,0,1]$ 或者 $\\texttt{ababab}$。<br>- **反向思考**：如果答案是 $1$，输入会是什么样的？如果答案是 $2$？是 $\\textit{nums}[0]$？是 $\\textit{nums}[1]$？<br>- **枚举归纳**：试试小范围打表，暴力枚举所有情况，找规律。<br>思考这些特殊情况，有时会产生求解原问题的**灵感**。<br>",
            "child": [
                {
                    "title": "§5.1 从特殊到一般",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2745. 构造最长的新字符串",
                            "sort": 0,
                            "src": "/construct-the-longest-new-string/",
                            "score": 1607.4192947808,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2611. 老鼠和奶酪",
                            "sort": 1,
                            "src": "/mice-and-cheese/",
                            "score": 1663.456591933,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1029. 两地调度",
                            "sort": 2,
                            "src": "/two-city-scheduling/",
                            "score": 1348.0079390256,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2645. 构造有效字符串的最少插入数",
                            "sort": 3,
                            "src": "/minimum-additions-to-make-valid-string/",
                            "score": 1477.7669322402,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2202. K 次操作后最大化顶端元素",
                            "sort": 4,
                            "src": "/maximize-the-topmost-element-after-k-moves/",
                            "score": 1716.9721777,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2568. 最小无法得到的或值",
                            "sort": 5,
                            "src": "/minimum-impossible-or/",
                            "score": 1754.1710323358,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1702. 修改后的最大二进制字符串",
                            "sort": 6,
                            "src": "/maximum-binary-string-after-change/",
                            "score": 1825.4207082682,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3012. 通过操作使数组长度最小",
                            "sort": 7,
                            "src": "/minimize-length-of-array-using-operations/",
                            "score": 1832.7167755024,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1526. 形成目标数组的子数组最少增加次数",
                            "sort": 8,
                            "src": "/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
                            "score": 1872.0350138774,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2350. 不可能得到的最短骰子序列",
                            "sort": 9,
                            "src": "/shortest-impossible-sequence-of-rolls/",
                            "score": 1960.5763266754,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "517. 超级洗衣机",
                            "sort": 10,
                            "src": "/super-washing-machines/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2499. 让数组不相等的最小总代价",
                            "sort": 11,
                            "src": "/minimum-total-cost-to-make-arrays-unequal/",
                            "score": 2633.0144045478,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§5.2 脑筋急转弯",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "从一般到特殊。<br>",
                    "child": [
                        {
                            "title": "1903. 字符串中的最大奇数",
                            "sort": 0,
                            "src": "/largest-odd-number-in-string/",
                            "score": 1248.8547072235,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2396. 严格回文的数字",
                            "sort": 1,
                            "src": "/strictly-palindromic-number/",
                            "score": 1328.5499677186,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1689. 十-二进制数的最少数目",
                            "sort": 2,
                            "src": "/partitioning-into-minimum-number-of-deci-binary-numbers/",
                            "score": 1355.3825442341,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "521. 最长特殊序列 Ⅰ",
                            "sort": 3,
                            "src": "/longest-uncommon-subsequence-i/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3227. 字符串元音游戏",
                            "sort": 4,
                            "src": "/vowels-game-in-a-string/",
                            "score": 1451.8103068349,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2419. 按位与最大的最长子数组",
                            "sort": 5,
                            "src": "/longest-subarray-with-maximum-bitwise-and/",
                            "score": 1495.5180147817,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1992. 找到所有的农场组",
                            "sort": 6,
                            "src": "/find-all-groups-of-farmland/",
                            "score": 1539.2250193318,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2811. 判断是否能拆分数组",
                            "sort": 7,
                            "src": "/check-if-it-is-possible-to-split-array/",
                            "score": 1543.1204810684,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2211. 统计道路上的碰撞次数",
                            "sort": 8,
                            "src": "/count-collisions-on-a-road/",
                            "score": 1581.4963716166,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3207. 与敌人战斗后的最大分数",
                            "sort": 9,
                            "src": "/maximum-points-after-enemy-battles/",
                            "score": 1591.3005653292,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2546. 执行逐位运算使字符串相等",
                            "sort": 10,
                            "src": "/apply-bitwise-operations-to-make-strings-equal/",
                            "score": 1604.6299874552,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1503. 所有蚂蚁掉下来前的最后一刻",
                            "sort": 11,
                            "src": "/last-moment-before-all-ants-fall-out-of-a-plank/",
                            "score": 1618.6016480451,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2860. 让所有学生保持开心的分组方法数",
                            "sort": 12,
                            "src": "/happy-students/",
                            "score": 1625.7172632295,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1332. 删除回文子序列",
                            "sort": 13,
                            "src": "/remove-palindromic-subsequences/",
                            "score": 1628.5072578803,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1975. 最大方阵和",
                            "sort": 14,
                            "src": "/maximum-matrix-sum/",
                            "score": 1648.0880791614,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1145. 二叉树着色游戏",
                            "sort": 15,
                            "src": "/binary-tree-coloring-game/",
                            "score": 1741.4527995252,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3282. 到达数组末尾的最大得分",
                            "sort": 16,
                            "src": "/reach-end-of-array-with-max-score/",
                            "score": 1771.7317932329,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2332. 坐上公交的最晚时间",
                            "sort": 17,
                            "src": "/the-latest-time-to-catch-a-bus/",
                            "score": 1840.9122452886,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2680. 最大或值",
                            "sort": 18,
                            "src": "/maximum-or/",
                            "score": 1912.1926699881,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2731. 移动机器人",
                            "sort": 19,
                            "src": "/movement-of-robots/",
                            "score": 1922.9521758079,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2556. 二进制矩阵中翻转最多一次使路径不连通",
                            "sort": 20,
                            "src": "/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/",
                            "score": 2368.6674771307,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3125. 使得按位与结果为 0 的最大数字",
                            "sort": 21,
                            "src": "/maximum-number-that-makes-result-of-bitwise-and-zero/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1794. 统计距离最小的子串对个数",
                            "sort": 22,
                            "src": "/count-pairs-of-equal-substrings-with-minimum-difference/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.3 逆向思维",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2139. 得到目标值的最少行动次数",
                            "sort": 0,
                            "src": "/minimum-moves-to-reach-target-score/",
                            "score": 1417.3934930077,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1558. 得到目标数组的最少函数调用次数",
                            "sort": 1,
                            "src": "/minimum-numbers-of-function-calls-to-make-target-array/",
                            "score": 1637.0082208814,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2718. 查询后矩阵的和",
                            "sort": 2,
                            "src": "/sum-of-matrix-after-queries/",
                            "score": 1768.9138093037,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "417. 太平洋大西洋水流问题",
                            "sort": 3,
                            "src": "/pacific-atlantic-water-flow/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "991. 坏了的计算器",
                            "sort": 4,
                            "src": "/broken-calculator/",
                            "score": 1909.4189035523,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2227. 加密解密字符串",
                            "sort": 5,
                            "src": "/encrypt-and-decrypt-strings/",
                            "score": 1944.5673996888,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§5.4 巧妙转换",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2914. 使二进制字符串变美丽的最少修改次数",
                            "sort": 0,
                            "src": "/minimum-number-of-changes-to-make-binary-string-beautiful/",
                            "score": 1479.6908339113,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1657. 确定两个字符串是否接近",
                            "sort": 1,
                            "src": "/determine-if-two-strings-are-close/",
                            "score": 1530.4652027753,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2551. 将珠子放入背包中",
                            "sort": 2,
                            "src": "/put-marbles-in-bags/",
                            "score": 2042.4005521254,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1585. 检查字符串是否可以通过排序子字符串得到另一个字符串",
                            "sort": 3,
                            "src": "/check-if-string-is-transformable-with-substring-sort-operations/",
                            "score": 2333.0078041754,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1040. 移动石子直到连续 II",
                            "sort": 4,
                            "src": "/moving-stones-until-consecutive-ii/",
                            "score": 2455.8244137907,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1183. 矩阵中 1 的最大数量",
                            "sort": 5,
                            "src": "/maximum-number-of-ones/",
                            "score": 2366.7099607655,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "六、构造题",
            "sort": 7,
            "summary": "**构造题**会给定一些约束，我们要构造一个**满足这些约束**的数组/字符串等。<br>思考方式和第五章的「思考清单」是一样的，在特殊情况中寻找灵感。<br>",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "> 如果想做更多思维题和构造题，可以去 Codeforces 看看。<br>",
                    "child": [
                        {
                            "title": "942. 增减字符串匹配",
                            "sort": 0,
                            "src": "/di-string-match/",
                            "score": 1444.2068009303,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1968. 构造元素不等于两相邻元素平均值的数组",
                            "sort": 1,
                            "src": "/array-with-elements-not-equal-to-average-of-neighbors/",
                            "score": 1499.3290269267,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1253. 重构 2 行二进制矩阵",
                            "sort": 2,
                            "src": "/reconstruct-a-2-row-binary-matrix/",
                            "score": 1505.8669082864,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2182. 构造限制重复的字符串",
                            "sort": 3,
                            "src": "/construct-string-with-repeat-limit/",
                            "score": 1680.1353258588,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "969. 煎饼排序",
                            "sort": 4,
                            "src": "/pancake-sorting/",
                            "score": 1590.5791055102,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1605. 给定行和列的和求可行矩阵",
                            "sort": 5,
                            "src": "/find-valid-matrix-given-row-and-column-sums/",
                            "score": 1867.8619694847,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2375. 根据模式串构造最小数字",
                            "sort": 6,
                            "src": "/construct-smallest-number-from-di-string/",
                            "score": 1641.9424376927,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "324. 摆动排序 II",
                            "sort": 7,
                            "src": "/wiggle-sort-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "667. 优美的排列 II",
                            "sort": 8,
                            "src": "/beautiful-arrangement-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2122. 还原原数组",
                            "sort": 9,
                            "src": "/recover-the-original-array/",
                            "score": 2158.8988728254,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "932. 漂亮数组",
                            "sort": 10,
                            "src": "/beautiful-array/",
                            "score": 2294.0981174197,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3311. 构造符合图结构的二维矩阵",
                            "sort": 11,
                            "src": "/construct-2d-grid-matching-graph-layout/",
                            "score": 2664.2117701776,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2573. 找出对应 LCP 矩阵的字符串",
                            "sort": 12,
                            "src": "/find-the-string-with-lcp/",
                            "score": 2681.7054310332,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1982. 从子集的和还原数组",
                            "sort": 13,
                            "src": "/find-array-given-subset-sums/",
                            "score": 2872.0290327119,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "280. 摆动排序",
                            "sort": 14,
                            "src": "/wiggle-sort/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "484. 寻找排列",
                            "sort": 15,
                            "src": "/find-permutation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "七、其他",
            "sort": 8,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2740. 找出分区值",
                            "sort": 0,
                            "src": "/find-the-value-of-the-partition/",
                            "score": 1301.9276849391,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1033. 移动石子直到连续",
                            "sort": 1,
                            "src": "/moving-stones-until-consecutive/",
                            "score": 1421.2624065513,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1864. 构成交替字符串需要的最小交换次数",
                            "sort": 2,
                            "src": "/minimum-number-of-swaps-to-make-the-binary-string-alternating/",
                            "score": 1600.5573262373,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1899. 合并若干三元组以形成目标三元组",
                            "sort": 3,
                            "src": "/merge-triplets-to-form-target-triplet/",
                            "score": 1635.6879273926,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2498. 青蛙过河 II",
                            "sort": 4,
                            "src": "/frog-jump-ii/",
                            "score": 1759.0470795449,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "134. 加油站",
                            "sort": 5,
                            "src": "/gas-station/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2311. 小于等于 K 的最长二进制子序列",
                            "sort": 6,
                            "src": "/longest-binary-subsequence-less-than-or-equal-to-k/",
                            "score": 1839.9203623221,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3002. 移除后集合的最多元素数",
                            "sort": 7,
                            "src": "/maximum-size-of-a-set-after-removals/",
                            "score": 1917.4314822412,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "659. 分割数组为连续子序列",
                            "sort": 8,
                            "src": "/split-array-into-consecutive-subsequences/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2732. 找到矩阵中的好子集",
                            "sort": 9,
                            "src": "/find-a-good-subset-of-the-matrix/",
                            "score": 2239.7101856677,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2790. 长度递增组的最大数目",
                            "sort": 10,
                            "src": "/maximum-number-of-groups-with-increasing-length/",
                            "score": 2619.7016189999,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "782. 变为棋盘",
                            "sort": 11,
                            "src": "/transform-to-chessboard/",
                            "score": 2429.6705422448,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "420. 强密码检验器",
                            "sort": 12,
                            "src": "/strong-password-checker/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 26. 导航装置",
                            "sort": 13,
                            "src": "/hSRGyL/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 70. 沙地治理",
                            "sort": 14,
                            "src": "/XxZZjK/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2753. 计算一个环形街道上的房屋数量 II",
                            "sort": 15,
                            "src": "/count-houses-in-a-circular-street-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "答疑",
            "sort": 9,
            "summary": "**问**：贪心和 DP 的区别是什么？<br>**答**：DP 可以视为带记忆化的暴力搜索，只要不遗漏任何分支，答案一定是对的。贪心可以视为带剪枝的搜索，如果贪心策略不对，就容易贪过头，把正确的分支给剪掉。<br>**问**：有没有万能方法，判断一道题是贪心还是 DP？<br>**答**：很难。如果不知道题目类型，把 DP 想成贪心的大有人在。我的建议是**先思考 DP 能不能做，再思考贪心**。如果 DP 的时间复杂度足以通过题目，就不用思考贪心策略了。<br>此外，这也说明按照题单刷题的缺点：提前知道题目类型，跳过了一些思考步骤。如何弥补这个缺点？请看 <a href=\"https://leetcode.cn/circle/discuss/RvFUtj/\">如何科学刷题</a>。<br>",
            "child": []
        }
    ]
} as ProblemCategory;