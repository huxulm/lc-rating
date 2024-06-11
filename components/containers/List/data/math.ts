import ProblemCategory from "@components/ProblemCatetory";

export default {
  title: "数学算法（数论/组合/概率期望/博弈/计算几何/随机算法）",
  original_src: "https://leetcode.cn/circle/discuss/IYT3ss/",
  sort: 0,
  child: [
    {
      title: "1 数论",
      child: [
        {
          title: "1.1 判断质数",
          isLeaf: true,
          child: [
            {
              title: "3115. 质数的最大距离",
              src: "/maximum-prime-difference/",
              score: 1295,
            },
            {
              title: "2614. 对角线上的质数",
              src: "/prime-in-diagonal/",
              score: 1376,
            },
            {
              title: "762. 二进制表示中质数个计算置位",
              src: "/prime-number-of-set-bits-in-binary-representation/",
              score: 1384,
            },
            {
              title: "3044. 出现频率最高的质数",
              src: "/most-frequent-prime/",
              score: 1738,
            },
            {
              title: "866. 回文质数",
              src: "/prime-palindrome/",
              score: 1939,
            },
          ],
        },
        {
          title: "1.2 预处理质数（筛质数）",
          isLeaf: true,
          child: [
            {
              title: "204. 计数质数",
              src: "/count-primes/",
            },
            {
              title: "2761. 和等于目标值的质数对",
              src: "/prime-pairs-with-target-sum/",
              score: 1505,
            },
            {
              title: "2523. 范围内最接近的两个质数",
              src: "/closest-prime-numbers-in-range/",
              score: 1650,
            },
            {
              title: "2601. 质数减法运算",
              src: "/prime-subtraction-operation/",
              score: 1780,
            },
          ],
        },
        {
          title: "1.3 质因数分解",
          isLeaf: true,
          child: [
            {
              title: "2521. 数组乘积中的不同质因数数目",
              src: "/distinct-prime-factors-of-product-of-array/",
              score: 1414,
            },
            {
              title: "2507. 使用质因数之和替换后可以取到的最小值",
              src: "/smallest-value-after-replacing-with-sum-of-prime-factors/",
              score: 1500,
            },
            {
              title: "2584. 分割数组使乘积互质",
              src: "/split-the-array-to-make-coprime-products/",
              score: 2160,
            },
            {
              title: "2709. 最大公约数遍历",
              src: "/greatest-common-divisor-traversal/",
              score: 2172,
            },
            {
              title: "2862. 完全子集的最大元素和",
              src: "/maximum-element-sum-of-a-complete-subset-of-indices/",
              score: 2292,
            },
            {
              title: "2818. 操作使得分最大",
              src: "/apply-operations-to-maximize-score/",
              score: 2397,
            },
            {
              title: "1998. 数组的最大公因数排序",
              src: "/gcd-sort-of-an-array/",
              score: 2430,
            },
            {
              title: "1735. 生成乘积数组的方案数",
              src: "/count-ways-to-make-array-with-product/",
              score: 2500,
            },
            {
              title: "2338. 统计理想数组的数目",
              src: "/count-the-number-of-ideal-arrays/",
              score: 2616,
            },
          ],
        },
        {
          title: "1.4 阶乘分解",
          isLeaf: true,
          child: [
            {
              title: "172. 阶乘后的零",
              src: "/factorial-trailing-zeroes/",
            },
            {
              title: "793. 阶乘函数后 K 个零",
              src: "/preimage-size-of-factorial-zeroes-function/",
              score: 2101,
            },
          ],
        },
        {
          title: "1.5 因子",
          isLeaf: true,
          child: [
            {
              title: "2427. 公因子的数目",
              src: "/number-of-common-factors/",
              score: 1173,
            },
            {
              title: "1952. 三除数",
              src: "/three-divisors/",
              score: 1204,
            },
            {
              title: "1492. n 的第 k 个因子",
              src: "/the-kth-factor-of-n/",
              score: 1232,
            },
            {
              title: "507. 完美数",
              src: "/perfect-number/",
            },
            {
              title: "1390. 四因数",
              src: "/four-divisors/",
              score: 1479,
            },
            {
              title: "1362. 最接近的因数",
              src: "/closest-divisors/",
              score: 1534,
            },
            {
              title: "829. 连续整数求和",
              src: "/consecutive-numbers-sum/",
              score: 1695,
            },
            {
              title: "952. 按公因数计算最大组件大小",
              src: "/largest-component-size-by-common-factor/",
              score: 2273,
            },
            {
              title: "1627. 带阈值的图连通性",
              src: "/graph-connectivity-with-threshold/",
              score: 2222,
            },
            {
              title: "2183. 统计可以被 K 整除的下标对数目",
              src: "/count-array-pairs-divisible-by-k/",
              score: 2247,
            },
            {
              title: "2198. 单因数三元组",
              src: "/number-of-single-divisor-triplets/",
            },
            {
              title: "625. 最小因式分解",
              src: "/minimum-factorization/",
            },
            {
              title: "2847. 给定数字乘积的最小数字",
              src: "/smallest-number-with-given-digit-product/",
            },
          ],
        },
        {
          title: "1.6 最大公约数（GCD）",
          isLeaf: true,
          child: [
            {
              title: "1979. 找出数组的最大公约数",
              src: "/find-greatest-common-divisor-of-array/",
              score: 1185,
            },
            {
              title: "2807. 在链表中插入最大公约数",
              src: "/insert-greatest-common-divisors-in-linked-list/",
              score: 1280,
            },
            {
              title: "914. 卡牌分组",
              src: "/x-of-a-kind-in-a-deck-of-cards/",
              score: 1371,
            },
            {
              title: "1071. 字符串的最大公因子",
              src: "/greatest-common-divisor-of-strings/",
              score: 1398,
            },
            {
              title: "2001. 可互换矩形的组数",
              src: "/number-of-pairs-of-interchangeable-rectangles/",
              score: 1436,
            },
            {
              title: "2344. 使数组可以被整除的最少删除次数",
              src: "/minimum-deletions-to-make-array-divisible/",
              score: 1641,
            },
            {
              title: "365. 水壶问题",
              src: "/water-and-jug-problem/",
            },
            {
              title: "858. 镜面反射",
              src: "/mirror-reflection/",
              score: 1881,
            },
            {
              title: "1250. 检查「好数组」",
              src: "/check-if-it-is-a-good-array/",
              score: 1984,
            },
            {
              title: "149. 直线上最多的点数",
              src: "/max-points-on-a-line/",
            },
            {
              title: "2607. 使子数组元素和相等",
              src: "/make-k-subarray-sums-equal/",
              score: 2072,
            },
            {
              title: "2543. 判断一个点是否可以到达",
              src: "/check-if-point-is-reachable/",
              score: 2221,
            },
            {
              title: "2436. 使子数组最大公约数大于一的最小分割数",
              src: "/minimum-split-into-subarrays-with-gcd-greater-than-one/",
            },
          ],
        },
        {
          title: "1.7 GCD 性质",
          isLeaf: true,
          child: [
            {
              title: "2447. 最大公因数等于 K 的子数组数目",
              src: "/number-of-subarrays-with-gcd-equal-to-k/",
              score: 1603,
            },
            {
              title: "2654. 使数组所有元素变成 1 的最少操作次数",
              src: "/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/",
              score: 1929,
            },
            {
              title: "2941. 子数组的最大 GCD-Sum",
              src: "/maximum-gcd-sum-of-a-subarray/",
            },
          ],
        },
        {
          title: "1.8 GCD 与因子",
          isLeaf: true,
          child: [
            {
              title: "1819. 序列中不同最大公约数的数目",
              src: "/number-of-different-subsequences-gcds/",
              score: 2540,
            },
            {
              title: "LCP 14. 切分数组",
              src: "/qie-fen-shu-zu/",
            },
            {
              title: "2464. 有效分割中的最少子数组数目",
              src: "/minimum-subarrays-in-a-valid-split/",
            },
          ],
        },
        {
          title: "1.9 最小公倍数（LCM）",
          isLeaf: true,
          child: [
            {
              title: "2413. 最小偶倍数",
              src: "/smallest-even-multiple/",
              score: 1145,
            },
            {
              title: "2470. 最小公倍数为 K 的子数组数目",
              src: "/number-of-subarrays-with-lcm-equal-to-k/",
              score: 1560,
            },
            {
              title: "2197. 替换数组中的非互质数",
              src: "/replace-non-coprime-numbers-in-array/",
              score: 2058,
            },
          ],
        },
        {
          title: "1.10 互质",
          isLeaf: true,
          child: [
            {
              title: "2748. 美丽下标对的数目",
              src: "/number-of-beautiful-pairs/",
              score: 1302,
            },
            {
              title: "1447. 最简分数",
              src: "/simplified-fractions/",
              score: 1269,
            },
            {
              title: "1766. 互质树",
              src: "/tree-of-coprimes/",
              score: 2232,
            },
          ],
        },
        {
          title: "1.11 同余",
          isLeaf: true,
          child: [
            {
              title: "2453. 摧毁一系列目标",
              src: "/destroy-sequential-targets/",
              score: 1762,
            },
            {
              title: "2598. 执行操作后的最大 MEX",
              src: "/smallest-missing-non-negative-integer-after-operations/",
              score: 1846,
            },
            {
              title: "1590. 使数组和能被 P 整除",
              src: "/make-sum-divisible-by-p/",
              score: 2039,
            },
          ],
        },
        {
          title: "1.12 其它",
          isLeaf: true,
          child: [
            {
              title: "326. 3 的幂",
              src: "/power-of-three/",
            },
            {
              title: "633. 平方数之和",
              src: "/sum-of-square-numbers/",
            },
            {
              title: "279. 完全平方数",
              src: "/perfect-squares/",
            },
            {
              title: "1015. 可被 K 整除的最小整数",
              src: "/smallest-integer-divisible-by-k/",
              score: 1875,
            },
            {
              title: "2240. 买钢笔和铅笔的方案数",
              src: "/number-of-ways-to-buy-pens-and-pencils/",
              score: 1400,
            },
            {
              title: "2221. 数组的三角和",
              src: "/find-triangular-sum-of-an-array/",
              score: 1318,
            },
          ],
        },
      ],
    },
    {
      title: "2 组合数学",
      child: [
        {
          title: "2.1 乘法原理",
          isLeaf: true,
          child: [
            {
              title: "2125. 银行中的激光束数量",
              src: "/number-of-laser-beams-in-a-bank/",
              score: 1281,
            },
            {
              title: "3128. 直角三角形",
              src: "/right-triangles/",
              score: 1541,
            },
            {
              title: "1573. 分割字符串的方案数",
              src: "/number-of-ways-to-split-a-string/",
              score: 1591,
            },
            {
              title: "2750. 将数组划分成若干好子数组的方式",
              src: "/ways-to-split-array-into-good-subarrays/",
              score: 1598,
            },
            {
              title: "2063. 所有子字符串中的元音",
              src: "/vowels-of-all-substrings/",
              score: 1664,
            },
            {
              title: "1922. 统计好数字的数目",
              src: "/count-good-numbers/",
              score: 1675,
            },
            {
              title: "2147. 分隔长廊的方案数",
              src: "/number-of-ways-to-divide-a-long-corridor/",
              score: 1915,
            },
            {
              title: "2963. 统计好分割方案的数目",
              src: "/count-the-number-of-good-partitions/",
              score: 1985,
            },
            {
              title: "2867. 统计树中的合法路径数目",
              src: "/count-valid-paths-in-a-tree/",
              score: 2429,
            },
            {
              title: "2450. 应用操作后不同二进制字符串的数量",
              src: "/number-of-distinct-binary-strings-after-applying-operations/",
            },
          ],
        },
        {
          title: "2.2 组合计数",
          isLeaf: true,
          child: [
            {
              title: "62. 不同路径",
              src: "/unique-paths/",
            },
            {
              title: "1175. 质数排列",
              src: "/prime-arrangements/",
              score: 1490,
            },
            {
              title: "1359. 有效的快递序列数目",
              src: "/count-all-valid-pickup-and-delivery-options/",
              score: 1723,
            },
            {
              title: "2400. 恰好移动 k 步到达某一位置的方法数目",
              src: "/number-of-ways-to-reach-a-position-after-exactly-k-steps/",
              score: 1752,
            },
            {
              title: "2514. 统计同位异构字符串数目",
              src: "/count-anagrams/",
              score: 2070,
            },
            {
              title: "1643. 第 K 条最小指令",
              src: "/kth-smallest-instructions/",
              score: 2080,
            },
            {
              title: "2842. 统计一个字符串的 k 子序列美丽值最大的数目",
              src: "/count-k-subsequences-of-a-string-with-maximum-beauty/",
              score: 2092,
            },
            {
              title: "3154. 到达第 K 级台阶的方案数",
              src: "/find-number-of-ways-to-reach-the-k-th-stair/",
              score: 2072,
            },
            {
              title: "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
              src: "/number-of-ways-to-reorder-array-to-get-same-bst/",
              score: 2289,
            },
            {
              title: "1866. 恰有 K 根木棍可以看到的排列数目",
              src: "/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/",
              score: 2334,
            },
            {
              title: "1467. 两个盒子中球的颜色数相同的概率",
              src: "/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
              score: 2357,
            },
            {
              title: "1916. 统计为蚁群构筑房间的不同顺序",
              src: "/count-ways-to-build-rooms-in-an-ant-colony/",
              score: 2487,
            },
            {
              title: "1830. 使字符串有序的最少操作次数",
              src: "/minimum-number-of-operations-to-make-string-sorted/",
              score: 2621,
            },
            {
              title: "2954. 统计感冒序列的数目",
              src: "/count-the-number-of-infection-sequences/",
              score: 2645,
            },
            {
              title: "1575. 统计所有可行路径",
              src: "/count-all-possible-routes/",
              score: 2056,
            },
            {
              title: "LCP 25. 古董键盘",
              src: "/Uh984O/",
            },
            {
              title: "2539. 好子序列的个数",
              src: "/count-the-number-of-good-subsequences/",
            },
            {
              title: "634. 寻找数组的错位排列",
              src: "/find-the-derangement-of-an-array/",
            },
          ],
        },
        {
          title: "2.3 放球问题",
          isLeaf: true,
          child: [
            {
              title: "1641. 统计字典序元音字符串的数目",
              src: "/count-sorted-vowel-strings/",
              score: 1520,
            },
            {
              title: "1621. 大小为 K 的不重叠线段的数目",
              src: "/number-of-sets-of-k-non-overlapping-line-segments/",
              score: 2199,
            },
            {
              title: "920. 播放列表的数量",
              src: "/number-of-music-playlists/",
              score: 2400,
            },
            {
              title: "1735. 生成乘积数组的方案数",
              src: "/count-ways-to-make-array-with-product/",
              score: 2500,
            },
            {
              title: "2338. 统计理想数组的数目",
              src: "/count-the-number-of-ideal-arrays/",
              score: 2616,
            },
          ],
        },
        {
          title: "2.4 容斥原理",
          isLeaf: true,
          child: [
            {
              title: "2652. 倍数求和",
              src: "/sum-multiples/",
              score: 1183,
            },
            {
              title: "878. 第 N 个神奇数字",
              src: "/nth-magical-number/",
              score: 1897,
            },
            {
              title: "1201. 丑数 III",
              src: "/ugly-number-iii/",
              score: 2040,
            },
            {
              title: "2929. 给小朋友们分糖果 II",
              src: "/distribute-candies-among-child-ii/",
            },
            {
              title: "2930. 重新排列后包含指定子字符串的字符串数目",
              src: "/number-of-strings-which-can-be-rearranged-to-contain-substring/",
              score: 2228,
            },
            {
              title: "2513. 最小化两个数组中的最大值",
              src: "/minimize-the-maximum-of-two-arrays/",
              score: 2303,
            },
            {
              title: "3116. 单面值组合的第 K 小金额",
              src: "/kth-smallest-amount-with-single-denomination-combination/",
              score: 2388,
            },
            {
              title: "3130. 找出所有稳定的二进制数组 II",
              src: "/find-all-possible-stable-binary-arrays-ii/",
              score: 2825,
            },
            {
              title: "2927. 给小朋友们分糖果 III",
              src: "/distribute-candies-among-child-iii/",
            },
          ],
        },
      ],
    },
    {
      title: "3 概率期望",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "1227. 飞机座位分配概率",
              src: "/airplane-seat-assignment-probability/",
            },
            {
              title: "688. 骑士在棋盘上的概率",
              src: "/knight-probability-in-chessboard/",
            },
            {
              title: "837. 新 21 点",
              src: "/new-21-game/",
              score: 2351,
            },
            {
              title: "1467. 两个盒子中球的颜色数相同的概率",
              src: "/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
              score: 2357,
            },
            {
              title: "808. 分汤",
              src: "/soup-servings/",
              score: 2397,
            },
            {
              title: "LCR 185. 统计结果概率",
              src: "/nge-tou-zi-de-dian-shu-lcof/",
            },
            {
              title: "LCP 11. 期望个数统计",
              src: "/qi-wang-ge-shu-tong-ji/",
            },
            {
              title: "九坤-04. 筹码游戏",
              src: "https://leetcode.cn/contest/ubiquant2022/problems/I3Gm2h/",
            },
            {
              title: "1230. 抛掷硬币",
              src: "/toss-strange-coins/",
              score: 1809,
            },
          ],
        },
      ],
    },
    {
      title: "4 博弈论",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "292. Nim 游戏",
              src: "/nim-game/",
            },
            {
              title: "1561. 你可以获得的最大硬币数目",
              src: "/maximum-number-of-coins-you-can-get/",
              score: 1406,
            },
            {
              title: "1025. 除数博弈",
              src: "/divisor-game/",
              score: 1436,
            },
            {
              title: "2038. 如果相邻两个颜色均相同则删除当前颜色",
              src: "/remove-colored-pieces-if-both-neighbors-are-the-same-color/",
              score: 1468,
            },
            {
              title: "877. 石子游戏",
              src: "/stone-game/",
              score: 1591,
            },
            {
              title: "1510. 石子游戏 IV",
              src: "/stone-game-iv/",
              score: 1787,
            },
            {
              title: "486. 预测赢家",
              src: "/predict-the-winner/",
            },
            {
              title: "1690. 石子游戏 VII",
              src: "/stone-game-vii/",
              score: 1952,
            },
            {
              title: "1686. 石子游戏 VI",
              src: "/stone-game-vi/",
              score: 2001,
            },
            {
              title: "1927. 求和游戏",
              src: "/sum-game/",
              score: 2005,
            },
            {
              title: "1406. 石子游戏 III",
              src: "/stone-game-iii/",
              score: 2027,
            },
            {
              title: "1140. 石子游戏 II",
              src: "/stone-game-ii/",
              score: 2035,
            },
            {
              title: "1563. 石子游戏 V",
              src: "/stone-game-v/",
              score: 2088,
            },
            {
              title: "464. 我能赢吗",
              src: "/can-i-win/",
            },
            {
              title: "2029. 石子游戏 IX",
              src: "/stone-game-ix/",
              score: 2278,
            },
            {
              title: "810. 黑板异或游戏",
              src: "/chalkboard-xor-game/",
              score: 2342,
            },
            {
              title: "1872. 石子游戏 VIII",
              src: "/stone-game-viii/",
              score: 2440,
            },
            {
              title: "913. 猫和老鼠",
              src: "/cat-and-mouse/",
              score: 2567,
            },
            {
              title: "1728. 猫和老鼠 II",
              src: "/cat-and-mouse-ii/",
              score: 2850,
            },
            {
              title: "294. 翻转游戏 II",
              src: "/flip-game-ii/",
            },
            {
              title: "1908. Nim 游戏 II",
              src: "/game-of-nim/",
            },
            {
              title: "2005. 斐波那契树的移除子树游戏",
              src: "/subtree-removal-game-with-fibonacci-tree/",
            },
            {
              title: "2868. 单词游戏",
              src: "/the-wording-game/",
            },
          ],
        },
      ],
    },
    {
      title: "5 计算几何",
      child: [
        {
          title: "5.1 点、线",
          isLeaf: true,
          child: [
            {
              title: "1232. 缀点成线",
              src: "/check-if-it-is-a-straight-line/",
              score: 1248,
            },
            {
              title: "2280. 表示一个折线图的最少线段数",
              src: "/minimum-lines-to-represent-a-line-chart/",
              score: 1681,
            },
            {
              title: "1610. 可见点的最大数目",
              src: "/maximum-number-of-visible-points/",
              score: 2148,
            },
            {
              title: "面试题 16.03. 交点",
              src: "/intersection-lcci/",
            },
            {
              title: "面试题 16.13. 平分正方形",
              src: "/bisect-squares-lcci/",
            },
            {
              title: "面试题 16.14. 最佳直线",
              src: "/best-line-lcci/",
            },
            {
              title: "LCP 37. 最小矩形面积",
              src: "/zui-xiao-ju-xing-mian-ji/",
            },
            {
              title: "2152. 穿过所有点的所需最少直线数量",
              src: "/minimum-number-of-lines-to-cover-points/",
            },
          ],
        },
        {
          title: "5.2 圆",
          isLeaf: true,
          child: [
            {
              title: "1401. 圆和矩形是否有重叠",
              src: "/circle-and-rectangle-overlapping/",
              score: 1709,
            },
            {
              title: "1453. 圆形靶内的最大飞镖数量",
              src: "/maximum-number-of-darts-inside-of-a-circular-dartboard/",
              score: 2202,
            },
            {
              title: "LCP 42. 玩具套圈",
              src: "/vFjcfV/",
            },
            {
              title: "1924. 安装栅栏 II",
              src: "/erect-the-fence-ii/",
            },
          ],
        },
        {
          title: "5.3 矩形、多边形",
          isLeaf: true,
          child: [
            {
              title: "836. 矩形重叠",
              src: "/rectangle-overlap/",
              score: 1443,
            },
            {
              title: "223. 矩形面积",
              src: "/rectangle-area/",
            },
            {
              title: "593. 有效的正方形",
              src: "/valid-square/",
            },
            {
              title: "939. 最小面积矩形",
              src: "/minimum-area-rectangle/",
              score: 1753,
            },
            {
              title: "963. 最小面积矩形 II",
              src: "/minimum-area-rectangle-ii/",
              score: 1991,
            },
            {
              title: "469. 凸多边形",
              src: "/convex-polygon/",
            },
          ],
        },
        {
          title: "5.4 凸包",
          isLeaf: true,
          child: [
            {
              title: "587. 安装栅栏",
              src: "/erect-the-fence/",
            },
            {
              title: "LCP 15. 游乐园的迷宫",
              src: "/you-le-yuan-de-mi-gong/",
            },
          ],
        },
      ],
    },
    {
      title: "6 随机算法",
      child: [
        {
          title: "",
          isLeaf: true,
          child: [
            {
              title: "398. 随机数索引",
              src: "/random-pick-index/",
            },
            {
              title: "382. 链表随机节点",
              src: "/linked-list-random-node/",
            },
            {
              title: "384. 打乱数组",
              src: "/shuffle-an-array/",
            },
            {
              title: "470. 用 Rand7() 实现 Rand10()",
              src: "/implement-rand10-using-rand7/",
            },
            {
              title: "528. 按权重随机选择",
              src: "/random-pick-with-weight/",
            },
            {
              title: "710. 黑名单中的随机数",
              src: "/random-pick-with-blacklist/",
            },
            {
              title: "478. 在圆内随机生成点",
              src: "/generate-random-point-in-a-circle/",
            },
            {
              title: "497. 非重叠矩形中的随机点",
              src: "/random-point-in-non-overlapping-rectangles/",
            },
            {
              title: "519. 随机翻转矩阵",
              src: "/random-flip-matrix/",
            },
            {
              title: "380. O(1) 时间插入、删除和获取随机元素",
              src: "/insert-delete-getrandom-o1/",
            },
            {
              title: "381. O(1) 时间插入、删除和获取随机元素 - 允许重复",
              src: "/insert-delete-getrandom-o1-duplicates-allowed/",
            },
            {
              title: "1515. 服务中心的最佳位置",
              src: "/best-position-for-a-service-centre/",
              score: 2157,
            },
          ],
        },
      ],
    },
    {
      title: "7 杂项",
      child: [
        {
          title: "7.1 回文数",
          isLeaf: true,
          child: [
            {
              title: "9. 回文数",
              src: "/palindrome-number/",
            },
            {
              title: "2396. 严格回文的数字",
              src: "/strictly-palindromic-number/",
              score: 1329,
            },
            {
              title: "2217. 找到指定长度的回文数",
              src: "/find-palindrome-with-fixed-length/",
              score: 1823,
            },
            {
              title: "866. 回文质数",
              src: "/prime-palindrome/",
              score: 1939,
            },
            {
              title: "2967. 使数组成为等数数组的最小代价",
              src: "/minimum-cost-to-make-array-equalindromic/",
              score: 2117,
            },
            {
              title: "906. 超级回文数",
              src: "/super-palindromes/",
              score: 2141,
            },
            {
              title: "2081. k 镜像数字的和",
              src: "/sum-of-k-mirror-numbers/",
              score: 2210,
            },
            {
              title: "564. 寻找最近的回文数",
              src: "/find-the-closest-palindrome/",
            },
            {
              title: "479. 最大回文数乘积",
              src: "/largest-palindrome-product/",
            },
          ],
        },
        {
          title: "7.2 整数拆分",
          isLeaf: true,
          child: [
            {
              title: "343. 整数拆分",
              src: "/integer-break/",
            },
            {
              title: "1808. 好因子的最大数目",
              src: "/maximize-number-of-nice-divisors/",
              score: 2071,
            },
          ],
        },
        {
          title: "7.3 曼哈顿距离",
          isLeaf: true,
          child: [
            {
              title: "1131. 绝对值表达式的最大值",
              src: "/maximum-of-absolute-value-expression/",
              score: 2060,
            },
            {
              title: "3102. 最小化曼哈顿距离",
              src: "/minimize-manhattan-distances/",
              score: 2216,
            },
            {
              title: "1330. 翻转子数组得到最大的数组值",
              src: "/reverse-subarray-to-maximize-array-value/",
              score: 2482,
            },
            {
              title: "1956. 感染 K 种病毒所需的最短时间",
              src: "/minimum-time-for-k-virus-variants-to-spread/",
            },
            {
              title: "2613. 美数对",
              src: "/beautiful-pairs/",
            },
          ],
        },
        {
          title: "7.4 其他",
          isLeaf: true,
          child: [
            {
              title: "2579. 统计染色格子数",
              src: "/count-total-number-of-colored-cells/",
              score: 1357,
            },
            {
              title: "2834. 找出美丽数组的最小和",
              src: "/find-the-minimum-possible-sum-of-a-beautiful-array/",
              score: 1410,
            },
            {
              title: "1414. 和为 K 的最少斐波那契数字数目",
              src: "/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/",
              score: 1466,
            },
            {
              title: "1780. 判断一个数字是否可以表示成三的幂的和",
              src: "/check-if-number-is-a-sum-of-powers-of-three/",
              score: 1506,
            },
            {
              title: "3091. 执行操作使数据元素之和大于等于 K",
              src: "/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/",
              score: 1522,
            },
            {
              title: "2541. 使数组中所有元素相等的最小操作数 II",
              src: "/minimum-operations-to-make-array-equal-ii/",
              score: 1620,
            },
            {
              title: "2195. 向数组中追加 K 个整数",
              src: "/append-k-integers-with-minimal-sum/",
              score: 1659,
            },
            {
              title: "2457. 美丽整数的最小增量",
              src: "/minimum-addition-to-make-integer-beautiful/",
              score: 1681,
            },
            {
              title: "1017. 负二进制转换",
              src: "/convert-to-base-2/",
              score: 1698,
            },
            {
              title: "1954. 收集足够苹果的最小花园周长",
              src: "/minimum-garden-perimeter-to-collect-enough-apples/",
              score: 1759,
            },
            {
              title: "1073. 负二进制数相加",
              src: "/adding-two-negabinary-numbers/",
              score: 1807,
            },
            {
              title: "1823. 找出游戏的获胜者",
              src: "/find-the-winner-of-the-circular-game/",
              score: 1413,
            },
            {
              title: "166. 分数到小数",
              src: "/fraction-to-recurring-decimal/",
            },
            {
              title: "3012. 通过操作使数组长度最小",
              src: "/minimize-length-of-array-using-operations/",
              score: 1833,
            },
            {
              title: "483. 最小好进制",
              src: "/smallest-good-base/",
            },
            {
              title: "972. 相等的有理数",
              src: "/equal-rational-numbers/",
              score: 2122,
            },
            {
              title: "1862. 向下取整数对和",
              src: "/sum-of-floored-pairs/",
              score: 2171,
            },
            {
              title: "1739. 放置盒子",
              src: "/building-boxes/",
              score: 2199,
            },
            {
              title: "2443. 反转之后的数字和",
              src: "/sum-of-number-and-its-reverse/",
              score: 1377,
            },
            {
              title: "1806. 还原排列的最少操作步数",
              src: "/minimum-number-of-operations-to-reinitialize-a-permutation/",
              score: 1492,
            },
            {
              title: "458. 可怜的小猪",
              src: "/poor-pigs/",
            },
            {
              title: "60. 排列序列",
              src: "/permutation-sequence/",
            },
            {
              title: "2117. 一个区间内所有数乘积的缩写",
              src: "/abbreviating-the-product-of-a-range/",
              score: 2477,
            },
            {
              title: "LCP 02. 分式化简",
              src: "/deep-dark-fraction/",
            },
            {
              title: "LCP 29. 乐团站位",
              src: "/SNJvJP/",
            },
            {
              title: "LCP 70. 沙地治理",
              src: "/XxZZjK/",
            },
            {
              title: "660. 移除 9",
              src: "/remove-9/",
            },
            {
              title: "2979. 最贵的无法购买的商品",
              src: "/most-expensive-item-that-can-not-be-bought/",
            },
            {
              title: "2647. 把三角形染成红色",
              src: "/color-the-triangle-red/",
            },
          ],
        },
      ],
    },
  ],
} as ProblemCategory;
