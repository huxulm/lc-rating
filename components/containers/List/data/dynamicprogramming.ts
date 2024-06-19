import ProblemCategory from "@components/ProblemCatetory";

export default {
  title: "DP",
  original_src: "https://leetcode.cn/circle/discuss/tXLS3i/",
  sort: 0,
  child: [
    {
      title: "一、入门",
      sort: 0,
      summary:
        '<p class="p-2">记忆化搜索是新手村神器（甚至可以用到游戏后期），推荐先看: <a href="https://www.bilibili.com/video/BV1Xj411K7oF/">动态规划入门：从记忆化搜索到递推</a>。\n        <br>但记忆化搜索并不是万能的，某些题目只有写成递推，才能结合数据结构等来优化时间复杂度，多数题目还可以优化空间复杂度。\n        <br>所以尽量在写完记忆化搜索后，把递推的代码也写一下。熟练之后直接写递推也可以。</p>',
      child: [
        {
          title: "1.1 爬楼梯",
          sort: 0,
          isLeaf: true,
          child: [
            { title: "70. 爬楼梯", src: "/climbing-stairs/" },
            {
              title: "746. 使用最小花费爬楼梯",
              src: "/min-cost-climbing-stairs/",
              score: 1359,
            },
            { title: "377. 组合总和 Ⅳ", src: "/combination-sum-iv/" },
            {
              title: "2466. 统计构造好字符串的方案数",
              src: "/count-ways-to-build-good-strings/",
              score: 1695,
            },
            {
              title: "2266. 统计打字方案数",
              src: "/count-number-of-texts/",
              score: 1857,
            },
            {
              title: "2533. 好二进制字符串的数量",
              src: "/number-of-good-binary-strings/",
            },
          ],
        },
        {
          title: "1.2 打家劫舍",
          sort: 1,
          isLeaf: true,
          child: [
            { title: "198. 打家劫舍", src: "/house-robber/" },
            { title: "740. 删除并获得点数", src: "/delete-and-earn/" },
            {
              title: "2320. 统计放置房子的方式数",
              src: "/count-number-of-ways-to-place-houses/",
              score: 1608,
            },
            { title: "213. 打家劫舍 II", src: "/house-robber-ii/" },
          ],
        },
        {
          title: "1.3 最大子数组和（最大子段和）",
          sort: 2,
          isLeaf: true,
          child: [
            { title: "53. 最大子数组和", src: "/maximum-subarray/" },
            {
              title: "2606. 找到最大开销的子字符串",
              src: "/find-the-substring-with-maximum-cost/",
              score: 1423,
            },
            {
              title: "1749. 任意子数组和的绝对值的最大值",
              src: "/maximum-absolute-sum-of-any-subarray/",
              score: 1542,
            },
            {
              title: "1191. K 次串联后最大子数组之和",
              src: "/k-concatenation-maximum-sum/",
              score: 1748,
            },
            {
              title: "918. 环形子数组的最大和",
              src: "/maximum-sum-circular-subarray/",
              score: 1778,
            },
            {
              title: "2321. 拼接数组的最大分数",
              src: "/maximum-score-of-spliced-array/",
              score: 1791,
            },
            {
              title: "152. 乘积最大子数组",
              src: "/maximum-product-subarray/",
            },
          ],
        },
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
            {
              title: "LCR 166. 珠宝的最高价值",
              src: "/li-wu-de-zui-da-jie-zhi-lcof/",
            },
            { title: "62. 不同路径", src: "/unique-paths/" },
            { title: "63. 不同路径 II", src: "/unique-paths-ii/" },
            { title: "64. 最小路径和", src: "/minimum-path-sum/" },
            { title: "120. 三角形最小路径和", src: "/triangle/" },
            {
              title: "931. 下降路径最小和",
              src: "/minimum-falling-path-sum/",
              score: 1574,
            },
            {
              title: "2684. 矩阵中移动的最大次数",
              src: "/maximum-number-of-moves-in-a-grid/",
              score: 1626,
            },
            {
              title: "2304. 网格中的最小路径代价",
              src: "/minimum-path-cost-in-a-grid/",
              score: 1659,
            },
            {
              title: "1289. 下降路径最小和 II",
              src: "/minimum-falling-path-sum-ii/",
              score: 1698,
            },
          ],
        },
        {
          title: "2.2 进阶",
          isLeaf: true,
          child: [
            {
              title: "1594. 矩阵的最大非负积",
              src: "/maximum-non-negative-product-in-a-matrix/",
              score: 1808,
            },
            {
              title: "3148. 矩阵中的最大得分",
              src: "/maximum-difference-score-in-a-grid/",
              score: 1820,
            },
            {
              title: "1301. 最大得分的路径数目",
              src: "/number-of-paths-with-max-score/",
              score: 1854,
            },
            {
              title: "2435. 矩阵中和能被 K 整除的路径",
              src: "/paths-in-matrix-whose-sum-is-divisible-by-k/",
              score: 1952,
            },
            { title: "174. 地下城游戏", src: "/dungeon-game/" },
            {
              title: "329. 矩阵中的最长递增路径",
              src: "/longest-increasing-path-in-a-matrix/",
            },
            {
              title: "2328. 网格图中递增路径的数目",
              src: "/number-of-increasing-paths-in-a-grid/",
              score: 2002,
            },
            {
              title: "2267. 检查是否有合法括号字符串路径",
              src: "/check-if-there-is-a-valid-parentheses-string-path/",
              score: 2085,
            },
            {
              title: "1937. 扣分后的最大得分",
              src: "/maximum-number-of-points-with-cost/",
              score: 2106,
            },
            {
              title: "1463. 摘樱桃 II",
              src: "/cherry-pickup-ii/",
              score: 1957,
            },
            { title: "741. 摘樱桃", src: "/cherry-pickup/" },
            {
              title: "2510. 检查是否有路径经过相同数量的 0 和 1",
              src: "/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/",
            },
          ],
        },
      ],
    },
    {
      title: "三、 背包",
      summary:
        '视频讲解 <a href="https://www.bilibili.com/video/BV16Y411v7Y6/" target="_blank">0-背包 完全背包</a>',
      sort: 2,
      child: [
        {
          title: "3.1 0-1 背包",
          summary: "每个物品只能选一次。",
          isLeaf: true,
          child: [
            {
              title: "2915. 和为目标值的最长子序列的长度",
              src: "/length-of-the-longest-subsequence-that-sums-to-target/",
              score: 1659,
            },
            {
              title: "416. 分割等和子集",
              src: "/partition-equal-subset-sum/",
            },
            { title: "494. 目标和", src: "/target-sum/" },
            {
              title: "2787. 将一个数字表示成幂的和的方案数",
              src: "/ways-to-express-an-integer-as-sum-of-powers/",
              score: 1818,
            },
            { title: "474. 一和零", src: "/ones-and-zeroes/" },
            {
              title: "1049. 最后一块石头的重量 II",
              src: "/last-stone-weight-ii/",
              score: 2093,
            },
            {
              title: "1774. 最接近目标价格的甜点成本",
              src: "/closest-dessert-cost/",
              score: 1702,
            },
            {
              title: "879. 盈利计划",
              src: "/profitable-schemes/",
              score: 2205,
            },
            {
              title: "3082. 求出所有子序列的能量和",
              src: "/find-the-sum-of-the-power-of-all-subsequences/",
              score: 2242,
            },
            {
              title: "956. 最高的广告牌",
              src: "/tallest-billboard/",
              score: 2382,
            },
            {
              title: "2518. 好分区的数目",
              src: "/number-of-great-partitions/",
              score: 2415,
            },
            {
              title: "2742. 给墙壁刷油漆",
              src: "/painting-the-walls/",
              score: 2425,
            },
            { title: "LCP 47. 入场安检", src: "/oPs9Bm/" },
            {
              title: "2291. 最大股票收益",
              src: "/maximum-profit-from-trading-stocks/",
            },
            {
              title: "2431. 最大限度地提高购买水果的口味",
              src: "/maximize-total-tastiness-of-purchased-fruits/",
            },
          ],
        },
        {
          title: "3.2 完全背包",
          summary: "物品可以重复选，无个数限制。",
          sort: 1,
          isLeaf: true,
          child: [
            { title: "322. 零钱兑换", src: "/coin-change/" },
            { title: "518. 零钱兑换 II", src: "/coin-change-ii/" },
            { title: "279. 完全平方数", src: "/perfect-squares/" },
            {
              title: "1449. 数位成本和为目标值的最大数字",
              src: "/form-largest-integer-with-digits-that-add-up-to-target/",
              score: 1928,
            },
          ],
        },
        {
          title: "3.3 多重背包",
          summary: "物品可以重复选，有个数限制。",
          isLeaf: true,
          child: [
            {
              title: "2585. 获得分数的方法数",
              src: "/number-of-ways-to-earn-points/description/",
              sort: 0,
              score: 1910,
            },
            {
              title: "2902. 和带限制的子多重集合的数目",
              src: "/count-of-sub-multisets-with-bounded-sum",
              sort: 0,
              score: 2759,
            },
          ],
        },
        {
          title: "3.4 分组背包",
          isLeaf: true,
          summary: "同一组内的物品至多/恰好选一个。",
          child: [
            {
              title: "1155. 掷骰子等于目标和的方法数",
              src: "/number-of-dice-rolls-with-target-sum/description/",
              sort: 0,
              score: 1654,
            },
            {
              title: "1981. 最小化目标值与所选元素的差",
              src: "/minimize-the-difference-between-target-and-chosen-elements",
              sort: "",
              score: 2010,
            },
            {
              title: "2218. 从栈中取出 K 个硬币的最大面值和",
              src: "/maximum-value-of-k-coins-from-piles",
              sort: "",
              score: 2158,
            },
          ],
        },
      ],
    },
    {
      title: "四、经典线性 DP",
      sort: 3,
      child: [
        {
          title: "4.1 最长公共子序列（LCS）",
          isLeaf: true,
          summary:
            '讲解<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1TM4y1o7ug/">最长公共子序列 编辑距离</a>',
          child: [
            {
              title: "1143. 最长公共子序列",
              src: "/longest-common-subsequence/",
            },
            {
              title: "583. 两个字符串的删除操作",
              src: "/delete-operation-for-two-strings/",
            },
            {
              title: "712. 两个字符串的最小 ASCII 删除和",
              src: "/minimum-ascii-delete-sum-for-two-strings/",
            },
            { title: "72. 编辑距离", src: "/edit-distance/" },
            { title: "97. 交错字符串", src: "/interleaving-string/" },
            { title: "115. 不同的子序列", src: "/distinct-subsequences/" },
            {
              title: "1035. 不相交的线",
              src: "/uncrossed-lines/",
              score: 1806,
            },
            {
              title: "1458. 两个子序列的最大点积",
              src: "/max-dot-product-of-two-subsequences/",
              score: 1824,
            },
            {
              title: "1092. 最短公共超序列",
              src: "/shortest-common-supersequence/",
              score: 1977,
            },
            {
              title: "1639. 通过给定词典构造目标字符串的方案数",
              src: "/number-of-ways-to-form-a-target-string-given-a-dictionary/",
              score: 2082,
            },
            { title: "44. 通配符匹配", src: "/wildcard-matching/" },
            {
              title: "10. 正则表达式匹配",
              src: "/regular-expression-matching/",
            },
          ],
        },
        {
          title: "4.2 最长递增子序列（LIS）",
          isLeaf: true,
          summary:
            '讲解: <a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ub411Q7sB/">最长递增子序列</a>',
          child: [
            {
              title: "300. 最长递增子序列",
              src: "/longest-increasing-subsequence/",
            },
            {
              title: "673. 最长递增子序列的个数",
              src: "/number-of-longest-increasing-subsequence/",
            },
            {
              title: "2826. 将三个组排序",
              src: "/sorting-three-groups/",
              score: 1722,
            },
            {
              title: "1671. 得到山形数组的最少删除次数",
              src: "/minimum-number-of-removals-to-make-mountain-array/",
              score: 1913,
            },
            {
              title: "1964. 找出到每个位置为止最长的有效障碍赛跑路线",
              src: "/find-the-longest-valid-obstacle-course-at-each-position/",
              score: 1934,
            },
            {
              title: "2111. 使数组 K 递增的最少操作次数",
              src: "/minimum-operations-to-make-the-array-k-increasing/",
              score: 1941,
            },
            {
              title: "1626. 无矛盾的最佳球队",
              src: "/best-team-with-no-conflicts/",
              score: 2028,
            },
            {
              title: "354. 俄罗斯套娃信封问题",
              src: "/russian-doll-envelopes/",
            },
            {
              title: "1691. 堆叠长方体的最大高度",
              src: "/maximum-height-by-stacking-cuboids/",
              score: 2172,
            },
            {
              title: "960. 删列造序 III",
              src: "/delete-columns-to-make-sorted-iii/",
              score: 2247,
            },
            {
              title: "2407. 最长递增子序列 II",
              src: "/longest-increasing-subsequence-ii/",
              score: 2281,
            },
            {
              title: "1187. 使数组严格递增",
              src: "/make-array-strictly-increasing/",
              score: 2316,
            },
            {
              title: "1713. 得到子序列的最少操作次数",
              src: "/minimum-operations-to-make-a-subsequence/",
              score: 2351,
            },
            {
              title: "368. 最大整除子集",
              src: "/largest-divisible-subset/",
            },
          ],
        },
      ],
    },
    {
      title: "五. 状态机 DP",
      sort: 3,
      isLeaf: false,
      child: [
        {
          title: "",
          isLeaf: true,
          summary:
            '<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ho4y1W7QK/">状态机 DP讲解</a> ',
          child: [
            {
              title: "121. 买卖股票的最佳时机",
              src: "/best-time-to-buy-and-sell-stock/",
            },
            {
              title: "122. 买卖股票的最佳时机 II",
              src: "/best-time-to-buy-and-sell-stock-ii/",
            },
            {
              title: "123. 买卖股票的最佳时机 III",
              src: "/best-time-to-buy-and-sell-stock-iii/",
            },
            {
              title: "188. 买卖股票的最佳时机 IV",
              src: "/best-time-to-buy-and-sell-stock-iv/",
            },
            {
              title: "309. 买卖股票的最佳时机含冷冻期",
              src: "/best-time-to-buy-and-sell-stock-with-cooldown/",
            },
            {
              title: "714. 买卖股票的最佳时机含手续费",
              src: "/best-time-to-buy-and-sell-stock-with-transaction-fee/",
            },
            {
              title: "1493. 删掉一个元素以后全为 1 的最长子数组",
              src: "/longest-subarray-of-1s-after-deleting-one-element/",
              score: 1424,
            },
            {
              title: "1395. 统计作战单位数",
              src: "/count-number-of-teams/",
              score: 1344,
            },
            {
              title: "2745. 构造最长的新字符串",
              src: "/construct-the-longest-new-string/",
              score: 1608,
            },
            {
              title: "2222. 选择建筑的方案数",
              src: "/number-of-ways-to-select-buildings/",
              score: 1657,
            },
            { title: "376. 摆动序列", src: "/wiggle-subsequence/" },
            {
              title: "1567. 乘积为正数的最长子数组长度",
              src: "/maximum-length-of-subarray-with-positive-product/",
              score: 1711,
            },
            {
              title: "1594. 矩阵的最大非负积",
              src: "/maximum-non-negative-product-in-a-matrix/",
              score: 1808,
            },
            {
              title: "2826. 将三个组排序",
              src: "/sorting-three-groups/",
              score: 1722,
            },
            {
              title: "2786. 访问数组中的位置使分数最大",
              src: "/visit-array-positions-to-maximize-score/",
              score: 1733,
            },
            {
              title: "1262. 可被三整除的最大和",
              src: "/greatest-sum-divisible-by-three/",
              score: 1763,
            },
            {
              title: "1363. 形成三的最大倍数",
              src: "/largest-multiple-of-three/",
              score: 1823,
            },
            {
              title: "1911. 最大子序列交替和",
              src: "/maximum-alternating-subsequence-sum/",
              score: 1786,
            },
            {
              title: "2771. 构造最长非递减子数组",
              src: "/longest-non-decreasing-subarray-from-two-arrays/",
              score: 1792,
            },
            {
              title: "1186. 删除一次得到子数组最大和",
              src: "/maximum-subarray-sum-with-one-deletion/",
              score: 1800,
            },
            {
              title: "935. 骑士拨号器",
              src: "/knight-dialer/",
              score: 1691,
            },
            {
              title: "2919. 使数组变美的最小增量运算数",
              src: "/minimum-increment-operations-to-make-array-beautiful/",
              score: 2031,
            },
            {
              title: "801. 使序列递增的最小交换次数",
              src: "/minimum-swaps-to-make-sequences-increasing/",
              score: 2067,
            },
            {
              title: "1955. 统计特殊子序列的数目",
              src: "/count-number-of-special-subsequences/",
              score: 2126,
            },
            {
              title: "3068. 最大节点价值之和",
              src: "/find-the-maximum-sum-of-node-values/",
              score: 2268,
            },
            { title: "LCP 19. 秋叶收藏集", src: "/UlBDOe/" },
            { title: "276. 栅栏涂色", src: "/paint-fence/" },
            {
              title: "1746. 经过一次操作后的最大子数组和",
              src: "/maximum-subarray-sum-after-one-operation/",
            },
            {
              title: "2036. 最大交替子数组和",
              src: "/maximum-alternating-subarray-sum/",
            },
            {
              title: "2361. 乘坐火车路线的最少费用",
              src: "/minimum-costs-using-the-train-line/",
            },
          ],
        },
      ],
    },
    {
      title: "六. 划分型 DP",
      child: [
        {
          title: "6.1 判定能否划分",
          isLeaf: true,
          child: [
            {
              title: "2369. 检查数组是否存在有效划分",
              src: "/check-if-there-is-a-valid-partition-for-the-array/",
              sort: 0,
              score: 1780,
            },
            { title: "139. 单词拆分", src: "/word-break/", sort: 0 },
          ],
        },
        {
          title: "6.2 计算划分个数",
          summary: "计算最少（最多）可以划分出的子数组个数、划分方案数等。",
          isLeaf: true,
          child: [
            {
              title: "132. 分割回文串 II",
              src: "/palindrome-partitioning-ii/",
            },
            {
              title: "2707. 字符串中的额外字符",
              src: "/extra-characters-in-a-string/",
              score: 1736,
            },
            {
              title: "2767. 将字符串分割为最少的美丽子字符串",
              src: "/partition-string-into-minimum-beautiful-substrings/",
              score: 1865,
            },
            { title: "91. 解码方法", src: "/decode-ways/" },
            { title: "639. 解码方法 II", src: "/decode-ways-ii/" },
            {
              title: "LCR 165. 解密数字",
              src: "/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/",
            },
            {
              title: "1416. 恢复数组",
              src: "/restore-the-array/",
              score: 1920,
            },
            {
              title: "2472. 不重叠回文子字符串的最大数目",
              src: "/maximum-number-of-non-overlapping-palindrome-substrings/",
              score: 2014,
            },
            {
              title: "1105. 填充书架",
              src: "/filling-bookcase-shelves/",
              score: 2015,
            },
            {
              title: "2547. 拆分数组的最小代价",
              src: "/minimum-cost-to-split-an-array/",
              score: 2020,
            },
            {
              title: "2430. 对字母串可执行的最大删除数",
              src: "/maximum-deletions-on-a-string/",
              score: 2102,
            },
            {
              title: "2463. 最小移动总距离",
              src: "/minimum-total-distance-traveled/",
              score: 2454,
            },
            {
              title: "2977. 转换字符串的最小成本 II",
              src: "/minimum-cost-to-convert-string-ii/",
              score: 2696,
            },
            {
              title: "2052. 将句子分隔成行的最低成本",
              src: "/minimum-cost-to-separate-sentence-into-rows/",
            },
            {
              title: "2464. 有效分割中的最少子数组数目",
              src: "/minimum-subarrays-in-a-valid-split/",
            },
          ],
        },
        {
          title: "6.3 约束划分个数",
          summary:
            "<p>将数组分成（恰好/至多）k 个连续子数组，计算与这些子数组有关的最优值。</p><p>一般定义 f[i][j] 表示将长为 j 的前缀 a[:j] 分成 i 个连续子数组所得到的最优解。</p><p>枚举最后一个子数组的左端点 L, 从 f[i−1][L] 转移到 f[i][j]，并考虑 a[L:j] 对最优解的影响。</p>",
          isLeaf: true,
          child: [
            {
              title: "410. 分割数组的最大值",
              src: "/split-array-largest-sum/",
            },
            {
              title: "1043. 分隔数组以得到最大和",
              src: "/partition-array-for-maximum-sum/",
              score: 1917,
            },
            {
              title: "1745. 分割回文串 IV",
              src: "/palindrome-partitioning-iv/",
              score: 1925,
            },
            {
              title: "813. 最大平均值和的分组",
              src: "/largest-sum-of-averages/",
              score: 1937,
            },
            {
              title: "1278. 分割回文串 III",
              src: "/palindrome-partitioning-iii/",
              score: 1980,
            },
            {
              title: "1335. 工作计划的最低难度",
              src: "/minimum-difficulty-of-a-job-schedule/",
              score: 2035,
            },
            {
              title: "1473. 粉刷房子 III",
              src: "/paint-house-iii/",
              score: 2057,
            },
            {
              title: "1478. 安排邮筒",
              src: "/allocate-mailboxes/",
              score: 2191,
            },
            {
              title: "1959. K 次调整数组大小浪费的最小总空间",
              src: "/minimum-total-space-wasted-with-k-resizing-operations/",
              score: 2311,
            },
            {
              title: "2478. 完美分割的方案数",
              src: "/number-of-beautiful-partitions/",
              score: 2345,
            },
            {
              title: "3077. K 个不相交子数组的最大能量值",
              src: "/maximum-strength-of-k-disjoint-subarrays/",
              score: 2557,
            },
            {
              title: "2911. 得到 K 个半回文串的最少修改次数",
              src: "/minimum-changes-to-make-k-semi-palindromes/",
              score: 2608,
            },
            {
              title: "3117. 划分数组得到最小的值之和",
              src: "/minimum-sum-of-values-by-dividing-array/",
              score: 2736,
            },
          ],
        },
        {
          title: "6.4 不相交区间",
          isLeaf: true,
          child: [
            {
              title: "2830. 销售利润最大化",
              src: "/maximize-the-profit-as-the-salesman/",
              score: 1852,
            },
            {
              title: "2008. 出租车的最大盈利",
              src: "/maximum-earnings-from-taxi/",
              score: 1872,
            },
            {
              title: "1235. 规划兼职工作",
              src: "/maximum-profit-in-job-scheduling/",
              score: 2023,
            },
            {
              title: "1751. 最多可以参加的会议数目 II",
              src: "/maximum-number-of-events-that-can-be-attended-ii/",
              score: 2041,
            },
          ],
        },
      ],
    },
    {
      title: "七、其它线性 DP",
      child: [
        {
          title: "7.1 一维",
          isLeaf: true,
          summary:
            "发生在前缀/后缀之间的转移，例如从 f[i - 1] 转移到 f[i] 或 f[j] 转移到 f[i]",
          child: [
            {
              title: "2944. 购买水果需要的最少金币数",
              src: "/minimum-number-of-coins-for-fruits/",
              score: 1709,
            },
            {
              title: "2140. 解决智力问题",
              src: "/solving-questions-with-brainpower/",
              score: 1710,
            },
            {
              title: "983. 最低票价",
              src: "/minimum-cost-for-tickets/",
              score: 1787,
            },
            {
              title: "3144. 分割字符频率相等的最少子字符串",
              src: "/minimum-substring-partition-of-equal-character-frequency/",
              score: 1918,
            },
            {
              title: "2901. 最长相邻不相等子序列 II",
              src: "/longest-unequal-adjacent-groups-subsequence-ii/",
              score: 1899,
            },
            {
              title: "871. 最低加油次数",
              src: "/minimum-number-of-refueling-stops/",
              score: 2075,
            },
            {
              title: "2896. 执行操作使两个字符串相等",
              src: "/apply-operations-to-make-two-strings-equal/",
              score: 2173,
            },
            {
              title: "2167. 移除所有载有违禁货物车厢所需的最少时间",
              src: "/minimum-time-to-remove-all-cars-containing-illegal-goods/",
              score: 2220,
            },
            {
              title: "2188. 完成比赛的最少时间",
              src: "/minimum-time-to-finish-the-race/",
              score: 2316,
            },
            {
              title: "1259. 不相交的握手",
              src: "/handshakes-that-dont-cross/",
              score: 1952,
            },
          ],
        },
        {
          title: "7.2 特殊子序列",
          isLeaf: true,
          child: [
            {
              title: "2501. 数组中最长的方波",
              src: "/longest-square-streak-in-an-array/",
              score: 1480,
            },
            {
              title: "1218. 最长定差子序列",
              src: "/longest-arithmetic-subsequence-of-given-difference/",
              score: 1598,
            },
            {
              title: "1027. 最长等差数列",
              src: "/longest-arithmetic-subsequence/",
              score: 1759,
            },
            {
              title: "873. 最长的斐波那契子序列的长度",
              src: "/length-of-longest-fibonacci-subsequence/",
              score: 1912,
            },
            {
              title: "446. 等差数列划分 II - 子序列",
              src: "/arithmetic-slices-ii-subsequence/",
            },
            {
              title: "1048. 最长字符串链",
              src: "/longest-string-chain/",
              score: 1600,
            },
            {
              title: "3098. 求出所有子序列的能量和",
              src: "/find-the-sum-of-subsequence-powers/",
              score: 2553,
            },
          ],
        },
        {
          title: "7.3 矩阵快速幂优化",
          summary:
            "除了 2851 题必须用矩阵快速幂优化以外，其余题目都可以用线性 DP 做出。",
          isLeaf: true,
          child: [
            { title: "70. 爬楼梯", src: "/climbing-stairs/" },
            { title: "509. 斐波那契数", src: "/fibonacci-number/" },
            {
              title: "1137. 第 N 个泰波那契数",
              src: "/n-th-tribonacci-number/",
              score: 1143,
            },
            {
              title: "1220. 统计元音字母序列的数目",
              src: "/count-vowels-permutation/",
              score: 1730,
            },
            {
              title: "552. 学生出勤记录 II",
              src: "/student-attendance-record-ii/",
            },
            {
              title: "790. 多米诺和托米诺平铺",
              src: "/domino-and-tromino-tiling/",
              score: 1831,
            },
            {
              title: "2851. 字符串转换",
              src: "/string-transformation/",
              score: 2858,
            },
            {
              title: "2912. 在网格上移动到目的地的方法数",
              src: "/number-of-ways-to-reach-destination-in-the-grid/",
            },
          ],
        },
        {
          title: "7.4 多维",
          isLeaf: true,
          child: [
            {
              title: "2400. 恰好移动 k 步到达某一位置的方法数目",
              src: "/number-of-ways-to-reach-a-position-after-exactly-k-steps/",
              score: 1752,
            },
            {
              title: "2370. 最长理想子序列",
              src: "/longest-ideal-subsequence/",
              score: 1835,
            },
            {
              title: "1269. 停在原地的方案数",
              src: "/number-of-ways-to-stay-in-the-same-place-after-some-steps/",
              score: 1855,
            },
            {
              title: "3122. 使矩阵满足条件的最少操作次数",
              src: "/minimum-number-of-operations-to-satisfy-conditions/",
              score: 1905,
            },
            { title: "576. 出界的路径数", src: "/out-of-boundary-paths/" },
            { title: "403. 青蛙过河", src: "/frog-jump/" },
            {
              title: "1223. 掷骰子模拟",
              src: "/dice-roll-simulation/",
              score: 2009,
            },
            {
              title: "1320. 二指输入的的最小距离",
              src: "/minimum-distance-to-type-a-word-using-two-fingers/",
              score: 2028,
            },
            {
              title: "1575. 统计所有可行路径",
              src: "/count-all-possible-routes/",
              score: 2056,
            },
            {
              title: "2318. 不同骰子序列的数目",
              src: "/number-of-distinct-roll-sequences/",
              score: 2091,
            },
            {
              title: "2088. 统计农场中肥沃金字塔的数目",
              src: "/count-fertile-pyramids-in-a-land/",
              score: 2105,
            },
            {
              title: "2209. 用地毯覆盖后的最少白色砖块",
              src: "/minimum-white-tiles-after-covering-with-carpets/",
              score: 2106,
            },
            {
              title: "1444. 切披萨的方案数",
              src: "/number-of-ways-of-cutting-a-pizza/",
              score: 2127,
            },
            {
              title: "1420. 生成数组",
              src: "/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/",
              score: 2176,
            },
            {
              title: "629. K 个逆序对数组",
              src: "/k-inverse-pairs-array/",
            },
            {
              title: "1866. 恰有 K 根木棍可以看到的排列数目",
              src: "/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/",
              score: 2334,
            },
            {
              title: "2312. 卖木头块",
              src: "/selling-pieces-of-wood/",
              score: 2364,
            },
            {
              title: "887. 鸡蛋掉落",
              src: "/super-egg-drop/",
              score: 2377,
            },
            {
              title: "1884. 鸡蛋掉落-两枚鸡蛋",
              src: "/egg-drop-with-2-eggs-and-n-floors/",
            },
            {
              title: "1388. 3n 块披萨",
              src: "/pizza-with-3n-slices/",
              score: 2410,
            },
            {
              title: "1900. 最佳运动员的比拼回合",
              src: "/the-earliest-and-latest-rounds-where-players-compete/",
              score: 2455,
            },
            {
              title: "1883. 准时抵达会议现场的最小跳过休息次数",
              src: "/minimum-skips-to-arrive-at-meeting-on-time/",
              score: 2588,
            },
            { title: "LCP 57. 打地鼠", src: "/ZbAuEH/" },
            { title: "256. 粉刷房子", src: "/paint-house/" },
            { title: "265. 粉刷房子 II", src: "/paint-house-ii/" },
            { title: "568. 最大休假天数", src: "/maximum-vacation-days/" },
            {
              title: "1692. 计算分配糖果的不同方式",
              src: "/count-ways-to-distribute-candies/",
            },
            {
              title: "2143. 在两个数组的区间中选取数字",
              src: "/choose-numbers-from-two-arrays-in-range/",
            },
          ],
        },
      ],
    },
    {
      title: "八、区间 DP",
      summary:
        '讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1Gs4y1E7EU/">区间 DP</a>从数组的左右两端不断缩短，求解关于某段下标区间的最优值。\n                一般定义f[i][j] 表示下标区间 [i,j] 的最优值。',
      child: [
        {
          title: "8.1 最长回文子序列",
          isLeaf: true,
          child: [
            {
              title: "516. 最长回文子序列",
              src: "/longest-palindromic-subsequence/",
            },
            {
              title: "730. 统计不同回文子序列",
              src: "/count-different-palindromic-subsequences/",
            },
            {
              title: "1312. 让字符串成为回文串的最少插入次数",
              src: "/minimum-insertion-steps-to-make-a-string-palindrome/",
              score: 1787,
            },
            {
              title: "1771. 由子序列构造的最长回文串的长度",
              src: "/maximize-palindrome-length-from-subsequences/",
              score: 2183,
            },
            {
              title: "1682. 最长回文子序列 II",
              src: "/longest-palindromic-subsequence-ii/",
            },
            {
              title: "1216. 验证回文串 III",
              src: "/valid-palindrome-iii/",
              score: 1754,
            },
            {
              title: "1246. 删除回文子数组",
              src: "/palindrome-removal/",
              score: 2204,
            },
          ],
        },
        {
          title: "8.2 其它区间 DP",
          isLeaf: true,
          child: [
            {
              title: "5. 最长回文子串",
              src: "/longest-palindromic-substring/",
            },
            {
              title: "3040. 相同分数的最大操作数目 II",
              src: "/maximum-number-of-operations-with-the-same-score-ii/",
              score: 1709,
            },
            {
              title: "375. 猜数字大小 II",
              src: "/guess-number-higher-or-lower-ii/",
            },
            {
              title: "1130. 叶值的最小代价生成树",
              src: "/minimum-cost-tree-from-leaf-values/",
              score: 1920,
            },
            {
              title: "96. 不同的二叉搜索树",
              src: "/unique-binary-search-trees/",
            },
            {
              title: "1770. 执行乘法运算的最大分数",
              src: "/maximum-score-from-performing-multiplication-operations/",
              score: 2069,
            },
            {
              title: "1547. 切棍子的最小成本",
              src: "/minimum-cost-to-cut-a-stick/",
              score: 2117,
            },
            {
              title: "1039. 多边形三角剖分的最低得分",
              src: "/minimum-score-triangulation-of-polygon/solution/shi-pin-jiao-ni-yi-bu-bu-si-kao-dong-tai-aty6/",
            },
            {
              title: "1000. 合并石头的最低成本",
              src: "/minimum-cost-to-merge-stones/",
              score: 2423,
            },
            {
              title: "2019. 解出数学表达式的学生分数",
              src: "/the-score-of-students-solving-math-expression/",
              score: 2584,
            },
            { title: "87. 扰乱字符串", src: "/scramble-string/" },
            { title: "312. 戳气球", src: "/burst-balloons/" },
            { title: "664. 奇怪的打印机", src: "/strange-printer/" },
            { title: "546. 移除盒子", src: "/remove-boxes/" },
            {
              title: "471. 编码最短长度的字符串",
              src: "/encode-string-with-shortest-length/",
            },
            {
              title: "3018. 可处理的最大删除操作数 I",
              src: "/maximum-number-of-removal-queries-that-can-be-processed-i/",
            },
          ],
        },
      ],
    },
    {
      title: "九、状态压缩 DP（状压 DP）",
      summary:
        '推荐先阅读：<a target="_blank" href="https://leetcode.cn/circle/discuss/CaOJ45/">从集合论到位运算，常见位运算技巧分类总结！</a>',
      child: [
        {
          title: "9.1 排列型 ① 相邻无关",
          summary:
            "暴力做法是枚举数组 a 的所有排列，对每个排列计算和题目有关的值，时间复杂度（通常来说）是 O(n•n!)。可以解决 n≤10 的问题。<br>\n            状压 DP 可以把时间复杂度（通常来说）优化至 O(n•2<sup>n</sup>)。可以解决 n≤20 的问题。<br>\n            一般定义 f[S] 表示已经排列好的元素（下标）集合为 S 时，和题目有关的最优值。通过枚举当前位置要填的元素来转移。\n            <blockquote>注意不需要额外的状态表示当前要填第几个位置，因为集合 S 的大小就是当前要填的位置。</blockquote>",
          isLeaf: true,
          child: [
            { title: "526. 优美的排列", src: "/beautiful-arrangement/" },
            {
              title: "1879. 两个数组最小的异或值之和",
              src: "/minimum-xor-sum-of-two-arrays/",
              score: 2146,
            },
            {
              title: "2850. 将石头分散到网格图的最少移动次数",
              src: "/minimum-moves-to-spread-stones-over-grid/",
              score: 2002,
            },
            {
              title: "1947. 最大兼容性评分和",
              src: "/maximum-compatibility-score-sum/",
              score: 1705,
            },
            {
              title: "1799. N 次操作后的最大分数和",
              src: "/maximize-score-after-n-operations/",
              score: 2073,
            },
            {
              title: "2172. 数组的最大与和",
              src: "/maximum-and-sum-of-array/",
              score: 2393,
            },
            {
              title: "1066. 校园自行车分配 II",
              src: "/campus-bikes-ii/",
              score: 1886,
            },
            {
              title: "2992. 自整除排列的数量",
              src: "/number-of-self-divisible-permutations/",
            },
            {
              title: "2403. 杀死所有怪物的最短时间",
              src: "/minimum-time-to-kill-all-monsters/",
            },
          ],
        },
        {
          title: "9.2 排列型 ② 相邻相关",
          summary:
            "一般定义 f[S][i] 表示已经排列好的元素（下标）集合为 S，<br>且上一个填的元素（下标）为 i 时，<br>和题目有关的最优值。通过枚举当前位置要填的元素来转移。",
          isLeaf: true,
          child: [
            {
              title: "996. 正方形数组的数目",
              src: "/number-of-squareful-arrays/",
              score: 1933,
            },
            {
              title: "2741. 特别的排列",
              src: "/special-permutations/",
              score: 2021,
            },
            {
              title: "1681. 最小不兼容性",
              src: "/minimum-incompatibility/",
              score: 2390,
            },
            {
              title: "3149. 找出分数最低的排列",
              src: "/find-the-minimum-cost-array-permutation/",
              score: 2642,
            },
          ],
        },
        {
          title: "9.3 旅行商问题（TSP）",
          summary: "本质上就是排列型 ②。",
          isLeaf: true,
          child: [
            {
              title: "943. 最短超级串",
              src: "/find-the-shortest-superstring/",
              score: 2186,
            },
            {
              title: "847. 访问所有节点的最短路径",
              src: "/shortest-path-visiting-all-nodes/",
              score: 2201,
            },
            { title: "LCP 13. 寻宝", src: "/xun-bao/" },
            {
              title: "2247. K 条高速公路的最大旅行费用（会员题）",
              src: "/maximum-cost-of-trip-with-k-highways/",
            },
          ],
        },
        {
          title: "9.4 枚举子集的子集",
          isLeaf: true,
          summary:
            "一般定义 f[S] 表示已选（或者未选）的子集为 S 时，和题目有关的最优值。<br>通过枚举 S（或者 S 的补集）的子集来转移。",
          child: [
            {
              title: "2305. 公平分发饼干",
              src: "/fair-distribution-of-cookies/",
              score: 1887,
            },
            {
              title: "1986. 完成任务的最少工作时间段",
              src: "/minimum-number-of-work-sessions-to-finish-the-tasks/",
              score: 1996,
            },
            {
              title: "1494. 并行课程 II",
              src: "/parallel-courses-ii/",
              score: 2082,
            },
            {
              title: "1723. 完成所有工作的最短时间",
              src: "/find-minimum-time-to-finish-all-jobs/",
              score: 2285,
            },
            {
              title: "1655. 分配重复整数",
              src: "/distribute-repeating-integers/",
              score: 2308,
            },
            {
              title: "1349. 参加考试的最大学生数",
              src: "/maximum-students-taking-exam/",
              score: 2386,
            },
            {
              title: "1681. 最小不兼容性",
              src: "/minimum-incompatibility/",
              score: 2390,
            },
            {
              title: "2572. 无平方子集计数",
              src: "/count-the-number-of-square-free-subsets/",
              score: 2420,
            },
            {
              title: "1994. 好子集的数目",
              src: "/the-number-of-good-subsets/",
              score: 2465,
            },
            { title: "LCP 04. 覆盖", src: "/broken-board-dominoes/" },
            { title: "LCP 53. 守护太空城", src: "/EJvmW4/" },
            {
              title: "465. 最优账单平衡",
              src: "/optimal-account-balancing/",
            },
            {
              title: "2152. 穿过所有点的所需最少直线数量",
              src: "/minimum-number-of-lines-to-cover-points/",
            },
          ],
        },
        {
          title: "9.5 其它状压 DP",
          isLeaf: true,
          child: [
            {
              title: "698. 划分为k个相等的子集",
              src: "/partition-to-k-equal-sum-subsets/",
            },
            {
              title: "1411. 给 N x 3 网格图涂色的方案数",
              src: "/number-of-ways-to-paint-n-3-grid/",
              score: 1845,
            },
            {
              title: "2002. 两个回文子序列长度的最大乘积",
              src: "/maximum-product-of-the-length-of-two-palindromic-subsequences/",
              score: 1870,
            },
            {
              title: "1931. 用三种不同颜色为网格涂色",
              src: "/painting-a-grid-with-three-different-colors/",
              score: 2171,
            },
            {
              title: "1125. 最小的必要团队",
              src: "/smallest-sufficient-team/",
              score: 2251,
            },
            {
              title: "1434. 每个人戴不同帽子的方案数",
              src: "/number-of-ways-to-wear-different-hats-to-each-other/",
              score: 2274,
            },
            { title: "691. 贴纸拼词", src: "/stickers-to-spell-word/" },
            {
              title: "1595. 连通两组点的最小成本",
              src: "/minimum-cost-to-connect-two-groups-of-points/",
              score: 2538,
            },
            {
              title: "1815. 得到新鲜甜甜圈的最多组数",
              src: "/maximum-number-of-groups-getting-fresh-donuts/",
              score: 2560,
            },
            {
              title: "1659. 最大化网格幸福感",
              src: "/maximize-grid-happiness/",
              score: 2656,
            },
            { title: "LCP 69. Hello LeetCode!", src: "/rMeRt2/" },
            { title: "LCP 76. 魔法棋盘", src: "/1ybDKD/" },
            { title: "LCP 82. 万灵之树", src: "/cnHoX6/" },
            {
              title: "351. 安卓系统手势解锁",
              src: "/android-unlock-patterns/",
            },
            {
              title: "2184. 建造坚实的砖墙的方法数",
              src: "/number-of-ways-to-build-sturdy-brick-wall/",
            },
          ],
        },
      ],
    },
    {
      title: "十、数位 DP",
      child: [
        {
          title: "",
          summary:
            '<a href="https://www.bilibili.com/video/BV1rS4y1s721/?t=19m36s">v1.0 模板讲解</a><br><a href="https://www.bilibili.com/video/BV1Fg4y1Q7wv/?t=31m28s">v2.0 模板讲解</a>',
          isLeaf: true,
          child: [
            {
              src: "/count-of-integers/",
              title: "2719. 统计整数数目",
              score: 2355,
            },
            {
              src: "/rotated-digits/",
              title: "788. 旋转数字",
              score: 1397,
            },
            {
              src: "/numbers-at-most-n-given-digit-set/",
              title: "902. 最大为 N 的数字组合",
              score: 1990,
            },
            { src: "/number-of-digit-one/", title: "233. 数字 1 的个数" },
            {
              src: "/number-of-2s-in-range-lcci/",
              title: "面试题 17.06. 2 出现的次数",
            },
            {
              src: "/non-negative-integers-without-consecutive-ones/",
              title: "600. 不含连续 1 的非负整数",
            },
            {
              src: "/count-special-integers/",
              title: "2376. 统计特殊整数",
              score: 2121,
            },
            {
              src: "/numbers-with-repeated-digits/",
              title: "1012. 至少有 1 位重复的数字",
              score: 2231,
            },
            {
              src: "/count-numbers-with-unique-digits/",
              title: "357. 统计各位数字都不同的数字个数",
            },
            {
              src: "/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/",
              title: "3007. 价值和小于等于 K 的最大数字 做法不止一种",
              score: 2259,
            },
            {
              src: "/number-of-beautiful-integers-in-the-range/",
              title: "2827. 范围中美丽整数的数目",
              score: 2325,
            },
            {
              src: "/count-the-number-of-powerful-integers/",
              title: "2999. 统计强大整数的数目",
              score: 2352,
            },
            {
              src: "/count-stepping-numbers-in-range/",
              title: "2801. 统计范围内的步进数字数目",
              score: 2368,
            },
            {
              src: "/find-all-good-strings/",
              title: "1397. 找到所有好字符串",
              score: 2667,
            },
            {
              src: "/stepping-numbers/",
              title: "1215. 步进数（会员题）",
              score: 1675,
            },
            {
              src: "/digit-count-in-range/",
              title: "1067. 范围内的数字计数（会员题）",
              score: 2026,
            },
            {
              src: "/count-numbers-with-unique-digits-ii/",
              title: "3032. 统计各位数字都不同的数字个数 II（会员题）",
            },
            {
              src: "/maximum-number-of-balls-in-a-box/",
              title: "1742. 盒子中小球的最大数量 *非暴力做法 枚举数位和+DP",
              score: 1278,
            },
            {
              src: "/count-symmetric-integers/",
              title: "2843. 统计对称整数的数目 *非暴力做法",
              score: 1270,
            },
          ],
        },
      ],
    },
    {
      title: "十一、数据结构优化 DP",
      child: [
        {
          title: "11.1 前缀和优化 DP",
          isLeaf: true,
          child: [
            {
              title: "2327. 知道秘密的人数",
              src: "/number-of-people-aware-of-a-secret/",
              score: 1894,
            },
            {
              title: "1997. 访问完所有房间的第一天",
              src: "/first-day-where-you-have-been-in-all-the-rooms/",
              score: 2261,
            },
            {
              title: "2478. 完美分割的方案数",
              src: "/number-of-beautiful-partitions/",
              score: 2345,
            },
            { title: "837. 新 21 点", src: "/new-21-game/", score: 2351 },
            {
              title: "2463. 最小移动总距离",
              src: "/minimum-total-distance-traveled/",
              score: 2454,
            },
            {
              title: "629. K 个逆序对数组",
              src: "/k-inverse-pairs-array/",
            },
            {
              title: "3130. 找出所有稳定的二进制数组 II",
              src: "/find-all-possible-stable-binary-arrays-ii/",
              score: 2825,
            },
            {
              title: "1977. 划分数字的方案数",
              src: "/number-of-ways-to-separate-numbers/",
              score: 2818,
            },
          ],
        },
        {
          title: "11.2 单调栈优化 DP",
          isLeaf: true,
          child: [
            {
              title: "1335. 工作计划的最低难度",
              src: "/minimum-difficulty-of-a-job-schedule/",
              score: 2035,
            },
            {
              title: "2866. 美丽塔 II",
              src: "/beautiful-towers-ii/",
              score: 2072,
            },
            {
              title: "2617. 网格图中最少访问的格子数",
              src: "/minimum-number-of-visited-cells-in-a-grid/",
              score: 2582,
            },
            {
              title: "2355. 你能拿走的最大图书数量",
              src: "/maximum-number-of-books-you-can-take/",
            },
          ],
        },
        {
          title: "11.3 单调队列优化 DP",
          isLeaf: true,
          summary:
            '<p>一般用来维护一段转移来源的最值。</p><ol>\n            <li>前提：区间右端点变大时，左端点也在变大（同滑动窗口）。</li>\n            <li>转移前，去掉队首无用数据。</li>\n            <li>计算转移（直接从队首转移）。</li>\n            <li>把数据（一般是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>）插入队尾前，去掉队尾无用数据。</li>\n            </ol>',
          child: [
            {
              title: "2944. 购买水果需要的最少金币数",
              src: "/minimum-number-of-coins-for-fruits/",
              score: 1709,
            },
            {
              title: "1696. 跳跃游戏 VI",
              src: "/jump-game-vi/",
              score: 1955,
            },
            {
              title: "1425. 带限制的子序列和",
              src: "/constrained-subsequence-sum/",
              score: 2033,
            },
            {
              title: "375. 猜数字大小 II",
              src: "/guess-number-higher-or-lower-ii/",
            },
            {
              title: "1687. 从仓库到码头运输箱子",
              src: "/delivering-boxes-from-storage-to-ports/",
              score: 2611,
            },
            {
              title: "3117. 划分数组得到最小的值之和",
              src: "/minimum-sum-of-values-by-dividing-array/",
              score: 2736,
            },
            {
              title: "2945. 找到最大非递减数组的长度",
              src: "/find-maximum-non-decreasing-array-length/",
              score: 2944,
            },
            {
              title: "2969. 购买水果需要的最少金币数 II",
              src: "/minimum-number-of-coins-for-fruits-ii/",
            },
          ],
        },
        {
          title: "11.4 树状数组/线段树优化 DP",
          isLeaf: true,
          child: [
            {
              title: "1626. 无矛盾的最佳球队",
              src: "/best-team-with-no-conflicts/",
              score: 2028,
            },
            {
              title: "2407. 最长递增子序列 II",
              src: "/longest-increasing-subsequence-ii/",
              score: 2281,
            },
            {
              title: "2770. 达到末尾下标所需的最大跳跃次数",
              src: "/maximum-number-of-jumps-to-reach-the-last-index/",
              score: 1534,
            },
            {
              title: "2926. 平衡子序列的最大和",
              src: "/maximum-balanced-subsequence-sum/",
              score: 2449,
            },
            {
              title: "2916. 子数组不同元素数目的平方和 II",
              src: "/subarrays-distinct-element-sum-of-squares-ii/",
              score: 2817,
            },
          ],
        },
        {
          title: "11.5 字典树优化 DP",
          isLeaf: true,
          child: [
            { title: "139. 单词拆分", src: "/word-break/" },
            { title: "140. 单词拆分 II", src: "/word-break-ii/" },
            { title: "472. 连接词", src: "/concatenated-words/" },
            {
              title: "2977. 转换字符串的最小成本 II",
              src: "/minimum-cost-to-convert-string-ii/",
              score: 2696,
            },
          ],
        },
        {
          title: "11.6 其它优化 DP",
          isLeaf: true,
          child: [
            {
              title: "2713. 矩阵中严格递增的单元格数",
              src: "/maximum-strictly-increasing-cells-in-a-matrix/",
              score: 2388,
            },
            { title: "LCP 59. 搭桥过河", src: "/NfY1m5/" },
            {
              title: "2263. 数组变为有序的最小操作次数",
              src: "/make-array-non-decreasing-or-non-increasing/",
            },
          ],
        },
      ],
    },
    {
      title: "十二、树形 DP",
      summary:
        '<p class="p-2">注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归。\n        <br>这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以仍然叫做树形 DP。\n        <br>此外，如果是自顶向下的递归做法，是存在重叠子问题的，一般要结合记忆化搜索实现。</p>',
      child: [
        {
          title: "12.1 树的直径",
          isLeaf: true,
          summary:
            '<p>讲解：<a href="https://www.bilibili.com/video/BV17o4y187h1/" target="_blank">树形 DP：树的直径</a></p>',
          child: [
            {
              title: "543. 二叉树的直径",
              src: "/diameter-of-binary-tree/",
            },
            {
              title: "124. 二叉树中的最大路径和",
              src: "/binary-tree-maximum-path-sum/",
            },
            { title: "687. 最长同值路径", src: "/longest-univalue-path/" },
            {
              title: "2246. 相邻字符不同的最长路径",
              score: 2127,
              src: "/longest-path-with-different-adjacent-characters/",
            },
            {
              title: "1617. 统计子树中城市之间最大距离",
              score: 2309,
              src: "/count-subtrees-with-max-distance-between-cities/",
            },
            {
              title: "2538. 最大价值和与最小价值和的差值",
              score: 2398,
              src: "/difference-between-maximum-and-minimum-price-sum/",
            },
            {
              title: "1245. 树的直径（会员题）",
              src: "https://leetcode-cn.com/problems/tree-diameter/",
            },
          ],
        },
        {
          title: "12.2 树上最大独立集",
          isLeaf: true,
          summary:
            '<p>讲解：<a href="https://www.bilibili.com/video/BV1vu4y1f7dn/" target="_blank">树形 DP：打家劫舍III</a></p>',
          child: [
            {
              title: "337. 打家劫舍 III（没有上司的舞会）",
              src: "/house-robber-iii/",
            },
            {
              title: "2646. 最小化旅行的价格总和",
              score: 2239,
              src: "/minimize-the-total-price-of-the-trips/",
            },
            { title: "2378. 选择边来最大化树的得分（会员题）" },
          ],
        },
        {
          title: "12.3 树上最小支配集",
          isLeaf: true,
          summary:
            '<p>讲解：<a href="https://www.bilibili.com/video/BV1oF411U7qL/" target="_blank">树形 DP：监控二叉树</a>，包含 968 的变形题。</p>',
          child: [
            {
              title: "968. 监控二叉树",
              src: "/binary-tree-cameras/",
              score: 2125,
            },
          ],
        },
        {
          title: "12.4 换根 DP",
          isLeaf: true,
          summary:
            '<p>也叫二次扫描法。<br><a href="/sum-of-distances-in-tree/solution/tu-jie-yi-zhang-tu-miao-dong-huan-gen-dp-6bgb/" target="_blank">【图解】一张图秒懂换根 DP！</a></p>',
          child: [
            {
              title: "834. 树中距离之和",
              score: 2198,
              src: "/sum-of-distances-in-tree/",
            },
            {
              title: "2581. 统计可能的树根数目",
              score: 2229,
              src: "/count-number-of-possible-root-nodes/",
            },
            {
              title: "2858. 可以到达每一个节点的最少边反转次数",
              score: 2295,
              src: "/minimum-edge-reversals-so-every-node-is-reachable/",
            },
            { title: "310. 最小高度树 也可以用拓扑排序做", src: "" },
          ],
        },
        {
          title: "12.5 其它树形 DP",
          isLeaf: true,
          child: [
            {
              title: "2925. 在树上执行操作以后得到的最大分数",
              score: 1940,
              src: "/maximum-score-after-applying-operations-on-a-tree/",
            },
            {
              title: "3068. 最大节点价值之和",
              score: 2268,
              src: "/find-the-maximum-sum-of-node-values/",
            },
            {
              title: "2920. 收集所有金币可获得的最大积分",
              score: 2351,
              src: "/maximum-points-after-collecting-coins-from-all-nodes/",
            },
            {
              title: "2867. 统计树中的合法路径数目",
              score: 2429,
              src: "/count-valid-paths-in-a-tree/",
            },
            {
              title: "1916. 统计为蚁群构筑房间的不同顺序",
              score: 2487,
              src: "/count-ways-to-build-rooms-in-an-ant-colony/",
            },
            {
              title: "LCP 10. 二叉树任务调度",
              src: "/er-cha-shu-ren-wu-diao-du/",
            },
            { title: "LCP 34. 二叉树染色", src: "/er-cha-shu-ran-se-UGC/" },
            { title: "LCP 64. 二叉树灯饰", src: "/U7WvvU/" },
            {
              title: "2313. 二叉树中得到结果所需的最少翻转次数（会员题）",
              src: "/minimum-flips-in-binary-tree-to-get-result/",
            },
          ],
        },
      ],
    },
    {
      title: "十三、图 DP",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "787. K 站中转内最便宜的航班",
              score: 1787,
              src: "/cheapest-flights-within-k-stops/",
            },
            {
              title: "1786. 从第一个节点出发到最后一个节点的受限路径数",
              score: 2079,
              src: "/number-of-restricted-paths-from-first-to-last-node/",
            },
            {
              title: "2050. 并行课程 III",
              score: 2085,
              src: "/parallel-courses-iii/",
            },
            {
              title: "1976. 到达目的地的方案数",
              score: 2095,
              src: "/number-of-ways-to-arrive-at-destination/",
            },
            {
              title: "1857. 有向图中最大颜色值",
              score: 2313,
              src: "/largest-color-value-in-a-directed-graph/",
            },
            {
              title: "1928. 规定时间内到达终点的最小花费",
              score: 2414,
              src: "/minimum-cost-to-reach-destination-in-time/",
            },
            { title: "LCP 07. 传递信息", src: "/chuan-di-xin-xi/" },
            {
              title: "1548. 图中最相似的路径（会员题）",
              src: "/the-most-similar-path-in-a-graph/",
            },
          ],
        },
      ],
    },
    {
      title: "十四、博弈 DP",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "1025. 除数博弈 有数学做法",
              score: 1436,
              src: "/divisor-game/",
            },
            {
              title: "877. 石子游戏 有数学做法",
              score: 1591,
              src: "/stone-game/",
            },
            { title: "486. 预测赢家", src: "/predict-the-winner/" },
            {
              title: "1510. 石子游戏 IV",
              score: 1787,
              src: "/stone-game-iv/",
            },
            {
              title: "1690. 石子游戏 VII",
              score: 1952,
              src: "/stone-game-vii/",
            },
            {
              title: "1406. 石子游戏 III",
              score: 2027,
              src: "/stone-game-iii/",
            },
            {
              title: "1140. 石子游戏 II",
              score: 2035,
              src: "/stone-game-ii/",
            },
            {
              title: "1563. 石子游戏 V",
              score: 2088,
              src: "/stone-game-v/",
            },
            { title: "464. 我能赢吗", src: "/can-i-win/" },
            {
              title: "1872. 石子游戏 VIII",
              score: 2440,
              src: "/stone-game-viii/",
            },
            {
              title: "913. 猫和老鼠",
              score: 2567,
              src: "/cat-and-mouse/",
            },
            { title: "294. 翻转游戏 II（会员题）", src: "/flip-game-ii/" },
          ],
        },
      ],
    },
    {
      title: "十五、概率/期望 DP",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "688. 骑士在棋盘上的概率",
              src: "/knight-probability-in-chessboard/",
            },
            { title: "837. 新 21 点", score: 2351, src: "/new-21-game/" },
            {
              title: "1467. 两个盒子中球的颜色数相同的概率",
              score: 2357,
              src: "/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
            },
            { title: "808. 分汤", score: 2397, src: "/soup-servings/" },
            {
              title: "LCR 185. 统计结果概率",
              src: "/nge-tou-zi-de-dian-shu-lcof/",
            },
            {
              title: "九坤-04. 筹码游戏",
              src: "https://leetcode.cn/contest/ubiquant2022/problems/I3Gm2h/",
            },
            {
              title: "1230. 抛掷硬币（会员题）",
              src: "/toss-strange-coins/",
              score: 1809,
            },
          ],
        },
      ],
    },
    {
      title: "专题：前后缀分解",
      child: [
        {
          title: "",
          summary: "部分题目也可以用状态机 DP 解决。",
          isLeaf: true,
          child: [
            { title: "42. 接雨水（讲解）", src: "/trapping-rain-water/" },
            {
              title: "123. 买卖股票的最佳时机 III 拆分成两个 121 题",
              src: "/best-time-to-buy-and-sell-stock-iii/",
            },
            {
              title: "1422. 分割字符串的最大得分",
              src: "/maximum-score-after-splitting-a-string/",
              score: 1238,
            },
            {
              title: "2256. 最小平均差",
              score: 1395,
              src: "/minimum-average-difference/",
            },
            {
              title: "1493. 删掉一个元素以后全为 1 的最长子数组",
              score: 1424,
              src: "/longest-subarray-of-1s-after-deleting-one-element/",
            },
            {
              title: "845. 数组中的最长山脉 *也可以分组循环",
              score: 1437,
              src: "/longest-mountain-in-array/",
            },
            {
              title: "2909. 元素和最小的山形三元组 II",
              score: 1479,
              src: "/minimum-sum-of-mountain-triplets-ii/",
            },
            {
              title: "2483. 商店的最少代价",
              score: 1495,
              src: "/minimum-penalty-for-a-shop/",
            },
            {
              title: "1525. 字符串的好分割数目",
              score: 1500,
              src: "/number-of-good-ways-to-split-a-string/",
            },
            {
              title: "2874. 有序三元组中的最大值 II",
              score: 1584,
              src: "/maximum-value-of-an-ordered-triplet-ii/",
            },
            {
              title: "1031. 两个非重叠子数组的最大和",
              score: 1681,
              src: "/maximum-sum-of-two-non-overlapping-subarrays/",
            },
            {
              title: "689. 三个无重叠子数组的最大和",
              src: "/maximum-sum-of-3-non-overlapping-subarrays/",
            },
            {
              title: "2420. 找到所有好下标",
              score: 1696,
              src: "/find-all-good-indices/",
            },
            {
              title: "2100. 适合野炊的日子",
              score: 1703,
              src: "/find-good-days-to-rob-the-bank/",
            },
            {
              title: "1653. 使字符串平衡的最少删除次数",
              score: 1794,
              src: "/minimum-deletions-to-make-string-balanced/",
            },
            {
              title: "926. 将字符串翻转到单调递增",
              src: "/flip-string-to-monotone-increasing/",
              score: 1602,
            },
            {
              title: "1477. 找两个和为目标值且不重叠的子数组",
              score: 1851,
              src: "/find-two-non-overlapping-sub-arrays-each-with-target-sum/",
            },
            {
              title: "1671. 得到山形数组的最少删除次数",
              score: 1913,
              src: "/minimum-number-of-removals-to-make-mountain-array/",
            },
            {
              title: "238. 除自身以外数组的乘积",
              score: 2000,
              src: "/product-of-array-except-self/",
            },
            {
              title: "1888. 使二进制字符串字符交替的最少反转次数",
              score: 2006,
              src: "/minimum-number-of-flips-to-make-the-binary-string-alternating/",
            },
            {
              title: "2906. 构造乘积矩阵",
              score: 2075,
              src: "/construct-product-matrix/",
            },
            {
              title: "2167. 移除所有载有违禁货物车厢所需的最少时间",
              score: 2220,
              src: "/minimum-time-to-remove-all-cars-containing-illegal-goods/",
            },
            {
              title: "2484. 统计回文子序列数目",
              score: 2224,
              src: "/count-palindromic-subsequences/",
            },
            {
              title: "2163. 删除元素后和的最小差值",
              score: 2226,
              src: "/minimum-difference-in-sums-after-removal-of-elements/",
            },
            {
              title: "2565. 最少得分子序列",
              score: 2433,
              src: "/subsequence-with-the-minimum-score/",
            },
            {
              title: "2552. 统计上升四元组",
              score: 2433,
              src: "/count-increasing-quadruplets/",
            },
            {
              title: "3003. 执行操作后的最大分割数量",
              score: 3040,
              src: "/maximize-the-number-of-partitions-after-operations/",
            },
            {
              title: "487. 最大连续 1 的个数 II（会员题）",
              src: "/max-consecutive-ones-ii/",
            },
            {
              title: "1746. 经过一次操作后的最大子数组和（会员题）",
              src: "/maximum-subarray-sum-after-one-operation/",
            },
          ],
        },
      ],
    },
    {
      title: "*专题：输出具体方案（打印方案）",
      child: [
        { title: "368. 最大整除子集", src: "/largest-divisible-subset/" },
        {
          title: "1449. 数位成本和为目标值的最大数字",
          src: "/form-largest-integer-with-digits-that-add-up-to-target/",
          score: 1928,
        },
        {
          title: "1092. 最短公共超序列",
          src: "/shortest-common-supersequence/",
          score: 1977,
        },
        {
          title: "943. 最短超级串",
          src: "/find-the-shortest-superstring/",
          score: 2186,
        },
        {
          title: "1125. 最小的必要团队",
          src: "/smallest-sufficient-team/",
          score: 2251,
        },
        {
          title: "3149. 找出分数最低的排列",
          src: "/find-the-minimum-cost-array-permutation/",
          score: 2642,
        },
        { title: "656. 金币路径", src: "/coin-path/" },
        {
          title: "471. 编码最短长度的字符串",
          src: "/encode-string-with-shortest-length/",
        },
      ],
    },
    {
      title: "专题：把 X 变成 Y",
      child: [
        {
          title: "",
          isLeaf: true,
          summary: "<p>部分题目也可以用 BFS 解决。</p>",
          child: [
            { title: "397. 整数替换", src: "/integer-replacement/" },
            {
              title: "2998. 使 X 和 Y 相等的最少操作次数",
              score: 1795,
              src: "/minimum-number-of-operations-to-make-x-and-y-equal/",
            },
            {
              title: "2059. 转化数字的最小运算数",
              score: 1850,
              src: "/minimum-operations-to-convert-number/",
            },
            {
              title: "991. 坏了的计算器",
              score: 1910,
              src: "/broken-calculator/",
            },
            {
              title: "1553. 吃掉 N 个橘子的最少天数",
              score: 2049,
              src: "/minimum-number-of-days-to-eat-n-oranges/",
            },
          ],
        },
      ],
    },
    {
      title: "专题：跳跃游戏",
      summary: "",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "1306. 跳跃游戏 III",
              score: 1397,
              src: "/jump-game-iii/",
            },
            {
              title: "2770. 达到末尾下标所需的最大跳跃次数",
              score: 1534,
              src: "/maximum-number-of-jumps-to-reach-the-last-index/",
            },
            { title: "403. 青蛙过河", src: "/frog-jump/" },
            {
              title: "1340. 跳跃游戏 V",
              score: 1867,
              src: "/jump-game-v/",
            },
            {
              title: "1871. 跳跃游戏 VII",
              score: 1897,
              src: "/jump-game-vii/",
            },
            {
              title: "1696. 跳跃游戏 VI",
              score: 1955,
              src: "/jump-game-vi/",
            },
            { title: "975. 奇偶跳", score: 2080, src: "/odd-even-jump/" },
            {
              title: "1654. 到家的最少跳跃次数",
              score: 2125,
              src: "/minimum-jumps-to-reach-home/",
            },
            {
              title: "LCP 09. 最小跳跃次数",
              src: "/zui-xiao-tiao-yue-ci-shu/",
            },
            { title: "LCP 20. 快速公交", src: "/meChtZ/" },
            { title: "656. 金币路径（会员题）", src: "/coin-path/" },
            {
              title: "2297. 跳跃游戏 VIII（会员题）",
              src: "/jump-game-viii/",
            },
          ],
        },
      ],
    },
    {
      title: "其它 DP",
      child: [
        {
          title: "",
          summary: "套路不固定，故放在最后。",
          isLeaf: true,
          child: [
            {
              title: "1526. 形成目标数组的子数组最少增加次数",
              src: "/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
              score: 1873,
            },
            {
              title: "823. 带因子的二叉树",
              src: "/binary-trees-with-factors/",
              score: 1900,
            },
            {
              title: "940. 不同的子序列 II",
              src: "/distinct-subsequences-ii/",
              score: 1986,
            },
            { title: "650. 两个键的键盘", src: "/2-keys-keyboard/" },
            {
              title: "467. 环绕字符串中唯一的子字符串",
              src: "/unique-substrings-in-wraparound-string/",
            },
            {
              title: "2262. 字符串的总引力",
              src: "/total-appeal-of-a-string/",
              score: 2034,
            },
            {
              title: "828. 统计子串中的唯一字符",
              src: "/count-unique-characters-of-all-substrings-of-a-given-string/",
              score: 2035,
            },
            {
              title: "2746. 字符串连接删减字母",
              src: "/decremental-string-concatenation/",
              score: 2127,
            },
            {
              title: "2930. 重新排列后包含指定子字符串的字符串数目",
              src: "/number-of-strings-which-can-be-rearranged-to-contain-substring/",
              score: 2228,
            },
            {
              title: "3041. 修改数组后最大化数组中的连续元素数目",
              src: "/maximize-consecutive-elements-in-an-array-after-modification/",
              score: 2232,
            },
            {
              title: "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
              src: "/number-of-ways-to-reorder-array-to-get-same-bst/",
              score: 2289,
            },
            { title: "818. 赛车", src: "/race-car/", score: 2392 },
            {
              title: "920. 播放列表的数量",
              src: "/number-of-music-playlists/",
              score: 2400,
            },
            {
              title: "1388. 3n 块披萨",
              src: "/pizza-with-3n-slices/",
              score: 2410,
            },
            {
              title: "1987. 不同的好子序列数目",
              src: "/number-of-unique-good-subsequences/",
              score: 2423,
            },
            {
              title: "903. DI 序列的有效排列",
              src: "/valid-permutations-for-di-sequence/",
              score: 2434,
            },
            {
              title: "2272. 最大波动的子字符串",
              src: "/substring-with-largest-variance/",
              score: 2516,
            },
            {
              title: "1896. 反转表达式值的最少操作次数",
              src: "/minimum-cost-to-change-the-final-value-of-expression/",
              score: 2532,
            },
            {
              title: "1531. 压缩字符串 II",
              src: "/string-compression-ii/",
              score: 2576,
            },
            {
              title: "964. 表示数字的最少运算符",
              src: "/least-operators-to-express-number/",
              score: 2595,
            },
            {
              title: "1787. 使所有区间的异或结果为零",
              src: "/make-the-xor-of-all-segments-equal-to-zero/",
              score: 2641,
            },
            {
              title: "2060. 同源字符串检测",
              src: "/check-if-an-original-string-exists-given-two-encoded-strings/",
              score: 2804,
            },
            {
              title: "2809. 使数组和小于等于 x 的最少时间",
              src: "/minimum-time-to-make-array-sum-at-most-x/",
              score: 2979,
            },
            { title: "LCP 14. 切分数组", src: "/qie-fen-shu-zu/" },
            { title: "LCP 36. 最多牌组数", src: "/Up5XYM/" },
            { title: "LCP 38. 守卫城堡", src: "/7rLGCR/" },
            { title: "LCP 43. 十字路口的交通", src: "/Y1VbOX/" },
            { title: "LCP 65. 舒适的湿度", src: "/3aqs1c/" },
            {
              title: "2189. 建造纸牌屋的方法数",
              src: "/number-of-ways-to-build-house-of-cards/",
            },
            {
              title: "2597. 美丽子集的数目",
              src: "/the-number-of-beautiful-subsets/",
              score: 2024,
            },
            {
              title: "2638. 统计 K-Free 子集的总数",
              src: "/count-the-number-of-k-free-subsets/",
            },
          ],
        },
      ],
    },
  ],
} as ProblemCategory;
