import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useOptions } from "@/hooks/useOptions";
import { useProgress } from "@/hooks/useProgress";
import { StudyPlanData } from "@/types";
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import React, { useEffect, useRef } from "react";
import { ProblemList } from "./ProblemList";

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

interface SectionContainerProps {
  section: StudyPlanData.Section;
  level?: number;
}

const SectionContainer = React.memo(
  ({ section, level = 0 }: SectionContainerProps) => {
    const { progress } = useProgress();
    const { getOption } = useOptions();
    const todoKey = getOption().key;

    const stats = React.useMemo(() => {
      const calculate = (sec: StudyPlanData.Section): { total: number; undone: number } => {
        let total = sec.problems?.length || 0;
        let undone = sec.problems?.filter((p) => {
          const problemId = p.title.split(". ")[0];
          if (!problemId) return true;
          const pProgress = progress[problemId];
          return !pProgress || pProgress === todoKey;
        }).length || 0;

        sec.children?.forEach((child) => {
          const childStats = calculate(child);
          total += childStats.total;
          undone += childStats.undone;
        });
        return { total, undone };
      };
      return calculate(section);
    }, [section, progress, todoKey]);

    const innerHtml = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
      if (innerHtml.current) {
        innerHtml.current.querySelectorAll("a").forEach((link) => {
          link.style = "";
          link.setAttribute("target", "_blank");
          link.className = "underline text-blue-500";
        });
        innerHtml.current.querySelectorAll("img").forEach((img) => {
          img.style = "";
          img.className = "w-2/3 md:w-1/2";
        });
      }
    }, [innerHtml]);

    const createMarkup = (md: string) => {
      return { __html: marked.parse(md) };
    };

    const cardClasses = cn("scroll-mt-[70px]", {
      "w-full": section.children && section.children.length > 0,
    }, section.isLeaf ? "border" : "", "h-fit");

    const contentClasses = cn("flex flex-row flex-wrap p-1 gap-3", {
      "rounded dark:bg-muted/30": (section.problems && section.problems.length > 0),
    });

    return (
      <Card
        id={`${section.title}`}
        // 导航栏高度是 60px
        className={cardClasses}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{section.title}</CardTitle>
            {stats.total > 0 && (
              <div className="text-xs bg-muted/50 px-2 py-1 rounded-md border">
                {stats.undone === 0 ? (
                  <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span>✓</span> 已完成 {stats.total} 题
                  </span>
                ) : (
                  <span>
                    进度 <span className="text-foreground">{stats.total - stats.undone}</span>/{stats.total}
                  </span>
                )}
              </div>
            )}
          </div>
          {(section.summary || section.content) ? (
            <CardDescription>
              <p
                ref={innerHtml}
                className="p-4 rounded dark:bg-gray-800 rounded-lg max-w-md overflow-x-auto"
                dangerouslySetInnerHTML={createMarkup(section.summary || section.content || "")}
              />
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <div className={contentClasses}>
            {section.problems && section.problems.length ? (
              <div className="w-full flex-col">
                <ProblemList problems={section.problems} />
              </div>
            ) : null}
            {section.children && section.children.map((section) => (
              <SectionContainer
                key={section.title}
                section={section}
                level={level + 1}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export { SectionContainer };

