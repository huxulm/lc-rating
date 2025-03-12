import { LC_RATING_GLOBAL_SETTING_KEY } from "@/config/constants";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "zh" | "en";

interface GlobalSettingsStoreState {
  language: Language;
  showEnLink: boolean;
  premium: boolean;
}

interface GlobalSettingsStoreActions {
  toggleLanguage: () => void;
  toggleShowEnLink: () => void;
  togglePremium: () => void;
}

type GlobalSettingsStore = GlobalSettingsStoreState &
  GlobalSettingsStoreActions;

const initialState: GlobalSettingsStoreState = {
  language: "zh",
  showEnLink: true,
  premium: true,
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
      {
        name: LC_RATING_GLOBAL_SETTING_KEY,
      }
    )
  )
);
