/**
 * 把 0x3F 题单帖子的 Markdown 原文确定性地解析成前端使用的 JSON 结构。
 *
 * 帖子结构（示例）：
 *
 *   ## 一、入门 DP                      ← 一级章节
 *   ### §1.1 爬楼梯                     ← 二级章节
 *   [讲解](...)                         ← 章节说明（Markdown）
 *   - [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
 *   - [746. xxx](...) 约 1500           ← 约等分数
 *   - [2533. xxx](...)（会员题）同 2466 题 ← 会员题 + 备注
 *   **思维扩展**：                      ← 组内分组标签
 *   - [2140. xxx](...) 1709
 *   #### 答疑                           ← 无题目的小标题，并入父章节说明
 */

export interface StudyPlanProblem {
  /** 题号，如 "70"、"LCP 08"、"面试题 05.01"（进度存储使用该字段作为 key） */
  id: string;
  title: string;
  slug: string;
  src: string;
  /** 难度分；帖子中未标注时为 null */
  score: number | null;
  /** 分数为「约 xxxx」的估计值 */
  scoreApprox?: true;
  isPremium: boolean;
  /** 题目后面的补充说明（Markdown 行内语法） */
  note?: string;
  /** 所属的组内分组标签，如「思维扩展」 */
  group?: string;
}

export interface StudyPlanSection {
  /** 页面锚点，按章节位置生成，如 "s2-1" */
  id: string;
  title: string;
  summary?: string;
  problems: StudyPlanProblem[];
  children: StudyPlanSection[];
  /** 出现在子章节之后的纯文字小节（如章末「思考题」），渲染在章节末尾 */
  epilogue?: string;
}

export interface StudyPlanRoot {
  title: string;
  src: string;
  /** 帖子最近更新日期 YYYY-MM-DD */
  last_update: string;
  summary?: string;
  children: StudyPlanSection[];
}

interface RawNode {
  title: string;
  level: number;
  lines: string[];
  problems: StudyPlanProblem[];
  children: RawNode[];
}

/** 链接到其他题单的尾部章节，不属于本题单内容 */
const DROPPED_SECTIONS = new Set(["关联题单", "算法题单"]);
/** 并入题单简介的章节 */
const INTRO_SECTIONS = new Set(["前言"]);

const HEADING_RE = /^(#{2,6})\s+(.+?)\s*#*\s*$/;
const FENCE_RE = /^\s*(```|~~~)/;
const PROBLEM_RE =
  /^[-*+]\s+\[(.+?)\]\((https?:\/\/leetcode\.(?:cn|com)\/problems\/([^/)?#\s]+)[^)]*)\)(.*)$/;
const GROUP_LABEL_RE = /^\*\*([^*]+?)\*\*\s*[：:]?\s*$/;

/** 形如「§1.2 打家劫舍」的编号章节 */
const isNumberedSection = (title: string) => title.startsWith("§");

export function cleanPlanTitle(title: string): string {
  return title
    .replace(/^分享\s*[丨｜|]\s*/, "")
    .replace(/^【算法题单】/, "")
    .trim();
}

/** 解析一行题目列表项；不是题目则返回 null */
export function parseProblemLine(line: string): StudyPlanProblem | null {
  const m = PROBLEM_RE.exec(line);
  if (!m) return null;
  const [, label, , slug, rawTail] = m as unknown as [
    string,
    string,
    string,
    string,
    string,
  ];
  // 题号与标题以第一个 ". " 分隔：「面试题 05.01. 插入」→「面试题 05.01」+「插入」
  const lm = /^(.+?)\.\s+(.+)$/.exec(label.trim());
  if (!lm) return null;
  const id = lm[1]!.trim();
  const title = lm[2]!.trim();

  let tail = rawTail.trim();
  let isPremium = false;
  let score: number | null = null;
  let scoreApprox = false;

  const premium = /^[（(]会员题[）)]\s*/.exec(tail);
  if (premium) {
    isPremium = true;
    tail = tail.slice(premium[0].length);
  }
  const approx = /^约\s*(\d{3,4})(?!\d)\s*/.exec(tail);
  const exact = /^(\d{3,4})(?![\d.])\s*/.exec(tail);
  if (approx) {
    score = Number(approx[1]);
    scoreApprox = true;
    tail = tail.slice(approx[0].length);
  } else if (exact) {
    score = Number(exact[1]);
    tail = tail.slice(exact[0].length);
  }
  if (!isPremium && /^[（(]会员题[）)]/.test(tail)) {
    isPremium = true;
    tail = tail.replace(/^[（(]会员题[）)]\s*/, "");
  }

  const problem: StudyPlanProblem = {
    id,
    title,
    slug,
    src: `https://leetcode.cn/problems/${slug}/`,
    score,
    isPremium,
  };
  if (scoreApprox) problem.scoreApprox = true;
  const note = tail.trim();
  if (note) problem.note = note;
  return problem;
}

const tidy = (lines: string[]): string | undefined => {
  const text = lines
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return text || undefined;
};

/** 把 Markdown 切成章节树，并从正文中抽出题目列表 */
function buildTree(markdown: string): RawNode {
  const root: RawNode = {
    title: "",
    level: 1,
    lines: [],
    problems: [],
    children: [],
  };
  const stack: RawNode[] = [root];
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");

  let inFence = false;
  let group: string | undefined;

  const nextContentLine = (from: number) => {
    for (let j = from; j < lines.length; j++) {
      if (lines[j]!.trim()) return lines[j]!;
    }
    return "";
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const current = stack[stack.length - 1]!;

    if (FENCE_RE.test(line)) {
      inFence = !inFence;
      current.lines.push(line);
      continue;
    }
    if (inFence) {
      current.lines.push(line);
      continue;
    }

    const heading = HEADING_RE.exec(line);
    if (heading) {
      const level = heading[1]!.length;
      const title = heading[2]!.trim();
      while (stack[stack.length - 1]!.level >= level) stack.pop();
      const parent = stack[stack.length - 1]!;

      // 「§x.y 章节」下的非编号小标题（如「#### 答疑」）只是正文里的小标题，
      // 其后的题目仍属于该章节，不能开新章节，否则题目会挂错层级。
      if (isNumberedSection(parent.title) && !isNumberedSection(title)) {
        parent.lines.push(line);
        group = undefined;
        continue;
      }

      const node: RawNode = {
        title,
        level,
        lines: [],
        problems: [],
        children: [],
      };
      parent.children.push(node);
      stack.push(node);
      group = undefined;
      continue;
    }

    const problem = parseProblemLine(line);
    if (problem) {
      if (group) problem.group = group;
      current.problems.push(problem);
      continue;
    }

    const label = GROUP_LABEL_RE.exec(line.trim());
    if (label && parseProblemLine(nextContentLine(i + 1))) {
      group = label[1]!.trim();
      continue;
    }

    current.lines.push(line);
  }
  return root;
}

const hasProblems = (n: RawNode): boolean =>
  n.problems.length > 0 || n.children.some(hasProblems);

/**
 * 规整章节：
 * - 没有题目的子标题（如「答疑」「思考题」）并入父章节说明；
 * - 一级章节即使没有题目也保留（如「思考」），作为纯文字章节。
 */
function normalize(node: RawNode, path: number[]): StudyPlanSection {
  const lines = [...node.lines];
  const epilogue: string[] = [];
  const children: StudyPlanSection[] = [];

  for (const child of node.children) {
    if (!hasProblems(child)) {
      const body = flattenToMarkdown(child, 4);
      // 出现在子章节之后的纯文字小节放到章节末尾，保持原文顺序
      if (body) (children.length ? epilogue : lines).push("", body);
      continue;
    }
    children.push(normalize(child, [...path, children.length + 1]));
  }

  const section: StudyPlanSection = {
    id: `s${path.join("-")}`,
    title: node.title,
    problems: node.problems,
    children,
  };
  const summary = tidy(lines);
  if (summary) section.summary = summary;
  const tail = tidy(epilogue);
  if (tail) section.epilogue = tail;
  return section;
}

function flattenToMarkdown(node: RawNode, depth: number): string {
  const parts = [`${"#".repeat(Math.min(depth, 6))} ${node.title}`, ...node.lines];
  for (const child of node.children) {
    parts.push("", flattenToMarkdown(child, depth + 1));
  }
  return tidy(parts) ?? "";
}

export interface ParseInput {
  title: string;
  content: string;
  src: string;
  updatedAt?: string;
}

export function parseStudyPlan({
  title,
  content,
  src,
  updatedAt,
}: ParseInput): StudyPlanRoot {
  const tree = buildTree(content);
  const introLines = [...tree.lines];
  const children: StudyPlanSection[] = [];

  for (const top of tree.children) {
    if (DROPPED_SECTIONS.has(top.title)) continue;
    if (INTRO_SECTIONS.has(top.title) && !hasProblems(top)) {
      introLines.push("", flattenToMarkdown(top, 3).replace(/^#+ .*\n?/, ""));
      continue;
    }
    children.push(normalize(top, [children.length + 1]));
  }

  const root: StudyPlanRoot = {
    title: cleanPlanTitle(title),
    src,
    last_update: updatedAt ? updatedAt.slice(0, 10) : "",
    children,
  };
  const summary = tidy(introLines);
  if (summary) root.summary = summary;
  return root;
}

/** 统计题目数；兼容旧版 JSON（children / problems 可能缺失） */
export function countProblems(node: {
  problems?: unknown[];
  children?: { problems?: unknown[]; children?: unknown[] }[];
}): number {
  return (
    (node.problems?.length ?? 0) +
    (node.children ?? []).reduce(
      (acc, c) => acc + countProblems(c as Parameters<typeof countProblems>[0]),
      0
    )
  );
}
