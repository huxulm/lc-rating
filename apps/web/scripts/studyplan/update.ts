/**
 * 从力扣讨论区拉取 0x3F 题单原文并生成 public/studyplan/<key>.json
 *
 * 用法（在 apps/web 目录下）：
 *   pnpm studyplan:update                 # 更新全部题单
 *   pnpm studyplan:update dp graph        # 只更新指定 key（支持前缀匹配）
 *   pnpm studyplan:update --dry-run       # 只解析并打印统计，不写文件
 *
 * 安全保护：若新解析的题目数比现有文件少 30% 以上，视为帖子格式变化导致解析异常，
 * 拒绝覆盖并以非 0 退出码结束（CI 会失败并提醒人工检查）。
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { countProblems, parseStudyPlan, type StudyPlanRoot } from "./parse";
import { PLANS, discussUrl } from "./plans";

const OUT_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../public/studyplan"
);
const GRAPHQL_URL = "https://leetcode.cn/graphql/";
const MAX_SHRINK_RATIO = 0.3;

interface QaQuestion {
  title: string;
  content: string;
  updatedAt: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchPost(uuid: string, retries = 3): Promise<QaQuestion> {
  const body = JSON.stringify({
    operationName: "qaQuestion",
    query:
      "query qaQuestion($uuid: ID!) { qaQuestion(uuid: $uuid) { title content updatedAt } }",
    variables: { uuid },
  });

  let lastError: unknown;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          referer: discussUrl(uuid),
          "user-agent":
            "Mozilla/5.0 (compatible; lc-rating-studyplan-updater; +https://github.com/huxulm/lc-rating)",
        },
        body,
        signal: AbortSignal.timeout(30_000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      const json = (await res.json()) as {
        data?: { qaQuestion?: QaQuestion | null };
        errors?: { message: string }[];
      };
      if (json.errors?.length) {
        throw new Error(json.errors.map((e) => e.message).join("; "));
      }
      const post = json.data?.qaQuestion;
      if (!post?.content) throw new Error("响应中没有帖子内容");
      return post;
    } catch (err) {
      lastError = err;
      if (attempt < retries) await sleep(2000 * attempt);
    }
  }
  throw lastError;
}

const serialize = (data: StudyPlanRoot) => JSON.stringify(data, null, 2) + "\n";

function readExisting(file: string): StudyPlanRoot | null {
  if (!existsSync(file)) return null;
  try {
    return JSON.parse(readFileSync(file, "utf-8")) as StudyPlanRoot;
  } catch {
    return null;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const filters = args.filter((a) => !a.startsWith("--"));
  const plans = filters.length
    ? PLANS.filter((p) => filters.some((f) => p.key.startsWith(f)))
    : PLANS;

  if (!plans.length) {
    console.error(`没有匹配的题单：${filters.join(", ")}`);
    process.exit(1);
  }

  let failed = 0;
  let changed = 0;

  for (const [i, plan] of plans.entries()) {
    if (i > 0) await sleep(1000);
    const file = join(OUT_DIR, `${plan.key}.json`);
    try {
      const post = await fetchPost(plan.uuid);
      const data = parseStudyPlan({
        title: post.title,
        content: post.content,
        src: discussUrl(plan.uuid),
        updatedAt: post.updatedAt,
      });

      const total = countProblems(data);
      const existing = readExisting(file);
      const oldTotal = existing ? countProblems(existing) : 0;
      const sections = data.children.length;
      const tag = `[${plan.key}]`;

      if (total === 0 || sections === 0) {
        throw new Error("未解析到任何章节或题目");
      }
      if (oldTotal > 0 && total < oldTotal * (1 - MAX_SHRINK_RATIO)) {
        throw new Error(
          `题目数从 ${oldTotal} 骤降到 ${total}，疑似帖子格式变化，拒绝覆盖`
        );
      }

      const next = serialize(data);
      const prev = existsSync(file) ? readFileSync(file, "utf-8") : "";
      const diff = oldTotal ? `${oldTotal} → ${total}` : `${total}`;

      if (next === prev) {
        console.log(`${tag} 无变化（${total} 题，更新于 ${data.last_update}）`);
      } else if (dryRun) {
        console.log(`${tag} 有变化：${sections} 个章节，题目 ${diff}（dry-run，未写入）`);
      } else {
        writeFileSync(file, next, "utf-8");
        changed++;
        console.log(`${tag} 已更新：${sections} 个章节，题目 ${diff}`);
      }
    } catch (err) {
      failed++;
      console.error(`[${plan.key}] 失败：${err instanceof Error ? err.message : err}`);
    }
  }

  console.log(`\n完成：${plans.length} 个题单，${changed} 个有更新，${failed} 个失败`);
  if (failed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
