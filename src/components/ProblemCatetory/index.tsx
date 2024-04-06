import React from "react"
import "./index.scss"

type ProblemCategory = {
    sort: Number;
    title: string;
    summary?: string;
    src?: string;
    isLeaf?: boolean;
    solution?: string;
    score?: Number;
    child?: ProblemCategory[];
}

interface ProblemCategoryProps {
    title?: string;
    summary?: string;
    data?: ProblemCategory[];
    className?: string;
    level?: number;
}

export const DP = [
    {
        title: "DP",
        sort: 0,
        child: [
            {
                title: "一、入门",
                sort: 0,
                child: [
                    {
                        title: "1.1 爬楼梯",
                        sort: 0,
                        isLeaf: true,
                        child: [
                            {
                                title: "70. 爬楼梯",
                                sort: 0,
                                src: "https://leetcode.cn/problems/climbing-stairs/",
                                solution: "https://leetcode.cn/problems/climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-7zm1/"
                            },
                            {
                                title: "746. 使用最小花费爬楼梯",
                                sort: 1,
                                src: "https://leetcode.cn/problems/min-cost-climbing-stairs/",
                                solution: "https://leetcode.cn/problems/min-cost-climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-j99e/",
                            },
                            {
                                title: "377. 组合总和 Ⅳ",
                                sort: 2,
                                src: "https://leetcode.cn/problems/combination-sum-iv/",
                            },
                            {
                                title: "2466. 统计构造好字符串的方案数",
                                src: "https://leetcode.cn/problems/count-ways-to-build-good-strings/",
                                score: 1857
                            },

                            {
                                title: "2533. 好二进制字符串的数量",
                                src: "https://leetcode.cn/problems/number-of-good-binary-strings/"
                            }
                        ]
                    },
                    {
                        title: "1.2 打家劫舍",
                        sort: 1,
                        isLeaf: true,
                        child: [
                            {
                                title: "198. 打家劫舍",
                                sort: 0,
                                src: "https://leetcode.cn/problems/house-robber/"
                            },
                            {
                                title: "740. 删除并获得点数",
                                sort: 0,
                                src: "https://leetcode.cn/problems/delete-and-earn/"
                            },
                            {
                                title: "2320. 统计放置房子的方式数",
                                sort: 0,
                                src: "https://leetcode.cn/problems/count-number-of-ways-to-place-houses/"
                            },
                            {
                                title: "213. 打家劫舍 II",
                                sort: 0,
                                src: "https://leetcode.cn/problems/house-robber-ii/"
                            },
                            {
                                title: "2597. 美丽子集的数目",
                                src: "https://leetcode.cn/problems/the-number-of-beautiful-subsets/",
                                sort: 0,
                            },
                            {
                                title: "2638. 统计 K-Free 子集的总数",
                                src: "https://leetcode.cn/problems/count-the-number-of-k-free-subsets/",
                                sort: 0,
                            }
                        ]
                    },
                    {
                        title: "1.3 最大子数组和（最大子段和）",
                        sort: 2,
                        isLeaf: true,
                        child: [
                            { title: "53. 最大子数组和", src: "https://leetcode.cn/problems/maximum-subarray/", sort: 0 },
                            { title: "2606. 找到最大开销的子字符串 1422", src: "https://leetcode.cn/problems/find-the-substring-with-maximum-cost/", sort: 0 },
                            { title: "1749. 任意子数组和的绝对值的最大值 1542", src: "https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/", sort: 0 },
                            { title: "1191. K 次串联后最大子数组之和 1748", src: "https://leetcode.cn/problems/k-concatenation-maximum-sum/", sort: 0 },
                            { title: "918. 环形子数组的最大和 1777", src: "https://leetcode.cn/problems/maximum-sum-circular-subarray/", sort: 0 },
                            { title: "2321. 拼接数组的最大分数 1791", src: "https://leetcode.cn/problems/maximum-score-of-spliced-array/", sort: 0 },
                            { title: "363. 矩形区域不超过 K 的最大数值和", src: "https://leetcode.cn/problems/max-sum-of-rectangle-no-larger-than-k/", sort: 0 },
                        ]
                    }
                ],
            },
            {
                title: "二、网格图",
                sort: 1,
                child: [
                    {
                        title: "2.1 基础",
                        isLeaf: true,
                        child: [
                            { title: "LCR 166. 珠宝的最高价值", src: "https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/", sort: 0 },
                            { title: "62. 不同路径", src: "https://leetcode.cn/problems/unique-paths/", sort: 0 },
                            { title: "63. 不同路径 II", src: "https://leetcode.cn/problems/unique-paths-ii/", sort: 0 },
                            { title: "64. 最小路径和", src: "https://leetcode.cn/problems/minimum-path-sum/", sort: 0 },
                            { title: "120. 三角形最小路径和", src: "https://leetcode.cn/problems/triangle/", sort: 0 },
                            { title: "931. 下降路径最小和 1573", src: "https://leetcode.cn/problems/minimum-falling-path-sum/", sort: 0 },
                            { title: "2684. 矩阵中移动的最大次数 1626", src: "https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid/", sort: 0 },
                            { title: "2304. 网格中的最小路径代价 1658", src: "https://leetcode.cn/problems/minimum-path-cost-in-a-grid/", sort: 0 },
                            { title: "1289. 下降路径最小和 II 1697", src: "https://leetcode.cn/problems/minimum-falling-path-sum-ii/", sort: 0 },
                        ]
                    },
                    {
                        title: "2.2 进阶",
                        isLeaf: true,
                        child: [
                            { title: "1594. 矩阵的最大非负积 1807", src: "https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/", sort: 0 },
                            { title: "1301. 最大得分的路径数目 1853", src: "https://leetcode.cn/problems/number-of-paths-with-max-score/", sort: 0 },
                            { title: "2435. 矩阵中和能被 K 整除的路径 1952", src: "https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k/", sort: 0 },
                            { title: "174. 地下城游戏", src: "https://leetcode.cn/problems/dungeon-game/", sort: 0 },
                            { title: "741. 摘樱桃", src: "https://leetcode.cn/problems/cherry-pickup/", sort: 0 },
                            { title: "1463. 摘樱桃 II 1957", src: "https://leetcode.cn/problems/cherry-pickup-ii/", sort: 0 },
                            { title: "329. 矩阵中的最长递增路径", src: "https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/", sort: 0 },
                            { title: "2328. 网格图中递增路径的数目 2001", src: "https://leetcode.cn/problems/number-of-increasing-paths-in-a-grid/", sort: 0 },
                            { title: "2267. 检查是否有合法括号字符串路径 2085", src: "https://leetcode.cn/problems/check-if-there-is-a-valid-parentheses-string-path/", sort: 0 },
                            { title: "1937. 扣分后的最大得分 2106", src: "https://leetcode.cn/problems/maximum-number-of-points-with-cost/", sort: 0 },
                            { title: "2510. 检查是否有路径经过相同数量的 0 和 1（会员题）", src: "https://leetcode.cn/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/", sort: 0 },
                        ]
                    }
                ]
            },
            {
                title: "三、 背包",
                sort: 2,
                child: [
                    {
                        title: "3.1 0-1 背包",
                        summary: "每个物品只能选一次。",
                        isLeaf: true,
                        child: [
                            { title: "2915. 和为目标值的最长子序列的长度 1659", src: "https://leetcode.cn/problems/length-of-the-longest-subsequence-that-sums-to-target/", sort: 0 },
                            { title: "416. 分割等和子集", src: "https://leetcode.cn/problems/partition-equal-subset-sum/", sort: 0 },
                            { title: "494. 目标和", src: "https://leetcode.cn/problems/target-sum/", sort: 0 },
                            { title: "2787. 将一个数字表示成幂的和的方案数 1818", src: "https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/", sort: 0 },
                            { title: "474. 一和零（二维）", src: "https://leetcode.cn/problems/ones-and-zeroes/", sort: 0 },
                            { title: "1049. 最后一块石头的重量 II 2092", src: "https://leetcode.cn/problems/last-stone-weight-ii/", sort: 0 },
                            { title: "1774. 最接近目标价格的甜点成本", src: "https://leetcode.cn/problems/closest-dessert-cost/", sort: 0 },
                            { title: "879. 盈利计划 2204", src: "https://leetcode.cn/problems/profitable-schemes/", sort: 0 },
                            { title: "3082. 求出所有子序列的能量和 ~2300", src: "https://leetcode.cn/problems/find-the-sum-of-the-power-of-all-subsequences/", sort: 0 },
                            { title: "956. 最高的广告牌 2381", src: "https://leetcode.cn/problems/tallest-billboard/", sort: 0 },
                            { title: "2518. 好分区的数目 2415", src: "https://leetcode.cn/problems/number-of-great-partitions/", sort: 0 },
                            { title: "2742. 给墙壁刷油漆 2425", src: "https://leetcode.cn/problems/painting-the-walls/", sort: 0 },
                            { title: "LCP 47. 入场安检", src: "https://leetcode.cn/problems/oPs9Bm/", sort: 0 },
                            { title: "2291. 最大股票收益（会员题）", src: "https://leetcode.cn/problems/maximum-profit-from-trading-stocks/", sort: 0 },
                            { title: "2431. 最大限度地提高购买水果的口味（会员题）", src: "https://leetcode.cn/problems/maximize-total-tastiness-of-purchased-fruits/", sort: 0 },
                        ]
                    },
                    {
                        title: "3.2 完全背包",
                        summary: "物品可以重复选，无个数限制。",
                        sort: 1,
                        isLeaf: true,
                        child: [
                            { title: "322. 零钱兑换", src: "https://leetcode.cn/problems/coin-change/", sort: 0 },
                            { title: "518. 零钱兑换 II", src: "https://leetcode.cn/problems/coin-change-ii/", sort: 0 },
                            { title: "279. 完全平方数", src: "https://leetcode.cn/problems/perfect-squares/", sort: 0 },
                            { title: "1449. 数位成本和为目标值的最大数字 1927 打印方案", src: "https://leetcode.cn/problems/form-largest-integer-with-digits-that-add-up-to-target/", sort: 0 },
                        ],
                    },
                    {
                        title: "3.3 多重背包",
                        summary: "物品可以重复选，有个数限制。",
                        isLeaf: true,
                        child: [
                            { title: "2585. 获得分数的方法数 1910", src: "https://leetcode.cn/problems/count-of-sub-multisets-with-bounded-sum/", sort: 0 },
                            { title: "2902. 和带限制的子多重集合的数目 2759", src: "", sort: 0 },
                        ]
                    },
                    {
                        title: "3.4 分组背包",
                        isLeaf: true,
                        summary: "同一组内的物品至多/恰好选一个。",
                        child: [
                            { title: "1155. 掷骰子等于目标和的方法数 1654", src: "https://leetcode.cn/problems/number-of-ways-to-earn-points/", sort: 0 },
                            { title: "1981. 最小化目标值与所选元素的差 2010", src: "", sort: "" },
                            { title: "2218. 从栈中取出 K 个硬币的最大面值和 2158", src: "", sort: "" },
                        ]
                    }
                ]
            },
            {
                title: "四、经典线性 DP",
                sort: 3,
                child: [
                    {
                        title: "4.1 最长公共子序列（LCS）",
                        isLeaf: true,
                        summary: `讲解<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1TM4y1o7ug/">最长公共子序列 编辑距离</a>`,
                        child: [
                            { title: "1143. 最长公共子序列", src: "https://leetcode.cn/problems/longest-common-subsequence/", sort: 0 },
                            { title: "583. 两个字符串的删除操作", src: "https://leetcode.cn/problems/delete-operation-for-two-strings/", sort: 0 },
                            { title: "712. 两个字符串的最小 ASCII 删除和", src: "https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings/", sort: 0 },
                            { title: "72. 编辑距离", src: "https://leetcode.cn/problems/edit-distance/", sort: 0 },
                            { title: "97. 交错字符串", src: "https://leetcode.cn/problems/interleaving-string/", sort: 0 },
                            { title: "115. 不同的子序列", src: "https://leetcode.cn/problems/distinct-subsequences/", sort: 0 },
                            { title: "1035. 不相交的线 1806", src: "https://leetcode.cn/problems/uncrossed-lines/", sort: 0 },
                            { title: "1458. 两个子序列的最大点积 1824", src: "https://leetcode.cn/problems/max-dot-product-of-two-subsequences/", sort: 0 },
                            { title: "1092. 最短公共超序列 1977", src: "https://leetcode.cn/problems/shortest-common-supersequence/", sort: 0 },
                            { title: "1639. 通过给定词典构造目标字符串的方案数 2082", src: "https://leetcode.cn/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/", sort: 0 },
                            { title: "44. 通配符匹配", src: "https://leetcode.cn/problems/wildcard-matching/", sort: 0 },
                            { title: "10. 正则表达式匹配", src: "https://leetcode.cn/problems/regular-expression-matching/", sort: 0 },
                        ]
                    },
                    {
                        title: '4.2 最长递增子序列', isLeaf: true,
                        summary: `讲解: <a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ub411Q7sB/">最长递增子序列</a>`,
                        child: [
                            { title: "300. 最长递增子序列", src: "https://leetcode.cn/problems/longest-increasing-subsequence/" },
                            { title: "673. 最长递增子序列的个数", src: "https://leetcode.cn/problems/number-of-longest-increasing-subsequence/" },
                            { title: "2826. 将三个组排序 1721", src: "https://leetcode.cn/problems/sorting-three-groups/" },
                            { title: "1671. 得到山形数组的最少删除次数 1913", src: "https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/" },
                            { title: "1964. 找出到每个位置为止最长的有效障碍赛跑路线 1933", src: "https://leetcode.cn/problems/find-the-longest-valid-obstacle-course-at-each-position/" },
                            { title: "1626. 无矛盾的最佳球队 2027", src: "https://leetcode.cn/problems/best-team-with-no-conflicts/" },
                            { title: "354. 俄罗斯套娃信封问题（二维 LIS）", src: "https://leetcode.cn/problems/russian-doll-envelopes/" },
                            { title: "1691. 堆叠长方体的最大高度 2172", src: "https://leetcode.cn/problems/maximum-height-by-stacking-cuboids/" },
                            { title: "960. 删列造序 III 2247", src: "https://leetcode.cn/problems/delete-columns-to-make-sorted-iii/" },
                            { title: "2407. 最长递增子序列 II 2280", src: "https://leetcode.cn/problems/longest-increasing-subsequence-ii/" },
                            { title: "1187. 使数组严格递增 2316", src: "https://leetcode.cn/problems/make-array-strictly-increasing/" },
                            { title: "1713. 得到子序列的最少操作次数 2351", src: "https://leetcode.cn/problems/minimum-operations-to-make-a-subsequence/" },
                        ]
                    },
                ]
            },
            {
                title: "五. 状态机 DP",
                sort: 3,
                isLeaf: false,
                child: [
                    {
                        title: "",
                        isLeaf: true,
                        summary: `<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ho4y1W7QK/">状态机 DP讲解</a> `,
                        child: [
                            { title: "121. 买卖股票的最佳时机", src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/", sort: 0 },
                            { title: "122. 买卖股票的最佳时机 II", src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/", sort: 0 },
                            { title: "123. 买卖股票的最佳时机 III", src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/", sort: 0 },
                            { title: "188. 买卖股票的最佳时机 IV", src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/", sort: 0 },
                            { title: "309. 买卖股票的最佳时机含冷冻期", src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/", sort: 0 },
                            { title: "714. 买卖股票的最佳时机含手续费", src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/", sort: 0 },
                            { title: "1493. 删掉一个元素以后全为 1 的最长子数组 1423", src: "https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/", sort: 0 },
                            { title: "1395. 统计作战单位数", src: "https://leetcode.cn/problems/count-number-of-teams/", sort: 0 },
                            { title: "2745. 构造最长的新字符串 1607", src: "https://leetcode.cn/problems/construct-the-longest-new-string/", sort: 0 },
                            { title: "2222. 选择建筑的方案数 1657", src: "https://leetcode.cn/problems/number-of-ways-to-select-buildings/", sort: 0 },
                            { title: "376. 摆动序列", src: "https://leetcode.cn/problems/wiggle-subsequence/", sort: 0 },
                            { title: "1567. 乘积为正数的最长子数组长度 1710", src: "https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/", sort: 0 },
                            { title: "1594. 矩阵的最大非负积", src: "https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/", sort: 0 },
                            { title: "2826. 将三个组排序 1721", src: "https://leetcode.cn/problems/sorting-three-groups/", sort: 0 },
                            { title: "2786. 访问数组中的位置使分数最大 1733", src: "https://leetcode.cn/problems/visit-array-positions-to-maximize-score/", sort: 0 },
                            { title: "1262. 可被三整除的最大和 1762", src: "https://leetcode.cn/problems/greatest-sum-divisible-by-three/", sort: 0 },
                            { title: "1363. 形成三的最大倍数", src: "https://leetcode.cn/problems/largest-multiple-of-three/", sort: 0 },
                            { title: "1911. 最大子序列交替和 1786", src: "https://leetcode.cn/problems/maximum-alternating-subsequence-sum/", sort: 0 },
                            { title: "2771. 构造最长非递减子数组 1792", src: "https://leetcode.cn/problems/longest-non-decreasing-subarray-from-two-arrays/", sort: 0 },
                            { title: "1186. 删除一次得到子数组最大和 1799", src: "https://leetcode.cn/problems/maximum-subarray-sum-with-one-deletion/", sort: 0 },
                            { title: "935. 骑士拨号器", src: "https://leetcode.cn/problems/knight-dialer/", sort: 0 },
                            { title: "2919. 使数组变美的最小增量运算数 2031", src: "https://leetcode.cn/problems/minimum-increment-operations-to-make-array-beautiful/", sort: 0 },
                            { title: "801. 使序列递增的最小交换次数 2066", src: "https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/", sort: 0 },
                            { title: "1955. 统计特殊子序列的数目 2125", src: "https://leetcode.cn/problems/count-number-of-special-subsequences/", sort: 0 },
                            { title: "3068. 最大节点价值之和 ~2300", src: "https://leetcode.cn/problems/find-the-maximum-sum-of-node-values/", sort: 0 },
                            { title: "LCP 19. 秋叶收藏集", src: "https://leetcode.cn/problems/UlBDOe/", sort: 0 },
                            { title: "276. 栅栏涂色（会员题）", src: "https://leetcode.cn/problems/paint-fence/", sort: 0 },
                            { title: "1746. 经过一次操作后的最大子数组和（会员题）", src: "https://leetcode.cn/problems/maximum-subarray-sum-after-one-operation/", sort: 0 },
                            { title: "2036. 最大交替子数组和（会员题）", src: "https://leetcode.cn/problems/maximum-alternating-subarray-sum/", sort: 0 },
                            { title: "2361. 乘坐火车路线的最少费用（会员题）", src: "https://leetcode.cn/problems/minimum-costs-using-the-train-line/", sort: 0 },
                        ]
                    }
                ]
            },
            {
                title: "六. 划分型 DP",
                child: [
                    {
                        title: "6.1 判定能否划分",
                        isLeaf: true,
                        child: [
                            { title: "2369. 检查数组是否存在有效划分 1780", src: "https://leetcode.cn/problems/check-if-there-is-a-valid-partition-for-the-array/", sort: 0 },
                            { title: "139. 单词拆分", src: "https://leetcode.cn/problems/word-break/", sort: 0 },
                        ]
                    },
                    {
                        title: "6.2 计算划分个数",
                        summary: `计算最少（最多）可以划分出的子数组个数、划分方案数等。`,
                        isLeaf: true,
                        child: [
                            { title: "132. 分割回文串 II", src: "https://leetcode.cn/problems/palindrome-partitioning-ii/" },
                            { title: "2707. 字符串中的额外字符 1736", src: "https://leetcode.cn/problems/extra-characters-in-a-string/" },
                            { title: "2767. 将字符串分割为最少的美丽子字符串 1865", src: "https://leetcode.cn/problems/partition-string-into-minimum-beautiful-substrings/" },
                            { title: "91. 解码方法", src: "https://leetcode.cn/problems/decode-ways/" },
                            { title: "639. 解码方法 II", src: "https://leetcode.cn/problems/decode-ways-ii/" },
                            { title: "LCR 165. 解密数字", src: "https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/" },
                            { title: "1416. 恢复数组 1920", src: "https://leetcode.cn/problems/restore-the-array/" },
                            { title: "2472. 不重叠回文子字符串的最大数目 2013", src: "https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/" },
                            { title: "1105. 填充书架 2014", src: "https://leetcode.cn/problems/filling-bookcase-shelves/" },
                            { title: "2547. 拆分数组的最小代价 2020", src: "https://leetcode.cn/problems/minimum-cost-to-split-an-array/" },
                            { title: "2430. 对字母串可执行的最大删除数 2102", src: "https://leetcode.cn/problems/maximum-deletions-on-a-string/" },
                            { title: "2463. 最小移动总距离 2454", src: "https://leetcode.cn/problems/minimum-total-distance-traveled/" },
                            { title: "2977. 转换字符串的最小成本 II 2696", src: "https://leetcode.cn/problems/minimum-cost-to-convert-string-ii/" },
                            { title: "2052. 将句子分隔成行的最低成本（会员题）", src: "https://leetcode.cn/problems/minimum-cost-to-separate-sentence-into-rows/" },
                            { title: "2464. 有效分割中的最少子数组数目（会员题）", src: "https://leetcode.cn/problems/minimum-subarrays-in-a-valid-split/" },
                        ],
                    },
                    {
                        title: "6.3 约束划分个数",
                        summary: `<p>将数组分成（恰好/至多）k 个连续子数组，计算与这些子数组有关的最优值。</p><p>一般定义 f[i][j] 表示将长为 j 的前缀 a[:j] 分成 i 个连续子数组所得到的最优解。</p><p>枚举最后一个子数组的左端点 L, 从 f[i−1][L] 转移到 f[i][j]，并考虑 a[L:j] 对最优解的影响。</p>`,
                        isLeaf: true,
                        child: [
                            { title: "410. 分割数组的最大值", src: "https://leetcode.cn/problems/split-array-largest-sum/" },
                            { title: "1043. 分隔数组以得到最大和 1916", src: "https://leetcode.cn/problems/partition-array-for-maximum-sum/" },
                            { title: "1745. 分割回文串 IV 1925", src: "https://leetcode.cn/problems/palindrome-partitioning-iv/" },
                            { title: "813. 最大平均值和的分组 1937", src: "https://leetcode.cn/problems/largest-sum-of-averages/" },
                            { title: "1278. 分割回文串 III 1979", src: "https://leetcode.cn/problems/palindrome-partitioning-iii/" },
                            { title: "1335. 工作计划的最低难度 2035", src: "https://leetcode.cn/problems/minimum-difficulty-of-a-job-schedule/" },
                            { title: "1473. 粉刷房子 III 2056", src: "https://leetcode.cn/problems/paint-house-iii/" },
                            { title: "1478. 安排邮筒 2190", src: "https://leetcode.cn/problems/allocate-mailboxes/" },
                            { title: "1959. K 次调整数组大小浪费的最小总空间 2310 *转换", src: "https://leetcode.cn/problems/minimum-total-space-wasted-with-k-resizing-operations/" },
                            { title: "2478. 完美分割的方案数 2344", src: "https://leetcode.cn/problems/number-of-beautiful-partitions/" },
                            { title: "3077. K 个不相交子数组的最大能量值", src: "https://leetcode.cn/problems/maximum-strength-of-k-disjoint-subarrays/" },
                            { title: "2911. 得到 K 个半回文串的最少修改次数 2608", src: "https://leetcode.cn/problems/minimum-changes-to-make-k-semi-palindromes/" },
                        ]
                    },
                    {
                        title: "6.4 不相交区间",
                        isLeaf: true,
                        child: [
                            { title: "2830. 销售利润最大化 1851", src: "https://leetcode.cn/problems/maximize-the-profit-as-the-salesman/" },
                            { title: "2008. 出租车的最大盈利 1872", src: "https://leetcode.cn/problems/maximum-earnings-from-taxi/" },
                            { title: "1235. 规划兼职工作 2023", src: "https://leetcode.cn/problems/maximum-profit-in-job-scheduling/" },
                            { title: "1751. 最多可以参加的会议数目 II 2041", src: "https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended-ii/" },
                        ]
                    }
                ],
            },
            {
                title: "七、其它线性 DP",
                child: [
                    {
                        title: '7.1 一维',
                        isLeaf: true,
                        summary: '发生在前缀/后缀之间的转移，例如从 f[i - 1] 转移到 f[i] 或 f[j] 转移到 f[i]',
                        child: [
                            { title: "2944. 购买水果需要的最少金币数 1709", src: "https://leetcode.cn/problems/minimum-number-of-coins-for-fruits/" },
                            { title: "2140. 解决智力问题 1709", src: "https://leetcode.cn/problems/solving-questions-with-brainpower/" },
                            { title: "983. 最低票价 1786", src: "https://leetcode.cn/problems/minimum-cost-for-tickets/" },
                            { title: "2901. 最长相邻不相等子序列 II 1899", src: "https://leetcode.cn/problems/longest-unequal-adjacent-groups-subsequence-ii/" },
                            { title: "2896. 执行操作使两个字符串相等 2172", src: "https://leetcode.cn/problems/apply-operations-to-make-two-strings-equal/" },
                            { title: "2167. 移除所有载有违禁货物车厢所需的最少时间 2219", src: "https://leetcode.cn/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/" },
                            { title: "2188. 完成比赛的最少时间 2315", src: "https://leetcode.cn/problems/minimum-time-to-finish-the-race/" },
                            { title: "1259. 不相交的握手（会员题）", src: "https://leetcode.cn/problems/handshakes-that-dont-cross/" },
                        ]
                    },
                    {
                        title: "7.2 特殊子序列",
                        isLeaf: true,
                        child: [
                            { title: "2501. 数组中最长的方波 1480", src: "https://leetcode.cn/problems/longest-square-streak-in-an-array/" },
                            { title: "1218. 最长定差子序列 1597", src: "https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference/" },
                            { title: "1027. 最长等差数列 1759", src: "https://leetcode.cn/problems/longest-arithmetic-subsequence/" },
                            { title: "873. 最长的斐波那契子序列的长度 1911", src: "https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/" },
                            { title: "446. 等差数列划分 II - 子序列", src: "https://leetcode.cn/problems/arithmetic-slices-ii-subsequence/" },
                            { title: "1048. 最长字符串链", src: "https://leetcode.cn/problems/longest-string-chain/" },
                        ]
                    },
                    {
                        title: "7.3 矩阵快速幂优化",
                        summary: `除了 2851 题必须用矩阵快速幂优化以外，其余题目都可以用线性 DP 做出。`,
                        isLeaf: true,
                        child: [
                            {title: "70. 爬楼梯",  src: "https://leetcode.cn/problems/climbing-stairs/"},
                            {title: "509. 斐波那契数",  src: "https://leetcode.cn/problems/fibonacci-number/"},
                            {title: "1137. 第 N 个泰波那契数",  src: "https://leetcode.cn/problems/n-th-tribonacci-number/"},
                            {title: "1220. 统计元音字母序列的数目",  src: "https://leetcode.cn/problems/count-vowels-permutation/"},
                            {title: "552. 学生出勤记录 II",  src: "https://leetcode.cn/problems/student-attendance-record-ii/"},
                            {title: "790. 多米诺和托米诺平铺",  src: "https://leetcode.cn/problems/domino-and-tromino-tiling/"},
                            {title: "2851. 字符串转换 2858",  src: "https://leetcode.cn/problems/string-transformation/"},
                        ]
                    },
                    {
                        title: "7.4 多维",
                        isLeaf: true,
                        child: [
                            { title: "2400. 恰好移动 k 步到达某一位置的方法数目 1751", src: "https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/" },
                            { title: "2370. 最长理想子序列 1835", src: "https://leetcode.cn/problems/longest-ideal-subsequence/" },
                            { title: "1269. 停在原地的方案数 1854", src: "https://leetcode.cn/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/" },
                            { title: "576. 出界的路径数", src: "https://leetcode.cn/problems/out-of-boundary-paths/" },
                            { title: "403. 青蛙过河", src: "https://leetcode.cn/problems/frog-jump/" },
                            { title: "1223. 掷骰子模拟 2008", src: "https://leetcode.cn/problems/dice-roll-simulation/" },
                            { title: "1320. 二指输入的的最小距离 2028", src: "https://leetcode.cn/problems/minimum-distance-to-type-a-word-using-two-fingers/" },
                            { title: "1575. 统计所有可行路径 2055", src: "https://leetcode.cn/problems/count-all-possible-routes/" },
                            { title: "2318. 不同骰子序列的数目 2090", src: "https://leetcode.cn/problems/number-of-distinct-roll-sequences/" },
                            { title: "2088. 统计农场中肥沃金字塔的数目 2105", src: "https://leetcode.cn/problems/count-fertile-pyramids-in-a-land/" },
                            { title: "2209. 用地毯覆盖后的最少白色砖块 2106", src: "https://leetcode.cn/problems/minimum-white-tiles-after-covering-with-carpets/" },
                            { title: "1444. 切披萨的方案数 2127", src: "https://leetcode.cn/problems/number-of-ways-of-cutting-a-pizza/" },
                            { title: "1420. 生成数组 2176", src: "https://leetcode.cn/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/" },
                            { title: "629. K 个逆序对数组", src: "https://leetcode.cn/problems/k-inverse-pairs-array/" },
                            { title: "1866. 恰有 K 根木棍可以看到的排列数目 2333", src: "https://leetcode.cn/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/" },
                            { title: "2312. 卖木头块 2363", src: "https://leetcode.cn/problems/selling-pieces-of-wood/" },
                            { title: "887. 鸡蛋掉落 2377", src: "https://leetcode.cn/problems/super-egg-drop/" },
                            { title: "1884. 鸡蛋掉落-两枚鸡蛋", src: "https://leetcode.cn/problems/egg-drop-with-2-eggs-and-n-floors/" },
                            { title: "1388. 3n 块披萨 2410", src: "https://leetcode.cn/problems/pizza-with-3n-slices/" },
                            { title: "1900. 最佳运动员的比拼回合 2455", src: "https://leetcode.cn/problems/the-earliest-and-latest-rounds-where-players-compete/" },
                            { title: "1883. 准时抵达会议现场的最小跳过休息次数 2588 避免浮点运算的技巧", src: "https://leetcode.cn/problems/minimum-skips-to-arrive-at-meeting-on-time/" },
                            { title: "LCP 57. 打地鼠", src: "https://leetcode.cn/problems/ZbAuEH/" },
                            { title: "256. 粉刷房子（会员题）", src: "https://leetcode.cn/problems/paint-house/" },
                            { title: "265. 粉刷房子 II（会员题）", src: "https://leetcode.cn/problems/paint-house-ii/" },
                            { title: "568. 最大休假天数（会员题）", src: "https://leetcode.cn/problems/maximum-vacation-days/" },
                            { title: "1692. 计算分配糖果的不同方式（会员题）", src: "https://leetcode.cn/problems/count-ways-to-distribute-candies/" },
                            { title: "2143. 在两个数组的区间中选取数字（会员题）", src: "https://leetcode.cn/problems/choose-numbers-from-two-arrays-in-range/" },
                        ]
                    }
                ],
            },
            {
                title: "八、区间 DP",
                summary: `讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1Gs4y1E7EU/">区间 DP</a>从数组的左右两端不断缩短，求解关于某段下标区间的最优值。
                一般定义f[i][j] 表示下标区间 [i,j] 的最优值。`,
                child: [
                    {
                        title: '8.1 最长回文子序列',
                        isLeaf: true,
                        child: [
                            { title: "516. 最长回文子序列", src: "https://leetcode.cn/problems/count-different-palindromic-subsequences/" },
                            { title: "730. 统计不同回文子序列", src: "https://leetcode.cn/problems/count-different-palindromic-subsequences/" },
                            { title: "1312. 让字符串成为回文串的最少插入次数 1787", src: "https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/" },
                            { title: "1771. 由子序列构造的最长回文串的长度 2182", src: "https://leetcode.cn/problems/maximize-palindrome-length-from-subsequences/" },
                            { title: "1682. 最长回文子序列 II（会员题）", src: "https://leetcode.cn/problems/longest-palindromic-subsequence-ii/" },
                            { title: "1216. 验证回文串 III（会员题）", src: "https://leetcode.cn/problems/valid-palindrome-iii/" },
                            { title: "1246. 删除回文子数组（会员题）", src: "https://leetcode.cn/problems/palindrome-removal/" },
                        ]
                    },
                    {
                        title: '8.2 其它区间 DP',
                        isLeaf: true,
                        child: [
                            { title: "5. 最长回文子串", src: "https://leetcode.cn/problems/longest-palindromic-substring/" },
                            { title: "3040. 相同分数的最大操作数目 II 1709", src: "https://leetcode.cn/problems/maximum-number-of-operations-with-the-same-score-ii/" },
                            { title: "375. 猜数字大小 II", src: "https://leetcode.cn/problems/guess-number-higher-or-lower-ii/" },
                            { title: "1130. 叶值的最小代价生成树 1919", src: "https://leetcode.cn/problems/minimum-cost-tree-from-leaf-values/" },
                            { title: "96. 不同的二叉搜索树", src: "https://leetcode.cn/problems/unique-binary-search-trees/" },
                            { title: "1770. 执行乘法运算的最大分数 2068", src: "https://leetcode.cn/problems/maximum-score-from-performing-multiplication-operations/" },
                            { title: "1547. 切棍子的最小成本 2116", src: "https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/" },
                            { title: "1039. 多边形三角剖分的最低得分 2130", src: "https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/solution/shi-pin-jiao-ni-yi-bu-bu-si-kao-dong-tai-aty6/" },
                            { title: "1000. 合并石头的最低成本 2423", src: "https://leetcode.cn/problems/minimum-cost-to-merge-stones/" },
                            { title: "2019. 解出数学表达式的学生分数 2584", src: "https://leetcode.cn/problems/the-score-of-students-solving-math-expression/" },
                            { title: "87. 扰乱字符串", src: "https://leetcode.cn/problems/scramble-string/" },
                            { title: "312. 戳气球", src: "https://leetcode.cn/problems/burst-balloons/" },
                            { title: "664. 奇怪的打印机", src: "https://leetcode.cn/problems/strange-printer/" },
                            { title: "546. 移除盒子 同 CF1107E，可能是力扣上最难的 DP", src: "https://leetcode.cn/problems/remove-boxes/" },
                            { title: "471. 编码最短长度的字符串（会员题）", src: "https://leetcode.cn/problems/encode-string-with-shortest-length/" },
                            { title: "3018. 可处理的最大删除操作数 I（会员题）", src: "https://leetcode.cn/problems/maximum-number-of-removal-queries-that-can-be-processed-i/" },
                        ]
                    }
                ]
            },
            {
                title: "九、状态压缩 DP（状压 DP）",
                child: [
                    {
                        title: "9.1 排列型 ① 相邻无关",
                        isLeaf: true,
                        child: [
                            {title: "526. 优美的排列", src: "https://leetcode.cn/problems/beautiful-arrangement/"},
                            {title: "1879. 两个数组最小的异或值之和 2145", src: "https://leetcode.cn/problems/minimum-xor-sum-of-two-arrays/"},
                            {title: "2850. 将石头分散到网格图的最少移动次数", src: "https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/"},
                            {title: "1947. 最大兼容性评分和", src: "https://leetcode.cn/problems/maximum-compatibility-score-sum/"},
                            {title: "1799. N 次操作后的最大分数和", src: "https://leetcode.cn/problems/maximize-score-after-n-operations/"},
                            {title: "2172. 数组的最大与和 2392", src: "https://leetcode.cn/problems/maximum-and-sum-of-array/"},
                            {title: "1066. 校园自行车分配 II（会员题）", src: "https://leetcode.cn/problems/campus-bikes-ii/"},
                            {title: "2992. 自整除排列的数量（会员题）", src: "https://leetcode.cn/problems/number-of-self-divisible-permutations/"},
                            {title: "2403. 杀死所有怪物的最短时间（会员题）", src: "https://leetcode.cn/problems/minimum-time-to-kill-all-monsters/"},
                        ]
                    },
                    {
                        title: "排列型 ② 相邻相关",
                        isLeaf: true,
                        child: [
                            {title: "996. 正方形数组的数目 1932", src: "https://leetcode.cn/problems/number-of-squareful-arrays/"},
                            {title: "2741. 特别的排列 2021", src: "https://leetcode.cn/problems/special-permutations/"},
                            {title: "1681. 最小不兼容性 2390", src: "https://leetcode.cn/problems/minimum-incompatibility/"},
                        ]
                    },
                    {
                        title: "9.3 旅行商问题（TSP）",
                        isLeaf: true,
                        child: [
                            {title: "943. 最短超级串 2186", src: "https://leetcode.cn/problems/find-the-shortest-superstring/"},
                            {title: "847. 访问所有节点的最短路径 2201", src: "https://leetcode.cn/problems/shortest-path-visiting-all-nodes/"},
                            {title: "LCP 13. 寻宝", src: "https://leetcode.cn/problems/xun-bao/"},
                            {title: "2247. K 条高速公路的最大旅行费用（会员题）", src: "https://leetcode.cn/problems/maximum-cost-of-trip-with-k-highways/"},
                        ]
                    },
                ]
            }
        ]
    }
] as ProblemCategory[];

function ProblemCategory({ title, summary, data, className = "", level = 0 }: ProblemCategoryProps) {
    return <div className={`pb-container p-2 level-${level}` + className}>
        {<h3 className="title p-2">{title}</h3>}
        {summary && <p className="p-2 rounded summary" dangerouslySetInnerHTML={{__html: summary}}></p>}
        <div className={`level-${level + 1}`}>
            {data && data.map((item) => {
                return <div className={`pb-container p-2 level-${level + 2}`}>
                    {item.isLeaf ? <ProblemCategoryList data={item} className={`leaf`} />
                        : (item.child && item.child?.map((item) => <ProblemCategory level={level + 3} title={item.title} data={item.child} summary={item.summary} />))}
                </div>
            })}
        </div>
    </div>
}

function ProblemCategoryList({ data, className = "" }: { data: ProblemCategory, className?: string }) {
    return <div className="shadow rounded p-2 leaf">
        <h3 className="title">{data.title}</h3>
        {data.summary && <p className="p-2 rounded summary" dangerouslySetInnerHTML={{__html: data.summary}}></p>}
        <ul className={`list p-2 ${data.child && data.child.length >= 12? 'col2': ''}`}>
            {data.child && data.child.map((item) => <li><a href={item.src} target="_blank">{item.title}</a></li>)}
        </ul>
    </div>
}

export default ProblemCategory
