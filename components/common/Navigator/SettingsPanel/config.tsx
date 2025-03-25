import { List, RefreshCw, Settings } from "lucide-react";
import CustomizeOptions from "./settingPages/CustomizeOption";
import { Preference } from "./settingPages/Preference";
import SyncStorage from "./settingPages/SyncStorage";

export type SettingTabType = {
  key: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export const settingTabs: SettingTabType[] = [
  {
    key: "SyncProgress",
    title: "同步站点数据",
    icon: <RefreshCw />,
    component: <SyncStorage />,
  },
  {
    key: "CustomizeOptions",
    title: "自定义进度选项",
    icon: <List />,
    component: <CustomizeOptions />,
  },
  {
    key: "Preference",
    title: "页面偏好设置",
    icon: <Settings />,
    component: <Preference />,
  },
];
