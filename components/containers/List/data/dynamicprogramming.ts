import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】动态规划（入门/背包/状态机/划分/区间/状压/数位/树形/数据结构优化）",
    "original_src": "https://leetcode.cn/circle/discuss/tXLS3i",
    "last_update": "2024-08-16T11:49:29.574479+00:00",
    "sort": 0,
    "child": [
        {
            "title": "前言",
            "sort": 0,
            "summary": "掌握动态规划（DP）是没有捷径的，咱们唯一能做的，就是投入时间猛猛刷题。好比学数学，只看书看视频而不做习题，是不能说学会的。<br>我能做的，是帮你节省找题的时间，并把这些题分类整理好。有着相同套路的题，一起做效率会更高，也更能领悟到 DP 的精髓。所以推荐按照专题刷。<br>题目已按照难度分排序（右侧数字为难度分）。如果遇到难度很大，题解都看不懂的题目，建议直接跳过，二刷的时候再来尝试。<br>",
            "child": []
        },
        {
            "title": "一、入门 DP",
            "sort": 1,
            "summary": "!<a href=\"https://pic.leetcode.cn/1710769845-JRnIfA-dp-2.jpg\">动态规划算法题DP题单动态规划题单入门动态规划题目动态规划新手教程力扣DP力扣动态规划leetcode动态规划leetcode dp 灵茶山艾府 灵神 灵神题单</a><br>**记忆化搜索**是新手村神器（甚至可以用到游戏后期），推荐先看 <a href=\"https://www.bilibili.com/video/BV1Xj411K7oF/\">动态规划入门：从记忆化搜索到递推</a>。<br>但记忆化搜索并不是万能的，某些题目只有写成递推，才能结合数据结构等来优化时间复杂度，多数题目还可以优化空间复杂度。所以尽量在写完记忆化搜索后，把递推的代码也写一下。熟练之后直接写递推也可以。<br>",
            "child": [
                {
                    "title": "§1.1 爬楼梯",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "70. 爬楼梯",
                            "sort": 0,
                            "src": "/climbing-stairs/",
                            "score": 7,
                            "solution": "/climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-7zm1/",
                            "isPremium": false
                        },
                        {
                            "title": "746. 使用最小花费爬楼梯",
                            "sort": 1,
                            "src": "/min-cost-climbing-stairs/",
                            "score": 99,
                            "solution": "/min-cost-climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-j99e/",
                            "isPremium": false
                        },
                        {
                            "title": "377. 组合总和 Ⅳ",
                            "sort": 2,
                            "src": "/combination-sum-iv/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2466. 统计构造好字符串的方案数",
                            "sort": 3,
                            "src": "/count-ways-to-build-good-strings/",
                            "score": 1694,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2266. 统计打字方案数",
                            "sort": 4,
                            "src": "/count-number-of-texts/",
                            "score": 1857,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2533. 好二进制字符串的数量",
                            "sort": 5,
                            "src": "/number-of-good-binary-strings/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.2 打家劫舍",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "198. 打家劫舍",
                            "sort": 0,
                            "src": "/house-robber/",
                            "score": 1500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "740. 删除并获得点数",
                            "sort": 1,
                            "src": "/delete-and-earn/",
                            "score": 1600,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2320. 统计放置房子的方式数",
                            "sort": 2,
                            "src": "/count-number-of-ways-to-place-houses/",
                            "score": 1608,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "213. 打家劫舍 II",
                            "sort": 3,
                            "src": "/house-robber-ii/",
                            "score": 1650,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3186. 施咒的最大总伤害",
                            "sort": 4,
                            "src": "/maximum-total-damage-with-spell-casting/",
                            "score": 1841,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.3 最大子数组和（最大子段和）",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "有两种做法：<br>1. 定义状态 $f<a href=\"https://leetcode.cn/problems/maximum-subarray/solution/qian-zhui-he-zuo-fa-ben-zhi-shi-mai-mai-abu71/\">i]$ 表示以 $a[i]$ 结尾的最大子数组和，不和 $i$ 左边拼起来就是 $f[i]=a[i]$，和 $i$ 左边拼起来就是 $f[i]=f[i-1]+a[i]$，取最大值就得到了状态转移方程 $f[i]=\\max(f[i−1],0)+a[i]$，答案为 $\\max(f)$。这个做法也叫做 Kadane 算法。<br>2. 用前缀和解决，具体见 [我的题解</a>。<br>**思维扩展**：<br>",
                    "child": [
                        {
                            "title": "53. 最大子数组和",
                            "sort": 0,
                            "src": "/maximum-subarray/",
                            "score": 1400,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2606. 找到最大开销的子字符串",
                            "sort": 1,
                            "src": "/find-the-substring-with-maximum-cost/",
                            "score": 1422,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1749. 任意子数组和的绝对值的最大值",
                            "sort": 2,
                            "src": "/maximum-absolute-sum-of-any-subarray/",
                            "score": 1542,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1191. K 次串联后最大子数组之和",
                            "sort": 3,
                            "src": "/k-concatenation-maximum-sum/",
                            "score": 1748,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "918. 环形子数组的最大和",
                            "sort": 4,
                            "src": "/maximum-sum-circular-subarray/",
                            "score": 1777,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2321. 拼接数组的最大分数",
                            "sort": 5,
                            "src": "/maximum-score-of-spliced-array/",
                            "score": 1791,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "152. 乘积最大子数组",
                            "sort": 6,
                            "src": "/maximum-product-subarray/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、网格图 DP",
            "sort": 2,
            "summary": "对于一些二维 DP（例如背包、最长公共子序列），如果把 DP 矩阵画出来，其实状态转移可以视作**在网格图上的移动**。所以在学习相对更抽象的二维 DP 之前，做一些形象的网格图 DP 会让后续的学习更轻松（比如 0-1 背包的空间优化写法为什么要倒序遍历）。<br><a href=\"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/solution/jiao-ni-yi-bu-bu-si-kao-dpcong-hui-su-da-epvl/\">讲解</a><br>",
            "child": [
                {
                    "title": "§2.1 基础",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "LCR 166. 珠宝的最高价值",
                            "sort": 0,
                            "src": "/li-wu-de-zui-da-jie-zhi-lcof/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "62. 不同路径",
                            "sort": 1,
                            "src": "/unique-paths/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "63. 不同路径 II",
                            "sort": 2,
                            "src": "/unique-paths-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "64. 最小路径和",
                            "sort": 3,
                            "src": "/minimum-path-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "120. 三角形最小路径和",
                            "sort": 4,
                            "src": "/triangle/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "931. 下降路径最小和",
                            "sort": 5,
                            "src": "/minimum-falling-path-sum/",
                            "score": 1573,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2684. 矩阵中移动的最大次数",
                            "sort": 6,
                            "src": "/maximum-number-of-moves-in-a-grid/",
                            "score": 1626,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2304. 网格中的最小路径代价",
                            "sort": 7,
                            "src": "/minimum-path-cost-in-a-grid/",
                            "score": 1658,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1289. 下降路径最小和 II",
                            "sort": 8,
                            "src": "/minimum-falling-path-sum-ii/",
                            "score": 1697,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.2 进阶",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1594. 矩阵的最大非负积",
                            "sort": 0,
                            "src": "/maximum-non-negative-product-in-a-matrix/",
                            "score": 1807,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1301. 最大得分的路径数目",
                            "sort": 1,
                            "src": "/number-of-paths-with-max-score/",
                            "score": 1853,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2435. 矩阵中和能被 K 整除的路径",
                            "sort": 2,
                            "src": "/paths-in-matrix-whose-sum-is-divisible-by-k/",
                            "score": 1952,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "174. 地下城游戏",
                            "sort": 3,
                            "src": "/dungeon-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "329. 矩阵中的最长递增路径",
                            "sort": 4,
                            "src": "/longest-increasing-path-in-a-matrix/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2328. 网格图中递增路径的数目",
                            "sort": 5,
                            "src": "/number-of-increasing-paths-in-a-grid/",
                            "score": 2001,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2267. 检查是否有合法括号字符串路径",
                            "sort": 6,
                            "src": "/check-if-there-is-a-valid-parentheses-string-path/",
                            "score": 2085,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1937. 扣分后的最大得分",
                            "sort": 7,
                            "src": "/maximum-number-of-points-with-cost/",
                            "score": 2106,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1463. 摘樱桃 II",
                            "sort": 8,
                            "src": "/cherry-pickup-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "741. 摘樱桃",
                            "sort": 9,
                            "src": "/cherry-pickup/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2510. 检查是否有路径经过相同数量的 0 和 1",
                            "sort": 10,
                            "src": "/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "三、背包",
            "sort": 3,
            "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV16Y411v7Y6/\">0-1 背包 完全背包</a><br>",
            "child": [
                {
                    "title": "§3.1 0-1 背包",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "每个物品只能选一次。<br>",
                    "child": [
                        {
                            "title": "2915. 和为目标值的最长子序列的长度",
                            "sort": 0,
                            "src": "/length-of-the-longest-subsequence-that-sums-to-target/",
                            "score": 1659,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "416. 分割等和子集",
                            "sort": 1,
                            "src": "/partition-equal-subset-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "494. 目标和",
                            "sort": 2,
                            "src": "/target-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2787. 将一个数字表示成幂的和的方案数",
                            "sort": 3,
                            "src": "/ways-to-express-an-integer-as-sum-of-powers/",
                            "score": 1818,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3180. 执行操作可获得的最大总奖励 I",
                            "sort": 4,
                            "src": "/maximum-total-reward-using-operations-i/",
                            "score": 1849,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "474. 一和零",
                            "sort": 5,
                            "src": "/ones-and-zeroes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1049. 最后一块石头的重量 II",
                            "sort": 6,
                            "src": "/last-stone-weight-ii/",
                            "score": 2092,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1774. 最接近目标价格的甜点成本",
                            "sort": 7,
                            "src": "/closest-dessert-cost/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "879. 盈利计划",
                            "sort": 8,
                            "src": "/profitable-schemes/",
                            "score": 2204,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3082. 求出所有子序列的能量和",
                            "sort": 9,
                            "src": "/find-the-sum-of-the-power-of-all-subsequences/",
                            "score": 2242,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "956. 最高的广告牌",
                            "sort": 10,
                            "src": "/tallest-billboard/",
                            "score": 2381,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2518. 好分区的数目",
                            "sort": 11,
                            "src": "/number-of-great-partitions/",
                            "score": 2415,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2742. 给墙壁刷油漆",
                            "sort": 12,
                            "src": "/painting-the-walls/",
                            "score": 2425,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 47. 入场安检",
                            "sort": 13,
                            "src": "/oPs9Bm/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2291. 最大股票收益",
                            "sort": 14,
                            "src": "/maximum-profit-from-trading-stocks/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2431. 最大限度地提高购买水果的口味",
                            "sort": 15,
                            "src": "/maximize-total-tastiness-of-purchased-fruits/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.2 完全背包",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "物品可以重复选，无个数限制。<br>",
                    "child": [
                        {
                            "title": "322. 零钱兑换",
                            "sort": 0,
                            "src": "/coin-change/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "518. 零钱兑换 II",
                            "sort": 1,
                            "src": "/coin-change-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "279. 完全平方数",
                            "sort": 2,
                            "src": "/perfect-squares/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1449. 数位成本和为目标值的最大数字",
                            "sort": 3,
                            "src": "/form-largest-integer-with-digits-that-add-up-to-target/",
                            "score": 1927,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3183. 达到总和的方法数量",
                            "sort": 4,
                            "src": "/the-number-of-ways-to-make-the-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.3 多重背包",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "物品可以重复选，有个数限制。<br>> 注：力扣上只有求方案数的题目。<br>",
                    "child": [
                        {
                            "title": "2585. 获得分数的方法数",
                            "sort": 0,
                            "src": "/number-of-ways-to-earn-points/",
                            "score": 1910,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2902. 和带限制的子多重集合的数目",
                            "sort": 1,
                            "src": "/count-of-sub-multisets-with-bounded-sum/",
                            "score": 2759,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.4 分组背包",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "同一组内的物品至多/恰好选一个。<br>",
                    "child": [
                        {
                            "title": "1155. 掷骰子等于目标和的方法数",
                            "sort": 0,
                            "src": "/number-of-dice-rolls-with-target-sum/",
                            "score": 1654,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1981. 最小化目标值与所选元素的差",
                            "sort": 1,
                            "src": "/minimize-the-difference-between-target-and-chosen-elements/",
                            "score": 2010,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2218. 从栈中取出 K 个硬币的最大面值和",
                            "sort": 2,
                            "src": "/maximum-value-of-k-coins-from-piles/",
                            "score": 2158,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "四、经典线性 DP",
            "sort": 4,
            "summary": "",
            "child": [
                {
                    "title": "§4.1 最长公共子序列（LCS）",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV1TM4y1o7ug/\">最长公共子序列 编辑距离</a><br>一般定义 $f[i][j]$ 表示对 $(s[:i],t[:j])$ 的求解结果。<br>",
                    "child": [
                        {
                            "title": "1143. 最长公共子序列",
                            "sort": 0,
                            "src": "/longest-common-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "583. 两个字符串的删除操作",
                            "sort": 1,
                            "src": "/delete-operation-for-two-strings/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "712. 两个字符串的最小 ASCII 删除和",
                            "sort": 2,
                            "src": "/minimum-ascii-delete-sum-for-two-strings/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "72. 编辑距离",
                            "sort": 3,
                            "src": "/edit-distance/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "97. 交错字符串",
                            "sort": 4,
                            "src": "/interleaving-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "115. 不同的子序列",
                            "sort": 5,
                            "src": "/distinct-subsequences/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1035. 不相交的线",
                            "sort": 6,
                            "src": "/uncrossed-lines/",
                            "score": 1806,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1458. 两个子序列的最大点积",
                            "sort": 7,
                            "src": "/max-dot-product-of-two-subsequences/",
                            "score": 1824,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1092. 最短公共超序列",
                            "sort": 8,
                            "src": "/shortest-common-supersequence/",
                            "score": 1977,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1639. 通过给定词典构造目标字符串的方案数",
                            "sort": 9,
                            "src": "/number-of-ways-to-form-a-target-string-given-a-dictionary/",
                            "score": 2082,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "44. 通配符匹配",
                            "sort": 10,
                            "src": "/wildcard-matching/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "10. 正则表达式匹配",
                            "sort": 11,
                            "src": "/regular-expression-matching/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.2 最长递增子序列（LIS）",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV1ub411Q7sB/\">最长递增子序列</a><br>做法有很多：<br>1. 枚举选哪个（见讲解）。<br>2. 贪心+二分（见讲解）。<br>3. 计算 $a$ 和把 $a$ 排序后的数组 $\\textit{sortedA}$ 的最长公共子序列。<br>4. 数据结构优化（见 2407 题）。<br>**思维扩展**：<br>**思考题**：<br>给定整数 $k$，构造一个数组 $a$，使得 $a$ 恰好有 $k$ 个最长递增子序列。<br><a href=\"https://leetcode.cn/problems/number-of-longest-increasing-subsequence/description/comments/2218054\">解答（评论）</a><br>",
                    "child": [
                        {
                            "title": "300. 最长递增子序列",
                            "sort": 0,
                            "src": "/longest-increasing-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "673. 最长递增子序列的个数",
                            "sort": 1,
                            "src": "/number-of-longest-increasing-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2826. 将三个组排序",
                            "sort": 2,
                            "src": "/sorting-three-groups/",
                            "score": 1721,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1671. 得到山形数组的最少删除次数",
                            "sort": 3,
                            "src": "/minimum-number-of-removals-to-make-mountain-array/",
                            "score": 1913,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1964. 找出到每个位置为止最长的有效障碍赛跑路线",
                            "sort": 4,
                            "src": "/find-the-longest-valid-obstacle-course-at-each-position/",
                            "score": 1933,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2111. 使数组 K 递增的最少操作次数",
                            "sort": 5,
                            "src": "/minimum-operations-to-make-the-array-k-increasing/",
                            "score": 1941,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1626. 无矛盾的最佳球队",
                            "sort": 6,
                            "src": "/best-team-with-no-conflicts/",
                            "score": 2027,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "354. 俄罗斯套娃信封问题",
                            "sort": 7,
                            "src": "/russian-doll-envelopes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1691. 堆叠长方体的最大高度",
                            "sort": 8,
                            "src": "/maximum-height-by-stacking-cuboids/",
                            "score": 2172,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "960. 删列造序 III",
                            "sort": 9,
                            "src": "/delete-columns-to-make-sorted-iii/",
                            "score": 2247,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2407. 最长递增子序列 II",
                            "sort": 10,
                            "src": "/longest-increasing-subsequence-ii/",
                            "score": 2280,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1187. 使数组严格递增",
                            "sort": 11,
                            "src": "/make-array-strictly-increasing/",
                            "score": 2316,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1713. 得到子序列的最少操作次数",
                            "sort": 12,
                            "src": "/minimum-operations-to-make-a-subsequence/",
                            "score": 2351,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "368. 最大整除子集",
                            "sort": 13,
                            "src": "/largest-divisible-subset/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "五、状态机 DP",
            "sort": 5,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV1ho4y1W7QK/\">状态机 DP</a><br>一般定义 $f[i][j]$ 表示前缀 $a[:i]$ 在状态 $j$ 下的最优值。一般 $j$ 都很小。代表题目是「买卖股票」系列。<br>注：某些题目做法不止一种，除了状态机 DP 以外，也有前后缀分解的做法。<br>",
                    "child": [
                        {
                            "title": "121. 买卖股票的最佳时机",
                            "sort": 0,
                            "src": "/best-time-to-buy-and-sell-stock/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "122. 买卖股票的最佳时机 II",
                            "sort": 1,
                            "src": "/best-time-to-buy-and-sell-stock-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "123. 买卖股票的最佳时机 III",
                            "sort": 2,
                            "src": "/best-time-to-buy-and-sell-stock-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "188. 买卖股票的最佳时机 IV",
                            "sort": 3,
                            "src": "/best-time-to-buy-and-sell-stock-iv/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "309. 买卖股票的最佳时机含冷冻期",
                            "sort": 4,
                            "src": "/best-time-to-buy-and-sell-stock-with-cooldown/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "714. 买卖股票的最佳时机含手续费",
                            "sort": 5,
                            "src": "/best-time-to-buy-and-sell-stock-with-transaction-fee/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1493. 删掉一个元素以后全为 1 的最长子数组",
                            "sort": 6,
                            "src": "/longest-subarray-of-1s-after-deleting-one-element/",
                            "score": 1423,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2745. 构造最长的新字符串",
                            "sort": 7,
                            "src": "/construct-the-longest-new-string/",
                            "score": 1607,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2222. 选择建筑的方案数",
                            "sort": 8,
                            "src": "/number-of-ways-to-select-buildings/",
                            "score": 1657,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "376. 摆动序列",
                            "sort": 9,
                            "src": "/wiggle-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1567. 乘积为正数的最长子数组长度",
                            "sort": 10,
                            "src": "/maximum-length-of-subarray-with-positive-product/",
                            "score": 1710,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2708. 一个小组的最大实力值",
                            "sort": 11,
                            "src": "/maximum-strength-of-a-group/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2826. 将三个组排序",
                            "sort": 12,
                            "src": "/sorting-three-groups/",
                            "score": 1721,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2786. 访问数组中的位置使分数最大",
                            "sort": 13,
                            "src": "/visit-array-positions-to-maximize-score/",
                            "score": 1733,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1262. 可被三整除的最大和",
                            "sort": 14,
                            "src": "/greatest-sum-divisible-by-three/",
                            "score": 1762,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1363. 形成三的最大倍数",
                            "sort": 15,
                            "src": "/largest-multiple-of-three/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1911. 最大子序列交替和",
                            "sort": 16,
                            "src": "/maximum-alternating-subsequence-sum/",
                            "score": 1786,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1395. 统计作战单位数",
                            "sort": 17,
                            "src": "/count-number-of-teams/",
                            "score": 4,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2771. 构造最长非递减子数组",
                            "sort": 18,
                            "src": "/longest-non-decreasing-subarray-from-two-arrays/",
                            "score": 1792,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1186. 删除一次得到子数组最大和",
                            "sort": 19,
                            "src": "/maximum-subarray-sum-with-one-deletion/",
                            "score": 1799,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1594. 矩阵的最大非负积",
                            "sort": 20,
                            "src": "/maximum-non-negative-product-in-a-matrix/",
                            "score": 1807,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3196. 最大化子数组的总成本",
                            "sort": 21,
                            "src": "/maximize-total-cost-of-alternating-subarrays/",
                            "score": 1847,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "935. 骑士拨号器",
                            "sort": 22,
                            "src": "/knight-dialer/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1537. 最大得分",
                            "sort": 23,
                            "src": "/get-the-maximum-score/",
                            "score": 1961,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2919. 使数组变美的最小增量运算数",
                            "sort": 24,
                            "src": "/minimum-increment-operations-to-make-array-beautiful/",
                            "score": 2031,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "801. 使序列递增的最小交换次数",
                            "sort": 25,
                            "src": "/minimum-swaps-to-make-sequences-increasing/",
                            "score": 2066,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1955. 统计特殊子序列的数目",
                            "sort": 26,
                            "src": "/count-number-of-special-subsequences/",
                            "score": 2125,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3068. 最大节点价值之和",
                            "sort": 27,
                            "src": "/find-the-maximum-sum-of-node-values/",
                            "score": 2268,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 19. 秋叶收藏集",
                            "sort": 28,
                            "src": "/UlBDOe/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "276. 栅栏涂色",
                            "sort": 29,
                            "src": "/paint-fence/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1746. 经过一次操作后的最大子数组和",
                            "sort": 30,
                            "src": "/maximum-subarray-sum-after-one-operation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2036. 最大交替子数组和",
                            "sort": 31,
                            "src": "/maximum-alternating-subarray-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2361. 乘坐火车路线的最少费用",
                            "sort": 32,
                            "src": "/minimum-costs-using-the-train-line/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "六、划分型 DP",
            "sort": 6,
            "summary": "",
            "child": [
                {
                    "title": "§6.1 判定能否划分",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "一般定义 $f[i]$ 表示长为 $i$ 的前缀 $a[:i]$ 能否划分。<br>枚举最后一个子数组的左端点 $L$，从 $f[L]$ 转移到 $f[i]$，并考虑 $a[L:i]$ 是否满足要求。<br>",
                    "child": [
                        {
                            "title": "2369. 检查数组是否存在有效划分",
                            "sort": 0,
                            "src": "/check-if-there-is-a-valid-partition-for-the-array/",
                            "score": 1780,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "139. 单词拆分",
                            "sort": 1,
                            "src": "/word-break/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§6.2 最优划分",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "计算最少（最多）可以划分出多少段、最优划分得分等。<br>一般定义 $f[i]$ 表示长为 $i$ 的前缀 $a[:i]$ 在题目约束下，分割出的最少（最多）子数组个数（或者定义成分割方案数）。<br>枚举最后一个子数组的左端点 $L$，从 $f[L]$ 转移到 $f[i]$，并考虑 $a[L:i]$ 对最优解的影响。<br>",
                    "child": [
                        {
                            "title": "132. 分割回文串 II",
                            "sort": 0,
                            "src": "/palindrome-partitioning-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2707. 字符串中的额外字符",
                            "sort": 1,
                            "src": "/extra-characters-in-a-string/",
                            "score": 1736,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3196. 最大化子数组的总成本",
                            "sort": 2,
                            "src": "/maximize-total-cost-of-alternating-subarrays/",
                            "score": 1847,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2767. 将字符串分割为最少的美丽子字符串",
                            "sort": 3,
                            "src": "/partition-string-into-minimum-beautiful-substrings/",
                            "score": 1865,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "91. 解码方法",
                            "sort": 4,
                            "src": "/decode-ways/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "639. 解码方法 II",
                            "sort": 5,
                            "src": "/decode-ways-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCR 165. 解密数字",
                            "sort": 6,
                            "src": "/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1416. 恢复数组",
                            "sort": 7,
                            "src": "/restore-the-array/",
                            "score": 1920,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2472. 不重叠回文子字符串的最大数目",
                            "sort": 8,
                            "src": "/maximum-number-of-non-overlapping-palindrome-substrings/",
                            "score": 2013,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1105. 填充书架",
                            "sort": 9,
                            "src": "/filling-bookcase-shelves/",
                            "score": 2014,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2547. 拆分数组的最小代价",
                            "sort": 10,
                            "src": "/minimum-cost-to-split-an-array/",
                            "score": 2020,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2430. 对字母串可执行的最大删除数",
                            "sort": 11,
                            "src": "/maximum-deletions-on-a-string/",
                            "score": 2102,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2463. 最小移动总距离",
                            "sort": 12,
                            "src": "/minimum-total-distance-traveled/",
                            "score": 2454,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2977. 转换字符串的最小成本 II",
                            "sort": 13,
                            "src": "/minimum-cost-to-convert-string-ii/",
                            "score": 2696,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2052. 将句子分隔成行的最低成本",
                            "sort": 14,
                            "src": "/minimum-cost-to-separate-sentence-into-rows/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2464. 有效分割中的最少子数组数目",
                            "sort": 15,
                            "src": "/minimum-subarrays-in-a-valid-split/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§6.3 约束划分个数",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "将数组分成（恰好/至多）$k$ 个连续子数组，计算与这些子数组有关的最优值。<br>一般定义 $f[i][j]$ 表示将长为 $j$ 的前缀 $a[:j]$ 分成 $i$ 个连续子数组所得到的最优解。<br>枚举最后一个子数组的左端点 $L$，从 $f[i-1][L]$ 转移到 $f[i][j]$，并考虑 $a[L:j]$ 对最优解的影响。<br>",
                    "child": [
                        {
                            "title": "410. 分割数组的最大值",
                            "sort": 0,
                            "src": "/split-array-largest-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1043. 分隔数组以得到最大和",
                            "sort": 1,
                            "src": "/partition-array-for-maximum-sum/",
                            "score": 1916,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1745. 分割回文串 IV",
                            "sort": 2,
                            "src": "/palindrome-partitioning-iv/",
                            "score": 1925,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "813. 最大平均值和的分组",
                            "sort": 3,
                            "src": "/largest-sum-of-averages/",
                            "score": 1937,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1278. 分割回文串 III",
                            "sort": 4,
                            "src": "/palindrome-partitioning-iii/",
                            "score": 1979,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1335. 工作计划的最低难度",
                            "sort": 5,
                            "src": "/minimum-difficulty-of-a-job-schedule/",
                            "score": 2035,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1473. 粉刷房子 III",
                            "sort": 6,
                            "src": "/paint-house-iii/",
                            "score": 2056,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1478. 安排邮筒",
                            "sort": 7,
                            "src": "/allocate-mailboxes/",
                            "score": 2190,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1959. K 次调整数组大小浪费的最小总空间",
                            "sort": 8,
                            "src": "/minimum-total-space-wasted-with-k-resizing-operations/",
                            "score": 2310,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2478. 完美分割的方案数",
                            "sort": 9,
                            "src": "/number-of-beautiful-partitions/",
                            "score": 2344,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3077. K 个不相交子数组的最大能量值",
                            "sort": 10,
                            "src": "/maximum-strength-of-k-disjoint-subarrays/",
                            "score": 2557,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2911. 得到 K 个半回文串的最少修改次数",
                            "sort": 11,
                            "src": "/minimum-changes-to-make-k-semi-palindromes/",
                            "score": 2608,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3117. 划分数组得到最小的值之和",
                            "sort": 12,
                            "src": "/minimum-sum-of-values-by-dividing-array/",
                            "score": 2735,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§6.4 不相交区间",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2830. 销售利润最大化",
                            "sort": 0,
                            "src": "/maximize-the-profit-as-the-salesman/",
                            "score": 1851,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2008. 出租车的最大盈利",
                            "sort": 1,
                            "src": "/maximum-earnings-from-taxi/",
                            "score": 1872,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1235. 规划兼职工作",
                            "sort": 2,
                            "src": "/maximum-profit-in-job-scheduling/",
                            "score": 2023,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1751. 最多可以参加的会议数目 II",
                            "sort": 3,
                            "src": "/maximum-number-of-events-that-can-be-attended-ii/",
                            "score": 2041,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "七、其他线性 DP",
            "sort": 7,
            "summary": "",
            "child": [
                {
                    "title": "§7.1 一维",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "发生在前缀/后缀之间的转移，例如从 $f[i-1]$ 转移到 $f[i]$，或者从 $f[j]$ 转移到 $f[i]$。<br>",
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
                            "title": "2140. 解决智力问题",
                            "sort": 1,
                            "src": "/solving-questions-with-brainpower/",
                            "score": 1709,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "983. 最低票价",
                            "sort": 2,
                            "src": "/minimum-cost-for-tickets/",
                            "score": 1786,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2901. 最长相邻不相等子序列 II",
                            "sort": 3,
                            "src": "/longest-unequal-adjacent-groups-subsequence-ii/",
                            "score": 1899,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3144. 分割字符频率相等的最少子字符串",
                            "sort": 4,
                            "src": "/minimum-substring-partition-of-equal-character-frequency/",
                            "score": 1917,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "871. 最低加油次数",
                            "sort": 5,
                            "src": "/minimum-number-of-refueling-stops/",
                            "score": 2074,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2896. 执行操作使两个字符串相等",
                            "sort": 6,
                            "src": "/apply-operations-to-make-two-strings-equal/",
                            "score": 2172,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2167. 移除所有载有违禁货物车厢所需的最少时间",
                            "sort": 7,
                            "src": "/minimum-time-to-remove-all-cars-containing-illegal-goods/",
                            "score": 2219,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2188. 完成比赛的最少时间",
                            "sort": 8,
                            "src": "/minimum-time-to-finish-the-race/",
                            "score": 2315,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3205. 最大数组跳跃得分 I",
                            "sort": 9,
                            "src": "/maximum-array-hopping-score-i/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1259. 不相交的握手",
                            "sort": 10,
                            "src": "/handshakes-that-dont-cross/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§7.2 特殊子序列",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "比较特殊的一类题型，递推比记忆化搜索好写。<br>",
                    "child": [
                        {
                            "title": "2501. 数组中最长的方波",
                            "sort": 0,
                            "src": "/longest-square-streak-in-an-array/",
                            "score": 1480,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1218. 最长定差子序列",
                            "sort": 1,
                            "src": "/longest-arithmetic-subsequence-of-given-difference/",
                            "score": 1597,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1027. 最长等差数列",
                            "sort": 2,
                            "src": "/longest-arithmetic-subsequence/",
                            "score": 1759,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "873. 最长的斐波那契子序列的长度",
                            "sort": 3,
                            "src": "/length-of-longest-fibonacci-subsequence/",
                            "score": 1911,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3202. 找出有效子序列的最大长度 II",
                            "sort": 4,
                            "src": "/find-the-maximum-length-of-valid-subsequence-ii/",
                            "score": 1974,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "446. 等差数列划分 II - 子序列",
                            "sort": 5,
                            "src": "/arithmetic-slices-ii-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1048. 最长字符串链",
                            "sort": 6,
                            "src": "/longest-string-chain/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3098. 求出所有子序列的能量和",
                            "sort": 7,
                            "src": "/find-the-sum-of-subsequence-powers/",
                            "score": 2553,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§7.3 矩阵快速幂优化",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "部分题目由于数据范围小，也可以用线性 DP。<br>",
                    "child": [
                        {
                            "title": "70. 爬楼梯",
                            "sort": 0,
                            "src": "/climbing-stairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "509. 斐波那契数",
                            "sort": 1,
                            "src": "/fibonacci-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1137. 第 N 个泰波那契数",
                            "sort": 2,
                            "src": "/n-th-tribonacci-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1220. 统计元音字母序列的数目",
                            "sort": 3,
                            "src": "/count-vowels-permutation/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "552. 学生出勤记录 II",
                            "sort": 4,
                            "src": "/student-attendance-record-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "790. 多米诺和托米诺平铺",
                            "sort": 5,
                            "src": "/domino-and-tromino-tiling/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2851. 字符串转换",
                            "sort": 6,
                            "src": "/string-transformation/",
                            "score": 2858,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2912. 在网格上移动到目的地的方法数",
                            "sort": 7,
                            "src": "/number-of-ways-to-reach-destination-in-the-grid/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§7.4 子矩形",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "3148. 矩阵中的最大得分",
                            "sort": 0,
                            "src": "/maximum-difference-score-in-a-grid/",
                            "score": 1820,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "221. 最大正方形",
                            "sort": 1,
                            "src": "/maximal-square/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1277. 统计全为 1 的正方形子矩阵",
                            "sort": 2,
                            "src": "/count-square-submatrices-with-all-ones/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2088. 统计农场中肥沃金字塔的数目",
                            "sort": 3,
                            "src": "/count-fertile-pyramids-in-a-land/",
                            "score": 2105,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3197. 包含所有 1 的最小矩形面积 II",
                            "sort": 4,
                            "src": "/find-the-minimum-area-to-cover-all-ones-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§7.5 多维",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2400. 恰好移动 k 步到达某一位置的方法数目",
                            "sort": 0,
                            "src": "/number-of-ways-to-reach-a-position-after-exactly-k-steps/",
                            "score": 1751,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2370. 最长理想子序列",
                            "sort": 1,
                            "src": "/longest-ideal-subsequence/",
                            "score": 1835,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3176. 求出最长好子序列 I",
                            "sort": 2,
                            "src": "/find-the-maximum-length-of-a-good-subsequence-i/",
                            "score": 1849,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1269. 停在原地的方案数",
                            "sort": 3,
                            "src": "/number-of-ways-to-stay-in-the-same-place-after-some-steps/",
                            "score": 1854,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3218. 切蛋糕的最小总开销 I",
                            "sort": 4,
                            "src": "/minimum-cost-for-cutting-cake-i/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3250. 单调数组对的数目 I",
                            "sort": 5,
                            "src": "/find-the-count-of-monotonic-pairs-i/",
                            "score": 1900,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3122. 使矩阵满足条件的最少操作次数",
                            "sort": 6,
                            "src": "/minimum-number-of-operations-to-satisfy-conditions/",
                            "score": 1905,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "576. 出界的路径数",
                            "sort": 7,
                            "src": "/out-of-boundary-paths/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "403. 青蛙过河",
                            "sort": 8,
                            "src": "/frog-jump/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1223. 掷骰子模拟",
                            "sort": 9,
                            "src": "/dice-roll-simulation/",
                            "score": 2008,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1320. 二指输入的的最小距离",
                            "sort": 10,
                            "src": "/minimum-distance-to-type-a-word-using-two-fingers/",
                            "score": 2028,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1575. 统计所有可行路径",
                            "sort": 11,
                            "src": "/count-all-possible-routes/",
                            "score": 2055,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3154. 到达第 K 级台阶的方案数",
                            "sort": 12,
                            "src": "/find-number-of-ways-to-reach-the-k-th-stair/",
                            "score": 2071,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2318. 不同骰子序列的数目",
                            "sort": 13,
                            "src": "/number-of-distinct-roll-sequences/",
                            "score": 2090,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2209. 用地毯覆盖后的最少白色砖块",
                            "sort": 14,
                            "src": "/minimum-white-tiles-after-covering-with-carpets/",
                            "score": 2106,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1444. 切披萨的方案数",
                            "sort": 15,
                            "src": "/number-of-ways-of-cutting-a-pizza/",
                            "score": 2127,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1420. 生成数组",
                            "sort": 16,
                            "src": "/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/",
                            "score": 2176,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3193. 统计逆序对的数目",
                            "sort": 17,
                            "src": "/count-the-number-of-inversions/",
                            "score": 2266,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "629. K 个逆序对数组",
                            "sort": 18,
                            "src": "/k-inverse-pairs-array/",
                            "score": 2300,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1866. 恰有 K 根木棍可以看到的排列数目",
                            "sort": 19,
                            "src": "/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/",
                            "score": 2333,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2312. 卖木头块",
                            "sort": 20,
                            "src": "/selling-pieces-of-wood/",
                            "score": 2363,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3177. 求出最长好子序列 II",
                            "sort": 21,
                            "src": "/find-the-maximum-length-of-a-good-subsequence-ii/",
                            "score": 2365,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "887. 鸡蛋掉落",
                            "sort": 22,
                            "src": "/super-egg-drop/",
                            "score": 2377,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1884. 鸡蛋掉落-两枚鸡蛋",
                            "sort": 23,
                            "src": "/egg-drop-with-2-eggs-and-n-floors/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1388. 3n 块披萨",
                            "sort": 24,
                            "src": "/pizza-with-3n-slices/",
                            "score": 2410,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1900. 最佳运动员的比拼回合",
                            "sort": 25,
                            "src": "/the-earliest-and-latest-rounds-where-players-compete/",
                            "score": 2455,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1883. 准时抵达会议现场的最小跳过休息次数",
                            "sort": 26,
                            "src": "/minimum-skips-to-arrive-at-meeting-on-time/",
                            "score": 2588,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 57. 打地鼠",
                            "sort": 27,
                            "src": "/ZbAuEH/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3225. 网格图操作后的最大分数",
                            "sort": 28,
                            "src": "/maximum-score-from-grid-operations/",
                            "score": 3100,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "256. 粉刷房子",
                            "sort": 29,
                            "src": "/paint-house/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "265. 粉刷房子 II",
                            "sort": 30,
                            "src": "/paint-house-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "568. 最大休假天数",
                            "sort": 31,
                            "src": "/maximum-vacation-days/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1692. 计算分配糖果的不同方式",
                            "sort": 32,
                            "src": "/count-ways-to-distribute-candies/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2143. 在两个数组的区间中选取数字",
                            "sort": 33,
                            "src": "/choose-numbers-from-two-arrays-in-range/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "八、区间 DP",
            "sort": 8,
            "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV1Gs4y1E7EU/\">区间 DP</a><br>从数组的左右两端不断缩短，求解关于某段下标区间的最优值。<br>一般定义 $f[i][j]$ 表示下标区间 $[i,j]$ 的最优值。<br>",
            "child": [
                {
                    "title": "§8.1 最长回文子序列",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "516. 最长回文子序列",
                            "sort": 0,
                            "src": "/longest-palindromic-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "730. 统计不同回文子序列",
                            "sort": 1,
                            "src": "/count-different-palindromic-subsequences/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1312. 让字符串成为回文串的最少插入次数",
                            "sort": 2,
                            "src": "/minimum-insertion-steps-to-make-a-string-palindrome/",
                            "score": 1787,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1771. 由子序列构造的最长回文串的长度",
                            "sort": 3,
                            "src": "/maximize-palindrome-length-from-subsequences/",
                            "score": 2182,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1682. 最长回文子序列 II",
                            "sort": 4,
                            "src": "/longest-palindromic-subsequence-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1216. 验证回文串 III",
                            "sort": 5,
                            "src": "/valid-palindrome-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1246. 删除回文子数组",
                            "sort": 6,
                            "src": "/palindrome-removal/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§8.2 其他区间 DP",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
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
                            "title": "3040. 相同分数的最大操作数目 II",
                            "sort": 1,
                            "src": "/maximum-number-of-operations-with-the-same-score-ii/",
                            "score": 1709,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "375. 猜数字大小 II",
                            "sort": 2,
                            "src": "/guess-number-higher-or-lower-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1130. 叶值的最小代价生成树",
                            "sort": 3,
                            "src": "/minimum-cost-tree-from-leaf-values/",
                            "score": 1919,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "96. 不同的二叉搜索树",
                            "sort": 4,
                            "src": "/unique-binary-search-trees/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1770. 执行乘法运算的最大分数",
                            "sort": 5,
                            "src": "/maximum-score-from-performing-multiplication-operations/",
                            "score": 2068,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1547. 切棍子的最小成本",
                            "sort": 6,
                            "src": "/minimum-cost-to-cut-a-stick/",
                            "score": 2116,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1039. 多边形三角剖分的最低得分",
                            "sort": 7,
                            "src": "/minimum-score-triangulation-of-polygon/solution/shi-pin-jiao-ni-yi-bu-bu-si-kao-dong-tai-aty6/",
                            "score": 2130,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1000. 合并石头的最低成本",
                            "sort": 8,
                            "src": "/minimum-cost-to-merge-stones/",
                            "score": 2423,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2019. 解出数学表达式的学生分数",
                            "sort": 9,
                            "src": "/the-score-of-students-solving-math-expression/",
                            "score": 2584,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "87. 扰乱字符串",
                            "sort": 10,
                            "src": "/scramble-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "312. 戳气球",
                            "sort": 11,
                            "src": "/burst-balloons/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "664. 奇怪的打印机",
                            "sort": 12,
                            "src": "/strange-printer/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "546. 移除盒子",
                            "sort": 13,
                            "src": "/remove-boxes/",
                            "score": 1107,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "471. 编码最短长度的字符串",
                            "sort": 14,
                            "src": "/encode-string-with-shortest-length/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3018. 可处理的最大删除操作数 I",
                            "sort": 15,
                            "src": "/maximum-number-of-removal-queries-that-can-be-processed-i/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "九、状态压缩 DP（状压 DP）",
            "sort": 9,
            "summary": "",
            "child": [
                {
                    "title": "§9.1 排列型 ① 相邻无关",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "学习指南：<br>暴力做法是枚举所有排列，对每个排列计算和题目有关的值，时间复杂度（通常来说）是 $\\mathcal{O}(n\\cdot n!)$。可以解决 $n\\le 10$ 的问题。 <br>状压 DP 可以把时间复杂度（通常来说）优化至 $\\mathcal{O}(n\\cdot 2^n)$。可以解决 $n\\le 20$ 的问题。<br>一般有两种定义方式：<br>1. 定义 $f[S]$ 表示已经排列好的元素（下标）集合为 $S$ 时，和题目有关的最优值。通过枚举当前位置要填的元素（下标）来转移。<br>2. 定义 $f[S]$ 表示可以选的元素（下标）集合为 $S$ 时，和题目有关的最优值。通过枚举当前位置要填的元素（下标）来转移。<br>> 注：部分题目由于爆搜+剪枝也能过，难度分仅供参考。<br>",
                    "child": [
                        {
                            "title": "教你一步步思考状压 DP：从记忆化搜索到递推",
                            "sort": 0,
                            "src": "/beautiful-arrangement/solution/jiao-ni-yi-bu-bu-si-kao-zhuang-ya-dpcong-c6kd/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "从集合论到位运算，常见位运算技巧分类总结",
                            "sort": 1,
                            "src": "https://leetcode.cn/circle/discuss/CaOJ45/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "526. 优美的排列",
                            "sort": 2,
                            "src": "/beautiful-arrangement/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1879. 两个数组最小的异或值之和",
                            "sort": 3,
                            "src": "/minimum-xor-sum-of-two-arrays/",
                            "score": 2145,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2850. 将石头分散到网格图的最少移动次数",
                            "sort": 4,
                            "src": "/minimum-moves-to-spread-stones-over-grid/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1947. 最大兼容性评分和",
                            "sort": 5,
                            "src": "/maximum-compatibility-score-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1799. N 次操作后的最大分数和",
                            "sort": 6,
                            "src": "/maximize-score-after-n-operations/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2172. 数组的最大与和",
                            "sort": 7,
                            "src": "/maximum-and-sum-of-array/",
                            "score": 2392,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1066. 校园自行车分配 II",
                            "sort": 8,
                            "src": "/campus-bikes-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2992. 自整除排列的数量",
                            "sort": 9,
                            "src": "/number-of-self-divisible-permutations/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2403. 杀死所有怪物的最短时间",
                            "sort": 10,
                            "src": "/minimum-time-to-kill-all-monsters/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§9.2 排列型 ② 相邻相关",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "一般定义 $f<a href=\"https://leetcode.cn/problems/find-the-minimum-cost-array-permutation/solution/zhuang-ya-dpcong-ji-yi-hua-sou-suo-dao-d-s9t5/\">S][i]$ 表示未选（或者已选）的集合为 $S$，且上一个填的元素（下标）为 $i$ 时，和题目有关的最优值。通过枚举当前位置要填的元素（下标）来转移。<br>时间复杂度（通常来说）是 $\\mathcal{O}(n^2\\cdot 2^n)$。<br>[讲解：从全排列到状压 DP</a><br>",
                    "child": [
                        {
                            "title": "996. 正方形数组的数目",
                            "sort": 0,
                            "src": "/number-of-squareful-arrays/",
                            "score": 1932,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2741. 特别的排列",
                            "sort": 1,
                            "src": "/special-permutations/",
                            "score": 2021,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1681. 最小不兼容性",
                            "sort": 2,
                            "src": "/minimum-incompatibility/",
                            "score": 2390,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3149. 找出分数最低的排列",
                            "sort": 3,
                            "src": "/find-the-minimum-cost-array-permutation/",
                            "score": 2642,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§9.3 旅行商问题（TSP）",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "本质上就是排列型 ②。<br>",
                    "child": [
                        {
                            "title": "943. 最短超级串",
                            "sort": 0,
                            "src": "/find-the-shortest-superstring/",
                            "score": 2186,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "847. 访问所有节点的最短路径",
                            "sort": 1,
                            "src": "/shortest-path-visiting-all-nodes/",
                            "score": 2201,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 13. 寻宝",
                            "sort": 2,
                            "src": "/xun-bao/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2247. K 条高速公路的最大旅行费用",
                            "sort": 3,
                            "src": "/maximum-cost-of-trip-with-k-highways/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§9.4 枚举子集的子集",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "一般定义 $f<a href=\"https://leetcode.cn/problems/parallel-courses-ii/solution/zi-ji-zhuang-ya-dpcong-ji-yi-hua-sou-suo-oxwd/\">S]$ 表示未选（或者已选）的集合为 $S$ 时，和题目有关的最优值。通过枚举 $S$（或者 $S$ 的补集 $\\complement_US$）的子集来转移。<br>时间复杂度（通常来说）是 $\\mathcal{O}(3^n)$，证明见 [题解</a>。<br>值得注意的是，枚举子集的子集还可以用「选或不选」来做，对于存在无效状态的情况，可以做到更优的时间复杂度。具体见 <a href=\"https://leetcode.cn/problems/maximum-students-taking-exam/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-9y5k/\">1349 题解</a> 最后的写法。<br>",
                    "child": [
                        {
                            "title": "2305. 公平分发饼干",
                            "sort": 0,
                            "src": "/fair-distribution-of-cookies/",
                            "score": 1887,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1986. 完成任务的最少工作时间段",
                            "sort": 1,
                            "src": "/minimum-number-of-work-sessions-to-finish-the-tasks/",
                            "score": 1995,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1494. 并行课程 II",
                            "sort": 2,
                            "src": "/parallel-courses-ii/",
                            "score": 2082,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1723. 完成所有工作的最短时间",
                            "sort": 3,
                            "src": "/find-minimum-time-to-finish-all-jobs/",
                            "score": 2284,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1655. 分配重复整数",
                            "sort": 4,
                            "src": "/distribute-repeating-integers/",
                            "score": 2307,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1349. 参加考试的最大学生数",
                            "sort": 5,
                            "src": "/maximum-students-taking-exam/",
                            "score": 2386,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1681. 最小不兼容性",
                            "sort": 6,
                            "src": "/minimum-incompatibility/",
                            "score": 2390,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2572. 无平方子集计数",
                            "sort": 7,
                            "src": "/count-the-number-of-square-free-subsets/",
                            "score": 2420,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1994. 好子集的数目",
                            "sort": 8,
                            "src": "/the-number-of-good-subsets/",
                            "score": 2465,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 04. 覆盖",
                            "sort": 9,
                            "src": "/broken-board-dominoes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 53. 守护太空城",
                            "sort": 10,
                            "src": "/EJvmW4/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "465. 最优账单平衡",
                            "sort": 11,
                            "src": "/optimal-account-balancing/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2152. 穿过所有点的所需最少直线数量",
                            "sort": 12,
                            "src": "/minimum-number-of-lines-to-cover-points/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§9.5 其他状压 DP",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "698. 划分为k个相等的子集",
                            "sort": 0,
                            "src": "/partition-to-k-equal-sum-subsets/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1411. 给 N x 3 网格图涂色的方案数",
                            "sort": 1,
                            "src": "/number-of-ways-to-paint-n-3-grid/",
                            "score": 1845,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2002. 两个回文子序列长度的最大乘积",
                            "sort": 2,
                            "src": "/maximum-product-of-the-length-of-two-palindromic-subsequences/",
                            "score": 1869,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "473. 火柴拼正方形",
                            "sort": 3,
                            "src": "/matchsticks-to-square/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1931. 用三种不同颜色为网格涂色",
                            "sort": 4,
                            "src": "/painting-a-grid-with-three-different-colors/",
                            "score": 2170,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1125. 最小的必要团队",
                            "sort": 5,
                            "src": "/smallest-sufficient-team/",
                            "score": 2251,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1434. 每个人戴不同帽子的方案数",
                            "sort": 6,
                            "src": "/number-of-ways-to-wear-different-hats-to-each-other/",
                            "score": 2273,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "464. 我能赢吗",
                            "sort": 7,
                            "src": "/can-i-win/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "691. 贴纸拼词",
                            "sort": 8,
                            "src": "/stickers-to-spell-word/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1595. 连通两组点的最小成本",
                            "sort": 9,
                            "src": "/minimum-cost-to-connect-two-groups-of-points/",
                            "score": 2538,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1815. 得到新鲜甜甜圈的最多组数",
                            "sort": 10,
                            "src": "/maximum-number-of-groups-getting-fresh-donuts/",
                            "score": 2559,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1659. 最大化网格幸福感",
                            "sort": 11,
                            "src": "/maximize-grid-happiness/",
                            "score": 2655,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 69. Hello LeetCode!",
                            "sort": 12,
                            "src": "/rMeRt2/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 76. 魔法棋盘",
                            "sort": 13,
                            "src": "/1ybDKD/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 82. 万灵之树",
                            "sort": 14,
                            "src": "/cnHoX6/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "351. 安卓系统手势解锁",
                            "sort": 15,
                            "src": "/android-unlock-patterns/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2184. 建造坚实的砖墙的方法数",
                            "sort": 16,
                            "src": "/number-of-ways-to-build-sturdy-brick-wall/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "十、数位 DP",
            "sort": 10,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1rS4y1s721/?t=19m36s\">v1.0 模板讲解</a><br><a href=\"https://www.bilibili.com/video/BV1Fg4y1Q7wv/?t=31m28s\">v2.0 模板讲解</a><br>",
                    "child": [
                        {
                            "title": "2719. 统计整数数目",
                            "sort": 0,
                            "src": "/count-of-integers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "788. 旋转数字",
                            "sort": 1,
                            "src": "/rotated-digits/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "902. 最大为 N 的数字组合",
                            "sort": 2,
                            "src": "/numbers-at-most-n-given-digit-set/",
                            "score": 1990,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "233. 数字 1 的个数",
                            "sort": 3,
                            "src": "/number-of-digit-one/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 17.06. 2 出现的次数",
                            "sort": 4,
                            "src": "/number-of-2s-in-range-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "600. 不含连续 1 的非负整数",
                            "sort": 5,
                            "src": "/non-negative-integers-without-consecutive-ones/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2376. 统计特殊整数",
                            "sort": 6,
                            "src": "/count-special-integers/",
                            "score": 2120,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1012. 至少有 1 位重复的数字",
                            "sort": 7,
                            "src": "/numbers-with-repeated-digits/",
                            "score": 2230,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "357. 统计各位数字都不同的数字个数",
                            "sort": 8,
                            "src": "/count-numbers-with-unique-digits/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3007. 价值和小于等于 K 的最大数字",
                            "sort": 9,
                            "src": "/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/",
                            "score": 2258,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2827. 范围中美丽整数的数目",
                            "sort": 10,
                            "src": "/number-of-beautiful-integers-in-the-range/",
                            "score": 2324,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2999. 统计强大整数的数目",
                            "sort": 11,
                            "src": "/count-the-number-of-powerful-integers/",
                            "score": 2351,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2801. 统计范围内的步进数字数目",
                            "sort": 12,
                            "src": "/count-stepping-numbers-in-range/",
                            "score": 2367,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1397. 找到所有好字符串",
                            "sort": 13,
                            "src": "/find-all-good-strings/",
                            "score": 2667,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1215. 步进数",
                            "sort": 14,
                            "src": "/stepping-numbers/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1067. 范围内的数字计数",
                            "sort": 15,
                            "src": "/digit-count-in-range/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3032. 统计各位数字都不同的数字个数 II",
                            "sort": 16,
                            "src": "/count-numbers-with-unique-digits-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1742. 盒子中小球的最大数量",
                            "sort": 17,
                            "src": "/maximum-number-of-balls-in-a-box/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2843. 统计对称整数的数目",
                            "sort": 18,
                            "src": "/count-symmetric-integers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "十一、数据结构优化 DP",
            "sort": 11,
            "summary": "",
            "child": [
                {
                    "title": "§11.1 前缀和优化 DP",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2327. 知道秘密的人数",
                            "sort": 0,
                            "src": "/number-of-people-aware-of-a-secret/",
                            "score": 1894,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1997. 访问完所有房间的第一天",
                            "sort": 1,
                            "src": "/first-day-where-you-have-been-in-all-the-rooms/",
                            "score": 2260,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2478. 完美分割的方案数",
                            "sort": 2,
                            "src": "/number-of-beautiful-partitions/",
                            "score": 2344,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "837. 新 21 点",
                            "sort": 3,
                            "src": "/new-21-game/",
                            "score": 2350,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3251. 单调数组对的数目 II",
                            "sort": 4,
                            "src": "/find-the-count-of-monotonic-pairs-ii/",
                            "score": 2400,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2463. 最小移动总距离",
                            "sort": 5,
                            "src": "/minimum-total-distance-traveled/",
                            "score": 2454,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "629. K 个逆序对数组",
                            "sort": 6,
                            "src": "/k-inverse-pairs-array/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1977. 划分数字的方案数",
                            "sort": 7,
                            "src": "/number-of-ways-to-separate-numbers/",
                            "score": 2817,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3130. 找出所有稳定的二进制数组 II",
                            "sort": 8,
                            "src": "/find-all-possible-stable-binary-arrays-ii/",
                            "score": 2825,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§11.2 单调栈优化 DP",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "前置题单：<a href=\"https://leetcode.cn/circle/discuss/9oZFK9/\">单调栈（矩形系列/字典序最小/贡献法）</a><br>",
                    "child": [
                        {
                            "title": "1335. 工作计划的最低难度",
                            "sort": 0,
                            "src": "/minimum-difficulty-of-a-job-schedule/",
                            "score": 2035,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2866. 美丽塔 II",
                            "sort": 1,
                            "src": "/beautiful-towers-ii/",
                            "score": 2072,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2617. 网格图中最少访问的格子数",
                            "sort": 2,
                            "src": "/minimum-number-of-visited-cells-in-a-grid/",
                            "score": 2582,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2355. 你能拿走的最大图书数量",
                            "sort": 3,
                            "src": "/maximum-number-of-books-you-can-take/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§11.3 单调队列优化 DP",
                    "sort": 2,
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
                            "title": "2463. 最小移动总距离",
                            "sort": 5,
                            "src": "/minimum-total-distance-traveled/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3117. 划分数组得到最小的值之和",
                            "sort": 6,
                            "src": "/minimum-sum-of-values-by-dividing-array/",
                            "score": 2735,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2945. 找到最大非递减数组的长度",
                            "sort": 7,
                            "src": "/find-maximum-non-decreasing-array-length/",
                            "score": 2943,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2969. 购买水果需要的最少金币数 II",
                            "sort": 8,
                            "src": "/minimum-number-of-coins-for-fruits-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§11.4 树状数组/线段树优化 DP",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1626. 无矛盾的最佳球队",
                            "sort": 0,
                            "src": "/best-team-with-no-conflicts/",
                            "score": 2027,
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
                            "title": "2770. 达到末尾下标所需的最大跳跃次数",
                            "sort": 2,
                            "src": "/maximum-number-of-jumps-to-reach-the-last-index/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2926. 平衡子序列的最大和",
                            "sort": 3,
                            "src": "/maximum-balanced-subsequence-sum/",
                            "score": 2448,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2916. 子数组不同元素数目的平方和 II",
                            "sort": 4,
                            "src": "/subarrays-distinct-element-sum-of-squares-ii/",
                            "score": 2816,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§11.5 字典树优化 DP",
                    "sort": 4,
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
                    "title": "§11.6 其他优化 DP",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2713. 矩阵中严格递增的单元格数",
                            "sort": 0,
                            "src": "/maximum-strictly-increasing-cells-in-a-matrix/",
                            "score": 2387,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3181. 执行操作可获得的最大总奖励 II",
                            "sort": 1,
                            "src": "/maximum-total-reward-using-operations-ii/",
                            "score": 2688,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3213. 最小代价构造字符串",
                            "sort": 2,
                            "src": "/construct-string-with-minimum-cost/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 59. 搭桥过河",
                            "sort": 3,
                            "src": "/NfY1m5/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2263. 数组变为有序的最小操作次数",
                            "sort": 4,
                            "src": "/make-array-non-decreasing-or-non-increasing/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "十二、树形 DP",
            "sort": 12,
            "summary": "注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归。这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以仍然叫做树形 DP。此外，如果是自顶向下的递归做法，是存在重叠子问题的，一般要结合记忆化搜索实现。<br>",
            "child": [
                {
                    "title": "§12.1 树的直径",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV17o4y187h1/\">树形 DP：树的直径</a><br>> 注：求直径也有两次 DFS 的做法。<br>",
                    "child": [
                        {
                            "title": "543. 二叉树的直径",
                            "sort": 0,
                            "src": "/diameter-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "687. 最长同值路径",
                            "sort": 1,
                            "src": "/longest-univalue-path/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "124. 二叉树中的最大路径和",
                            "sort": 2,
                            "src": "/binary-tree-maximum-path-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2385. 感染二叉树需要的总时间",
                            "sort": 3,
                            "src": "/amount-of-time-for-binary-tree-to-be-infected/",
                            "score": 1711,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2246. 相邻字符不同的最长路径",
                            "sort": 4,
                            "src": "/longest-path-with-different-adjacent-characters/",
                            "score": 2126,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3203. 合并两棵树后的最小直径",
                            "sort": 5,
                            "src": "/find-minimum-diameter-after-merging-two-trees/",
                            "score": 2266,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1617. 统计子树中城市之间最大距离",
                            "sort": 6,
                            "src": "/count-subtrees-with-max-distance-between-cities/",
                            "score": 2309,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2538. 最大价值和与最小价值和的差值",
                            "sort": 7,
                            "src": "/difference-between-maximum-and-minimum-price-sum/",
                            "score": 2398,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1522. N 叉树的直径",
                            "sort": 8,
                            "src": "/diameter-of-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1245. 树的直径",
                            "sort": 9,
                            "src": "/tree-diameter/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "549. 二叉树最长连续序列 II",
                            "sort": 10,
                            "src": "/binary-tree-longest-consecutive-sequence-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§12.2 树上最大独立集",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV1vu4y1f7dn/\">树形 DP：打家劫舍III</a><br>",
                    "child": [
                        {
                            "title": "337. 打家劫舍 III",
                            "sort": 0,
                            "src": "/house-robber-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2646. 最小化旅行的价格总和",
                            "sort": 1,
                            "src": "/minimize-the-total-price-of-the-trips/",
                            "score": 2238,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2378. 选择边来最大化树的得分",
                            "sort": 2,
                            "src": "/choose-edges-to-maximize-score-in-a-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§12.3 树上最小支配集",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "讲解：<a href=\"https://www.bilibili.com/video/BV1oF411U7qL/\">树形 DP：监控二叉树</a>，包含 968 的变形题。<br>",
                    "child": [
                        {
                            "title": "968. 监控二叉树",
                            "sort": 0,
                            "src": "/binary-tree-cameras/",
                            "score": 2124,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§12.4 换根 DP",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "也叫二次扫描法。<br><a href=\"https://leetcode.cn/problems/sum-of-distances-in-tree/solution/tu-jie-yi-zhang-tu-miao-dong-huan-gen-dp-6bgb/\">【图解】一张图秒懂换根 DP！</a><br>",
                    "child": [
                        {
                            "title": "834. 树中距离之和",
                            "sort": 0,
                            "src": "/sum-of-distances-in-tree/",
                            "score": 2197,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2581. 统计可能的树根数目",
                            "sort": 1,
                            "src": "/count-number-of-possible-root-nodes/",
                            "score": 2228,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2858. 可以到达每一个节点的最少边反转次数",
                            "sort": 2,
                            "src": "/minimum-edge-reversals-so-every-node-is-reachable/",
                            "score": 2295,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "310. 最小高度树",
                            "sort": 3,
                            "src": "/minimum-height-trees/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3241. 标记所有节点需要的时间",
                            "sort": 4,
                            "src": "/time-taken-to-mark-all-nodes/",
                            "score": 2600,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§12.5 其他树形 DP",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2925. 在树上执行操作以后得到的最大分数",
                            "sort": 0,
                            "src": "/maximum-score-after-applying-operations-on-a-tree/",
                            "score": 1940,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3068. 最大节点价值之和",
                            "sort": 1,
                            "src": "/find-the-maximum-sum-of-node-values/",
                            "score": 2268,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2920. 收集所有金币可获得的最大积分",
                            "sort": 2,
                            "src": "/maximum-points-after-collecting-coins-from-all-nodes/",
                            "score": 2351,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1916. 统计为蚁群构筑房间的不同顺序",
                            "sort": 3,
                            "src": "/count-ways-to-build-rooms-in-an-ant-colony/",
                            "score": 2486,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 10. 二叉树任务调度",
                            "sort": 4,
                            "src": "/er-cha-shu-ren-wu-diao-du/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 34. 二叉树染色",
                            "sort": 5,
                            "src": "/er-cha-shu-ran-se-UGC/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 64. 二叉树灯饰",
                            "sort": 6,
                            "src": "/U7WvvU/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2313. 二叉树中得到结果所需的最少翻转次数",
                            "sort": 7,
                            "src": "/minimum-flips-in-binary-tree-to-get-result/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "十三、图 DP",
            "sort": 13,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "另见<a href=\"https://leetcode.cn/circle/discuss/01LUak/\">【题单】图论算法</a> 中的「全源最短路：Floyd」，本质是多维 DP。<br>",
                    "child": [
                        {
                            "title": "3243. 新增道路查询后的最短距离 I",
                            "sort": 0,
                            "src": "/shortest-distance-after-road-addition-queries-i/",
                            "score": 1500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "787. K 站中转内最便宜的航班",
                            "sort": 1,
                            "src": "/cheapest-flights-within-k-stops/",
                            "score": 1786,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1786. 从第一个节点出发到最后一个节点的受限路径数",
                            "sort": 2,
                            "src": "/number-of-restricted-paths-from-first-to-last-node/",
                            "score": 2079,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2050. 并行课程 III",
                            "sort": 3,
                            "src": "/parallel-courses-iii/",
                            "score": 2084,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1976. 到达目的地的方案数",
                            "sort": 4,
                            "src": "/number-of-ways-to-arrive-at-destination/",
                            "score": 2095,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1857. 有向图中最大颜色值",
                            "sort": 5,
                            "src": "/largest-color-value-in-a-directed-graph/",
                            "score": 2313,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1928. 规定时间内到达终点的最小花费",
                            "sort": 6,
                            "src": "/minimum-cost-to-reach-destination-in-time/",
                            "score": 2413,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 07. 传递信息",
                            "sort": 7,
                            "src": "/chuan-di-xin-xi/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1548. 图中最相似的路径",
                            "sort": 8,
                            "src": "/the-most-similar-path-in-a-graph/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "十四、博弈 DP",
            "sort": 14,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1025. 除数博弈",
                            "sort": 0,
                            "src": "/divisor-game/",
                            "score": 1435,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "877. 石子游戏",
                            "sort": 1,
                            "src": "/stone-game/",
                            "score": 1590,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "486. 预测赢家",
                            "sort": 2,
                            "src": "/predict-the-winner/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1510. 石子游戏 IV",
                            "sort": 3,
                            "src": "/stone-game-iv/",
                            "score": 1787,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1690. 石子游戏 VII",
                            "sort": 4,
                            "src": "/stone-game-vii/",
                            "score": 1951,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1406. 石子游戏 III",
                            "sort": 5,
                            "src": "/stone-game-iii/",
                            "score": 2027,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1140. 石子游戏 II",
                            "sort": 6,
                            "src": "/stone-game-ii/",
                            "score": 2035,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1563. 石子游戏 V",
                            "sort": 7,
                            "src": "/stone-game-v/",
                            "score": 2087,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "464. 我能赢吗",
                            "sort": 8,
                            "src": "/can-i-win/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1872. 石子游戏 VIII",
                            "sort": 9,
                            "src": "/stone-game-viii/",
                            "score": 2440,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "913. 猫和老鼠",
                            "sort": 10,
                            "src": "/cat-and-mouse/",
                            "score": 2567,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "294. 翻转游戏 II",
                            "sort": 11,
                            "src": "/flip-game-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "十五、概率/期望 DP",
            "sort": 15,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "688. 骑士在棋盘上的概率",
                            "sort": 0,
                            "src": "/knight-probability-in-chessboard/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "837. 新 21 点",
                            "sort": 1,
                            "src": "/new-21-game/",
                            "score": 2350,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1467. 两个盒子中球的颜色数相同的概率",
                            "sort": 2,
                            "src": "/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
                            "score": 2357,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "808. 分汤",
                            "sort": 3,
                            "src": "/soup-servings/",
                            "score": 2397,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCR 185. 统计结果概率",
                            "sort": 4,
                            "src": "/nge-tou-zi-de-dian-shu-lcof/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "九坤-04. 筹码游戏",
                            "sort": 5,
                            "src": "https://leetcode.cn/contest/ubiquant2022/problems/I3Gm2h/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1230. 抛掷硬币",
                            "sort": 6,
                            "src": "/toss-strange-coins/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "专题：输出具体方案（打印方案）",
            "sort": 16,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "注意这些题目和回溯的区别，某些回溯题目要求输出**所有**方案，这里只要求输出**一个**。<br><a href=\"https://leetcode.cn/problems/shortest-common-supersequence/solution/cong-di-gui-dao-di-tui-jiao-ni-yi-bu-bu-auy8z/\">讲解</a><br>",
                    "child": [
                        {
                            "title": "368. 最大整除子集",
                            "sort": 0,
                            "src": "/largest-divisible-subset/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1449. 数位成本和为目标值的最大数字",
                            "sort": 1,
                            "src": "/form-largest-integer-with-digits-that-add-up-to-target/",
                            "score": 1927,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1092. 最短公共超序列",
                            "sort": 2,
                            "src": "/shortest-common-supersequence/",
                            "score": 1977,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "943. 最短超级串",
                            "sort": 3,
                            "src": "/find-the-shortest-superstring/",
                            "score": 2186,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1125. 最小的必要团队",
                            "sort": 4,
                            "src": "/smallest-sufficient-team/",
                            "score": 2251,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3149. 找出分数最低的排列",
                            "sort": 5,
                            "src": "/find-the-minimum-cost-array-permutation/",
                            "score": 2642,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "656. 金币路径",
                            "sort": 6,
                            "src": "/coin-path/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "471. 编码最短长度的字符串",
                            "sort": 7,
                            "src": "/encode-string-with-shortest-length/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "专题：前后缀分解",
            "sort": 17,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "部分题目也可以用状态机 DP 解决。<br>补充题目：<br>- 输入一个长为 $n$ 的 $\\textit{prices}$ 数组，你需要返回一个长为 $n$ 的 $\\textit{answer}$ 数组，其中 $\\textit{answer}<a href=\"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/\">i]$ 表示删除 $\\textit{prices}[i]$，也就是禁止在第 $i$ 天买卖股票，在此约束下 [121. 买卖股票的最佳时机</a> 的答案。<br>",
                    "child": [
                        {
                            "title": "42. 接雨水",
                            "sort": 0,
                            "src": "/trapping-rain-water/",
                            "score": 1,
                            "solution": "https://www.bilibili.com/video/BV1Qg411q7ia/?t=3m05s",
                            "isPremium": false
                        },
                        {
                            "title": "123. 买卖股票的最佳时机 III",
                            "sort": 1,
                            "src": "/best-time-to-buy-and-sell-stock-iii/",
                            "score": 121,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1422. 分割字符串的最大得分",
                            "sort": 2,
                            "src": "/maximum-score-after-splitting-a-string/",
                            "score": 1238,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2256. 最小平均差",
                            "sort": 3,
                            "src": "/minimum-average-difference/",
                            "score": 1395,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1493. 删掉一个元素以后全为 1 的最长子数组",
                            "sort": 4,
                            "src": "/longest-subarray-of-1s-after-deleting-one-element/",
                            "score": 1423,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "845. 数组中的最长山脉",
                            "sort": 5,
                            "src": "/longest-mountain-in-array/",
                            "score": 1437,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2909. 元素和最小的山形三元组 II",
                            "sort": 6,
                            "src": "/minimum-sum-of-mountain-triplets-ii/",
                            "score": 1479,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2483. 商店的最少代价",
                            "sort": 7,
                            "src": "/minimum-penalty-for-a-shop/",
                            "score": 1495,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1525. 字符串的好分割数目",
                            "sort": 8,
                            "src": "/number-of-good-ways-to-split-a-string/",
                            "score": 1500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2874. 有序三元组中的最大值 II",
                            "sort": 9,
                            "src": "/maximum-value-of-an-ordered-triplet-ii/",
                            "score": 1583,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1031. 两个非重叠子数组的最大和",
                            "sort": 10,
                            "src": "/maximum-sum-of-two-non-overlapping-subarrays/",
                            "score": 1680,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "689. 三个无重叠子数组的最大和",
                            "sort": 11,
                            "src": "/maximum-sum-of-3-non-overlapping-subarrays/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2420. 找到所有好下标",
                            "sort": 12,
                            "src": "/find-all-good-indices/",
                            "score": 1695,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2100. 适合野炊的日子",
                            "sort": 13,
                            "src": "/find-good-days-to-rob-the-bank/",
                            "score": 1702,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "926. 将字符串翻转到单调递增",
                            "sort": 14,
                            "src": "/flip-string-to-monotone-increasing/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "334. 递增的三元子序列",
                            "sort": 15,
                            "src": "/increasing-triplet-subsequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2712. 使所有字符相等的最小成本",
                            "sort": 16,
                            "src": "/minimum-cost-to-make-all-characters-equal/",
                            "score": 1791,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1653. 使字符串平衡的最少删除次数",
                            "sort": 17,
                            "src": "/minimum-deletions-to-make-string-balanced/",
                            "score": 1794,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1186. 删除一次得到子数组最大和",
                            "sort": 18,
                            "src": "/maximum-subarray-sum-with-one-deletion/",
                            "score": 1799,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1477. 找两个和为目标值且不重叠的子数组",
                            "sort": 19,
                            "src": "/find-two-non-overlapping-sub-arrays-each-with-target-sum/",
                            "score": 1851,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2680. 最大或值",
                            "sort": 20,
                            "src": "/maximum-or/",
                            "score": 1912,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1671. 得到山形数组的最少删除次数",
                            "sort": 21,
                            "src": "/minimum-number-of-removals-to-make-mountain-array/",
                            "score": 1913,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "238. 除自身以外数组的乘积",
                            "sort": 22,
                            "src": "/product-of-array-except-self/",
                            "score": 2000,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1888. 使二进制字符串字符交替的最少反转次数",
                            "sort": 23,
                            "src": "/minimum-number-of-flips-to-make-the-binary-string-alternating/",
                            "score": 2006,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2906. 构造乘积矩阵",
                            "sort": 24,
                            "src": "/construct-product-matrix/",
                            "score": 2075,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2167. 移除所有载有违禁货物车厢所需的最少时间",
                            "sort": 25,
                            "src": "/minimum-time-to-remove-all-cars-containing-illegal-goods/",
                            "score": 2219,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2484. 统计回文子序列数目",
                            "sort": 26,
                            "src": "/count-palindromic-subsequences/",
                            "score": 2223,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2163. 删除元素后和的最小差值",
                            "sort": 27,
                            "src": "/minimum-difference-in-sums-after-removal-of-elements/",
                            "score": 2225,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2565. 最少得分子序列",
                            "sort": 28,
                            "src": "/subsequence-with-the-minimum-score/",
                            "score": 2432,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2552. 统计上升四元组",
                            "sort": 29,
                            "src": "/count-increasing-quadruplets/",
                            "score": 2433,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3003. 执行操作后的最大分割数量",
                            "sort": 30,
                            "src": "/maximize-the-number-of-partitions-after-operations/",
                            "score": 3039,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "487. 最大连续 1 的个数 II",
                            "sort": 31,
                            "src": "/max-consecutive-ones-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1746. 经过一次操作后的最大子数组和",
                            "sort": 32,
                            "src": "/maximum-subarray-sum-after-one-operation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "专题：把 X 变成 Y",
            "sort": 18,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "部分题目也可以用 BFS 解决。<br>",
                    "child": [
                        {
                            "title": "397. 整数替换",
                            "sort": 0,
                            "src": "/integer-replacement/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2998. 使 X 和 Y 相等的最少操作次数",
                            "sort": 1,
                            "src": "/minimum-number-of-operations-to-make-x-and-y-equal/",
                            "score": 1795,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2059. 转化数字的最小运算数",
                            "sort": 2,
                            "src": "/minimum-operations-to-convert-number/",
                            "score": 1850,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "991. 坏了的计算器",
                            "sort": 3,
                            "src": "/broken-calculator/",
                            "score": 1909,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1553. 吃掉 N 个橘子的最少天数",
                            "sort": 4,
                            "src": "/minimum-number-of-days-to-eat-n-oranges/",
                            "score": 2048,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "专题：跳跃游戏",
            "sort": 19,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1306. 跳跃游戏 III",
                            "sort": 0,
                            "src": "/jump-game-iii/",
                            "score": 1397,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2770. 达到末尾下标所需的最大跳跃次数",
                            "sort": 1,
                            "src": "/maximum-number-of-jumps-to-reach-the-last-index/",
                            "score": 1533,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "403. 青蛙过河",
                            "sort": 2,
                            "src": "/frog-jump/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1340. 跳跃游戏 V",
                            "sort": 3,
                            "src": "/jump-game-v/",
                            "score": 1866,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1871. 跳跃游戏 VII",
                            "sort": 4,
                            "src": "/jump-game-vii/",
                            "score": 1896,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1696. 跳跃游戏 VI",
                            "sort": 5,
                            "src": "/jump-game-vi/",
                            "score": 1954,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "975. 奇偶跳",
                            "sort": 6,
                            "src": "/odd-even-jump/",
                            "score": 2079,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1654. 到家的最少跳跃次数",
                            "sort": 7,
                            "src": "/minimum-jumps-to-reach-home/",
                            "score": 2124,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 09. 最小跳跃次数",
                            "sort": 8,
                            "src": "/zui-xiao-tiao-yue-ci-shu/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 20. 快速公交",
                            "sort": 9,
                            "src": "/meChtZ/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "656. 金币路径",
                            "sort": 10,
                            "src": "/coin-path/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2297. 跳跃游戏 VIII",
                            "sort": 11,
                            "src": "/jump-game-viii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "其他 DP",
            "sort": 20,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "823. 带因子的二叉树",
                            "sort": 0,
                            "src": "/binary-trees-with-factors/",
                            "score": 1900,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "940. 不同的子序列 II",
                            "sort": 1,
                            "src": "/distinct-subsequences-ii/",
                            "score": 1985,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "135. 分发糖果",
                            "sort": 2,
                            "src": "/candy/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "650. 两个键的键盘",
                            "sort": 3,
                            "src": "/2-keys-keyboard/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "467. 环绕字符串中唯一的子字符串",
                            "sort": 4,
                            "src": "/unique-substrings-in-wraparound-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2262. 字符串的总引力",
                            "sort": 5,
                            "src": "/total-appeal-of-a-string/",
                            "score": 2033,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "828. 统计子串中的唯一字符",
                            "sort": 6,
                            "src": "/count-unique-characters-of-all-substrings-of-a-given-string/",
                            "score": 2034,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2746. 字符串连接删减字母",
                            "sort": 7,
                            "src": "/decremental-string-concatenation/",
                            "score": 2126,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2930. 重新排列后包含指定子字符串的字符串数目",
                            "sort": 8,
                            "src": "/number-of-strings-which-can-be-rearranged-to-contain-substring/",
                            "score": 2227,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3041. 修改数组后最大化数组中的连续元素数目",
                            "sort": 9,
                            "src": "/maximize-consecutive-elements-in-an-array-after-modification/",
                            "score": 2231,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
                            "sort": 10,
                            "src": "/number-of-ways-to-reorder-array-to-get-same-bst/",
                            "score": 2288,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "818. 赛车",
                            "sort": 11,
                            "src": "/race-car/",
                            "score": 2392,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "920. 播放列表的数量",
                            "sort": 12,
                            "src": "/number-of-music-playlists/",
                            "score": 2400,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1388. 3n 块披萨",
                            "sort": 13,
                            "src": "/pizza-with-3n-slices/",
                            "score": 2410,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1987. 不同的好子序列数目",
                            "sort": 14,
                            "src": "/number-of-unique-good-subsequences/",
                            "score": 2422,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "903. DI 序列的有效排列",
                            "sort": 15,
                            "src": "/valid-permutations-for-di-sequence/",
                            "score": 2433,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2272. 最大波动的子字符串",
                            "sort": 16,
                            "src": "/substring-with-largest-variance/",
                            "score": 2516,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1896. 反转表达式值的最少操作次数",
                            "sort": 17,
                            "src": "/minimum-cost-to-change-the-final-value-of-expression/",
                            "score": 2532,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1531. 压缩字符串 II",
                            "sort": 18,
                            "src": "/string-compression-ii/",
                            "score": 2576,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "964. 表示数字的最少运算符",
                            "sort": 19,
                            "src": "/least-operators-to-express-number/",
                            "score": 2594,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1787. 使所有区间的异或结果为零",
                            "sort": 20,
                            "src": "/make-the-xor-of-all-segments-equal-to-zero/",
                            "score": 2640,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2060. 同源字符串检测",
                            "sort": 21,
                            "src": "/check-if-an-original-string-exists-given-two-encoded-strings/",
                            "score": 2804,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2809. 使数组和小于等于 x 的最少时间",
                            "sort": 22,
                            "src": "/minimum-time-to-make-array-sum-at-most-x/",
                            "score": 2979,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 14. 切分数组",
                            "sort": 23,
                            "src": "/qie-fen-shu-zu/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 36. 最多牌组数",
                            "sort": 24,
                            "src": "/Up5XYM/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 38. 守卫城堡",
                            "sort": 25,
                            "src": "/7rLGCR/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 43. 十字路口的交通",
                            "sort": 26,
                            "src": "/Y1VbOX/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 65. 舒适的湿度",
                            "sort": 27,
                            "src": "/3aqs1c/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2189. 建造纸牌屋的方法数",
                            "sort": 28,
                            "src": "/number-of-ways-to-build-house-of-cards/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2597. 美丽子集的数目",
                            "sort": 29,
                            "src": "/the-number-of-beautiful-subsets/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2638. 统计 K-Free 子集的总数",
                            "sort": 30,
                            "src": "/count-the-number-of-k-free-subsets/",
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
