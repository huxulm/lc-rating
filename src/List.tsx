import { useEffect, useMemo, useState } from "react";
import List from "./components/List";
import "./list.scss";
import { Container, Row } from "react-bootstrap";

const tabs = ['😀滑动窗口', '😆二分算法', , "😊单调栈", "😉网格图", '😚位运算', "😜图论算法", "动态规划"]
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
`<div class="css-1ia0wcn-ZoomWrapper e13l6k8o9"><div class="e2v1tt3 css-1ayia3m-MarkdownContent"><h3 id="前言"><a class="header-anchor" href="#前言" target="_blank"></a> 前言</h3>
<p align="center"><img src="https://pic.leetcode.cn/1710769943-QukNxy-dp-1.png" alt="dp-1.png" onerror="this.src='data:image/svg+xml,%3Csvg height=\'150\' viewBox=\'0 0 150 150\' width=\'150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z\' fill=\'%23eee\' fill-rule=\'evenodd\' transform=\'translate(-2315 -2217)\'/%3E%3C/svg%3E'; "></p>
<p>掌握动态规划（DP）是没有捷径的，咱们唯一能做的，就是投入时间猛猛刷题。好比学数学，只看书看视频而不做习题，是不能说学会的。</p>
<p>我能做的，是帮你节省找题的时间，并把这些题分类整理好。有着相同套路的题，一起做效率会更高，也更能领悟到 DP 的精髓。所以推荐按照专题刷。</p>
<p>题目已按照难度分排序（右侧数字为难度分）。如果遇到难度很大，题解都看不懂的题目，建议先跳过，二刷的时候再来尝试。</p>
<h3 id="一、入门-dp"><a class="header-anchor" href="#一、入门-dp" target="_blank"></a> 一、入门 DP</h3>
<p align="center"><img src="https://pic.leetcode.cn/1710769845-JRnIfA-dp-2.jpg" alt="dp-2.jpg" onerror="this.src='data:image/svg+xml,%3Csvg height=\'150\' viewBox=\'0 0 150 150\' width=\'150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z\' fill=\'%23eee\' fill-rule=\'evenodd\' transform=\'translate(-2315 -2217)\'/%3E%3C/svg%3E'; "></p>
<p><strong>记忆化搜索</strong>是新手村神器（甚至可以用到游戏后期），推荐先看 <a href="https://leetcode.cn/link/?target=https://b23.tv/72onpYq" target="_blank">动态规划入门：从记忆化搜索到递推</a>。</p>
<p>但记忆化搜索并不是万能的，某些题目只有写成递推，才能结合数据结构等来优化时间复杂度，多数题目还可以优化空间复杂度。所以尽量在写完记忆化搜索后，把递推的代码也写一下。熟练之后直接写递推也可以。</p>
<h4 id="§11-爬楼梯"><a class="header-anchor" href="#§11-爬楼梯" target="_blank"></a> §1.1 爬楼梯</h4>
<ul>
<li><a href="https://leetcode.cn/problems/climbing-stairs/" target="_blank">70. 爬楼梯</a>（<a href="https://leetcode.cn/problems/climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-7zm1/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/min-cost-climbing-stairs/" target="_blank">746. 使用最小花费爬楼梯</a>（<a href="https://leetcode.cn/problems/min-cost-climbing-stairs/solution/jiao-ni-yi-bu-bu-si-kao-dong-tai-gui-hua-j99e/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/combination-sum-iv/" target="_blank">377. 组合总和 Ⅳ</a> 本质是爬楼梯，相当于每次往上爬 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="italic">nums</mtext><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\textit{nums}[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord textit">nums</span></span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 步</li>
<li><a href="https://leetcode.cn/problems/count-ways-to-build-good-strings/" target="_blank">2466. 统计构造好字符串的方案数</a> 1694</li>
<li><a href="https://leetcode.cn/problems/count-number-of-texts/" target="_blank">2266. 统计打字方案数</a> 1857</li>
<li><a href="https://leetcode.cn/problems/number-of-good-binary-strings/" target="_blank">2533. 好二进制字符串的数量</a>（会员题）</li>
</ul>
<h4 id="§12-打家劫舍"><a class="header-anchor" href="#§12-打家劫舍" target="_blank"></a> §1.2 打家劫舍</h4>
<ul>
<li><a href="https://leetcode.cn/problems/house-robber/" target="_blank">198. 打家劫舍</a></li>
<li><a href="https://leetcode.cn/problems/delete-and-earn/" target="_blank">740. 删除并获得点数</a></li>
<li><a href="https://leetcode.cn/problems/count-number-of-ways-to-place-houses/" target="_blank">2320. 统计放置房子的方式数</a> 1608</li>
<li><a href="https://leetcode.cn/problems/house-robber-ii/" target="_blank">213. 打家劫舍 II</a></li>
</ul>
<p><strong>挑战关</strong>：</p>
<ul>
<li><a href="https://leetcode.cn/problems/pizza-with-3n-slices/" target="_blank">1388. 3n 块披萨</a> 2410</li>
<li><a href="https://leetcode.cn/problems/the-number-of-beautiful-subsets/" target="_blank">2597. 美丽子集的数目</a> *用 DP 解决</li>
<li><a href="https://leetcode.cn/problems/count-the-number-of-k-free-subsets/" target="_blank">2638. 统计 K-Free 子集的总数</a>（会员题）上面这题的加强版</li>
</ul>
<h4 id="§13-最大子数组和（最大子段和）"><a class="header-anchor" href="#§13-最大子数组和（最大子段和）" target="_blank"></a> §1.3 最大子数组和（最大子段和）</h4>
<p>有两种做法：</p>
<ol>
<li>定义状态 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 表示以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 结尾的最大子数组和，不和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span></span></span></span> 左边拼起来就是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo>=</mo><mi>a</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]=a[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span></span></span></span> 左边拼起来就是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo>=</mo><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo>+</mo><mi>a</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]=f[i-1]+a[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，取最大值就得到了状态转移方程 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo>=</mo><mi>max</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mtext>−</mtext><mn>1</mn><mo stretchy="false">]</mo><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><mi>a</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]=\max(f[i−1],0)+a[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">max</span><span class="mopen">(</span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mord">−</span><span class="mord">1</span><span class="mclose">]</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，答案为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>max</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\max(f)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">max</span><span class="mopen">(</span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mclose">)</span></span></span></span>。这个做法也叫做 Kadane 算法。</li>
<li>用前缀和解决，具体见 <a href="https://leetcode.cn/problems/maximum-subarray/solution/qian-zhui-he-zuo-fa-ben-zhi-shi-mai-mai-abu71/" target="_blank">题解</a>。</li>
</ol>
<ul>
<li><a href="https://leetcode.cn/problems/maximum-subarray/" target="_blank">53. 最大子数组和</a></li>
<li><a href="https://leetcode.cn/problems/find-the-substring-with-maximum-cost/" target="_blank">2606. 找到最大开销的子字符串</a> 1422</li>
<li><a href="https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/" target="_blank">1749. 任意子数组和的绝对值的最大值</a> 1542</li>
<li><a href="https://leetcode.cn/problems/k-concatenation-maximum-sum/" target="_blank">1191. K 次串联后最大子数组之和</a> 1748</li>
<li><a href="https://leetcode.cn/problems/maximum-sum-circular-subarray/" target="_blank">918. 环形子数组的最大和</a> 1777</li>
<li><a href="https://leetcode.cn/problems/maximum-score-of-spliced-array/" target="_blank">2321. 拼接数组的最大分数</a> 1791</li>
<li><a href="https://leetcode.cn/problems/max-sum-of-rectangle-no-larger-than-k/" target="_blank">363. 矩形区域不超过 K 的最大数值和</a></li>
</ul>
<p><strong>思维扩展</strong>：</p>
<ul>
<li><a href="https://leetcode.cn/problems/maximum-product-subarray/" target="_blank">152. 乘积最大子数组</a></li>
</ul>
<p><strong>挑战关</strong>：</p>
<ul>
<li><a href="https://leetcode.cn/problems/substring-with-largest-variance/" target="_blank">2272. 最大波动的子字符串</a> 2516</li>
</ul>
<h3 id="二、网格图-dp"><a class="header-anchor" href="#二、网格图-dp" target="_blank"></a> 二、网格图 DP</h3>
<p>对于一些二维 DP（例如背包、最长公共子序列），如果把 DP 矩阵画出来，其实状态转移可以视作<strong>在网格图上的移动</strong>。所以在学习相对更抽象的二维 DP 之前，做一些形象的网格图 DP 会让后续的学习更轻松（比如 0-1 背包的空间优化写法为什么要倒序遍历）。</p>
<p><a href="https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/solution/jiao-ni-yi-bu-bu-si-kao-dpcong-hui-su-da-epvl/" target="_blank">讲解</a></p>
<h4 id="§21-基础"><a class="header-anchor" href="#§21-基础" target="_blank"></a> §2.1 基础</h4>
<ul>
<li><a href="https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/" target="_blank">LCR 166. 珠宝的最高价值</a></li>
<li><a href="https://leetcode.cn/problems/unique-paths/" target="_blank">62. 不同路径</a></li>
<li><a href="https://leetcode.cn/problems/unique-paths-ii/" target="_blank">63. 不同路径 II</a></li>
<li><a href="https://leetcode.cn/problems/minimum-path-sum/" target="_blank">64. 最小路径和</a></li>
<li><a href="https://leetcode.cn/problems/triangle/" target="_blank">120. 三角形最小路径和</a></li>
<li><a href="https://leetcode.cn/problems/minimum-falling-path-sum/" target="_blank">931. 下降路径最小和</a> 1573</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid/" target="_blank">2684. 矩阵中移动的最大次数</a> 1626</li>
<li><a href="https://leetcode.cn/problems/minimum-path-cost-in-a-grid/" target="_blank">2304. 网格中的最小路径代价</a> 1658</li>
<li><a href="https://leetcode.cn/problems/minimum-falling-path-sum-ii/" target="_blank">1289. 下降路径最小和 II</a> 1697</li>
</ul>
<h4 id="§22-进阶"><a class="header-anchor" href="#§22-进阶" target="_blank"></a> §2.2 进阶</h4>
<ul>
<li><a href="https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/" target="_blank">1594. 矩阵的最大非负积</a> 1807</li>
<li><a href="https://leetcode.cn/problems/number-of-paths-with-max-score/" target="_blank">1301. 最大得分的路径数目</a> 1853</li>
<li><a href="https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k/" target="_blank">2435. 矩阵中和能被 K 整除的路径</a> 1952</li>
<li><a href="https://leetcode.cn/problems/dungeon-game/" target="_blank">174. 地下城游戏</a></li>
<li><a href="https://leetcode.cn/problems/cherry-pickup/" target="_blank">741. 摘樱桃</a></li>
<li><a href="https://leetcode.cn/problems/cherry-pickup-ii/" target="_blank">1463. 摘樱桃 II</a> 1957</li>
<li><a href="https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/" target="_blank">329. 矩阵中的最长递增路径</a></li>
<li><a href="https://leetcode.cn/problems/number-of-increasing-paths-in-a-grid/" target="_blank">2328. 网格图中递增路径的数目</a> 2001</li>
<li><a href="https://leetcode.cn/problems/check-if-there-is-a-valid-parentheses-string-path/" target="_blank">2267. 检查是否有合法括号字符串路径</a> 2085</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-points-with-cost/" target="_blank">1937. 扣分后的最大得分</a> 2106</li>
<li><a href="https://leetcode.cn/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/" target="_blank">2510. 检查是否有路径经过相同数量的 0 和 1</a>（会员题）</li>
</ul>
<h3 id="三、背包"><a class="header-anchor" href="#三、背包" target="_blank"></a> 三、背包</h3>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV16Y411v7Y6/" target="_blank">0-1 背包 完全背包</a></p>
<h4 id="§31-01-背包"><a class="header-anchor" href="#§31-01-背包" target="_blank"></a> §3.1 0-1 背包</h4>
<p>每个物品只能选一次。</p>
<ul>
<li><a href="https://leetcode.cn/problems/length-of-the-longest-subsequence-that-sums-to-target/" target="_blank">2915. 和为目标值的最长子序列的长度</a> 1659</li>
<li><a href="https://leetcode.cn/contest/sf-tech/problems/cINqyA/" target="_blank">顺丰 02. 小哥派件装载问题</a></li>
<li><a href="https://leetcode.cn/problems/partition-equal-subset-sum/" target="_blank">416. 分割等和子集</a></li>
<li><a href="https://leetcode.cn/problems/target-sum/" target="_blank">494. 目标和</a></li>
<li><a href="https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/" target="_blank">2787. 将一个数字表示成幂的和的方案数</a> 1818</li>
<li><a href="https://leetcode.cn/problems/ones-and-zeroes/" target="_blank">474. 一和零</a>（二维）</li>
<li><a href="https://leetcode.cn/problems/last-stone-weight-ii/" target="_blank">1049. 最后一块石头的重量 II</a> 2092</li>
<li><a href="https://leetcode.cn/problems/closest-dessert-cost/" target="_blank">1774. 最接近目标价格的甜点成本</a></li>
<li><a href="https://leetcode.cn/problems/profitable-schemes/" target="_blank">879. 盈利计划</a> 2204</li>
<li><a href="https://leetcode.cn/problems/find-the-sum-of-the-power-of-all-subsequences/" target="_blank">3082. 求出所有子序列的能量和</a> ~2300</li>
<li><a href="https://leetcode.cn/problems/tallest-billboard/" target="_blank">956. 最高的广告牌</a> 2381</li>
<li><a href="https://leetcode.cn/problems/number-of-great-partitions/" target="_blank">2518. 好分区的数目</a> 2415</li>
<li><a href="https://leetcode.cn/problems/painting-the-walls/" target="_blank">2742. 给墙壁刷油漆</a> 2425</li>
<li><a href="https://leetcode.cn/problems/oPs9Bm/" target="_blank">LCP 47. 入场安检</a></li>
<li><a href="https://leetcode.cn/problems/maximum-profit-from-trading-stocks/" target="_blank">2291. 最大股票收益</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximize-total-tastiness-of-purchased-fruits/" target="_blank">2431. 最大限度地提高购买水果的口味</a>（会员题）</li>
</ul>
<h4 id="§32-完全背包"><a class="header-anchor" href="#§32-完全背包" target="_blank"></a> §3.2 完全背包</h4>
<p>物品可以重复选，无个数限制。</p>
<ul>
<li><a href="https://leetcode.cn/problems/coin-change/" target="_blank">322. 零钱兑换</a></li>
<li><a href="https://leetcode.cn/problems/coin-change-ii/" target="_blank">518. 零钱兑换 II</a></li>
<li><a href="https://leetcode.cn/problems/perfect-squares/" target="_blank">279. 完全平方数</a></li>
<li><a href="https://leetcode.cn/problems/form-largest-integer-with-digits-that-add-up-to-target/" target="_blank">1449. 数位成本和为目标值的最大数字</a> 1927 打印方案</li>
</ul>
<h4 id="§33-多重背包"><a class="header-anchor" href="#§33-多重背包" target="_blank"></a> §3.3 多重背包</h4>
<p>物品可以重复选，有个数限制。</p>
<blockquote>
<p>注：力扣上只有求方案数的题目。</p>
</blockquote>
<ul>
<li><a href="https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/" target="_blank">1155. 掷骰子等于目标和的方法数</a> 1654</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-earn-points/" target="_blank">2585. 获得分数的方法数</a> 1910</li>
<li><a href="https://leetcode.cn/problems/count-of-sub-multisets-with-bounded-sum/" target="_blank">2902. 和带限制的子多重集合的数目</a> 2759</li>
</ul>
<h4 id="§34-分组背包"><a class="header-anchor" href="#§34-分组背包" target="_blank"></a> §3.4 分组背包</h4>
<p>同一组内的物品至多/恰好选一个。</p>
<ul>
<li><a href="https://leetcode.cn/problems/minimize-the-difference-between-target-and-chosen-elements/" target="_blank">1981. 最小化目标值与所选元素的差</a> 2010</li>
<li><a href="https://leetcode.cn/problems/maximum-value-of-k-coins-from-piles/" target="_blank">2218. 从栈中取出 K 个硬币的最大面值和</a> 2158</li>
</ul>
<h3 id="四、经典线性-dp"><a class="header-anchor" href="#四、经典线性-dp" target="_blank"></a> 四、经典线性 DP</h3>
<h4 id="§41-最长公共子序列（lcs）"><a class="header-anchor" href="#§41-最长公共子序列（lcs）" target="_blank"></a> §4.1 最长公共子序列（LCS）</h4>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1TM4y1o7ug/" target="_blank">最长公共子序列 编辑距离</a></p>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 表示对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">[</mo><mo>:</mo><mi>i</mi><mo stretchy="false">]</mo><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">[</mo><mo>:</mo><mi>j</mi><mo stretchy="false">]</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(s[:i],t[:j])</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathdefault">s</span><span class="mopen">[</span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault">t</span><span class="mopen">[</span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span><span class="mclose">)</span></span></span></span> 的求解结果。</p>
<ul>
<li><a href="https://leetcode.cn/problems/longest-common-subsequence/" target="_blank">1143. 最长公共子序列</a></li>
<li><a href="https://leetcode.cn/problems/delete-operation-for-two-strings/" target="_blank">583. 两个字符串的删除操作</a></li>
<li><a href="https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings/" target="_blank">712. 两个字符串的最小 ASCII 删除和</a></li>
<li><a href="https://leetcode.cn/problems/edit-distance/" target="_blank">72. 编辑距离</a></li>
<li><a href="https://leetcode.cn/problems/interleaving-string/" target="_blank">97. 交错字符串</a></li>
<li><a href="https://leetcode.cn/problems/distinct-subsequences/" target="_blank">115. 不同的子序列</a></li>
<li><a href="https://leetcode.cn/problems/uncrossed-lines/" target="_blank">1035. 不相交的线</a> 1806</li>
<li><a href="https://leetcode.cn/problems/max-dot-product-of-two-subsequences/" target="_blank">1458. 两个子序列的最大点积</a> 1824</li>
<li><a href="https://leetcode.cn/problems/shortest-common-supersequence/" target="_blank">1092. 最短公共超序列</a> 1977</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/" target="_blank">1639. 通过给定词典构造目标字符串的方案数</a> 2082</li>
<li><a href="https://leetcode.cn/problems/wildcard-matching/" target="_blank">44. 通配符匹配</a></li>
<li><a href="https://leetcode.cn/problems/regular-expression-matching/" target="_blank">10. 正则表达式匹配</a></li>
</ul>
<h4 id="§42-最长递增子序列（lis）"><a class="header-anchor" href="#§42-最长递增子序列（lis）" target="_blank"></a> §4.2 最长递增子序列（LIS）</h4>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ub411Q7sB/" target="_blank">最长递增子序列</a></p>
<p>做法有很多：</p>
<ol>
<li>枚举选哪个（见讲解）。</li>
<li>二分贪心（见讲解）。</li>
<li>计算 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">a</span></span></span></span> 和把 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">a</span></span></span></span> 排序后的数组 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext mathvariant="italic">sortedA</mtext></mrow><annotation encoding="application/x-tex">\textit{sortedA}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord text"><span class="mord textit">sortedA</span></span></span></span></span> 的最长公共子序列。</li>
<li>数据结构优化（见 2407 题）。</li>
</ol>
<ul>
<li><a href="https://leetcode.cn/problems/longest-increasing-subsequence/" target="_blank">300. 最长递增子序列</a></li>
<li><a href="https://leetcode.cn/problems/number-of-longest-increasing-subsequence/" target="_blank">673. 最长递增子序列的个数</a></li>
<li><a href="https://leetcode.cn/problems/sorting-three-groups/" target="_blank">2826. 将三个组排序</a> 1721</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/" target="_blank">1671. 得到山形数组的最少删除次数</a> 1913</li>
<li><a href="https://leetcode.cn/problems/find-the-longest-valid-obstacle-course-at-each-position/" target="_blank">1964. 找出到每个位置为止最长的有效障碍赛跑路线</a> 1933</li>
<li><a href="https://leetcode.cn/problems/best-team-with-no-conflicts/" target="_blank">1626. 无矛盾的最佳球队</a> 2027</li>
<li><a href="https://leetcode.cn/problems/russian-doll-envelopes/" target="_blank">354. 俄罗斯套娃信封问题</a>（二维 LIS）</li>
<li><a href="https://leetcode.cn/problems/maximum-height-by-stacking-cuboids/" target="_blank">1691. 堆叠长方体的最大高度</a> 2172</li>
<li><a href="https://leetcode.cn/problems/delete-columns-to-make-sorted-iii/" target="_blank">960. 删列造序 III</a> 2247</li>
<li><a href="https://leetcode.cn/problems/longest-increasing-subsequence-ii/" target="_blank">2407. 最长递增子序列 II</a> 2280</li>
<li><a href="https://leetcode.cn/problems/make-array-strictly-increasing/" target="_blank">1187. 使数组严格递增</a> 2316</li>
<li><a href="https://leetcode.cn/problems/minimum-operations-to-make-a-subsequence/" target="_blank">1713. 得到子序列的最少操作次数</a> 2351</li>
</ul>
<p><strong>思维扩展</strong>：</p>
<ul>
<li><a href="https://leetcode.cn/problems/largest-divisible-subset/" target="_blank">368. 最大整除子集</a></li>
</ul>
<p><strong>思考题</strong>：</p>
<p>给定整数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span></span></span></span>，构造一个数组 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">a</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">a</span></span></span></span> 恰好有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span></span></span></span> 个最长递增子序列。</p>
<p><a href="https://leetcode.cn/problems/number-of-longest-increasing-subsequence/description/comments/2218054" target="_blank">解答</a></p>
<h3 id="五、状态机-dp"><a class="header-anchor" href="#五、状态机-dp" target="_blank"></a> 五、状态机 DP</h3>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1ho4y1W7QK/" target="_blank">状态机 DP</a></p>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 表示前缀 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mo>:</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[:i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 在状态 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.85396em;vertical-align:-0.19444em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span></span></span></span> 下的最优值。一般 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.85396em;vertical-align:-0.19444em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span></span></span></span> 都很小。代表题目是「买卖股票」系列。</p>
<ul>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/" target="_blank">121. 买卖股票的最佳时机</a></li>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/" target="_blank">122. 买卖股票的最佳时机 II</a></li>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/" target="_blank">123. 买卖股票的最佳时机 III</a></li>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/" target="_blank">188. 买卖股票的最佳时机 IV</a></li>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/" target="_blank">309. 买卖股票的最佳时机含冷冻期</a></li>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/" target="_blank">714. 买卖股票的最佳时机含手续费</a></li>
<li><a href="https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/" target="_blank">1493. 删掉一个元素以后全为 1 的最长子数组</a> 1423</li>
<li><a href="https://leetcode.cn/problems/count-number-of-teams/" target="_blank">1395. 统计作战单位数</a></li>
<li><a href="https://leetcode.cn/problems/construct-the-longest-new-string/" target="_blank">2745. 构造最长的新字符串</a> 1607</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-select-buildings/" target="_blank">2222. 选择建筑的方案数</a> 1657</li>
<li><a href="https://leetcode.cn/problems/wiggle-subsequence/" target="_blank">376. 摆动序列</a></li>
<li><a href="https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/" target="_blank">1567. 乘积为正数的最长子数组长度</a> 1710</li>
<li><a href="https://leetcode.cn/problems/maximum-non-negative-product-in-a-matrix/" target="_blank">1594. 矩阵的最大非负积</a></li>
<li><a href="https://leetcode.cn/problems/sorting-three-groups/" target="_blank">2826. 将三个组排序</a> 1721</li>
<li><a href="https://leetcode.cn/problems/visit-array-positions-to-maximize-score/" target="_blank">2786. 访问数组中的位置使分数最大</a> 1733</li>
<li><a href="https://leetcode.cn/problems/greatest-sum-divisible-by-three/" target="_blank">1262. 可被三整除的最大和</a> 1762</li>
<li><a href="https://leetcode.cn/problems/largest-multiple-of-three/" target="_blank">1363. 形成三的最大倍数</a></li>
<li><a href="https://leetcode.cn/problems/maximum-alternating-subsequence-sum/" target="_blank">1911. 最大子序列交替和</a> 1786</li>
<li><a href="https://leetcode.cn/problems/longest-non-decreasing-subarray-from-two-arrays/" target="_blank">2771. 构造最长非递减子数组</a> 1792</li>
<li><a href="https://leetcode.cn/problems/maximum-subarray-sum-with-one-deletion/" target="_blank">1186. 删除一次得到子数组最大和</a> 1799</li>
<li><a href="https://leetcode.cn/problems/knight-dialer/" target="_blank">935. 骑士拨号器</a></li>
<li><a href="https://leetcode.cn/problems/minimum-increment-operations-to-make-array-beautiful/" target="_blank">2919. 使数组变美的最小增量运算数</a> 2031</li>
<li><a href="https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/" target="_blank">801. 使序列递增的最小交换次数</a> 2066</li>
<li><a href="https://leetcode.cn/problems/count-number-of-special-subsequences/" target="_blank">1955. 统计特殊子序列的数目</a> 2125</li>
<li><a href="https://leetcode.cn/problems/find-the-maximum-sum-of-node-values/" target="_blank">3068. 最大节点价值之和</a> ~2300</li>
<li><a href="https://leetcode.cn/problems/UlBDOe/" target="_blank">LCP 19. 秋叶收藏集</a></li>
<li><a href="https://leetcode.cn/problems/paint-fence/" target="_blank">276. 栅栏涂色</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximum-subarray-sum-after-one-operation/" target="_blank">1746. 经过一次操作后的最大子数组和</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximum-alternating-subarray-sum/" target="_blank">2036. 最大交替子数组和</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-costs-using-the-train-line/" target="_blank">2361. 乘坐火车路线的最少费用</a>（会员题）</li>
</ul>
<h3 id="六、划分型-dp"><a class="header-anchor" href="#六、划分型-dp" target="_blank"></a> 六、划分型 DP</h3>
<h4 id="§61-判定能否划分"><a class="header-anchor" href="#§61-判定能否划分" target="_blank"></a> §6.1 判定能否划分</h4>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 表示长为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span></span></span></span> 的前缀 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mo>:</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[:i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 能否划分。</p>
<p>枚举最后一个子数组的左端点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>L</mi></mrow><annotation encoding="application/x-tex">L</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault">L</span></span></span></span>，从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>L</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[L]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">L</span><span class="mclose">]</span></span></span></span> 转移到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，并考虑 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mi>L</mi><mo>:</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[L:j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">L</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 是否满足要求。</p>
<ul>
<li><a href="https://leetcode.cn/problems/check-if-there-is-a-valid-partition-for-the-array/" target="_blank">2369. 检查数组是否存在有效划分</a> 1780</li>
<li><a href="https://leetcode.cn/problems/word-break/" target="_blank">139. 单词拆分</a></li>
</ul>
<h4 id="§62-计算划分个数"><a class="header-anchor" href="#§62-计算划分个数" target="_blank"></a> §6.2 计算划分个数</h4>
<p>计算最少（最多）可以划分出的子数组个数、划分方案数等。</p>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 表示长为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span></span></span></span> 的前缀 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mo>:</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[:i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 在题目约束下，分割出的最少（最多）子数组个数（或者定义成分割方案数）。</p>
<p>枚举最后一个子数组的左端点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>L</mi></mrow><annotation encoding="application/x-tex">L</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault">L</span></span></span></span>，从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>L</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[L]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">L</span><span class="mclose">]</span></span></span></span> 转移到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，并考虑 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mi>L</mi><mo>:</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[L:j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">L</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 对最优解的影响。</p>
<ul>
<li><a href="https://leetcode.cn/problems/palindrome-partitioning-ii/" target="_blank">132. 分割回文串 II</a></li>
<li><a href="https://leetcode.cn/problems/extra-characters-in-a-string/" target="_blank">2707. 字符串中的额外字符</a> 1736</li>
<li><a href="https://leetcode.cn/problems/partition-string-into-minimum-beautiful-substrings/" target="_blank">2767. 将字符串分割为最少的美丽子字符串</a> 1865</li>
<li><a href="https://leetcode.cn/problems/decode-ways/" target="_blank">91. 解码方法</a></li>
<li><a href="https://leetcode.cn/problems/decode-ways-ii/" target="_blank">639. 解码方法 II</a></li>
<li><a href="https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/" target="_blank">LCR 165. 解密数字</a></li>
<li><a href="https://leetcode.cn/problems/restore-the-array/" target="_blank">1416. 恢复数组</a> 1920</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/" target="_blank">2472. 不重叠回文子字符串的最大数目</a> 2013</li>
<li><a href="https://leetcode.cn/problems/filling-bookcase-shelves/" target="_blank">1105. 填充书架</a> 2014</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-split-an-array/" target="_blank">2547. 拆分数组的最小代价</a> 2020</li>
<li><a href="https://leetcode.cn/problems/maximum-deletions-on-a-string/" target="_blank">2430. 对字母串可执行的最大删除数</a> 2102</li>
<li><a href="https://leetcode.cn/problems/minimum-total-distance-traveled/" target="_blank">2463. 最小移动总距离</a> 2454</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-convert-string-ii/" target="_blank">2977. 转换字符串的最小成本 II</a> 2696</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-separate-sentence-into-rows/" target="_blank">2052. 将句子分隔成行的最低成本</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-subarrays-in-a-valid-split/" target="_blank">2464. 有效分割中的最少子数组数目</a>（会员题）</li>
</ul>
<h4 id="§63-约束划分个数"><a class="header-anchor" href="#§63-约束划分个数" target="_blank"></a> §6.3 约束划分个数</h4>
<p>将数组分成（恰好/至多）<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span></span></span></span> 个连续子数组，计算与这些子数组有关的最优值。</p>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 表示将长为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.85396em;vertical-align:-0.19444em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span></span></span></span> 的前缀 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mo>:</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[:j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 分成 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span></span></span></span> 个连续子数组所得到的最优解。</p>
<p>枚举最后一个子数组的左端点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>L</mi></mrow><annotation encoding="application/x-tex">L</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault">L</span></span></span></span>，从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>L</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i-1][L]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault">L</span><span class="mclose">]</span></span></span></span> 转移到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span>，并考虑 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo stretchy="false">[</mo><mi>L</mi><mo>:</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">a[L:j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">a</span><span class="mopen">[</span><span class="mord mathdefault">L</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 对最优解的影响。</p>
<ul>
<li><a href="https://leetcode.cn/problems/split-array-largest-sum/" target="_blank">410. 分割数组的最大值</a></li>
<li><a href="https://leetcode.cn/problems/partition-array-for-maximum-sum/" target="_blank">1043. 分隔数组以得到最大和</a> 1916</li>
<li><a href="https://leetcode.cn/problems/palindrome-partitioning-iv/" target="_blank">1745. 分割回文串 IV</a> 1925</li>
<li><a href="https://leetcode.cn/problems/largest-sum-of-averages/" target="_blank">813. 最大平均值和的分组</a> 1937</li>
<li><a href="https://leetcode.cn/problems/palindrome-partitioning-iii/" target="_blank">1278. 分割回文串 III</a> 1979</li>
<li><a href="https://leetcode.cn/problems/minimum-difficulty-of-a-job-schedule/" target="_blank">1335. 工作计划的最低难度</a> 2035</li>
<li><a href="https://leetcode.cn/problems/paint-house-iii/" target="_blank">1473. 粉刷房子 III</a> 2056</li>
<li><a href="https://leetcode.cn/problems/allocate-mailboxes/" target="_blank">1478. 安排邮筒</a> 2190</li>
<li><a href="https://leetcode.cn/problems/minimum-total-space-wasted-with-k-resizing-operations/" target="_blank">1959. K 次调整数组大小浪费的最小总空间</a> 2310 *转换</li>
<li><a href="https://leetcode.cn/problems/number-of-beautiful-partitions/" target="_blank">2478. 完美分割的方案数</a> 2344</li>
<li><a href="https://leetcode.cn/problems/maximum-strength-of-k-disjoint-subarrays/" target="_blank">3077. K 个不相交子数组的最大能量值</a></li>
<li><a href="https://leetcode.cn/problems/minimum-changes-to-make-k-semi-palindromes/" target="_blank">2911. 得到 K 个半回文串的最少修改次数</a> 2608</li>
</ul>
<h4 id="§64-不相交区间"><a class="header-anchor" href="#§64-不相交区间" target="_blank"></a> §6.4 不相交区间</h4>
<ul>
<li><a href="https://leetcode.cn/problems/maximize-the-profit-as-the-salesman/" target="_blank">2830. 销售利润最大化</a> 1851</li>
<li><a href="https://leetcode.cn/problems/maximum-earnings-from-taxi/" target="_blank">2008. 出租车的最大盈利</a> 1872</li>
<li><a href="https://leetcode.cn/problems/maximum-profit-in-job-scheduling/" target="_blank">1235. 规划兼职工作</a> 2023</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended-ii/" target="_blank">1751. 最多可以参加的会议数目 II</a> 2041</li>
</ul>
<h3 id="七、其它线性-dp"><a class="header-anchor" href="#七、其它线性-dp" target="_blank"></a> 七、其它线性 DP</h3>
<h4 id="§71-一维"><a class="header-anchor" href="#§71-一维" target="_blank"></a> §7.1 一维</h4>
<p>发生在前缀/后缀之间的转移，例如从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i-1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span> 转移到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，或者从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 转移到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>。</p>
<ul>
<li><a href="https://leetcode.cn/problems/minimum-number-of-coins-for-fruits/" target="_blank">2944. 购买水果需要的最少金币数</a> 1709</li>
<li><a href="https://leetcode.cn/problems/solving-questions-with-brainpower/" target="_blank">2140. 解决智力问题</a> 1709</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-for-tickets/" target="_blank">983. 最低票价</a> 1786</li>
<li><a href="https://leetcode.cn/problems/longest-unequal-adjacent-groups-subsequence-ii/" target="_blank">2901. 最长相邻不相等子序列 II</a> 1899</li>
<li><a href="https://leetcode.cn/problems/apply-operations-to-make-two-strings-equal/" target="_blank">2896. 执行操作使两个字符串相等</a> 2172</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/" target="_blank">2167. 移除所有载有违禁货物车厢所需的最少时间</a> 2219</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-finish-the-race/" target="_blank">2188. 完成比赛的最少时间</a> 2315</li>
<li><a href="https://leetcode.cn/problems/handshakes-that-dont-cross/" target="_blank">1259. 不相交的握手</a>（会员题）</li>
</ul>
<h4 id="§72-特殊子序列"><a class="header-anchor" href="#§72-特殊子序列" target="_blank"></a> §7.2 特殊子序列</h4>
<ul>
<li><a href="https://leetcode.cn/problems/longest-square-streak-in-an-array/" target="_blank">2501. 数组中最长的方波</a> 1480</li>
<li><a href="https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference/" target="_blank">1218. 最长定差子序列</a> 1597</li>
<li><a href="https://leetcode.cn/problems/longest-arithmetic-subsequence/" target="_blank">1027. 最长等差数列</a> 1759</li>
<li><a href="https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/" target="_blank">873. 最长的斐波那契子序列的长度</a> 1911</li>
<li><a href="https://leetcode.cn/problems/arithmetic-slices-ii-subsequence/" target="_blank">446. 等差数列划分 II - 子序列</a></li>
<li><a href="https://leetcode.cn/problems/longest-string-chain/" target="_blank">1048. 最长字符串链</a></li>
</ul>
<h4 id="§73-矩阵快速幂优化"><a class="header-anchor" href="#§73-矩阵快速幂优化" target="_blank"></a> §7.3 矩阵快速幂优化</h4>
<p>除了 2851 题必须用矩阵快速幂优化以外，其余题目都可以用线性 DP 做出。</p>
<ul>
<li><a href="https://leetcode.cn/problems/climbing-stairs/" target="_blank">70. 爬楼梯</a></li>
<li><a href="https://leetcode.cn/problems/fibonacci-number/" target="_blank">509. 斐波那契数</a></li>
<li><a href="https://leetcode.cn/problems/n-th-tribonacci-number/" target="_blank">1137. 第 N 个泰波那契数</a></li>
<li><a href="https://leetcode.cn/problems/count-vowels-permutation/" target="_blank">1220. 统计元音字母序列的数目</a></li>
<li><a href="https://leetcode.cn/problems/student-attendance-record-ii/" target="_blank">552. 学生出勤记录 II</a></li>
<li><a href="https://leetcode.cn/problems/domino-and-tromino-tiling/" target="_blank">790. 多米诺和托米诺平铺</a></li>
<li><a href="https://leetcode.cn/problems/string-transformation/" target="_blank">2851. 字符串转换</a> 2858</li>
</ul>
<h4 id="§74-多维"><a class="header-anchor" href="#§74-多维" target="_blank"></a> §7.4 多维</h4>
<ul>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/" target="_blank">2400. 恰好移动 k 步到达某一位置的方法数目</a> 1751</li>
<li><a href="https://leetcode.cn/problems/longest-ideal-subsequence/" target="_blank">2370. 最长理想子序列</a> 1835</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/" target="_blank">1269. 停在原地的方案数</a> 1854</li>
<li><a href="https://leetcode.cn/problems/out-of-boundary-paths/" target="_blank">576. 出界的路径数</a></li>
<li><a href="https://leetcode.cn/problems/frog-jump/" target="_blank">403. 青蛙过河</a></li>
<li><a href="https://leetcode.cn/problems/dice-roll-simulation/" target="_blank">1223. 掷骰子模拟</a> 2008</li>
<li><a href="https://leetcode.cn/problems/minimum-distance-to-type-a-word-using-two-fingers/" target="_blank">1320. 二指输入的的最小距离</a> 2028</li>
<li><a href="https://leetcode.cn/problems/count-all-possible-routes/" target="_blank">1575. 统计所有可行路径</a> 2055</li>
<li><a href="https://leetcode.cn/problems/number-of-distinct-roll-sequences/" target="_blank">2318. 不同骰子序列的数目</a> 2090</li>
<li><a href="https://leetcode.cn/problems/count-fertile-pyramids-in-a-land/" target="_blank">2088. 统计农场中肥沃金字塔的数目</a> 2105</li>
<li><a href="https://leetcode.cn/problems/minimum-white-tiles-after-covering-with-carpets/" target="_blank">2209. 用地毯覆盖后的最少白色砖块</a> 2106</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-of-cutting-a-pizza/" target="_blank">1444. 切披萨的方案数</a> 2127</li>
<li><a href="https://leetcode.cn/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/" target="_blank">1420. 生成数组</a> 2176</li>
<li><a href="https://leetcode.cn/problems/k-inverse-pairs-array/" target="_blank">629. K 个逆序对数组</a></li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/" target="_blank">1866. 恰有 K 根木棍可以看到的排列数目</a> 2333</li>
<li><a href="https://leetcode.cn/problems/selling-pieces-of-wood/" target="_blank">2312. 卖木头块</a> 2363</li>
<li><a href="https://leetcode.cn/problems/super-egg-drop/" target="_blank">887. 鸡蛋掉落</a> 2377</li>
<li><a href="https://leetcode.cn/problems/egg-drop-with-2-eggs-and-n-floors/" target="_blank">1884. 鸡蛋掉落-两枚鸡蛋</a></li>
<li><a href="https://leetcode.cn/problems/pizza-with-3n-slices/" target="_blank">1388. 3n 块披萨</a> 2410</li>
<li><a href="https://leetcode.cn/problems/the-earliest-and-latest-rounds-where-players-compete/" target="_blank">1900. 最佳运动员的比拼回合</a> 2455</li>
<li><a href="https://leetcode.cn/problems/minimum-skips-to-arrive-at-meeting-on-time/" target="_blank">1883. 准时抵达会议现场的最小跳过休息次数</a> 2588 避免浮点运算的技巧</li>
<li><a href="https://leetcode.cn/problems/ZbAuEH/" target="_blank">LCP 57. 打地鼠</a></li>
<li><a href="https://leetcode.cn/problems/paint-house/" target="_blank">256. 粉刷房子</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/paint-house-ii/" target="_blank">265. 粉刷房子 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximum-vacation-days/" target="_blank">568. 最大休假天数</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/count-ways-to-distribute-candies/" target="_blank">1692. 计算分配糖果的不同方式</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/choose-numbers-from-two-arrays-in-range/" target="_blank">2143. 在两个数组的区间中选取数字</a>（会员题）</li>
</ul>
<h3 id="八、区间-dp"><a class="header-anchor" href="#八、区间-dp" target="_blank"></a> 八、区间 DP</h3>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1Gs4y1E7EU/" target="_blank">区间 DP</a></p>
<p>从数组的左右两端不断缩短，求解关于某段下标区间的最优值。</p>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i][j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 表示下标区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>i</mi><mo separator="true">,</mo><mi>j</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">[i,j]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault" style="margin-right:0.05724em;">j</span><span class="mclose">]</span></span></span></span> 的最优值。</p>
<h4 id="§81-最长回文子序列"><a class="header-anchor" href="#§81-最长回文子序列" target="_blank"></a> §8.1 最长回文子序列</h4>
<ul>
<li><a href="https://leetcode.cn/problems/longest-palindromic-subsequence/" target="_blank">516. 最长回文子序列</a></li>
<li><a href="https://leetcode.cn/problems/count-different-palindromic-subsequences/" target="_blank">730. 统计不同回文子序列</a></li>
<li><a href="https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/" target="_blank">1312. 让字符串成为回文串的最少插入次数</a> 1787</li>
<li><a href="https://leetcode.cn/problems/maximize-palindrome-length-from-subsequences/" target="_blank">1771. 由子序列构造的最长回文串的长度</a> 2182</li>
<li><a href="https://leetcode.cn/problems/longest-palindromic-subsequence-ii/" target="_blank">1682. 最长回文子序列 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/valid-palindrome-iii/" target="_blank">1216. 验证回文串 III</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/palindrome-removal/" target="_blank">1246. 删除回文子数组</a>（会员题）</li>
</ul>
<h4 id="§82-其它区间-dp"><a class="header-anchor" href="#§82-其它区间-dp" target="_blank"></a> §8.2 其它区间 DP</h4>
<ul>
<li><a href="https://leetcode.cn/problems/longest-palindromic-substring/" target="_blank">5. 最长回文子串</a></li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-operations-with-the-same-score-ii/" target="_blank">3040. 相同分数的最大操作数目 II</a> 1709</li>
<li><a href="https://leetcode.cn/problems/guess-number-higher-or-lower-ii/" target="_blank">375. 猜数字大小 II</a></li>
<li><a href="https://leetcode.cn/problems/minimum-cost-tree-from-leaf-values/" target="_blank">1130. 叶值的最小代价生成树</a> 1919</li>
<li><a href="https://leetcode.cn/problems/unique-binary-search-trees/" target="_blank">96. 不同的二叉搜索树</a></li>
<li><a href="https://leetcode.cn/problems/maximum-score-from-performing-multiplication-operations/" target="_blank">1770. 执行乘法运算的最大分数</a> 2068</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/" target="_blank">1547. 切棍子的最小成本</a> 2116</li>
<li><a href="https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/solution/shi-pin-jiao-ni-yi-bu-bu-si-kao-dong-tai-aty6/" target="_blank">1039. 多边形三角剖分的最低得分</a> 2130</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-merge-stones/" target="_blank">1000. 合并石头的最低成本</a> 2423</li>
<li><a href="https://leetcode.cn/problems/the-score-of-students-solving-math-expression/" target="_blank">2019. 解出数学表达式的学生分数</a> 2584</li>
<li><a href="https://leetcode.cn/problems/scramble-string/" target="_blank">87. 扰乱字符串</a></li>
<li><a href="https://leetcode.cn/problems/burst-balloons/" target="_blank">312. 戳气球</a></li>
<li><a href="https://leetcode.cn/problems/strange-printer/" target="_blank">664. 奇怪的打印机</a></li>
<li><a href="https://leetcode.cn/problems/remove-boxes/" target="_blank">546. 移除盒子</a> 同 CF1107E，可能是力扣上最难的 DP</li>
<li><a href="https://leetcode.cn/problems/encode-string-with-shortest-length/" target="_blank">471. 编码最短长度的字符串</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-removal-queries-that-can-be-processed-i/" target="_blank">3018. 可处理的最大删除操作数 I</a>（会员题）</li>
</ul>
<h3 id="九、状态压缩-dp（状压-dp）"><a class="header-anchor" href="#九、状态压缩-dp（状压-dp）" target="_blank"></a> 九、状态压缩 DP（状压 DP）</h3>
<p>推荐先阅读：<a href="https://leetcode.cn/circle/discuss/CaOJ45/" target="_blank">从集合论到位运算，常见位运算技巧分类总结！</a></p>
<h4 id="§91-排列型-①-相邻无关"><a class="header-anchor" href="#§91-排列型-①-相邻无关" target="_blank"></a> §9.1 排列型 ① 相邻无关</h4>
<p>暴力做法是枚举数组 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">a</span></span></span></span> 的所有排列，对每个排列计算和题目有关的值，时间复杂度（通常来说）是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo>⋅</mo><mi>n</mi><mo stretchy="false">!</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n\cdot n!)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">n</span><span class="mclose">!</span><span class="mclose">)</span></span></span></span>。可以解决 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>≤</mo><mn>10</mn></mrow><annotation encoding="application/x-tex">n\le 10</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719400000000001em;vertical-align:-0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span> 的问题。</p>
<p>状压 DP 可以把时间复杂度（通常来说）优化至 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n\cdot 2^n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.664392em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>。可以解决 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>≤</mo><mn>20</mn></mrow><annotation encoding="application/x-tex">n\le 20</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719400000000001em;vertical-align:-0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">2</span><span class="mord">0</span></span></span></span> 的问题。</p>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>S</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[S]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span><span class="mclose">]</span></span></span></span> 表示已经排列好的元素（下标）集合为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi></mrow><annotation encoding="application/x-tex">S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span></span></span></span> 时，和题目有关的最优值。通过枚举当前位置要填的元素来转移。</p>
<p>注意不需要额外的状态表示当前要填第几个位置，因为集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi></mrow><annotation encoding="application/x-tex">S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span></span></span></span> 的大小就是当前要填的位置。</p>
<blockquote>
<p>注：部分题目可以爆搜，难度分仅供参考。</p>
</blockquote>
<ul>
<li><a href="https://leetcode.cn/problems/beautiful-arrangement/" target="_blank">526. 优美的排列</a></li>
<li><a href="https://leetcode.cn/problems/minimum-xor-sum-of-two-arrays/" target="_blank">1879. 两个数组最小的异或值之和</a> 2145</li>
<li><a href="https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/" target="_blank">2850. 将石头分散到网格图的最少移动次数</a></li>
<li><a href="https://leetcode.cn/problems/maximum-compatibility-score-sum/" target="_blank">1947. 最大兼容性评分和</a></li>
<li><a href="https://leetcode.cn/problems/maximize-score-after-n-operations/" target="_blank">1799. N 次操作后的最大分数和</a></li>
<li><a href="https://leetcode.cn/problems/maximum-and-sum-of-array/" target="_blank">2172. 数组的最大与和</a> 2392</li>
<li><a href="https://leetcode.cn/problems/campus-bikes-ii/" target="_blank">1066. 校园自行车分配 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/number-of-self-divisible-permutations/" target="_blank">2992. 自整除排列的数量</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-kill-all-monsters/" target="_blank">2403. 杀死所有怪物的最短时间</a>（会员题）</li>
</ul>
<h4 id="§92-排列型-②-相邻相关"><a class="header-anchor" href="#§92-排列型-②-相邻相关" target="_blank"></a> §9.2 排列型 ② 相邻相关</h4>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>S</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[S][i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 表示已经排列好的元素（下标）集合为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi></mrow><annotation encoding="application/x-tex">S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span></span></span></span>，且上一个填的元素（下标）为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span></span></span></span> 时，和题目有关的最优值。通过枚举当前位置要填的元素来转移。</p>
<ul>
<li><a href="https://leetcode.cn/problems/number-of-squareful-arrays/" target="_blank">996. 正方形数组的数目</a> 1932</li>
<li><a href="https://leetcode.cn/problems/special-permutations/" target="_blank">2741. 特别的排列</a> 2021</li>
<li><a href="https://leetcode.cn/problems/minimum-incompatibility/" target="_blank">1681. 最小不兼容性</a> 2390</li>
</ul>
<h4 id="§93-旅行商问题（tsp）"><a class="header-anchor" href="#§93-旅行商问题（tsp）" target="_blank"></a> §9.3 旅行商问题（TSP）</h4>
<p>本质上就是排列型 ②。</p>
<ul>
<li><a href="https://leetcode.cn/problems/find-the-shortest-superstring/" target="_blank">943. 最短超级串</a> 2186</li>
<li><a href="https://leetcode.cn/problems/shortest-path-visiting-all-nodes/" target="_blank">847. 访问所有节点的最短路径</a> 2201</li>
<li><a href="https://leetcode.cn/problems/xun-bao/" target="_blank">LCP 13. 寻宝</a></li>
<li><a href="https://leetcode.cn/problems/maximum-cost-of-trip-with-k-highways/" target="_blank">2247. K 条高速公路的最大旅行费用</a>（会员题）</li>
</ul>
<h4 id="§94-枚举子集的子集"><a class="header-anchor" href="#§94-枚举子集的子集" target="_blank"></a> §9.4 枚举子集的子集</h4>
<p>一般定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>S</mi><mo stretchy="false">]</mo><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[S][i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span><span class="mclose">]</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 表示已选（未选）子集为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi></mrow><annotation encoding="application/x-tex">S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span></span></span></span> 时，和题目有关的最优值。通过枚举 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi></mrow><annotation encoding="application/x-tex">S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span></span></span></span>（或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi></mrow><annotation encoding="application/x-tex">S</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.05764em;">S</span></span></span></span> 的补集）的子集来转移。</p>
<ul>
<li><a href="https://leetcode.cn/problems/fair-distribution-of-cookies/" target="_blank">2305. 公平分发饼干</a> 1887</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-work-sessions-to-finish-the-tasks/" target="_blank">1986. 完成任务的最少工作时间段</a> 1995</li>
<li><a href="https://leetcode.cn/problems/parallel-courses-ii/" target="_blank">1494. 并行课程 II</a> 2082</li>
<li><a href="https://leetcode.cn/problems/find-minimum-time-to-finish-all-jobs/" target="_blank">1723. 完成所有工作的最短时间</a> 2284</li>
<li><a href="https://leetcode.cn/problems/distribute-repeating-integers/" target="_blank">1655. 分配重复整数</a> 2307</li>
<li><a href="https://leetcode.cn/problems/maximum-students-taking-exam/" target="_blank">1349. 参加考试的最大学生数</a> 2386</li>
<li><a href="https://leetcode.cn/problems/minimum-incompatibility/" target="_blank">1681. 最小不兼容性</a> 2390 有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n^2\cdot 2^n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathdefault">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.664392em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 做法</li>
<li><a href="https://leetcode.cn/problems/count-the-number-of-square-free-subsets/" target="_blank">2572. 无平方子集计数</a> 2420</li>
<li><a href="https://leetcode.cn/problems/the-number-of-good-subsets/" target="_blank">1994. 好子集的数目</a> 2465</li>
<li><a href="https://leetcode.cn/problems/broken-board-dominoes/" target="_blank">LCP 04. 覆盖</a></li>
<li><a href="https://leetcode.cn/problems/EJvmW4/" target="_blank">LCP 53. 守护太空城</a></li>
<li><a href="https://leetcode.cn/problems/optimal-account-balancing/" target="_blank">465. 最优账单平衡</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-lines-to-cover-points/" target="_blank">2152. 穿过所有点的所需最少直线数量</a>（会员题）</li>
</ul>
<h4 id="§95-其它状压-dp"><a class="header-anchor" href="#§95-其它状压-dp" target="_blank"></a> §9.5 其它状压 DP</h4>
<ul>
<li><a href="https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/" target="_blank">698. 划分为k个相等的子集</a></li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-paint-n-3-grid/" target="_blank">1411. 给 N x 3 网格图涂色的方案数</a> 1845</li>
<li><a href="https://leetcode.cn/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/" target="_blank">2002. 两个回文子序列长度的最大乘积</a> 1869</li>
<li><a href="https://leetcode.cn/problems/painting-a-grid-with-three-different-colors/" target="_blank">1931. 用三种不同颜色为网格涂色</a> 2170</li>
<li><a href="https://leetcode.cn/problems/smallest-sufficient-team/" target="_blank">1125. 最小的必要团队</a> 2251</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-wear-different-hats-to-each-other/" target="_blank">1434. 每个人戴不同帽子的方案数</a> 2273</li>
<li><a href="https://leetcode.cn/problems/stickers-to-spell-word/" target="_blank">691. 贴纸拼词</a></li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-connect-two-groups-of-points/" target="_blank">1595. 连通两组点的最小成本</a> 2538</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-groups-getting-fresh-donuts/" target="_blank">1815. 得到新鲜甜甜圈的最多组数</a> 2559</li>
<li><a href="https://leetcode.cn/problems/maximize-grid-happiness/" target="_blank">1659. 最大化网格幸福感</a> 2655</li>
<li><a href="https://leetcode.cn/problems/rMeRt2/" target="_blank">LCP 69. Hello LeetCode!</a></li>
<li><a href="https://leetcode.cn/problems/1ybDKD/" target="_blank">LCP 76. 魔法棋盘</a></li>
<li><a href="https://leetcode.cn/problems/cnHoX6/" target="_blank">LCP 82. 万灵之树</a></li>
<li><a href="https://leetcode.cn/problems/android-unlock-patterns/" target="_blank">351. 安卓系统手势解锁</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-build-sturdy-brick-wall/" target="_blank">2184. 建造坚实的砖墙的方法数</a>（会员题）</li>
</ul>
<h3 id="十、数位-dp"><a class="header-anchor" href="#十、数位-dp" target="_blank"></a> 十、数位 DP</h3>
<p><a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1rS4y1s721/?t=19m36s" target="_blank">v1.0 模板讲解</a></p>
<p><a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1Fg4y1Q7wv/?t=31m28s" target="_blank">v2.0 模板讲解</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/count-of-integers/" target="_blank">2719. 统计整数数目</a>（<a href="https://leetcode.cn/problems/count-of-integers/solution/shu-wei-dp-tong-yong-mo-ban-pythonjavacg-9tuc/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/rotated-digits/" target="_blank">788. 旋转数字</a>（<a href="https://leetcode.cn/problems/rotated-digits/solution/by-endlesscheng-9b96/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/" target="_blank">902. 最大为 N 的数字组合</a>（<a href="https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/solution/shu-wei-dp-tong-yong-mo-ban-xiang-xi-zhu-e5dg/" target="_blank">题解</a>）1990</li>
<li><a href="https://leetcode.cn/problems/number-of-digit-one/" target="_blank">233. 数字 1 的个数</a>（<a href="https://leetcode.cn/problems/number-of-digit-one/solution/by-endlesscheng-h9ua/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/number-of-2s-in-range-lcci/" target="_blank">面试题 17.06. 2 出现的次数</a>（<a href="https://leetcode.cn/problems/number-of-2s-in-range-lcci/solution/by-endlesscheng-x4mf/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones/" target="_blank">600. 不含连续 1 的非负整数</a>（<a href="https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones/solution/by-endlesscheng-1egu/" target="_blank">题解</a>）</li>
<li><a href="https://leetcode.cn/problems/count-special-integers/" target="_blank">2376. 统计特殊整数</a>（<a href="https://leetcode.cn/problems/count-special-integers/solution/shu-wei-dp-mo-ban-by-endlesscheng-xtgx/" target="_blank">题解</a>）2120</li>
<li><a href="https://leetcode.cn/problems/numbers-with-repeated-digits/" target="_blank">1012. 至少有 1 位重复的数字</a>（<a href="https://leetcode.cn/problems/numbers-with-repeated-digits/solution/by-endlesscheng-c5vg/" target="_blank">题解</a>）2230</li>
<li><a href="https://leetcode.cn/problems/count-numbers-with-unique-digits/" target="_blank">357. 统计各位数字都不同的数字个数</a></li>
<li><a href="https://leetcode.cn/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/" target="_blank">3007. 价值和小于等于 K 的最大数字</a> 2258 做法不止一种</li>
<li><a href="https://leetcode.cn/problems/number-of-beautiful-integers-in-the-range/" target="_blank">2827. 范围中美丽整数的数目</a> 2324</li>
<li><a href="https://leetcode.cn/problems/count-the-number-of-powerful-integers/" target="_blank">2999. 统计强大整数的数目</a> 2351</li>
<li><a href="https://leetcode.cn/problems/count-stepping-numbers-in-range/" target="_blank">2801. 统计范围内的步进数字数目</a> 2367</li>
<li><a href="https://leetcode.cn/problems/find-all-good-strings/" target="_blank">1397. 找到所有好字符串</a> 2667</li>
<li><a href="https://leetcode.cn/problems/stepping-numbers/" target="_blank">1215. 步进数</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/digit-count-in-range/" target="_blank">1067. 范围内的数字计数</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/count-numbers-with-unique-digits-ii/" target="_blank">3032. 统计各位数字都不同的数字个数 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-balls-in-a-box/" target="_blank">1742. 盒子中小球的最大数量</a> *非暴力做法 枚举数位和+DP</li>
<li><a href="https://leetcode.cn/problems/count-symmetric-integers/" target="_blank">2843. 统计对称整数的数目</a> *非暴力做法</li>
</ul>
<h3 id="十一、数据结构优化-dp"><a class="header-anchor" href="#十一、数据结构优化-dp" target="_blank"></a> 十一、数据结构优化 DP</h3>
<h4 id="§111-前缀和优化-dp"><a class="header-anchor" href="#§111-前缀和优化-dp" target="_blank"></a> §11.1 前缀和优化 DP</h4>
<ul>
<li><a href="https://leetcode.cn/problems/number-of-people-aware-of-a-secret/" target="_blank">2327. 知道秘密的人数</a> 1894</li>
<li><a href="https://leetcode.cn/problems/first-day-where-you-have-been-in-all-the-rooms/" target="_blank">1997. 访问完所有房间的第一天</a> 2260</li>
<li><a href="https://leetcode.cn/problems/number-of-beautiful-partitions/" target="_blank">2478. 完美分割的方案数</a> 2344</li>
<li><a href="https://leetcode.cn/problems/minimum-total-distance-traveled/" target="_blank">2463. 最小移动总距离</a> 2454</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-separate-numbers/" target="_blank">1977. 划分数字的方案数</a> 2817</li>
</ul>
<h4 id="§112-单调栈优化-dp"><a class="header-anchor" href="#§112-单调栈优化-dp" target="_blank"></a> §11.2 单调栈优化 DP</h4>
<p>前置题单：<a href="https://leetcode.cn/circle/discuss/9oZFK9/" target="_blank">单调栈（矩形系列/字典序最小/贡献法）</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/minimum-difficulty-of-a-job-schedule/" target="_blank">1335. 工作计划的最低难度</a> 2035</li>
<li><a href="https://leetcode.cn/problems/beautiful-towers-ii/" target="_blank">2866. 美丽塔 II</a> 2072</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-visited-cells-in-a-grid/" target="_blank">2617. 网格图中最少访问的格子数</a> 2582</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-books-you-can-take/" target="_blank">2355. 你能拿走的最大图书数量</a>（会员题）</li>
</ul>
<h4 id="§113-单调队列优化-dp"><a class="header-anchor" href="#§113-单调队列优化-dp" target="_blank"></a> §11.3 单调队列优化 DP</h4>
<p>一般用来维护一段转移来源的最值。</p>
<ol>
<li>前提：区间右端点变大时，左端点也在变大（同滑动窗口）。</li>
<li>转移前，去掉队首无用数据。</li>
<li>计算转移（直接从队首转移）。</li>
<li>把数据（一般是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">f[i]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">[</span><span class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>）插入队尾前，去掉队尾无用数据。</li>
</ol>
<ul>
<li><a href="https://leetcode.cn/problems/minimum-number-of-coins-for-fruits/" target="_blank">2944. 购买水果需要的最少金币数</a> 1709 可以用单调队列优化到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span></li>
<li><a href="https://leetcode.cn/problems/jump-game-vi/" target="_blank">1696. 跳跃游戏 VI</a> 1954</li>
<li><a href="https://leetcode.cn/problems/constrained-subsequence-sum/" target="_blank">1425. 带限制的子序列和</a> 2032</li>
<li><a href="https://leetcode.cn/problems/guess-number-higher-or-lower-ii/" target="_blank">375. 猜数字大小 II</a> 可以用单调队列优化到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\mathcal{O}(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathdefault">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li>
<li><a href="https://leetcode.cn/problems/delivering-boxes-from-storage-to-ports/" target="_blank">1687. 从仓库到码头运输箱子</a> 2610</li>
<li><a href="https://leetcode.cn/problems/find-maximum-non-decreasing-array-length/" target="_blank">2945. 找到最大非递减数组的长度</a> 2943</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-coins-for-fruits-ii/" target="_blank">2969. 购买水果需要的最少金币数 II</a>（会员题）</li>
</ul>
<h4 id="§114-树状数组/线段树优化-dp"><a class="header-anchor" href="#§114-树状数组/线段树优化-dp" target="_blank"></a> §11.4 树状数组/线段树优化 DP</h4>
<ul>
<li><a href="https://leetcode.cn/problems/best-team-with-no-conflicts/" target="_blank">1626. 无矛盾的最佳球队</a> 2027</li>
<li><a href="https://leetcode.cn/problems/longest-increasing-subsequence-ii/" target="_blank">2407. 最长递增子序列 II</a> 2280</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-jumps-to-reach-the-last-index/" target="_blank">2770. 达到末尾下标所需的最大跳跃次数</a> 见我题解下的 <a href="https://leetcode.cn/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/2336752/dong-tai-gui-hua-cong-ji-yi-hua-sou-suo-2ptkg/comments/2060234" target="_blank">评论</a></li>
<li><a href="https://leetcode.cn/problems/maximum-balanced-subsequence-sum/" target="_blank">2926. 平衡子序列的最大和</a> 2448</li>
<li><a href="https://leetcode.cn/problems/subarrays-distinct-element-sum-of-squares-ii/" target="_blank">2916. 子数组不同元素数目的平方和 II</a> 2816</li>
</ul>
<h4 id="§115-其它优化-dp"><a class="header-anchor" href="#§115-其它优化-dp" target="_blank"></a> §11.5 其它优化 DP</h4>
<ul>
<li><a href="https://leetcode.cn/problems/maximum-strictly-increasing-cells-in-a-matrix/" target="_blank">2713. 矩阵中严格递增的单元格数</a> 2387</li>
<li><a href="https://leetcode.cn/problems/NfY1m5/" target="_blank">LCP 59. 搭桥过河</a></li>
<li><a href="https://leetcode.cn/problems/make-array-non-decreasing-or-non-increasing/" target="_blank">2263. 数组变为有序的最小操作次数</a>（会员题）</li>
</ul>
<h3 id="十二、树形-dp"><a class="header-anchor" href="#十二、树形-dp" target="_blank"></a> 十二、树形 DP</h3>
<p>注：可能有同学觉得树形 DP 没有重复访问同一个状态（重叠子问题），并不能算作 DP，而是算作普通的递归/分治。这么说也有一定道理，不过考虑到思维方式和 DP 是一样的自底向上，所以仍然叫做树形 DP。此外，如果是自顶向下的递归做法，是存在重叠子问题的，一般要结合记忆化搜索实现。</p>
<h4 id="§121-树的直径"><a class="header-anchor" href="#§121-树的直径" target="_blank"></a> §12.1 树的直径</h4>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV17o4y187h1/" target="_blank">树形 DP：树的直径</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/diameter-of-binary-tree/" target="_blank">543. 二叉树的直径</a></li>
<li><a href="https://leetcode.cn/problems/binary-tree-maximum-path-sum/" target="_blank">124. 二叉树中的最大路径和</a></li>
<li><a href="https://leetcode.cn/problems/longest-univalue-path/" target="_blank">687. 最长同值路径</a></li>
<li><a href="https://leetcode.cn/problems/longest-path-with-different-adjacent-characters/" target="_blank">2246. 相邻字符不同的最长路径</a> 2126</li>
<li><a href="https://leetcode.cn/problems/count-subtrees-with-max-distance-between-cities/" target="_blank">1617. 统计子树中城市之间最大距离</a> 2309</li>
<li><a href="https://leetcode.cn/problems/difference-between-maximum-and-minimum-price-sum/" target="_blank">2538. 最大价值和与最小价值和的差值</a> 2398</li>
<li><a href="https://leetcode-cn.com/problems/tree-diameter/" target="_blank">1245. 树的直径</a>（会员题）</li>
</ul>
<blockquote>
<p>注：求直径也有两次 DFS 的做法。</p>
</blockquote>
<h4 id="§122-树上最大独立集"><a class="header-anchor" href="#§122-树上最大独立集" target="_blank"></a> §12.2 树上最大独立集</h4>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1vu4y1f7dn/" target="_blank">树形 DP：打家劫舍III</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/house-robber-iii/" target="_blank">337. 打家劫舍 III</a>（没有上司的舞会）</li>
<li><a href="https://leetcode.cn/problems/minimize-the-total-price-of-the-trips/" target="_blank">2646. 最小化旅行的价格总和</a> 2238</li>
<li><a href="https://leetcode.cn/problems/choose-edges-to-maximize-score-in-a-tree/" target="_blank">2378. 选择边来最大化树的得分</a>（会员题）</li>
</ul>
<h4 id="§123-树上最小支配集"><a class="header-anchor" href="#§123-树上最小支配集" target="_blank"></a> §12.3 树上最小支配集</h4>
<p>讲解：<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1oF411U7qL/" target="_blank">树形 DP：监控二叉树</a>，包含 968 的变形题。</p>
<ul>
<li><a href="https://leetcode.cn/problems/binary-tree-cameras/" target="_blank">968. 监控二叉树</a> 2124</li>
</ul>
<h4 id="§124-换根-dp"><a class="header-anchor" href="#§124-换根-dp" target="_blank"></a> §12.4 换根 DP</h4>
<p>也叫二次扫描法。</p>
<p><a href="https://leetcode.cn/problems/sum-of-distances-in-tree/solution/tu-jie-yi-zhang-tu-miao-dong-huan-gen-dp-6bgb/" target="_blank">【图解】一张图秒懂换根 DP！</a></p>
<ul>
<li><a href="https://leetcode.cn/problems/sum-of-distances-in-tree/" target="_blank">834. 树中距离之和</a> 2197</li>
<li><a href="https://leetcode.cn/problems/count-number-of-possible-root-nodes/" target="_blank">2581. 统计可能的树根数目</a> 2228</li>
<li><a href="https://leetcode.cn/problems/minimum-edge-reversals-so-every-node-is-reachable/" target="_blank">2858. 可以到达每一个节点的最少边反转次数</a> 2295</li>
<li><a href="https://leetcode.cn/problems/minimum-height-trees/" target="_blank">310. 最小高度树</a> 也可以用拓扑排序做</li>
</ul>
<h4 id="§125-其它树形-dp"><a class="header-anchor" href="#§125-其它树形-dp" target="_blank"></a> §12.5 其它树形 DP</h4>
<ul>
<li><a href="https://leetcode.cn/problems/maximum-score-after-applying-operations-on-a-tree/" target="_blank">2925. 在树上执行操作以后得到的最大分数</a> 1940</li>
<li><a href="https://leetcode.cn/problems/find-the-maximum-sum-of-node-values/" target="_blank">3068. 最大节点价值之和</a> ~2300</li>
<li><a href="https://leetcode.cn/problems/maximum-points-after-collecting-coins-from-all-nodes/" target="_blank">2920. 收集所有金币可获得的最大积分</a> 2351</li>
<li><a href="https://leetcode.cn/problems/count-valid-paths-in-a-tree/" target="_blank">2867. 统计树中的合法路径数目</a> 2428</li>
<li><a href="https://leetcode.cn/problems/count-ways-to-build-rooms-in-an-ant-colony/" target="_blank">1916. 统计为蚁群构筑房间的不同顺序</a> 2486</li>
<li><a href="https://leetcode.cn/problems/er-cha-shu-ren-wu-diao-du/" target="_blank">LCP 10. 二叉树任务调度</a></li>
<li><a href="https://leetcode.cn/problems/er-cha-shu-ran-se-UGC/" target="_blank">LCP 34. 二叉树染色</a></li>
<li><a href="https://leetcode.cn/problems/U7WvvU/" target="_blank">LCP 64. 二叉树灯饰</a></li>
<li><a href="https://leetcode.cn/problems/minimum-flips-in-binary-tree-to-get-result/" target="_blank">2313. 二叉树中得到结果所需的最少翻转次数</a>（会员题）</li>
</ul>
<h3 id="十三、图-dp"><a class="header-anchor" href="#十三、图-dp" target="_blank"></a> 十三、图 DP</h3>
<ul>
<li><a href="https://leetcode.cn/problems/cheapest-flights-within-k-stops/" target="_blank">787. K 站中转内最便宜的航班</a> 1786</li>
<li><a href="https://leetcode.cn/problems/number-of-restricted-paths-from-first-to-last-node/" target="_blank">1786. 从第一个节点出发到最后一个节点的受限路径数</a> 2079</li>
<li><a href="https://leetcode.cn/problems/parallel-courses-iii/" target="_blank">2050. 并行课程 III</a> 2084</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-arrive-at-destination/" target="_blank">1976. 到达目的地的方案数</a> 2095</li>
<li><a href="https://leetcode.cn/problems/largest-color-value-in-a-directed-graph/" target="_blank">1857. 有向图中最大颜色值</a> 2313</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-reach-destination-in-time/" target="_blank">1928. 规定时间内到达终点的最小花费</a> 2413</li>
<li><a href="https://leetcode.cn/problems/chuan-di-xin-xi/" target="_blank">LCP 07. 传递信息</a></li>
<li><a href="https://leetcode.cn/problems/the-most-similar-path-in-a-graph/" target="_blank">1548. 图中最相似的路径</a>（会员题）</li>
</ul>
<p>另见<a href="https://leetcode.cn/circle/discuss/01LUak/" target="_blank">【题单】图论算法</a> 中的「全源最短路：Floyd」，本质是多维 DP。</p>
<h3 id="十四、博弈-dp"><a class="header-anchor" href="#十四、博弈-dp" target="_blank"></a> 十四、博弈 DP</h3>
<ul>
<li><a href="https://leetcode.cn/problems/divisor-game/" target="_blank">1025. 除数博弈</a> 1435 有数学做法</li>
<li><a href="https://leetcode.cn/problems/stone-game/" target="_blank">877. 石子游戏</a> 1590 有数学做法</li>
<li><a href="https://leetcode.cn/problems/predict-the-winner/" target="_blank">486. 预测赢家</a></li>
<li><a href="https://leetcode.cn/problems/stone-game-iv/" target="_blank">1510. 石子游戏 IV</a> 1787</li>
<li><a href="https://leetcode.cn/problems/stone-game-vii/" target="_blank">1690. 石子游戏 VII</a> 1951</li>
<li><a href="https://leetcode.cn/problems/stone-game-iii/" target="_blank">1406. 石子游戏 III</a> 2027</li>
<li><a href="https://leetcode.cn/problems/stone-game-ii/" target="_blank">1140. 石子游戏 II</a> 2035</li>
<li><a href="https://leetcode.cn/problems/stone-game-v/" target="_blank">1563. 石子游戏 V</a> 2087</li>
<li><a href="https://leetcode.cn/problems/can-i-win/" target="_blank">464. 我能赢吗</a></li>
<li><a href="https://leetcode.cn/problems/stone-game-viii/" target="_blank">1872. 石子游戏 VIII</a> 2440</li>
<li><a href="https://leetcode.cn/problems/cat-and-mouse/" target="_blank">913. 猫和老鼠</a> 2567</li>
<li><a href="https://leetcode.cn/problems/flip-game-ii/" target="_blank">294. 翻转游戏 II</a>（会员题）</li>
</ul>
<h3 id="十五、概率/期望-dp"><a class="header-anchor" href="#十五、概率/期望-dp" target="_blank"></a> 十五、概率/期望 DP</h3>
<ul>
<li><a href="https://leetcode.cn/problems/knight-probability-in-chessboard/" target="_blank">688. 骑士在棋盘上的概率</a></li>
<li><a href="https://leetcode.cn/problems/new-21-game/" target="_blank">837. 新 21 点</a> 2350</li>
<li><a href="https://leetcode.cn/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/" target="_blank">1467. 两个盒子中球的颜色数相同的概率</a> 2357</li>
<li><a href="https://leetcode.cn/problems/soup-servings/" target="_blank">808. 分汤</a> 2397</li>
<li><a href="https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/" target="_blank">LCR 185. 统计结果概率</a></li>
<li><a href="https://leetcode.cn/contest/ubiquant2022/problems/I3Gm2h/" target="_blank">九坤-04. 筹码游戏</a></li>
<li><a href="https://leetcode.cn/problems/toss-strange-coins/" target="_blank">1230. 抛掷硬币</a>（会员题）</li>
</ul>
<h3 id="专题：前后缀分解"><a class="header-anchor" href="#专题：前后缀分解" target="_blank"></a> 专题：前后缀分解</h3>
<p>部分题目也可以用状态机 DP 解决。</p>
<ul>
<li><a href="https://leetcode.cn/problems/trapping-rain-water/" target="_blank">42. 接雨水</a>（<a href="https://leetcode.cn/link/?target=https://www.bilibili.com/video/BV1Qg411q7ia/?t=3m05s" target="_blank">讲解</a>）</li>
<li><a href="https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/" target="_blank">123. 买卖股票的最佳时机 III</a> 拆分成两个 121 题</li>
<li><a href="https://leetcode.cn/problems/minimum-average-difference/" target="_blank">2256. 最小平均差</a> 1395</li>
<li><a href="https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/" target="_blank">1493. 删掉一个元素以后全为 1 的最长子数组</a> 1423</li>
<li><a href="https://leetcode.cn/problems/longest-mountain-in-array/" target="_blank">845. 数组中的最长山脉</a> 1437 *也可以分组循环</li>
<li><a href="https://leetcode.cn/problems/minimum-sum-of-mountain-triplets-ii/" target="_blank">2909. 元素和最小的山形三元组 II</a> 1479</li>
<li><a href="https://leetcode.cn/problems/minimum-penalty-for-a-shop/" target="_blank">2483. 商店的最少代价</a> 1495</li>
<li><a href="https://leetcode.cn/problems/number-of-good-ways-to-split-a-string/" target="_blank">1525. 字符串的好分割数目</a> 1500</li>
<li><a href="https://leetcode.cn/problems/maximum-value-of-an-ordered-triplet-ii/" target="_blank">2874. 有序三元组中的最大值 II</a> 1583</li>
<li><a href="https://leetcode.cn/problems/maximum-sum-of-two-non-overlapping-subarrays/" target="_blank">1031. 两个非重叠子数组的最大和</a> 1680</li>
<li><a href="https://leetcode.cn/problems/maximum-sum-of-3-non-overlapping-subarrays/" target="_blank">689. 三个无重叠子数组的最大和</a></li>
<li><a href="https://leetcode.cn/problems/find-all-good-indices/" target="_blank">2420. 找到所有好下标</a> 1695</li>
<li><a href="https://leetcode.cn/problems/find-good-days-to-rob-the-bank/" target="_blank">2100. 适合野炊的日子</a> 1702</li>
<li><a href="https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/" target="_blank">1653. 使字符串平衡的最少删除次数</a> 1794</li>
<li><a href="https://leetcode.cn/problems/flip-string-to-monotone-increasing/" target="_blank">926. 将字符串翻转到单调递增</a></li>
<li><a href="https://leetcode.cn/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/" target="_blank">1477. 找两个和为目标值且不重叠的子数组</a> 1851</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/" target="_blank">1671. 得到山形数组的最少删除次数</a> 1913</li>
<li><a href="https://leetcode.cn/problems/product-of-array-except-self/" target="_blank">238. 除自身以外数组的乘积</a> ~2000</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/" target="_blank">1888. 使二进制字符串字符交替的最少反转次数</a> 2006</li>
<li><a href="https://leetcode.cn/problems/construct-product-matrix/" target="_blank">2906. 构造乘积矩阵</a> 2075</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/" target="_blank">2167. 移除所有载有违禁货物车厢所需的最少时间</a> 2219</li>
<li><a href="https://leetcode.cn/problems/count-palindromic-subsequences/" target="_blank">2484. 统计回文子序列数目</a> 2223</li>
<li><a href="https://leetcode.cn/problems/minimum-difference-in-sums-after-removal-of-elements/" target="_blank">2163. 删除元素后和的最小差值</a> 2225</li>
<li><a href="https://leetcode.cn/problems/subsequence-with-the-minimum-score/" target="_blank">2565. 最少得分子序列</a> 2432</li>
<li><a href="https://leetcode.cn/problems/count-increasing-quadruplets/" target="_blank">2552. 统计上升四元组</a> 2433</li>
<li><a href="https://leetcode.cn/problems/maximize-the-number-of-partitions-after-operations/" target="_blank">3003. 执行操作后的最大分割数量</a> 3039</li>
<li><a href="https://leetcode.cn/problems/max-consecutive-ones-ii/" target="_blank">487. 最大连续 1 的个数 II</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/maximum-subarray-sum-after-one-operation/" target="_blank">1746. 经过一次操作后的最大子数组和</a>（会员题）</li>
</ul>
<h3 id="专题：把-x-变成-y"><a class="header-anchor" href="#专题：把-x-变成-y" target="_blank"></a> 专题：把 X 变成 Y</h3>
<p>部分题目也可以用 BFS 解决。</p>
<ul>
<li><a href="https://leetcode.cn/problems/integer-replacement/" target="_blank">397. 整数替换</a></li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-make-x-and-y-equal/" target="_blank">2998. 使 X 和 Y 相等的最少操作次数</a> 1795</li>
<li><a href="https://leetcode.cn/problems/minimum-operations-to-convert-number/" target="_blank">2059. 转化数字的最小运算数</a> 1850</li>
<li><a href="https://leetcode.cn/problems/broken-calculator/" target="_blank">991. 坏了的计算器</a> 1909</li>
<li><a href="https://leetcode.cn/problems/minimum-number-of-days-to-eat-n-oranges/" target="_blank">1553. 吃掉 N 个橘子的最少天数</a> 2048</li>
</ul>
<h3 id="专题：跳跃游戏"><a class="header-anchor" href="#专题：跳跃游戏" target="_blank"></a> 专题：跳跃游戏</h3>
<ul>
<li><a href="https://leetcode.cn/problems/jump-game-iii/" target="_blank">1306. 跳跃游戏 III</a> 1397</li>
<li><a href="https://leetcode.cn/problems/maximum-number-of-jumps-to-reach-the-last-index/" target="_blank">2770. 达到末尾下标所需的最大跳跃次数</a> 1533</li>
<li><a href="https://leetcode.cn/problems/frog-jump/" target="_blank">403. 青蛙过河</a></li>
<li><a href="https://leetcode.cn/problems/jump-game-v/" target="_blank">1340. 跳跃游戏 V</a> 1866</li>
<li><a href="https://leetcode.cn/problems/jump-game-vii/" target="_blank">1871. 跳跃游戏 VII</a> 1896</li>
<li><a href="https://leetcode.cn/problems/jump-game-vi/" target="_blank">1696. 跳跃游戏 VI</a> 1954</li>
<li><a href="https://leetcode.cn/problems/odd-even-jump/" target="_blank">975. 奇偶跳</a> 2079</li>
<li><a href="https://leetcode.cn/problems/minimum-jumps-to-reach-home/" target="_blank">1654. 到家的最少跳跃次数</a> 2124</li>
<li><a href="https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu/" target="_blank">LCP 09. 最小跳跃次数</a></li>
<li><a href="https://leetcode.cn/problems/meChtZ/" target="_blank">LCP 20. 快速公交</a></li>
<li><a href="https://leetcode.cn/problems/coin-path/" target="_blank">656. 金币路径</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/jump-game-viii/" target="_blank">2297. 跳跃游戏 VIII</a>（会员题）</li>
</ul>
<h3 id="其它-dp"><a class="header-anchor" href="#其它-dp" target="_blank"></a> 其它 DP</h3>
<p>套路不固定，故放在最后。</p>
<ul>
<li><a href="https://leetcode.cn/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/" target="_blank">1526. 形成目标数组的子数组最少增加次数</a> 1872</li>
<li><a href="https://leetcode.cn/problems/binary-trees-with-factors/" target="_blank">823. 带因子的二叉树</a> 1900</li>
<li><a href="https://leetcode.cn/problems/distinct-subsequences-ii/" target="_blank">940. 不同的子序列 II</a> 1985</li>
<li><a href="https://leetcode.cn/problems/2-keys-keyboard/" target="_blank">650. 两个键的键盘</a></li>
<li><a href="https://leetcode.cn/problems/unique-substrings-in-wraparound-string/" target="_blank">467. 环绕字符串中唯一的子字符串</a></li>
<li><a href="https://leetcode.cn/problems/total-appeal-of-a-string/" target="_blank">2262. 字符串的总引力</a> 2033</li>
<li><a href="https://leetcode.cn/problems/count-unique-characters-of-all-substrings-of-a-given-string/" target="_blank">828. 统计子串中的唯一字符</a> 2034</li>
<li><a href="https://leetcode.cn/problems/decremental-string-concatenation/" target="_blank">2746. 字符串连接删减字母</a> 2126</li>
<li><a href="https://leetcode.cn/problems/concatenated-words/" target="_blank">472. 连接词</a></li>
<li><a href="https://leetcode.cn/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/" target="_blank">2930. 重新排列后包含指定子字符串的字符串数目</a> 2227</li>
<li><a href="https://leetcode.cn/problems/maximize-consecutive-elements-in-an-array-after-modification/" target="_blank">3041. 修改数组后最大化数组中的连续元素数目</a> 2231</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-reorder-array-to-get-same-bst/" target="_blank">1569. 将子数组重新排序得到同一个二叉搜索树的方案数</a> 2288</li>
<li><a href="https://leetcode.cn/problems/race-car/" target="_blank">818. 赛车</a> 2392</li>
<li><a href="https://leetcode.cn/problems/number-of-music-playlists/" target="_blank">920. 播放列表的数量</a> 2400</li>
<li><a href="https://leetcode.cn/problems/number-of-unique-good-subsequences/" target="_blank">1987. 不同的好子序列数目</a> 2422（同 940 题）</li>
<li><a href="https://leetcode.cn/problems/valid-permutations-for-di-sequence/" target="_blank">903. DI 序列的有效排列</a> 2433</li>
<li><a href="https://leetcode.cn/problems/minimum-cost-to-change-the-final-value-of-expression/" target="_blank">1896. 反转表达式值的最少操作次数</a> 2532</li>
<li><a href="https://leetcode.cn/problems/string-compression-ii/" target="_blank">1531. 压缩字符串 II</a> 2576</li>
<li><a href="https://leetcode.cn/problems/least-operators-to-express-number/" target="_blank">964. 表示数字的最少运算符</a> 2594</li>
<li><a href="https://leetcode.cn/problems/make-the-xor-of-all-segments-equal-to-zero/" target="_blank">1787. 使所有区间的异或结果为零</a> 2640</li>
<li><a href="https://leetcode.cn/problems/check-if-an-original-string-exists-given-two-encoded-strings/" target="_blank">2060. 同源字符串检测</a> 2804</li>
<li><a href="https://leetcode.cn/problems/minimum-time-to-make-array-sum-at-most-x/" target="_blank">2809. 使数组和小于等于 x 的最少时间</a> 2979</li>
<li><a href="https://leetcode.cn/problems/qie-fen-shu-zu/" target="_blank">LCP 14. 切分数组</a></li>
<li><a href="https://leetcode.cn/problems/Up5XYM/" target="_blank">LCP 36. 最多牌组数</a></li>
<li><a href="https://leetcode.cn/problems/7rLGCR/" target="_blank">LCP 38. 守卫城堡</a></li>
<li><a href="https://leetcode.cn/problems/Y1VbOX/" target="_blank">LCP 43. 十字路口的交通</a></li>
<li><a href="https://leetcode.cn/problems/3aqs1c/" target="_blank">LCP 65. 舒适的湿度</a></li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-build-house-of-cards/" target="_blank">2189. 建造纸牌屋的方法数</a>（会员题）</li>
<li><a href="https://leetcode.cn/problems/number-of-ways-to-reach-destination-in-the-grid/" target="_blank">2912. 在网格上移动到目的地的方法数</a>（会员题）</li>
</ul>
<h3 id="往期题单"><a class="header-anchor" href="#往期题单" target="_blank"></a> 往期题单</h3>
<ol>
<li><a href="https://leetcode.cn/circle/discuss/0viNMK/" target="_blank">滑动窗口（定长/不定长/多指针）</a></li>
<li><a href="https://leetcode.cn/circle/discuss/SqopEo/" target="_blank">二分算法（二分答案/最小化最大值/最大化最小值/第K小）</a></li>
<li><a href="https://leetcode.cn/circle/discuss/9oZFK9/" target="_blank">单调栈（矩形系列/字典序最小/贡献法）</a></li>
<li><a href="https://leetcode.cn/circle/discuss/YiXPXW/" target="_blank">网格图（DFS/BFS/综合应用）</a></li>
<li><a href="https://leetcode.cn/circle/discuss/dHn9Vk/" target="_blank">位运算（基础/性质/拆位/试填/恒等式/贪心/脑筋急转弯）</a></li>
<li><a href="https://leetcode.cn/circle/discuss/01LUak/" target="_blank">图论算法（DFS/BFS/拓扑排序/最短路/最小生成树/二分图/基环树/欧拉路径）</a></li>
</ol>
<p>更多题单，点我个人主页 - 讨论发布。</p>
<p>由于统计的题目量大，如有疏漏，请在评论区指出。有其它问题和建议，也欢迎评论。</p>
</div></div>`
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
            <List className="w-100" content={contents[selected]}></List>
        </div>
    </Container >
}
