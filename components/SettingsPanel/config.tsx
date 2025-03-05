import CustomizeOption from "./settingPages/CustomizeOption";
import SyncProgress from "./settingPages/SyncProgress";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSolidCustomize } from "react-icons/bi";
export type SettingTabType = {
  key: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export const setting_tabs: SettingTabType[] = [
  {
    key: "SyncProgress",
    title: "同步题目进度",
    icon: <LuArrowUpDown />,
    component: <SyncProgress />,
  },
  {
    key: "CustomizeOption",
    title: "自定义进度选项",
    icon: <BiSolidCustomize />,
    component: <CustomizeOption />,
  },
];
