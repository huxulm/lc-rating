import { useEffect, useMemo, useState } from "react";
import List from "./components/List";
import "./list.scss";
import { Container, Row } from "react-bootstrap";

const tabs = ['😀滑动窗口', '😆二分算法', , "😊单调栈", "😉网格图", '😚位运算', "😜图论算法"]
const contents = [
    `<div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>右边数字为难度分。</p>
    <h3 id="定长滑动窗口"><a class="header-anchor" href="#定长滑动窗口" target="_blank"></a> 定长滑动窗口</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/" target="_blank">1456. 定长子串中元音的最大数目</a> 1263</li>
    <li><a href="https://leetcode.cn/problems/find-the-k-beauty-of-a-number/" target="_blank">2269. 找到一个数字的 K 美丽值</a> 1280</li>
    <li><a href="https://leetcode.cn/problems/minimum-difference-between-highest-and-lowest-of-k-scores/" target="_blank">1984. 学生分数的最小差值</a> 1306</li>
    <li><a href="https://leetcode.cn/problems/maximum-average-subarray-i/" target="_blank">643. 子数组最大平均数 I</a></li>
    <li><a href="https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/" target="_blank">1343. 大小为 K 且平均值大于等于阈值的子数组数目</a> 1317</li>
    <li><a href="https://leetcode.cn/problems/k-radius-subarray-averages/" target="_blank">2090. 半径为 k 的子数组平均值</a> 1358</li>
    <li><a href="https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/" target="_blank">2379. 得到 K 个黑块的最少涂色次数</a> 1360</li>
    <li><a href="https://leetcode.cn/problems/grumpy-bookstore-owner/" target="_blank">1052. 爱生气的书店老板</a> 1418</li>
    <li><a href="https://leetcode.cn/problems/maximum-sum-of-almost-unique-subarray/" target="_blank">2841. 几乎唯一子数组的最大和</a> 1546</li>
    <li><a href="https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k/" target="_blank">2461. 长度为 K 子数组中的最大和</a> 1553</li>
    <li><a href="https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/" target="_blank">1423. 可获得的最大点数</a> 1574</li>
    <li><a href="https://leetcode.cn/problems/minimum-swaps-to-group-all-1s-together-ii/" target="_blank">2134. 最少交换次数来组合所有的 1 II</a> 1748</li>
    <li><a href="https://leetcode.cn/problems/sliding-subarray-beauty/" target="_blank">2653. 滑动子数组的美丽值</a> 1786</li>
    <li><a href="https://leetcode.cn/problems/permutation-in-string/" target="_blank">567. 字符串的排列</a></li>
    <li><a href="https://leetcode.cn/problems/find-all-anagrams-in-a-string/" target="_blank">438. 找到字符串中所有字母异位词</a></li>
    <li><a href="https://leetcode.cn/problems/find-substring-with-given-hash-value/" target="_blank">2156. 查找给定哈希值的子串</a> 2063</li>
    <li><a href="https://leetcode.cn/problems/count-complete-substrings/" target="_blank">2953. 统计完全子字符串</a> 2449</li>
    <li><a href="https://leetcode.cn/problems/moving-average-from-data-stream/" target="_blank">346. 数据流中的移动平均值</a>（会员题）</li>
    <li><a href="https://leetcode.cn/problems/find-k-length-substrings-with-no-repeated-characters/" target="_blank">1100. 长度为 K 的无重复字符子串</a>（会员题）</li>
    <li><a href="https://leetcode.cn/problems/distinct-numbers-in-each-subarray/" target="_blank">1852. 每个子数组的数字种类数</a>（会员题）</li>
    <li><a href="https://leetcode.cn/problems/number-of-equal-count-substrings/" target="_blank">2067. 等计数子串的数量</a>（会员题）</li>
    <li><a href="https://leetcode.cn/problems/number-of-unique-flavors-after-sharing-k-candies/" target="_blank">2107. 分享 K 个糖果后独特口味的数量</a>（会员题）</li>
    </ul>
    <h3 id="不定长滑动窗口（求最长/最大）"><a class="header-anchor" href="#不定长滑动窗口（求最长/最大）" target="_blank"></a> 不定长滑动窗口（求最长/最大）</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/" target="_blank">3. 无重复字符的最长子串</a></li>
    <li><a href="https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/" target="_blank">1493. 删掉一个元素以后全为 1 的最长子数组</a> 1423</li>
    <li><a href="https://leetcode.cn/problems/find-the-longest-semi-repetitive-substring/" target="_blank">2730. 找到最长的半重复子字符串</a> 1502</li>
    <li><a href="https://leetcode.cn/problems/fruit-into-baskets/" target="_blank">904. 水果成篮</a> 1516</li>
    <li><a href="https://leetcode.cn/problems/maximum-erasure-value/" target="_blank">1695. 删除子数组的最大得分</a> 1529</li>
    <li><a href="https://leetcode.cn/problems/length-of-longest-subarray-with-at-most-k-frequency/" target="_blank">2958. 最多 K 个重复元素的最长子数组</a> 1535</li>
    <li><a href="https://leetcode.cn/problems/maximize-the-confusion-of-an-exam/" target="_blank">2024. 考试的最大困扰度</a> 1643</li>
    <li><a href="https://leetcode.cn/problems/max-consecutive-ones-iii/" target="_blank">1004. 最大连续1的个数 III</a> 1656</li>
    <li><a href="https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" target="_blank">1438. 绝对差不超过限制的最长连续子数组</a> 1672</li>
    <li><a href="https://leetcode.cn/problems/longest-nice-subarray/" target="_blank">2401. 最长优雅子数组</a> 1750</li>
    <li><a href="https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/" target="_blank">1658. 将 x 减到 0 的最小操作数</a> 1817</li>
    <li><a href="https://leetcode.cn/problems/frequency-of-the-most-frequent-element/" target="_blank">1838. 最高频元素的频数</a> 1876</li>
    <li><a href="https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right/" target="_blank">2516. 每种字符至少取 K 个</a> 1948</li>
    <li><a href="https://leetcode.cn/problems/find-the-longest-equal-subarray/" target="_blank">2831. 找出最长等值子数组</a> 1976</li>
    <li><a href="https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/" target="_blank">2106. 摘水果</a> 2062</li>
    <li><a href="https://leetcode.cn/problems/maximum-number-of-visible-points/" target="_blank">1610. 可见点的最大数目</a> 2147</li>
    <li><a href="https://leetcode.cn/problems/length-of-the-longest-valid-substring/" target="_blank">2781. 最长合法子字符串的长度</a> 2204</li>
    <li><a href="https://leetcode.cn/problems/apply-operations-to-maximize-frequency-score/" target="_blank">2968. 执行操作使频率分数最大</a> 2444</li>
    <li><a href="https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/" target="_blank">395. 至少有 K 个重复字符的最长子串</a></li>
    <li><a href="https://leetcode.cn/problems/longest-nice-substring/" target="_blank">1763. 最长的美好子字符串</a></li>
    <li><a href="https://leetcode.cn/problems/longest-substring-with-at-most-two-distinct-characters/" target="_blank">159. 至多包含两个不同字符的最长子串</a>（会员题）</li>
    <li><a href="https://leetcode.cn/problems/longest-substring-with-at-most-k-distinct-characters/" target="_blank">340. 至多包含 K 个不同字符的最长子串</a>（会员题）</li>
    </ul>
    <h3 id="不定长滑动窗口（求最短/最小）"><a class="header-anchor" href="#不定长滑动窗口（求最短/最小）" target="_blank"></a> 不定长滑动窗口（求最短/最小）</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/minimum-size-subarray-sum/" target="_blank">209. 长度最小的子数组</a></li>
    <li><a href="https://leetcode.cn/problems/replace-the-substring-for-balanced-string/" target="_blank">1234. 替换子串得到平衡字符串</a> 1878</li>
    <li><a href="https://leetcode.cn/problems/shortest-subarray-to-be-removed-to-make-array-sorted/" target="_blank">1574. 删除最短的子数组使剩余数组有序</a> 1932</li>
    <li><a href="https://leetcode.cn/problems/minimum-window-substring/" target="_blank">76. 最小覆盖子串</a></li>
    <li><a href="https://leetcode.cn/problems/shortest-supersequence-lcci/" target="_blank">面试题 17.18. 最短超串</a></li>
    </ul>
    <h3 id="不定长滑动窗口（求子数组个数）"><a class="header-anchor" href="#不定长滑动窗口（求子数组个数）" target="_blank"></a> 不定长滑动窗口（求子数组个数）</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/count-complete-subarrays-in-an-array/" target="_blank">2799. 统计完全子数组的数目</a> 1398</li>
    <li><a href="https://leetcode.cn/problems/subarray-product-less-than-k/" target="_blank">713. 乘积小于 K 的子数组</a></li>
    <li><a href="https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/" target="_blank">1358. 包含所有三种字符的子字符串数目</a> 1646</li>
    <li><a href="https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/" target="_blank">2962. 统计最大元素出现至少 K 次的子数组</a> 1701</li>
    <li><a href="https://leetcode.cn/problems/count-subarrays-with-score-less-than-k/" target="_blank">2302. 统计得分小于 K 的子数组数目</a> 1808</li>
    <li><a href="https://leetcode.cn/problems/count-the-number-of-good-subarrays/" target="_blank">2537. 统计好子数组的数目</a> 1892</li>
    <li><a href="https://leetcode.cn/problems/continuous-subarrays/" target="_blank">2762. 不间断子数组</a> 1940</li>
    <li><a href="https://leetcode.cn/problems/count-the-number-of-incremovable-subarrays-ii/" target="_blank">2972. 统计移除递增子数组的数目 II</a> 2153</li>
    <li><a href="https://leetcode.cn/problems/count-substrings-without-repeating-character/" target="_blank">2743. 计算没有重复字符的子字符串数量</a>（会员题）</li>
    </ul>
    <h3 id="多指针滑动窗口"><a class="header-anchor" href="#多指针滑动窗口" target="_blank"></a> 多指针滑动窗口</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/binary-subarrays-with-sum/" target="_blank">930. 和相同的二元子数组</a> 1592</li>
    <li><a href="https://leetcode.cn/problems/count-number-of-nice-subarrays/" target="_blank">1248. 统计「优美子数组」</a> 1624</li>
    <li><a href="https://leetcode.cn/problems/count-the-number-of-fair-pairs/" target="_blank">2563. 统计公平数对的数目</a> 1721</li>
    <li><a href="https://leetcode.cn/problems/ways-to-split-array-into-three-subarrays/" target="_blank">1712. 将数组分成三个子数组的方案数</a> 2079</li>
    <li><a href="https://leetcode.cn/problems/count-subarrays-with-fixed-bounds/" target="_blank">2444. 统计定界子数组的数目</a> 2093</li>
    <li><a href="https://leetcode.cn/problems/subarrays-with-k-different-integers/" target="_blank">992. K 个不同整数的子数组</a> 2210</li>
    <li><a href="https://leetcode.cn/problems/maximum-number-of-people-that-can-be-caught-in-tag/" target="_blank">1989. 捉迷藏中可捕获的最大人数</a>（会员题）</li>
    </ul>
    </div></div>`,
    `<div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>题单第二期来啦~欢迎点赞！</p>
    <blockquote>
    <p>注：右边数字为难度分。</p>
    </blockquote>
    <h2 id="二分答案"><a class="header-anchor" href="#二分答案" target="_blank"></a> 二分答案</h2>
    <ul>
    <li>推荐先看 <a href="https://leetcode.cn/problems/h-index-ii/solution/tu-jie-yi-tu-zhang-wo-er-fen-da-an-si-ch-d15k/" target="_blank">一图掌握二分答案！四种写法！</a></li>
    <li><a href="https://leetcode.cn/problems/h-index-ii/" target="_blank">275. H 指数 II</a></li>
    <li><a href="https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/" target="_blank">1283. 使结果不超过阈值的最小除数</a> 1542</li>
    <li><a href="https://leetcode.cn/problems/minimum-time-to-complete-trips/" target="_blank">2187. 完成旅途的最少时间</a> 1641</li>
    <li><a href="https://leetcode.cn/problems/maximum-candies-allocated-to-k-children/" target="_blank">2226. 每个小孩最多能分到多少糖果</a> 1646</li>
    <li><a href="https://leetcode.cn/problems/minimum-speed-to-arrive-on-time/" target="_blank">1870. 准时到达的列车最小时速</a> 1676</li>
    <li><a href="https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/" target="_blank">1011. 在 D 天内送达包裹的能力</a> 1725</li>
    <li><a href="https://leetcode.cn/problems/koko-eating-bananas/" target="_blank">875. 爱吃香蕉的珂珂</a> 1766</li>
    <li><a href="https://leetcode.cn/problems/maximum-number-of-removable-characters/" target="_blank">1898. 可移除字符的最大数目</a> 1913</li>
    <li><a href="https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets/" target="_blank">1482. 制作 m 束花所需的最少天数</a> 1946</li>
    <li><a href="https://leetcode.cn/problems/furthest-building-you-can-reach/" target="_blank">1642. 可以到达的最远建筑</a> 1962</li>
    <li><a href="https://leetcode.cn/problems/maximum-number-of-alloys/" target="_blank">2861. 最大合金数</a> 1981</li>
    <li><a href="https://leetcode.cn/problems/escape-the-spreading-fire/" target="_blank">2258. 逃离火灾</a> 2347</li>
    </ul>
    <h2 id="最小化最大值"><a class="header-anchor" href="#最小化最大值" target="_blank"></a> 最小化最大值</h2>
    <ul>
    <li><a href="https://leetcode.cn/problems/minimized-maximum-of-products-distributed-to-any-store/" target="_blank">2064. 分配给商店的最多商品的最小值</a> 1886</li>
    <li><a href="https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag/" target="_blank">1760. 袋子里最少数目的球</a> 1940</li>
    <li><a href="https://leetcode.cn/problems/minimize-maximum-of-array/" target="_blank">2439. 最小化数组中的最大值</a> 1965</li>
    <li><a href="https://leetcode.cn/problems/house-robber-iv/" target="_blank">2560. 打家劫舍 IV</a> 2081</li>
    <li><a href="https://leetcode.cn/problems/swim-in-rising-water/" target="_blank">778. 水位上升的泳池中游泳</a> 2097 相当于最小化路径最大值</li>
    <li><a href="https://leetcode.cn/problems/minimize-the-maximum-difference-of-pairs/" target="_blank">2616. 最小化数对的最大差值</a> 2155</li>
    <li><a href="https://leetcode.cn/problems/minimize-the-maximum-of-two-arrays/" target="_blank">2513. 最小化两个数组中的最大值</a> 2302</li>
    </ul>
    <h2 id="最大化最小值"><a class="header-anchor" href="#最大化最小值" target="_blank"></a> 最大化最小值</h2>
    <ul>
    <li><a href="https://leetcode.cn/problems/magnetic-force-between-two-balls/" target="_blank">1552. 两球之间的磁力</a> 1920</li>
    <li><a href="https://leetcode.cn/problems/maximum-number-of-alloys/" target="_blank">2861. 最大合金数</a> 1981</li>
    <li><a href="https://leetcode.cn/problems/maximum-tastiness-of-candy-basket/" target="_blank">2517. 礼盒的最大甜蜜度</a> 2021</li>
    <li><a href="https://leetcode.cn/problems/find-the-safest-path-in-a-grid/" target="_blank">2812. 找出最安全路径</a> 2154</li>
    <li><a href="https://leetcode.cn/problems/maximize-the-minimum-powered-city/" target="_blank">2528. 最大化城市的最小供电站数目</a> 2236</li>
    </ul>
    <h2 id="第-k-小/大（部分题目也可以用堆解决）"><a class="header-anchor" href="#第-k-小/大（部分题目也可以用堆解决）" target="_blank"></a> 第 K 小/大（部分题目也可以用堆解决）</h2>
    <ul>
    <li><a href="https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/" target="_blank">378. 有序矩阵中第 K 小的元素</a></li>
    <li><a href="https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/" target="_blank">373. 查找和最小的 K 对数字</a></li>
    <li><a href="https://leetcode.cn/problems/find-k-th-smallest-pair-distance/" target="_blank">719. 找出第 K 小的数对距离</a></li>
    <li><a href="https://leetcode.cn/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/" target="_blank">1439. 有序矩阵中的第 k 个最小数组和</a> 2134</li>
    <li><a href="https://leetcode.cn/problems/k-th-smallest-prime-fraction/" target="_blank">786. 第 K 个最小的素数分数</a> 2169</li>
    <li><a href="https://leetcode.cn/problems/kth-smallest-product-of-two-sorted-arrays/" target="_blank">2040. 两个有序数组的第 K 小乘积</a> 2518</li>
    <li><a href="https://leetcode.cn/problems/find-the-k-sum-of-an-array/" target="_blank">2386. 找出数组的第 K 大和</a> 2648</li>
    </ul>
    <p><a href="https://leetcode.cn/circle/discuss/0viNMK/" target="_blank">上期题单</a></p>
    </div></div>`,
    `<div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>题单第三期来啦~欢迎点赞！</p>
    <blockquote>
    <p>注：右边数字为难度分。</p>
    </blockquote>
    <h3 id="单调栈"><a class="header-anchor" href="#单调栈" target="_blank"></a> 单调栈</h3>
    <ul>
    <li><a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1VN411J7S7/" target="_blank">单调栈原理讲解</a></li>
    <li><a href="https://leetcode.cn/problems/daily-temperatures/" target="_blank">739. 每日温度</a></li>
    <li><a href="https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/" target="_blank">1475. 商品折扣后的最终价格</a> 1212</li>
    <li><a href="https://leetcode.cn/problems/next-greater-element-i/" target="_blank">496. 下一个更大元素 I</a></li>
    <li><a href="https://leetcode.cn/problems/next-greater-element-ii/" target="_blank">503. 下一个更大元素 II</a></li>
    <li><a href="https://leetcode.cn/problems/next-greater-node-in-linked-list/" target="_blank">1019. 链表中的下一个更大节点</a> 1571</li>
    <li><a href="https://leetcode.cn/problems/maximum-width-ramp/" target="_blank">962. 最大宽度坡</a> 1608</li>
    <li><a href="https://leetcode.cn/problems/online-stock-span/" target="_blank">901. 股票价格跨度</a> 1709</li>
    <li><a href="https://leetcode.cn/problems/trapping-rain-water/" target="_blank">42. 接雨水</a> *也有其它做法</li>
    <li><a href="https://leetcode.cn/problems/longest-well-performing-interval/" target="_blank">1124. 表现良好的最长时间段</a> 1908</li>
    <li><a href="https://leetcode.cn/problems/maximum-score-of-a-good-subarray/" target="_blank">1793. 好子数组的最大分数</a> 1946</li>
    <li><a href="https://leetcode.cn/problems/132-pattern/" target="_blank">456. 132 模式</a> ~2000</li>
    <li><a href="https://leetcode.cn/problems/beautiful-towers-ii/" target="_blank">2866. 美丽塔 II</a> 2072</li>
    <li><a href="https://leetcode.cn/problems/next-greater-element-iv/" target="_blank">2454. 下一个更大元素 IV</a> 2175</li>
    <li><a href="https://leetcode.cn/problems/steps-to-make-array-non-decreasing/" target="_blank">2289. 使数组按非递减顺序排列</a> 2482</li>
    <li><a href="https://leetcode.cn/problems/car-fleet-ii/" target="_blank">1776. 车队 II</a> 2531</li>
    <li><a href="https://leetcode.cn/problems/maximal-range-that-each-element-is-maximum-in-it/" target="_blank">2832. 每个元素为最大值的最大范围</a>（会员题）</li>
    </ul>
    <h3 id="矩形系列"><a class="header-anchor" href="#矩形系列" target="_blank"></a> 矩形系列</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/largest-rectangle-in-histogram/" target="_blank">84. 柱状图中最大的矩形</a></li>
    <li><a href="https://leetcode.cn/problems/maximal-rectangle/" target="_blank">85. 最大矩形</a></li>
    <li><a href="https://leetcode.cn/problems/count-submatrices-with-all-ones/" target="_blank">1504. 统计全 1 子矩形</a> 1845</li>
    </ul>
    <h3 id="字典序最小"><a class="header-anchor" href="#字典序最小" target="_blank"></a> 字典序最小</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/remove-duplicate-letters/" target="_blank">316. 去除重复字母</a></li>
    <li><a href="https://leetcode.cn/contest/tianchi2022/problems/ev2bru/" target="_blank">316 扩展：重复个数不超过 limit</a></li>
    <li><a href="https://leetcode.cn/problems/remove-k-digits/" target="_blank">402. 移掉 K 位数字</a> ~1800</li>
    <li><a href="https://leetcode.cn/problems/find-the-most-competitive-subsequence/" target="_blank">1673. 找出最具竞争力的子序列</a> 1802</li>
    <li><a href="https://leetcode.cn/problems/create-maximum-number/" target="_blank">321. 拼接最大数</a></li>
    <li><a href="https://leetcode.cn/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/" target="_blank">2030. 含特定字母的最小子序列</a> 2562</li>
    </ul>
    <h3 id="贡献法"><a class="header-anchor" href="#贡献法" target="_blank"></a> 贡献法</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/sum-of-subarray-minimums/" target="_blank">907. 子数组的最小值之和</a> 1976</li>
    <li><a href="https://leetcode.cn/problems/sum-of-subarray-ranges/" target="_blank">2104. 子数组范围和（最大值-最小值）</a> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> 做法难度大约 2000</li>
    <li><a href="https://leetcode.cn/problems/maximum-subarray-min-product/" target="_blank">1856. 子数组最小乘积的最大值</a> 2051</li>
    <li><a href="https://leetcode.cn/problems/apply-operations-to-maximize-score/" target="_blank">2818. 操作使得分最大</a> 2397</li>
    <li><a href="https://leetcode.cn/problems/sum-of-total-strength-of-wizards/" target="_blank">2281. 巫师的总力量和（最小值×和）</a> 2621</li>
    </ul>
    <p><a href="https://leetcode.cn/circle/discuss/SqopEo/" target="_blank">上期题单</a></p>
    </div></div>`,
    `<div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>题单第三期来啦~欢迎点赞！</p>
<blockquote>
<p>注：右边数字为难度分。</p>
</blockquote>
<h3 id="单调栈"><a class="header-anchor" href="#单调栈" target="_blank"></a> 单调栈</h3>
<ul>
<li><a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1VN411J7S7/" target="_blank">单调栈原理讲解</a></li>
<li><a href="https://leetcode.cn/problems/daily-temperatures/" target="_blank">739. 每日温度</a></li>
<li><a href="https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/" target="_blank">1475. 商品折扣后的最终价格</a> 1212</li>
<li><a href="https://leetcode.cn/problems/next-greater-element-i/" target="_blank">496. 下一个更大元素 I</a></li>
<li><a href="https://leetcode.cn/problems/next-greater-element-ii/" target="_blank">503. 下一个更大元素 II</a></li>
<li><a href="https://leetcode.cn/problems/next-greater-node-in-linked-list/" target="_blank">1019. 链表中的下一个更大节点</a> 1571</li>
<li><a href="https://leetcode.cn/problems/maximum-width-ramp/" target="_blank">962. 最大宽度坡</a> 1608</li>
<li><a href="https://leetcode.cn/problems/online-stock-span/" target="_blank">901. 股票价格跨度</a> 1709</li>
<li><a href="https://leetcode.cn/problems/trapping-rain-water/" target="_blank">42. 接雨水</a> *也有其它做法</li>
<li><a href="https://leetcode.cn/problems/longest-well-performing-interval/" target="_blank">1124. 表现良好的最长时间段</a> 1908</li>
<li><a href="https://leetcode.cn/problems/maximum-score-of-a-good-subarray/" target="_blank">1793. 好子数组的最大分数</a> 1946</li>
<li><a href="https://leetcode.cn/problems/132-pattern/" target="_blank">456. 132 模式</a> ~2000</li>
<li><a href="https://leetcode.cn/problems/beautiful-towers-ii/" target="_blank">2866. 美丽塔 II</a> 2072</li>
<li><a href="https://leetcode.cn/problems/next-greater-element-iv/" target="_blank">2454. 下一个更大元素 IV</a> 2175</li>
<li><a href="https://leetcode.cn/problems/steps-to-make-array-non-decreasing/" target="_blank">2289. 使数组按非递减顺序排列</a> 2482</li>
<li><a href="https://leetcode.cn/problems/car-fleet-ii/" target="_blank">1776. 车队 II</a> 2531</li>
<li><a href="https://leetcode.cn/problems/maximal-range-that-each-element-is-maximum-in-it/" target="_blank">2832. 每个元素为最大值的最大范围</a>（会员题）</li>
</ul>
<h3 id="矩形系列"><a class="header-anchor" href="#矩形系列" target="_blank"></a> 矩形系列</h3>
<ul>
<li><a href="https://leetcode.cn/problems/largest-rectangle-in-histogram/" target="_blank">84. 柱状图中最大的矩形</a></li>
<li><a href="https://leetcode.cn/problems/maximal-rectangle/" target="_blank">85. 最大矩形</a></li>
<li><a href="https://leetcode.cn/problems/count-submatrices-with-all-ones/" target="_blank">1504. 统计全 1 子矩形</a> 1845</li>
</ul>
<h3 id="字典序最小"><a class="header-anchor" href="#字典序最小" target="_blank"></a> 字典序最小</h3>
<ul>
<li><a href="https://leetcode.cn/problems/remove-duplicate-letters/" target="_blank">316. 去除重复字母</a></li>
<li><a href="https://leetcode.cn/contest/tianchi2022/problems/ev2bru/" target="_blank">316 扩展：重复个数不超过 limit</a></li>
<li><a href="https://leetcode.cn/problems/remove-k-digits/" target="_blank">402. 移掉 K 位数字</a> ~1800</li>
<li><a href="https://leetcode.cn/problems/find-the-most-competitive-subsequence/" target="_blank">1673. 找出最具竞争力的子序列</a> 1802</li>
<li><a href="https://leetcode.cn/problems/create-maximum-number/" target="_blank">321. 拼接最大数</a></li>
<li><a href="https://leetcode.cn/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/" target="_blank">2030. 含特定字母的最小子序列</a> 2562</li>
</ul>
<h3 id="贡献法"><a class="header-anchor" href="#贡献法" target="_blank"></a> 贡献法</h3>
<ul>
<li><a href="https://leetcode.cn/problems/sum-of-subarray-minimums/" target="_blank">907. 子数组的最小值之和</a> 1976</li>
<li><a href="https://leetcode.cn/problems/sum-of-subarray-ranges/" target="_blank">2104. 子数组范围和（最大值-最小值）</a> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> 做法难度大约 2000</li>
<li><a href="https://leetcode.cn/problems/maximum-subarray-min-product/" target="_blank">1856. 子数组最小乘积的最大值</a> 2051</li>
<li><a href="https://leetcode.cn/problems/apply-operations-to-maximize-score/" target="_blank">2818. 操作使得分最大</a> 2397</li>
<li><a href="https://leetcode.cn/problems/sum-of-total-strength-of-wizards/" target="_blank">2281. 巫师的总力量和（最小值×和）</a> 2621</li>
</ul>
<p><a href="https://leetcode.cn/circle/discuss/SqopEo/" target="_blank">上期题单</a></p>
</div></div>`,
    `<div class="css-1gur1b5-CollapsibleMarkdownContent e2v1tt6"><div><div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>题单第四期来啦~欢迎点赞！</p>
<blockquote>
<p>注：右边数字为难度分。</p>
</blockquote>
<h3 id="网格图-dfs"><a class="header-anchor" href="#网格图-dfs" target="_blank"></a> 网格图 DFS</h3>
<p>部分题目的解法不唯一，也可以用 BFS 或者并查集等算法解决。</p>
<ul>
<li><a href="https://leetcode.cn/problems/number-of-islands/" target="_blank">200. 岛屿数量</a></li>
<li><a href="https://leetcode.cn/problems/max-area-of-island/" target="_blank">695. 岛屿的最大面积</a></li>
<li><a href="https://leetcode.cn/problems/pond-sizes-lcci/" target="_blank">面试题 16.19. 水域大小</a></li>
<li><a href="https://leetcode.cn/problems/island-perimeter/" target="_blank">463. 岛屿的周长</a></li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-fish-in-a-grid/" target="_blank">2658. 网格图中鱼的最大数目</a> 1490</li>
<li><a href="https://leetcode.cn/problems/coloring-a-border/" target="_blank">1034. 边界着色</a> 1579</li>
<li><a href="https://leetcode.cn/problems/number-of-enclaves/" target="_blank">1020. 飞地的数量</a> 1615</li>
<li><a href="https://leetcode.cn/problems/number-of-closed-islands/" target="_blank">1254. 统计封闭岛屿的数目</a> 1659</li>
<li><a href="https://leetcode.cn/problems/surrounded-regions/" target="_blank">130. 被围绕的区域</a></li>
<li><a href="https://leetcode.cn/problems/check-if-there-is-a-valid-path-in-a-grid/" target="_blank">1391. 检查网格中是否存在有效路径</a> 1746</li>
<li><a href="https://leetcode.cn/problems/pacific-atlantic-water-flow/" target="_blank">417. 太平洋大西洋水流问题</a></li>
<li><a href="https://leetcode.cn/problems/minesweeper/" target="_blank">529. 扫雷游戏</a></li>
<li><a href="https://leetcode.cn/problems/detect-cycles-in-2d-grid/" target="_blank">1559. 二维网格图中探测环</a> 1838</li>
<li><a href="https://leetcode.cn/problems/making-a-large-island/" target="_blank">827. 最大人工岛</a> 1934</li>
</ul>
<h3 id="网格图-bfs"><a class="header-anchor" href="#网格图-bfs" target="_blank"></a> 网格图 BFS</h3>
<ul>
<li><a href="https://leetcode.cn/problems/01-matrix/" target="_blank">542. 01 矩阵</a></li>
<li><a href="https://leetcode.cn/problems/rotting-oranges/" target="_blank">994. 腐烂的橘子</a> 1433</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid/" target="_blank">2684. 矩阵中移动的最大次数</a> 1626</li>
<li><a href="https://leetcode.cn/problems/nearest-exit-from-entrance-in-maze/" target="_blank">1926. 迷宫中离入口最近的出口</a> 1638</li>
<li><a href="https://leetcode.cn/problems/as-far-from-land-as-possible/" target="_blank">1162. 地图分析</a> 1666</li>
<li><a href="https://leetcode.cn/problems/shortest-bridge/" target="_blank">934. 最短的桥</a> 1826</li>
<li><a href="https://leetcode.cn/problems/k-highest-ranked-items-within-a-price-range/" target="_blank">2146. 价格范围内最高排名的 K 样物品</a> 1837</li>
<li><a href="https://leetcode.cn/problems/shortest-path-in-a-grid-with-obstacles-elimination/" target="_blank">1293. 网格中的最短路径</a> 1967</li>
<li><a href="https://leetcode.cn/problems/minimum-moves-to-reach-target-with-rotations/" target="_blank">1210. 穿过迷宫的最少移动次数</a> 2022</li>
<li><a href="https://leetcode.cn/problems/shortest-distance-from-all-buildings/" target="_blank">317. 离建筑物最近的距离</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/the-maze/" target="_blank">490. 迷宫</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/the-maze-ii/" target="_blank">505. 迷宫 II</a>（会员题）</li>
</ul>
<h3 id="综合应用"><a class="header-anchor" href="#综合应用" target="_blank"></a> 综合应用</h3>
<ul>
<li><a href="https://leetcode.cn/problems/path-with-minimum-effort/" target="_blank">1631. 最小体力消耗路径</a> 1948</li>
<li><a href="https://leetcode.cn/problems/swim-in-rising-water/" target="_blank">778. 水位上升的泳池中游泳</a> 2097</li>
<li><a href="https://leetcode.cn/problems/escape-a-large-maze/" target="_blank">1036. 逃离大迷宫</a> 2165</li>
<li><a href="https://leetcode.cn/problems/minimum-moves-to-move-a-box-to-their-target-location/" target="_blank">1263. 推箱子</a> 2297</li>
<li><a href="https://leetcode.cn/problems/escape-the-spreading-fire/" target="_blank">2258. 逃离火灾</a> 2347</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-visit-a-cell-in-a-grid/" target="_blank">2577. 在网格图中访问一个格子的最少时间</a> 2382</li>
<li><a href="https://leetcode.cn/problems/rdmXM7/" target="_blank">LCP 75. 传送卷轴</a></li>
<li><a href="https://leetcode.cn/problems/xun-bao/" target="_blank">LCP 13. 寻宝</a></li>
<li><a href="https://leetcode-cn.com/problems/Db3wC1/" target="_blank">LCP 31. 变换的迷宫</a></li>
<li><a href="https://leetcode.cn/problems/cat-and-mouse-ii/" target="_blank">1728. 猫和老鼠 II</a> 2849</li>
</ul>
<h3 id="思考题"><a class="header-anchor" href="#思考题" target="_blank"></a> 思考题</h3>
<ol>
<li>对于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi></mrow><annotation encoding="application/x-tex">m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">m</span></span></span></span> 行 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span></span></span></span> 列的网格图，BFS 的队列最多消耗多少空间？DFS 的递归栈最多消耗多少空间？</li>
<li>构造一个网格图，让 DFS 的递归深度尽量大。如果起点是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(0,0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord">0</span><span class="mclose">)</span></span></span></span> 要如何构造？如果起点是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>i</mi><mo separator="true">,</mo><mi>j</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(i,j)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathdefault">i</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">)</span></span></span></span> 要如何构造？</li>
</ol>
<p>欢迎在评论区发表你的思路。</p>
<p><a href="https://leetcode.cn/circle/discuss/9oZFK9/" target="_blank">上期题单</a></p>
<blockquote>
<p>更多题单，点我个人主页 - 讨论发布查看。</p>
</blockquote>
</div></div></div></div>`,
    `
<div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>题单第五期来啦~欢迎点赞！</p>
    <p>推荐先阅读：<a href="https://leetcode.cn/circle/discuss/CaOJ45/" target="_blank">从集合论到位运算，常见位运算技巧分类总结！</a></p>
    <h3 id="基础题"><a class="header-anchor" href="#基础题" target="_blank"></a> 基础题</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/xor-operation-in-an-array/" target="_blank">1486. 数组异或操作</a> 1181</li>
    <li><a href="https://leetcode.cn/problems/number-of-even-and-odd-bits/" target="_blank">2595. 奇偶位数</a> 1207</li>
    <li><a href="https://leetcode.cn/problems/power-of-two/" target="_blank">231. 2 的幂</a></li>
    <li><a href="https://leetcode.cn/problems/power-of-four/" target="_blank">342. 4 的幂</a></li>
    <li><a href="https://leetcode.cn/problems/number-complement/" target="_blank">476. 数字的补数</a> 1235</li>
    <li><a href="https://leetcode.cn/problems/number-of-1-bits/" target="_blank">191. 位 1 的个数</a></li>
    <li><a href="https://leetcode.cn/problems/counting-bits/" target="_blank">338. 比特位计数</a> 也可以 DP</li>
    <li><a href="https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits/" target="_blank">1356. 根据数字二进制下 1 的数目排序</a> 1258</li>
    <li><a href="https://leetcode.cn/problems/hamming-distance/" target="_blank">461. 汉明距离</a></li>
    <li><a href="https://leetcode.cn/problems/minimum-bit-flips-to-convert-number/" target="_blank">2220. 转换数字的最少位翻转次数</a> 1282</li>
    <li><a href="https://leetcode.cn/problems/binary-gap/" target="_blank">868. 二进制间距</a> 1307</li>
    <li><a href="https://leetcode.cn/problems/find-the-k-or-of-an-array/" target="_blank">2917. 找出数组中的 K-or 值</a> 1389</li>
    <li><a href="https://leetcode.cn/problems/binary-number-with-alternating-bits/" target="_blank">693. 交替位二进制数</a></li>
    </ul>
    <h3 id="与或（and/or）的性质"><a class="header-anchor" href="#与或（and/or）的性质" target="_blank"></a> 与或（AND/OR）的性质</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/check-if-bitwise-or-has-trailing-zeros/" target="_blank">2980. 检查按位或是否存在尾随零</a> 1234</li>
    <li><a href="https://leetcode.cn/problems/minimum-flips-to-make-a-or-b-equal-to-c/" target="_blank">1318. 或运算的最小翻转次数</a> 1383</li>
    <li><a href="https://leetcode.cn/problems/longest-subarray-with-maximum-bitwise-and/" target="_blank">2419. 按位与最大的最长子数组</a> 1496</li>
    <li><a href="https://leetcode.cn/problems/split-array-into-maximum-number-of-subarrays/" target="_blank">2871. 将数组分割成最多数目的子数组</a> 1750</li>
    <li><a href="https://leetcode.cn/problems/longest-nice-subarray/" target="_blank">2401. 最长优雅子数组</a> 1750</li>
    <li><a href="https://leetcode.cn/problems/maximum-or/" target="_blank">2680. 最大或值</a> 1912 可以做到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 额外空间</li>
    <li><a href="https://leetcode.cn/problems/smallest-subarrays-with-maximum-bitwise-or/" target="_blank">2411. 按位或最大的最小子数组长度</a> 1938</li>
    <li><a href="https://leetcode.cn/problems/bitwise-ors-of-subarrays/" target="_blank">898. 子数组按位或操作</a> 2133</li>
    <li><a href="https://leetcode.cn/problems/find-a-value-of-a-mysterious-function-closest-to-target/" target="_blank">1521. 找到最接近目标值的函数值</a> 2384</li>
    </ul>
    <h3 id="异或（xor）的性质"><a class="header-anchor" href="#异或（xor）的性质" target="_blank"></a> 异或（XOR）的性质</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/decode-xored-array/" target="_blank">1720. 解码异或后的数组</a> 1284</li>
    <li><a href="https://leetcode.cn/problems/find-the-original-array-of-prefix-xor/" target="_blank">2433. 找出前缀异或的原始数组</a> 1367</li>
    <li><a href="https://leetcode.cn/problems/xor-queries-of-a-subarray/" target="_blank">1310. 子数组异或查询</a> 1460</li>
    <li><a href="https://leetcode.cn/problems/neighboring-bitwise-xor/" target="_blank">2683. 相邻值的按位异或</a> 1518</li>
    <li><a href="https://leetcode.cn/problems/maximum-xor-for-each-query/" target="_blank">1829. 每个查询的最大异或值</a> 1523</li>
    <li><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/" target="_blank">2997. 使数组异或和等于 K 的最少操作次数</a> 1525</li>
    <li><a href="https://leetcode.cn/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/" target="_blank">1442. 形成两个异或相等数组的三元组数目</a> 1525</li>
    <li><a href="https://leetcode.cn/problems/minimize-xor/" target="_blank">2429. 最小异或</a> 1532</li>
    <li><a href="https://leetcode.cn/problems/find-xor-beauty-of-array/" target="_blank">2527. 查询数组异或美丽值</a> 1550</li>
    <li><a href="https://leetcode.cn/problems/maximum-xor-after-operations/" target="_blank">2317. 操作后的最大异或和</a> 1679</li>
    <li><a href="https://leetcode.cn/problems/count-the-number-of-beautiful-subarrays/" target="_blank">2588. 统计美丽子数组数目</a> 1697</li>
    <li><a href="https://leetcode.cn/problems/substring-xor-queries/" target="_blank">2564. 子字符串异或查询</a> 1959</li>
    <li><a href="https://leetcode.cn/problems/decode-xored-permutation/" target="_blank">1734. 解码异或后的排列</a> 2024</li>
    <li><a href="https://leetcode.cn/problems/count-pairs-of-points-with-distance-k/" target="_blank">2857. 统计距离为 k 的点对</a> 2082</li>
    </ul>
    <h3 id="拆位-/-贡献法"><a class="header-anchor" href="#拆位-/-贡献法" target="_blank"></a> 拆位 / 贡献法</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/total-hamming-distance/" target="_blank">477. 汉明距离总和</a></li>
    <li><a href="https://leetcode.cn/problems/sum-of-all-subset-xor-totals/" target="_blank">1863. 找出所有子集的异或总和再求和</a> 可以做到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> 时间</li>
    <li><a href="https://leetcode.cn/problems/bitwise-xor-of-all-pairings/" target="_blank">2425. 所有数对的异或和</a> 1622 可以做到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n+m)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">m</span><span class="mclose">)</span></span></span></span> 时间</li>
    <li><a href="https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero/" target="_blank">2275. 按位与结果大于零的最长组合</a> 1642</li>
    <li><a href="https://leetcode.cn/problems/find-xor-sum-of-all-pairs-bitwise-and/" target="_blank">1835. 所有数对按位与结果的异或和</a> 1825 也有恒等式做法</li>
    <li><a href="https://leetcode.cn/problems/bitwise-or-of-all-subsequence-sums/" target="_blank">2505. 所有子序列和的按位或</a>（会员题）</li>
    </ul>
    <h3 id="试填法"><a class="header-anchor" href="#试填法" target="_blank"></a> 试填法</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/" target="_blank">3007. 价值和小于等于 K 的最大数字</a> 2258</li>
    <li><a href="https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array/" target="_blank">421. 数组中两个数的最大异或值</a>，<a href="https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array/solution/tu-jie-jian-ji-gao-xiao-yi-tu-miao-dong-1427d/" target="_blank">试填法题解</a></li>
    <li><a href="https://leetcode.cn/problems/maximum-strong-pair-xor-ii/" target="_blank">2935. 找出强数对的最大异或值 II</a> 2349</li>
    <li><a href="https://leetcode.cn/problems/minimize-or-of-remaining-elements-using-operations/" target="_blank">3022. 给定操作次数内使剩余元素的或值最小</a> 2918</li>
    </ul>
    <h3 id="恒等式"><a class="header-anchor" href="#恒等式" target="_blank"></a> 恒等式</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/find-xor-sum-of-all-pairs-bitwise-and/" target="_blank">1835. 所有数对按位与结果的异或和</a> 1825</li>
    <li><a href="https://leetcode.cn/problems/number-of-excellent-pairs/" target="_blank">2354. 优质数对的数目</a> 2076</li>
    </ul>
    <h3 id="思维题（贪心、脑筋急转弯等）"><a class="header-anchor" href="#思维题（贪心、脑筋急转弯等）" target="_blank"></a> 思维题（贪心、脑筋急转弯等）</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/apply-bitwise-operations-to-make-strings-equal/" target="_blank">2546. 执行逐位运算使字符串相等</a> 1605</li>
    <li><a href="https://leetcode.cn/problems/minimum-numbers-of-function-calls-to-make-target-array/" target="_blank">1558. 得到目标数组的最少函数调用次数</a> 1637</li>
    <li><a href="https://leetcode.cn/problems/minimum-operations-to-reduce-an-integer-to-0/" target="_blank">2571. 将整数减少到零需要的最少操作数</a> 1649 巧妙结论</li>
    <li><a href="https://leetcode.cn/problems/minimum-impossible-or/" target="_blank">2568. 最小无法得到的或值</a> 1754</li>
    <li><a href="https://leetcode.cn/problems/maximum-xor-product/" target="_blank">2939. 最大异或乘积</a> 2128</li>
    <li><a href="https://leetcode.cn/problems/minimum-operations-to-make-the-integer-zero/" target="_blank">2749. 得到整数零需要执行的最少操作数</a> 2132</li>
    <li><a href="https://leetcode.cn/problems/minimum-operations-to-form-subsequence-with-target-sum/" target="_blank">2835. 使子序列的和等于目标的最少操作次数</a> 2207</li>
    <li><a href="https://leetcode.cn/problems/apply-operations-on-array-to-maximize-sum-of-squares/" target="_blank">2897. 对数组执行操作使平方和最大</a> 2301</li>
    <li><a href="https://leetcode.cn/problems/chalkboard-xor-game/" target="_blank">810. 黑板异或游戏</a> 2341</li>
    </ul>
    <h3 id="其它"><a class="header-anchor" href="#其它" target="_blank"></a> 其它</h3>
    <ul>
    <li><a href="https://leetcode.cn/problems/single-number/" target="_blank">136. 只出现一次的数字</a></li>
    <li><a href="https://leetcode.cn/problems/find-the-duplicate-number/" target="_blank">287. 寻找重复数</a></li>
    <li><a href="https://leetcode.cn/problems/single-number-iii/" target="_blank">260. 只出现一次的数字 III</a></li>
    <li><a href="https://leetcode.cn/problems/single-number-ii/" target="_blank">137. 只出现一次的数字 II</a></li>
    <li><a href="https://leetcode.cn/problems/set-mismatch/" target="_blank">645. 错误的集合</a></li>
    <li><a href="https://leetcode.cn/problems/reverse-bits/" target="_blank">190. 颠倒二进制位</a></li>
    <li><a href="https://leetcode.cn/problems/sum-of-two-integers/" target="_blank">371. 两整数之和</a></li>
    <li><a href="https://leetcode.cn/problems/bitwise-and-of-numbers-range/" target="_blank">201. 数字范围按位与</a></li>
    <li><a href="https://leetcode.cn/problems/keep-multiplying-found-values-by-two/" target="_blank">2154. 将找到的值乘以 2</a> 可以做到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> 时间</li>
    <li><a href="https://leetcode.cn/problems/count-number-of-maximum-bitwise-or-subsets/" target="_blank">2044. 统计按位或能得到最大值的子集数目</a> 1568</li>
    <li><a href="https://leetcode.cn/problems/range-product-queries-of-powers/" target="_blank">2438. 二的幂数组中查询范围内的乘积</a> 1610</li>
    <li><a href="https://leetcode.cn/problems/concatenation-of-consecutive-binary-numbers/" target="_blank">1680. 连接连续二进制数字</a> 1630</li>
    <li><a href="https://leetcode.cn/problems/triples-with-bitwise-and-equal-to-zero/" target="_blank">982. 按位与为零的三元组</a> 2085</li>
    <li><a href="https://leetcode.cn/problems/minimum-one-bit-operations-to-make-integers-zero/" target="_blank">1611. 使整数变为 0 的最少操作次数</a> 2345</li>
    </ul>
    <p><a href="https://leetcode.cn/circle/discuss/YiXPXW/" target="_blank">上期题单</a></p>
    <blockquote>
    <p>更多题单，点我个人主页 - 讨论发布。</p>
    </blockquote>
    </div>
`,

    `<div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><p>题单第六期来啦~欢迎点赞！</p>
<h3 id="dfs-基础"><a class="header-anchor" href="#dfs-基础" target="_blank"></a> DFS 基础</h3>
<p>找连通块、判断是否有环等。部分题目做法不止一种。</p>
<ul>
<li><a href="https://leetcode.cn/problems/number-of-provinces/" target="_blank">547. 省份数量</a></li>
<li><a href="https://leetcode.cn/problems/find-if-path-exists-in-graph/" target="_blank">1971. 寻找图中是否存在路径</a></li>
<li><a href="https://leetcode.cn/problems/all-paths-from-source-to-target/" target="_blank">797. 所有可能的路径</a> 1383</li>
<li><a href="https://leetcode.cn/problems/keys-and-rooms/" target="_blank">841. 钥匙和房间</a> 1412</li>
<li><a href="https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/" target="_blank">2316. 统计无向图中无法互相到达点对数</a> 1604</li>
<li><a href="https://leetcode.cn/problems/number-of-operations-to-make-network-connected/" target="_blank">1319. 连通网络的操作次数</a> 1633</li>
<li><a href="https://leetcode.cn/problems/minimum-score-of-a-path-between-two-cities/" target="_blank">2492. 两个城市间路径的最小分数</a> 1680</li>
<li><a href="https://leetcode.cn/problems/count-the-number-of-complete-components/" target="_blank">2685. 统计完全连通分量的数量</a> 1769</li>
<li><a href="https://leetcode.cn/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/" target="_blank">2192. 有向无环图中一个节点的所有祖先</a> 1788</li>
<li><a href="https://leetcode.cn/problems/minimize-malware-spread/" target="_blank">924. 尽量减少恶意软件的传播</a> 1869</li>
<li><a href="https://leetcode.cn/problems/detonate-the-maximum-bombs/" target="_blank">2101. 引爆最多的炸弹</a> 1880</li>
<li><a href="https://leetcode.cn/problems/find-eventual-safe-states/" target="_blank">802. 找到最终的安全状态</a> 1962 三色标记法</li>
<li><a href="https://leetcode.cn/problems/find-all-people-with-secret/" target="_blank">2092. 找出知晓秘密的所有专家</a> 2004</li>
<li><a href="https://leetcode.cn/problems/graph-valid-tree/" target="_blank">261. 以图判树</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph/" target="_blank">323. 无向图中连通分量的数目</a>（会员题）</li>
</ul>
<h3 id="bfs-基础"><a class="header-anchor" href="#bfs-基础" target="_blank"></a> BFS 基础</h3>
<p>求最短路等。</p>
<ul>
<li><a href="https://leetcode.cn/problems/get-watched-videos-by-your-friends/" target="_blank">1311. 获取你好友已观看的视频</a> 1653</li>
<li><a href="https://leetcode.cn/problems/shortest-path-with-alternating-colors/" target="_blank">1129. 颜色交替的最短路径</a> 1780</li>
<li><a href="https://leetcode.cn/problems/maximum-candies-you-can-get-from-boxes/" target="_blank">1298. 你能从盒子里获得的最大糖果数</a> 1825</li>
<li><a href="https://leetcode.cn/problems/the-time-when-the-network-becomes-idle/" target="_blank">2039. 网络空闲的时刻</a> 1865</li>
<li><a href="https://leetcode.cn/problems/shortest-cycle-in-a-graph/" target="_blank">2608. 图中的最短环</a> 1904</li>
</ul>
<h3 id="拓扑排序"><a class="header-anchor" href="#拓扑排序" target="_blank"></a> 拓扑排序</h3>
<p>学习拓扑排序前，请先完成 <a href="https://leetcode.cn/problems/minimum-number-of-vertices-to-reach-all-nodes/" target="_blank">1557. 可以到达所有点的最少点数目</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/course-schedule/" target="_blank">207. 课程表</a></li>
<li><a href="https://leetcode.cn/problems/course-schedule-ii/" target="_blank">210. 课程表 II</a></li>
<li><a href="https://leetcode.cn/problems/course-schedule-iv/" target="_blank">1462. 课程表 IV</a> 1693</li>
<li><a href="https://leetcode.cn/problems/find-all-possible-recipes-from-given-supplies/" target="_blank">2115. 从给定原材料中找到所有可以做出的菜</a> 1679</li>
<li><a href="https://leetcode.cn/problems/minimum-height-trees/" target="_blank">310. 最小高度树</a></li>
<li><a href="https://leetcode.cn/problems/find-eventual-safe-states/" target="_blank">802. 找到最终的安全状态</a> 1962</li>
<li><a href="https://leetcode.cn/problems/sort-items-by-groups-respecting-dependencies/" target="_blank">1203. 项目管理</a> 2419</li>
<li><a href="https://leetcode.cn/problems/collect-coins-in-a-tree/" target="_blank">2603. 收集树中金币</a> 2712</li>
<li><a href="https://leetcode.cn/problems/alien-dictionary/" target="_blank">269. 火星词典</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/sequence-reconstruction/" target="_blank">444. 序列重建</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/all-paths-from-source-lead-to-destination/" target="_blank">1059. 从始点到终点的所有路径</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/parallel-courses/" target="_blank">1136. 并行课程</a>（会员题）</li>
</ul>
<h3 id="在拓扑序上-dp"><a class="header-anchor" href="#在拓扑序上-dp" target="_blank"></a> 在拓扑序上 DP</h3>
<ul>
<li><a href="https://leetcode.cn/problems/parallel-courses-iii/" target="_blank">2050. 并行课程 III</a> 2084</li>
<li><a href="https://leetcode.cn/problems/largest-color-value-in-a-directed-graph/" target="_blank">1857. 有向图中最大颜色值</a> 2313</li>
</ul>
<h3 id="基环树"><a class="header-anchor" href="#基环树" target="_blank"></a> 基环树</h3>
<p><a href="https://leetcode.cn/problems/maximum-employees-to-be-invited-to-a-meeting/solution/nei-xiang-ji-huan-shu-tuo-bu-pai-xu-fen-c1i1b/" target="_blank">基环树介绍</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/redundant-connection/" target="_blank">684. 冗余连接</a> 做法不止一种</li>
<li><a href="https://leetcode.cn/problems/find-closest-node-to-given-two-nodes/" target="_blank">2359. 找到离给定两个节点最近的节点</a> 1715</li>
<li><a href="https://leetcode.cn/problems/longest-cycle-in-a-graph/" target="_blank">2360. 图中的最长环</a> 1897</li>
<li><a href="https://leetcode.cn/problems/count-visited-nodes-in-a-directed-graph/" target="_blank">2876. 有向图访问计数</a> 2210</li>
<li><a href="https://leetcode.cn/problems/maximum-employees-to-be-invited-to-a-meeting/" target="_blank">2127. 参加会议的最多员工数</a> 2449</li>
<li><a href="https://leetcode.cn/problems/maximize-value-of-function-in-a-ball-passing-game" target="_blank">2836. 在传球游戏中最大化函数值</a> 2769</li>
<li><a href="https://leetcode.cn/problems/distance-to-a-cycle-in-undirected-graph/" target="_blank">2204. 无向图中到环的距离</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/Za25hA/" target="_blank">LCP 21. 追逐游戏</a></li>
</ul>
<h3 id="单源最短路：dijkstra"><a class="header-anchor" href="#单源最短路：dijkstra" target="_blank"></a> 单源最短路：Dijkstra</h3>
<p><a href="https://leetcode.cn/problems/network-delay-time/solution/liang-chong-dijkstra-xie-fa-fu-ti-dan-py-ooe8/" target="_blank">Dijkstra 算法介绍</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/network-delay-time/" target="_blank">743. 网络延迟时间</a></li>
<li><a href="https://leetcode.cn/problems/design-graph-with-shortest-path-calculator/" target="_blank">2642. 设计可以求最短路径的图类</a> 1811</li>
<li><a href="https://leetcode.cn/problems/path-with-maximum-probability/" target="_blank">1514. 概率最大的路径</a> 1846</li>
<li><a href="https://leetcode.cn/problems/path-with-minimum-effort/" target="_blank">1631. 最小体力消耗路径</a> 1948 做法不止一种</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/" target="_blank">1368. 使网格图至少有一条有效路径的最小代价</a> 2069 也可以 0-1 BFS</li>
<li><a href="https://leetcode.cn/problems/number-of-restricted-paths-from-first-to-last-node/" target="_blank">1786. 从第一个节点出发到最后一个节点的受限路径数</a> 2079</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-arrive-at-destination/" target="_blank">1976. 到达目的地的方案数</a> 2095</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-of-a-path-with-special-roads/" target="_blank">2662. 前往目标的最小代价</a> 2154</li>
<li><a href="https://leetcode.cn/problems/second-minimum-time-to-reach-destination/" target="_blank">2045. 到达目的地的第二短时间</a> 2202 也可以 BFS</li>
<li><a href="https://leetcode.cn/problems/reachable-nodes-in-subdivided-graph/" target="_blank">882. 细分图中的可到达节点</a> 2328</li>
<li><a href="https://leetcode.cn/problems/minimum-weighted-subgraph-with-the-required-paths/" target="_blank">2203. 得到要求路径的最小带权子图</a> 2364</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-visit-a-cell-in-a-grid/" target="_blank">2577. 在网格图中访问一个格子的最少时间</a> 2382</li>
<li><a href="https://leetcode.cn/problems/modify-graph-edge-weights/" target="_blank">2699. 修改图中的边权</a> 2874</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-reach-city-with-discounts/" target="_blank">2093. 前往目标城市的最小费用</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-buy-apples/" target="_blank">2473. 购买苹果的最低成本</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/find-shortest-path-with-k-hops/" target="_blank">2714. 找到最短路径的 K 次跨越</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/find-the-closest-marked-node/" target="_blank">2737. 找到最近的标记节点</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/DFPeFJ/" target="_blank">LCP 35. 电动车游城市</a></li>
<li><a href="https://leetcode.cn/problems/6UEx57/" target="_blank">LCP 56. 信物传送</a> 也可以 0-1 BFS</li>
</ul>
<h3 id="全源最短路：floyd"><a class="header-anchor" href="#全源最短路：floyd" target="_blank"></a> 全源最短路：Floyd</h3>
<p><a href="https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solution/dai-ni-fa-ming-floyd-suan-fa-cong-ji-yi-m8s51/" target="_blank">带你发明 Floyd 算法：从记忆化搜索到递推</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/design-graph-with-shortest-path-calculator/" target="_blank">2642. 设计可以求最短路径的图类</a> 1811</li>
<li><a href="https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" target="_blank">1334. 阈值距离内邻居最少的城市</a> 1855</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-convert-string-i/" target="_blank">2976. 转换字符串的最小成本 I</a> 1882</li>
<li><a href="https://leetcode.cn/problems/number-of-possible-sets-of-closing-branches/" target="_blank">2959. 关闭分部的可行集合数目</a> 2077</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-convert-string-ii/" target="_blank">2977. 转换字符串的最小成本 II</a> 2696</li>
</ul>
<h3 id="最小生成树：kruskal/prim"><a class="header-anchor" href="#最小生成树：kruskal/prim" target="_blank"></a> 最小生成树：Kruskal/Prim</h3>
<ul>
<li><a href="https://leetcode.cn/problems/min-cost-to-connect-all-points/" target="_blank">1584. 连接所有点的最小费用</a> 1858</li>
<li><a href="https://leetcode.cn/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/" target="_blank">1489. 找到最小生成树里的关键边和伪关键边</a> 2572</li>
<li><a href="https://leetcode.cn/problems/connecting-cities-with-minimum-cost/" target="_blank">1135. 最低成本连通所有城市</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/optimize-water-distribution-in-a-village/" target="_blank">1168. 水资源分配优化</a>（会员题）</li>
</ul>
<h3 id="欧拉路径/欧拉回路：hierholzer"><a class="header-anchor" href="#欧拉路径/欧拉回路：hierholzer" target="_blank"></a> 欧拉路径/欧拉回路：Hierholzer</h3>
<ul>
<li><a href="https://leetcode.cn/problems/reconstruct-itinerary/" target="_blank">332. 重新安排行程</a></li>
<li><a href="https://leetcode.cn/problems/cracking-the-safe/" target="_blank">753. 破解保险箱</a> 2274</li>
<li><a href="https://leetcode.cn/problems/valid-arrangement-of-pairs/" target="_blank">2097. 合法重新排列数对</a> 2651</li>
</ul>
<h3 id="强连通分量/双连通分量：tarjan"><a class="header-anchor" href="#强连通分量/双连通分量：tarjan" target="_blank"></a> 强连通分量/双连通分量：Tarjan</h3>
<ul>
<li><a href="https://leetcode.cn/problems/minimize-malware-spread-ii/" target="_blank">928. 尽量减少恶意软件的传播 II</a> 1985</li>
<li><a href="https://leetcode.cn/problems/critical-connections-in-a-network/" target="_blank">1192. 查找集群内的关键连接</a> 2085</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-days-to-disconnect-island/" target="_blank">1568. 使陆地分离的最少天数</a> 2209</li>
<li><a href="https://leetcode.cn/problems/s5kipK/" target="_blank">LCP 54. 夺回据点</a></li>
</ul>
<h3 id="二分图（染色判定、最大匹配）"><a class="header-anchor" href="#二分图（染色判定、最大匹配）" target="_blank"></a> 二分图（染色判定、最大匹配）</h3>
<p>部分题目做法不止一种。难度仅供参考。</p>
<ul>
<li><a href="https://leetcode.cn/problems/is-graph-bipartite/" target="_blank">785. 判断二分图</a> 1625</li>
<li><a href="https://leetcode.cn/problems/possible-bipartition/" target="_blank">886. 可能的二分法</a> 1795</li>
<li><a href="https://leetcode.cn/problems/maximum-compatibility-score-sum/" target="_blank">1947. 最大兼容性评分和</a></li>
<li><a href="https://leetcode.cn/problems/minimum-xor-sum-of-two-arrays/" target="_blank">1879. 两个数组最小的异或值之和</a> 2145</li>
<li><a href="https://leetcode.cn/problems/maximum-students-taking-exam/" target="_blank">1349. 参加考试的最大学生数</a> 2386</li>
<li><a href="https://leetcode.cn/problems/maximum-and-sum-of-array/" target="_blank">2172. 数组的最大与和</a> 2392</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-connect-two-groups-of-points/" target="_blank">1595. 连通两组点的最小成本</a> 2538</li>
<li><a href="https://leetcode.cn/problems/broken-board-dominoes/" target="_blank">LCP 04. 覆盖</a></li>
<li><a href="https://leetcode.cn/problems/campus-bikes-ii/" target="_blank">1066. 校园自行车分配 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/" target="_blank">2123. 使矩阵中的 1 互不相邻的最小操作数</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-kill-all-monsters/" target="_blank">2403. 杀死所有怪物的最短时间</a>（会员题）</li>
</ul>
<h3 id="网络流"><a class="header-anchor" href="#网络流" target="_blank"></a> 网络流</h3>
<p>做法不止一种。难度仅供参考。</p>
<ul>
<li><a href="https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/" target="_blank">2850. 将石头分散到网格图的最少移动次数</a> 2001</li>
<li><a href="https://leetcode.cn/problems/maximum-students-taking-exam/" target="_blank">1349. 参加考试的最大学生数</a> 2386</li>
<li><a href="https://leetcode.cn/problems/maximum-and-sum-of-array/" target="_blank">2172. 数组的最大与和</a> 2392</li>
<li><a href="https://leetcode.cn/problems/7rLGCR/" target="_blank">LCP 38. 守卫城堡</a></li>
</ul>
<h3 id="其它"><a class="header-anchor" href="#其它" target="_blank"></a> 其它</h3>
<ul>
<li><a href="https://leetcode.cn/problems/flower-planting-with-no-adjacent/" target="_blank">1042. 不邻接植花</a> 1712</li>
<li><a href="https://leetcode.cn/problems/cheapest-flights-within-k-stops/" target="_blank">787. K 站中转内最便宜的航班</a> 1786</li>
<li><a href="https://leetcode.cn/problems/minimum-degree-of-a-connected-trio-in-a-graph/" target="_blank">1761. 一个图中连通三元组的最小度数</a> 2005</li>
<li><a href="https://leetcode.cn/problems/add-edges-to-make-degrees-of-all-nodes-even/" target="_blank">2508. 添加边使所有节点度数都为偶数</a> 2060</li>
<li><a href="https://leetcode.cn/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/" target="_blank">1579. 保证图可完全遍历</a> 2132</li>
<li><a href="https://leetcode.cn/problems/maximum-path-quality-of-a-graph/" target="_blank">2065. 最大化一张图中的路径价值</a> 2178</li>
<li><a href="https://leetcode.cn/problems/checking-existence-of-edge-length-limited-paths/" target="_blank">1697. 检查边长度限制的路径是否存在</a> 2300</li>
<li><a href="https://leetcode.cn/problems/maximum-score-of-a-node-sequence/" target="_blank">2242. 节点序列的最大得分</a> 2304</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-reach-destination-in-time/" target="_blank">1928. 规定时间内到达终点的最小花费</a> 2413</li>
<li><a href="https://leetcode.cn/problems/divide-nodes-into-the-maximum-number-of-groups/" target="_blank">2493. 将节点分成尽可能多的组</a> 2415 <strong>推荐</strong></li>
<li><a href="https://leetcode.cn/problems/count-pairs-of-nodes/" target="_blank">1782. 统计点对的数目</a> 2457</li>
<li><a href="https://leetcode.cn/problems/find-the-celebrity/" target="_blank">277. 搜寻名人</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/checking-existence-of-edge-length-limited-paths-ii/" target="_blank">1724. 检查边长度限制的路径是否存在 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/paths-in-maze-that-lead-to-same-room/" target="_blank">2077. 殊途同归</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/you-le-yuan-de-you-lan-ji-hua/" target="_blank">LCP 16. 游乐园的游览计划</a></li>
</ul>
<p>有关<strong>网格图</strong>的题单，请看<a href="https://leetcode.cn/circle/discuss/YiXPXW/" target="_blank">【题单】网格图（DFS/BFS/综合应用）</a></p>
<p><a href="https://leetcode.cn/circle/discuss/dHn9Vk/" target="_blank">上期题单</a></p>
<p>更多题单，点我个人主页 - 讨论发布。</p>
</div></div>`,
]
export default function () {
    const [selected, setSelected] = useState(0)
    return <Container className="list">
        <div className="justify-content-center p-3 bg-white">
            <ul className="tabs">
                {tabs.map((v, i) => {
                    return <li className={`btn tab ${selected === i ? "selected" : ""}`} onClick={() => {
                        setSelected(i);
                    }}>{v}</li>
                })}
            </ul>
            <List className="w-50" content={contents[selected]}></List>
        </div>
    </Container >
}