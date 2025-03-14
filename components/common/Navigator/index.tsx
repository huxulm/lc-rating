"use client";

import { Button } from "@/components/ui-customized/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui-customized/navigation-menu";
import { BILIBILI_0X3F_SPACE, ROUTERS } from "@/config/constants";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { GithubBadge } from "./GithubBadge";
import SettingsPanel from "./SettingsPanel";

const Navigator = React.memo(() => {
  const { setTheme } = useTheme();
  const [show, setShow] = React.useState(false);

  return (
    <NavigationMenu className="px-4 py-3 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10 fixed w-full z-10 top-0 max-w-full flex justify-between items-center h-[var(--navbar-height)] md:h-[var(--navbar-height)]">
      <div className="font-bold text-lg hidden md:block">力扣竞赛题目</div>
      <div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className="cursor-pointer text-center text-base font-semibold"
            >
              <Link href={ROUTERS.contest.href}>{ROUTERS.contest.title}</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className="cursor-pointer text-center text-base font-semibold"
            >
              <Link href={ROUTERS.problemset.href}>
                {ROUTERS.problemset.title}
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer text-center text-base font-semibold w-fit select-none bg-transparent">
              {ROUTERS.studyPlans.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 grid-cols-3">
                {ROUTERS.studyPlans.children.map((plan) => (
                  <Button
                    key={plan.title}
                    variant="secondary"
                    className="cursor-pointer text-center text-base font-medium"
                  >
                    <Link href={plan.href}>{plan.title}</Link>
                  </Button>
                ))}
              </ul>
            </NavigationMenuContent>
            <NavigationMenuViewport />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <SettingsPanel show={show} onOpenChange={setShow} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <div className="font-bold md:flex gap-1 hidden">
        <div>本页面所有题解来自</div>
        <Link href={BILIBILI_0X3F_SPACE.url} className="underline text-red-700">
          {BILIBILI_0X3F_SPACE.title}
        </Link>
        <div>感谢！</div>
      </div>
      <div className="flex gap-4">
        <Button
          size="icon"
          variant="outline"
          className="rounded-full"
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <GithubBadge />
      </div>
    </NavigationMenu>
  );
});

Navigator.displayName = "Navigator";
export { Navigator };
