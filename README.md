# LC-Rating

<p align="center">
  <a href="https://github.com/huxulm/lc-rating/stargazers">
    <img src="https://img.shields.io/github/stars/huxulm/lc-rating?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/huxulm/lc-rating/network/members">
    <img src="https://img.shields.io/github/forks/huxulm/lc-rating?style=social" alt="GitHub forks">
  </a>
  <a href="https://github.com/huxulm/lc-rating/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/huxulm/lc-rating" alt="License">
  </a>
</p>

**为算法学习者打造的 LeetCode 刷题助手**

一个专为算法新手和进阶者设计的 LeetCode 题目浏览与学习平台。通过科学的难度分级、系统化的题单分类和完善的进度跟踪，帮助你建立扎实的算法基础，从入门到精通，循序渐进提升解题能力。

## 🎓 为什么选择 LC-Rating？

### 适合算法新手的理由

- **🎯 精准难度评分** - 基于真实竞赛数据的难度评分系统，帮助你准确评估题目难度，避免盲目挑战过难题目而打击信心
- **📚 系统化学习路径** - 集成灵茶山艾府(0x3F)精心整理的算法题单，按知识点分类，从基础到进阶循序渐进
- **✅ 进度可视化** - 实时跟踪做题进度，清晰了解每个知识点的掌握情况，让学习成果一目了然
- **🏷️ 智能标签分类** - 按算法类型快速筛选题目，帮助你专注于特定领域的刷题训练
- **📊 竞赛题目分级** - 通过 Q1-Q4 的分级展示，了解不同难度层次的题目特点，为参加竞赛做准备

## ✨ 核心功能

- **📊 竞赛题目浏览**
  - 查看历届 LeetCode 周赛/双周赛题目
  - 按 Q1-Q4 分级展示，了解竞赛题目难度分布
  - 帮助新手从简单的 Q1/Q2 题目入手，逐步提升

- **📚 全题库检索**
  - 完整的 LeetCode 题库视图
  - 多维度筛选（难度、标签、是否会员题）
  - 支持排序和快速搜索

- **📖 专题题单系统**
  - **二分查找** - 掌握高效查找算法
  - **滑动窗口** - 解决子数组/子串问题
  - **单调栈** - 处理区间极值问题
  - **动态规划** - 从入门到精通 DP
  - **图论算法** - 掌握图的遍历与应用
  - **贪心算法** - 培养贪心思维
  - **位运算** - 掌握位操作技巧
  - **数据结构** - 熟练运用各类数据结构
  - **字符串算法** - 字符串处理专题
  - **树和二叉树** - 树形结构必备
  - **网格图** - DFS/BFS 应用场景
  - **数学** - 数学思维训练

- **🎯 智能难度系统**
  - 基于 zerotrac 的题目难度评分
  - 可视化难度分布（未知、1000-1200、1200-1400...）
  - 帮助选择适合自己水平的题目

- **📈 学习进度管理**
  - 本地存储做题记录
  - 实时统计完成情况
  - 激励持续学习

- **🎨 人性化设计**
  - 🌓 深色/浅色主题切换
  - 🌏 中文/英文 LeetCode 链接切换
  - 📱 响应式设计，支持移动端

## 💡 使用建议（新手必读）

1. **从题单入门** - 选择一个感兴趣的专题（如滑动窗口、二分查找），从简单题目开始
2. **关注难度分级** - 建议新手从 1000-1400 分的题目开始，逐步提升
3. **记录进度** - 使用进度跟踪功能，坚持每天刷题，养成习惯
4. **循序渐进** - 不要急于求成，扎实掌握每个知识点后再进阶
5. **参考题解** - 善用题目关联的题解链接，学习优秀解法

## 🛠️ 技术栈

- **框架**: [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 组件**: [shadcn/ui](https://ui.shadcn.com/)
- **构建工具**: [Turbo](https://turbo.build/)
- **包管理**: [pnpm](https://pnpm.io/)
- **数据获取**: [TanStack Query](https://tanstack.com/query/latest)
- **Python 工具**: 题单数据生成工具

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 10.19.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 [http://localhost:3001](http://localhost:3001) 查看应用。

### 构建生产版本

```bash
pnpm build
```

## 📁 项目结构

```
lc-rating/
├── apps/
│   └── web/                  # 主应用
│       ├── app/              # Next.js App Router
│       ├── components/       # React 组件
│       │   ├── Contest/      # 竞赛相关组件
│       │   ├── ProblemSet/   # 题库相关组件
│       │   ├── StudyPlan/    # 题单相关组件
│       │   └── common/       # 通用组件
│       ├── hooks/            # React Hooks
│       ├── types/            # TypeScript 类型定义
│       ├── utils/            # 工具函数
│       ├── scripts/studyplan/ # 题单数据生成脚本(TypeScript)
│       └── public/           # 静态资源
│           ├── problemset/   # 题库数据
│           └── studyplan/    # 题单数据
└── packages/                 # 共享包
    ├── eslint-config/        # ESLint 配置
    ├── tailwind-config/      # Tailwind 配置
    ├── typescript-config/    # TypeScript 配置
    └── ui/                   # UI 组件库
```

## 🔧 题单数据生成

题单数据来自灵茶山艾府在力扣讨论区发布的题单帖子。脚本通过力扣 GraphQL 接口获取帖子 Markdown 原文，
确定性地解析出章节层级、题目、难度分与备注，生成 `apps/web/public/studyplan/<key>.json`。

```bash
cd apps/web
pnpm studyplan:update                # 更新全部题单
pnpm studyplan:update dynamic graph  # 只更新指定题单（按 key 前缀匹配）
pnpm studyplan:update --dry-run      # 只解析并打印统计，不写文件
pnpm test                            # 解析器单元测试
```

- 题单列表（key ↔ 帖子 uuid）在 `apps/web/scripts/studyplan/plans.ts`，新增题单时同时在 `config/constants.ts` 的 `STUDYPLANS` 中添加名称。
- 若解析出的题目数比现有数据骤减 30% 以上，脚本会拒绝覆盖并以失败退出，提示帖子格式可能有变化。
- CI：`.github/workflows/studyplan_updater.yml` 每周一自动运行并提交更新，也可在 Actions 页面手动触发。

## 📄 开源协议

本项目采用 MIT 协议开源。

## 🙏 致谢

- [zerotrac](https://github.com/zerotrac/leetcode_problem_rating) - 题目难度评分数据
- [灵茶山艾府(0x3F)](https://space.bilibili.com/206214/) - 算法题单内容
- [LeetCode](https://leetcode.cn/) - 题目数据来源
- [lc-rating-backend](https://github.com/wnykuang/lc-rating-backend) - 提供云端数据支持的后端服务（Cloudflare Workers + D1）

## 👥 贡献者

感谢以下所有贡献者对本项目的支持：

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/huxulm">
        <img src="https://github.com/huxulm.png" width="80px;" alt="huxulm"/>
        <br />
        <sub><b>Huxulm</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Autumnal-Joy">
        <img src="https://github.com/Autumnal-Joy.png" width="80px;" alt="AutJ"/>
        <br />
        <sub><b>Autumnal-Joy</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Yorafa">
        <img src="https://github.com/Yorafa.png" width="80px;" alt="Yorafa"/>
        <br />
        <sub><b>Tianle Wang</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/wnykuang">
        <img src="https://github.com/wnykuang.png" width="80px;" alt="wnykuang"/>
        <br />
        <sub><b>Wenyi Kuang</b></sub>
      </a>
    </td>
    <td align="center">
      <img src="https://github.com/github.png" width="80px;" alt="Kefei Qian"/>
      <br />
      <sub><b>Kefei Qian</b></sub>
    </td>
  </tr>
</table>

## 📈 Star History

<a href="https://star-history.com/#huxulm/lc-rating&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=huxulm/lc-rating&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=huxulm/lc-rating&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=huxulm/lc-rating&type=Date" />
  </picture>
</a>

---

<p align="center">
  <a href="https://github.com/huxulm/lc-rating/stargazers">
    如果这个项目对你有帮助，欢迎 ⭐️ Star 支持！
  </a>
</p>
