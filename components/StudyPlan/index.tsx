"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useStudyPlan } from "@/hooks/useStudyPlan";
import { StudyPlanData } from "@/types";
import { useMemo } from "react";
import { SectionContainer } from "./SectionContainer";
import { TableOfContent } from "./TableOfContent";
import { TOC } from "./types";

function generateToc(sub: StudyPlanData.Section, level: number = 1): TOC {
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
  const { studyPlan, isPending, error } = useStudyPlan(plan);

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
      <div className="flex flex-col">
        {/* 导航栏高度是60px */}
        <SidebarTrigger className="fixed top-[var(--navbar-height)]" />
        <div className="flex flex-col gap-8 px-8">
          {studyPlan?.children.map((section) => (
            <SectionContainer key={section.title} section={section} />
          ))}
        </div>
      </div>
    </SidebarProvider>
  );
}

export default StudyPlan;
