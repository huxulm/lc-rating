import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";
import React from "react";
import { TOC } from "./types";

interface TableOfContentProps {
  toc: TOC;
}

const TableOfContent = React.memo(({ toc }: TableOfContentProps) => {
  return (
    <Sidebar className="top-[var(--navbar-height)] h-auto">
      <SidebarContent>
        <SidebarMenu>
          {toc.children.map((subToc) => (
            <SidebarMenuItem key={subToc.title}>
              <SidebarMenuButton asChild>
                <a href={`#${subToc.title}`} className="font-medium">
                  {subToc.title}
                </a>
              </SidebarMenuButton>
              {subToc.children?.length ? (
                <SidebarMenuSub>
                  {subToc.children.map((subToc) => (
                    <Tree key={subToc.title} toc={subToc} />
                  ))}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
});

TableOfContent.displayName = "TableOfContent";

export { TableOfContent };

interface TreeProps {
  toc: TOC;
}

function Tree({ toc }: TreeProps) {
  return (
    <SidebarMenuItem key={toc.title}>
      <SidebarMenuButton asChild>
        <a href={`#${toc.title}`} className="font-medium">
          {toc.title}
        </a>
      </SidebarMenuButton>
      {toc.children?.length ? (
        <SidebarMenuSub>
          {toc.children.map((toc) => (
            <Tree key={toc.title} toc={toc} />
          ))}
        </SidebarMenuSub>
      ) : null}
    </SidebarMenuItem>
  );
}
