import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】常用数据结构（前缀和/差分/栈/队列/堆/字典树/并查集/树状数组/线段树）",
    "original_src": "https://leetcode.cn/circle/discuss/mOr1u6",
    "last_update": "2024-10-30 01:43:47",
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
                    "summary": "题目已按照难度分排序，右侧数字为难度分。<br>如果遇到难度很大，题解都看不懂的题目，建议直接跳过，二刷的时候再来尝试。<br>!<a href=\"https://pic.leetcode.cn/1713836847-cDYwhf-Programming.jfif\">数据结构题单 数据结构入门 数据结构新手教程 数据结构题目 力扣数据结构 leetcode数据结构 灵茶山艾府 灵神</a><br>",
                    "child": []
                }
            ]
        },
        {
            "title": "零、常用枚举技巧",
            "sort": 1,
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
                            "score": 1160.8899403409,
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
                            "score": 1295.0947625986,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2342. 数位和相等数对的最大和",
                            "sort": 5,
                            "src": "/max-sum-of-a-pair-with-equal-sum-of-digits/",
                            "score": 1308.9617729374,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1679. K 和数对的最大数目",
                            "sort": 6,
                            "src": "/max-number-of-k-sum-pairs/",
                            "score": 1345.737168609,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2260. 必须拿起的最小连续卡牌数",
                            "sort": 7,
                            "src": "/minimum-consecutive-cards-to-pick-up/",
                            "score": 1364.6787168645,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1010. 总持续时间可被 60 整除的歌曲",
                            "sort": 8,
                            "src": "/pairs-of-songs-with-total-durations-divisible-by-60/",
                            "score": 1377.1913915125,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3185. 构成整天的下标对数目 II",
                            "sort": 9,
                            "src": "/count-pairs-that-form-a-complete-day-ii/",
                            "score": 1385.2857255388,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2748. 美丽下标对的数目",
                            "sort": 10,
                            "src": "/number-of-beautiful-pairs/",
                            "score": 1301.1576743638,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2874. 有序三元组中的最大值 II",
                            "sort": 11,
                            "src": "/maximum-value-of-an-ordered-triplet-ii/",
                            "score": 1583.212966224,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "454. 四数相加 II",
                            "sort": 12,
                            "src": "/4sum-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1014. 最佳观光组合",
                            "sort": 13,
                            "src": "/best-sightseeing-pair/",
                            "score": 1730.3052054913,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1814. 统计一个数组中好对子的数目",
                            "sort": 14,
                            "src": "/count-nice-pairs-in-an-array/",
                            "score": 1737.8431142688,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2905. 找出满足差值条件的下标 II",
                            "sort": 15,
                            "src": "/find-indices-with-index-and-value-difference-ii/",
                            "score": 1763.787679959,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1031. 两个非重叠子数组的最大和",
                            "sort": 16,
                            "src": "/maximum-sum-of-two-non-overlapping-subarrays/",
                            "score": 1680.4852623991,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2555. 两个线段获得的最多奖品",
                            "sort": 17,
                            "src": "/maximize-win-from-two-segments/",
                            "score": 2080.7845644831,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3267. 统计近似相等数对 II",
                            "sort": 18,
                            "src": "/count-almost-equal-pairs-ii/",
                            "score": 2545.1080433595,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1214. 查找两棵二叉搜索树之和",
                            "sort": 19,
                            "src": "/two-sum-bsts/",
                            "score": 1389.0328392117,
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
                            "score": 1279.3383966145,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1995. 统计特殊四元组",
                            "sort": 24,
                            "src": "/count-special-quadruplets/",
                            "score": 1352.1791099256,
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
                            "score": 1478.8676835951,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1930. 长度为 3 的不同回文子序列",
                            "sort": 1,
                            "src": "/unique-length-3-palindromic-subsequences/",
                            "score": 1533.3376144199,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3128. 直角三角形",
                            "sort": 2,
                            "src": "/right-triangles/",
                            "score": 1540.8447688369,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2874. 有序三元组中的最大值 II",
                            "sort": 3,
                            "src": "/maximum-value-of-an-ordered-triplet-ii/",
                            "score": 1583.212966224,
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
                            "score": 1908.9411092109,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2242. 节点序列的最大得分",
                            "sort": 6,
                            "src": "/maximum-score-of-a-node-sequence/",
                            "score": 2304.3094138939,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2867. 统计树中的合法路径数目",
                            "sort": 7,
                            "src": "/count-valid-paths-in-a-tree/",
                            "score": 2428.3242593838,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2552. 统计上升四元组",
                            "sort": 8,
                            "src": "/count-increasing-quadruplets/",
                            "score": 2432.713399111,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3257. 放三个车的价值之和最大 II",
                            "sort": 9,
                            "src": "/maximum-value-sum-by-placing-three-rooks-ii/",
                            "score": 2553.2367142614,
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
            "sort": 2,
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
                            "score": 1435.0179887342,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2389. 和有限的最长子序列",
                            "sort": 2,
                            "src": "/longest-subsequence-with-limited-sum/",
                            "score": 1387.7347071166,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3152. 特殊数组 II",
                            "sort": 3,
                            "src": "/special-array-ii/",
                            "score": 1523.2643084719,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1749. 任意子数组和的绝对值的最大值",
                            "sort": 4,
                            "src": "/maximum-absolute-sum-of-any-subarray/",
                            "score": 1541.6176288991,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2438. 二的幂数组中查询范围内的乘积",
                            "sort": 5,
                            "src": "/range-product-queries-of-powers/",
                            "score": 1609.7858209851,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2055. 蜡烛之间的盘子",
                            "sort": 6,
                            "src": "/plates-between-candles/",
                            "score": 1819.3068421506,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1744. 你能在你最喜欢的那天吃到你最喜欢的糖果吗？",
                            "sort": 7,
                            "src": "/can-you-eat-your-favorite-candy-on-your-favorite-day/",
                            "score": 1858.9581916885,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "53. 最大子数组和",
                            "sort": 8,
                            "src": "/maximum-subarray/",
                            "score": null,
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
                            "score": 1591.5492530876,
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
                            "score": 1610.569398159,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "974. 和可被 K 整除的子数组",
                            "sort": 3,
                            "src": "/subarray-sums-divisible-by-k/",
                            "score": 1675.989407584,
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
                            "score": 1696.8895579594,
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
                            "score": 1816.556997127,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1477. 找两个和为目标值且不重叠的子数组",
                            "sort": 9,
                            "src": "/find-two-non-overlapping-sub-arrays-each-with-target-sum/",
                            "score": 1850.5506342426,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1546. 和为目标值且不重叠的非空子数组的最大数目",
                            "sort": 10,
                            "src": "/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/",
                            "score": 1855.377046154,
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
                            "score": 1908.3866125757,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2488. 统计中位数为 K 的子数组",
                            "sort": 13,
                            "src": "/count-subarrays-with-median-k/",
                            "score": 1998.889914712,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1590. 使数组和能被 P 整除",
                            "sort": 14,
                            "src": "/make-sum-divisible-by-p/",
                            "score": 2038.8592725467,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2845. 统计趣味子数组的数目",
                            "sort": 15,
                            "src": "/count-of-interesting-subarrays/",
                            "score": 2073.048019317,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1442. 形成两个异或相等数组的三元组数目",
                            "sort": 16,
                            "src": "/count-triplets-that-can-form-two-arrays-of-equal-xor/",
                            "score": 1524.5693481538,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2025. 分割数组的最多方案数",
                            "sort": 17,
                            "src": "/maximum-number-of-ways-to-partition-an-array/",
                            "score": 2217.8090802563,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2949. 统计美丽子字符串 II",
                            "sort": 18,
                            "src": "/count-beautiful-substrings-ii/",
                            "score": 2444.7192647604,
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
                            "score": 1495.715740828,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2615. 等值距离和",
                            "sort": 1,
                            "src": "/sum-of-distances/",
                            "score": 1793.3033536992,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2602. 使数组元素全部相等的最少操作次数",
                            "sort": 2,
                            "src": "/minimum-operations-to-make-all-array-elements-equal/",
                            "score": 1903.1973989877,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2968. 执行操作使频率分数最大",
                            "sort": 3,
                            "src": "/apply-operations-to-maximize-frequency-score/",
                            "score": 2444.2791027022,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1703. 得到连续 K 个 1 的最少相邻交换次数",
                            "sort": 4,
                            "src": "/minimum-adjacent-swaps-for-k-consecutive-ones/",
                            "score": 2466.8891773908,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3086. 拾起 K 个 1 需要的最少行动次数",
                            "sort": 5,
                            "src": "/minimum-moves-to-pick-k-ones/",
                            "score": 2672.7613091907,
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
                            "score": 1459.8208951847,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1177. 构建回文串检测",
                            "sort": 1,
                            "src": "/can-make-palindrome-from-substring/",
                            "score": 1848.0912848518,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1371. 每个元音包含偶数次的最长子字符串",
                            "sort": 2,
                            "src": "/find-the-longest-substring-containing-vowels-in-even-counts/",
                            "score": 2040.539289037,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1542. 找出最长的超赞子字符串",
                            "sort": 3,
                            "src": "/find-longest-awesome-substring/",
                            "score": 2221.7336557442,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1915. 最美子字符串的数目",
                            "sort": 4,
                            "src": "/number-of-wonderful-substrings/",
                            "score": 2234.9191877602,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2791. 树中可以形成回文的路径数",
                            "sort": 5,
                            "src": "/count-paths-that-can-form-a-palindrome-in-a-tree/",
                            "score": 2677.1682592316,
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
                            "score": 1781.3664141686,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1878. 矩阵中最大的三个菱形和",
                            "sort": 1,
                            "src": "/get-biggest-three-rhombus-sums-in-a-grid/",
                            "score": 1897.5516652727,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1031. 两个非重叠子数组的最大和",
                            "sort": 2,
                            "src": "/maximum-sum-of-two-non-overlapping-subarrays/",
                            "score": 1680.4852623991,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2245. 转角路径的乘积中最多能有几个尾随零",
                            "sort": 3,
                            "src": "/maximum-trailing-zeros-in-a-cornered-path/",
                            "score": 2036.7410194704,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1712. 将数组分成三个子数组的方案数",
                            "sort": 4,
                            "src": "/ways-to-split-array-into-three-subarrays/",
                            "score": 2078.6986769435,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1862. 向下取整数对和",
                            "sort": 5,
                            "src": "/sum-of-floored-pairs/",
                            "score": 2170.1079846744,
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
                            "score": 2621.1208072273,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2983. 回文串重新排列查询",
                            "sort": 8,
                            "src": "/palindrome-rearrangement-queries/",
                            "score": 2779.7855167601,
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
                            "score": 1483.8137189709,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3070. 元素和小于等于 k 的子矩阵的数目",
                            "sort": 2,
                            "src": "/count-submatrices-with-top-left-element-and-sum-less-than-k/",
                            "score": 1498.6899053656,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1738. 找出第 K 大的异或坐标值",
                            "sort": 3,
                            "src": "/find-kth-largest-xor-coordinate-value/",
                            "score": 1671.4657554194,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3212. 统计 X 和 Y 频数相等的子矩阵数量",
                            "sort": 4,
                            "src": "/count-submatrices-with-equal-frequency-of-x-and-y/",
                            "score": 1672.7732068421,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1292. 元素和小于等于阈值的正方形的最大边长",
                            "sort": 5,
                            "src": "/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/",
                            "score": 1734.8208369949,
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
                            "score": 1613.0429766636,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1504. 统计全 1 子矩形",
                            "sort": 8,
                            "src": "/count-submatrices-with-all-ones/",
                            "score": 1845.0428731248,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1074. 元素和为目标值的子矩阵数量",
                            "sort": 9,
                            "src": "/number-of-submatrices-that-sum-to-target/",
                            "score": 2189.3802630548,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3148. 矩阵中的最大得分",
                            "sort": 10,
                            "src": "/maximum-difference-score-in-a-grid/",
                            "score": 1819.6800324413,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、差分",
            "sort": 3,
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
                            "score": 1229.7575626899,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1893. 检查是否区域内所有整数都被覆盖",
                            "sort": 1,
                            "src": "/check-if-all-the-integers-in-a-range-are-covered/",
                            "score": 1307.3797385769,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1854. 人口最多的年份",
                            "sort": 2,
                            "src": "/maximum-population-year/",
                            "score": 1370.4186698287,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2960. 统计已测试设备",
                            "sort": 3,
                            "src": "/count-tested-devices-after-test-operations/",
                            "score": 1169.4209117977,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1094. 拼车",
                            "sort": 4,
                            "src": "/car-pooling/",
                            "score": 1441.4290319373,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1109. 航班预订统计",
                            "sort": 5,
                            "src": "/corporate-flight-bookings/",
                            "score": 1569.7528744586,
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
                            "score": 1713.3954468582,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2381. 字母移位 II",
                            "sort": 10,
                            "src": "/shifting-letters-ii/",
                            "score": 1793.3037316825,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "995. K 连续位的最小翻转次数",
                            "sort": 11,
                            "src": "/minimum-number-of-k-consecutive-bit-flips/",
                            "score": 1835.4868365659,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1589. 所有排列中的最大和",
                            "sort": 12,
                            "src": "/maximum-sum-obtained-of-any-permutation/",
                            "score": 1871.3112059413,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1526. 形成目标数组的子数组最少增加次数",
                            "sort": 13,
                            "src": "/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
                            "score": 1872.0350138774,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1943. 描述绘画结果",
                            "sort": 14,
                            "src": "/describe-the-painting/",
                            "score": 1969.2019235672,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3224. 使差值相等的最少数组改动次数",
                            "sort": 15,
                            "src": "/minimum-array-changes-to-make-differences-equal/",
                            "score": 1996.0986736442,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2251. 花期内花的数目",
                            "sort": 16,
                            "src": "/number-of-flowers-in-full-bloom/",
                            "score": 2022.3137128296,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2772. 使数组中的所有元素都等于零",
                            "sort": 17,
                            "src": "/apply-operations-to-make-all-array-elements-equal-to-zero/",
                            "score": 2029.4024513478,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3229. 使数组等于目标数组所需的最少操作次数",
                            "sort": 18,
                            "src": "/minimum-operations-to-make-array-equal-to-target/",
                            "score": 2066.5575759467,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "798. 得分最高的最小轮调",
                            "sort": 19,
                            "src": "/smallest-rotation-with-highest-score/",
                            "score": 2129.7051442916,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2528. 最大化城市的最小供电站数目",
                            "sort": 20,
                            "src": "/maximize-the-minimum-powered-city/",
                            "score": 2235.5784618885,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1674. 使数组互补的最少操作次数",
                            "sort": 21,
                            "src": "/minimum-moves-to-make-array-complementary/",
                            "score": 2333.2401505813,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3017. 按距离统计房屋对数目 II",
                            "sort": 22,
                            "src": "/count-the-number-of-houses-at-a-certain-distance-ii/",
                            "score": 2709.4067070911,
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
                            "title": "1989. 捉迷藏中可捕获的最大人数",
                            "sort": 25,
                            "src": "/maximum-number-of-people-that-can-be-caught-in-tag/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "759. 员工空闲时间",
                            "sort": 26,
                            "src": "/employee-free-time/",
                            "score": 1710.1120861153,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2021. 街上最亮的位置",
                            "sort": 27,
                            "src": "/brightest-position-on-street/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2015. 每段建筑物的平均高度",
                            "sort": 28,
                            "src": "/average-height-of-buildings-in-each-segment/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2237. 计算街道上满足所需亮度的位置数量",
                            "sort": 29,
                            "src": "/count-positions-on-street-with-required-brightness/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3009. 折线图上的最大交点数量",
                            "sort": 30,
                            "src": "/maximum-number-of-intersections-on-the-chart/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3279. 活塞占据的最大总面积",
                            "sort": 31,
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
                            "score": 1583.3117784523,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "850. 矩形面积 II",
                            "sort": 1,
                            "src": "/rectangle-area-ii/",
                            "score": 2235.9672341699,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2132. 用邮票贴满网格图",
                            "sort": 2,
                            "src": "/stamping-the-grid/",
                            "score": 2364.3930657709,
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
            "sort": 4,
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
                            "score": 1180.3543157775,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "844. 比较含退格的字符串",
                            "sort": 1,
                            "src": "/backspace-string-compare/",
                            "score": 1227.7906887239,
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
                            "score": 1347.8521638635,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1472. 设计浏览器历史记录",
                            "sort": 4,
                            "src": "/design-browser-history/",
                            "score": 1453.7818053022,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "946. 验证栈序列",
                            "sort": 5,
                            "src": "/validate-stack-sequences/",
                            "score": 1461.9157715206,
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
                            "score": 1772.4702293335,
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
                            "score": 1285.9726675488,
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
                            "score": 1953.137726744,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "895. 最大频率栈",
                            "sort": 5,
                            "src": "/maximum-frequency-stack/",
                            "score": 2027.8772739639,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1172. 餐盘栈",
                            "sort": 6,
                            "src": "/dinner-plate-stacks/",
                            "score": 2109.9830154953,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2589. 完成所有任务的最少时间",
                            "sort": 7,
                            "src": "/minimum-time-to-complete-all-tasks/",
                            "score": 2380.5983169295,
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
                            "score": 1282.3870247003,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1047. 删除字符串中的所有相邻重复项",
                            "sort": 1,
                            "src": "/remove-all-adjacent-duplicates-in-string/",
                            "score": 1286.3167937403,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1544. 整理字符串",
                            "sort": 2,
                            "src": "/make-the-string-great/",
                            "score": 1344.226133202,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1003. 检查替换后的词是否有效",
                            "sort": 3,
                            "src": "/check-if-word-is-valid-after-substitutions/",
                            "score": 1426.7144554733,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2216. 美化数组的最少删除数",
                            "sort": 4,
                            "src": "/minimum-deletions-to-make-array-beautiful/",
                            "score": 1509.5562928491,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1209. 删除字符串中的所有相邻重复项 II",
                            "sort": 5,
                            "src": "/remove-all-adjacent-duplicates-in-string-ii/",
                            "score": 1541.5405749918,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2211. 统计道路上的碰撞次数",
                            "sort": 6,
                            "src": "/count-collisions-on-a-road/",
                            "score": 1581.4963716166,
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
                            "score": 1867.9916069568,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2197. 替换数组中的非互质数",
                            "sort": 9,
                            "src": "/replace-non-coprime-numbers-in-array/",
                            "score": 2057.4788263111,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2751. 机器人碰撞",
                            "sort": 10,
                            "src": "/robot-collisions/",
                            "score": 2091.6474629767,
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
                            "score": 1242.4710735813,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1021. 删除最外层的括号",
                            "sort": 2,
                            "src": "/remove-outermost-parentheses/",
                            "score": 1311.3495317884,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1614. 括号的最大嵌套深度",
                            "sort": 3,
                            "src": "/maximum-nesting-depth-of-the-parentheses/",
                            "score": 1322.8302750313,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1190. 反转每对括号间的子串",
                            "sort": 4,
                            "src": "/reverse-substrings-between-each-pair-of-parentheses/",
                            "score": 1485.6550472186,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "856. 括号的分数",
                            "sort": 5,
                            "src": "/score-of-parentheses/",
                            "score": 1562.7212466716,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1249. 移除无效的括号",
                            "sort": 6,
                            "src": "/minimum-remove-to-make-valid-parentheses/",
                            "score": 1657.1231739081,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1963. 使字符串平衡的最小交换次数",
                            "sort": 7,
                            "src": "/minimum-number-of-swaps-to-make-the-string-balanced/",
                            "score": 1688.9209684568,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "678. 有效的括号字符串",
                            "sort": 8,
                            "src": "/valid-parenthesis-string/",
                            "score": null,
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
                            "score": 1749.4981778209,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1541. 平衡括号字符串的最少插入次数",
                            "sort": 11,
                            "src": "/minimum-insertions-to-balance-a-parentheses-string/",
                            "score": 1759.0197295594,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2116. 判断一个括号字符串是否有效",
                            "sort": 12,
                            "src": "/check-if-a-parentheses-string-can-be-valid/",
                            "score": 2037.6527962599,
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
                            "score": 1407.9870845299,
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
                            "score": 1880.4226853663,
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
                            "score": 2348.5159376523,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1896. 反转表达式值的最少操作次数",
                            "sort": 9,
                            "src": "/minimum-cost-to-change-the-final-value-of-expression/",
                            "score": 2531.6452775023,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "770. 基本计算器 IV",
                            "sort": 10,
                            "src": "/basic-calculator-iv/",
                            "score": 2863.1378294349,
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
                            "score": 1480.1116248664,
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
                            "score": 1911.8282317986,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.7 单调栈",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "见 <a href=\"/lc-rating/list/monotonic_stack\">单调栈题单</a>。<br>",
                    "child": []
                }
            ]
        },
        {
            "title": "四、队列",
            "sort": 5,
            "summary": "队列常用在 BFS 中，见 <a href=\"/lc-rating/list/grid\">网格图题单</a> 和 <a href=\"/lc-rating/list/graph\">图论题单</a>。与此相比，栈常用在 DFS 中，但无需我们手动维护。<br>",
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
                            "score": 1337.8472367494,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "950. 按递增顺序显示卡牌",
                            "sort": 1,
                            "src": "/reveal-cards-in-increasing-order/",
                            "score": 1686.4493679523,
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
                            "score": 1610.1866391145,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.3 双端队列",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2810. 故障键盘",
                            "sort": 0,
                            "src": "/faulty-keyboard/",
                            "score": 1192.9770230345,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.4 单调队列",
                    "sort": 3,
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
                            "score": 1672.1678031263,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2398. 预算内的最多机器人数目",
                            "sort": 3,
                            "src": "/maximum-number-of-robots-within-budget/",
                            "score": 1917.2145829853,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "862. 和至少为 K 的最短子数组",
                            "sort": 4,
                            "src": "/shortest-subarray-with-sum-at-least-k/",
                            "score": 2306.8472649456,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1499. 满足不等式的最大值",
                            "sort": 5,
                            "src": "/max-value-of-equation/",
                            "score": 2456.3900212097,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2071. 你可以安排的最多任务数目",
                            "sort": 6,
                            "src": "/maximum-number-of-tasks-you-can-assign/",
                            "score": 2648.1748409542,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.5 单调队列优化 DP",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "一般用来维护一段转移来源的最值。<br>1. 前提：区间右端点变大时，左端点也在变大（同滑动窗口）。<br>2. 转移前，去掉队首无用数据。<br>3. 计算转移（直接从队首转移）。<br>4. 把数据（一般是 $f[i]$）插入队尾前，去掉队尾无用数据。<br>",
                    "child": [
                        {
                            "title": "2944. 购买水果需要的最少金币数",
                            "sort": 0,
                            "src": "/minimum-number-of-coins-for-fruits/",
                            "score": 1708.9663754668,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1696. 跳跃游戏 VI",
                            "sort": 1,
                            "src": "/jump-game-vi/",
                            "score": 1954.2533254344,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1425. 带限制的子序列和",
                            "sort": 2,
                            "src": "/constrained-subsequence-sum/",
                            "score": 2032.4773038683,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "375. 猜数字大小 II",
                            "sort": 3,
                            "src": "/guess-number-higher-or-lower-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1687. 从仓库到码头运输箱子",
                            "sort": 4,
                            "src": "/delivering-boxes-from-storage-to-ports/",
                            "score": 2610.0826855063,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3117. 划分数组得到最小的值之和",
                            "sort": 5,
                            "src": "/minimum-sum-of-values-by-dividing-array/",
                            "score": 2735.0909781144,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2945. 找到最大非递减数组的长度",
                            "sort": 6,
                            "src": "/find-maximum-non-decreasing-array-length/",
                            "score": 2943.2173551759,
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
            "sort": 6,
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
                            "score": 1172.6819789183,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3264. K 次乘运算后的最终数组 I",
                            "sort": 1,
                            "src": "/final-array-state-after-k-multiplication-operations-i/",
                            "score": 1177.5447304844,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2558. 从数量最多的堆取走礼物",
                            "sort": 2,
                            "src": "/take-gifts-from-the-richest-pile/",
                            "score": 1276.7817742915,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2336. 无限集中的最小数字",
                            "sort": 3,
                            "src": "/smallest-number-in-infinite-set/",
                            "score": 1375.0376362104,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2530. 执行 K 次操作后的最大分数",
                            "sort": 4,
                            "src": "/maximal-score-after-applying-k-operations/",
                            "score": 1386.1200017827,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3066. 超过阈值的最少操作数 II",
                            "sort": 5,
                            "src": "/minimum-operations-to-exceed-threshold-value-ii/",
                            "score": 1399.5303229631,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1962. 移除石子使总数最小",
                            "sort": 6,
                            "src": "/remove-stones-to-minimize-the-total/",
                            "score": 1418.6847740057,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3275. 第 K 近障碍物查询",
                            "sort": 7,
                            "src": "/k-th-nearest-obstacle-queries/",
                            "score": 1419.6326908404,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1845. 座位预约管理系统",
                            "sort": 8,
                            "src": "/seat-reservation-manager/",
                            "score": 1428.6729861424,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2208. 将数组和减半的最少操作次数",
                            "sort": 9,
                            "src": "/minimum-operations-to-halve-array-sum/",
                            "score": 1550.0978082682,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2233. K 次增加后的最大乘积",
                            "sort": 10,
                            "src": "/maximum-product-after-k-increments/",
                            "score": 1685.5389350949,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3296. 移山所需的最少秒数",
                            "sort": 11,
                            "src": "/minimum-number-of-seconds-to-make-mountain-height-zero/",
                            "score": 1694.7320914942,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1942. 最小未被占据椅子的编号",
                            "sort": 12,
                            "src": "/the-number-of-the-smallest-unoccupied-chair/",
                            "score": 1695.2832486322,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1801. 积压订单中的订单总数",
                            "sort": 13,
                            "src": "/number-of-orders-in-the-backlog/",
                            "score": 1711.1205064321,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2406. 将区间分为最少组数",
                            "sort": 14,
                            "src": "/divide-intervals-into-minimum-number-of-groups/",
                            "score": 1713.3954468582,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2462. 雇佣 K 位工人的总代价",
                            "sort": 15,
                            "src": "/total-cost-to-hire-k-workers/",
                            "score": 1763.6404758359,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1834. 单线程 CPU",
                            "sort": 16,
                            "src": "/single-threaded-cpu/",
                            "score": 1797.7466000366,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1792. 最大平均通过率",
                            "sort": 17,
                            "src": "/maximum-average-pass-ratio/",
                            "score": 1817.9978644712,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2931. 购买物品的最大开销",
                            "sort": 18,
                            "src": "/maximum-spending-after-buying-items/",
                            "score": 1822.3170524016,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1882. 使用服务器处理任务",
                            "sort": 19,
                            "src": "/process-tasks-using-servers/",
                            "score": 1979.1112273597,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2402. 会议室 III",
                            "sort": 20,
                            "src": "/meeting-rooms-iii/",
                            "score": 2092.8943149547,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "253. 会议室 II",
                            "sort": 21,
                            "src": "/meeting-rooms-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1167. 连接木棍的最低费用",
                            "sort": 22,
                            "src": "/minimum-cost-to-connect-sticks/",
                            "score": 1481.5701319876,
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
                            "score": 1929.9086934334,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "778. 水位上升的泳池中游泳",
                            "sort": 4,
                            "src": "/swim-in-rising-water/",
                            "score": 2096.6201393558,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1631. 最小体力消耗路径",
                            "sort": 5,
                            "src": "/path-with-minimum-effort/",
                            "score": 1947.5013967785,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1354. 多次求和构造目标数组",
                            "sort": 6,
                            "src": "/construct-target-array-with-multiple-sums/",
                            "score": 2014.7655493665,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1353. 最多可以参加的会议数目",
                            "sort": 7,
                            "src": "/maximum-number-of-events-that-can-be-attended/",
                            "score": 2015.7291888336,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1235. 规划兼职工作",
                            "sort": 8,
                            "src": "/maximum-profit-in-job-scheduling/",
                            "score": 2022.8520613737,
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
                            "score": 2056.2598215101,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1383. 最大的团队表现值",
                            "sort": 11,
                            "src": "/maximum-performance-of-a-team/",
                            "score": 2091.3820373571,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2503. 矩阵查询可获得的最大分数",
                            "sort": 12,
                            "src": "/maximum-number-of-points-from-grid-queries/",
                            "score": 2195.6540241654,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2163. 删除元素后和的最小差值",
                            "sort": 13,
                            "src": "/minimum-difference-in-sums-after-removal-of-elements/",
                            "score": 2225.3877535768,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "857. 雇佣 K 名工人的最低成本",
                            "sort": 14,
                            "src": "/minimum-cost-to-hire-k-workers/",
                            "score": 2259.6572191969,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1606. 找到处理最多请求的服务器",
                            "sort": 15,
                            "src": "/find-servers-that-handled-most-number-of-requests/",
                            "score": 2275.7337818748,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1851. 包含每个查询的最小区间",
                            "sort": 16,
                            "src": "/minimum-interval-to-include-each-query/",
                            "score": 2286.1378742318,
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
                            "score": 2327.4743300299,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2589. 完成所有任务的最少时间",
                            "sort": 20,
                            "src": "/minimum-time-to-complete-all-tasks/",
                            "score": 2380.5983169295,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3266. K 次乘运算后的最终数组 II",
                            "sort": 21,
                            "src": "/final-array-state-after-k-multiplication-operations-ii/",
                            "score": 2508.6766880695,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1675. 数组的最小偏移量",
                            "sort": 22,
                            "src": "/minimize-deviation-in-array/",
                            "score": 2533.3027905062,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2617. 网格图中最少访问的格子数",
                            "sort": 23,
                            "src": "/minimum-number-of-visited-cells-in-a-grid/",
                            "score": 2581.9961985753,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2532. 过桥的时间",
                            "sort": 24,
                            "src": "/time-to-cross-a-bridge/",
                            "score": 2588.8752130913,
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
                            "score": 2250.2578740769,
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
                            "score": 1474.0150725665,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "767. 重构字符串",
                            "sort": 1,
                            "src": "/reorganize-string/",
                            "score": 1681.3263732456,
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
                            "title": "1953. 你可以工作的最大周数",
                            "sort": 3,
                            "src": "/maximum-number-of-weeks-for-which-you-can-work/",
                            "score": 1803.7518552874,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1405. 最长快乐字符串",
                            "sort": 4,
                            "src": "/longest-happy-string/",
                            "score": 1820.58557644,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3081. 替换字符串中的问号使分数最小",
                            "sort": 5,
                            "src": "/replace-question-marks-in-string-to-minimize-its-value/",
                            "score": 1904.6714229335,
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
                            "score": 2133.9592509012,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "786. 第 K 个最小的质数分数",
                            "sort": 4,
                            "src": "/k-th-smallest-prime-fraction/",
                            "score": 2168.7531235448,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2386. 找出数组的第 K 大和",
                            "sort": 5,
                            "src": "/find-the-k-sum-of-an-array/",
                            "score": 2647.8258771458,
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
                            "score": 1540.2351411176,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2353. 设计食物评分系统",
                            "sort": 1,
                            "src": "/design-a-food-rating-system/",
                            "score": 1781.8156963676,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3092. 最高频率的 ID",
                            "sort": 2,
                            "src": "/most-frequent-ids/",
                            "score": 1793.1160019698,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2034. 股票价格波动",
                            "sort": 3,
                            "src": "/stock-price-fluctuation/",
                            "score": 1831.9395911303,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1172. 餐盘栈",
                            "sort": 4,
                            "src": "/dinner-plate-stacks/",
                            "score": 2109.9830154953,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§5.7 对顶堆（滑动窗口第 K 小/大）",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "也可以用有序集合。<br>另见 <a href=\"/lc-rating/list/graph\">图论题单</a> 中的 Dijkstra 算法。<br>",
                    "child": [
                        {
                            "title": "2102. 序列顺序查询",
                            "sort": 0,
                            "src": "/sequentially-ordinal-rank-tracker/",
                            "score": 2158.7683843245,
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
                            "title": "1825. 求出 MK 平均值",
                            "sort": 4,
                            "src": "/finding-mk-average/",
                            "score": 2395.8765531206,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3013. 将数组分成最小总代价的子数组 II",
                            "sort": 5,
                            "src": "/divide-an-array-into-subarrays-with-minimum-cost-ii/",
                            "score": 2540.438150736,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3321. 计算子数组的 x-sum II",
                            "sort": 6,
                            "src": "/find-x-sum-of-all-k-long-subarrays-ii/",
                            "score": 2598.4563109814,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 24. 数字游戏",
                            "sort": 7,
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
            "sort": 7,
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
                            "score": 1573.4042963622,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1233. 删除子文件夹",
                            "sort": 7,
                            "src": "/remove-sub-folders-from-the-filesystem/",
                            "score": 1544.8261365027,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "820. 单词的压缩编码",
                            "sort": 8,
                            "src": "/short-encoding-of-words/",
                            "score": 1632.0191837349,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2416. 字符串的前缀分数和",
                            "sort": 9,
                            "src": "/sum-of-prefix-scores-of-strings/",
                            "score": 1725.1995150882,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2261. 含最多 K 个可整除元素的子数组",
                            "sort": 10,
                            "src": "/k-divisible-elements-subarrays/",
                            "score": 1724.394164934,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1804. 实现 Trie （前缀树） II",
                            "sort": 11,
                            "src": "/implement-trie-ii-prefix-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2168. 每个数字的频率都相同的独特子字符串的数量",
                            "sort": 12,
                            "src": "/unique-substrings-with-equal-digit-frequency/",
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
                            "score": 2118.3732356694,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3045. 统计前后缀下标对 II",
                            "sort": 5,
                            "src": "/count-prefix-and-suffix-pairs-ii/",
                            "score": 2327.5726642605,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1948. 删除系统中的重复文件夹",
                            "sort": 6,
                            "src": "/delete-duplicate-folders-in-system/",
                            "score": 2533.7796160302,
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
                            "score": 1547.0385279086,
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
                            "score": 1389.331169471,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1166. 设计文件系统",
                            "sort": 14,
                            "src": "/design-file-system/",
                            "score": 1479.0110934646,
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
                            "title": "面试题 17.13. 恢复空格",
                            "sort": 2,
                            "src": "/re-space-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "472. 连接词",
                            "sort": 3,
                            "src": "/concatenated-words/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2977. 转换字符串的最小成本 II",
                            "sort": 4,
                            "src": "/minimum-cost-to-convert-string-ii/",
                            "score": 2695.809667046,
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
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2935. 找出强数对的最大异或值 II",
                            "sort": 1,
                            "src": "/maximum-strong-pair-xor-ii/",
                            "score": 2348.7273357105,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1707. 与数组中元素的最大异或值",
                            "sort": 2,
                            "src": "/maximum-xor-with-an-element-from-array/",
                            "score": 2358.9669560824,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1803. 统计异或值在范围内的数对有多少",
                            "sort": 3,
                            "src": "/count-pairs-with-xor-in-a-range/",
                            "score": 2479.3282985529,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1938. 查询最大基因差",
                            "sort": 4,
                            "src": "/maximum-genetic-difference-query/",
                            "score": 2502.5176603922,
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
            "sort": 8,
            "summary": "",
            "child": [
                {
                    "title": "§7.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "见 <a href=\"/lc-rating/list/grid\">网格图题单</a> 中的 DFS 和 <a href=\"/lc-rating/list/graph\">图论题单</a> 中的 DFS，其中大部分题目也可以用并查集实现。<br>",
                    "child": [
                        {
                            "title": "990. 等式方程的可满足性",
                            "sort": 0,
                            "src": "/satisfiability-of-equality-equations/",
                            "score": 1638.0148920643,
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
                            "score": 1558.4971807039,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1258. 近义词句子",
                            "sort": 4,
                            "src": "/synonymous-sentences/",
                            "score": 1847.2077654978,
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
                            "score": 1855.4479039876,
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
                            "score": 1892.1600619469,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "765. 情侣牵手",
                            "sort": 3,
                            "src": "/couples-holding-hands/",
                            "score": 1999.1208076854,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "684. 冗余连接",
                            "sort": 4,
                            "src": "/redundant-connection/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "685. 冗余连接 II",
                            "sort": 5,
                            "src": "/redundant-connection-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "947. 移除最多的同行或同列石头",
                            "sort": 6,
                            "src": "/most-stones-removed-with-same-row-or-column/",
                            "score": 2034.6759416871,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "839. 相似字符串组",
                            "sort": 7,
                            "src": "/similar-string-groups/",
                            "score": 2053.7468090497,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1970. 你能穿过矩阵的最后一天",
                            "sort": 8,
                            "src": "/last-day-where-you-can-still-cross/",
                            "score": 2123.5708982185,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2076. 处理含限制条件的好友请求",
                            "sort": 9,
                            "src": "/process-restricted-friend-requests/",
                            "score": 2130.9348604091,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1579. 保证图可完全遍历",
                            "sort": 10,
                            "src": "/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
                            "score": 2131.7917160422,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "959. 由斜杠划分区域",
                            "sort": 11,
                            "src": "/regions-cut-by-slashes/",
                            "score": 2135.5738659086,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2812. 找出最安全路径",
                            "sort": 12,
                            "src": "/find-the-safest-path-in-a-grid/",
                            "score": 2153.5854429139,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2503. 矩阵查询可获得的最大分数",
                            "sort": 13,
                            "src": "/maximum-number-of-points-from-grid-queries/",
                            "score": 2195.6540241654,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2867. 统计树中的合法路径数目",
                            "sort": 14,
                            "src": "/count-valid-paths-in-a-tree/",
                            "score": 2428.3242593838,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2421. 好路径的数目",
                            "sort": 15,
                            "src": "/number-of-good-paths/",
                            "score": 2444.6660756903,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2157. 字符串分组",
                            "sort": 16,
                            "src": "/groups-of-strings/",
                            "score": 2499.3282271507,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1632. 矩阵转换后的秩",
                            "sort": 17,
                            "src": "/rank-transform-of-a-matrix/",
                            "score": 2529.5251086936,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "803. 打砖块",
                            "sort": 18,
                            "src": "/bricks-falling-when-hit/",
                            "score": 2765.2533837781,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
                            "sort": 19,
                            "src": "/number-of-ways-to-reorder-array-to-get-same-bst/",
                            "score": 2288.2117442123,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3235. 判断矩形的两个角落是否可达",
                            "sort": 20,
                            "src": "/check-if-the-rectangle-corner-is-reachable/",
                            "score": 3773.7596150919,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 71. 集水器",
                            "sort": 21,
                            "src": "/kskhHQ/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2371. 最小化网格中的最大值",
                            "sort": 22,
                            "src": "/minimize-maximum-value-in-a-grid/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2459. 通过移动项目到空白区域来排序数组",
                            "sort": 23,
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
                            "score": 2171.9645269732,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1627. 带阈值的图连通性",
                            "sort": 1,
                            "src": "/graph-connectivity-with-threshold/",
                            "score": 2221.3538766773,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "952. 按公因数计算最大组件大小",
                            "sort": 2,
                            "src": "/largest-component-size-by-common-factor/",
                            "score": 2272.1122260637,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1998. 数组的最大公因数排序",
                            "sort": 3,
                            "src": "/gcd-sort-of-an-array/",
                            "score": 2429.0940568399,
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
                            "score": 1928.2304187946,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1488. 避免洪水泛滥",
                            "sort": 1,
                            "src": "/avoid-flood-in-the-city/",
                            "score": 1973.7407637067,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2382. 删除操作后的最大子段和",
                            "sort": 2,
                            "src": "/maximum-segment-sum-after-removals/",
                            "score": 2136.3013259524,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2334. 元素值大于变化阈值的子数组",
                            "sort": 3,
                            "src": "/subarray-with-elements-greater-than-varying-threshold/",
                            "score": 2381.2160234811,
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
                            "score": 2286.1378742318,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3244. 新增道路查询后的最短距离 II",
                            "sort": 1,
                            "src": "/shortest-distance-after-road-addition-queries-ii/",
                            "score": 2270.2002503611,
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
            "sort": 9,
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
                            "score": 2052.8622720512,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3187. 数组中的峰值",
                            "sort": 2,
                            "src": "/peaks-in-array/",
                            "score": 2154.4458036869,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1649. 通过指令创建有序数组",
                            "sort": 3,
                            "src": "/create-sorted-array-through-instructions/",
                            "score": 2207.8565809952,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1626. 无矛盾的最佳球队",
                            "sort": 4,
                            "src": "/best-team-with-no-conflicts/",
                            "score": 2027.3839266711,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1409. 查询带键的排列",
                            "sort": 5,
                            "src": "/queries-on-a-permutation-with-key/",
                            "score": 1334.5718985411,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2250. 统计包含每个点的矩形数目",
                            "sort": 6,
                            "src": "/count-number-of-rectangles-containing-each-point/",
                            "score": 1997.7013718153,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2179. 统计数组中好三元组数目",
                            "sort": 7,
                            "src": "/count-good-triplets-in-an-array/",
                            "score": 2272.4412003208,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1395. 统计作战单位数",
                            "sort": 8,
                            "src": "/count-number-of-teams/",
                            "score": 1343.628913055,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2659. 将数组清空",
                            "sort": 9,
                            "src": "/make-array-empty/",
                            "score": 2281.8816902545,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2653. 滑动子数组的美丽值",
                            "sort": 10,
                            "src": "/sliding-subarray-beauty/",
                            "score": 1785.6006955353,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1505. 最多 K 次交换相邻数位后得到的最小整数",
                            "sort": 11,
                            "src": "/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/",
                            "score": 2336.5210003185,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2926. 平衡子序列的最大和",
                            "sort": 12,
                            "src": "/maximum-balanced-subsequence-sum/",
                            "score": 2448.4455464535,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2736. 最大和查询",
                            "sort": 13,
                            "src": "/maximum-sum-queries/",
                            "score": 2533.2830157959,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3245. 交替组 III",
                            "sort": 14,
                            "src": "/alternating-groups-iii/",
                            "score": 3112.0402038423,
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
                            "score": 2030.1021023033,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1850. 邻位交换的最小次数",
                            "sort": 5,
                            "src": "/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/",
                            "score": 2073.0124645606,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2193. 得到回文串的最少操作次数",
                            "sort": 6,
                            "src": "/minimum-number-of-moves-to-make-palindrome/",
                            "score": 2090.6800569319,
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
                            "score": 2205.4304373587,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2407. 最长递增子序列 II",
                            "sort": 1,
                            "src": "/longest-increasing-subsequence-ii/",
                            "score": 2280.3143643878,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2940. 找到 Alice 和 Bob 可以相遇的建筑",
                            "sort": 2,
                            "src": "/find-building-where-alice-and-bob-can-meet/",
                            "score": 2327.4743300299,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2286. 以组为单位订音乐会的门票",
                            "sort": 3,
                            "src": "/booking-concert-tickets-in-groups/",
                            "score": 2470.2118194809,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3161. 物块放置查询",
                            "sort": 4,
                            "src": "/block-placement-queries/",
                            "score": 2513.0284514744,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2213. 由单个字符重复的最长子字符串",
                            "sort": 5,
                            "src": "/longest-substring-of-one-repeating-character/",
                            "score": 2628.7957821141,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3165. 不包含相邻元素的子序列的最大和",
                            "sort": 6,
                            "src": "/maximum-sum-of-subsequence-with-non-adjacent-elements/",
                            "score": 2697.6486586982,
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
                            "score": 2380.5983169295,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2569. 更新数组后处理求和查询",
                            "sort": 1,
                            "src": "/handling-sum-queries-after-update/",
                            "score": 2397.8728428256,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1622. 奇妙序列",
                            "sort": 2,
                            "src": "/fancy-sequence/",
                            "score": 2476.451764287,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2916. 子数组不同元素数目的平方和 II",
                            "sort": 3,
                            "src": "/subarrays-distinct-element-sum-of-squares-ii/",
                            "score": 2816.0706257586,
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
                            "score": 2235.9672341699,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2276. 统计区间中的整数数目",
                            "sort": 6,
                            "src": "/count-integers-in-intervals/",
                            "score": 2222.4805422748,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2770. 达到末尾下标所需的最大跳跃次数",
                            "sort": 7,
                            "src": "/maximum-number-of-jumps-to-reach-the-last-index/",
                            "score": 1533.47383662,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "专题：离线算法",
            "sort": 10,
            "summary": "对询问**排序**，通过改变回答询问的顺序，使问题更容易处理。<br>> 相应的，**在线算法**就是按照 $\\textit{queries}$ 的顺序一个一个处理。<br>",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2343. 裁剪数字后查询第 K 小的数字",
                            "sort": 0,
                            "src": "/query-kth-smallest-trimmed-number/",
                            "score": 1651.569267834,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2070. 每一个查询的最大美丽值",
                            "sort": 1,
                            "src": "/most-beautiful-item-for-each-query/",
                            "score": 1724.1545485476,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1847. 最近的房间",
                            "sort": 2,
                            "src": "/closest-room/",
                            "score": 2081.7518764643,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2503. 矩阵查询可获得的最大分数",
                            "sort": 3,
                            "src": "/maximum-number-of-points-from-grid-queries/",
                            "score": 2195.6540241654,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1851. 包含每个查询的最小区间",
                            "sort": 4,
                            "src": "/minimum-interval-to-include-each-query/",
                            "score": 2286.1378742318,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1697. 检查边长度限制的路径是否存在",
                            "sort": 5,
                            "src": "/checking-existence-of-edge-length-limited-paths/",
                            "score": 2300.1557840589,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2940. 找到 Alice 和 Bob 可以相遇的建筑",
                            "sort": 6,
                            "src": "/find-building-where-alice-and-bob-can-meet/",
                            "score": 2327.4743300299,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2747. 统计没有收到请求的服务器数目",
                            "sort": 7,
                            "src": "/count-zero-request-servers/",
                            "score": 2405.3375364501,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1938. 查询最大基因差",
                            "sort": 8,
                            "src": "/maximum-genetic-difference-query/",
                            "score": 2502.5176603922,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2736. 最大和查询",
                            "sort": 9,
                            "src": "/maximum-sum-queries/",
                            "score": 2533.2830157959,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        }
    ]
} as ProblemCategory;