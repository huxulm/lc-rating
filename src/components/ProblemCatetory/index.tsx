import RatingCircle, { ColorRating } from "../RatingCircle";

type ProblemCategory = {
  sort: Number;
  title: string;
  summary?: string;
  src?: string;
  isLeaf?: boolean;
  solution?: string;
  score?: Number;
  child?: ProblemCategory[];
};

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
                solution:
                  "https://leetcode.cn/problems/climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-7zm1/",
              },
              {
                title: "746. 使用最小花费爬楼梯",
                sort: 1,
                src: "https://leetcode.cn/problems/min-cost-climbing-stairs/",
                solution:
                  "https://leetcode.cn/problems/min-cost-climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-j99e/",
              },
              {
                title: "377. 组合总和 Ⅳ",
                sort: 2,
                src: "https://leetcode.cn/problems/combination-sum-iv/",
              },
              {
                title: "2466. 统计构造好字符串的方案数",
                src: "https://leetcode.cn/problems/count-ways-to-build-good-strings/",
                score: 1857,
              },

              {
                title: "2533. 好二进制字符串的数量",
                src: "https://leetcode.cn/problems/number-of-good-binary-strings/",
              },
            ],
          },
          {
            title: "1.2 打家劫舍",
            sort: 1,
            isLeaf: true,
            child: [
              {
                title: "198. 打家劫舍",
                sort: 0,
                src: "https://leetcode.cn/problems/house-robber/",
              },
              {
                title: "740. 删除并获得点数",
                sort: 0,
                src: "https://leetcode.cn/problems/delete-and-earn/",
              },
              {
                title: "2320. 统计放置房子的方式数",
                sort: 0,
                score: 1608,
                src: "https://leetcode.cn/problems/count-number-of-ways-to-place-houses/",
              },
              {
                title: "213. 打家劫舍 II",
                sort: 0,
                src: "https://leetcode.cn/problems/house-robber-ii/",
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
              },
            ],
          },
          {
            title: "1.3 最大子数组和（最大子段和）",
            sort: 2,
            isLeaf: true,
            child: [
              {
                title: "53. 最大子数组和",
                src: "https://leetcode.cn/problems/maximum-subarray/",
                sort: 0,
              },
              {
                title: "2606. 找到最大开销的子字符串",
                score: 1422,
                src: "https://leetcode.cn/problems/find-the-substring-with-maximum-cost/",
                sort: 0,
              },
              {
                title: "1749. 任意子数组和的绝对值的最大值",
                src: "https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/",
                sort: 0,
                score: 1542,
              },
              {
                title: "1191. K 次串联后最大子数组之和",
                src: "https://leetcode.cn/problems/k-concatenation-maximum-sum/",
                sort: 0,
                score: 1748,
              },
              {
                title: "918. 环形子数组的最大和",
                src: "https://leetcode.cn/problems/maximum-sum-circular-subarray/",
                sort: 0,
                score: 1777,
              },
              {
                title: "2321. 拼接数组的最大分数",
                src: "https://leetcode.cn/problems/maximum-score-of-spliced-array/",
                sort: 0,
                score: 1791,
              },
              {
                title: "363. 矩形区域不超过 K 的最大数值和",
                src: "https://leetcode.cn/problems/max-sum-of-rectangle-no-larger-than-k/",
                sort: 0,
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
                src: "https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/",
                sort: 0,
              },
              {
                title: "62. 不同路径",
                src: "https://leetcode.cn/problems/unique-paths/",
                sort: 0,
              },
              {
                title: "63. 不同路径 II",
                src: "https://leetcode.cn/problems/unique-paths-ii/",
                sort: 0,
              },
              {
                title: "64. 最小路径和",
                src: "https://leetcode.cn/problems/minimum-path-sum/",
                sort: 0,
              },
              {
                title: "120. 三角形最小路径和",
                src: "https://leetcode.cn/problems/triangle/",
                sort: 0,
              },
              {
                title: "931. 下降路径最小和 1573",
                src: "https://leetcode.cn/problems/minimum-falling-path-sum/",
                sort: 0,
              },
              {
                title: "2684. 矩阵中移动的最大次数",
                src: "https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid/",
                sort: 0,
                score: 1626,
              },
              {
                title: "2304. 网格中的最小路径代价",
                src: "https://leetcode.cn/problems/minimum-path-cost-in-a-grid/",
                sort: 0,
                score: 1658,
              },
              {
                title: "1289. 下降路径最小和 II",
                src: "https://leetcode.cn/problems/minimum-falling-path-sum-ii/",
                sort: 0,
                score: 1697,
              },
            ],
          },
          {
            title: "2.2 进阶",
            isLeaf: true,
            child: [
              {
                title: "1594. 矩阵的最大非负积",
                score: 1807,
                src: "https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/",
                sort: 0,
              },
              {
                title: "1301. 最大得分的路径数目",
                score: 1853,
                src: "https://leetcode.cn/problems/number-of-paths-with-max-score/",
                sort: 0,
              },
              {
                title: "2435. 矩阵中和能被 K 整除的路径",
                score: 1952,
                src: "https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k/",
                sort: 0,
              },
              {
                title: "174. 地下城游戏",
                src: "https://leetcode.cn/problems/dungeon-game/",
                sort: 0,
              },
              {
                title: "741. 摘樱桃",
                src: "https://leetcode.cn/problems/cherry-pickup/",
                sort: 0,
              },
              {
                title: "1463. 摘樱桃 II",
                src: "https://leetcode.cn/problems/cherry-pickup-ii/",
                sort: 0,
                score: 1957,
              },
              {
                title: "329. 矩阵中的最长递增路径",
                src: "https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/",
                sort: 0,
              },
              {
                title: "2328. 网格图中递增路径的数目",
                src: "https://leetcode.cn/problems/number-of-increasing-paths-in-a-grid/",
                sort: 0,
                score: 2001,
              },
              {
                title: "2267. 检查是否有合法括号字符串路径",
                src: "https://leetcode.cn/problems/check-if-there-is-a-valid-parentheses-string-path/",
                sort: 0,
                score: 2085,
              },
              {
                title: "1937. 扣分后的最大得分",
                src: "https://leetcode.cn/problems/maximum-number-of-points-with-cost/",
                sort: 0,
                score: 2106,
              },
              {
                title: "2510. 检查是否有路径经过相同数量的 0 和 1（会员题）",
                src: "https://leetcode.cn/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/",
                sort: 0,
              },
            ],
          },
        ],
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
              {
                title: "2915. 和为目标值的最长子序列的长度",
                src: "https://leetcode.cn/problems/length-of-the-longest-subsequence-that-sums-to-target/",
                sort: 0,
                score: 1659,
              },
              {
                title: "416. 分割等和子集",
                src: "https://leetcode.cn/problems/partition-equal-subset-sum/",
                sort: 0,
              },
              {
                title: "494. 目标和",
                src: "https://leetcode.cn/problems/target-sum/",
                sort: 0,
              },
              {
                title: "2787. 将一个数字表示成幂的和的方案数",
                src: "https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/",
                sort: 0,
                score: 1818,
              },
              {
                title: "474. 一和零（二维）",
                src: "https://leetcode.cn/problems/ones-and-zeroes/",
                sort: 0,
              },
              {
                title: "1049. 最后一块石头的重量 II",
                src: "https://leetcode.cn/problems/last-stone-weight-ii/",
                sort: 0,
                score: 2092,
              },
              {
                title: "1774. 最接近目标价格的甜点成本",
                src: "https://leetcode.cn/problems/closest-dessert-cost/",
                sort: 0,
              },
              {
                title: "879. 盈利计划",
                src: "https://leetcode.cn/problems/profitable-schemes/",
                sort: 0,
                score: 2204,
              },
              {
                title: "3082. 求出所有子序列的能量和",
                src: "https://leetcode.cn/problems/find-the-sum-of-the-power-of-all-subsequences/",
                sort: 0,
                score: 2300,
              },
              {
                title: "956. 最高的广告牌",
                src: "https://leetcode.cn/problems/tallest-billboard/",
                sort: 0,
                score: 2381,
              },
              {
                title: "2518. 好分区的数目",
                src: "https://leetcode.cn/problems/number-of-great-partitions/",
                sort: 0,
                score: 2415,
              },
              {
                title: "2742. 给墙壁刷油漆",
                src: "https://leetcode.cn/problems/painting-the-walls/",
                sort: 0,
                score: 2425,
              },
              {
                title: "LCP 47. 入场安检",
                src: "https://leetcode.cn/problems/oPs9Bm/",
                sort: 0,
              },
              {
                title: "2291. 最大股票收益（会员题）",
                src: "https://leetcode.cn/problems/maximum-profit-from-trading-stocks/",
                sort: 0,
              },
              {
                title: "2431. 最大限度地提高购买水果的口味（会员题）",
                src: "https://leetcode.cn/problems/maximize-total-tastiness-of-purchased-fruits/",
                sort: 0,
              },
            ],
          },
          {
            title: "3.2 完全背包",
            summary: "物品可以重复选，无个数限制。",
            sort: 1,
            isLeaf: true,
            child: [
              {
                title: "322. 零钱兑换",
                src: "https://leetcode.cn/problems/coin-change/",
                sort: 0,
              },
              {
                title: "518. 零钱兑换 II",
                src: "https://leetcode.cn/problems/coin-change-ii/",
                sort: 0,
              },
              {
                title: "279. 完全平方数",
                src: "https://leetcode.cn/problems/perfect-squares/",
                sort: 0,
              },
              {
                title: "1449. 数位成本和为目标值的最大数字 打印方案",
                src: "https://leetcode.cn/problems/form-largest-integer-with-digits-that-add-up-to-target/",
                sort: 0,
                score: 1927,
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
                src: "https://leetcode.cn/problems/count-of-sub-multisets-with-bounded-sum/",
                sort: 0,
                score: 1910,
              },
              {
                title: "2902. 和带限制的子多重集合的数目",
                src: "",
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
                src: "https://leetcode.cn/problems/number-of-ways-to-earn-points/",
                sort: 0,
                score: 1654,
              },
              {
                title: "1981. 最小化目标值与所选元素的差",
                src: "",
                sort: "",
                score: 2010,
              },
              {
                title: "2218. 从栈中取出 K 个硬币的最大面值和",
                src: "",
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
            summary: `讲解<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1TM4y1o7ug/">最长公共子序列 编辑距离</a>`,
            child: [
              {
                title: "1143. 最长公共子序列",
                src: "https://leetcode.cn/problems/longest-common-subsequence/",
                sort: 0,
              },
              {
                title: "583. 两个字符串的删除操作",
                src: "https://leetcode.cn/problems/delete-operation-for-two-strings/",
                sort: 0,
              },
              {
                title: "712. 两个字符串的最小 ASCII 删除和",
                src: "https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings/",
                sort: 0,
              },
              {
                title: "72. 编辑距离",
                src: "https://leetcode.cn/problems/edit-distance/",
                sort: 0,
              },
              {
                title: "97. 交错字符串",
                src: "https://leetcode.cn/problems/interleaving-string/",
                sort: 0,
              },
              {
                title: "115. 不同的子序列",
                src: "https://leetcode.cn/problems/distinct-subsequences/",
                sort: 0,
              },
              {
                title: "1035. 不相交的线",
                src: "https://leetcode.cn/problems/uncrossed-lines/",
                sort: 0,
                score: 1806,
              },
              {
                title: "1458. 两个子序列的最大点积",
                src: "https://leetcode.cn/problems/max-dot-product-of-two-subsequences/",
                sort: 0,
                score: 1824,
              },
              {
                title: "1092. 最短公共超序列",
                src: "https://leetcode.cn/problems/shortest-common-supersequence/",
                sort: 0,
                score: 1977,
              },
              {
                title: "1639. 通过给定词典构造目标字符串的方案数",
                src: "https://leetcode.cn/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/",
                sort: 0,
                score: 2082,
              },
              {
                title: "44. 通配符匹配",
                src: "https://leetcode.cn/problems/wildcard-matching/",
                sort: 0,
              },
              {
                title: "10. 正则表达式匹配",
                src: "https://leetcode.cn/problems/regular-expression-matching/",
                sort: 0,
              },
            ],
          },
          {
            title: "4.2 最长递增子序列",
            isLeaf: true,
            summary: `讲解: <a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ub411Q7sB/">最长递增子序列</a>`,
            child: [
              {
                title: "300. 最长递增子序列",
                src: "https://leetcode.cn/problems/longest-increasing-subsequence/",
              },
              {
                title: "673. 最长递增子序列的个数",
                src: "https://leetcode.cn/problems/number-of-longest-increasing-subsequence/",
              },
              {
                title: "2826. 将三个组排序",
                src: "https://leetcode.cn/problems/sorting-three-groups/",
                score: 1721,
              },
              {
                title: "1671. 得到山形数组的最少删除次数",
                src: "https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/",
                score: 1913,
              },
              {
                title: "1964. 找出到每个位置为止最长的有效障碍赛跑路线",
                src: "https://leetcode.cn/problems/find-the-longest-valid-obstacle-course-at-each-position/",
                score: 1933,
              },
              {
                title: "1626. 无矛盾的最佳球队",
                src: "https://leetcode.cn/problems/best-team-with-no-conflicts/",
                score: 2027,
              },
              {
                title: "354. 俄罗斯套娃信封问题（二维 LIS）",
                src: "https://leetcode.cn/problems/russian-doll-envelopes/",
              },
              {
                title: "1691. 堆叠长方体的最大高度",
                src: "https://leetcode.cn/problems/maximum-height-by-stacking-cuboids/",
                score: 2172,
              },
              {
                title: "960. 删列造序 III",
                src: "https://leetcode.cn/problems/delete-columns-to-make-sorted-iii/",
                score: 2247,
              },
              {
                title: "2407. 最长递增子序列 II",
                src: "https://leetcode.cn/problems/longest-increasing-subsequence-ii/",
                score: 2280,
              },
              {
                title: "1187. 使数组严格递增",
                src: "https://leetcode.cn/problems/make-array-strictly-increasing/",
                score: 2316,
              },
              {
                title: "1713. 得到子序列的最少操作次数",
                src: "https://leetcode.cn/problems/minimum-operations-to-make-a-subsequence/",
                score: 2351,
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
            summary: `<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ho4y1W7QK/">状态机 DP讲解</a> `,
            child: [
              {
                title: "121. 买卖股票的最佳时机",
                src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",
                sort: 0,
              },
              {
                title: "122. 买卖股票的最佳时机 II",
                src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/",
                sort: 0,
              },
              {
                title: "123. 买卖股票的最佳时机 III",
                src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/",
                sort: 0,
              },
              {
                title: "188. 买卖股票的最佳时机 IV",
                src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/",
                sort: 0,
              },
              {
                title: "309. 买卖股票的最佳时机含冷冻期",
                src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
                sort: 0,
              },
              {
                title: "714. 买卖股票的最佳时机含手续费",
                src: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
                sort: 0,
              },
              {
                title: "1493. 删掉一个元素以后全为 1 的最长子数组",
                src: "https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/",
                sort: 0,
                score: 1423,
              },
              {
                title: "1395. 统计作战单位数",
                src: "https://leetcode.cn/problems/count-number-of-teams/",
                sort: 0,
              },
              {
                title: "2745. 构造最长的新字符串",
                src: "https://leetcode.cn/problems/construct-the-longest-new-string/",
                sort: 0,
                score: 1607,
              },
              {
                title: "2222. 选择建筑的方案数",
                src: "https://leetcode.cn/problems/number-of-ways-to-select-buildings/",
                sort: 0,
                score: 1657,
              },
              {
                title: "376. 摆动序列",
                src: "https://leetcode.cn/problems/wiggle-subsequence/",
                sort: 0,
              },
              {
                title: "1567. 乘积为正数的最长子数组长度",
                src: "https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/",
                sort: 0,
                score: 1710,
              },
              {
                title: "1594. 矩阵的最大非负积",
                src: "https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/",
                sort: 0,
              },
              {
                title: "2826. 将三个组排序",
                src: "https://leetcode.cn/problems/sorting-three-groups/",
                sort: 0,
                score: 1721,
              },
              {
                title: "2786. 访问数组中的位置使分数最大",
                src: "https://leetcode.cn/problems/visit-array-positions-to-maximize-score/",
                sort: 0,
                score: 1733,
              },
              {
                title: "1262. 可被三整除的最大和",
                src: "https://leetcode.cn/problems/greatest-sum-divisible-by-three/",
                sort: 0,
                score: 1762,
              },
              {
                title: "1363. 形成三的最大倍数",
                src: "https://leetcode.cn/problems/largest-multiple-of-three/",
                sort: 0,
              },
              {
                title: "1911. 最大子序列交替和",
                src: "https://leetcode.cn/problems/maximum-alternating-subsequence-sum/",
                sort: 0,
                score: 1786,
              },
              {
                title: "2771. 构造最长非递减子数组",
                src: "https://leetcode.cn/problems/longest-non-decreasing-subarray-from-two-arrays/",
                sort: 0,
                score: 1792,
              },
              {
                title: "1186. 删除一次得到子数组最大和",
                src: "https://leetcode.cn/problems/maximum-subarray-sum-with-one-deletion/",
                sort: 0,
                score: 1799,
              },
              {
                title: "935. 骑士拨号器",
                src: "https://leetcode.cn/problems/knight-dialer/",
                sort: 0,
              },
              {
                title: "2919. 使数组变美的最小增量运算数",
                src: "https://leetcode.cn/problems/minimum-increment-operations-to-make-array-beautiful/",
                sort: 0,
                score: 2031,
              },
              {
                title: "801. 使序列递增的最小交换次数",
                src: "https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/",
                sort: 0,
                score: 2066,
              },
              {
                title: "1955. 统计特殊子序列的数目",
                src: "https://leetcode.cn/problems/count-number-of-special-subsequences/",
                sort: 0,
                score: 2125,
              },
              {
                title: "3068. 最大节点价值之和",
                src: "https://leetcode.cn/problems/find-the-maximum-sum-of-node-values/",
                sort: 0,
                score: 2300,
              },
              {
                title: "LCP 19. 秋叶收藏集",
                src: "https://leetcode.cn/problems/UlBDOe/",
                sort: 0,
              },
              {
                title: "276. 栅栏涂色（会员题）",
                src: "https://leetcode.cn/problems/paint-fence/",
                sort: 0,
              },
              {
                title: "1746. 经过一次操作后的最大子数组和（会员题）",
                src: "https://leetcode.cn/problems/maximum-subarray-sum-after-one-operation/",
                sort: 0,
              },
              {
                title: "2036. 最大交替子数组和（会员题）",
                src: "https://leetcode.cn/problems/maximum-alternating-subarray-sum/",
                sort: 0,
              },
              {
                title: "2361. 乘坐火车路线的最少费用（会员题）",
                src: "https://leetcode.cn/problems/minimum-costs-using-the-train-line/",
                sort: 0,
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
                src: "https://leetcode.cn/problems/check-if-there-is-a-valid-partition-for-the-array/",
                sort: 0,
                score: 1780,
              },
              {
                title: "139. 单词拆分",
                src: "https://leetcode.cn/problems/word-break/",
                sort: 0,
              },
            ],
          },
          {
            title: "6.2 计算划分个数",
            summary: `计算最少（最多）可以划分出的子数组个数、划分方案数等。`,
            isLeaf: true,
            child: [
              {
                title: "132. 分割回文串 II",
                src: "https://leetcode.cn/problems/palindrome-partitioning-ii/",
              },
              {
                title: "2707. 字符串中的额外字符",
                src: "https://leetcode.cn/problems/extra-characters-in-a-string/",
                score: 1736,
              },
              {
                title: "2767. 将字符串分割为最少的美丽子字符串",
                src: "https://leetcode.cn/problems/partition-string-into-minimum-beautiful-substrings/",
                score: 1865,
              },
              {
                title: "91. 解码方法",
                src: "https://leetcode.cn/problems/decode-ways/",
              },
              {
                title: "639. 解码方法 II",
                src: "https://leetcode.cn/problems/decode-ways-ii/",
              },
              {
                title: "LCR 165. 解密数字",
                src: "https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/",
              },
              {
                title: "1416. 恢复数组",
                src: "https://leetcode.cn/problems/restore-the-array/",
                score: 1920,
              },
              {
                title: "2472. 不重叠回文子字符串的最大数目",
                src: "https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/",
                score: 2013,
              },
              {
                title: "1105. 填充书架",
                src: "https://leetcode.cn/problems/filling-bookcase-shelves/",
                score: 2014,
              },
              {
                title: "2547. 拆分数组的最小代价",
                src: "https://leetcode.cn/problems/minimum-cost-to-split-an-array/",
                score: 2020,
              },
              {
                title: "2430. 对字母串可执行的最大删除数",
                src: "https://leetcode.cn/problems/maximum-deletions-on-a-string/",
                score: 2102,
              },
              {
                title: "2463. 最小移动总距离",
                src: "https://leetcode.cn/problems/minimum-total-distance-traveled/",
                score: 2454,
              },
              {
                title: "2977. 转换字符串的最小成本 II",
                src: "https://leetcode.cn/problems/minimum-cost-to-convert-string-ii/",
                score: 2696,
              },
              {
                title: "2052. 将句子分隔成行的最低成本（会员题）",
                src: "https://leetcode.cn/problems/minimum-cost-to-separate-sentence-into-rows/",
              },
              {
                title: "2464. 有效分割中的最少子数组数目（会员题）",
                src: "https://leetcode.cn/problems/minimum-subarrays-in-a-valid-split/",
              },
            ],
          },
          {
            title: "6.3 约束划分个数",
            summary: `<p>将数组分成（恰好/至多）k 个连续子数组，计算与这些子数组有关的最优值。</p><p>一般定义 f[i][j] 表示将长为 j 的前缀 a[:j] 分成 i 个连续子数组所得到的最优解。</p><p>枚举最后一个子数组的左端点 L, 从 f[i−1][L] 转移到 f[i][j]，并考虑 a[L:j] 对最优解的影响。</p>`,
            isLeaf: true,
            child: [
              {
                title: "410. 分割数组的最大值",
                src: "https://leetcode.cn/problems/split-array-largest-sum/",
              },
              {
                title: "1043. 分隔数组以得到最大和",
                src: "https://leetcode.cn/problems/partition-array-for-maximum-sum/",
                score: 1916,
              },
              {
                title: "1745. 分割回文串 IV 1925",
                src: "https://leetcode.cn/problems/palindrome-partitioning-iv/",
              },
              {
                title: "813. 最大平均值和的分组",
                src: "https://leetcode.cn/problems/largest-sum-of-averages/",
                score: 1937,
              },
              {
                title: "1278. 分割回文串 III",
                src: "https://leetcode.cn/problems/palindrome-partitioning-iii/",
                score: 1979,
              },
              {
                title: "1335. 工作计划的最低难度",
                src: "https://leetcode.cn/problems/minimum-difficulty-of-a-job-schedule/",
                score: 2035,
              },
              {
                title: "1473. 粉刷房子 III",
                src: "https://leetcode.cn/problems/paint-house-iii/",
                score: 2056,
              },
              {
                title: "1478. 安排邮筒",
                src: "https://leetcode.cn/problems/allocate-mailboxes/",
                score: 2190,
              },
              {
                title: "1959. K 次调整数组大小浪费的最小总空间 *转换",
                src: "https://leetcode.cn/problems/minimum-total-space-wasted-with-k-resizing-operations/",
                score: 2310,
              },
              {
                title: "2478. 完美分割的方案数",
                src: "https://leetcode.cn/problems/number-of-beautiful-partitions/",
                score: 2344,
              },
              {
                title: "3077. K 个不相交子数组的最大能量值",
                src: "https://leetcode.cn/problems/maximum-strength-of-k-disjoint-subarrays/",
              },
              {
                title: "2911. 得到 K 个半回文串的最少修改次数",
                src: "https://leetcode.cn/problems/minimum-changes-to-make-k-semi-palindromes/",
                score: 2608,
              },
            ],
          },
          {
            title: "6.4 不相交区间",
            isLeaf: true,
            child: [
              {
                title: "2830. 销售利润最大化",
                src: "https://leetcode.cn/problems/maximize-the-profit-as-the-salesman/",
                score: 1851,
              },
              {
                title: "2008. 出租车的最大盈利",
                src: "https://leetcode.cn/problems/maximum-earnings-from-taxi/",
                score: 1872,
              },
              {
                title: "1235. 规划兼职工作",
                src: "https://leetcode.cn/problems/maximum-profit-in-job-scheduling/",
                score: 2023,
              },
              {
                title: "1751. 最多可以参加的会议数目 II",
                src: "https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended-ii/",
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
                src: "https://leetcode.cn/problems/minimum-number-of-coins-for-fruits/",
                score: 1709,
              },
              {
                title: "2140. 解决智力问题",
                src: "https://leetcode.cn/problems/solving-questions-with-brainpower/",
                score: 1709,
              },
              {
                title: "983. 最低票价",
                src: "https://leetcode.cn/problems/minimum-cost-for-tickets/",
                score: 1786,
              },
              {
                title: "2901. 最长相邻不相等子序列 II",
                src: "https://leetcode.cn/problems/longest-unequal-adjacent-groups-subsequence-ii/",
                score: 1899,
              },
              {
                title: "2896. 执行操作使两个字符串相等",
                src: "https://leetcode.cn/problems/apply-operations-to-make-two-strings-equal/",
                score: 2172,
              },
              {
                title: "2167. 移除所有载有违禁货物车厢所需的最少时间",
                src: "https://leetcode.cn/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/",
                score: 2219,
              },
              {
                title: "2188. 完成比赛的最少时间",
                src: "https://leetcode.cn/problems/minimum-time-to-finish-the-race/",
                score: 2315,
              },
              {
                title: "1259. 不相交的握手（会员题）",
                src: "https://leetcode.cn/problems/handshakes-that-dont-cross/",
              },
            ],
          },
          {
            title: "7.2 特殊子序列",
            isLeaf: true,
            child: [
              {
                title: "2501. 数组中最长的方波",
                src: "https://leetcode.cn/problems/longest-square-streak-in-an-array/",
                score: 1480,
              },
              {
                title: "1218. 最长定差子序列",
                src: "https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference/",
                score: 1597,
              },
              {
                title: "1027. 最长等差数列",
                src: "https://leetcode.cn/problems/longest-arithmetic-subsequence/",
                score: 1759,
              },
              {
                title: "873. 最长的斐波那契子序列的长度",
                src: "https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/",
                score: 1911,
              },
              {
                title: "446. 等差数列划分 II - 子序列",
                src: "https://leetcode.cn/problems/arithmetic-slices-ii-subsequence/",
              },
              {
                title: "1048. 最长字符串链",
                src: "https://leetcode.cn/problems/longest-string-chain/",
              },
            ],
          },
          {
            title: "7.3 矩阵快速幂优化",
            summary: `除了 2851 题必须用矩阵快速幂优化以外，其余题目都可以用线性 DP 做出。`,
            isLeaf: true,
            child: [
              {
                title: "70. 爬楼梯",
                src: "https://leetcode.cn/problems/climbing-stairs/",
              },
              {
                title: "509. 斐波那契数",
                src: "https://leetcode.cn/problems/fibonacci-number/",
              },
              {
                title: "1137. 第 N 个泰波那契数",
                src: "https://leetcode.cn/problems/n-th-tribonacci-number/",
              },
              {
                title: "1220. 统计元音字母序列的数目",
                src: "https://leetcode.cn/problems/count-vowels-permutation/",
              },
              {
                title: "552. 学生出勤记录 II",
                src: "https://leetcode.cn/problems/student-attendance-record-ii/",
              },
              {
                title: "790. 多米诺和托米诺平铺",
                src: "https://leetcode.cn/problems/domino-and-tromino-tiling/",
              },
              {
                title: "2851. 字符串转换",
                src: "https://leetcode.cn/problems/string-transformation/",
                score: 2858,
              },
            ],
          },
          {
            title: "7.4 多维",
            isLeaf: true,
            child: [
              {
                title: "2400. 恰好移动 k 步到达某一位置的方法数目",
                src: "https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/",
                score: 1751,
              },
              {
                title: "2370. 最长理想子序列",
                src: "https://leetcode.cn/problems/longest-ideal-subsequence/",
                score: 1835,
              },
              {
                title: "1269. 停在原地的方案数",
                src: "https://leetcode.cn/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/",
                score: 1854,
              },
              {
                title: "576. 出界的路径数",
                src: "https://leetcode.cn/problems/out-of-boundary-paths/",
              },
              {
                title: "403. 青蛙过河",
                src: "https://leetcode.cn/problems/frog-jump/",
              },
              {
                title: "1223. 掷骰子模拟",
                src: "https://leetcode.cn/problems/dice-roll-simulation/",
                score: 2008,
              },
              {
                title: "1320. 二指输入的的最小距离",
                src: "https://leetcode.cn/problems/minimum-distance-to-type-a-word-using-two-fingers/",
                score: 2028,
              },
              {
                title: "1575. 统计所有可行路径",
                src: "https://leetcode.cn/problems/count-all-possible-routes/",
                score: 2055,
              },
              {
                title: "2318. 不同骰子序列的数目",
                src: "https://leetcode.cn/problems/number-of-distinct-roll-sequences/",
                score: 2090,
              },
              {
                title: "2088. 统计农场中肥沃金字塔的数目",
                src: "https://leetcode.cn/problems/count-fertile-pyramids-in-a-land/",
                score: 2105,
              },
              {
                title: "2209. 用地毯覆盖后的最少白色砖块",
                src: "https://leetcode.cn/problems/minimum-white-tiles-after-covering-with-carpets/",
                score: 2106,
              },
              {
                title: "1444. 切披萨的方案数",
                src: "https://leetcode.cn/problems/number-of-ways-of-cutting-a-pizza/",
                score: 2127,
              },
              {
                title: "1420. 生成数组",
                src: "https://leetcode.cn/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/",
                score: 2176,
              },
              {
                title: "629. K 个逆序对数组",
                src: "https://leetcode.cn/problems/k-inverse-pairs-array/",
              },
              {
                title: "1866. 恰有 K 根木棍可以看到的排列数目",
                src: "https://leetcode.cn/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/",
                score: 2333,
              },
              {
                title: "2312. 卖木头块",
                src: "https://leetcode.cn/problems/selling-pieces-of-wood/",
                score: 2363,
              },
              {
                title: "887. 鸡蛋掉落",
                src: "https://leetcode.cn/problems/super-egg-drop/",
                score: 2377,
              },
              {
                title: "1884. 鸡蛋掉落-两枚鸡蛋",
                src: "https://leetcode.cn/problems/egg-drop-with-2-eggs-and-n-floors/",
              },
              {
                title: "1388. 3n 块披萨",
                src: "https://leetcode.cn/problems/pizza-with-3n-slices/",
                score: 2410,
              },
              {
                title: "1900. 最佳运动员的比拼回合",
                src: "https://leetcode.cn/problems/the-earliest-and-latest-rounds-where-players-compete/",
                score: 2455,
              },
              {
                title:
                  "1883. 准时抵达会议现场的最小跳过休息次数 避免浮点运算的技巧",
                src: "https://leetcode.cn/problems/minimum-skips-to-arrive-at-meeting-on-time/",
                score: 2588,
              },
              {
                title: "LCP 57. 打地鼠",
                src: "https://leetcode.cn/problems/ZbAuEH/",
              },
              {
                title: "256. 粉刷房子（会员题）",
                src: "https://leetcode.cn/problems/paint-house/",
              },
              {
                title: "265. 粉刷房子 II（会员题）",
                src: "https://leetcode.cn/problems/paint-house-ii/",
              },
              {
                title: "568. 最大休假天数（会员题）",
                src: "https://leetcode.cn/problems/maximum-vacation-days/",
              },
              {
                title: "1692. 计算分配糖果的不同方式（会员题）",
                src: "https://leetcode.cn/problems/count-ways-to-distribute-candies/",
              },
              {
                title: "2143. 在两个数组的区间中选取数字（会员题）",
                src: "https://leetcode.cn/problems/choose-numbers-from-two-arrays-in-range/",
              },
            ],
          },
        ],
      },
      {
        title: "八、区间 DP",
        summary: `讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1Gs4y1E7EU/">区间 DP</a>从数组的左右两端不断缩短，求解关于某段下标区间的最优值。
                一般定义f[i][j] 表示下标区间 [i,j] 的最优值。`,
        child: [
          {
            title: "8.1 最长回文子序列",
            isLeaf: true,
            child: [
              {
                title: "516. 最长回文子序列",
                src: "https://leetcode.cn/problems/count-different-palindromic-subsequences/",
              },
              {
                title: "730. 统计不同回文子序列",
                src: "https://leetcode.cn/problems/count-different-palindromic-subsequences/",
              },
              {
                title: "1312. 让字符串成为回文串的最少插入次数",
                src: "https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
                score: 1787,
              },
              {
                title: "1771. 由子序列构造的最长回文串的长度",
                src: "https://leetcode.cn/problems/maximize-palindrome-length-from-subsequences/",
                score: 2182,
              },
              {
                title: "1682. 最长回文子序列 II（会员题）",
                src: "https://leetcode.cn/problems/longest-palindromic-subsequence-ii/",
              },
              {
                title: "1216. 验证回文串 III（会员题）",
                src: "https://leetcode.cn/problems/valid-palindrome-iii/",
              },
              {
                title: "1246. 删除回文子数组（会员题）",
                src: "https://leetcode.cn/problems/palindrome-removal/",
              },
            ],
          },
          {
            title: "8.2 其它区间 DP",
            isLeaf: true,
            child: [
              {
                title: "5. 最长回文子串",
                src: "https://leetcode.cn/problems/longest-palindromic-substring/",
              },
              {
                title: "3040. 相同分数的最大操作数目 II",
                src: "https://leetcode.cn/problems/maximum-number-of-operations-with-the-same-score-ii/",
                score: 1709,
              },
              {
                title: "375. 猜数字大小 II",
                src: "https://leetcode.cn/problems/guess-number-higher-or-lower-ii/",
              },
              {
                title: "1130. 叶值的最小代价生成树",
                src: "https://leetcode.cn/problems/minimum-cost-tree-from-leaf-values/",
                score: 1919,
              },
              {
                title: "96. 不同的二叉搜索树",
                src: "https://leetcode.cn/problems/unique-binary-search-trees/",
              },
              {
                title: "1770. 执行乘法运算的最大分数",
                src: "https://leetcode.cn/problems/maximum-score-from-performing-multiplication-operations/",
                score: 2068,
              },
              {
                title: "1547. 切棍子的最小成本",
                src: "https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/",
                score: 2116,
              },
              {
                title: "1039. 多边形三角剖分的最低得分",
                src: "https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/solution/shi-pin-jiao-ni-yi-bu-bu-si-kao-dong-tai-aty6/",
                score: 2130,
              },
              {
                title: "1000. 合并石头的最低成本",
                src: "https://leetcode.cn/problems/minimum-cost-to-merge-stones/",
                score: 2423,
              },
              {
                title: "2019. 解出数学表达式的学生分数",
                src: "https://leetcode.cn/problems/the-score-of-students-solving-math-expression/",
                score: 2584,
              },
              {
                title: "87. 扰乱字符串",
                src: "https://leetcode.cn/problems/scramble-string/",
              },
              {
                title: "312. 戳气球",
                src: "https://leetcode.cn/problems/burst-balloons/",
              },
              {
                title: "664. 奇怪的打印机",
                src: "https://leetcode.cn/problems/strange-printer/",
              },
              {
                title: "546. 移除盒子 同 CF1107E，可能是力扣上最难的 DP",
                src: "https://leetcode.cn/problems/remove-boxes/",
              },
              {
                title: "471. 编码最短长度的字符串（会员题）",
                src: "https://leetcode.cn/problems/encode-string-with-shortest-length/",
              },
              {
                title: "3018. 可处理的最大删除操作数 I（会员题）",
                src: "https://leetcode.cn/problems/maximum-number-of-removal-queries-that-can-be-processed-i/",
              },
            ],
          },
        ],
      },
      {
        title: "九、状态压缩 DP（状压 DP）",
        child: [
          {
            title: "9.1 排列型 ① 相邻无关",
            isLeaf: true,
            child: [
              {
                title: "526. 优美的排列",
                src: "https://leetcode.cn/problems/beautiful-arrangement/",
              },
              {
                title: "1879. 两个数组最小的异或值之和",
                src: "https://leetcode.cn/problems/minimum-xor-sum-of-two-arrays/",
                score: 2145,
              },
              {
                title: "2850. 将石头分散到网格图的最少移动次数",
                src: "https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/",
                score: 2001,
              },
              {
                title: "1947. 最大兼容性评分和",
                src: "https://leetcode.cn/problems/maximum-compatibility-score-sum/",
                score: 1704,
              },
              {
                title: "1799. N 次操作后的最大分数和",
                src: "https://leetcode.cn/problems/maximize-score-after-n-operations/",
                score: 2073,
              },
              {
                title: "2172. 数组的最大与和",
                src: "https://leetcode.cn/problems/maximum-and-sum-of-array/",
                score: 2392,
              },
              {
                title: "1066. 校园自行车分配 II（会员题）",
                src: "https://leetcode.cn/problems/campus-bikes-ii/",
              },
              {
                title: "2992. 自整除排列的数量（会员题）",
                src: "https://leetcode.cn/problems/number-of-self-divisible-permutations/",
              },
              {
                title: "2403. 杀死所有怪物的最短时间（会员题）",
                src: "https://leetcode.cn/problems/minimum-time-to-kill-all-monsters/",
              },
            ],
          },
          {
            title: "排列型 ② 相邻相关",
            isLeaf: true,
            child: [
              {
                title: "996. 正方形数组的数目",
                src: "https://leetcode.cn/problems/number-of-squareful-arrays/",
                score: 1932,
              },
              {
                title: "2741. 特别的排列",
                src: "https://leetcode.cn/problems/special-permutations/",
                score: 2021,
              },
              {
                title: "1681. 最小不兼容性",
                src: "https://leetcode.cn/problems/minimum-incompatibility/",
                score: 2390,
              },
            ],
          },
          {
            title: "9.3 旅行商问题（TSP）",
            isLeaf: true,
            child: [
              {
                title: "943. 最短超级串",
                src: "https://leetcode.cn/problems/find-the-shortest-superstring/",
                score: 2186,
              },
              {
                title: "847. 访问所有节点的最短路径",
                src: "https://leetcode.cn/problems/shortest-path-visiting-all-nodes/",
                score: 2201,
              },
              {
                title: "LCP 13. 寻宝",
                src: "https://leetcode.cn/problems/xun-bao/",
              },
              {
                title: "2247. K 条高速公路的最大旅行费用（会员题）",
                src: "https://leetcode.cn/problems/maximum-cost-of-trip-with-k-highways/",
              },
            ],
          },
          {
            title: "9.4 枚举子集的子集",
            isLeaf: true,
            summary: `一般定义 f[S] 表示已选（或者未选）的子集为 S 时，和题目有关的最优值。通过枚举 S（或者 S 的补集）的子集来转移。`,
            child: [
              {
                title: "2305. 公平分发饼干 1887",
                src: "https://leetcode.cn/problems/fair-distribution-of-cookies/",
              },
              {
                title: "1986. 完成任务的最少工作时间段 1995",
                src: "https://leetcode.cn/problems/minimum-number-of-work-sessions-to-finish-the-tasks/",
              },
              {
                title: "1494. 并行课程 II 2082",
                src: "https://leetcode.cn/problems/parallel-courses-ii/",
              },
              {
                title: "1723. 完成所有工作的最短时间 2284",
                src: "https://leetcode.cn/problems/find-minimum-time-to-finish-all-jobs/",
              },
              {
                title: "1655. 分配重复整数 2307",
                src: "https://leetcode.cn/problems/distribute-repeating-integers/",
              },
              {
                title: "1349. 参加考试的最大学生数 2386",
                src: "https://leetcode.cn/problems/maximum-students-taking-exam/",
              },
              {
                title: "1681. 最小不兼容性 2390 ",
                src: "https://leetcode.cn/problems/minimum-incompatibility/",
              },
              {
                title: "2572. 无平方子集计数 2420",
                src: "https://leetcode.cn/problems/count-the-number-of-square-free-subsets/",
              },
              {
                title: "1994. 好子集的数目 2465",
                src: "https://leetcode.cn/problems/the-number-of-good-subsets/",
              },
              {
                title: "LCP 04. 覆盖",
                src: "https://leetcode.cn/problems/broken-board-dominoes/",
              },
              {
                title: "LCP 53. 守护太空城",
                src: "https://leetcode.cn/problems/EJvmW4/",
              },
              {
                title: "465. 最优账单平衡（会员题）",
                src: "https://leetcode.cn/problems/optimal-account-balancing/",
              },
              {
                title: "2152. 穿过所有点的所需最少直线数量（会员题）",
                src: "https://leetcode.cn/problems/minimum-number-of-lines-to-cover-points/",
              },
            ],
          },
          {
            title: "9.5 其它状压 DP",
            isLeaf: true,
            child: [
              {
                title: "698. 划分为k个相等的子集",
                src: "https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/",
              },
              {
                title: "1411. 给 N x 3 网格图涂色的方案数 1845",
                src: "https://leetcode.cn/problems/number-of-ways-to-paint-n-3-grid/",
              },
              {
                title: "2002. 两个回文子序列长度的最大乘积 1869",
                src: "https://leetcode.cn/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/",
              },
              {
                title: "1931. 用三种不同颜色为网格涂色 2170",
                src: "https://leetcode.cn/problems/painting-a-grid-with-three-different-colors/",
              },
              {
                title: "1125. 最小的必要团队 2251",
                src: "https://leetcode.cn/problems/smallest-sufficient-team/",
              },
              {
                title: "1434. 每个人戴不同帽子的方案数 2273",
                src: "https://leetcode.cn/problems/number-of-ways-to-wear-different-hats-to-each-other/",
              },
              {
                title: "691. 贴纸拼词",
                src: "https://leetcode.cn/problems/stickers-to-spell-word/",
              },
              {
                title: "1595. 连通两组点的最小成本 2538",
                src: "https://leetcode.cn/problems/minimum-cost-to-connect-two-groups-of-points/",
              },
              {
                title: "1815. 得到新鲜甜甜圈的最多组数 2559",
                src: "https://leetcode.cn/problems/maximum-number-of-groups-getting-fresh-donuts/",
              },
              {
                title: "1659. 最大化网格幸福感 2655",
                src: "https://leetcode.cn/problems/maximize-grid-happiness/",
              },
              {
                title: "LCP 69. Hello LeetCode!",
                src: "https://leetcode.cn/problems/rMeRt2/",
              },
              {
                title: "LCP 76. 魔法棋盘",
                src: "https://leetcode.cn/problems/1ybDKD/",
              },
              {
                title: "LCP 82. 万灵之树",
                src: "https://leetcode.cn/problems/cnHoX6/",
              },
              {
                title: "351. 安卓系统手势解锁（会员题）",
                src: "https://leetcode.cn/problems/android-unlock-patterns/",
              },
              {
                title: "2184. 建造坚实的砖墙的方法数（会员题）",
                src: "https://leetcode.cn/problems/number-of-ways-to-build-sturdy-brick-wall/",
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
            summary: `<a href="https://www.bilibili.com/video/BV1rS4y1s721/?t=19m36s">v1.0 模板讲解</a><br><a href="https://www.bilibili.com/video/BV1Fg4y1Q7wv/?t=31m28s">v2.0 模板讲解</a>`,
            isLeaf: true,
            child: [
              {
                src: "https://leetcode.cn/problems/count-of-integers/",
                title: "2719. 统计整数数目",
                score: 2355,
              },
              {
                src: "https://leetcode.cn/problems/rotated-digits/",
                title: "788. 旋转数字",
              },
              {
                src: "https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/",
                title: "902. 最大为 N 的数字组合",
                score: 1990,
              },
              {
                src: "https://leetcode.cn/problems/number-of-digit-one/",
                title: "233. 数字 1 的个数",
              },
              {
                src: "https://leetcode.cn/problems/number-of-2s-in-range-lcci/",
                title: "面试题 17.06. 2 出现的次数",
              },
              {
                src: "https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones/",
                title: "600. 不含连续 1 的非负整数",
              },
              {
                src: "https://leetcode.cn/problems/count-special-integers/",
                title: "2376. 统计特殊整数",
                score: 2120,
              },
              {
                src: "https://leetcode.cn/problems/numbers-with-repeated-digits/",
                title: "1012. 至少有 1 位重复的数字",
                score: 2230,
              },
              {
                src: "https://leetcode.cn/problems/count-numbers-with-unique-digits/",
                title: "357. 统计各位数字都不同的数字个数",
              },
              {
                src: "https://leetcode.cn/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/",
                title: "3007. 价值和小于等于 K 的最大数字 做法不止一种",
                score: 2258,
              },
              {
                src: "https://leetcode.cn/problems/number-of-beautiful-integers-in-the-range/",
                title: "2827. 范围中美丽整数的数目",
                score: 2324,
              },
              {
                src: "https://leetcode.cn/problems/count-the-number-of-powerful-integers/",
                title: "2999. 统计强大整数的数目",
                score: 2351,
              },
              {
                src: "https://leetcode.cn/problems/count-stepping-numbers-in-range/",
                title: "2801. 统计范围内的步进数字数目",
                score: 2367,
              },
              {
                src: "https://leetcode.cn/problems/find-all-good-strings/",
                title: "1397. 找到所有好字符串",
                score: 2667,
              },
              {
                src: "https://leetcode.cn/problems/stepping-numbers/",
                title: "1215. 步进数（会员题）",
                score: 1675,
              },
              {
                src: "https://leetcode.cn/problems/digit-count-in-range/",
                title: "1067. 范围内的数字计数（会员题）",
                score: 2025,
              },
              {
                src: "https://leetcode.cn/problems/count-numbers-with-unique-digits-ii/",
                title: "3032. 统计各位数字都不同的数字个数 II（会员题）",
              },
              {
                src: "https://leetcode.cn/problems/maximum-number-of-balls-in-a-box/",
                title: "1742. 盒子中小球的最大数量 *非暴力做法 枚举数位和+DP",
                score: 1278,
              },
              {
                src: "https://leetcode.cn/problems/count-symmetric-integers/",
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
                score: 1894,
                src: "https://leetcode.cn/problems/number-of-people-aware-of-a-secret/",
              },
              {
                title: "1997. 访问完所有房间的第一天",
                score: 2260,
                src: "https://leetcode.cn/problems/first-day-where-you-have-been-in-all-the-rooms/",
              },
              {
                title: "2478. 完美分割的方案数",
                score: 2344,
                src: "https://leetcode.cn/problems/number-of-beautiful-partitions/",
              },
              {
                title: "837. 新 21 点",
                score: 2350,
                src: "https://leetcode.cn/problems/new-21-game/",
              },
              {
                title: "2463. 最小移动总距离",
                src: "https://leetcode.cn/problems/minimum-total-distance-traveled/",
                score: 2454,
              },
              {
                title: "629. K 个逆序对数组",
                src: "https://leetcode.cn/problems/k-inverse-pairs-array/",
              },
              {
                title: "1977. 划分数字的方案数",
                src: "https://leetcode.cn/problems/number-of-ways-to-separate-numbers/",
                score: 2817,
              },
            ],
          },
          {
            title: "11.2 单调栈优化 DP",
            isLeaf: true,
            child: [
              { title: "1335. 工作计划的最低难度", src: "", score: 2035 },
              { title: "2866. 美丽塔 II", src: "", score: 2072 },
              { title: "2617. 网格图中最少访问的格子数", src: "", score: 2582 },
              { title: "2355. 你能拿走的最大图书数量（会员题）", src: "" },
            ],
          },
          {
            title: "11.3 单调队列优化 DP",
            isLeaf: true,
            child: [
              {
                title:
                  "2944. 购买水果需要的最少金币数 可以用单调队列优化到 O(n)",
                score: 1709,
                src: "https://leetcode.cn/problems/minimum-number-of-coins-for-fruits/",
              },
              {
                title: "1696. 跳跃游戏 VI",
                score: 1954,
                src: "https://leetcode.cn/problems/jump-game-vi/",
              },
              {
                title: "1425. 带限制的子序列和",
                score: 2032,
                src: "https://leetcode.cn/problems/constrained-subsequence-sum/",
              },
              {
                title: "375. 猜数字大小 II 可以用单调队列优化到 O(n^2)",
                src: "https://leetcode.cn/problems/guess-number-higher-or-lower-ii/",
              },
              {
                title: "1687. 从仓库到码头运输箱子",
                score: 2610,
                src: "https://leetcode.cn/problems/guess-number-higher-or-lower-ii/",
              },
              {
                title: "2945. 找到最大非递减数组的长度",
                score: 2943,
                src: "https://leetcode.cn/problems/find-maximum-non-decreasing-array-length/",
              },
              {
                title: "2969. 购买水果需要的最少金币数 II（会员题）",
                src: "https://leetcode.cn/problems/minimum-number-of-coins-for-fruits-ii/",
              },
            ],
          },
          {
            title: "11.4 树状数组/线段树优化 DP",
            isLeaf: true,
            child: [
              {
                title: "1626. 无矛盾的最佳球队",
                score: 2027,
                src: "https://leetcode.cn/problems/best-team-with-no-conflicts/",
              },
              {
                title: "2407. 最长递增子序列 II",
                score: 2280,
                src: "https://leetcode.cn/problems/longest-increasing-subsequence-ii/",
              },
              {
                title: "2770. 达到末尾下标所需的最大跳跃次数 见我题解下的 评论",
                score: 1533,
                src: "https://leetcode.cn/problems/maximum-number-of-jumps-to-reach-the-last-index/",
              },
              {
                title: "2926. 平衡子序列的最大和",
                score: 2448,
                src: "https://leetcode.cn/problems/maximum-balanced-subsequence-sum/",
              },
              {
                title: "2916. 子数组不同元素数目的平方和 II",
                score: 2816,
                src: "https://leetcode.cn/problems/subarrays-distinct-element-sum-of-squares-ii/",
              },
            ],
          },
          {
            title: "11.5 其它优化 DP",
            isLeaf: true,
            child: [
              { title: "2713. 矩阵中严格递增的单元格数", src: "https://leetcode.cn/problems/maximum-strictly-increasing-cells-in-a-matrix/",score: 2387 },
              { title: "LCP 59. 搭桥过河", src: "https://leetcode.cn/problems/NfY1m5/" },
              {
                title: "2263. 数组变为有序的最小操作次数（会员题）",
                score: 1271,
                src: "https://leetcode.cn/problems/make-array-non-decreasing-or-non-increasing/",
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
                summary: `部分题目也可以用状态机 DP 解决。`,
                isLeaf: true,
                child: [
                    {title: "42. 接雨水（讲解）"},
                    {title: "123. 买卖股票的最佳时机 III 拆分成两个 121 题"},
                    {title: "2256. 最小平均差 1395"},
                    {title: "1493. 删掉一个元素以后全为 1 的最长子数组 1423"},
                    {title: "845. 数组中的最长山脉 1437 *也可以分组循环"},
                    {title: "2909. 元素和最小的山形三元组 II 1479"},
                    {title: "2483. 商店的最少代价 1495"},
                    {title: "1525. 字符串的好分割数目 1500"},
                    {title: "2874. 有序三元组中的最大值 II 1583"},
                    {title: "1031. 两个非重叠子数组的最大和 1680"},
                    {title: "689. 三个无重叠子数组的最大和"},
                    {title: "2420. 找到所有好下标 1695"},
                    {title: "2100. 适合野炊的日子 1702"},
                    {title: "1653. 使字符串平衡的最少删除次数 1794"},
                    {title: "926. 将字符串翻转到单调递增"},
                    {title: "1477. 找两个和为目标值且不重叠的子数组 1851"},
                    {title: "1671. 得到山形数组的最少删除次数 1913"},
                    {title: "238. 除自身以外数组的乘积 ~2000"},
                    {title: "1888. 使二进制字符串字符交替的最少反转次数 2006"},
                    {title: "2906. 构造乘积矩阵 2075"},
                    {title: "2167. 移除所有载有违禁货物车厢所需的最少时间 2219"},
                    {title: "2484. 统计回文子序列数目 2223"},
                    {title: "2163. 删除元素后和的最小差值 2225"},
                    {title: "2565. 最少得分子序列 2432"},
                    {title: "2552. 统计上升四元组 2433"},
                    {title: "3003. 执行操作后的最大分割数量 3039"},
                    {title: "487. 最大连续 1 的个数 II（会员题）"},
                    {title: "1746. 经过一次操作后的最大子数组和（会员题）"},                    
                ]
            }
        ]
      }
    ],
  },
] as ProblemCategory[];

function ProblemCategory({
  title,
  summary,
  data,
  className = "",
  level = 0,
}: ProblemCategoryProps) {
  return (
    <div className={`pb-container p-2 level-${level}` + className}>
      {
        <h3
          className="title p-2"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        ></h3>
      }
      {summary && (
        <p
          className="p-2 rounded summary bg-secondary-subtle text-warning-emphasis"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></p>
      )}
      <div className={`level-${level + 1}`}>
        {data &&
          data.map((item) => {
            return (
              <div className={`pb-container p-2 level-${level + 2}`}>
                {item.isLeaf ? (
                  <ProblemCategoryList data={item} className={`leaf`} />
                ) : (
                  item.child &&
                  item.child?.map((item) => (
                    <ProblemCategory
                      level={level + 3}
                      title={item.title}
                      data={item.child}
                      summary={item.summary}
                    />
                  ))
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

function ProblemCategoryList({
  data,
  className = "",
}: {
  data: ProblemCategory;
  className?: string;
}) {
const getCols = (l: number) => {
    if (l < 12) {
        return ""
    }
    if (l < 20) {
        return "col2"
    }
    return "col3"
}
  return (
    <div className="shadow rounded p-2 leaf">
      <h3 className="title">{data.title}</h3>
      {data.summary && (
        <p
          className="p-2 rounded summary bg-secondary-subtle text-warning-emphasis"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        ></p>
      )}
      <ul
        className={`list p-2 ${
          data.child && getCols(data.child.length)
        }`}
      >
        {data.child &&
          data.child.map((item) => (
            <li className="d-flex justify-content-between">
              <a href={item.src} target="_blank">
                {item.title}
              </a>
              {item.score && (
                <div className="ms-2 text-nowrap">
                  <RatingCircle difficulty={Number(item.score)} />
                  <ColorRating rating={Number(item.score)}>
                    {Number(item.score).toFixed(0)}
                  </ColorRating>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProblemCategory;
