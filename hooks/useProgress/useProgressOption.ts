import useStorage from "@hooks/useStorage";
import { useMemo } from "react";

const PROGRESS_CONFIG_KEY = "lc-rating-progress-config";

export type OptionEntry = {
  key: string;
  label: string;
  color: string;
  [key: string]: unknown;
};

const defaultOptions = {
  TODO: {
    key: "TODO",
    label: "",
    color: "#343a40",
  },
  WORKING: {
    key: "WORKING",
    label: "攻略中",
    color: "dodgerblue",
  },
  TOO_HARD: {
    key: "TOO_HARD",
    label: "太难了，不会",
    color: "#dc3545",
  },
  REVIEW_NEEDED: {
    key: "REVIEW_NEEDED",
    label: "回头复习下",
    color: "#fd7e14",
  },
  AC: {
    key: "AC",
    label: "过了",
    color: "#28a745",
  },
} as const;

type DefaultOptionsType = typeof defaultOptions;
type CustomOptionsType = Record<string, OptionEntry>;
export type ProgressOptionsType = DefaultOptionsType & CustomOptionsType;
export type ProgressKeyType = keyof ProgressOptionsType;

export function useProgressOptions() {
  const [customOptions, setCustomOptions] =
    useStorage<CustomOptionsType>(PROGRESS_CONFIG_KEY);

  const fullConfig = useMemo<ProgressOptionsType>(
    () => ({
      ...defaultOptions,
      ...customOptions,
    }),
    [customOptions]
  );

  const optionKeys = useMemo(() => Object.keys(fullConfig), [fullConfig]);

  const getOption = (key: ProgressKeyType | null | undefined) => {
    if (!key) {
      return defaultOptions.TODO;
    }
    if (!(key in fullConfig)) {
      console.error(`Invalid progress key: ${key}`);
      return {
        key,
        label: `"${key}" 未定义`,
        color: "#dc3545",
      };
    }
    return fullConfig[key];
  };

  const updateOptions = (newOptions: ProgressOptionsType) => {
    setCustomOptions((prev) => ({ ...prev, ...newOptions }));
  };

  return {
    optionKeys,
    getOption,
    updateOptions,
  };
}
