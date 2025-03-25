import { LC_RATING_OPTION_KEY, STORAGE_VERSION } from "@/config/constants";
import { optionToLTS } from "@/migrate/toLatest";
import { useMemo } from "react";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { migrateFromLocalStorage } from "./migrateFromV1";
import {
  OptionKey,
  Options,
  OptionsStore,
  OptionsStoreState,
  OptionValue,
} from "./types_v2";

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

const persistOption: PersistOptions<OptionsStore, OptionsStoreState> = {
  name: LC_RATING_OPTION_KEY,
  version: STORAGE_VERSION,
  migrate: optionToLTS,
};

const sharedOption = {
  name: LC_RATING_OPTION_KEY,
};

const useOptionsStore = create<OptionsStore>()(
  shared(
    persist(
      (set, get) => ({
        ...migrateFromLocalStorage(),

        getOption: (key) => {
          const fullConfig: Options & typeof defaultOptions = {
            ...defaultOptions,
            ...get().options,
          };
          if (typeof key === "undefined") {
            return fullConfig.TODO;
          }
          let option = fullConfig[key];
          if (option === undefined) {
            console.error(`[useOptionsStore] Invalid progress key: ${key}`);
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
              console.error("[useOptionsStore] Progress key cannot be empty");
              return;
            }

            if (map.has(key)) {
              console.error(`[useOptionsStore] Duplicate progress key: ${key}`);
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
      persistOption
    ),
    sharedOption
  )
);

export const useOptions = () => {
  const { options, getOption, setOptions } = useOptionsStore();

  const optionKeys = useMemo(
    () => Object.keys({ ...defaultOptions, ...options }) as OptionKey[],
    [options]
  );

  return {
    options,
    optionKeys,
    getOption,
    setOptions,
  };
};
