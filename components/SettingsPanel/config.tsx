import { BiSolidCustomize } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import CustomizeOptions from "./settingPages/CustomizeOptions";
import SyncProgress from "./settingPages/SyncProgress";

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
    key: "CustomizeOptions",
    title: "自定义进度选项",
    icon: <BiSolidCustomize />,
    component: <CustomizeOptions />,
  },
];
