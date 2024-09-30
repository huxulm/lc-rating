import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】常用数据结构（前缀和/差分/栈/队列/堆/字典树/并查集/树状数组/线段树）",
    "original_src": "https://leetcode.cn/circle/discuss/mOr1u6",
    "last_update": "2024-09-17T08:01:57.249911+00:00",
    "sort": 0,
    "child": [
        {
            "title": "零、常用枚举技巧",
            "sort": 0,
            "summary": "",
            "child": [
                {
                    "title": "§0.1 枚举右，维护左",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "对于 **双变量问题**，例如两数之和 $a_i+a_j=t$，可以枚举右边的 $a_j$，转换成 **单变量问题**，也就是在 $a_j$ 左边查找是否有 $a_i = t-a_j$，这可以用哈希表维护。<br>我把这个技巧叫做 **枚举右，维护左**。<br><a href=\"https://leetcode.cn/problems/two-sum/solution/dong-hua-cong-liang-shu-zhi-he-zhong-wo-0yvmj/\">讲解</a><br>",
                    "child": [
                        {
                            "title": "1. 两数之和",
                            "sort": 0,
                            "src": "/two-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1512. 好数对的数目",
                            "sort": 1,
                            "src": "/number-of-good-pairs/",
                            "score": 1161,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "219. 存在重复元素 II",
                            "sort": 2,
                            "src": "/contains-duplicate-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "121. 买卖股票的最佳时机",
                            "sort": 3,
                            "src": "/best-time-to-buy-and-sell-stock/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2815. 数组中的最大数对和",
                            "sort": 4,
                            "src": "/max-pair-sum-in-an-array/",
                            "score": 1295,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2342. 数位和相等数对的最大和",
                            "sort": 5,
                            "src": "/max-sum-of-a-pair-with-equal-sum-of-digits/",
                            "score": 1309,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1679. K 和数对的最大数目",
                            "sort": 6,
                            "src": "/max-number-of-k-sum-pairs/",
                            "score": 1346,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2260. 必须拿起的最小连续卡牌数",
                            "sort": 7,
                            "src": "/minimum-consecutive-cards-to-pick-up/",
                            "score": 1365,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1010. 总持续时间可被 60 整除的歌曲",
                            "sort": 8,
                            "src": "/pairs-of-songs-with-total-durations-divisible-by-60/",
                            "score": 1377,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3185. 构成整天的下标对数目 II",
                            "sort": 9,
                            "src": "/count-pairs-that-form-a-complete-day-ii/",
                            "score": 1010,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2748. 美丽下标对的数目",
                            "sort": 10,
                            "src": "/number-of-beautiful-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2874. 有序三元组中的最大值 II",
                            "sort": 11,
                            "src": "/maximum-value-of-an-ordered-triplet-ii/",
                            "score": 1583,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "454. 四数相加 II",
                            "sort": 12,
                            "src": "/4sum-ii/",
                            "score": 1700,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1014. 最佳观光组合",
                            "sort": 13,
                            "src": "/best-sightseeing-pair/",
                            "score": 1730,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1814. 统计一个数组中好对子的数目",
                            "sort": 14,
                            "src": "/count-nice-pairs-in-an-array/",
                            "score": 1738,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2905. 找出满足差值条件的下标 II",
                            "sort": 15,
                            "src": "/find-indices-with-index-and-value-difference-ii/",
                            "score": 1764,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1031. 两个非重叠子数组的最大和",
                            "sort": 16,
                            "src": "/maximum-sum-of-two-non-overlapping-subarrays/",
                            "score": 2000,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2555. 两个线段获得的最多奖品",
                            "sort": 17,
                            "src": "/maximize-win-from-two-segments/",
                            "score": 2081,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3267. 统计近似相等数对 II",
                            "sort": 18,
                            "src": "/count-almost-equal-pairs-ii/",
                            "score": 2500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1214. 查找两棵二叉搜索树之和",
                            "sort": 19,
                            "src": "/two-sum-bsts/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2613. 美数对",
                            "sort": 20,
                            "src": "/beautiful-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2964. 可被整除的三元组数量",
                            "sort": 21,
                            "src": "/number-of-divisible-triplet-sums/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "面试题 16.24. 数对和",
                            "sort": 22,
                            "src": "/pairs-with-sum-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1534. 统计好三元组",
                            "sort": 23,
                            "src": "/count-good-triplets/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1995. 统计特殊四元组",
                            "sort": 24,
                            "src": "/count-special-quadruplets/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§0.2 枚举中间",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "对于三个或者四个变量的问题，枚举中间的变量往往更好算。<br>",
                    "child": [
                        {
                            "title": "2909. 元素和最小的山形三元组 II",
                            "sort": 0,
                            "src": "/minimum-sum-of-mountain-triplets-ii/",
                            "score": 1479,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1930. 长度为 3 的不同回文子序列",
                            "sort": 1,
                            "src": "/unique-length-3-palindromic-subsequences/",
                            "score": 1533,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3128. 直角三角形",
                            "sort": 2,
                            "src": "/right-triangles/",
                            "score": 1541,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2874. 有序三元组中的最大值 II",
                            "sort": 3,
                            "src": "/maximum-value-of-an-ordered-triplet-ii/",
                            "score": 1583,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "447. 回旋镖的数量",
                            "sort": 4,
                            "src": "/number-of-boomerangs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3067. 在带权树网络中统计可连接服务器对数目",
                            "sort": 5,
                            "src": "/count-pairs-of-connectable-servers-in-a-weighted-tree-network/",
                            "score": 1909,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2242. 节点序列的最大得分",
                            "sort": 6,
                            "src": "/maximum-score-of-a-node-sequence/",
                            "score": 2304,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2867. 统计树中的合法路径数目",
                            "sort": 7,
                            "src": "/count-valid-paths-in-a-tree/",
                            "score": 2428,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2552. 统计上升四元组",
                            "sort": 8,
                            "src": "/count-increasing-quadruplets/",
                            "score": 2433,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3257. 放三个车的价值之和最大 II",
                            "sort": 9,
                            "src": "/maximum-value-sum-by-placing-three-rooks-ii/",
                            "score": 2553,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3073. 最大递增三元组",
                            "sort": 10,
                            "src": "/maximum-increasing-triplet-value/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "一、前缀和",
            "sort": 1,
            "summary": "",
            "child": [
                {
                    "title": "§1.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/range-sum-query-immutable/solution/qian-zhui-he-ji-qi-kuo-zhan-fu-ti-dan-py-vaar/\">讲解</a><br>",
                    "child": [
                        {
                            "title": "303. 区域和检索 - 数组不可变",
                            "sort": 0,
                            "src": "/range-sum-query-immutable/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2559. 统计范围内的元音字符串数",
                            "sort": 1,
                            "src": "/count-vowel-strings-in-ranges/",
                            "score": 1435,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2389. 和有限的最长子序列",
                            "sort": 2,
                            "src": "/longest-subsequence-with-limited-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3152. 特殊数组 II",
                            "sort": 3,
                            "src": "/special-array-ii/",
                            "score": 1523,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2438. 二的幂数组中查询范围内的乘积",
                            "sort": 4,
                            "src": "/range-product-queries-of-powers/",
                            "score": 1610,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2055. 蜡烛之间的盘子",
                            "sort": 5,
                            "src": "/plates-between-candles/",
                            "score": 1819,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1744. 你能在你最喜欢的那天吃到你最喜欢的糖果吗？",
                            "sort": 6,
                            "src": "/can-you-eat-your-favorite-candy-on-your-favorite-day/",
                            "score": 1859,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "53. 最大子数组和",
                            "sort": 7,
                            "src": "/maximum-subarray/",
                            "score": 71,
                            "solution": "/maximum-subarray/solution/qian-zhui-he-zuo-fa-ben-zhi-shi-mai-mai-abu71/",
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.2 前缀和与哈希表",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "通常要用到「枚举右，维护左」的技巧。<br><a href=\"https://leetcode.cn/problems/subarray-sum-equals-k/solution/qian-zhui-he-ha-xi-biao-cong-liang-ci-bi-4mwr/\">讲解</a><br>",
                    "child": [
                        {
                            "title": "930. 和相同的二元子数组",
                            "sort": 0,
                            "src": "/binary-subarrays-with-sum/",
                            "score": 1592,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "560. 和为 K 的子数组",
                            "sort": 1,
                            "src": "/subarray-sum-equals-k/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1524. 和为奇数的子数组数目",
                            "sort": 2,
                            "src": "/number-of-sub-arrays-with-odd-sum/",
                            "score": 1611,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "974. 和可被 K 整除的子数组",
                            "sort": 3,
                            "src": "/subarray-sums-divisible-by-k/",
                            "score": 1676,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "523. 连续的子数组和",
                            "sort": 4,
                            "src": "/continuous-subarray-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "437. 路径总和 III",
                            "sort": 5,
                            "src": "/path-sum-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2588. 统计美丽子数组数目",
                            "sort": 6,
                            "src": "/count-the-number-of-beautiful-subarrays/",
                            "score": 1697,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "525. 连续数组",
                            "sort": 7,
                            "src": "/contiguous-array/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3026. 最大好子数组和",
                            "sort": 8,
                            "src": "/maximum-good-subarray-sum/",
                            "score": 1817,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1477. 找两个和为目标值且不重叠的子数组",
                            "sort": 9,
                            "src": "/find-two-non-overlapping-sub-arrays-each-with-target-sum/",
                            "score": 1851,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1546. 和为目标值且不重叠的非空子数组的最大数目",
                            "sort": 10,
                            "src": "/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/",
                            "score": 1855,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 17.05. 字母与数字",
                            "sort": 11,
                            "src": "/find-longest-subarray-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1124. 表现良好的最长时间段",
                            "sort": 12,
                            "src": "/longest-well-performing-interval/",
                            "score": 1908,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2488. 统计中位数为 K 的子数组",
                            "sort": 13,
                            "src": "/count-subarrays-with-median-k/",
                            "score": 1999,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1590. 使数组和能被 P 整除",
                            "sort": 14,
                            "src": "/make-sum-divisible-by-p/",
                            "score": 2039,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2845. 统计趣味子数组的数目",
                            "sort": 15,
                            "src": "/count-of-interesting-subarrays/",
                            "score": 2073,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1442. 形成两个异或相等数组的三元组数目",
                            "sort": 16,
                            "src": "/count-triplets-that-can-form-two-arrays-of-equal-xor/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2025. 分割数组的最多方案数",
                            "sort": 17,
                            "src": "/maximum-number-of-ways-to-partition-an-array/",
                            "score": 2218,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2949. 统计美丽子字符串 II",
                            "sort": 18,
                            "src": "/count-beautiful-substrings-ii/",
                            "score": 2445,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "325. 和等于 k 的最长子数组长度",
                            "sort": 19,
                            "src": "/maximum-size-subarray-sum-equals-k/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "548. 将数组分割成和相等的子数组",
                            "sort": 20,
                            "src": "/split-array-with-equal-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1983. 范围和相等的最宽索引对",
                            "sort": 21,
                            "src": "/widest-pair-of-indices-with-equal-range-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2489. 固定比率的子字符串数",
                            "sort": 22,
                            "src": "/number-of-substrings-with-fixed-ratio/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2950. 可整除子串的数量",
                            "sort": 23,
                            "src": "/number-of-divisible-substrings/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.3 距离和",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/minimum-operations-to-make-all-array-elements-equal/solution/yi-tu-miao-dong-pai-xu-qian-zhui-he-er-f-nf55/\">图解</a><br>",
                    "child": [
                        {
                            "title": "1685. 有序数组中差绝对值之和",
                            "sort": 0,
                            "src": "/sum-of-absolute-differences-in-a-sorted-array/",
                            "score": 1496,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2615. 等值距离和",
                            "sort": 1,
                            "src": "/sum-of-distances/",
                            "score": 1793,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2602. 使数组元素全部相等的最少操作次数",
                            "sort": 2,
                            "src": "/minimum-operations-to-make-all-array-elements-equal/",
                            "score": 1903,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2968. 执行操作使频率分数最大",
                            "sort": 3,
                            "src": "/apply-operations-to-maximize-frequency-score/",
                            "score": 2444,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1703. 得到连续 K 个 1 的最少相邻交换次数",
                            "sort": 4,
                            "src": "/minimum-adjacent-swaps-for-k-consecutive-ones/",
                            "score": 2467,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3086. 拾起 K 个 1 需要的最少行动次数",
                            "sort": 5,
                            "src": "/minimum-moves-to-pick-k-ones/",
                            "score": 2673,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.4 前缀异或和",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1310. 子数组异或查询",
                            "sort": 0,
                            "src": "/xor-queries-of-a-subarray/",
                            "score": 1460,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1177. 构建回文串检测",
                            "sort": 1,
                            "src": "/can-make-palindrome-from-substring/",
                            "score": 1848,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1371. 每个元音包含偶数次的最长子字符串",
                            "sort": 2,
                            "src": "/find-the-longest-substring-containing-vowels-in-even-counts/",
                            "score": 2041,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1542. 找出最长的超赞子字符串",
                            "sort": 3,
                            "src": "/find-longest-awesome-substring/",
                            "score": 2222,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1915. 最美子字符串的数目",
                            "sort": 4,
                            "src": "/number-of-wonderful-substrings/",
                            "score": 2235,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2791. 树中可以形成回文的路径数",
                            "sort": 5,
                            "src": "/count-paths-that-can-form-a-palindrome-in-a-tree/",
                            "score": 2677,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.5 其他一维前缀和",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1895. 最大的幻方",
                            "sort": 0,
                            "src": "/largest-magic-square/",
                            "score": 1781,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1878. 矩阵中最大的三个菱形和",
                            "sort": 1,
                            "src": "/get-biggest-three-rhombus-sums-in-a-grid/",
                            "score": 1898,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1031. 两个非重叠子数组的最大和",
                            "sort": 2,
                            "src": "/maximum-sum-of-two-non-overlapping-subarrays/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2245. 转角路径的乘积中最多能有几个尾随零",
                            "sort": 3,
                            "src": "/maximum-trailing-zeros-in-a-cornered-path/",
                            "score": 2037,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1712. 将数组分成三个子数组的方案数",
                            "sort": 4,
                            "src": "/ways-to-split-array-into-three-subarrays/",
                            "score": 2079,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1862. 向下取整数对和",
                            "sort": 5,
                            "src": "/sum-of-floored-pairs/",
                            "score": 2170,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "363. 矩形区域不超过 K 的最大数值和",
                            "sort": 6,
                            "src": "/max-sum-of-rectangle-no-larger-than-k/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2281. 巫师的总力量和",
                            "sort": 7,
                            "src": "/sum-of-total-strength-of-wizards/",
                            "score": 2621,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2983. 回文串重新排列查询",
                            "sort": 8,
                            "src": "/palindrome-rearrangement-queries/",
                            "score": 2780,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2955. 同端子串的数量",
                            "sort": 9,
                            "src": "/number-of-same-end-substrings/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1788. 最大化花园的美观度",
                            "sort": 10,
                            "src": "/maximize-the-beauty-of-the-garden/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2819. 购买巧克力后的最小相对损失",
                            "sort": 11,
                            "src": "/minimum-relative-loss-after-buying-chocolates/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.6 二维前缀和",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/range-sum-query-2d-immutable/solution/tu-jie-yi-zhang-tu-miao-dong-er-wei-qian-84qp/\">【图解】一张图秒懂二维前缀和！</a><br>二维前缀最小值：<br>",
                    "child": [
                        {
                            "title": "304. 二维区域和检索 - 矩阵不可变",
                            "sort": 0,
                            "src": "/range-sum-query-2d-immutable/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1314. 矩阵区域和",
                            "sort": 1,
                            "src": "/matrix-block-sum/",
                            "score": 1484,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3070. 元素和小于等于 k 的子矩阵的数目",
                            "sort": 2,
                            "src": "/count-submatrices-with-top-left-element-and-sum-less-than-k/",
                            "score": 1499,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1738. 找出第 K 大的异或坐标值",
                            "sort": 3,
                            "src": "/find-kth-largest-xor-coordinate-value/",
                            "score": 1671,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3212. 统计 X 和 Y 频数相等的子矩阵数量",
                            "sort": 4,
                            "src": "/count-submatrices-with-equal-frequency-of-x-and-y/",
                            "score": 1673,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1292. 元素和小于等于阈值的正方形的最大边长",
                            "sort": 5,
                            "src": "/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/",
                            "score": 1735,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "221. 最大正方形",
                            "sort": 6,
                            "src": "/maximal-square/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1277. 统计全为 1 的正方形子矩阵",
                            "sort": 7,
                            "src": "/count-square-submatrices-with-all-ones/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1504. 统计全 1 子矩形",
                            "sort": 8,
                            "src": "/count-submatrices-with-all-ones/",
                            "score": 1845,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1074. 元素和为目标值的子矩阵数量",
                            "sort": 9,
                            "src": "/number-of-submatrices-that-sum-to-target/",
                            "score": 2189,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3148. 矩阵中的最大得分",
                            "sort": 10,
                            "src": "/maximum-difference-score-in-a-grid/",
                            "score": 1820,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、差分",
            "sort": 2,
            "summary": "",
            "child": [
                {
                    "title": "§2.1 一维差分（扫描线）",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/car-pooling/solution/suan-fa-xiao-ke-tang-chai-fen-shu-zu-fu-9d4ra/\">原理讲解</a>（推荐和<a href=\"https://leetcode.cn/problems/stamping-the-grid/solution/wu-nao-zuo-fa-er-wei-qian-zhui-he-er-wei-zwiu/\">【图解】从一维差分到二维差分</a> 一起看）<br>",
                    "child": [
                        {
                            "title": "2848. 与车相交的点",
                            "sort": 0,
                            "src": "/points-that-intersect-with-cars/",
                            "score": 1230,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1893. 检查是否区域内所有整数都被覆盖",
                            "sort": 1,
                            "src": "/check-if-all-the-integers-in-a-range-are-covered/",
                            "score": 1307,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1854. 人口最多的年份",
                            "sort": 2,
                            "src": "/maximum-population-year/",
                            "score": 1370,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2960. 统计已测试设备",
                            "sort": 3,
                            "src": "/count-tested-devices-after-test-operations/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1094. 拼车",
                            "sort": 4,
                            "src": "/car-pooling/",
                            "score": 1441,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1109. 航班预订统计",
                            "sort": 5,
                            "src": "/corporate-flight-bookings/",
                            "score": 1570,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "56. 合并区间",
                            "sort": 6,
                            "src": "/merge-intervals/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "57. 插入区间",
                            "sort": 7,
                            "src": "/insert-interval/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "732. 我的日程安排表 III",
                            "sort": 8,
                            "src": "/my-calendar-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2406. 将区间分为最少组数",
                            "sort": 9,
                            "src": "/divide-intervals-into-minimum-number-of-groups/",
                            "score": 1713,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2381. 字母移位 II",
                            "sort": 10,
                            "src": "/shifting-letters-ii/",
                            "score": 1793,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "995. K 连续位的最小翻转次数",
                            "sort": 11,
                            "src": "/minimum-number-of-k-consecutive-bit-flips/",
                            "score": 1835,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1589. 所有排列中的最大和",
                            "sort": 12,
                            "src": "/maximum-sum-obtained-of-any-permutation/",
                            "score": 1871,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1526. 形成目标数组的子数组最少增加次数",
                            "sort": 13,
                            "src": "/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
                            "score": 1872,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1943. 描述绘画结果",
                            "sort": 14,
                            "src": "/describe-the-painting/",
                            "score": 1969,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3224. 使差值相等的最少数组改动次数",
                            "sort": 15,
                            "src": "/minimum-array-changes-to-make-differences-equal/",
                            "score": 1996,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2251. 花期内花的数目",
                            "sort": 16,
                            "src": "/number-of-flowers-in-full-bloom/",
                            "score": 2022,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2772. 使数组中的所有元素都等于零",
                            "sort": 17,
                            "src": "/apply-operations-to-make-all-array-elements-equal-to-zero/",
                            "score": 2029,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3229. 使数组等于目标数组所需的最少操作次数",
                            "sort": 18,
                            "src": "/minimum-operations-to-make-array-equal-to-target/",
                            "score": 2067,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "798. 得分最高的最小轮调",
                            "sort": 19,
                            "src": "/smallest-rotation-with-highest-score/",
                            "score": 2130,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2528. 最大化城市的最小供电站数目",
                            "sort": 20,
                            "src": "/maximize-the-minimum-powered-city/",
                            "score": 2236,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1674. 使数组互补的最少操作次数",
                            "sort": 21,
                            "src": "/minimum-moves-to-make-array-complementary/",
                            "score": 2333,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3017. 按距离统计房屋对数目 II",
                            "sort": 22,
                            "src": "/count-the-number-of-houses-at-a-certain-distance-ii/",
                            "score": 2709,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "253. 会议室 II",
                            "sort": 23,
                            "src": "/meeting-rooms-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "370. 区间加法",
                            "sort": 24,
                            "src": "/range-addition/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "759. 员工空闲时间",
                            "sort": 25,
                            "src": "/employee-free-time/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2021. 街上最亮的位置",
                            "sort": 26,
                            "src": "/brightest-position-on-street/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2015. 每段建筑物的平均高度",
                            "sort": 27,
                            "src": "/average-height-of-buildings-in-each-segment/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2237. 计算街道上满足所需亮度的位置数量",
                            "sort": 28,
                            "src": "/count-positions-on-street-with-required-brightness/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3009. 折线图上的最大交点数量",
                            "sort": 29,
                            "src": "/maximum-number-of-intersections-on-the-chart/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3279. Maximum Total Area Occupied by Pistons",
                            "sort": 30,
                            "src": "/maximum-total-area-occupied-by-pistons/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.2 二维差分",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/stamping-the-grid/solution/wu-nao-zuo-fa-er-wei-qian-zhui-he-er-wei-zwiu/\">【图解】从一维差分到二维差分</a><br>",
                    "child": [
                        {
                            "title": "2536. 子矩阵元素加 1",
                            "sort": 0,
                            "src": "/increment-submatrices-by-one/",
                            "score": 1583,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "850. 矩形面积 II",
                            "sort": 1,
                            "src": "/rectangle-area-ii/",
                            "score": 2236,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2132. 用邮票贴满网格图",
                            "sort": 2,
                            "src": "/stamping-the-grid/",
                            "score": 2364,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 74. 最强祝福力场",
                            "sort": 3,
                            "src": "/xepqZ5/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "三、栈",
            "sort": 3,
            "summary": "",
            "child": [
                {
                    "title": "§3.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1441. 用栈操作构建数组",
                            "sort": 0,
                            "src": "/build-an-array-with-stack-operations/",
                            "score": 1180,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "844. 比较含退格的字符串",
                            "sort": 1,
                            "src": "/backspace-string-compare/",
                            "score": 1228,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "682. 棒球比赛",
                            "sort": 2,
                            "src": "/baseball-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2390. 从字符串中移除星号",
                            "sort": 3,
                            "src": "/removing-stars-from-a-string/",
                            "score": 1348,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1472. 设计浏览器历史记录",
                            "sort": 4,
                            "src": "/design-browser-history/",
                            "score": 1454,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "946. 验证栈序列",
                            "sort": 5,
                            "src": "/validate-stack-sequences/",
                            "score": 1462,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "71. 简化路径",
                            "sort": 6,
                            "src": "/simplify-path/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.2 进阶",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "3170. 删除星号以后字典序最小的字符串",
                            "sort": 0,
                            "src": "/lexicographically-minimum-string-after-removing-stars/",
                            "score": 1772,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "155. 最小栈",
                            "sort": 1,
                            "src": "/min-stack/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1381. 设计一个支持增量操作的栈",
                            "sort": 2,
                            "src": "/design-a-stack-with-increment-operation/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "636. 函数的独占时间",
                            "sort": 3,
                            "src": "/exclusive-time-of-functions/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2434. 使用机器人打印字典序最小的字符串",
                            "sort": 4,
                            "src": "/using-a-robot-to-print-the-lexicographically-smallest-string/",
                            "score": 1953,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "895. 最大频率栈",
                            "sort": 5,
                            "src": "/maximum-frequency-stack/",
                            "score": 2028,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1172. 餐盘栈",
                            "sort": 6,
                            "src": "/dinner-plate-stacks/",
                            "score": 2110,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2589. 完成所有任务的最少时间",
                            "sort": 7,
                            "src": "/minimum-time-to-complete-all-tasks/",
                            "score": 2381,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "716. 最大栈",
                            "sort": 8,
                            "src": "/max-stack/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.3 邻项消除",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2696. 删除子串后的字符串最小长度",
                            "sort": 0,
                            "src": "/minimum-string-length-after-removing-substrings/",
                            "score": 1282,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1047. 删除字符串中的所有相邻重复项",
                            "sort": 1,
                            "src": "/remove-all-adjacent-duplicates-in-string/",
                            "score": 1286,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1544. 整理字符串",
                            "sort": 2,
                            "src": "/make-the-string-great/",
                            "score": 1344,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1003. 检查替换后的词是否有效",
                            "sort": 3,
                            "src": "/check-if-word-is-valid-after-substitutions/",
                            "score": 1427,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2216. 美化数组的最少删除数",
                            "sort": 4,
                            "src": "/minimum-deletions-to-make-array-beautiful/",
                            "score": 1510,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1209. 删除字符串中的所有相邻重复项 II",
                            "sort": 5,
                            "src": "/remove-all-adjacent-duplicates-in-string-ii/",
                            "score": 1542,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2211. 统计道路上的碰撞次数",
                            "sort": 6,
                            "src": "/count-collisions-on-a-road/",
                            "score": 1581,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "735. 小行星碰撞",
                            "sort": 7,
                            "src": "/asteroid-collision/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1717. 删除子字符串的最大得分",
                            "sort": 8,
                            "src": "/maximum-score-from-removing-substrings/",
                            "score": 1868,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2197. 替换数组中的非互质数",
                            "sort": 9,
                            "src": "/replace-non-coprime-numbers-in-array/",
                            "score": 2057,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2751. 机器人碰撞",
                            "sort": 10,
                            "src": "/robot-collisions/",
                            "score": 2092,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.4 合法括号字符串",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "注：部分题目可以不用栈，而是用一个数字记录嵌套深度。<br>",
                    "child": [
                        {
                            "title": "20. 有效的括号",
                            "sort": 0,
                            "src": "/valid-parentheses/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "921. 使括号有效的最少添加",
                            "sort": 1,
                            "src": "/minimum-add-to-make-parentheses-valid/",
                            "score": 1242,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1021. 删除最外层的括号",
                            "sort": 2,
                            "src": "/remove-outermost-parentheses/",
                            "score": 1311,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1614. 括号的最大嵌套深度",
                            "sort": 3,
                            "src": "/maximum-nesting-depth-of-the-parentheses/",
                            "score": 1323,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1190. 反转每对括号间的子串",
                            "sort": 4,
                            "src": "/reverse-substrings-between-each-pair-of-parentheses/",
                            "score": 1486,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "856. 括号的分数",
                            "sort": 5,
                            "src": "/score-of-parentheses/",
                            "score": 1563,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1249. 移除无效的括号",
                            "sort": 6,
                            "src": "/minimum-remove-to-make-valid-parentheses/",
                            "score": 1657,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1963. 使字符串平衡的最小交换次数",
                            "sort": 7,
                            "src": "/minimum-number-of-swaps-to-make-the-string-balanced/",
                            "score": 1689,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "678. 有效的括号字符串",
                            "sort": 8,
                            "src": "/valid-parenthesis-string/",
                            "score": 1700,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "32. 最长有效括号",
                            "sort": 9,
                            "src": "/longest-valid-parentheses/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1111. 有效括号的嵌套深度",
                            "sort": 10,
                            "src": "/maximum-nesting-depth-of-two-valid-parentheses-strings/",
                            "score": 1749,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1541. 平衡括号字符串的最少插入次数",
                            "sort": 11,
                            "src": "/minimum-insertions-to-balance-a-parentheses-string/",
                            "score": 1759,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2116. 判断一个括号字符串是否有效",
                            "sort": 12,
                            "src": "/check-if-a-parentheses-string-can-be-valid/",
                            "score": 2038,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.5 表达式解析",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "150. 逆波兰表达式求值",
                            "sort": 0,
                            "src": "/evaluate-reverse-polish-notation/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1006. 笨阶乘",
                            "sort": 1,
                            "src": "/clumsy-factorial/",
                            "score": 1408,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "224. 基本计算器",
                            "sort": 2,
                            "src": "/basic-calculator/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "227. 基本计算器 II",
                            "sort": 3,
                            "src": "/basic-calculator-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "726. 原子的数量",
                            "sort": 4,
                            "src": "/number-of-atoms/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1106. 解析布尔表达式",
                            "sort": 5,
                            "src": "/parsing-a-boolean-expression/",
                            "score": 1880,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "591. 标签验证器",
                            "sort": 6,
                            "src": "/tag-validator/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "736. Lisp 语法解析",
                            "sort": 7,
                            "src": "/parse-lisp-expression/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1096. 花括号展开 II",
                            "sort": 8,
                            "src": "/brace-expansion-ii/",
                            "score": 2349,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1896. 反转表达式值的最少操作次数",
                            "sort": 9,
                            "src": "/minimum-cost-to-change-the-final-value-of-expression/",
                            "score": 2532,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "770. 基本计算器 IV",
                            "sort": 10,
                            "src": "/basic-calculator-iv/",
                            "score": 2863,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "439. 三元表达式解析器",
                            "sort": 11,
                            "src": "/ternary-expression-parser/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "772. 基本计算器 III",
                            "sort": 12,
                            "src": "/basic-calculator-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1087. 花括号展开",
                            "sort": 13,
                            "src": "/brace-expansion/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1597. 根据中缀表达式构造二叉表达式树",
                            "sort": 14,
                            "src": "/build-binary-expression-tree-from-infix-expression/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1628. 设计带解析函数的表达式树",
                            "sort": 15,
                            "src": "/design-an-expression-tree-with-evaluate-function/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.6 对顶栈",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2296. 设计一个文本编辑器",
                            "sort": 0,
                            "src": "/design-a-text-editor/",
                            "score": 1912,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.7 单调栈",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "见 <a href=\"https://leetcode.cn/circle/discuss/9oZFK9/\">单调栈题单</a>。<br>",
                    "child": []
                }
            ]
        },
        {
            "title": "四、队列",
            "sort": 4,
            "summary": "队列常用在 BFS 中，见 <a href=\"https://leetcode.cn/circle/discuss/YiXPXW/\">网格图题单</a> 和 <a href=\"https://leetcode.cn/circle/discuss/01LUak/\">图论题单</a>。与此相比，栈常用在 DFS 中，但无需我们手动维护。<br>",
            "child": [
                {
                    "title": "§4.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "933. 最近的请求次数",
                            "sort": 0,
                            "src": "/number-of-recent-calls/",
                            "score": 1338,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "950. 按递增顺序显示卡牌",
                            "sort": 1,
                            "src": "/reveal-cards-in-increasing-order/",
                            "score": 1686,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "649. Dota2 参议院",
                            "sort": 2,
                            "src": "/dota2-senate/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "346. 数据流中的移动平均值",
                            "sort": 3,
                            "src": "/moving-average-from-data-stream/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "362. 敲击计数器",
                            "sort": 4,
                            "src": "/design-hit-counter/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "379. 电话目录管理系统",
                            "sort": 5,
                            "src": "/design-phone-directory/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1429. 第一个唯一数字",
                            "sort": 6,
                            "src": "/first-unique-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2534. 通过门的时间",
                            "sort": 7,
                            "src": "/time-taken-to-cross-the-door/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§4.2 设计",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "225. 用队列实现栈",
                            "sort": 0,
                            "src": "/implement-stack-using-queues/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "232. 用栈实现队列",
                            "sort": 1,
                            "src": "/implement-queue-using-stacks/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "622. 设计循环队列",
                            "sort": 2,
                            "src": "/design-circular-queue/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "641. 设计循环双端队列",
                            "sort": 3,
                            "src": "/design-circular-deque/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1670. 设计前中后队列",
                            "sort": 4,
                            "src": "/design-front-middle-back-queue/",
                            "score": 1610,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.3 单调队列",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "个人觉得叫**单调双端队列**更准确。<br><a href=\"https://www.bilibili.com/video/BV1bM411X72E/\">原理讲解</a><br>",
                    "child": [
                        {
                            "title": "239. 滑动窗口最大值",
                            "sort": 0,
                            "src": "/sliding-window-maximum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCR 184. 设计自助结算系统",
                            "sort": 1,
                            "src": "/dui-lie-de-zui-da-zhi-lcof/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1438. 绝对差不超过限制的最长连续子数组",
                            "sort": 2,
                            "src": "/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
                            "score": 1672,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2398. 预算内的最多机器人数目",
                            "sort": 3,
                            "src": "/maximum-number-of-robots-within-budget/",
                            "score": 1917,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "862. 和至少为 K 的最短子数组",
                            "sort": 4,
                            "src": "/shortest-subarray-with-sum-at-least-k/",
                            "score": 2307,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1499. 满足不等式的最大值",
                            "sort": 5,
                            "src": "/max-value-of-equation/",
                            "score": 2456,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2071. 你可以安排的最多任务数目",
                            "sort": 6,
                            "src": "/maximum-number-of-tasks-you-can-assign/",
                            "score": 2648,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.4 单调队列优化 DP",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "一般用来维护一段转移来源的最值。<br>1. 前提：区间右端点变大时，左端点也在变大（同滑动窗口）。<br>2. 转移前，去掉队首无用数据。<br>3. 计算转移（直接从队首转移）。<br>4. 把数据（一般是 $f[i]$）插入队尾前，去掉队尾无用数据。<br>",
                    "child": [
                        {
                            "title": "2944. 购买水果需要的最少金币数",
                            "sort": 0,
                            "src": "/minimum-number-of-coins-for-fruits/",
                            "score": 1709,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1696. 跳跃游戏 VI",
                            "sort": 1,
                            "src": "/jump-game-vi/",
                            "score": 1954,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1425. 带限制的子序列和",
                            "sort": 2,
                            "src": "/constrained-subsequence-sum/",
                            "score": 2032,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "375. 猜数字大小 II",
                            "sort": 3,
                            "src": "/guess-number-higher-or-lower-ii/",
                            "score": 2,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1687. 从仓库到码头运输箱子",
                            "sort": 4,
                            "src": "/delivering-boxes-from-storage-to-ports/",
                            "score": 2610,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3117. 划分数组得到最小的值之和",
                            "sort": 5,
                            "src": "/minimum-sum-of-values-by-dividing-array/",
                            "score": 2735,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2945. 找到最大非递减数组的长度",
                            "sort": 6,
                            "src": "/find-maximum-non-decreasing-array-length/",
                            "score": 2943,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2969. 购买水果需要的最少金币数 II",
                            "sort": 7,
                            "src": "/minimum-number-of-coins-for-fruits-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "五、堆（优先队列）",
            "sort": 5,
            "summary": "",
            "child": [
                {
                    "title": "§5.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1046. 最后一块石头的重量",
                            "sort": 0,
                            "src": "/last-stone-weight/",
                            "score": 1173,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2558. 从数量最多的堆取走礼物",
                            "sort": 1,
                            "src": "/take-gifts-from-the-richest-pile/",
                            "score": 1277,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3264. K 次乘运算后的最终数组 I",
                            "sort": 2,
                            "src": "/final-array-state-after-k-multiplication-operations-i/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2336. 无限集中的最小数字",
                            "sort": 3,
                            "src": "/smallest-number-in-infinite-set/",
                            "score": 1375,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2530. 执行 K 次操作后的最大分数",
                            "sort": 4,
                            "src": "/maximal-score-after-applying-k-operations/",
                            "score": 1386,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3066. 超过阈值的最少操作数 II",
                            "sort": 5,
                            "src": "/minimum-operations-to-exceed-threshold-value-ii/",
                            "score": 1400,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1962. 移除石子使总数最小",
                            "sort": 6,
                            "src": "/remove-stones-to-minimize-the-total/",
                            "score": 1419,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1845. 座位预约管理系统",
                            "sort": 7,
                            "src": "/seat-reservation-manager/",
                            "score": 1429,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3275. 第 K 近障碍物查询",
                            "sort": 8,
                            "src": "/k-th-nearest-obstacle-queries/",
                            "score": 1450,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2208. 将数组和减半的最少操作次数",
                            "sort": 9,
                            "src": "/minimum-operations-to-halve-array-sum/",
                            "score": 1550,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2233. K 次增加后的最大乘积",
                            "sort": 10,
                            "src": "/maximum-product-after-k-increments/",
                            "score": 1686,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1942. 最小未被占据椅子的编号",
                            "sort": 11,
                            "src": "/the-number-of-the-smallest-unoccupied-chair/",
                            "score": 1695,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1801. 积压订单中的订单总数",
                            "sort": 12,
                            "src": "/number-of-orders-in-the-backlog/",
                            "score": 1711,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2406. 将区间分为最少组数",
                            "sort": 13,
                            "src": "/divide-intervals-into-minimum-number-of-groups/",
                            "score": 1713,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2462. 雇佣 K 位工人的总代价",
                            "sort": 14,
                            "src": "/total-cost-to-hire-k-workers/",
                            "score": 1764,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1834. 单线程 CPU",
                            "sort": 15,
                            "src": "/single-threaded-cpu/",
                            "score": 1798,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1792. 最大平均通过率",
                            "sort": 16,
                            "src": "/maximum-average-pass-ratio/",
                            "score": 1818,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2931. 购买物品的最大开销",
                            "sort": 17,
                            "src": "/maximum-spending-after-buying-items/",
                            "score": 1822,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1882. 使用服务器处理任务",
                            "sort": 18,
                            "src": "/process-tasks-using-servers/",
                            "score": 1979,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2402. 会议室 III",
                            "sort": 19,
                            "src": "/meeting-rooms-iii/",
                            "score": 2093,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "253. 会议室 II",
                            "sort": 20,
                            "src": "/meeting-rooms-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1167. 连接木棍的最低费用",
                            "sort": 21,
                            "src": "/minimum-cost-to-connect-sticks/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.2 进阶",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "23. 合并 K 个升序链表",
                            "sort": 0,
                            "src": "/merge-k-sorted-lists/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "355. 设计推特",
                            "sort": 1,
                            "src": "/design-twitter/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "502. IPO",
                            "sort": 2,
                            "src": "/ipo/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1705. 吃苹果的最大数目",
                            "sort": 3,
                            "src": "/maximum-number-of-eaten-apples/",
                            "score": 1930,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "778. 水位上升的泳池中游泳",
                            "sort": 4,
                            "src": "/swim-in-rising-water/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1631. 最小体力消耗路径",
                            "sort": 5,
                            "src": "/path-with-minimum-effort/",
                            "score": 1948,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1354. 多次求和构造目标数组",
                            "sort": 6,
                            "src": "/construct-target-array-with-multiple-sums/",
                            "score": 2015,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1353. 最多可以参加的会议数目",
                            "sort": 7,
                            "src": "/maximum-number-of-events-that-can-be-attended/",
                            "score": 2016,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1235. 规划兼职工作",
                            "sort": 8,
                            "src": "/maximum-profit-in-job-scheduling/",
                            "score": 2023,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "632. 最小区间",
                            "sort": 9,
                            "src": "/smallest-range-covering-elements-from-k-lists/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2542. 最大子序列的分数",
                            "sort": 10,
                            "src": "/maximum-subsequence-score/",
                            "score": 2056,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1383. 最大的团队表现值",
                            "sort": 11,
                            "src": "/maximum-performance-of-a-team/",
                            "score": 2091,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2503. 矩阵查询可获得的最大分数",
                            "sort": 12,
                            "src": "/maximum-number-of-points-from-grid-queries/",
                            "score": 2196,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2163. 删除元素后和的最小差值",
                            "sort": 13,
                            "src": "/minimum-difference-in-sums-after-removal-of-elements/",
                            "score": 2225,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "857. 雇佣 K 名工人的最低成本",
                            "sort": 14,
                            "src": "/minimum-cost-to-hire-k-workers/",
                            "score": 2260,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1606. 找到处理最多请求的服务器",
                            "sort": 15,
                            "src": "/find-servers-that-handled-most-number-of-requests/",
                            "score": 2276,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1851. 包含每个查询的最小区间",
                            "sort": 16,
                            "src": "/minimum-interval-to-include-each-query/",
                            "score": 2286,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "218. 天际线问题",
                            "sort": 17,
                            "src": "/the-skyline-problem/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "407. 接雨水 II",
                            "sort": 18,
                            "src": "/trapping-rain-water-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2940. 找到 Alice 和 Bob 可以相遇的建筑",
                            "sort": 19,
                            "src": "/find-building-where-alice-and-bob-can-meet/",
                            "score": 2327,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2589. 完成所有任务的最少时间",
                            "sort": 20,
                            "src": "/minimum-time-to-complete-all-tasks/",
                            "score": 2381,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1675. 数组的最小偏移量",
                            "sort": 21,
                            "src": "/minimize-deviation-in-array/",
                            "score": 2533,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2617. 网格图中最少访问的格子数",
                            "sort": 22,
                            "src": "/minimum-number-of-visited-cells-in-a-grid/",
                            "score": 2582,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2532. 过桥的时间",
                            "sort": 23,
                            "src": "/time-to-cross-a-bridge/",
                            "score": 2589,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3266. K 次乘运算后的最终数组 II",
                            "sort": 24,
                            "src": "/final-array-state-after-k-multiplication-operations-ii/",
                            "score": 2600,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 33. 蓄水",
                            "sort": 25,
                            "src": "/o8SXZn/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1199. 建造街区的最短时间",
                            "sort": 26,
                            "src": "/minimum-time-to-build-blocks/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.3 重排元素",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "984. 不含 AAA 或 BBB 的字符串",
                            "sort": 0,
                            "src": "/string-without-aaa-or-bbb/",
                            "score": 1474,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "767. 重构字符串",
                            "sort": 1,
                            "src": "/reorganize-string/",
                            "score": 1681,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1054. 距离相等的条形码",
                            "sort": 2,
                            "src": "/distant-barcodes/",
                            "score": 1702,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1953. 你可以工作的最大周数",
                            "sort": 3,
                            "src": "/maximum-number-of-weeks-for-which-you-can-work/",
                            "score": 1804,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1405. 最长快乐字符串",
                            "sort": 4,
                            "src": "/longest-happy-string/",
                            "score": 1821,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3081. 替换字符串中的问号使分数最小",
                            "sort": 5,
                            "src": "/replace-question-marks-in-string-to-minimize-its-value/",
                            "score": 1905,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "621. 任务调度器",
                            "sort": 6,
                            "src": "/task-scheduler/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "358. K 距离间隔重排字符串",
                            "sort": 7,
                            "src": "/rearrange-string-k-distance-apart/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.4 第 K 小/大",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "部分题目也可以用二分解决。<br>",
                    "child": [
                        {
                            "title": "264. 丑数 II",
                            "sort": 0,
                            "src": "/ugly-number-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "378. 有序矩阵中第 K 小的元素",
                            "sort": 1,
                            "src": "/kth-smallest-element-in-a-sorted-matrix/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "373. 查找和最小的 K 对数字",
                            "sort": 2,
                            "src": "/find-k-pairs-with-smallest-sums/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1439. 有序矩阵中的第 k 个最小数组和",
                            "sort": 3,
                            "src": "/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/",
                            "score": 2134,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "786. 第 K 个最小的质数分数",
                            "sort": 4,
                            "src": "/k-th-smallest-prime-fraction/",
                            "score": 2169,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2386. 找出数组的第 K 大和",
                            "sort": 5,
                            "src": "/find-the-k-sum-of-an-array/",
                            "score": 2648,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§5.5 反悔堆",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "基于堆的反悔贪心。<br>",
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
                            "score": 1962,
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
                            "score": 2074,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2813. 子序列最大优雅度",
                            "sort": 4,
                            "src": "/maximum-elegance-of-a-k-length-subsequence/",
                            "score": 2582,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3049. 标记所有下标的最早秒数 II",
                            "sort": 5,
                            "src": "/earliest-second-to-mark-indices-ii/",
                            "score": 3111,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2599. 使前缀和数组非负",
                            "sort": 6,
                            "src": "/make-the-prefix-sum-non-negative/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.6 懒删除堆",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2349. 设计数字容器系统",
                            "sort": 0,
                            "src": "/design-a-number-container-system/",
                            "score": 1540,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2353. 设计食物评分系统",
                            "sort": 1,
                            "src": "/design-a-food-rating-system/",
                            "score": 1782,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3092. 最高频率的 ID",
                            "sort": 2,
                            "src": "/most-frequent-ids/",
                            "score": 1793,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2034. 股票价格波动",
                            "sort": 3,
                            "src": "/stock-price-fluctuation/",
                            "score": 1832,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1172. 餐盘栈",
                            "sort": 4,
                            "src": "/dinner-plate-stacks/",
                            "score": 2110,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§5.7 对顶堆",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "另见 <a href=\"https://leetcode.cn/circle/discuss/01LUak/\">图论题单</a> 中的 Dijkstra 算法。<br>",
                    "child": [
                        {
                            "title": "2102. 序列顺序查询",
                            "sort": 0,
                            "src": "/sequentially-ordinal-rank-tracker/",
                            "score": 2159,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "295. 数据流的中位数",
                            "sort": 1,
                            "src": "/find-median-from-data-stream/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "480. 滑动窗口中位数",
                            "sort": 2,
                            "src": "/sliding-window-median/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "703. 数据流中的第 K 大元素",
                            "sort": 3,
                            "src": "/kth-largest-element-in-a-stream/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3013. 将数组分成最小总代价的子数组 II",
                            "sort": 4,
                            "src": "/divide-an-array-into-subarrays-with-minimum-cost-ii/",
                            "score": 2540,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 24. 数字游戏",
                            "sort": 5,
                            "src": "/5TxKeK/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "六、字典树（trie）",
            "sort": 6,
            "summary": "",
            "child": [
                {
                    "title": "§6.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "208. 实现 Trie (前缀树)",
                            "sort": 0,
                            "src": "/implement-trie-prefix-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "211. 添加与搜索单词 - 数据结构设计",
                            "sort": 1,
                            "src": "/design-add-and-search-words-data-structure/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "14. 最长公共前缀",
                            "sort": 2,
                            "src": "/longest-common-prefix/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "648. 单词替换",
                            "sort": 3,
                            "src": "/replace-words/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "677. 键值映射",
                            "sort": 4,
                            "src": "/map-sum-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "720. 词典中最长的单词",
                            "sort": 5,
                            "src": "/longest-word-in-dictionary/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1268. 搜索推荐系统",
                            "sort": 6,
                            "src": "/search-suggestions-system/",
                            "score": 1573,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1233. 删除子文件夹",
                            "sort": 7,
                            "src": "/remove-sub-folders-from-the-filesystem/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "820. 单词的压缩编码",
                            "sort": 8,
                            "src": "/short-encoding-of-words/",
                            "score": 1632,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2416. 字符串的前缀分数和",
                            "sort": 9,
                            "src": "/sum-of-prefix-scores-of-strings/",
                            "score": 1725,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1804. 实现 Trie （前缀树） II",
                            "sort": 10,
                            "src": "/implement-trie-ii-prefix-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§6.2 进阶",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "676. 实现一个魔法字典",
                            "sort": 0,
                            "src": "/implement-magic-dictionary/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "212. 单词搜索 II",
                            "sort": 1,
                            "src": "/word-search-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "336. 回文对",
                            "sort": 2,
                            "src": "/palindrome-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "745. 前缀和后缀搜索",
                            "sort": 3,
                            "src": "/prefix-and-suffix-search/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3093. 最长公共后缀查询",
                            "sort": 4,
                            "src": "/longest-common-suffix-queries/",
                            "score": 2118,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3045. 统计前后缀下标对 II",
                            "sort": 5,
                            "src": "/count-prefix-and-suffix-pairs-ii/",
                            "score": 2328,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1948. 删除系统中的重复文件夹",
                            "sort": 6,
                            "src": "/delete-duplicate-folders-in-system/",
                            "score": 2534,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "425. 单词方块",
                            "sort": 7,
                            "src": "/word-squares/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "527. 单词缩写",
                            "sort": 8,
                            "src": "/word-abbreviation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "588. 设计内存文件系统",
                            "sort": 9,
                            "src": "/design-in-memory-file-system/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "616. 给字符串添加加粗标签",
                            "sort": 10,
                            "src": "/add-bold-tag-in-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "758. 字符串中的加粗单词",
                            "sort": 11,
                            "src": "/bold-words-in-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "642. 设计搜索自动补全系统",
                            "sort": 12,
                            "src": "/design-search-autocomplete-system/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1065. 字符串的索引对",
                            "sort": 13,
                            "src": "/index-pairs-of-a-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1166. 设计文件系统",
                            "sort": 14,
                            "src": "/design-file-system/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1858. 包含所有前缀的最长单词",
                            "sort": 15,
                            "src": "/longest-word-with-all-prefixes/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§6.3 字典树优化 DP",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "139. 单词拆分",
                            "sort": 0,
                            "src": "/word-break/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "140. 单词拆分 II",
                            "sort": 1,
                            "src": "/word-break-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "472. 连接词",
                            "sort": 2,
                            "src": "/concatenated-words/",
                            "score": 2300,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2977. 转换字符串的最小成本 II",
                            "sort": 3,
                            "src": "/minimum-cost-to-convert-string-ii/",
                            "score": 2696,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§6.4 0-1 字典树（异或字典树）",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "部分题目也可以用试填法解决。<br>",
                    "child": [
                        {
                            "title": "421. 数组中两个数的最大异或值",
                            "sort": 0,
                            "src": "/maximum-xor-of-two-numbers-in-an-array/",
                            "score": 2000,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2935. 找出强数对的最大异或值 II",
                            "sort": 1,
                            "src": "/maximum-strong-pair-xor-ii/",
                            "score": 2349,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1707. 与数组中元素的最大异或值",
                            "sort": 2,
                            "src": "/maximum-xor-with-an-element-from-array/",
                            "score": 2359,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1803. 统计异或值在范围内的数对有多少",
                            "sort": 3,
                            "src": "/count-pairs-with-xor-in-a-range/",
                            "score": 2479,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1938. 查询最大基因差",
                            "sort": 4,
                            "src": "/maximum-genetic-difference-query/",
                            "score": 2503,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2479. 两个不重叠子树的最大异或值",
                            "sort": 5,
                            "src": "/maximum-xor-of-two-non-overlapping-subtrees/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "七、并查集",
            "sort": 7,
            "summary": "",
            "child": [
                {
                    "title": "§7.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "见 <a href=\"https://leetcode.cn/circle/discuss/YiXPXW/\">网格图题单</a> 中的 DFS 和 <a href=\"https://leetcode.cn/circle/discuss/01LUak/\">图论题单</a> 中的 DFS，其中大部分题目也可以用并查集实现。<br>",
                    "child": [
                        {
                            "title": "990. 等式方程的可满足性",
                            "sort": 0,
                            "src": "/satisfiability-of-equality-equations/",
                            "score": 1638,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "721. 账户合并",
                            "sort": 1,
                            "src": "/accounts-merge/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "737. 句子相似性 II",
                            "sort": 2,
                            "src": "/sentence-similarity-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1101. 彼此熟识的最早时间",
                            "sort": 3,
                            "src": "/the-earliest-moment-when-everyone-become-friends/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1258. 近义词句子",
                            "sort": 4,
                            "src": "/synonymous-sentences/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§7.2 进阶",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1202. 交换字符串中的元素",
                            "sort": 0,
                            "src": "/smallest-string-with-swaps/",
                            "score": 1855,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1061. 按字典序排列最小的等效字符串",
                            "sort": 1,
                            "src": "/lexicographically-smallest-equivalent-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1722. 执行交换操作后的最小汉明距离",
                            "sort": 2,
                            "src": "/minimize-hamming-distance-after-swap-operations/",
                            "score": 1892,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "765. 情侣牵手",
                            "sort": 3,
                            "src": "/couples-holding-hands/",
                            "score": 1999,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "947. 移除最多的同行或同列石头",
                            "sort": 4,
                            "src": "/most-stones-removed-with-same-row-or-column/",
                            "score": 2035,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "839. 相似字符串组",
                            "sort": 5,
                            "src": "/similar-string-groups/",
                            "score": 2054,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1970. 你能穿过矩阵的最后一天",
                            "sort": 6,
                            "src": "/last-day-where-you-can-still-cross/",
                            "score": 2124,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2076. 处理含限制条件的好友请求",
                            "sort": 7,
                            "src": "/process-restricted-friend-requests/",
                            "score": 2131,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1579. 保证图可完全遍历",
                            "sort": 8,
                            "src": "/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
                            "score": 2132,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "959. 由斜杠划分区域",
                            "sort": 9,
                            "src": "/regions-cut-by-slashes/",
                            "score": 2136,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2812. 找出最安全路径",
                            "sort": 10,
                            "src": "/find-the-safest-path-in-a-grid/",
                            "score": 2154,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2503. 矩阵查询可获得的最大分数",
                            "sort": 11,
                            "src": "/maximum-number-of-points-from-grid-queries/",
                            "score": 2196,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2867. 统计树中的合法路径数目",
                            "sort": 12,
                            "src": "/count-valid-paths-in-a-tree/",
                            "score": 2428,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2421. 好路径的数目",
                            "sort": 13,
                            "src": "/number-of-good-paths/",
                            "score": 2445,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2157. 字符串分组",
                            "sort": 14,
                            "src": "/groups-of-strings/",
                            "score": 2499,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1632. 矩阵转换后的秩",
                            "sort": 15,
                            "src": "/rank-transform-of-a-matrix/",
                            "score": 2530,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "803. 打砖块",
                            "sort": 16,
                            "src": "/bricks-falling-when-hit/",
                            "score": 2765,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
                            "sort": 17,
                            "src": "/number-of-ways-to-reorder-array-to-get-same-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3235. 判断矩形的两个角落是否可达",
                            "sort": 18,
                            "src": "/check-if-the-rectangle-corner-is-reachable/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 71. 集水器",
                            "sort": 19,
                            "src": "/kskhHQ/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2371. 最小化网格中的最大值",
                            "sort": 20,
                            "src": "/minimize-maximum-value-in-a-grid/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2459. 通过移动项目到空白区域来排序数组",
                            "sort": 21,
                            "src": "/sort-array-by-moving-items-to-empty-space/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§7.3 公因数并查集",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "也叫 GCD 并查集。<br>",
                    "child": [
                        {
                            "title": "2709. 最大公约数遍历",
                            "sort": 0,
                            "src": "/greatest-common-divisor-traversal/",
                            "score": 2172,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1627. 带阈值的图连通性",
                            "sort": 1,
                            "src": "/graph-connectivity-with-threshold/",
                            "score": 2221,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "952. 按公因数计算最大组件大小",
                            "sort": 2,
                            "src": "/largest-component-size-by-common-factor/",
                            "score": 2272,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1998. 数组的最大公因数排序",
                            "sort": 3,
                            "src": "/gcd-sort-of-an-array/",
                            "score": 2429,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§7.4 数组上的并查集",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1562. 查找大小为 M 的最新分组",
                            "sort": 0,
                            "src": "/find-latest-group-of-size-m/",
                            "score": 1928,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1488. 避免洪水泛滥",
                            "sort": 1,
                            "src": "/avoid-flood-in-the-city/",
                            "score": 1974,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2382. 删除操作后的最大子段和",
                            "sort": 2,
                            "src": "/maximum-segment-sum-after-removals/",
                            "score": 2136,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2334. 元素值大于变化阈值的子数组",
                            "sort": 3,
                            "src": "/subarray-with-elements-greater-than-varying-threshold/",
                            "score": 2381,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§7.5 区间并查集",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1851. 包含每个查询的最小区间",
                            "sort": 0,
                            "src": "/minimum-interval-to-include-each-query/",
                            "score": 2286,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3244. 新增道路查询后的最短距离 II",
                            "sort": 1,
                            "src": "/shortest-distance-after-road-addition-queries-ii/",
                            "score": 2270,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2158. 每天绘制新区域的数量",
                            "sort": 2,
                            "src": "/amount-of-new-area-painted-each-day/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§7.6 边权并查集",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "399. 除法求值",
                            "sort": 0,
                            "src": "/evaluate-division/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2307. 检查方程中的矛盾之处",
                            "sort": 1,
                            "src": "/check-for-contradictions-in-equations/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "八、树状数组和线段树",
            "sort": 8,
            "summary": "能用树状数组解决的题目，也能用线段树解决（反过来不一定）。但树状数组实现简单，代码短。<br>为方便大家练习，我把适合用树状数组解决的题目分到树状数组中，其余分到线段树中。<br>",
            "child": [
                {
                    "title": "§8.1 树状数组",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://leetcode.cn/problems/range-sum-query-mutable/solution/dai-ni-fa-ming-shu-zhuang-shu-zu-fu-shu-lyfll/\">带你发明树状数组！附数学证明</a><br>",
                    "child": [
                        {
                            "title": "307. 区域和检索 - 数组可修改",
                            "sort": 0,
                            "src": "/range-sum-query-mutable/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3072. 将元素分配到两个数组中 II",
                            "sort": 1,
                            "src": "/distribute-elements-into-two-arrays-ii/",
                            "score": 2053,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3187. 数组中的峰值",
                            "sort": 2,
                            "src": "/peaks-in-array/",
                            "score": 2154,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1649. 通过指令创建有序数组",
                            "sort": 3,
                            "src": "/create-sorted-array-through-instructions/",
                            "score": 2208,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1626. 无矛盾的最佳球队",
                            "sort": 4,
                            "src": "/best-team-with-no-conflicts/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1409. 查询带键的排列",
                            "sort": 5,
                            "src": "/queries-on-a-permutation-with-key/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2250. 统计包含每个点的矩形数目",
                            "sort": 6,
                            "src": "/count-number-of-rectangles-containing-each-point/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2179. 统计数组中好三元组数目",
                            "sort": 7,
                            "src": "/count-good-triplets-in-an-array/",
                            "score": 2272,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1395. 统计作战单位数",
                            "sort": 8,
                            "src": "/count-number-of-teams/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2659. 将数组清空",
                            "sort": 9,
                            "src": "/make-array-empty/",
                            "score": 2282,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2653. 滑动子数组的美丽值",
                            "sort": 10,
                            "src": "/sliding-subarray-beauty/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1505. 最多 K 次交换相邻数位后得到的最小整数",
                            "sort": 11,
                            "src": "/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/",
                            "score": 2337,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2926. 平衡子序列的最大和",
                            "sort": 12,
                            "src": "/maximum-balanced-subsequence-sum/",
                            "score": 2448,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2736. 最大和查询",
                            "sort": 13,
                            "src": "/maximum-sum-queries/",
                            "score": 2533,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3245. 交替组 III",
                            "sort": 14,
                            "src": "/alternating-groups-iii/",
                            "score": 3112,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1756. 设计最近使用（MRU）队列",
                            "sort": 15,
                            "src": "/design-most-recently-used-queue/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2519. 统计 K-Big 索引的数量",
                            "sort": 16,
                            "src": "/count-the-number-of-k-big-indices/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2613. 美数对",
                            "sort": 17,
                            "src": "/beautiful-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2921. 价格递增的最大利润三元组 II",
                            "sort": 18,
                            "src": "/maximum-profitable-triplets-with-increasing-prices-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "308. 二维区域和检索 - 可变",
                            "sort": 19,
                            "src": "/range-sum-query-2d-mutable/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§8.2 逆序对",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "除了可以用树状数组解决，部分题目也可以在**归并排序**的同时计算。<br>",
                    "child": [
                        {
                            "title": "LCR 170. 交易逆序对的总数",
                            "sort": 0,
                            "src": "/shu-zu-zhong-de-ni-xu-dui-lcof/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "315. 计算右侧小于当前元素的个数",
                            "sort": 1,
                            "src": "/count-of-smaller-numbers-after-self/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "493. 翻转对",
                            "sort": 2,
                            "src": "/reverse-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "327. 区间和的个数",
                            "sort": 3,
                            "src": "/count-of-range-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2426. 满足不等式的数对数目",
                            "sort": 4,
                            "src": "/number-of-pairs-satisfying-inequality/",
                            "score": 2030,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1850. 邻位交换的最小次数",
                            "sort": 5,
                            "src": "/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2193. 得到回文串的最少操作次数",
                            "sort": 6,
                            "src": "/minimum-number-of-moves-to-make-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1885. 统计数对",
                            "sort": 7,
                            "src": "/count-pairs-in-two-arrays/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§8.3 线段树（无区间更新）",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1157. 子数组中占绝大多数的元素",
                            "sort": 0,
                            "src": "/online-majority-element-in-subarray/",
                            "score": 2205,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2407. 最长递增子序列 II",
                            "sort": 1,
                            "src": "/longest-increasing-subsequence-ii/",
                            "score": 2280,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2940. 找到 Alice 和 Bob 可以相遇的建筑",
                            "sort": 2,
                            "src": "/find-building-where-alice-and-bob-can-meet/",
                            "score": 2327,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2286. 以组为单位订音乐会的门票",
                            "sort": 3,
                            "src": "/booking-concert-tickets-in-groups/",
                            "score": 2470,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3161. 物块放置查询",
                            "sort": 4,
                            "src": "/block-placement-queries/",
                            "score": 2513,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2213. 由单个字符重复的最长子字符串",
                            "sort": 5,
                            "src": "/longest-substring-of-one-repeating-character/",
                            "score": 2629,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3165. 不包含相邻元素的子序列的最大和",
                            "sort": 6,
                            "src": "/maximum-sum-of-subsequence-with-non-adjacent-elements/",
                            "score": 2697,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 81. 与非的谜题",
                            "sort": 7,
                            "src": "/ryfUiz/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§8.4 Lazy 线段树（有区间更新）",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2589. 完成所有任务的最少时间",
                            "sort": 0,
                            "src": "/minimum-time-to-complete-all-tasks/",
                            "score": 2381,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2569. 更新数组后处理求和查询",
                            "sort": 1,
                            "src": "/handling-sum-queries-after-update/",
                            "score": 2398,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1622. 奇妙序列",
                            "sort": 2,
                            "src": "/fancy-sequence/",
                            "score": 2476,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2916. 子数组不同元素数目的平方和 II",
                            "sort": 3,
                            "src": "/subarrays-distinct-element-sum-of-squares-ii/",
                            "score": 2816,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 05. 发 LeetCoin",
                            "sort": 4,
                            "src": "/coin-bonus/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 27. 黑盒光线反射",
                            "sort": 5,
                            "src": "/IQvJ9i/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§8.5 动态开点线段树",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "部分题目也可以用**珂朵莉树**解决。<br>",
                    "child": [
                        {
                            "title": "699. 掉落的方块",
                            "sort": 0,
                            "src": "/falling-squares/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "715. Range 模块",
                            "sort": 1,
                            "src": "/range-module/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "729. 我的日程安排表 I",
                            "sort": 2,
                            "src": "/my-calendar-i/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "731. 我的日程安排表 II",
                            "sort": 3,
                            "src": "/my-calendar-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "732. 我的日程安排表 III",
                            "sort": 4,
                            "src": "/my-calendar-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "850. 矩形面积 II",
                            "sort": 5,
                            "src": "/rectangle-area-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2276. 统计区间中的整数数目",
                            "sort": 6,
                            "src": "/count-integers-in-intervals/",
                            "score": 2222,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2770. 达到末尾下标所需的最大跳跃次数",
                            "sort": 7,
                            "src": "/maximum-number-of-jumps-to-reach-the-last-index/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "专题：离线算法",
            "sort": 9,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "对询问**排序**，通过改变回答询问的顺序，使问题更容易处理。<br>> 相应的，**在线算法**就是按照 $\\textit{queries}$ 的顺序一个一个处理。<br>",
                    "child": [
                        {
                            "title": "2343. 裁剪数字后查询第 K 小的数字",
                            "sort": 0,
                            "src": "/query-kth-smallest-trimmed-number/",
                            "score": 1652,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2070. 每一个查询的最大美丽值",
                            "sort": 1,
                            "src": "/most-beautiful-item-for-each-query/",
                            "score": 1724,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1847. 最近的房间",
                            "sort": 2,
                            "src": "/closest-room/",
                            "score": 2082,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2503. 矩阵查询可获得的最大分数",
                            "sort": 3,
                            "src": "/maximum-number-of-points-from-grid-queries/",
                            "score": 2196,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1851. 包含每个查询的最小区间",
                            "sort": 4,
                            "src": "/minimum-interval-to-include-each-query/",
                            "score": 2286,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1697. 检查边长度限制的路径是否存在",
                            "sort": 5,
                            "src": "/checking-existence-of-edge-length-limited-paths/",
                            "score": 2300,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2940. 找到 Alice 和 Bob 可以相遇的建筑",
                            "sort": 6,
                            "src": "/find-building-where-alice-and-bob-can-meet/",
                            "score": 2327,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2747. 统计没有收到请求的服务器数目",
                            "sort": 7,
                            "src": "/count-zero-request-servers/",
                            "score": 2405,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1938. 查询最大基因差",
                            "sort": 8,
                            "src": "/maximum-genetic-difference-query/",
                            "score": 2503,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2736. 最大和查询",
                            "sort": 9,
                            "src": "/maximum-sum-queries/",
                            "score": 2533,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        }
    ]
} as ProblemCategory;
