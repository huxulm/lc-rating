import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const PROGRESS_CONFIG_KEY = "lc-rating-progress-config";

export type OptionValue = {
  key: string;
  label: string;
  color: string;
};

export type Options = Record<string, OptionValue>;
export type OptionKey = keyof Options;

export const defaultOptions = {
  TODO: {
    key: "TODO",
    label: "",
    color: "#343a40",
  },
  WORKING: {
    key: "WORKING",
    label: "攻略中",
    color: "#1E90FF",
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

interface OptionsStoreState {
  options: Options;
}

interface OptionsStoreActions {
  setOptions: (newOptions: Options) => void;
  getOption: (key?: OptionKey) => OptionValue;
}

type OptionsStore = OptionsStoreState & OptionsStoreActions;

const useOptionsStore = create<OptionsStore>()(
  shared(
    persist(
      (set, get) => ({
        options: {},

        getOption: (key) => {
          if (typeof key === "undefined") {
            return defaultOptions.TODO;
          }
          const fullConfig = { ...defaultOptions, ...get().options } as Options;
          let option = fullConfig[key];
          if (option === undefined) {
            console.error(`Invalid progress key: ${key}`);
            return {
              key,
              label: `"${key}" 未定义`,
              color: "#dc3545",
            };
          }
          return option;
        },

        setOptions: (newOptions) => {
          const map = new Map<string, OptionValue>();

          Object.entries(newOptions).forEach(([key, value]) => {
            if (!key.trim()) {
              console.error("Progress key cannot be empty");
              return;
            }

            if (map.has(key)) {
              console.error(`Duplicate progress key: ${key}`);
              return;
            }

            map.set(key, {
              key: key.trim(),
              label: value.label,
              color: value.color,
            });
          });

          set({ options: { ...defaultOptions, ...Object.fromEntries(map) } });
        },
      }),
      {
        name: PROGRESS_CONFIG_KEY,
      }
    )
  )
);

export const useOptions = () => {
  const { options: customOptions, getOption, setOptions } = useOptionsStore();

  const fullConfig = { ...defaultOptions, ...customOptions };
  const optionKeys = Object.keys(fullConfig);

  return {
    optionKeys,
    getOption,
    setOptions,
  };
};
