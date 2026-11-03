"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface FilterButtonProps {
  label: string;
  icon: ReactNode;
  /** 已生效时显示在按钮上的摘要，如「1600–1900」「3 个」 */
  summary?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
}

export function FilterButton({
  label,
  icon,
  summary,
  children,
  contentClassName,
}: FilterButtonProps) {
  const active = summary !== undefined && summary !== null && summary !== false;
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-sm transition-colors outline-none",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50",
          active
            ? "border-brand/50 bg-brand/10 text-foreground"
            : "border-dashed text-muted-foreground hover:bg-accent hover:text-foreground"
        )}
      >
        <span className="[&_svg]:size-3.5">{icon}</span>
        {label}
        {active && (
          <>
            <span className="mx-0.5 h-3.5 w-px bg-border" />
            <span className="max-w-40 truncate font-medium text-brand">
              {summary}
            </span>
          </>
        )}
        <ChevronDown className="size-3.5 opacity-50" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className={cn("w-80 p-0", contentClassName)}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

/** 浮层底部的「清除」操作栏 */
export function PanelFooter({
  onClear,
  disabled,
  children,
}: {
  onClear: () => void;
  disabled?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2 border-t px-3 py-2">
      <div className="text-xs text-muted-foreground">{children}</div>
      <button
        type="button"
        onClick={onClear}
        disabled={disabled}
        className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-40"
      >
        清除
      </button>
    </div>
  );
}
