"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useStudyPlan } from "@/hooks/useStudyPlan";
import { StudyPlanData } from "@/types";
import { useMemo } from "react";
import { SectionContainer } from "./SectionContainer";
import { TableOfContent } from "./TableOfContent";
import { TOC } from "./types";

function generateToc(sub: StudyPlanData.Section, level: number = 1): TOC {
  if (!sub.children || sub.children.length === 0) {
    return {
      title: sub.title,
      count: 0,
      level,
      children: [],
    };
  }
  const children = sub.children.map((child) => generateToc(child, level + 1));
  const count = children.reduce((acc, child) => acc + child.count, 0);
  return {
    title: sub.title,
    count,
    level,
    children,
  };
}

interface StudyPlanProps {
  plan: string;
}

function StudyPlan({ plan }: StudyPlanProps) {
  const { studyPlan } = useStudyPlan(plan);

  const toc = useMemo(() => {
    if (!studyPlan) return null;
    const res = studyPlan && studyPlan.children.map(generateToc, 1);
    return (
      studyPlan && {
        title: plan,
        level: 0,
        count: res.reduce((acc, child) => acc + child.count, 0),
        children: res,
      }
    );
  }, [studyPlan, plan]);

  return (
    <SidebarProvider>
      {toc && <TableOfContent toc={toc} />}
      <div className="flex flex-col flex-1 min-w-0">
        {/* 导航栏高度是60px */}
        <SidebarTrigger className="fixed top-[var(--navbar-height)]" />
        <div className="flex flex-col gap-6 px-8 py-4">
          {studyPlan?.src && (
            <p className="text-base font-bold italic">
              来源:
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                href={studyPlan.src}
              >
                {studyPlan.src}
              </a>
              {studyPlan.last_update && (
                <span className="ml-3 font-semibold italic">
                  最近更新: {studyPlan.last_update}
                </span>
              )}
            </p>
          )}
          <div className="flex flex-row flex-wrap gap-8">
            {studyPlan?.children.map((section) => (
              <SectionContainer key={section.title} section={section} />
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default StudyPlan;
