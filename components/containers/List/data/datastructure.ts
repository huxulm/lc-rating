import ProblemCategory from "@components/ProblemCatetory";

export default {
  title: "常用数据结构（前缀和/差分/栈/队列/堆/字典树/并查集/树状数组/线段树）",
  original_src: 'https://leetcode.cn/circle/discuss/mOr1u6/',
  sort: 0,
  child: [
    {
      title: "一、前缀和",
      child: [
        {
          title: "1.1 基础",
          isLeaf: true,
          summary: `<a href="https://leetcode.cn/problems/range-sum-query-immutable/solution/qian-zhui-he-ji-qi-kuo-zhan-fu-ti-dan-py-vaar/">原理讲解</a>`,
          child: [
            {
              title: "303. 区域和检索 - 数组不可变",
              src: "/range-sum-query-immutable/",
            },
            {
              title: "2559. 统计范围内的元音字符串数",
              src: "/count-vowel-strings-in-ranges/",
              score: 1435,
            },
            {
              title: "2389. 和有限的最长子序列",
              src: "/longest-subsequence-with-limited-sum/",
              score: 1388,
            },
            {
              title: "2438. 二的幂数组中查询范围内的乘积",
              src: "/range-product-queries-of-powers/",
              score: 1610,
            },
            {
              title: "2055. 蜡烛之间的盘子",
              src: "/plates-between-candles/",
              score: 1819,
            },
            {
              title: "1744. 你能在你最喜欢的那天吃到你最喜欢的糖果吗？",
              src: "/can-you-eat-your-favorite-candy-on-your-favorite-day/",
              score: 1858
            },
            {
              title: "53. 最大子数组和",
              src: "/maximum-subarray/",
            },
          ],
        },
        {
          title: "1.2 前缀和与哈希表",
          isLeaf: true,
          child: [
            {
              title: "930. 和相同的二元子数组",
              src: "/binary-subarrays-with-sum/",
              score: 1591
            },
            {
              title: "560. 和为 K 的子数组",
              src: "/subarray-sum-equals-k/",
            },
            {
              title: "1524. 和为奇数的子数组数目",
              src: "/number-of-sub-arrays-with-odd-sum/",
              score: 1610
            },
            {
              title: "974. 和可被 K 整除的子数组",
              src: "/subarray-sums-divisible-by-k/",
              score: 1675
            },
            {
              title: "523. 连续的子数组和",
              src: "/continuous-subarray-sum/",
            },
            {
              title: "437. 路径总和 III",
              src: "/path-sum-iii/",
            },
            {
              title: "2588. 统计美丽子数组数目",
              src: "/count-the-number-of-beautiful-subarrays/",
              score: 1696
            },
            {
              title: "525. 连续数组",
              src: "/contiguous-array/",
            },
            {
              title: "3026. 最大好子数组和",
              src: "/maximum-good-subarray-sum/",
              score: 1816
            },
            {
              title: "1546. 和为目标值且不重叠的非空子数组的最大数目",
              src: "/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/",
              score: 1855
            },
            {
              title: "面试题 17.05. 字母与数字",
              src: "/find-longest-subarray-lcci/",
            },
            {
              title: "1124. 表现良好的最长时间段",
              src: "/longest-well-performing-interval/",
              score: 1908
            },
            {
              title: "2488. 统计中位数为 K 的子数组",
              src: "/count-subarrays-with-median-k/",
              score: 1988
            },
            {
              title: "1590. 使数组和能被 P 整除",
              src: "/make-sum-divisible-by-p/",
              score: 2038
            },
            {
              title: "2845. 统计趣味子数组的数目",
              src: "/count-of-interesting-subarrays/",
              score: 2073,
            },
            {
              title: "1442. 形成两个异或相等数组的三元组数目",
              src: "/count-triplets-that-can-form-two-arrays-of-equal-xor/",
              score: 1524
            },
            {
              title: "2025. 分割数组的最多方案数",
              src: "/maximum-number-of-ways-to-partition-an-array/",
              score: 2217
            },
            {
              title: "2949. 统计美丽子字符串 II",
              src: "/count-beautiful-substrings-ii/",
              score: 2444,
            },
            {
              title: "325. 和等于 k 的最长子数组长度",
              src: "/maximum-size-subarray-sum-equals-k/",
            },
            {
              title: "548. 将数组分割成和相等的子数组",
              src: "/split-array-with-equal-sum/",
            },
            {
              title: "1983. 范围和相等的最宽索引对",
              src: "/widest-pair-of-indices-with-equal-range-sum/",
            },
            {
              title: "2489. 固定比率的子字符串数",
              src: "/number-of-substrings-with-fixed-ratio/",
            },
            {
              title: "2950. 可整除子串的数量",
              src: "/number-of-divisible-substrings/",
            },
          ],
        },
        {
          title: "1.3 距离和",
          isLeaf: true,
          summary: `<a href="https://leetcode.cn/problems/minimum-operations-to-make-all-array-elements-equal/solution/yi-tu-miao-dong-pai-xu-qian-zhui-he-er-f-nf55/" target="_blank">图解</a>`,
          child: [
            {
              title: "1685. 有序数组中差绝对值之和",
              src: "/sum-of-absolute-differences-in-a-sorted-array/",
              score: 1495
            },
            {
              title: "2615. 等值距离和",
              src: "/sum-of-distances/",
              score: 1793
            },
            {
              title: "2602. 使数组元素全部相等的最少操作次数",
              src: "/minimum-operations-to-make-all-array-elements-equal/",
              score: 1902
            },
            {
              title: "2968. 执行操作使频率分数最大",
              src: "/apply-operations-to-maximize-frequency-score/",
              score: 2444,
            },
            {
              title: "1703. 得到连续 K 个 1 的最少相邻交换次数",
              src: "/minimum-adjacent-swaps-for-k-consecutive-ones/",
              score: 2466
            },
            {
              title: "3086. 拾起 K 个 1 需要的最少行动次数",
              src: "/minimum-moves-to-pick-k-ones/",
              score: 2672
            },
          ],
        },
        {
          title: "1.4 前缀异或和",
          isLeaf: true,
          child: [
            {
              title: "1310. 子数组异或查询",
              src: "/xor-queries-of-a-subarray/",
              score: 1459
            },
            {
              title: "1177. 构建回文串检测",
              src: "/can-make-palindrome-from-substring/",
              score: 1848
            },
            {
              title: "1371. 每个元音包含偶数次的最长子字符串",
              src: "/find-the-longest-substring-containing-vowels-in-even-counts/",
              score: 2040
            },
            {
              title: "1542. 找出最长的超赞子字符串",
              src: "/find-longest-awesome-substring/",
              score: 2221
            },
            {
              title: "1915. 最美子字符串的数目",
              src: "/number-of-wonderful-substrings/",
              score: 2234
            },
            {
              title: "2791. 树中可以形成回文的路径数",
              src: "/count-paths-that-can-form-a-palindrome-in-a-tree/",
              score: 2677
            },
          ],
        },
        {
          title: "1.5 其它一维前缀和",
          isLeaf: true,
          child: [
            {
              title: "1895. 最大的幻方",
              src: "/largest-magic-square/",
              score: 1781
            },
            {
              title: "2245. 转角路径的乘积中最多能有几个尾随零",
              src: "/maximum-trailing-zeros-in-a-cornered-path/",
              score: 2036
            },
            {
              title: "1712. 将数组分成三个子数组的方案数",
              src: "/ways-to-split-array-into-three-subarrays/",
              score: 2078
            },
            {
              title: "1862. 向下取整数对和",
              src: "/sum-of-floored-pairs/",
              score: 2170
            },
            {
              title: "2281. 巫师的总力量和",
              src: "/sum-of-total-strength-of-wizards/",
              score: 2612
            },
            {
              title: "2983. 回文串重新排列查询",
              src: "/palindrome-rearrangement-queries/",
              score: 2779
            },
            {
              title: "2955. 同端子串的数量",
              src: "/number-of-same-end-substrings/",
            },
            {
              title: "2819. 购买巧克力后的最小相对损失",
              src: "/minimum-relative-loss-after-buying-chocolates/",
            },
          ],
        },
        {
          title: "1.6 二维前缀和",
          isLeaf: true,
          summary:
            '<a href="https://leetcode.cn/problems/range-sum-query-2d-immutable/solution/tu-jie-yi-zhang-tu-miao-dong-er-wei-qian-84qp/" target="_blank">【图解】一张图秒懂二维前缀和！</a>',
          child: [
            {
              title: "304. 二维区域和检索 - 矩阵不可变",
              src: "/range-sum-query-2d-immutable/",
            },
            {
              title: "1314. 矩阵区域和",
              src: "/matrix-block-sum/",
              score: 1483,
            },
            {
              title: "3070. 元素和小于等于 k 的子矩阵的数目",
              src: "/count-submatrices-with-top-left-element-and-sum-less-than-k/",
              score: 1498
            },
            {
              title: "1277. 统计全为 1 的正方形子矩阵",
              src: "/count-square-submatrices-with-all-ones/",
              score: 1613
            },
            {
              title: "1738. 找出第 K 大的异或坐标值",
              src: "/find-kth-largest-xor-coordinate-value/",
              score: 1671
            },
            {
              title: "221. 最大正方形",
              src: "/maximal-square/",
            },
            {
              title: "1292. 元素和小于等于阈值的正方形的最大边长",
              src: "/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/",
              score: 1734
            },
            {
              title: "1504. 统计全 1 子矩形",
              src: "/count-submatrices-with-all-ones/",
              score: 1845

            },
            {
              title: "1074. 元素和为目标值的子矩阵数量",
              src: "/number-of-submatrices-that-sum-to-target/",
              score: 2189
            },
          ],
        },
      ],
    },
    {
      title: "二、差分",
      child: [
        {
          title: "2.1 一维差分（扫描线）",
          isLeaf: true,
          summary: `<p><a href="https://leetcode.cn/problems/car-pooling/solution/suan-fa-xiao-ke-tang-chai-fen-shu-zu-fu-9d4ra/" target="_blank">原理讲解</a>（推荐和<a href="https://leetcode.cn/problems/stamping-the-grid/solution/wu-nao-zuo-fa-er-wei-qian-zhui-he-er-wei-zwiu/" target="_blank">【图解】从一维差分到二维差分</a> 一起看）</p>`,
          child: [
            {
              title: "2848. 与车相交的点",
              src: "/points-that-intersect-with-cars/",
              score: 1229
            },
            {
              title: "1893. 检查是否区域内所有整数都被覆盖",
              src: "/check-if-all-the-integers-in-a-range-are-covered/",
              score: 1307
            },
            {
              title: "1854. 人口最多的年份",
              src: "/maximum-population-year/",
              score: 1370
            },
            {
              title: "1094. 拼车",
              src: "/car-pooling/",
              score: 1441
            },
            {
              title: "1109. 航班预订统计",
              src: "/corporate-flight-bookings/",
              score: 1569
            },
            {
              title: "56. 合并区间",
              src: "/merge-intervals/",
            },
            {
              title: "57. 插入区间",
              src: "/insert-interval/",
            },
            {
              title: "732. 我的日程安排表 III",
              src: "/my-calendar-iii/",
            },
            {
              title: "2406. 将区间分为最少组数",
              src: "/divide-intervals-into-minimum-number-of-groups/",
              score: 1713
            },
            {
              title: "2381. 字母移位 II",
              src: "/shifting-letters-ii/",
              score: 1793
            },
            {
              title: "995. K 连续位的最小翻转次数",
              src: "/minimum-number-of-k-consecutive-bit-flips/",
              score: 1835
            },
            {
              title: "1589. 所有排列中的最大和",
              src: "/maximum-sum-obtained-of-any-permutation/",
              score: 1871
            },
            {
              title: "1943. 描述绘画结果",
              src: "/describe-the-painting/",
              score: 1969
            },
            {
              title: "2251. 花期内花的数目",
              src: "/number-of-flowers-in-full-bloom/",
              score: 2022
            },
            {
              title: "2772. 使数组中的所有元素都等于零",
              src: "/apply-operations-to-make-all-array-elements-equal-to-zero/",
              score: 2029
            },
            {
              title: "798. 得分最高的最小轮调",
              src: "/smallest-rotation-with-highest-score/",
              score: 2129
            },
            {
              title: "2528. 最大化城市的最小供电站数目",
              src: "/maximize-the-minimum-powered-city/",
              score: 2235
            },
            {
              title: "1674. 使数组互补的最少操作次数",
              src: "/minimum-moves-to-make-array-complementary/",
              score: 2333
            },
            {
              title: "3017. 按距离统计房屋对数目 II",
              src: "/count-the-number-of-houses-at-a-certain-distance-ii/",
              score: 2709
            },
            {
              title: "253. 会议室 II",
              src: "/meeting-rooms-ii/",
            },
            {
              title: "370. 区间加法",
              src: "/range-addition/",
            },
            {
              title: "759. 员工空闲时间",
              src: "/employee-free-time/",
              score: 1710
            },
            {
              title: "2021. 街上最亮的位置",
              src: "/brightest-position-on-street/",
            },
            {
              title: "2015. 每段建筑物的平均高度",
              src: "/average-height-of-buildings-in-each-segment/",
            },
            {
              title: "2237. 计算街道上满足所需亮度的位置数量",
              src: "/count-positions-on-street-with-required-brightness/",
            },
            {
              title: "3009. 折线图上的最大交点数量",
              src: "/maximum-number-of-intersections-on-the-chart/",
            },
          ],
        },
        {
          title: "2.2 二维差分",
          isLeaf: true,
          summary: `<a href="https://leetcode.cn/problems/stamping-the-grid/solution/wu-nao-zuo-fa-er-wei-qian-zhui-he-er-wei-zwiu/" target="_blank">【图解】从一维差分到二维差分</a>`,
          child: [
            {
              title: "2536. 子矩阵元素加 1",
              src: "/increment-submatrices-by-one/",
              score: 1583
            },
            {
              title: "850. 矩形面积 II",
              src: "/rectangle-area-ii/",
              score: 1583
            },
            {
              title: "2132. 用邮票贴满网格图",
              src: "/stamping-the-grid/",
              score: 2364
            },
            {
              title: "LCP 74. 最强祝福力场",
              src: "/xepqZ5/",
            },
          ],
        },
      ],
    },
    {
      title: "三、栈",
      child: [
        {
          title: "3.1 基础",
          isLeaf: true,
          child: [
            {
              title: "1441. 用栈操作构建数组",
              src: "/build-an-array-with-stack-operations/",
              score: 1180
            },
            {
              title: "844. 比较含退格的字符串",
              src: "/backspace-string-compare/",
              score: 1227
            },
            {
              title: "682. 棒球比赛",
              src: "/baseball-game/",
            },
            {
              title: "2390. 从字符串中移除星号",
              src: "/removing-stars-from-a-string/",
              score: 1347
            },
            {
              title: "1472. 设计浏览器历史记录",
              src: "/design-browser-history/",
              score: 1453
            },
            {
              title: "946. 验证栈序列",
              src: "/validate-stack-sequences/",
              score: 1461
            },
            {
              title: "71. 简化路径",
              src: "/simplify-path/",
            },
          ],
        },
        {
          title: "3.2 进阶",
          isLeaf: true,
          child: [
            {
              title: "155. 最小栈",
              src: "/min-stack/",
            },
            {
              title: "1381. 设计一个支持增量操作的栈",
              src: "/design-a-stack-with-increment-operation/",
              score: 1285
            },
            {
              title: "636. 函数的独占时间",
              src: "/exclusive-time-of-functions/",
            },
            {
              title: "2434. 使用机器人打印字典序最小的字符串",
              src: "/using-a-robot-to-print-the-lexicographically-smallest-string/",
              score: 1953
            },
            {
              title: "895. 最大频率栈",
              src: "/maximum-frequency-stack/",
              score: 2027
            },
            {
              title: "1172. 餐盘栈",
              src: "/dinner-plate-stacks/",
              score: 2109
            },
            {
              title: "2589. 完成所有任务的最少时间",
              src: "/minimum-time-to-complete-all-tasks/",
              score: 2380
            },
            {
              title: "716. 最大栈",
              src: "/max-stack/",
            },
          ],
        },
        {
          title: "3.3 邻项消除",
          isLeaf: true,
          child: [
            {
              title: "2696. 删除子串后的字符串最小长度",
              src: "/minimum-string-length-after-removing-substrings/",
              score: 1282
            },
            {
              title: "1047. 删除字符串中的所有相邻重复项",
              src: "/remove-all-adjacent-duplicates-in-string/",
              score: 1286
            },
            {
              title: "1544. 整理字符串",
              src: "/make-the-string-great/",
              score: 1344
            },
            {
              title: "1003. 检查替换后的词是否有效",
              src: "/check-if-word-is-valid-after-substitutions/",
              score: 1426
            },
            {
              title: "2216. 美化数组的最少删除数",
              src: "/minimum-deletions-to-make-array-beautiful/",
              score: 1509
            },
            {
              title: "1209. 删除字符串中的所有相邻重复项 II",
              src: "/remove-all-adjacent-duplicates-in-string-ii/",
              score: 1541
            },
            {
              title: "2211. 统计道路上的碰撞次数",
              src: "/count-collisions-on-a-road/",
              score: 1581
            },
            {
              title: "735. 小行星碰撞",
              src: "/asteroid-collision/",

            },
            {
              title: "2197. 替换数组中的非互质数",
              src: "/replace-non-coprime-numbers-in-array/",
              score: 2057
            },
            {
              title: "2751. 机器人碰撞",
              src: "/robot-collisions/",
              score: 2091
            },
          ],
        },
        {
          title: "3.4 合法括号字符串",
          isLeaf: true,
          summary: `注：部分题目可以不用栈，而是用一个数字记录嵌套深度。`,
          child: [
            {
              title: "20. 有效的括号",
              src: "/valid-parentheses/",
            },
            {
              title: "921. 使括号有效的最少添加",
              src: "/minimum-add-to-make-parentheses-valid/",
              score: 1242,
            },
            {
              title: "1021. 删除最外层的括号",
              src: "/remove-outermost-parentheses/",
              score: 1311
            },
            {
              title: "1614. 括号的最大嵌套深度",
              src: "/maximum-nesting-depth-of-the-parentheses/",
              score: 1322
            },
            {
              title: "1190. 反转每对括号间的子串",
              src: "/reverse-substrings-between-each-pair-of-parentheses/",
              score: 1485
            },
            {
              title: "856. 括号的分数",
              src: "/score-of-parentheses/",
              score: 1562
            },
            {
              title: "1249. 移除无效的括号",
              src: "/minimum-remove-to-make-valid-parentheses/",
              score: 1657
            },
            {
              title: "1963. 使字符串平衡的最小交换次数",
              src: "/minimum-number-of-swaps-to-make-the-string-balanced/",
              score: 1688
            },
            {
              title: "32. 最长有效括号",
              src: "/longest-valid-parentheses/",
            },
            {
              title: "1111. 有效括号的嵌套深度",
              src: "/maximum-nesting-depth-of-two-valid-parentheses-strings/",
              score: 1749
            },
            {
              title: "1541. 平衡括号字符串的最少插入次数",
              src: "/minimum-insertions-to-balance-a-parentheses-string/",
              score: 1759
            },
            {
              title: "2116. 判断一个括号字符串是否有效",
              src: "/check-if-a-parentheses-string-can-be-valid/",
              score: 2037
            },
          ],
        },
        {
          title: "3.5 表达式解析",
          isLeaf: true,
          child: [
            {
              title: "150. 逆波兰表达式求值",
              src: "/evaluate-reverse-polish-notation/",
            },
            {
              title: "1006. 笨阶乘",
              src: "/clumsy-factorial/",
              score: 1407
            },
            {
              title: "224. 基本计算器",
              src: "/basic-calculator/",
            },
            {
              title: "227. 基本计算器 II",
              src: "/basic-calculator-ii/",
            },
            {
              title: "726. 原子的数量",
              src: "/number-of-atoms/",
            },
            {
              title: "1106. 解析布尔表达式",
              src: "/parsing-a-boolean-expression/",
              score: 1880
            },
            {
              title: "591. 标签验证器",
              src: "/tag-validator/",
            },
            {
              title: "736. Lisp 语法解析",
              src: "/parse-lisp-expression/",
            },
            {
              title: "1096. 花括号展开 II",
              src: "/brace-expansion-ii/",
              score: 2348
            },
            {
              title: "1896. 反转表达式值的最少操作次数",
              src: "/minimum-cost-to-change-the-final-value-of-expression/",
              score: 2531
            },
            {
              title: "770. 基本计算器 IV",
              src: "/basic-calculator-iv/",
              score: 2863
            },
            {
              title: "439. 三元表达式解析器",
              src: "/ternary-expression-parser/",
            },
            {
              title: "772. 基本计算器 III",
              src: "/basic-calculator-iii/",
            },
            {
              title: "1087. 花括号展开",
              src: "/brace-expansion/",
              score: 1480
            },
            {
              title: "1597. 根据中缀表达式构造二叉表达式树",
              src: "/build-binary-expression-tree-from-infix-expression/",
            },
            {
              title: "1628. 设计带解析函数的表达式树",
              src: "/design-an-expression-tree-with-evaluate-function/",
            },
          ],
        },
        {
          title: "3.6 对顶栈",
          isLeaf: true,
          child: [
            {
              title: "2296. 设计一个文本编辑器",
              src: "/design-a-text-editor/",
              score: 1911
            },
          ],
        },
        {
          title: "3.7 单调栈",
          isLeaf: true,
          summary: `<a href="https://leetcode.cn/circle/discuss/9oZFK9/" target="_blank">单调栈题单</a>`,
        },
      ],
    },
    {
      title: "四、队列",
      summary: `<p>队列常用在 BFS 中，见 <a href="https://leetcode.cn/circle/discuss/YiXPXW/" target="_blank">网格图题单</a> 和 <a href="https://leetcode.cn/circle/discuss/01LUak/" target="_blank">图论题单</a>。与此相比，栈常用在 DFS 中，但无需我们手动维护。</p>`,
      child: [
        {
          title: "4.1 基础",
          isLeaf: true,
          child: [
            {
              title: "933. 最近的请求次数",
              src: "/number-of-recent-calls/",
              score: 1337
            },
            {
              title: "950. 按递增顺序显示卡牌",
              src: "/reveal-cards-in-increasing-order/",
              score: 1686
            },
            {
              title: "649. Dota2 参议院",
              src: "/dota2-senate/",
            },
            {
              title: "346. 数据流中的移动平均值",
              src: "/moving-average-from-data-stream/",
            },
            {
              title: "362. 敲击计数器",
              src: "/design-hit-counter/",
            },
            {
              title: "379. 电话目录管理系统",
              src: "/design-phone-directory/",
            },
            {
              title: "1429. 第一个唯一数字",
              src: "/first-unique-number/",
            },
            {
              title: "2534. 通过门的时间",
              src: "/time-taken-to-cross-the-door/",
            },
          ],
        },
        {
          title: "4.2 设计",
          isLeaf: true,
          child: [
            {
              title: "225. 用队列实现栈",
              src: "/implement-stack-using-queues/",
            },
            {
              title: "232. 用栈实现队列",
              src: "/implement-queue-using-stacks/",
            },
            {
              title: "622. 设计循环队列",
              src: "/design-circular-queue/",
            },
            {
              title: "641. 设计循环双端队列",
              src: "/design-circular-deque/",
            },
            {
              title: "1670. 设计前中后队列",
              src: "/design-front-middle-back-queue/",
              score: 1610
            },
          ],
        },
        {
          title: "4.3 单调队列",
          summary: `<p>个人觉得叫<strong>单调双端队列</strong>更准确。<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1bM411X72E/" target="_blank">原理讲解</a></p>`,
          isLeaf: true,
          child: [
            {
              title: "239. 滑动窗口最大值",
              src: "/sliding-window-maximum/",
            },
            {
              title: "LCR 184. 设计自助结算系统",
              src: "/dui-lie-de-zui-da-zhi-lcof/",
            },
            {
              title: "1438. 绝对差不超过限制的最长连续子数组",
              src: "/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
              score: 1672
            },
            {
              title: "2398. 预算内的最多机器人数目",
              src: "/maximum-number-of-robots-within-budget/",
              score: 1917
            },
            {
              title: "862. 和至少为 K 的最短子数组",
              src: "/shortest-subarray-with-sum-at-least-k/",
              score: 2306
            },
            {
              title: "1499. 满足不等式的最大值",
              src: "/max-value-of-equation/",
              score: 2456
            },
            {
              title: "2071. 你可以安排的最多任务数目",
              src: "/maximum-number-of-tasks-you-can-assign/",
              score: 2648
            },
          ],
        },
        {
          title: "4.4 单调队列优化 DP",
          summary: `<p>一般用来维护一段转移来源的最值。</p><ol>
        <li>前提：区间右端点变大时，左端点也在变大（同滑动窗口）。</li>
        <li>转移前，去掉队首无用数据。</li>
        <li>计算转移（直接从队首转移）。</li>
        <li>把数据（一般是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>）插入队尾前，去掉队尾无用数据。</li>
        </ol>`,
          isLeaf: true,
          child: [
            {
              title: "2944. 购买水果需要的最少金币数",
              src: "/minimum-number-of-coins-for-fruits/",
              score: 1708
            },
            {
              title: "1696. 跳跃游戏 VI",
              src: "/jump-game-vi/",
              score: 1954
            },
            {
              title: "1425. 带限制的子序列和",
              src: "/constrained-subsequence-sum/",
              score: 2032
            },
            {
              title: "375. 猜数字大小 II",
              src: "/guess-number-higher-or-lower-ii/",
            },
            {
              title: "1687. 从仓库到码头运输箱子",
              src: "/delivering-boxes-from-storage-to-ports/",
              score: 2610
            },
            {
              title: "3117. 划分数组得到最小的值之和",
              src: "/minimum-sum-of-values-by-dividing-array/",
              score: 2735
            },
            {
              title: "2945. 找到最大非递减数组的长度",
              src: "/find-maximum-non-decreasing-array-length/",
              score: 2943
            },
            {
              title: "2969. 购买水果需要的最少金币数 II",
              src: "/minimum-number-of-coins-for-fruits-ii/",
            },
          ],
        },
      ],
    },
    {
      title: "五、堆（优先队列）",
      summary: ``,
      child: [
        {
          title: "5.1 基础",
          isLeaf: true,
          child: [
            {
              title: "1046. 最后一块石头的重量",
              src: "/last-stone-weight/",
              score: 1172
            },
            {
              title: "2558. 从数量最多的堆取走礼物",
              src: "/take-gifts-from-the-richest-pile/",
              score: 1276
            },
            {
              title: "2336. 无限集中的最小数字",
              src: "/smallest-number-in-infinite-set/",
              score: 1375
            },
            {
              title: "2530. 执行 K 次操作后的最大分数",
              src: "/maximal-score-after-applying-k-operations/",
              score: 1386
            },
            {
              title: "3066. 超过阈值的最少操作数 II",
              src: "/minimum-operations-to-exceed-threshold-value-ii/",
              score: 1399
            },
            {
              title: "1962. 移除石子使总数最小",
              src: "/remove-stones-to-minimize-the-total/",
              score: 1418
            },
            {
              title: "1845. 座位预约管理系统",
              src: "/seat-reservation-manager/",
              score: 1428
            },
            {
              title: "2208. 将数组和减半的最少操作次数",
              src: "/minimum-operations-to-halve-array-sum/",
              score: 1550
            },
            {
              title: "2233. K 次增加后的最大乘积",
              src: "/maximum-product-after-k-increments/",
              score: 1685
            },
            {
              title: "1942. 最小未被占据椅子的编号",
              src: "/the-number-of-the-smallest-unoccupied-chair/",
              score: 1695
            },
            {
              title: "1801. 积压订单中的订单总数",
              src: "/number-of-orders-in-the-backlog/",
              score: 1711
            },
            {
              title: "2406. 将区间分为最少组数",
              src: "/divide-intervals-into-minimum-number-of-groups/",
              score: 1713
            },
            {
              title: "2462. 雇佣 K 位工人的总代价",
              src: "/total-cost-to-hire-k-workers/",
              score: 1763
            },
            {
              title: "1834. 单线程 CPU",
              src: "/single-threaded-cpu/",
              score: 1797
            },
            {
              title: "1792. 最大平均通过率",
              src: "/maximum-average-pass-ratio/",
              score: 1817
            },
            {
              title: "2931. 购买物品的最大开销",
              src: "/maximum-spending-after-buying-items/",
              score: 1822
            },
            {
              title: "1882. 使用服务器处理任务",
              src: "/process-tasks-using-servers/",
              score: 1979
            },
            {
              title: "2402. 会议室 III",
              src: "/meeting-rooms-iii/",
              score: 2092
            },
            {
              title: "253. 会议室 II",
              src: "/meeting-rooms-ii/",
            },
            {
              title: "1167. 连接木棍的最低费用",
              src: "/minimum-cost-to-connect-sticks/",
              score: 1481
            },
          ],
        },
        {
          title: "5.2 进阶",
          isLeaf: true,
          child: [
            {
              title: "23. 合并 K 个升序链表",
              src: "/merge-k-sorted-lists/",
            },
            {
              title: "355. 设计推特",
              src: "/design-twitter/",
            },
            {
              title: "502. IPO",
              src: "/ipo/",
            },
            {
              title: "1705. 吃苹果的最大数目",
              src: "/maximum-number-of-eaten-apples/",
              score: 1929
            },
            {
              title: "778. 水位上升的泳池中游泳",
              src: "/swim-in-rising-water/",
              score: 2096
            },
            {
              title: "1631. 最小体力消耗路径",
              src: "/path-with-minimum-effort/",
              score: 1947
            },
            {
              title: "1354. 多次求和构造目标数组",
              src: "/construct-target-array-with-multiple-sums/",
              score: 2014
            },
            {
              title: "1353. 最多可以参加的会议数目",
              src: "/maximum-number-of-events-that-can-be-attended/",
              score: 2015
            },
            {
              title: "632. 最小区间",
              src: "/smallest-range-covering-elements-from-k-lists/",
            },
            {
              title: "2542. 最大子序列的分数",
              src: "/maximum-subsequence-score/",
              score: 2056
            },
            {
              title: "1383. 最大的团队表现值",
              src: "/maximum-performance-of-a-team/",
              score: 2091
            },
            {
              title: "2503. 矩阵查询可获得的最大分数",
              src: "/maximum-number-of-points-from-grid-queries/",
              score: 2095
            },
            {
              title: "2163. 删除元素后和的最小差值",
              src: "/minimum-difference-in-sums-after-removal-of-elements/",
              score: 1252
            },
            {
              title: "857. 雇佣 K 名工人的最低成本",
              src: "/minimum-cost-to-hire-k-workers/",
              score: 2259
            },
            {
              title: "1606. 找到处理最多请求的服务器",
              src: "/find-servers-that-handled-most-number-of-requests/",
              score: 2275
            },
            {
              title: "1851. 包含每个查询的最小区间",
              src: "/minimum-interval-to-include-each-query/",
              score: 2286
            },
            {
              title: "218. 天际线问题",
              src: "/the-skyline-problem/",
            },
            {
              title: "407. 接雨水 II",
              src: "/trapping-rain-water-ii/",
            },
            {
              title: "2940. 找到 Alice 和 Bob 可以相遇的建筑",
              src: "/find-building-where-alice-and-bob-can-meet/",
              score: 2327
            },
            {
              title: "2589. 完成所有任务的最少时间",
              src: "/minimum-time-to-complete-all-tasks/",
              score: 2380
            },
            {
              title: "1675. 数组的最小偏移量",
              src: "/minimize-deviation-in-array/",
              score: 2533
            },
            {
              title: "2617. 网格图中最少访问的格子数",
              src: "/minimum-number-of-visited-cells-in-a-grid/",
              score: 2581
            },
            {
              title: "2532. 过桥的时间",
              src: "/time-to-cross-a-bridge/",
              score: 2588
            },
            {
              title: "LCP 33. 蓄水",
              src: "/o8SXZn/",
            },
            {
              title: "1199. 建造街区的最短时间",
              src: "/minimum-time-to-build-blocks/",
              score: 2250
            },
            {
              title: "2263. 数组变为有序的最小操作次数",
              src: "/make-array-non-decreasing-or-non-increasing/",
            },
          ],
        },
        {
          title: "5.3 重排元素",
          isLeaf: true,
          child: [
            {
              title: "984. 不含 AAA 或 BBB 的字符串",
              src: "/string-without-aaa-or-bbb/",
              score: 1474
            },
            {
              title: "767. 重构字符串",
              src: "/reorganize-string/",
              score: 1681
            },
            {
              title: "1054. 距离相等的条形码",
              src: "/distant-barcodes/",
              score: 1701
            },
            {
              title: "1953. 你可以工作的最大周数",
              src: "/maximum-number-of-weeks-for-which-you-can-work/",
              score: 1803
            },
            {
              title: "1405. 最长快乐字符串",
              src: "/longest-happy-string/",
              score: 1820
            },
            {
              title: "3081. 替换字符串中的问号使分数最小",
              src: "/replace-question-marks-in-string-to-minimize-its-value/",
              score: 1904
            },
            {
              title: "621. 任务调度器",
              src: "/task-scheduler/",
            },
            {
              title: "358. K 距离间隔重排字符串",
              src: "/rearrange-string-k-distance-apart/",
            },
          ],
        },
        {
          title: "5.4 第 K 小/大",
          isLeaf: true,
          child: [
            {
              title: "264. 丑数 II",
              src: "/ugly-number-ii/",
            },
            {
              title: "378. 有序矩阵中第 K 小的元素",
              src: "/kth-smallest-element-in-a-sorted-matrix/",
            },
            {
              title: "373. 查找和最小的 K 对数字",
              src: "/find-k-pairs-with-smallest-sums/",
            },
            {
              title: "1439. 有序矩阵中的第 k 个最小数组和",
              src: "/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/",
              score: 2133
            },
            {
              title: "786. 第 K 个最小的素数分数",
              src: "/k-th-smallest-prime-fraction/",
              score: 2168
            },
            {
              title: "2386. 找出数组的第 K 大和",
              src: "/find-the-k-sum-of-an-array/",
              score: 2647
            },
          ],
        },
        {
          title: "5.5 反悔堆",
          isLeaf: true,
          child: [
            {
              title: "LCP 30. 魔塔游戏",
              src: "/p0NxJO/",
            },
            {
              title: "1642. 可以到达的最远建筑",
              src: "/furthest-building-you-can-reach/",
              score: 1962
            },
            {
              title: "630. 课程表 III",
              src: "/course-schedule-iii/",
            },
            {
              title: "871. 最低加油次数",
              src: "/minimum-number-of-refueling-stops/",
              score: 2074
            },
            {
              title: "2813. 子序列最大优雅度",
              src: "/maximum-elegance-of-a-k-length-subsequence/",
              score: 2582
            },
            {
              title: "3049. 标记所有下标的最早秒数 II",
              src: "/earliest-second-to-mark-indices-ii/",
              score: 3111
            },
            {
              title: "2599. 使前缀和数组非负",
              src: "/make-the-prefix-sum-non-negative/",
            },
          ],
        },
        {
          title: "5.6 懒删除堆",
          isLeaf: true,
          child: [
            {
              title: "2349. 设计数字容器系统",
              src: "/design-a-number-container-system/",
              score: 1540
            },
            {
              title: "2353. 设计食物评分系统",
              src: "/design-a-food-rating-system/",
              score: 1781
            },
            {
              title: "3092. 最高频率的 ID",
              src: "/most-frequent-ids/",
              score: 1793
            },
            {
              title: "2034. 股票价格波动",
              src: "/stock-price-fluctuation/",
              score: 1831
            },
            {
              title: "1172. 餐盘栈",
              src: "/dinner-plate-stacks/",
              score: 2109
            },
          ],
        },
        {
          title: "5.7 对顶堆",
          isLeaf: true,
          child: [
            {
              title: "2102. 序列顺序查询",
              src: "/sequentially-ordinal-rank-tracker/",
              score: 1467
            },
            {
              title: "295. 数据流的中位数",
              src: "/find-median-from-data-stream/",
            },
            {
              title: "480. 滑动窗口中位数",
              src: "/sliding-window-median/",
            },
            {
              title: "703. 数据流中的第 K 大元素",
              src: "/kth-largest-element-in-a-stream/",
            },
            {
              title: "3013. 将数组分成最小总代价的子数组 II",
              src: "/divide-an-array-into-subarrays-with-minimum-cost-ii/",
              score: 2540
            },
            {
              title: "LCP 24. 数字游戏",
              src: "/5TxKeK/",
            },
          ],
        },
      ],
    },
    {
      title: "六、字典树（trie）",
      summary: ``,
      child: [
        {
          title: "6.1 基础",
          isLeaf: true,
          child: [
            {
              title: "208. 实现 Trie (前缀树)",
              src: "/implement-trie-prefix-tree/",
            },
            {
              title: "211. 添加与搜索单词 - 数据结构设计",
              src: "/design-add-and-search-words-data-structure/",
            },
            {
              title: "14. 最长公共前缀",
              src: "/longest-common-prefix/",
            },
            {
              title: "648. 单词替换",
              src: "/replace-words/",
            },
            {
              title: "677. 键值映射",
              src: "/map-sum-pairs/",
            },
            {
              title: "720. 词典中最长的单词",
              src: "/longest-word-in-dictionary/",
            },
            {
              title: "1268. 搜索推荐系统",
              src: "/search-suggestions-system/",
              score: 1573
            },
            {
              title: "1233. 删除子文件夹",
              src: "/remove-sub-folders-from-the-filesystem/",
              score: 1544
            },
            {
              title: "820. 单词的压缩编码",
              src: "/short-encoding-of-words/",
              score: 1632
            },
            {
              title: "2416. 字符串的前缀分数和",
              src: "/sum-of-prefix-scores-of-strings/",
              score: 1725
            },
            {
              title: "1804. 实现 Trie （前缀树） II",
              src: "/implement-trie-ii-prefix-tree/",
            },
          ],
        },
        {
          title: "6.2 进阶",
          isLeaf: true,
          child: [
            {
              title: "676. 实现一个魔法字典",
              src: "/implement-magic-dictionary/",
            },
            {
              title: "212. 单词搜索 II",
              src: "/word-search-ii/",
            },
            {
              title: "336. 回文对",
              src: "/palindrome-pairs/",
            },
            {
              title: "745. 前缀和后缀搜索",
              src: "/prefix-and-suffix-search/",
            },
            {
              title: "3093. 最长公共后缀查询",
              src: "/longest-common-suffix-queries/",
              score: 2118
            },
            {
              title: "3045. 统计前后缀下标对 II",
              src: "/count-prefix-and-suffix-pairs-ii/",
              score: 2327
            },
            {
              title: "1948. 删除系统中的重复文件夹",
              src: "/delete-duplicate-folders-in-system/",
              score: 2533
            },
            {
              title: "425. 单词方块",
              src: "/word-squares/",
            },
            {
              title: "527. 单词缩写",
              src: "/word-abbreviation/",
            },
            {
              title: "588. 设计内存文件系统",
              src: "/design-in-memory-file-system/",
            },
            {
              title: "616. 给字符串添加加粗标签",
              src: "/add-bold-tag-in-string/",
            },
            {
              title: "758. 字符串中的加粗单词",
              src: "/bold-words-in-string/",
              score: 1547
            },
            {
              title: "642. 设计搜索自动补全系统",
              src: "/design-search-autocomplete-system/",
            },
            {
              title: "1065. 字符串的索引对",
              src: "/index-pairs-of-a-string/",
              score: 1389
            },
            {
              title: "1166. 设计文件系统",
              src: "/design-file-system/",
              score: 1479
            },
            {
              title: "1858. 包含所有前缀的最长单词",
              src: "/longest-word-with-all-prefixes/",
            },
          ],
        },
        {
          title: "6.3 字典树优化 DP",
          isLeaf: true,
          child: [
            {
              title: "139. 单词拆分",
              src: "/word-break/",
            },
            {
              title: "140. 单词拆分 II",
              src: "/word-break-ii/",
            },
            {
              title: "472. 连接词",
              src: "/concatenated-words/",
            },
            {
              title: "2977. 转换字符串的最小成本 II",
              src: "/minimum-cost-to-convert-string-ii/",
              score: 2695
            },
          ],
        },
        {
          title: "6.4 0-1 字典树（异或字典树）",
          isLeaf: true,
          child: [
            {
              title: "421. 数组中两个数的最大异或值",
              src: "/maximum-xor-of-two-numbers-in-an-array/",
            },
            {
              title: "2935. 找出强数对的最大异或值 II",
              src: "/maximum-strong-pair-xor-ii/",
              score: 2348
            },
            {
              title: "1707. 与数组中元素的最大异或值",
              src: "/maximum-xor-with-an-element-from-array/",
              score: 2358
            },
            {
              title: "1803. 统计异或值在范围内的数对有多少",
              src: "/count-pairs-with-xor-in-a-range/",
              score: 2479
            },
            {
              title: "1938. 查询最大基因差",
              src: "/maximum-genetic-difference-query/",
              score: 2502
            },
            {
              title: "2479. 两个不重叠子树的最大异或值",
              src: "/maximum-xor-of-two-non-overlapping-subtrees/",
            },
          ],
        },
      ],
    },
    {
      title: "七、并查集",
      summary: `<p>见 <a href="https://leetcode.cn/circle/discuss/YiXPXW/" target="_blank">网格图题单</a> 中的 DFS 和 <a href="https://leetcode.cn/circle/discuss/01LUak/" target="_blank">图论题单</a> 中的 DFS，其中大部分题目可以用并查集实现。</p>`,
      child: [
        {
          title: "7.1 基础",
          isLeaf: true,
          child: [
            {
              title: "990. 等式方程的可满足性",
              src: "/satisfiability-of-equality-equations/",
              score: 1638
            },
            {
              title: "721. 账户合并",
              src: "/accounts-merge/",
            },
            {
              title: "737. 句子相似性 II",
              src: "/sentence-similarity-ii/",
            },
            {
              title: "1101. 彼此熟识的最早时间",
              src: "/the-earliest-moment-when-everyone-become-friends/",
              score: 1558
            },
            {
              title: "1258. 近义词句子",
              src: "/synonymous-sentences/",
              score: 1847
            },
          ],
        },
        {
          title: "7.2 进阶",
          isLeaf: true,
          child: [
            {
              title: "1202. 交换字符串中的元素",
              src: "/smallest-string-with-swaps/",
              score: 1855
            },
            {
              title: "1061. 按字典序排列最小的等效字符串",
              src: "/lexicographically-smallest-equivalent-string/",
            },
            {
              title: "1722. 执行交换操作后的最小汉明距离",
              src: "/minimize-hamming-distance-after-swap-operations/",
              score: 1892
            },
            {
              title: "765. 情侣牵手",
              src: "/couples-holding-hands/",
              score: 1999
            },
            {
              title: "947. 移除最多的同行或同列石头",
              src: "/most-stones-removed-with-same-row-or-column/",
              score: 2034
            },
            {
              title: "839. 相似字符串组",
              src: "/similar-string-groups/",
              score: 2053
            },
            {
              title: "1970. 你能穿过矩阵的最后一天",
              src: "/last-day-where-you-can-still-cross/",
              score: 2123
            },
            {
              title: "2076. 处理含限制条件的好友请求",
              src: "/process-restricted-friend-requests/",
              score: 2130
            },
            {
              title: "1579. 保证图可完全遍历",
              src: "/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
              score: 2131
            },
            {
              title: "959. 由斜杠划分区域",
              src: "/regions-cut-by-slashes/",
              score: 2135
            },
            {
              title: "2812. 找出最安全路径",
              src: "/find-the-safest-path-in-a-grid/",
              score: 2153
            },
            {
              title: "2503. 矩阵查询可获得的最大分数",
              src: "/maximum-number-of-points-from-grid-queries/",
              score: 2195
            },
            {
              title: "2867. 统计树中的合法路径数目",
              src: "/count-valid-paths-in-a-tree/",
              score: 2428
            },
            {
              title: "2421. 好路径的数目",
              src: "/number-of-good-paths/",
              score: 2444
            },
            {
              title: "2157. 字符串分组",
              src: "/groups-of-strings/",
              score: 2499
            },
            {
              title: "1632. 矩阵转换后的秩",
              src: "/rank-transform-of-a-matrix/",
              score: 2529
            },
            {
              title: "803. 打砖块",
              src: "/bricks-falling-when-hit/",
              score: 2765
            },
            {
              title: "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
              src: "/number-of-ways-to-reorder-array-to-get-same-bst/",
              score: 2288
            },
            {
              title: "LCP 71. 集水器",
              src: "/kskhHQ/",
            },
            {
              title: "2371. 最小化网格中的最大值",
              src: "/minimize-maximum-value-in-a-grid/",
            },
          ],
        },
        {
          title: "7.3 公因数并查集",
          isLeaf: true,
          child: [
            {
              title: "2709. 最大公约数遍历",
              src: "/greatest-common-divisor-traversal/",
              score: 2171
            },
            {
              title: "1627. 带阈值的图连通性",
              src: "/graph-connectivity-with-threshold/",
              score: 2221
            },
            {
              title: "952. 按公因数计算最大组件大小",
              src: "/largest-component-size-by-common-factor/",
              score: 2272
            },
            {
              title: "1998. 数组的最大公因数排序",
              src: "/gcd-sort-of-an-array/",
              score: 2429
            },
          ],
        },
        {
          title: "7.4 数组上的并查集",
          isLeaf: true,
          child: [
            {
              title: "1488. 避免洪水泛滥",
              src: "/avoid-flood-in-the-city/",
              score: 1973
            },
            {
              title: "2382. 删除操作后的最大子段和",
              src: "/maximum-segment-sum-after-removals/",
              score: 2136
            },
            {
              title: "2334. 元素值大于变化阈值的子数组",
              src: "/subarray-with-elements-greater-than-varying-threshold/",
              score: 2381
            },
          ],
        },
        {
          title: "7.5 区间并查集",
          isLeaf: true,
          child: [
            {
              title: "1851. 包含每个查询的最小区间",
              src: "/minimum-interval-to-include-each-query/",
              score: 2286
            },
            {
              title: "2158. 每天绘制新区域的数量",
              src: "/amount-of-new-area-painted-each-day/"
            },
          ],
        },
        {
          title: "7.6 边权并查集",
          isLeaf: true,
          child: [
            {
              title: "399. 除法求值",
              src: "/evaluate-division/",
            },
            {
              title: "2307. 检查方程中的矛盾之处",
              src: "/check-for-contradictions-in-equations/",
            },
          ],
        },
      ],
    },
    {
      title: "八、树状数组和线段树",
      summary: `能用树状数组解决的题目，也能用线段树解决（反过来不一定）。但树状数组实现简单，代码短。
      为方便大家练习，我把适合用树状数组解决的题目分到树状数组中，其余分到线段树中。`,
      child: [
        {
          title: "8.1 树状数组",
          summary: `<p>讲解：<a href="https://leetcode.cn/problems/range-sum-query-mutable/solution/dai-ni-fa-ming-shu-zhuang-shu-zu-fu-shu-lyfll/" target="_blank">带你发明树状数组！附数学证明</a></p>`,
          isLeaf: true,
          child: [
            {
              title: "307. 区域和检索 - 数组可修改",
              src: "/range-sum-query-mutable/",
            },
            {
              title: "3072. 将元素分配到两个数组中 II",
              src: "/distribute-elements-into-two-arrays-ii/",
              score: 2052
            },
            {
              title: "1649. 通过指令创建有序数组",
              src: "/create-sorted-array-through-instructions/",
              score: 2207
            },
            {
              title: "2179. 统计数组中好三元组数目",
              src: "/count-good-triplets-in-an-array/",
              score: 2272
            },
            {
              title: "2659. 将数组清空",
              src: "/make-array-empty/",
              score: 2281
            },
            {
              title: "1505. 最多 K 次交换相邻数位后得到的最小整数",
              src: "/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/",
              score: 2336
            },
            {
              title: "2926. 平衡子序列的最大和",
              src: "/maximum-balanced-subsequence-sum/",
              score: 2448
            },
            {
              title: "2736. 最大和查询",
              src: "/maximum-sum-queries/",
              score: 2533
            },
            {
              title: "2519. 统计 K-Big 索引的数量",
              src: "/count-the-number-of-k-big-indices/",
            },
            {
              title: "2613. 美数对",
              src: "/beautiful-pairs/",
            },
            {
              title: "2921. 价格递增的最大利润三元组 II",
              src: "/maximum-profitable-triplets-with-increasing-prices-ii/",
            },
            {
              title: "308. 二维区域和检索 - 可变",
              src: "/range-sum-query-2d-mutable/",
            },
          ],
        },
        {
          title: "8.2 逆序对",
          isLeaf: true,
          child: [
            {
              title: "LCR 170. 交易逆序对的总数",
              src: "/shu-zu-zhong-de-ni-xu-dui-lcof/",
            },
            {
              title: "315. 计算右侧小于当前元素的个数",
              src: "/count-of-smaller-numbers-after-self/",
            },
            {
              title: "493. 翻转对",
              src: "/reverse-pairs/",
            },
            {
              title: "327. 区间和的个数",
              src: "/count-of-range-sum/",
            },
            {
              title: "2426. 满足不等式的数对数目",
              src: "/number-of-pairs-satisfying-inequality/",
              score: 2030
            },
          ],
        },
        {
          title: "8.3 线段树（无区间更新）",
          isLeaf: true,
          child: [
            {
              title: "1157. 子数组中占绝大多数的元素",
              src: "/online-majority-element-in-subarray/",
              score: 2205
            },
            {
              title: "2407. 最长递增子序列 II",
              src: "/longest-increasing-subsequence-ii/",
              score: 2280
            },
            {
              title: "2940. 找到 Alice 和 Bob 可以相遇的建筑",
              src: "/find-building-where-alice-and-bob-can-meet/",
              score: 2327
            },
            {
              title: "2589. 完成所有任务的最少时间",
              src: "/minimum-time-to-complete-all-tasks/",
              score: 2380
            },
            {
              title: "2286. 以组为单位订音乐会的门票",
              src: "/booking-concert-tickets-in-groups/",
              score: 2470
            },
            {
              title: "2213. 由单个字符重复的最长子字符串",
              src: "/longest-substring-of-one-repeating-character/",
              score: 2628
            },
          ],
        },
        {
          title: "8.4 Lazy 线段树（有区间更新）",
          isLeaf: true,
          child: [
            {
              title: "2569. 更新数组后处理求和查询",
              src: "/handling-sum-queries-after-update/",
              score: 2397
            },
            {
              title: "1622. 奇妙序列",
              src: "/fancy-sequence/",
              score: 2476
            },
            {
              title: "2916. 子数组不同元素数目的平方和 II",
              src: "/subarrays-distinct-element-sum-of-squares-ii/",
              score: 2816
            },
            {
              title: "LCP 05. 发 LeetCoin",
              src: "/coin-bonus/",
            },
            {
              title: "LCP 27. 黑盒光线反射",
              src: "/IQvJ9i/",
            },
          ],
        },
        {
          title: "8.5 动态开点线段树",
          isLeaf: true,
          child: [
            {
              title: "699. 掉落的方块",
              src: "/falling-squares/",
            },
            {
              title: "715. Range 模块",
              src: "/range-module/",
            },
            {
              title: "729. 我的日程安排表 I",
              src: "/my-calendar-i/",
            },
            {
              title: "731. 我的日程安排表 II",
              src: "/my-calendar-ii/",
            },
            {
              title: "732. 我的日程安排表 III",
              src: "/my-calendar-iii/",
            },
            {
              title: "850. 矩形面积 II",
              src: "/rectangle-area-ii/",
              score: 2235
            },
            {
              title: "2276. 统计区间中的整数数目",
              src: "/count-integers-in-intervals/",
              score: 2222
            },
          ],
        },
      ],
    },
  ],
} as ProblemCategory;
