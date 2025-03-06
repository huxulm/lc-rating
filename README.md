# LC-Rating

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/huxulm/lc-rating?style=flat-square">
  <img alt="GitHub commit activity (branch)" src="https://img.shields.io/github/commit-activity/m/huxulm/lc-rating?label=commit&labelColor=purple&color=grey&style=flat-square">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/huxulm/lc-rating?style=flat-square">
  <img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/huxulm/lc-rating/main?label=version&labelColor=blue&style=flat-square">
  <img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/huxulm/lc-rating/workflow.yml?style=flat-square">
</p>

<p align="center">
  本项目基于<a href="https://leetcode.cn/u/endlesscheng/">灵茶山艾府</a>的文章<a href="https://leetcode.cn/circle/discuss/RvFUtj/">如何科学刷题？</a>而构建的一个刷题用网站。使用 <strong><a href="https://react.dev/">React</a></strong> + <strong><a href="https://nextjs.org/">NextJS</a></strong> 构建。
</p>

## 特性和使用方法

1. 力扣竞赛题目列表，含分数展示，可以让想自己 虚拟竞赛(VP) 的用户快速直达并了解题目的难度
2. 难度训练，对不同难度的题目进行了划分，让用户更好的了解自己的水准。算法新手和老手想在力扣周赛上分的都可以使用此功能。此外还添加了进度标注，并可以对进度进行同步。 同时用户可以在设置中选择自己想刷的 tag，也可以隐藏 tag, 以及选择自己的进度。
3. 题解搜索, 支持根据题目、题解标题、算法模板名称、标签等过滤，纯本地化+缓存优化，速度飞快。题解链接（来源：[@灵茶山艾府](https://space.bilibili.com/206214)）
4. 整合了灵茶山艾府列出的题单，标注了分数同时也添加了进度标注。用于突击训练特定知识点，掌握常用算法套路。

## v2.0 内容

- 优化组件框架, 使用更轻量化组件
- 包含更灵活的样式构建系统 tailwindcss
- 优化调整页面布局

## 数据来源

- 基础 - 【[leetcode.cn](https://leetcode.cn/)】
- 题目难度 - 【[leetcode_problem_rating](https://raw.githubusercontent.com/zerotrac/leetcode_problem_rating/main/data.json)】
