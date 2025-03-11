import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StudyPlanData } from "@/types";
import React, { useEffect, useRef } from "react";
import { ProblemList } from "./ProblemList";

interface SectionContainerProps {
  section: StudyPlanData.Section;
}

const SectionContainer = React.memo(({ section }: SectionContainerProps) => {
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

  return (
    <Card
      id={`${section.title}`}
      // 导航栏高度是 60px
      className={cn("scroll-mt-[70px]", {
        "w-full": section.children.length,
      })}
    >
      <CardHeader>
        <CardTitle>{section.title}</CardTitle>
        {section.summary ? (
          <CardDescription>
            <p
              ref={innerHtml}
              className="p-4 rounded bg-gray-100 rounded-lg"
              dangerouslySetInnerHTML={{ __html: section.summary }}
            />
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>
        {section.problems.length ? (
          <ProblemList problems={section.problems} />
        ) : (
          <div className="flex flex-row flex-wrap p-1 gap-3">
            {section.children.map((section) => (
              <SectionContainer key={section.title} section={section} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
});

SectionContainer.displayName = "SectionContainer";

export { SectionContainer };
