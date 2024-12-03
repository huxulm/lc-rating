import ProblemCategory from "@components/ProblemCatetory";

export default{
    "title": "分享丨【题单】链表、二叉树与回溯（前后指针/快慢指针/DFS/BFS/直径/LCA/一般树）",
    "original_src": "https://leetcode.cn/circle/discuss/K0n2gO",
    "last_update": "2024-11-26 07:21:22",
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
                    "summary": "!<a href=\"https://pic.leetcode.cn/1723340796-CzPFMU-meme-tree-11.jpg\">链表题单 二叉树题单 链表题目 二叉树题目 回溯题单 回溯题目 灵茶山艾府 灵神</a><br>",
                    "child": []
                }
            ]
        },
        {
            "title": "一、链表",
            "sort": 1,
            "summary": "> 注：由于周赛中的链表题可以转成数组处理，难度比直接处理链表低，故不标明难度分。<br>带着问题去做下面的题目：<br>1. 在什么情况下，要用到哨兵节点（dummy node）？<br>2. 在什么情况下，循环条件要写 `while (node != null)`？什么情况下要写 `while (node.next != null)`？<br>",
            "child": [
                {
                    "title": "§1.1 遍历链表",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1290. 二进制链表转整数",
                            "sort": 0,
                            "src": "/convert-binary-number-in-a-linked-list-to-integer/",
                            "score": 1151.3534799042,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2058. 找出临界点之间的最小和最大距离",
                            "sort": 1,
                            "src": "/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",
                            "score": 1310.9129840277,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2181. 合并零之间的节点",
                            "sort": 2,
                            "src": "/merge-nodes-in-between-zeros/",
                            "score": 1333.192050397,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "725. 分隔链表",
                            "sort": 3,
                            "src": "/split-linked-list-in-parts/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "817. 链表组件",
                            "sort": 4,
                            "src": "/linked-list-components/",
                            "score": 1428.712905903,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3062. 链表游戏的获胜者",
                            "sort": 5,
                            "src": "/winner-of-the-linked-list-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3063. 链表频率",
                            "sort": 6,
                            "src": "/linked-list-frequency/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.2 删除节点",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1VP4y1Q71e/\">视频讲解【基础算法精讲 08】</a><br>",
                    "child": [
                        {
                            "title": "203. 移除链表元素",
                            "sort": 0,
                            "src": "/remove-linked-list-elements/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3217. 从链表中移除在数组中存在的节点",
                            "sort": 1,
                            "src": "/delete-nodes-from-linked-list-present-in-array/",
                            "score": 1341.7231008143,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "83. 删除排序链表中的重复元素",
                            "sort": 2,
                            "src": "/remove-duplicates-from-sorted-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "82. 删除排序链表中的重复元素 II",
                            "sort": 3,
                            "src": "/remove-duplicates-from-sorted-list-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "237. 删除链表中的节点",
                            "sort": 4,
                            "src": "/delete-node-in-a-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1669. 合并两个链表",
                            "sort": 5,
                            "src": "/merge-in-between-linked-lists/",
                            "score": 1428.1443796872,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2487. 从链表中移除节点",
                            "sort": 6,
                            "src": "/remove-nodes-from-linked-list/",
                            "score": 1454.5942017003,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1836. 从未排序的链表中移除重复元素",
                            "sort": 7,
                            "src": "/remove-duplicates-from-an-unsorted-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.3 插入节点",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2807. 在链表中插入最大公约数",
                            "sort": 0,
                            "src": "/insert-greatest-common-divisors-in-linked-list/",
                            "score": 1279.0301521682,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "147. 对链表进行插入排序",
                            "sort": 1,
                            "src": "/insertion-sort-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCR 029. 循环有序列表的插入",
                            "sort": 2,
                            "src": "/4ueAj6/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "708. 循环有序列表的插入",
                            "sort": 3,
                            "src": "/insert-into-a-sorted-circular-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2046. 给按照绝对值排序的链表排序",
                            "sort": 4,
                            "src": "/sort-linked-list-already-sorted-using-absolute-values/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.4 反转链表",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1sd4y1x7KN/\">视频讲解【基础算法精讲 06】</a><br>",
                    "child": [
                        {
                            "title": "206. 反转链表",
                            "sort": 0,
                            "src": "/reverse-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "92. 反转链表 II",
                            "sort": 1,
                            "src": "/reverse-linked-list-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "24. 两两交换链表中的节点",
                            "sort": 2,
                            "src": "/swap-nodes-in-pairs/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "25. K 个一组翻转链表",
                            "sort": 3,
                            "src": "/reverse-nodes-in-k-group/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2074. 反转偶数长度组的节点",
                            "sort": 4,
                            "src": "/reverse-nodes-in-even-length-groups/",
                            "score": 1685.3599641299,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.5 前后指针",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1VP4y1Q71e/\">视频讲解【基础算法精讲 08】</a><br>",
                    "child": [
                        {
                            "title": "19. 删除链表的倒数第 N 个结点",
                            "sort": 0,
                            "src": "/remove-nth-node-from-end-of-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "61. 旋转链表",
                            "sort": 1,
                            "src": "/rotate-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1721. 交换链表中的节点",
                            "sort": 2,
                            "src": "/swapping-nodes-in-a-linked-list/",
                            "score": 1386.9203620297,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1474. 删除链表 M 个节点之后的 N 个节点",
                            "sort": 3,
                            "src": "/delete-n-nodes-after-m-nodes-of-a-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.6 快慢指针",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1KG4y1G7cu/\">视频讲解【基础算法精讲 07】</a><br>",
                    "child": [
                        {
                            "title": "876. 链表的中间结点",
                            "sort": 0,
                            "src": "/middle-of-the-linked-list/",
                            "score": 1231.6157956848,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2095. 删除链表的中间节点",
                            "sort": 1,
                            "src": "/delete-the-middle-node-of-a-linked-list/",
                            "score": 1324.3520304377,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "234. 回文链表",
                            "sort": 2,
                            "src": "/palindrome-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2130. 链表最大孪生和",
                            "sort": 3,
                            "src": "/maximum-twin-sum-of-a-linked-list/",
                            "score": 1317.9207508583,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "143. 重排链表",
                            "sort": 4,
                            "src": "/reorder-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "141. 环形链表",
                            "sort": 5,
                            "src": "/linked-list-cycle/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "142. 环形链表 II",
                            "sort": 6,
                            "src": "/linked-list-cycle-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "457. 环形数组是否存在循环",
                            "sort": 7,
                            "src": "/circular-array-loop/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2674. 拆分循环链表",
                            "sort": 8,
                            "src": "/split-a-circular-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.7 双指针",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "328. 奇偶链表",
                            "sort": 0,
                            "src": "/odd-even-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "86. 分隔链表",
                            "sort": 1,
                            "src": "/partition-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "160. 相交链表",
                            "sort": 2,
                            "src": "/intersection-of-two-linked-lists/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.8 合并链表",
                    "sort": 7,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2. 两数相加",
                            "sort": 0,
                            "src": "/add-two-numbers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "445. 两数相加 II",
                            "sort": 1,
                            "src": "/add-two-numbers-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2816. 翻倍以链表形式表示的数字",
                            "sort": 2,
                            "src": "/double-a-number-represented-as-a-linked-list/",
                            "score": 1393.7857353048,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "21. 合并两个有序链表",
                            "sort": 3,
                            "src": "/merge-two-sorted-lists/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "369. 给单链表加一",
                            "sort": 4,
                            "src": "/plus-one-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1634. 求两个多项式链表的和",
                            "sort": 5,
                            "src": "/add-two-polynomials-represented-as-linked-lists/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§1.9 分治",
                    "sort": 8,
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
                            "title": "148. 排序链表",
                            "sort": 1,
                            "src": "/sort-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.10 综合应用",
                    "sort": 9,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1019. 链表中的下一个更大节点",
                            "sort": 0,
                            "src": "/next-greater-node-in-linked-list/",
                            "score": 1570.8347522104,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1171. 从链表中删去总和值为零的连续节点",
                            "sort": 1,
                            "src": "/remove-zero-sum-consecutive-nodes-from-linked-list/",
                            "score": 1782.3312212058,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "707. 设计链表",
                            "sort": 2,
                            "src": "/design-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "146. LRU 缓存",
                            "sort": 3,
                            "src": "/lru-cache/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "460. LFU 缓存",
                            "sort": 4,
                            "src": "/lfu-cache/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "432. 全 O(1) 的数据结构",
                            "sort": 5,
                            "src": "/all-oone-data-structure/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1206. 设计跳表",
                            "sort": 6,
                            "src": "/design-skiplist/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§1.11 其他",
                    "sort": 10,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "138. 随机链表的复制",
                            "sort": 0,
                            "src": "/copy-list-with-random-pointer/",
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
                            "title": "430. 扁平化多级双向链表",
                            "sort": 2,
                            "src": "/flatten-a-multilevel-doubly-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1265. 逆序打印不可变链表",
                            "sort": 3,
                            "src": "/print-immutable-linked-list-in-reverse/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "二、二叉树",
            "sort": 2,
            "summary": "**学习递归，从二叉树开始。**<br>晕递归的同学，请先看视频讲解<a href=\"https://www.bilibili.com/video/BV1UD4y1Y769/\">【基础算法精讲 09】</a>，欢迎点赞~<br>带着问题去做下面的题目：<br>1. 一般来说，DFS 的递归边界是空节点。在什么情况下，要额外把**叶子节点**作为递归边界？<br>2. 在什么情况下，DFS 需要有返回值？什么情况下不需要有返回值？<br>3. 在什么情况下，题目更适合用**自顶向下**的方法解决？什么情况下更适合用**自底向上**的方法解决？<br>",
            "child": [
                {
                    "title": "§2.1 遍历二叉树",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "144. 二叉树的前序遍历",
                            "sort": 0,
                            "src": "/binary-tree-preorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "94. 二叉树的中序遍历",
                            "sort": 1,
                            "src": "/binary-tree-inorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "145. 二叉树的后序遍历",
                            "sort": 2,
                            "src": "/binary-tree-postorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "872. 叶子相似的树",
                            "sort": 3,
                            "src": "/leaf-similar-trees/",
                            "score": 1287.8970301681,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 44. 开幕式焰火",
                            "sort": 4,
                            "src": "/sZ59z6/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "404. 左叶子之和",
                            "sort": 5,
                            "src": "/sum-of-left-leaves/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "671. 二叉树中第二小的节点",
                            "sort": 6,
                            "src": "/second-minimum-node-in-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1469. 寻找所有的独生节点",
                            "sort": 7,
                            "src": "/find-all-the-lonely-nodes/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1214. 查找两棵二叉搜索树之和",
                            "sort": 8,
                            "src": "/two-sum-bsts/",
                            "score": 1389.0328392117,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2764. 数组是否表示某二叉树的前序遍历",
                            "sort": 9,
                            "src": "/is-array-a-preorder-of-some-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.2 自顶向下 DFS",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "在「递」的过程中维护值。<br>> 有些题目自顶向下和自底向上都可以做。有些题目也可以用 BFS 做。<br>",
                    "child": [
                        {
                            "title": "104. 二叉树的最大深度",
                            "sort": 0,
                            "src": "/maximum-depth-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "111. 二叉树的最小深度",
                            "sort": 1,
                            "src": "/minimum-depth-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "112. 路径总和",
                            "sort": 2,
                            "src": "/path-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "129. 求根节点到叶节点数字之和",
                            "sort": 3,
                            "src": "/sum-root-to-leaf-numbers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "199. 二叉树的右视图",
                            "sort": 4,
                            "src": "/binary-tree-right-side-view/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1448. 统计二叉树中好节点的数目",
                            "sort": 5,
                            "src": "/count-good-nodes-in-binary-tree/",
                            "score": 1360.2184128413,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1457. 二叉树中的伪回文路径",
                            "sort": 6,
                            "src": "/pseudo-palindromic-paths-in-a-binary-tree/",
                            "score": 1405.0021415178,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1315. 祖父节点值为偶数的节点和",
                            "sort": 7,
                            "src": "/sum-of-nodes-with-even-valued-grandparent/",
                            "score": 1426.948379305,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "988. 从叶结点开始的最小字符串",
                            "sort": 8,
                            "src": "/smallest-string-starting-from-leaf/",
                            "score": 1429.1878389249,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1026. 节点与其祖先之间的最大差值",
                            "sort": 9,
                            "src": "/maximum-difference-between-node-and-ancestor/",
                            "score": 1446.4280778775,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1022. 从根到叶的二进制数之和",
                            "sort": 10,
                            "src": "/sum-of-root-to-leaf-binary-numbers/",
                            "score": 1462.4423844498,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "623. 在二叉树中增加一行",
                            "sort": 11,
                            "src": "/add-one-row-to-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1372. 二叉树中的最长交错路径",
                            "sort": 12,
                            "src": "/longest-zigzag-path-in-a-binary-tree/",
                            "score": 1713.2768268466,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "971. 翻转二叉树以匹配先序遍历",
                            "sort": 13,
                            "src": "/flip-binary-tree-to-match-preorder-traversal/",
                            "score": 1786.5491561897,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2689. 从 Rope 树中提取第 K 个字符",
                            "sort": 14,
                            "src": "/extract-kth-character-from-the-rope-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "298. 二叉树最长连续序列",
                            "sort": 15,
                            "src": "/binary-tree-longest-consecutive-sequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1430. 判断给定的序列是否是二叉树从根到叶的路径",
                            "sort": 16,
                            "src": "/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "545. 二叉树的边界",
                            "sort": 17,
                            "src": "/boundary-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.3 自底向上 DFS",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "在「归」的过程中计算。<br><a href=\"https://www.bilibili.com/video/BV18M411z7bb/\">如何灵活运用递归？【基础算法精讲 10】</a><br>",
                    "child": [
                        {
                            "title": "104. 二叉树的最大深度",
                            "sort": 0,
                            "src": "/maximum-depth-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "111. 二叉树的最小深度",
                            "sort": 1,
                            "src": "/minimum-depth-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "965. 单值二叉树",
                            "sort": 2,
                            "src": "/univalued-binary-tree/",
                            "score": 1177.5660617941,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "100. 相同的树",
                            "sort": 3,
                            "src": "/same-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "101. 对称二叉树",
                            "sort": 4,
                            "src": "/symmetric-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "951. 翻转等价二叉树",
                            "sort": 5,
                            "src": "/flip-equivalent-binary-trees/",
                            "score": 1477.4844514104,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1379. 找出克隆二叉树中的相同节点",
                            "sort": 6,
                            "src": "/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "110. 平衡二叉树",
                            "sort": 7,
                            "src": "/balanced-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "226. 翻转二叉树",
                            "sort": 8,
                            "src": "/invert-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "617. 合并二叉树",
                            "sort": 9,
                            "src": "/merge-two-binary-trees/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2331. 计算布尔二叉树的值",
                            "sort": 10,
                            "src": "/evaluate-boolean-binary-tree/",
                            "score": 1303.5594588137,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "508. 出现次数最多的子树元素和",
                            "sort": 11,
                            "src": "/most-frequent-subtree-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "563. 二叉树的坡度",
                            "sort": 12,
                            "src": "/binary-tree-tilt/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "606. 根据二叉树创建字符串",
                            "sort": 13,
                            "src": "/construct-string-from-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2265. 统计值等于子树平均值的节点数",
                            "sort": 14,
                            "src": "/count-nodes-equal-to-average-of-subtree/",
                            "score": 1472.7864965062,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1026. 节点与其祖先之间的最大差值",
                            "sort": 15,
                            "src": "/maximum-difference-between-node-and-ancestor/",
                            "score": 1446.4280778775,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3319. 第 K 大的完美二叉子树的大小",
                            "sort": 16,
                            "src": "/k-th-largest-perfect-subtree-size-in-binary-tree/",
                            "score": 1603.252304506,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1339. 分裂二叉树的最大乘积",
                            "sort": 17,
                            "src": "/maximum-product-of-splitted-binary-tree/",
                            "score": 1674.9985842835,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1372. 二叉树中的最长交错路径",
                            "sort": 18,
                            "src": "/longest-zigzag-path-in-a-binary-tree/",
                            "score": 1713.2768268466,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1145. 二叉树着色游戏",
                            "sort": 19,
                            "src": "/binary-tree-coloring-game/",
                            "score": 1741.4527995252,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "572. 另一棵树的子树",
                            "sort": 20,
                            "src": "/subtree-of-another-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1530. 好叶子节点对的数量",
                            "sort": 21,
                            "src": "/number-of-good-leaf-nodes-pairs/",
                            "score": 1745.6580748712,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 67. 装饰树",
                            "sort": 22,
                            "src": "/KnLfVT/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "298. 二叉树最长连续序列",
                            "sort": 23,
                            "src": "/binary-tree-longest-consecutive-sequence/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "250. 统计同值子树",
                            "sort": 24,
                            "src": "/count-univalue-subtrees/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1973. 值等于子节点值之和的节点数量",
                            "sort": 25,
                            "src": "/count-nodes-equal-to-sum-of-descendants/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "663. 均匀树划分",
                            "sort": 26,
                            "src": "/equal-tree-partition/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1120. 子树的最大平均值",
                            "sort": 27,
                            "src": "/maximum-average-subtree/",
                            "score": 1361.8801013336,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2792. 计算足够大的节点数",
                            "sort": 28,
                            "src": "/count-nodes-that-are-great-enough/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "333. 最大二叉搜索子树",
                            "sort": 29,
                            "src": "/largest-bst-subtree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "366. 寻找二叉树的叶子节点",
                            "sort": 30,
                            "src": "/find-leaves-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "156. 上下翻转二叉树",
                            "sort": 31,
                            "src": "/binary-tree-upside-down/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1612. 检查两棵二叉表达式树是否等价",
                            "sort": 32,
                            "src": "/check-if-two-expression-trees-are-equivalent/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.4 自底向上 DFS：删点",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "814. 二叉树剪枝",
                            "sort": 0,
                            "src": "/binary-tree-pruning/",
                            "score": 1380.1541980647,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1325. 删除给定值的叶子节点",
                            "sort": 1,
                            "src": "/delete-leaves-with-a-given-value/",
                            "score": 1407.1322366299,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1110. 删点成林",
                            "sort": 2,
                            "src": "/delete-nodes-and-return-forest/",
                            "score": 1511.3725353467,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.5 有递有归",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "538. 把二叉搜索树转换为累加树",
                            "sort": 0,
                            "src": "/convert-bst-to-greater-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1038. 从二叉搜索树到更大和树",
                            "sort": 1,
                            "src": "/binary-search-tree-to-greater-sum-tree/",
                            "score": 1374.6755455786,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "865. 具有所有最深节点的最小子树",
                            "sort": 2,
                            "src": "/smallest-subtree-with-all-the-deepest-nodes/",
                            "score": 1534.325005151,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1080. 根到叶路径上的不足节点",
                            "sort": 3,
                            "src": "/insufficient-nodes-in-root-to-leaf-paths/",
                            "score": 1804.5783242151,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.6 直径",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV17o4y187h1/\">视频讲解【基础算法精讲 23】</a><br>另见下文：一般树的直径。<br>",
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
                            "score": 1711.4873176824,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "549. 二叉树最长连续序列 II",
                            "sort": 4,
                            "src": "/binary-tree-longest-consecutive-sequence-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.7 回溯",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "257. 二叉树的所有路径",
                            "sort": 0,
                            "src": "/binary-tree-paths/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "113. 路径总和 II",
                            "sort": 1,
                            "src": "/path-sum-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "437. 路径总和 III",
                            "sort": 2,
                            "src": "/path-sum-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§2.8 最近公共祖先",
                    "sort": 7,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1W44y1Z7AR/\">视频讲解【基础算法精讲 12】</a><br>",
                    "child": [
                        {
                            "title": "235. 二叉搜索树的最近公共祖先",
                            "sort": 0,
                            "src": "/lowest-common-ancestor-of-a-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "236. 二叉树的最近公共祖先",
                            "sort": 1,
                            "src": "/lowest-common-ancestor-of-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1123. 最深叶节点的最近公共祖先",
                            "sort": 2,
                            "src": "/lowest-common-ancestor-of-deepest-leaves/",
                            "score": 1607.0005715974,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2096. 从二叉树一个节点到另一个节点每一步的方向",
                            "sort": 3,
                            "src": "/step-by-step-directions-from-a-binary-tree-node-to-another/",
                            "score": 1804.5283324227,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1740. 找到二叉树中的距离",
                            "sort": 4,
                            "src": "/find-distance-in-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1644. 二叉树的最近公共祖先 II",
                            "sort": 5,
                            "src": "/lowest-common-ancestor-of-a-binary-tree-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1650. 二叉树的最近公共祖先 III",
                            "sort": 6,
                            "src": "/lowest-common-ancestor-of-a-binary-tree-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1676. 二叉树的最近公共祖先 IV",
                            "sort": 7,
                            "src": "/lowest-common-ancestor-of-a-binary-tree-iv/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.9 二叉搜索树",
                    "sort": 8,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV14G411P7C1/\">视频讲解【基础算法精讲 11】</a><br>",
                    "child": [
                        {
                            "title": "98. 验证二叉搜索树",
                            "sort": 0,
                            "src": "/validate-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "230. 二叉搜索树中第 K 小的元素",
                            "sort": 1,
                            "src": "/kth-smallest-element-in-a-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "501. 二叉搜索树中的众数",
                            "sort": 2,
                            "src": "/find-mode-in-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "99. 恢复二叉搜索树",
                            "sort": 3,
                            "src": "/recover-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "700. 二叉搜索树中的搜索",
                            "sort": 4,
                            "src": "/search-in-a-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "530. 二叉搜索树的最小绝对差",
                            "sort": 5,
                            "src": "/minimum-absolute-difference-in-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "783. 二叉搜索树节点最小距离",
                            "sort": 6,
                            "src": "/minimum-distance-between-bst-nodes/",
                            "score": 1303.3201984827,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1305. 两棵二叉搜索树中的所有元素",
                            "sort": 7,
                            "src": "/all-elements-in-two-binary-search-trees/",
                            "score": 1260.1755576607,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "938. 二叉搜索树的范围和",
                            "sort": 8,
                            "src": "/range-sum-of-bst/",
                            "score": 1335.0295688697,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "897. 递增顺序搜索树",
                            "sort": 9,
                            "src": "/increasing-order-search-tree/",
                            "score": 1473.2523136772,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2476. 二叉搜索树最近节点查询",
                            "sort": 10,
                            "src": "/closest-nodes-queries-in-a-binary-search-tree/",
                            "score": 1596.9852244916,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "653. 两数之和 IV - 输入二叉搜索树",
                            "sort": 11,
                            "src": "/two-sum-iv-input-is-a-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1373. 二叉搜索子树的最大键值和",
                            "sort": 12,
                            "src": "/maximum-sum-bst-in-binary-tree/",
                            "score": 1913.6704728453,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1932. 合并多棵二叉搜索树",
                            "sort": 13,
                            "src": "/merge-bsts-to-create-single-bst/",
                            "score": 2483.9435767299,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "285. 二叉搜索树中的中序后继",
                            "sort": 14,
                            "src": "/inorder-successor-in-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "510. 二叉搜索树中的中序后继 II",
                            "sort": 15,
                            "src": "/inorder-successor-in-bst-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "270. 最接近的二叉搜索树值",
                            "sort": 16,
                            "src": "/closest-binary-search-tree-value/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "272. 最接近的二叉搜索树值 II",
                            "sort": 17,
                            "src": "/closest-binary-search-tree-value-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "255. 验证二叉搜索树的前序遍历序列",
                            "sort": 18,
                            "src": "/verify-preorder-sequence-in-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1902. 给定二叉搜索树的插入顺序求深度",
                            "sort": 19,
                            "src": "/depth-of-bst-given-insertion-order/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.10 创建二叉树",
                    "sort": 9,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "108. 将有序数组转换为二叉搜索树",
                            "sort": 0,
                            "src": "/convert-sorted-array-to-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "654. 最大二叉树",
                            "sort": 1,
                            "src": "/maximum-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "998. 最大二叉树 II",
                            "sort": 2,
                            "src": "/maximum-binary-tree-ii/",
                            "score": 1497.8880991093,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1008. 前序遍历构造二叉搜索树",
                            "sort": 3,
                            "src": "/construct-binary-search-tree-from-preorder-traversal/",
                            "score": 1562.9802666517,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1382. 将二叉搜索树变平衡",
                            "sort": 4,
                            "src": "/balance-a-binary-search-tree/",
                            "score": 1540.5750839091,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2196. 根据描述创建二叉树",
                            "sort": 5,
                            "src": "/create-binary-tree-from-descriptions/",
                            "score": 1643.5283095007,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "105. 从前序与中序遍历序列构造二叉树",
                            "sort": 6,
                            "src": "/construct-binary-tree-from-preorder-and-inorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "106. 从中序与后序遍历序列构造二叉树",
                            "sort": 7,
                            "src": "/construct-binary-tree-from-inorder-and-postorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "889. 根据前序和后序遍历构造二叉树",
                            "sort": 8,
                            "src": "/construct-binary-tree-from-preorder-and-postorder-traversal/",
                            "score": 1731.5555445321,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1028. 从先序遍历还原二叉树",
                            "sort": 9,
                            "src": "/recover-a-tree-from-preorder-traversal/",
                            "score": 1797.4917663632,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "536. 从字符串生成二叉树",
                            "sort": 10,
                            "src": "/construct-binary-tree-from-string/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1628. 设计带解析函数的表达式树",
                            "sort": 11,
                            "src": "/design-an-expression-tree-with-evaluate-function/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1597. 根据中缀表达式构造二叉表达式树",
                            "sort": 12,
                            "src": "/build-binary-expression-tree-from-infix-expression/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.11 插入/删除节点",
                    "sort": 10,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "701. 二叉搜索树中的插入操作",
                            "sort": 0,
                            "src": "/insert-into-a-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "450. 删除二叉搜索树中的节点",
                            "sort": 1,
                            "src": "/delete-node-in-a-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "669. 修剪二叉搜索树",
                            "sort": 2,
                            "src": "/trim-a-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "776. 拆分二叉搜索树",
                            "sort": 3,
                            "src": "/split-bst/",
                            "score": 1809.5579156134,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1666. 改变二叉树的根节点",
                            "sort": 4,
                            "src": "/change-the-root-of-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.12 树形 DP",
                    "sort": 11,
                    "isLeaf": true,
                    "summary": "更多树形 DP，见 <a href=\"/lc-rating/list/dynamic_programming\">动态规划题单</a> 中的「树形 DP」。<br>",
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
                            "title": "968. 监控二叉树",
                            "sort": 1,
                            "src": "/binary-tree-cameras/",
                            "score": 2124.1329592058,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 10. 二叉树任务调度",
                            "sort": 2,
                            "src": "/er-cha-shu-ren-wu-diao-du/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 34. 二叉树染色",
                            "sort": 3,
                            "src": "/er-cha-shu-ran-se-UGC/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 64. 二叉树灯饰",
                            "sort": 4,
                            "src": "/U7WvvU/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2313. 二叉树中得到结果所需的最少翻转次数",
                            "sort": 5,
                            "src": "/minimum-flips-in-binary-tree-to-get-result/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.13 BFS",
                    "sort": 12,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1hG4y1277i/\">视频讲解【基础算法精讲 13】</a><br>",
                    "child": [
                        {
                            "title": "102. 二叉树的层序遍历",
                            "sort": 0,
                            "src": "/binary-tree-level-order-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "103. 二叉树的锯齿形层序遍历",
                            "sort": 1,
                            "src": "/binary-tree-zigzag-level-order-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "107. 二叉树的层序遍历 II",
                            "sort": 2,
                            "src": "/binary-tree-level-order-traversal-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "199. 二叉树的右视图",
                            "sort": 3,
                            "src": "/binary-tree-right-side-view/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "513. 找树左下角的值",
                            "sort": 4,
                            "src": "/find-bottom-left-tree-value/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "515. 在每个树行中找最大值",
                            "sort": 5,
                            "src": "/find-largest-value-in-each-tree-row/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "637. 二叉树的层平均值",
                            "sort": 6,
                            "src": "/average-of-levels-in-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1161. 最大层内元素和",
                            "sort": 7,
                            "src": "/maximum-level-sum-of-a-binary-tree/",
                            "score": 1249.9086403595,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "993. 二叉树的堂兄弟节点",
                            "sort": 8,
                            "src": "/cousins-in-binary-tree/",
                            "score": 1287.9002757199,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2583. 二叉树中的第 K 大层和",
                            "sort": 9,
                            "src": "/kth-largest-sum-in-a-binary-tree/",
                            "score": 1374.3527967199,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1302. 层数最深叶子节点的和",
                            "sort": 10,
                            "src": "/deepest-leaves-sum/",
                            "score": 1387.9431104106,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2415. 反转二叉树的奇数层",
                            "sort": 11,
                            "src": "/reverse-odd-levels-of-binary-tree/",
                            "score": 1431.0523656241,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1609. 奇偶树",
                            "sort": 12,
                            "src": "/even-odd-tree/",
                            "score": 1438.223135905,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "623. 在二叉树中增加一行",
                            "sort": 13,
                            "src": "/add-one-row-to-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2471. 逐层排序二叉树所需的最少操作数目",
                            "sort": 14,
                            "src": "/minimum-number-of-operations-to-sort-a-binary-tree-by-level/",
                            "score": 1635.1520858279,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "863. 二叉树中所有距离为 K 的结点",
                            "sort": 15,
                            "src": "/all-nodes-distance-k-in-binary-tree/",
                            "score": 1663.1853149056,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2641. 二叉树的堂兄弟节点 II",
                            "sort": 16,
                            "src": "/cousins-in-binary-tree-ii/",
                            "score": 1676.5007365375,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "919. 完全二叉树插入器",
                            "sort": 17,
                            "src": "/complete-binary-tree-inserter/",
                            "score": 1690.9043557462,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "331. 验证二叉树的前序序列化",
                            "sort": 18,
                            "src": "/verify-preorder-serialization-of-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "958. 二叉树的完全性检验",
                            "sort": 19,
                            "src": "/check-completeness-of-a-binary-tree/",
                            "score": 1702.8035923458,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "662. 二叉树最大宽度",
                            "sort": 20,
                            "src": "/maximum-width-of-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3157. 找到具有最小和的树的层数",
                            "sort": 21,
                            "src": "/find-the-level-of-tree-with-minimum-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1602. 找到二叉树中最近的右侧节点",
                            "sort": 22,
                            "src": "/find-nearest-right-node-in-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "742. 二叉树最近的叶节点",
                            "sort": 23,
                            "src": "/closest-leaf-in-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1660. 纠正二叉树",
                            "sort": 24,
                            "src": "/correct-a-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.14 链表+二叉树",
                    "sort": 13,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "114. 二叉树展开为链表",
                            "sort": 0,
                            "src": "/flatten-binary-tree-to-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1367. 二叉树中的链表",
                            "sort": 1,
                            "src": "/linked-list-in-binary-tree/",
                            "score": 1649.9728054796,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "109. 有序链表转换二叉搜索树",
                            "sort": 2,
                            "src": "/convert-sorted-list-to-binary-search-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "116. 填充每个节点的下一个右侧节点指针",
                            "sort": 3,
                            "src": "/populating-next-right-pointers-in-each-node/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "117. 填充每个节点的下一个右侧节点指针 II",
                            "sort": 4,
                            "src": "/populating-next-right-pointers-in-each-node-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "426. 将二叉搜索树转化为排序的双向链表",
                            "sort": 5,
                            "src": "/convert-binary-search-tree-to-sorted-doubly-linked-list/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.15 N 叉树",
                    "sort": 14,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "589. N 叉树的前序遍历",
                            "sort": 0,
                            "src": "/n-ary-tree-preorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "590. N 叉树的后序遍历",
                            "sort": 1,
                            "src": "/n-ary-tree-postorder-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "559. N 叉树的最大深度",
                            "sort": 2,
                            "src": "/maximum-depth-of-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "429. N 叉树的层序遍历",
                            "sort": 3,
                            "src": "/n-ary-tree-level-order-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "427. 建立四叉树",
                            "sort": 4,
                            "src": "/construct-quad-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "558. 四叉树交集",
                            "sort": 5,
                            "src": "/logical-or-of-two-binary-grids-represented-as-quad-trees/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "428. 序列化和反序列化 N 叉树",
                            "sort": 6,
                            "src": "/serialize-and-deserialize-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1490. 克隆 N 叉树",
                            "sort": 7,
                            "src": "/clone-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1506. 找到 N 叉树的根节点",
                            "sort": 8,
                            "src": "/find-root-of-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1522. N 叉树的直径",
                            "sort": 9,
                            "src": "/diameter-of-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1516. 移动 N 叉树的子树",
                            "sort": 10,
                            "src": "/move-sub-tree-of-n-ary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§2.16 其他",
                    "sort": 15,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "297. 二叉树的序列化与反序列化",
                            "sort": 0,
                            "src": "/serialize-and-deserialize-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "449. 序列化和反序列化二叉搜索树",
                            "sort": 1,
                            "src": "/serialize-and-deserialize-bst/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "652. 寻找重复的子树",
                            "sort": 2,
                            "src": "/find-duplicate-subtrees/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "173. 二叉搜索树迭代器",
                            "sort": 3,
                            "src": "/binary-search-tree-iterator/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1261. 在受污染的二叉树中查找元素",
                            "sort": 4,
                            "src": "/find-elements-in-a-contaminated-binary-tree/",
                            "score": 1439.5656079032,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1104. 二叉树寻路",
                            "sort": 5,
                            "src": "/path-in-zigzag-labelled-binary-tree/",
                            "score": 1544.8391626032,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "987. 二叉树的垂序遍历",
                            "sort": 6,
                            "src": "/vertical-order-traversal-of-a-binary-tree/",
                            "score": 1675.9610355975,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "655. 输出二叉树",
                            "sort": 7,
                            "src": "/print-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "979. 在二叉树中分配硬币",
                            "sort": 8,
                            "src": "/distribute-coins-in-binary-tree/",
                            "score": 1709.1461451873,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "222. 完全二叉树的节点个数",
                            "sort": 9,
                            "src": "/count-complete-tree-nodes/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2049. 统计最高分的节点数目",
                            "sort": 10,
                            "src": "/count-nodes-with-the-highest-score/",
                            "score": 1911.7063530593,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2673. 使二叉树所有路径值相等的最小代价",
                            "sort": 11,
                            "src": "/make-costs-of-paths-equal-in-a-binary-tree/",
                            "score": 1917.1049672432,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2509. 查询树中环的长度",
                            "sort": 12,
                            "src": "/cycle-length-queries-in-a-tree/",
                            "score": 1948.489500779,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2458. 移除子树后的二叉树高度",
                            "sort": 13,
                            "src": "/height-of-binary-tree-after-subtree-removal-queries/",
                            "score": 2298.6242048519,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 26. 导航装置",
                            "sort": 14,
                            "src": "/hSRGyL/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 52. 二叉搜索树染色",
                            "sort": 15,
                            "src": "/QO5KpG/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 60. 力扣泡泡龙",
                            "sort": 16,
                            "src": "/WInSav/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "314. 二叉树的垂直遍历",
                            "sort": 17,
                            "src": "/binary-tree-vertical-order-traversal/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "666. 路径总和 IV",
                            "sort": 18,
                            "src": "/path-sum-iv/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1586. 二叉搜索树迭代器 II",
                            "sort": 19,
                            "src": "/binary-search-tree-iterator-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2773. 特殊二叉树的高度",
                            "sort": 20,
                            "src": "/height-of-special-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1485. 克隆含随机指针的二叉树",
                            "sort": 21,
                            "src": "/clone-binary-tree-with-random-pointer/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2445. 值为 1 的节点数",
                            "sort": 22,
                            "src": "/number-of-nodes-with-value-one/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "431. 将 N 叉树编码为二叉树",
                            "sort": 23,
                            "src": "/encode-n-ary-tree-to-binary-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "2005. 斐波那契树的移除子树游戏",
                            "sort": 24,
                            "src": "/subtree-removal-game-with-fibonacci-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                }
            ]
        },
        {
            "title": "三、一般树",
            "sort": 3,
            "summary": "",
            "child": [
                {
                    "title": "§3.1 遍历",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2368. 受限条件下可到达节点的数目",
                            "sort": 0,
                            "src": "/reachable-nodes-with-restrictions/",
                            "score": 1476.9118898539,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1466. 重新规划路线",
                            "sort": 1,
                            "src": "/reorder-routes-to-make-all-paths-lead-to-the-city-zero/",
                            "score": 1633.6202302555,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "582. 杀掉进程",
                            "sort": 2,
                            "src": "/kill-process/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.2 自顶向下 DFS",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "1376. 通知所有员工所需的时间",
                            "sort": 0,
                            "src": "/time-needed-to-inform-all-employees/",
                            "score": 1561.0553908973,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1443. 收集树上所有苹果的最少时间",
                            "sort": 1,
                            "src": "/minimum-time-to-collect-all-apples-in-a-tree/",
                            "score": 1682.8882177724,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1377. T 秒后青蛙的位置",
                            "sort": 2,
                            "src": "/frog-position-after-t-seconds/",
                            "score": 1823.8779711373,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3067. 在带权树网络中统计可连接服务器对数目",
                            "sort": 3,
                            "src": "/count-pairs-of-connectable-servers-in-a-weighted-tree-network/",
                            "score": 1908.9411092109,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2467. 树上最大得分和路径",
                            "sort": 4,
                            "src": "/most-profitable-path-in-a-tree/",
                            "score": 2053.354609292,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1766. 互质树",
                            "sort": 5,
                            "src": "/tree-of-coprimes/",
                            "score": 2231.8099102949,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2791. 树中可以形成回文的路径数",
                            "sort": 6,
                            "src": "/count-paths-that-can-form-a-palindrome-in-a-tree/",
                            "score": 2677.1682592316,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.3 自底向上 DFS",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "3249. 统计好节点的数目",
                            "sort": 0,
                            "src": "/count-the-number-of-good-nodes/",
                            "score": 1565.8040286471,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1519. 子树中标签相同的节点数",
                            "sort": 1,
                            "src": "/number-of-nodes-in-the-sub-tree-with-the-same-label/",
                            "score": 1808.787108831,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2872. 可以被 K 整除连通块的最大数目",
                            "sort": 2,
                            "src": "/maximum-number-of-k-divisible-components/",
                            "score": 1967.5589835406,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2477. 到达首都的最少油耗",
                            "sort": 3,
                            "src": "/minimum-fuel-cost-to-report-to-the-capital/",
                            "score": 2011.9703133514,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2973. 树中每个节点放置的金币数目",
                            "sort": 4,
                            "src": "/find-number-of-coins-to-place-in-tree-nodes/",
                            "score": 2276.9256951751,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2440. 创建价值相同的连通块",
                            "sort": 5,
                            "src": "/create-components-with-same-value/",
                            "score": 2460.3152437576,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1273. 删除树节点",
                            "sort": 6,
                            "src": "/delete-tree-nodes/",
                            "score": 1732.7813534239,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3004. 相同颜色的最大子树",
                            "sort": 7,
                            "src": "/maximum-subtree-of-the-same-color/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.4 有递有归",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "3331. 修改后子树的大小",
                            "sort": 0,
                            "src": "/find-subtree-sizes-after-changes/",
                            "score": 2045.9921455749,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.5 直径",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV17o4y187h1/\">视频讲解【基础算法精讲 23】</a><br>",
                    "child": [
                        {
                            "title": "2246. 相邻字符不同的最长路径",
                            "sort": 0,
                            "src": "/longest-path-with-different-adjacent-characters/",
                            "score": 2126.3922279277,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3203. 合并两棵树后的最小直径",
                            "sort": 1,
                            "src": "/find-minimum-diameter-after-merging-two-trees/",
                            "score": 2266.0997671519,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1617. 统计子树中城市之间最大距离",
                            "sort": 2,
                            "src": "/count-subtrees-with-max-distance-between-cities/",
                            "score": 2308.6545905335,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2538. 最大价值和与最小价值和的差值",
                            "sort": 3,
                            "src": "/difference-between-maximum-and-minimum-price-sum/",
                            "score": 2397.9722495587,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1245. 树的直径",
                            "sort": 4,
                            "src": "/tree-diameter/",
                            "score": 1792.076794537,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "3313. 查找树中最后标记的节点",
                            "sort": 5,
                            "src": "/find-the-last-marked-nodes-in-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.6 DFS 时间戳",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "2322. 从树中删除边的最小分数",
                            "sort": 0,
                            "src": "/minimum-score-after-removals-on-a-tree/",
                            "score": 2391.657270733,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "3327. 判断 DFS 字符串是否是回文串",
                            "sort": 1,
                            "src": "/check-if-dfs-strings-are-palindromes/",
                            "score": 2454.1900261902,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.7 拓扑排序",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "310. 最小高度树",
                            "sort": 0,
                            "src": "/minimum-height-trees/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2603. 收集树中金币",
                            "sort": 1,
                            "src": "/collect-coins-in-a-tree/",
                            "score": 2711.8717381409,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§3.8 最近公共祖先（LCA）",
                    "sort": 7,
                    "isLeaf": true,
                    "summary": "<a href=\"https://leetcode.cn/problems/kth-ancestor-of-a-tree-node/solution/mo-ban-jiang-jie-shu-shang-bei-zeng-suan-v3rw/\">讲解</a><br>",
                    "child": [
                        {
                            "title": "1483. 树节点的第 K 个祖先",
                            "sort": 0,
                            "src": "/kth-ancestor-of-a-tree-node/",
                            "score": 2115.0911494487,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2846. 边权重均等查询",
                            "sort": 1,
                            "src": "/minimum-edge-weight-equilibrium-queries-in-a-tree/",
                            "score": 2507.9960044659,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2277. 树中最接近路径的节点",
                            "sort": 2,
                            "src": "/closest-node-to-path-in-tree/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§3.9 其他",
                    "sort": 8,
                    "isLeaf": true,
                    "summary": "另见 <a href=\"/lc-rating/list/dynamic_programming\">动态规划题单</a> 中的「树形 DP」。<br>",
                    "child": [
                        {
                            "title": "2003. 每棵子树内缺失的最小基因值",
                            "sort": 0,
                            "src": "/smallest-missing-genetic-value-in-each-subtree/",
                            "score": 2415.0089731911,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2867. 统计树中的合法路径数目",
                            "sort": 1,
                            "src": "/count-valid-paths-in-a-tree/",
                            "score": 2428.3242593838,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2421. 好路径的数目",
                            "sort": 2,
                            "src": "/number-of-good-paths/",
                            "score": 2444.6660756903,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1719. 重构一棵树的方案数",
                            "sort": 3,
                            "src": "/number-of-ways-to-reconstruct-a-tree/",
                            "score": 3018.4940165727,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2479. 两个不重叠子树的最大异或值",
                            "sort": 4,
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
            "title": "四、回溯",
            "sort": 4,
            "summary": "本质是搜索树上的 DFS。<br>推荐先完成 **§2.7** 节。先理解二叉树上的回溯，再来学习一般情况下的回溯。<br>",
            "child": [
                {
                    "title": "§4.1 入门回溯",
                    "sort": 0,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1mG4y1A7Gu/\">视频讲解【基础算法精讲 14】</a><br>",
                    "child": [
                        {
                            "title": "17. 电话号码的字母组合",
                            "sort": 0,
                            "src": "/letter-combinations-of-a-phone-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.2 子集型回溯",
                    "sort": 1,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1mG4y1A7Gu/\">视频讲解【基础算法精讲 14】</a><br>有「**选或不选**」和「**枚举选哪个**」两种写法。<br>也可以用**二进制枚举**做。<br>**思维扩展**：<br>",
                    "child": [
                        {
                            "title": "78. 子集",
                            "sort": 0,
                            "src": "/subsets/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "784. 字母大小写全排列",
                            "sort": 1,
                            "src": "/letter-case-permutation/",
                            "score": 1341.5076441361,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1286. 字母组合迭代器",
                            "sort": 2,
                            "src": "/iterator-for-combination/",
                            "score": 1591.4725328821,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "494. 目标和",
                            "sort": 3,
                            "src": "/target-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 51. 烹饪料理",
                            "sort": 4,
                            "src": "/UEcfPD/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2397. 被列覆盖的最多行数",
                            "sort": 5,
                            "src": "/maximum-rows-covered-by-columns/",
                            "score": 1718.8256321624,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1239. 串联字符串的最大长度",
                            "sort": 6,
                            "src": "/maximum-length-of-a-concatenated-string-with-unique-characters/",
                            "score": 1719.945199874,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2212. 射箭比赛中的最大得分",
                            "sort": 7,
                            "src": "/maximum-points-in-an-archery-competition/",
                            "score": 1868.9864493463,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1255. 得分最高的单词集合",
                            "sort": 8,
                            "src": "/maximum-score-words-formed-by-letters/",
                            "score": 1881.6810367589,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2151. 基于陈述统计最多好人数",
                            "sort": 9,
                            "src": "/maximum-good-people-based-on-statements/",
                            "score": 1979.9454101467,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2959. 关闭分部的可行集合数目",
                            "sort": 10,
                            "src": "/number-of-possible-sets-of-closing-branches/",
                            "score": 2077.4738459704,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1601. 最多可达成的换楼请求数目",
                            "sort": 11,
                            "src": "/maximum-number-of-achievable-transfer-requests/",
                            "score": 2118.7923652824,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1617. 统计子树中城市之间最大距离",
                            "sort": 12,
                            "src": "/count-subtrees-with-max-distance-between-cities/",
                            "score": 2308.6545905335,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "320. 列举单词的全部缩写",
                            "sort": 13,
                            "src": "/generalized-abbreviation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "254. 因子的组合",
                            "sort": 14,
                            "src": "/factor-combinations/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "39. 组合总和",
                            "sort": 15,
                            "src": "/combination-sum/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.3 划分型回溯",
                    "sort": 2,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1mG4y1A7Gu/\">视频讲解【基础算法精讲 14】</a><br>把分割线（逗号）看成是可以「选或不选」的东西，本质是子集型回溯。<br>",
                    "child": [
                        {
                            "title": "131. 分割回文串",
                            "sort": 0,
                            "src": "/palindrome-partitioning/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2698. 求一个整数的惩罚数",
                            "sort": 1,
                            "src": "/find-the-punishment-number-of-an-integer/",
                            "score": 1678.6245760413,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1593. 拆分字符串使唯一子字符串的数目最大",
                            "sort": 2,
                            "src": "/split-a-string-into-the-max-number-of-unique-substrings/",
                            "score": 1739.5831401172,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1849. 将字符串拆分为递减的连续值",
                            "sort": 3,
                            "src": "/splitting-a-string-into-descending-consecutive-values/",
                            "score": 1746.8757919578,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "306. 累加数",
                            "sort": 4,
                            "src": "/additive-number/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "842. 将数组拆分成斐波那契序列",
                            "sort": 5,
                            "src": "/split-array-into-fibonacci-sequence/",
                            "score": 1779.9495819318,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "93. 复原 IP 地址",
                            "sort": 6,
                            "src": "/restore-ip-addresses/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "816. 模糊坐标",
                            "sort": 7,
                            "src": "/ambiguous-coordinates/",
                            "score": 1707.8992927609,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "140. 单词拆分 II",
                            "sort": 8,
                            "src": "/word-break-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "291. 单词规律 II",
                            "sort": 9,
                            "src": "/word-pattern-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§4.4 组合型回溯",
                    "sort": 3,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1xG4y1F7nC/\">视频讲解【基础算法精讲 15】</a><br>有个数上的约束。也算作子集型回溯。<br>",
                    "child": [
                        {
                            "title": "77. 组合",
                            "sort": 0,
                            "src": "/combinations/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "216. 组合总和 III",
                            "sort": 1,
                            "src": "/combination-sum-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "22. 括号生成",
                            "sort": 2,
                            "src": "/generate-parentheses/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "301. 删除无效的括号",
                            "sort": 3,
                            "src": "/remove-invalid-parentheses/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                },
                {
                    "title": "§4.5 排列型回溯",
                    "sort": 4,
                    "isLeaf": true,
                    "summary": "<a href=\"https://www.bilibili.com/video/BV1mY411D7f6/\">视频讲解【基础算法精讲 16】</a><br>部分题目也可以用状压 DP 做。<br>",
                    "child": [
                        {
                            "title": "46. 全排列",
                            "sort": 0,
                            "src": "/permutations/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "357. 统计各位数字都不同的数字个数",
                            "sort": 1,
                            "src": "/count-numbers-with-unique-digits/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "51. N 皇后",
                            "sort": 2,
                            "src": "/n-queens/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "52. N 皇后 II",
                            "sort": 3,
                            "src": "/n-queens-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2850. 将石头分散到网格图的最少移动次数",
                            "sort": 4,
                            "src": "/minimum-moves-to-spread-stones-over-grid/",
                            "score": 2001.4515854273,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1718. 构建字典序最大的可行序列",
                            "sort": 5,
                            "src": "/construct-the-lexicographically-largest-valid-sequence/",
                            "score": 2080.0425875741,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1307. 口算难题",
                            "sort": 6,
                            "src": "/verbal-arithmetic-puzzle/",
                            "score": 2250.0454791316,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2014. 重复 K 次的最长子序列",
                            "sort": 7,
                            "src": "/longest-subsequence-repeated-k-times/",
                            "score": 2558.3297484354,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "267. 回文排列 II",
                            "sort": 8,
                            "src": "/palindrome-permutation-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§4.6 爆搜+剪枝",
                    "sort": 5,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "3211. 生成不含相邻零的二进制字符串",
                            "sort": 0,
                            "src": "/generate-binary-strings-without-adjacent-zeros/",
                            "score": 1352.5455214631,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "967. 连续差相同的数字",
                            "sort": 1,
                            "src": "/numbers-with-same-consecutive-differences/",
                            "score": 1432.9593207076,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1415. 长度为 n 的开心字符串中字典序第 k 小的字符串",
                            "sort": 2,
                            "src": "/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/",
                            "score": 1575.6324598387,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1219. 黄金矿工",
                            "sort": 3,
                            "src": "/path-with-maximum-gold/",
                            "score": 1663.2612318917,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "79. 单词搜索",
                            "sort": 4,
                            "src": "/word-search/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "980. 不同路径 III",
                            "sort": 5,
                            "src": "/unique-paths-iii/",
                            "score": 1830.3165569278,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1255. 得分最高的单词集合",
                            "sort": 6,
                            "src": "/maximum-score-words-formed-by-letters/",
                            "score": 1881.6810367589,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "473. 火柴拼正方形",
                            "sort": 7,
                            "src": "/matchsticks-to-square/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "212. 单词搜索 II",
                            "sort": 8,
                            "src": "/word-search-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "37. 解数独",
                            "sort": 9,
                            "src": "/sudoku-solver/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "638. 大礼包",
                            "sort": 10,
                            "src": "/shopping-offers/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1240. 铺瓷砖",
                            "sort": 11,
                            "src": "/tiling-a-rectangle-with-the-fewest-squares/",
                            "score": 2241.5199974312,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "679. 24 点游戏",
                            "sort": 12,
                            "src": "/24-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "282. 给表达式添加运算符",
                            "sort": 13,
                            "src": "/expression-add-operators/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "126. 单词接龙 II",
                            "sort": 14,
                            "src": "/word-ladder-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "691. 贴纸拼词",
                            "sort": 15,
                            "src": "/stickers-to-spell-word/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2056. 棋盘上有效移动组合的数目",
                            "sort": 16,
                            "src": "/number-of-valid-move-combinations-on-chessboard/",
                            "score": 2610.9906730644,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2386. 找出数组的第 K 大和",
                            "sort": 17,
                            "src": "/find-the-k-sum-of-an-array/",
                            "score": 2647.8258771458,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "488. 祖玛游戏",
                            "sort": 18,
                            "src": "/zuma-game/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "LCP 58. 积木拼接",
                            "sort": 19,
                            "src": "/De4qBB/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "面试题 17.25. 单词矩阵",
                            "sort": 20,
                            "src": "/word-rectangle-lcci/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "2664. 巡逻的骑士",
                            "sort": 21,
                            "src": "/the-knights-tour/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "247. 中心对称数 II",
                            "sort": 22,
                            "src": "/strobogrammatic-number-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "248. 中心对称数 III",
                            "sort": 23,
                            "src": "/strobogrammatic-number-iii/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "411. 最短独占单词缩写",
                            "sort": 24,
                            "src": "/minimum-unique-word-abbreviation/",
                            "score": null,
                            "solution": null,
                            "isPremium": true
                        },
                        {
                            "title": "1088. 易混淆数 II",
                            "sort": 25,
                            "src": "/confusing-number-ii/",
                            "score": 2076.8975497986,
                            "solution": null,
                            "isPremium": true
                        }
                    ]
                },
                {
                    "title": "§4.7 有重复元素的回溯",
                    "sort": 6,
                    "isLeaf": true,
                    "summary": "",
                    "child": [
                        {
                            "title": "90. 子集 II",
                            "sort": 0,
                            "src": "/subsets-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "40. 组合总和 II",
                            "sort": 1,
                            "src": "/combination-sum-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "491. 非递减子序列",
                            "sort": 2,
                            "src": "/non-decreasing-subsequences/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "47. 全排列 II",
                            "sort": 3,
                            "src": "/permutations-ii/",
                            "score": null,
                            "solution": null,
                            "isPremium": false
                        },
                        {
                            "title": "1079. 活字印刷",
                            "sort": 4,
                            "src": "/letter-tile-possibilities/",
                            "score": 1740.5014205942,
                            "solution": null,
                            "isPremium": false
                        }
                    ]
                }
            ]
        }
    ]
} as ProblemCategory;