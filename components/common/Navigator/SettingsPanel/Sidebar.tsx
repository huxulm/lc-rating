import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui-customized/tabs";

import { SettingTabType } from "./config";
import React from "react";

interface SidebarProps {
  tabs: SettingTabType[];
  activeTab?: string | undefined;
  onTabChange: (key: string) => void;
}

const Sidebar = React.memo<SidebarProps>(
  ({ tabs, activeTab, onTabChange }: SidebarProps) => {
    return (
      <Tabs value={activeTab} onValueChange={onTabChange}>
        <TabsList className="flex flex-row lg:flex-col gap-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key} className="w-full justify-start">
              <span>{tab.icon}</span>
              <span>{tab.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
