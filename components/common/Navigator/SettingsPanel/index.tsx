import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { settingTabs } from "./config";
import Sidebar from "./Sidebar";

interface SettingsPanelProps {
  show: boolean;
  onOpenChange: (show: boolean) => void;
}

export function SettingsPanel({ show, onOpenChange }: SettingsPanelProps) {
  const [activeTab = "", setActiveTab] = useState(settingTabs[0]?.key);

  const ActiveComponent = settingTabs.find(
    (tab) => tab.key === activeTab
  )?.component;

  return (
    <Dialog open={show} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">站点设置</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl w-full sm:w-24/30 md:w-20/30 lg:15/30">
        <DialogHeader>
          <DialogTitle>站点设置</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="">
            <Sidebar
              tabs={settingTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          <div className="w-full">
            <div className="p-1 rounded shadow-sm min-h-[300px]">
              {ActiveComponent ? ActiveComponent : "页面配置错误"}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={() => onOpenChange(false)}>
            关闭
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsPanel;
