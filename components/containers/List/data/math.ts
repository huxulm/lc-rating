import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】数学算法（数论/组合/概率期望/博弈/计算几何/随机算法）",
    "original_src": "https://leetcode.cn/circle/discuss/IYT3ss",
    "last_update": "2024-09-15T13:55:18.848609+00:00",
    "sort": 0,
    "child": [
        {
            "title": "前言",
            "sort": 0,
            "summary": "本文整理了力扣上的数学相关题目，主要以数论和组合数学为主。<br>部分题目（尤其是组合数学）会涉及到取模，我写了一篇教程，请看 <a href=\"https://leetcode.cn/circle/discuss/mDfnkW/\">模运算的世界：当加减乘除遇上取模</a>。<br>",
            "child": []
        },
        {
            "title": "一、数论",
            "sort": 1,
            "summary": "",
            "child": [
                {
                    "title": "§1.1 判断质数",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "3115. 质数的最大距离",
                            "sort": 0,
                            "src": "/maximum-prime-difference/",
                            "score": 1294,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2614. 对角线上的质数",
                            "sort": 1,
                            "src": "/prime-in-diagonal/",
                            "score": 1375,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "762. 二进制表示中质数个计算置位",
                            "sort": 2,
                            "src": "/prime-number-of-set-bits-in-binary-representation/",
                            "score": 1383,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3044. 出现频率最高的质数",
                            "sort": 3,
                            "src": "/most-frequent-prime/",
                            "score": 1737,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "866. 回文质数",
                            "sort": 4,
                            "src": "/prime-palindrome/",
                            "score": 1938,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.2 预处理质数（筛质数）",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1H8411E7hn/\">埃氏筛和欧拉筛的讲解</a><br>",
                    "child": [
                        {
                            "title": "204. 计数质数",
                            "sort": 0,
                            "src": "/count-primes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2761. 和等于目标值的质数对",
                            "sort": 1,
                            "src": "/prime-pairs-with-target-sum/",
                            "score": 1505,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3233. 统计不是特殊数字的数字数量",
                            "sort": 2,
                            "src": "/find-the-count-of-numbers-which-are-not-special/",
                            "score": 1509,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2523. 范围内最接近的两个质数",
                            "sort": 3,
                            "src": "/closest-prime-numbers-in-range/",
                            "score": 1650,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2601. 质数减法运算",
                            "sort": 4,
                            "src": "/prime-subtraction-operation/",
                            "score": 1779,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.3 质因数分解",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2521. 数组乘积中的不同质因数数目",
                            "sort": 0,
                            "src": "/distinct-prime-factors-of-product-of-array/",
                            "score": 1413,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2507. 使用质因数之和替换后可以取到的最小值",
                            "sort": 1,
                            "src": "/smallest-value-after-replacing-with-sum-of-prime-factors/",
                            "score": 1500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2584. 分割数组使乘积互质",
                            "sort": 2,
                            "src": "/split-the-array-to-make-coprime-products/",
                            "score": 2159,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2709. 最大公约数遍历",
                            "sort": 3,
                            "src": "/greatest-common-divisor-traversal/",
                            "score": 2172,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2862. 完全子集的最大元素和",
                            "sort": 4,
                            "src": "/maximum-element-sum-of-a-complete-subset-of-indices/",
                            "score": 2292,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2818. 操作使得分最大",
                            "sort": 5,
                            "src": "/apply-operations-to-maximize-score/",
                            "score": 2397,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1998. 数组的最大公因数排序",
                            "sort": 6,
                            "src": "/gcd-sort-of-an-array/",
                            "score": 2429,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1735. 生成乘积数组的方案数",
                            "sort": 7,
                            "src": "/count-ways-to-make-array-with-product/",
                            "score": 2500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2338. 统计理想数组的数目",
                            "sort": 8,
                            "src": "/count-the-number-of-ideal-arrays/",
                            "score": 2615,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.4 阶乘分解",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "172. 阶乘后的零",
                            "sort": 0,
                            "src": "/factorial-trailing-zeroes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "793. 阶乘函数后 K 个零",
                            "sort": 1,
                            "src": "/preimage-size-of-factorial-zeroes-function/",
                            "score": 2100,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.5 因子",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2427. 公因子的数目",
                            "sort": 0,
                            "src": "/number-of-common-factors/",
                            "score": 1172,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1952. 三除数",
                            "sort": 1,
                            "src": "/three-divisors/",
                            "score": 1204,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1492. n 的第 k 个因子",
                            "sort": 2,
                            "src": "/the-kth-factor-of-n/",
                            "score": 1232,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "507. 完美数",
                            "sort": 3,
                            "src": "/perfect-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1390. 四因数",
                            "sort": 4,
                            "src": "/four-divisors/",
                            "score": 1478,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1362. 最接近的因数",
                            "sort": 5,
                            "src": "/closest-divisors/",
                            "score": 1534,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "829. 连续整数求和",
                            "sort": 6,
                            "src": "/consecutive-numbers-sum/",
                            "score": 1694,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3164. 优质数对的总数 II",
                            "sort": 7,
                            "src": "/find-the-number-of-good-pairs-ii/",
                            "score": 1777,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "952. 按公因数计算最大组件大小",
                            "sort": 8,
                            "src": "/largest-component-size-by-common-factor/",
                            "score": 2272,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1627. 带阈值的图连通性",
                            "sort": 9,
                            "src": "/graph-connectivity-with-threshold/",
                            "score": 2221,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2183. 统计可以被 K 整除的下标对数目",
                            "sort": 10,
                            "src": "/count-array-pairs-divisible-by-k/",
                            "score": 2246,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2198. 单因数三元组",
                            "sort": 11,
                            "src": "/number-of-single-divisor-triplets/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "625. 最小因式分解",
                            "sort": 12,
                            "src": "/minimum-factorization/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2847. 给定数字乘积的最小数字",
                            "sort": 13,
                            "src": "/smallest-number-with-given-digit-product/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.6 最大公约数（GCD）",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1979. 找出数组的最大公约数",
                            "sort": 0,
                            "src": "/find-greatest-common-divisor-of-array/",
                            "score": 1184,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2807. 在链表中插入最大公约数",
                            "sort": 1,
                            "src": "/insert-greatest-common-divisors-in-linked-list/",
                            "score": 1279,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "914. 卡牌分组",
                            "sort": 2,
                            "src": "/x-of-a-kind-in-a-deck-of-cards/",
                            "score": 1371,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1071. 字符串的最大公因子",
                            "sort": 3,
                            "src": "/greatest-common-divisor-of-strings/",
                            "score": 1398,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2001. 可互换矩形的组数",
                            "sort": 4,
                            "src": "/number-of-pairs-of-interchangeable-rectangles/",
                            "score": 1436,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2344. 使数组可以被整除的最少删除次数",
                            "sort": 5,
                            "src": "/minimum-deletions-to-make-array-divisible/",
                            "score": 1641,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "365. 水壶问题",
                            "sort": 6,
                            "src": "/water-and-jug-problem/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "858. 镜面反射",
                            "sort": 7,
                            "src": "/mirror-reflection/",
                            "score": 1881,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "149. 直线上最多的点数",
                            "sort": 8,
                            "src": "/max-points-on-a-line/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2607. 使子数组元素和相等",
                            "sort": 9,
                            "src": "/make-k-subarray-sums-equal/",
                            "score": 2071,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2543. 判断一个点是否可以到达",
                            "sort": 10,
                            "src": "/check-if-point-is-reachable/",
                            "score": 2221,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2436. 使子数组最大公约数大于一的最小分割数",
                            "sort": 11,
                            "src": "/minimum-split-into-subarrays-with-gcd-greater-than-one/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.7 GCD 性质",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2447. 最大公因数等于 K 的子数组数目",
                            "sort": 0,
                            "src": "/number-of-subarrays-with-gcd-equal-to-k/",
                            "score": 1603,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2654. 使数组所有元素变成 1 的最少操作次数",
                            "sort": 1,
                            "src": "/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/",
                            "score": 1929,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1250. 检查「好数组」",
                            "sort": 2,
                            "src": "/check-if-it-is-a-good-array/",
                            "score": 1983,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2941. 子数组的最大 GCD-Sum",
                            "sort": 3,
                            "src": "/maximum-gcd-sum-of-a-subarray/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.8 GCD 与因子",
                    "sort": 7,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1819. 序列中不同最大公约数的数目",
                            "sort": 0,
                            "src": "/number-of-different-subsequences-gcds/",
                            "score": 2540,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 14. 切分数组",
                            "sort": 1,
                            "src": "/qie-fen-shu-zu/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2464. 有效分割中的最少子数组数目",
                            "sort": 2,
                            "src": "/minimum-subarrays-in-a-valid-split/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.9 最小公倍数（LCM）",
                    "sort": 8,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2413. 最小偶倍数",
                            "sort": 0,
                            "src": "/smallest-even-multiple/",
                            "score": 1145,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2470. 最小公倍数为 K 的子数组数目",
                            "sort": 1,
                            "src": "/number-of-subarrays-with-lcm-equal-to-k/",
                            "score": 1560,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2197. 替换数组中的非互质数",
                            "sort": 2,
                            "src": "/replace-non-coprime-numbers-in-array/",
                            "score": 2057,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.10 互质",
                    "sort": 9,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2748. 美丽下标对的数目",
                            "sort": 0,
                            "src": "/number-of-beautiful-pairs/",
                            "score": 1301,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1447. 最简分数",
                            "sort": 1,
                            "src": "/simplified-fractions/",
                            "score": 1400,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1766. 互质树",
                            "sort": 2,
                            "src": "/tree-of-coprimes/",
                            "score": 2232,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.11 同余",
                    "sort": 10,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2453. 摧毁一系列目标",
                            "sort": 0,
                            "src": "/destroy-sequential-targets/",
                            "score": 1762,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2598. 执行操作后的最大 MEX",
                            "sort": 1,
                            "src": "/smallest-missing-non-negative-integer-after-operations/",
                            "score": 1846,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1590. 使数组和能被 P 整除",
                            "sort": 2,
                            "src": "/make-sum-divisible-by-p/",
                            "score": 2039,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.12 其他",
                    "sort": 11,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "326. 3 的幂",
                            "sort": 0,
                            "src": "/power-of-three/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "633. 平方数之和",
                            "sort": 1,
                            "src": "/sum-of-square-numbers/",
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
                            "title": "1015. 可被 K 整除的最小整数",
                            "sort": 3,
                            "src": "/smallest-integer-divisible-by-k/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2240. 买钢笔和铅笔的方案数",
                            "sort": 4,
                            "src": "/number-of-ways-to-buy-pens-and-pencils/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2221. 数组的三角和",
                            "sort": 5,
                            "src": "/find-triangular-sum-of-an-array/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、组合数学",
            "sort": 2,
            "summary": "",
            "child": [
                {
                    "title": "§2.1 乘法原理",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2125. 银行中的激光束数量",
                            "sort": 0,
                            "src": "/number-of-laser-beams-in-a-bank/",
                            "score": 1280,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3128. 直角三角形",
                            "sort": 1,
                            "src": "/right-triangles/",
                            "score": 1541,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1573. 分割字符串的方案数",
                            "sort": 2,
                            "src": "/number-of-ways-to-split-a-string/",
                            "score": 1591,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2750. 将数组划分成若干好子数组的方式",
                            "sort": 3,
                            "src": "/ways-to-split-array-into-good-subarrays/",
                            "score": 1598,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2550. 猴子碰撞的方法数",
                            "sort": 4,
                            "src": "/count-collisions-of-monkeys-on-a-polygon/",
                            "score": 1663,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2063. 所有子字符串中的元音",
                            "sort": 5,
                            "src": "/vowels-of-all-substrings/",
                            "score": 1663,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1922. 统计好数字的数目",
                            "sort": 6,
                            "src": "/count-good-numbers/",
                            "score": 1675,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2147. 分隔长廊的方案数",
                            "sort": 7,
                            "src": "/number-of-ways-to-divide-a-long-corridor/",
                            "score": 1915,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2963. 统计好分割方案的数目",
                            "sort": 8,
                            "src": "/count-the-number-of-good-partitions/",
                            "score": 1985,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2867. 统计树中的合法路径数目",
                            "sort": 9,
                            "src": "/count-valid-paths-in-a-tree/",
                            "score": 2428,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2450. 应用操作后不同二进制字符串的数量",
                            "sort": 10,
                            "src": "/number-of-distinct-binary-strings-after-applying-operations/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.2 组合计数",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "62. 不同路径",
                            "sort": 0,
                            "src": "/unique-paths/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1175. 质数排列",
                            "sort": 1,
                            "src": "/prime-arrangements/",
                            "score": 1489,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3179. K 秒后第 N 个元素的值",
                            "sort": 2,
                            "src": "/find-the-n-th-value-after-k-seconds/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1359. 有效的快递序列数目",
                            "sort": 3,
                            "src": "/count-all-valid-pickup-and-delivery-options/",
                            "score": 1723,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2400. 恰好移动 k 步到达某一位置的方法数目",
                            "sort": 4,
                            "src": "/number-of-ways-to-reach-a-position-after-exactly-k-steps/",
                            "score": 1751,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2514. 统计同位异构字符串数目",
                            "sort": 5,
                            "src": "/count-anagrams/",
                            "score": 2070,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3154. 到达第 K 级台阶的方案数",
                            "sort": 6,
                            "src": "/find-number-of-ways-to-reach-the-k-th-stair/",
                            "score": 2071,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1643. 第 K 条最小指令",
                            "sort": 7,
                            "src": "/kth-smallest-instructions/",
                            "score": 2080,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2842. 统计一个字符串的 k 子序列美丽值最大的数目",
                            "sort": 8,
                            "src": "/count-k-subsequences-of-a-string-with-maximum-beauty/",
                            "score": 2092,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1569. 将子数组重新排序得到同一个二叉搜索树的方案数",
                            "sort": 9,
                            "src": "/number-of-ways-to-reorder-array-to-get-same-bst/",
                            "score": 2288,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1866. 恰有 K 根木棍可以看到的排列数目",
                            "sort": 10,
                            "src": "/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/",
                            "score": 2333,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1467. 两个盒子中球的颜色数相同的概率",
                            "sort": 11,
                            "src": "/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
                            "score": 2357,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3272. 统计好整数的数目",
                            "sort": 12,
                            "src": "/find-the-count-of-good-integers/",
                            "score": 2450,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1916. 统计为蚁群构筑房间的不同顺序",
                            "sort": 13,
                            "src": "/count-ways-to-build-rooms-in-an-ant-colony/",
                            "score": 2486,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1830. 使字符串有序的最少操作次数",
                            "sort": 14,
                            "src": "/minimum-number-of-operations-to-make-string-sorted/",
                            "score": 2620,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2954. 统计感冒序列的数目",
                            "sort": 15,
                            "src": "/count-the-number-of-infection-sequences/",
                            "score": 2645,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1575. 统计所有可行路径",
                            "sort": 16,
                            "src": "/count-all-possible-routes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3251. 单调数组对的数目 II",
                            "sort": 17,
                            "src": "/find-the-count-of-monotonic-pairs-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 25. 古董键盘",
                            "sort": 18,
                            "src": "/Uh984O/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2539. 好子序列的个数",
                            "sort": 19,
                            "src": "/count-the-number-of-good-subsequences/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "634. 寻找数组的错位排列",
                            "sort": 20,
                            "src": "/find-the-derangement-of-an-array/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.3 放球问题",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1641. 统计字典序元音字符串的数目",
                            "sort": 0,
                            "src": "/count-sorted-vowel-strings/",
                            "score": 1519,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1621. 大小为 K 的不重叠线段的数目",
                            "sort": 1,
                            "src": "/number-of-sets-of-k-non-overlapping-line-segments/",
                            "score": 2198,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "920. 播放列表的数量",
                            "sort": 2,
                            "src": "/number-of-music-playlists/",
                            "score": 2400,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1735. 生成乘积数组的方案数",
                            "sort": 3,
                            "src": "/count-ways-to-make-array-with-product/",
                            "score": 2500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2338. 统计理想数组的数目",
                            "sort": 4,
                            "src": "/count-the-number-of-ideal-arrays/",
                            "score": 2615,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.4 容斥原理",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2652. 倍数求和",
                            "sort": 0,
                            "src": "/sum-multiples/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "878. 第 N 个神奇数字",
                            "sort": 1,
                            "src": "/nth-magical-number/",
                            "score": 1897,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1201. 丑数 III",
                            "sort": 2,
                            "src": "/ugly-number-iii/",
                            "score": 2039,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2929. 给小朋友们分糖果 II",
                            "sort": 3,
                            "src": "/distribute-candies-among-children-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2930. 重新排列后包含指定子字符串的字符串数目",
                            "sort": 4,
                            "src": "/number-of-strings-which-can-be-rearranged-to-contain-substring/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2513. 最小化两个数组中的最大值",
                            "sort": 5,
                            "src": "/minimize-the-maximum-of-two-arrays/",
                            "score": 2302,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3116. 单面值组合的第 K 小金额",
                            "sort": 6,
                            "src": "/kth-smallest-amount-with-single-denomination-combination/",
                            "score": 2387,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3130. 找出所有稳定的二进制数组 II",
                            "sort": 7,
                            "src": "/find-all-possible-stable-binary-arrays-ii/",
                            "score": 2825,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2927. 给小朋友们分糖果 III",
                            "sort": 8,
                            "src": "/distribute-candies-among-children-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "三、概率期望",
            "sort": 3,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1227. 飞机座位分配概率",
                            "sort": 0,
                            "src": "/airplane-seat-assignment-probability/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "688. 骑士在棋盘上的概率",
                            "sort": 1,
                            "src": "/knight-probability-in-chessboard/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "837. 新 21 点",
                            "sort": 2,
                            "src": "/new-21-game/",
                            "score": 2350,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1467. 两个盒子中球的颜色数相同的概率",
                            "sort": 3,
                            "src": "/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
                            "score": 2357,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "808. 分汤",
                            "sort": 4,
                            "src": "/soup-servings/",
                            "score": 2397,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCR 185. 统计结果概率",
                            "sort": 5,
                            "src": "/nge-tou-zi-de-dian-shu-lcof/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 11. 期望个数统计",
                            "sort": 6,
                            "src": "/qi-wang-ge-shu-tong-ji/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "九坤-04. 筹码游戏",
                            "sort": 7,
                            "src": "https://leetcode.cn/contest/ubiquant2022/problems/I3Gm2h/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1230. 抛掷硬币",
                            "sort": 8,
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
            "title": "四、博弈论",
            "sort": 4,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "292. Nim 游戏",
                            "sort": 0,
                            "src": "/nim-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1561. 你可以获得的最大硬币数目",
                            "sort": 1,
                            "src": "/maximum-number-of-coins-you-can-get/",
                            "score": 1406,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1025. 除数博弈",
                            "sort": 2,
                            "src": "/divisor-game/",
                            "score": 1435,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3227. 字符串元音游戏",
                            "sort": 3,
                            "src": "/vowels-game-in-a-string/",
                            "score": 1452,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2038. 如果相邻两个颜色均相同则删除当前颜色",
                            "sort": 4,
                            "src": "/remove-colored-pieces-if-both-neighbors-are-the-same-color/",
                            "score": 1468,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "877. 石子游戏",
                            "sort": 5,
                            "src": "/stone-game/",
                            "score": 1590,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1510. 石子游戏 IV",
                            "sort": 6,
                            "src": "/stone-game-iv/",
                            "score": 1787,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "486. 预测赢家",
                            "sort": 7,
                            "src": "/predict-the-winner/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1690. 石子游戏 VII",
                            "sort": 8,
                            "src": "/stone-game-vii/",
                            "score": 1951,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1686. 石子游戏 VI",
                            "sort": 9,
                            "src": "/stone-game-vi/",
                            "score": 2001,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1927. 求和游戏",
                            "sort": 10,
                            "src": "/sum-game/",
                            "score": 2005,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1406. 石子游戏 III",
                            "sort": 11,
                            "src": "/stone-game-iii/",
                            "score": 2027,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1140. 石子游戏 II",
                            "sort": 12,
                            "src": "/stone-game-ii/",
                            "score": 2035,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1563. 石子游戏 V",
                            "sort": 13,
                            "src": "/stone-game-v/",
                            "score": 2087,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "464. 我能赢吗",
                            "sort": 14,
                            "src": "/can-i-win/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2029. 石子游戏 IX",
                            "sort": 15,
                            "src": "/stone-game-ix/",
                            "score": 2277,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "810. 黑板异或游戏",
                            "sort": 16,
                            "src": "/chalkboard-xor-game/",
                            "score": 2341,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1872. 石子游戏 VIII",
                            "sort": 17,
                            "src": "/stone-game-viii/",
                            "score": 2440,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "913. 猫和老鼠",
                            "sort": 18,
                            "src": "/cat-and-mouse/",
                            "score": 2567,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1728. 猫和老鼠 II",
                            "sort": 19,
                            "src": "/cat-and-mouse-ii/",
                            "score": 2849,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "294. 翻转游戏 II",
                            "sort": 20,
                            "src": "/flip-game-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1908. Nim 游戏 II",
                            "sort": 21,
                            "src": "/game-of-nim/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2005. 斐波那契树的移除子树游戏",
                            "sort": 22,
                            "src": "/subtree-removal-game-with-fibonacci-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2868. 单词游戏",
                            "sort": 23,
                            "src": "/the-wording-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "五、计算几何",
            "sort": 5,
            "summary": "",
            "child": [
                {
                    "title": "§5.1 点、线",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1232. 缀点成线",
                            "sort": 0,
                            "src": "/check-if-it-is-a-straight-line/",
                            "score": 1247,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2280. 表示一个折线图的最少线段数",
                            "sort": 1,
                            "src": "/minimum-lines-to-represent-a-line-chart/",
                            "score": 1681,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1610. 可见点的最大数目",
                            "sort": 2,
                            "src": "/maximum-number-of-visible-points/",
                            "score": 2147,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 16.03. 交点",
                            "sort": 3,
                            "src": "/intersection-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 16.13. 平分正方形",
                            "sort": 4,
                            "src": "/bisect-squares-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 16.14. 最佳直线",
                            "sort": 5,
                            "src": "/best-line-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 37. 最小矩形面积",
                            "sort": 6,
                            "src": "/zui-xiao-ju-xing-mian-ji/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2152. 穿过所有点的所需最少直线数量",
                            "sort": 7,
                            "src": "/minimum-number-of-lines-to-cover-points/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.2 圆",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1401. 圆和矩形是否有重叠",
                            "sort": 0,
                            "src": "/circle-and-rectangle-overlapping/",
                            "score": 1709,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1453. 圆形靶内的最大飞镖数量",
                            "sort": 1,
                            "src": "/maximum-number-of-darts-inside-of-a-circular-dartboard/",
                            "score": 2202,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 42. 玩具套圈",
                            "sort": 2,
                            "src": "/vFjcfV/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3235. 判断矩形的两个角落是否可达",
                            "sort": 3,
                            "src": "/check-if-the-rectangle-corner-is-reachable/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1924. 安装栅栏 II",
                            "sort": 4,
                            "src": "/erect-the-fence-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.3 矩形、多边形",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "836. 矩形重叠",
                            "sort": 0,
                            "src": "/rectangle-overlap/",
                            "score": 1443,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "223. 矩形面积",
                            "sort": 1,
                            "src": "/rectangle-area/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "593. 有效的正方形",
                            "sort": 2,
                            "src": "/valid-square/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "939. 最小面积矩形",
                            "sort": 3,
                            "src": "/minimum-area-rectangle/",
                            "score": 1752,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "963. 最小面积矩形 II",
                            "sort": 4,
                            "src": "/minimum-area-rectangle-ii/",
                            "score": 1991,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "469. 凸多边形",
                            "sort": 5,
                            "src": "/convex-polygon/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§5.4 凸包",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "587. 安装栅栏",
                            "sort": 0,
                            "src": "/erect-the-fence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 15. 游乐园的迷宫",
                            "sort": 1,
                            "src": "/you-le-yuan-de-mi-gong/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "六、随机算法",
            "sort": 6,
            "summary": "",
            "child": [
                {
                    "title": "",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "看上去很慢，但实际上飞快：<br>",
                    "child": [
                        {
                            "title": "398. 随机数索引",
                            "sort": 0,
                            "src": "/random-pick-index/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "382. 链表随机节点",
                            "sort": 1,
                            "src": "/linked-list-random-node/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "384. 打乱数组",
                            "sort": 2,
                            "src": "/shuffle-an-array/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "470. 用 Rand7() 实现 Rand10()",
                            "sort": 3,
                            "src": "/implement-rand10-using-rand7/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "528. 按权重随机选择",
                            "sort": 4,
                            "src": "/random-pick-with-weight/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "710. 黑名单中的随机数",
                            "sort": 5,
                            "src": "/random-pick-with-blacklist/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "478. 在圆内随机生成点",
                            "sort": 6,
                            "src": "/generate-random-point-in-a-circle/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "497. 非重叠矩形中的随机点",
                            "sort": 7,
                            "src": "/random-point-in-non-overlapping-rectangles/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "519. 随机翻转矩阵",
                            "sort": 8,
                            "src": "/random-flip-matrix/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "380. O(1) 时间插入、删除和获取随机元素",
                            "sort": 9,
                            "src": "/insert-delete-getrandom-o1/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "381. O(1) 时间插入、删除和获取随机元素 - 允许重复",
                            "sort": 10,
                            "src": "/insert-delete-getrandom-o1-duplicates-allowed/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1515. 服务中心的最佳位置",
                            "sort": 11,
                            "src": "/best-position-for-a-service-centre/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1968. 构造元素不等于两相邻元素平均值的数组",
                            "sort": 12,
                            "src": "/array-with-elements-not-equal-to-average-of-neighbors/",
                            "score": 1499,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        },
        {
            "title": "七、杂项",
            "sort": 7,
            "summary": "",
            "child": [
                {
                    "title": "§7.1 回文数",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "9. 回文数",
                            "sort": 0,
                            "src": "/palindrome-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2396. 严格回文的数字",
                            "sort": 1,
                            "src": "/strictly-palindromic-number/",
                            "score": 1329,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2217. 找到指定长度的回文数",
                            "sort": 2,
                            "src": "/find-palindrome-with-fixed-length/",
                            "score": 1822,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "866. 回文质数",
                            "sort": 3,
                            "src": "/prime-palindrome/",
                            "score": 1938,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2967. 使数组成为等数数组的最小代价",
                            "sort": 4,
                            "src": "/minimum-cost-to-make-array-equalindromic/",
                            "score": 2116,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "906. 超级回文数",
                            "sort": 5,
                            "src": "/super-palindromes/",
                            "score": 2140,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2081. k 镜像数字的和",
                            "sort": 6,
                            "src": "/sum-of-k-mirror-numbers/",
                            "score": 2210,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3260. 找出最大的 N 位 K 回文数",
                            "sort": 7,
                            "src": "/find-the-largest-palindrome-divisible-by-k/",
                            "score": 2370,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3272. 统计好整数的数目",
                            "sort": 8,
                            "src": "/find-the-count-of-good-integers/",
                            "score": 2450,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "564. 寻找最近的回文数",
                            "sort": 9,
                            "src": "/find-the-closest-palindrome/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "479. 最大回文数乘积",
                            "sort": 10,
                            "src": "/largest-palindrome-product/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§7.2 整数拆分",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "343. 整数拆分",
                            "sort": 0,
                            "src": "/integer-break/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1808. 好因子的最大数目",
                            "sort": 1,
                            "src": "/maximize-number-of-nice-divisors/",
                            "score": 2070,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§7.3 曼哈顿距离",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1131. 绝对值表达式的最大值",
                            "sort": 0,
                            "src": "/maximum-of-absolute-value-expression/",
                            "score": 2059,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3102. 最小化曼哈顿距离",
                            "sort": 1,
                            "src": "/minimize-manhattan-distances/",
                            "score": 2216,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1330. 翻转子数组得到最大的数组值",
                            "sort": 2,
                            "src": "/reverse-subarray-to-maximize-array-value/",
                            "score": 2482,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1956. 感染 K 种病毒所需的最短时间",
                            "sort": 3,
                            "src": "/minimum-time-for-k-virus-variants-to-spread/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2613. 美数对",
                            "sort": 4,
                            "src": "/beautiful-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§7.4 其他",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2829. k-avoiding 数组的最小总和",
                            "sort": 0,
                            "src": "/determine-the-minimum-sum-of-a-k-avoiding-array/",
                            "score": 1347,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2579. 统计染色格子数",
                            "sort": 1,
                            "src": "/count-total-number-of-colored-cells/",
                            "score": 1356,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2834. 找出美丽数组的最小和",
                            "sort": 2,
                            "src": "/find-the-minimum-possible-sum-of-a-beautiful-array/",
                            "score": 1409,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1414. 和为 K 的最少斐波那契数字数目",
                            "sort": 3,
                            "src": "/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/",
                            "score": 1466,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "319. 灯泡开关",
                            "sort": 4,
                            "src": "/bulb-switcher/",
                            "score": 1500,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1780. 判断一个数字是否可以表示成三的幂的和",
                            "sort": 5,
                            "src": "/check-if-number-is-a-sum-of-powers-of-three/",
                            "score": 1506,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3091. 执行操作使数据元素之和大于等于 K",
                            "sort": 6,
                            "src": "/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/",
                            "score": 1522,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2310. 个位数字为 K 的整数之和",
                            "sort": 7,
                            "src": "/sum-of-numbers-with-units-digit-k/",
                            "score": 1559,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2844. 生成特殊数字的最少操作",
                            "sort": 8,
                            "src": "/minimum-operations-to-make-a-special-number/",
                            "score": 1588,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2541. 使数组中所有元素相等的最小操作数 II",
                            "sort": 9,
                            "src": "/minimum-operations-to-make-array-equal-ii/",
                            "score": 1620,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2195. 向数组中追加 K 个整数",
                            "sort": 10,
                            "src": "/append-k-integers-with-minimal-sum/",
                            "score": 1659,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2457. 美丽整数的最小增量",
                            "sort": 11,
                            "src": "/minimum-addition-to-make-integer-beautiful/",
                            "score": 1680,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1017. 负二进制转换",
                            "sort": 12,
                            "src": "/convert-to-base-2/",
                            "score": 1698,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1954. 收集足够苹果的最小花园周长",
                            "sort": 13,
                            "src": "/minimum-garden-perimeter-to-collect-enough-apples/",
                            "score": 1759,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1073. 负二进制数相加",
                            "sort": 14,
                            "src": "/adding-two-negabinary-numbers/",
                            "score": 1807,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1823. 找出游戏的获胜者",
                            "sort": 15,
                            "src": "/find-the-winner-of-the-circular-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "166. 分数到小数",
                            "sort": 16,
                            "src": "/fraction-to-recurring-decimal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3012. 通过操作使数组长度最小",
                            "sort": 17,
                            "src": "/minimize-length-of-array-using-operations/",
                            "score": 1833,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "483. 最小好进制",
                            "sort": 18,
                            "src": "/smallest-good-base/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "972. 相等的有理数",
                            "sort": 19,
                            "src": "/equal-rational-numbers/",
                            "score": 2121,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1862. 向下取整数对和",
                            "sort": 20,
                            "src": "/sum-of-floored-pairs/",
                            "score": 2170,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1739. 放置盒子",
                            "sort": 21,
                            "src": "/building-boxes/",
                            "score": 2198,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2443. 反转之后的数字和",
                            "sort": 22,
                            "src": "/sum-of-number-and-its-reverse/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1806. 还原排列的最少操作步数",
                            "sort": 23,
                            "src": "/minimum-number-of-operations-to-reinitialize-a-permutation/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "458. 可怜的小猪",
                            "sort": 24,
                            "src": "/poor-pigs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "60. 排列序列",
                            "sort": 25,
                            "src": "/permutation-sequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2117. 一个区间内所有数乘积的缩写",
                            "sort": 26,
                            "src": "/abbreviating-the-product-of-a-range/",
                            "score": 2477,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 02. 分式化简",
                            "sort": 27,
                            "src": "/deep-dark-fraction/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 29. 乐团站位",
                            "sort": 28,
                            "src": "/SNJvJP/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "660. 移除 9",
                            "sort": 29,
                            "src": "/remove-9/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2979. 最贵的无法购买的商品",
                            "sort": 30,
                            "src": "/most-expensive-item-that-can-not-be-bought/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2647. 把三角形染成红色",
                            "sort": 31,
                            "src": "/color-the-triangle-red/",
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
