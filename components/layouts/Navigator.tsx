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
import Link from "next/link";
import React from "react";

const Navigator = React.memo(() => {
  return (
    <NavigationMenu className="bg-gray-80/90 px-4 py-3 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10 sticky z-100 top-0 max-w-full flex justify-between items-center">
      <div className="font-bold text-lg">力扣竞赛题目</div>
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
            <NavigationMenuTrigger className="cursor-pointer text-center text-base font-semibold w-fit select-none">
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
        </NavigationMenuList>
      </div>
      <div className="font-bold flex gap-1">
        <div>本页面所有题解来自</div>
        <Link href={BILIBILI_0X3F_SPACE.url} className="underline text-red-700">
          {BILIBILI_0X3F_SPACE.title}
        </Link>
        <div>感谢！</div>
      </div>
    </NavigationMenu>
  );
});

Navigator.displayName = "Navigator";
export { Navigator };
