import CustomizeOptions from "./settingPages/CustomizeOption";
import SyncProgress from "./settingPages/SyncProgress";
import { List, RefreshCw } from "lucide-react";

export type SettingTabType = {
  key: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export const settingTabs: SettingTabType[] = [
  {
    key: "SyncProgress",
    title: "同步题目进度",
    icon: <RefreshCw />,
    component: <SyncProgress />,
  },
  {
    key: "CustomizeOptions",
    title: "自定义进度选项",
    icon: <List />,
    component: <div></div>,
  },
];
