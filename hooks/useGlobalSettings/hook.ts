import {
  LC_RATING_GLOBAL_SETTING_KEY,
  STORAGE_VERSION,
} from "@/config/constants";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { GlobalSettingsStore, GlobalSettingsStoreState } from "./types_v2";
import { globalSettingToLTS } from "@/migrate/toLatest";

const initialState: GlobalSettingsStoreState = {
  language: "zh",
  showEnLink: true,
  premium: true,
};

const persistOption: PersistOptions<
  GlobalSettingsStore,
  GlobalSettingsStoreState
> = {
  name: LC_RATING_GLOBAL_SETTING_KEY,
  version: STORAGE_VERSION,
  migrate: globalSettingToLTS,
};

const sharedOption = {
  name: LC_RATING_GLOBAL_SETTING_KEY,
};

export const useGlobalSettingsStore = create<GlobalSettingsStore>()(
  shared(
    persist(
      (set, get) => ({
        ...initialState,
        toggleLanguage: () =>
          set({ language: get().language === "zh" ? "en" : "zh" }),

        toggleShowEnLink: () =>
          set((state) => ({
            showEnLink: !state.showEnLink,
          })),

        togglePremium: () => set({ premium: !get().premium }),
      }),
      persistOption
    ),
    sharedOption
  )
);
