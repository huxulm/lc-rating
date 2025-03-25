import {
  LC_RATING_GLOBAL_SETTING_KEY,
  STORAGE_VERSION,
} from "@/config/constants";
import { globalSettingToLTS } from "@/migrate/toLatest";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { GlobalSettingsStore, GlobalSettingsStoreState } from "./types_v2";

const initialState: GlobalSettingsStoreState = {
  tagLanguage: "zh",
  linkLanguage: "zh",
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
        toggleTagLanguage: () =>
          set({ tagLanguage: get().tagLanguage === "zh" ? "en" : "zh" }),

        toggleLinkLanguage: () =>
          set((state) => ({
            linkLanguage: get().linkLanguage === "zh" ? "en" : "zh",
          })),

        togglePremium: () => set({ premium: !get().premium }),
      }),
      persistOption
    ),
    sharedOption
  )
);
