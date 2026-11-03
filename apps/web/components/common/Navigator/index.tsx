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
import { GithubBadge } from "./GithubBadge";
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

const StudyPlanMenu = ({ active }: { active: boolean }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className={cn(navLinkClass(active), "outline-none")}>
      {ROUTERS.studyPlans.title}
      <ChevronDown className="size-3.5 opacity-60" />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="start"
      sideOffset={10}
      className="grid w-[360px] grid-cols-3 gap-1 p-2"
    >
      {ROUTERS.studyPlans.children.map((plan) => (
        <DropdownMenuItem key={plan.href} asChild className="justify-center">
          <Link href={plan.href}>{plan.title}</Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

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
          {ROUTERS.studyPlans.children.map((plan) =>
            item(plan.href, plan.title)
          )}
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
          <StudyPlanMenu active={pathname.startsWith("/studyplan")} />
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <SettingsPanel show={showSettings} onOpenChange={setShowSettings} />
          <ThemeToggle />
          <GithubBadge />
        </div>
      </div>
    </header>
  );
});

Navigator.displayName = "Navigator";
export { Navigator };
