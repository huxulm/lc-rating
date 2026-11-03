"use client";

import { PageContainer } from "@/components/common/PageHeader";
import { Button } from "@/components/ui-customized/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { STUDYPLANS } from "@/config/constants";
import { useStudyPlan } from "@/hooks/useStudyPlan";
import { ExternalLink, ListTree } from "lucide-react";
import { useState } from "react";
import { Markdown } from "./Markdown";
import { PlanToc, useActiveSection } from "./PlanToc";
import { SectionBlock } from "./SectionBlock";
import { useSectionStats } from "./useSectionStats";

interface StudyPlanProps {
  plan: string;
}

function LoadingState() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-40 w-full" />
    </div>
  );
}

function StudyPlan({ plan }: StudyPlanProps) {
  const { studyPlan, isPending, error } = useStudyPlan(plan);
  const stats = useSectionStats(studyPlan);
  const active = useActiveSection(studyPlan);
  const [tocOpen, setTocOpen] = useState(false);

  const name = STUDYPLANS[plan as keyof typeof STUDYPLANS] ?? plan;
  const overall = stats.get("root") ?? { total: 0, done: 0 };
  const percent = overall.total
    ? Math.round((overall.done / overall.total) * 100)
    : 0;

  if (error) {
    return (
      <PageContainer>
        <p className="text-sm text-destructive">题单加载失败：{String(error)}</p>
      </PageContainer>
    );
  }
  if (isPending || !studyPlan) {
    return (
      <PageContainer>
        <LoadingState />
      </PageContainer>
    );
  }

  const toc = (onNavigate?: () => void) => (
    <PlanToc
      sections={studyPlan.children}
      stats={stats}
      active={active}
      onNavigate={onNavigate}
    />
  );

  return (
    <PageContainer className="gap-8">
      {/* 题单头部 */}
      <header className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium text-brand">题单 · {name}</div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {studyPlan.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <a
              href={studyPlan.src}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              灵茶山艾府 · 力扣讨论区原帖
              <ExternalLink className="size-3.5" />
            </a>
            {studyPlan.last_update && <span>原帖更新于 {studyPlan.last_update}</span>}
            <span>
              {studyPlan.children.length} 个章节 · {overall.total} 道题
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-2 max-w-md flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-sm tabular-nums text-muted-foreground">
            已完成 <span className="font-medium text-foreground">{overall.done}</span> /{" "}
            {overall.total}（{percent}%）
          </span>
        </div>

        {studyPlan.summary && (
          <details className="group max-w-4xl rounded-lg border bg-card px-4 py-3 text-sm">
            <summary className="cursor-pointer select-none font-medium text-muted-foreground hover:text-foreground">
              题单说明
            </summary>
            <Markdown content={studyPlan.summary} className="mt-3" />
          </details>
        )}
      </header>

      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* 桌面端：吸顶目录 */}
        <aside className="hidden lg:block">
          <div className="sticky top-[calc(var(--navbar-height)+1.5rem)] max-h-[calc(100vh-var(--navbar-height)-3rem)] overflow-y-auto pr-1 pb-6">
            <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              目录
            </div>
            {toc()}
          </div>
        </aside>

        <div className="min-w-0 space-y-10">
          {studyPlan.children.map((section) => (
            <SectionBlock
              key={section.id}
              section={section}
              depth={1}
              stats={stats}
            />
          ))}
        </div>
      </div>

      {/* 移动端：目录抽屉 */}
      <Sheet open={tocOpen} onOpenChange={setTocOpen}>
        <SheetTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full bg-background/90 shadow-lg backdrop-blur lg:hidden"
          >
            <ListTree className="size-4" />
            目录
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{name}</SheetTitle>
          </SheetHeader>
          <div className="px-2 pb-6">{toc(() => setTocOpen(false))}</div>
        </SheetContent>
      </Sheet>
    </PageContainer>
  );
}

export default StudyPlan;
