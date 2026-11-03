"use client";

import { cn } from "@/lib/utils";
import type { StudyPlanData } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import type { Stats } from "./useSectionStats";

/** 监听正文章节进入视口，返回当前所在章节 id */
export function useActiveSection(deps: unknown) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    if (!els.length) return;
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        // 取视口上部区域内最深（最后出现）的章节，嵌套时即为最具体的小节
        const ids = els.map((el) => el.id).filter((id) => visible.has(id));
        if (ids.length) setActive(ids[ids.length - 1]);
      },
      { rootMargin: "-72px 0px -65% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [deps]);

  return active;
}

interface PlanTocProps {
  sections: StudyPlanData.Section[];
  stats: Map<string, Stats>;
  active?: string;
  onNavigate?: () => void;
}

export const PlanToc = React.memo(
  ({ sections, stats, active, onNavigate }: PlanTocProps) => {
    const listRef = useRef<HTMLDivElement>(null);

    // 当前章节变化时，让目录中的高亮项保持可见
    useEffect(() => {
      if (!active || !listRef.current) return;
      const el = listRef.current.querySelector<HTMLElement>(
        `[data-toc="${active}"]`
      );
      el?.scrollIntoView({ block: "nearest" });
    }, [active]);

    const isActiveBranch = (s: StudyPlanData.Section): boolean =>
      s.id === active || s.children.some(isActiveBranch);

    const renderItems = (items: StudyPlanData.Section[], depth: number) => (
      <ul className={cn(depth > 1 && "ml-3 border-l pl-2")}>
        {items.map((s) => {
          const st = stats.get(s.id);
          const isActive = s.id === active;
          const complete = !!st && st.total > 0 && st.done === st.total;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-toc={s.id}
                onClick={onNavigate}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-md px-2 py-1 text-[13px] leading-snug transition-colors hover:bg-accent hover:text-foreground",
                  depth === 1 ? "font-medium" : "text-muted-foreground",
                  isActive && "bg-accent font-medium text-foreground"
                )}
              >
                <span className="min-w-0 truncate">{s.title}</span>
                {st && st.total > 0 && (
                  <span
                    className={cn(
                      "shrink-0 text-[11px] tabular-nums",
                      complete ? "text-emerald-500" : "text-muted-foreground/70"
                    )}
                  >
                    {complete ? "✓" : `${st.done}/${st.total}`}
                  </span>
                )}
              </a>
              {/* 三级及以下只在当前分支展开，避免目录过长 */}
              {s.children.length > 0 &&
                (depth < 2 || isActiveBranch(s)) &&
                renderItems(s.children, depth + 1)}
            </li>
          );
        })}
      </ul>
    );

    return (
      <nav aria-label="题单目录" className="text-sm">
        <div ref={listRef}>
          {renderItems(sections, 1)}
        </div>
      </nav>
    );
  }
);
PlanToc.displayName = "PlanToc";
