"use client";

import { Button } from "@/components/ui-customized/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTERS } from "@/config/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Moon, Sun, Trophy } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { STUDY_PLAN_META, type StudyPlanMeta } from "../studyPlanMeta";
import SettingsPanel from "./SettingsPanel";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const navLinkClass = (active: boolean) =>
  cn(
    "relative inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors",
    "text-muted-foreground hover:bg-accent hover:text-foreground",
    active && "text-foreground after:absolute after:inset-x-3 after:-bottom-[11px] after:h-0.5 after:rounded-full after:bg-brand"
  );

const Brand = ({ alwaysShowName = false }: { alwaysShowName?: boolean }) => (
  <Link
    href={ROUTERS.contest.href}
    className="flex shrink-0 items-center gap-2 font-semibold tracking-tight"
  >
    <span className="grid size-8 place-items-center rounded-lg bg-brand text-brand-foreground">
      <Trophy className="size-4" />
    </span>
    <span className={alwaysShowName ? "" : "hidden sm:inline"}>LC-Rating</span>
  </Link>
);

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <Button
      size="icon"
      variant="ghost"
      className="relative"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">切换主题</span>
    </Button>
  );
};

const OPEN_DELAY = 80;
const CLOSE_DELAY = 150;

const PlanIcon = ({ plan, className }: { plan: StudyPlanMeta; className?: string }) => {
  const Icon = plan.icon;
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-lg transition-transform",
        plan.tone,
        className
      )}
    >
      {/* text-current：避免被菜单项的 svg 默认灰色样式覆盖 */}
      <Icon className="size-[18px] text-current" strokeWidth={2} />
    </span>
  );
};

/** 题单下拉：鼠标悬停自动展开，移出后稍作延迟收起；点击与键盘操作照常可用 */
const StudyPlanMenu = ({
  active,
  pathname,
}: {
  active: boolean;
  pathname: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const schedule = (next: boolean, delay: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), delay);
  };
  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  // 只对鼠标生效，触屏设备仍然点击展开
  const hover = {
    onPointerEnter: (e: React.PointerEvent) =>
      e.pointerType === "mouse" && schedule(true, OPEN_DELAY),
    onPointerLeave: (e: React.PointerEvent) =>
      e.pointerType === "mouse" && schedule(false, CLOSE_DELAY),
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        {...hover}
        className={cn(navLinkClass(active), "outline-none")}
      >
        {ROUTERS.studyPlans.title}
        <ChevronDown
          className={cn(
            "size-3.5 opacity-60 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        {...hover}
        align="start"
        sideOffset={10}
        className="w-[600px] rounded-xl p-0 shadow-lg"
      >
        <div className="flex items-baseline justify-between border-b px-4 py-2.5">
          <span className="text-sm font-semibold">算法题单</span>
          <span className="text-xs text-muted-foreground">
            <a
              href="https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/"
              target="_blank"
              rel="noreferrer"
              title="如何科学刷题？—— 灵茶山艾府"
              onClick={() => setOpen(false)}
              className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
            >
              灵茶山艾府（0x3F）整理
            </a>
            {" · 按推荐顺序排列"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-0.5 p-2">
          {STUDY_PLAN_META.map((plan, i) => {
            const current = isActive(pathname, plan.href);
            return (
              <DropdownMenuItem
                key={plan.key}
                asChild
                className={cn(
                  "group/plan items-center gap-3 rounded-lg px-2.5 py-2 focus:bg-accent",
                  current && "bg-accent"
                )}
              >
                <Link href={plan.href} onClick={() => setOpen(false)}>
                  <PlanIcon
                    plan={plan}
                    className="group-hover/plan:scale-105 group-focus/plan:scale-105"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5 text-sm font-medium">
                      <span className="text-[11px] tabular-nums text-muted-foreground/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {plan.title}
                      {current && (
                        <span className="size-1.5 rounded-full bg-brand" />
                      )}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                      {plan.desc}
                    </span>
                  </span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MobileMenu = ({ pathname }: { pathname: string }) => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  const item = (href: string, title: string) => (
    <Link
      key={href}
      href={href}
      onClick={close}
      className={cn(
        "rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
        isActive(pathname, href)
          ? "bg-accent font-medium text-foreground"
          : "text-muted-foreground"
      )}
    >
      {title}
    </Link>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Menu />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <Brand alwaysShowName />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 pb-6">
          {item(ROUTERS.contest.href, ROUTERS.contest.title)}
          {item(ROUTERS.problemset.href, ROUTERS.problemset.title)}
          <div className="mt-4 mb-1 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
            {ROUTERS.studyPlans.title}
          </div>
          {STUDY_PLAN_META.map((plan) => (
            <Link
              key={plan.key}
              href={plan.href}
              onClick={close}
              className={cn(
                "flex items-center gap-3 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent",
                isActive(pathname, plan.href)
                  ? "bg-accent font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <PlanIcon plan={plan} className="size-7 rounded-md [&_svg]:size-4" />
              {plan.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const Navigator = React.memo(() => {
  const pathname = usePathname() ?? "";
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--navbar-height)] border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-full max-w-[var(--content-max-width)] items-center gap-2 px-4 md:gap-6 md:px-6">
        <MobileMenu pathname={pathname} />
        <Brand />

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href={ROUTERS.contest.href}
            className={navLinkClass(isActive(pathname, ROUTERS.contest.href))}
          >
            {ROUTERS.contest.title}
          </Link>
          <Link
            href={ROUTERS.problemset.href}
            className={navLinkClass(
              isActive(pathname, ROUTERS.problemset.href)
            )}
          >
            {ROUTERS.problemset.title}
          </Link>
          <StudyPlanMenu
            active={pathname.startsWith("/studyplan")}
            pathname={pathname}
          />
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <SettingsPanel show={showSettings} onOpenChange={setShowSettings} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});

Navigator.displayName = "Navigator";
export { Navigator };
