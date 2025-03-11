import { LC_RATING_GLOBAL_SETTING_KEY } from "@/config/constants";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";
type Language = "zh" | "en";

interface GlobalSettingsStoreState {
  theme: Theme;
  language: Language;
  showEnLink: boolean;
  premium: boolean;
}

interface GlobalSettingsStoreActions {
  toggleTheme: () => void;
  toggleLanguage: () => void;
  toggleShowEnLink: () => void;
  togglePremium: () => void;
}

type GlobalSettingsStore = GlobalSettingsStoreState &
  GlobalSettingsStoreActions;

const initialState: GlobalSettingsStoreState = {
  theme: "light",
  language: "zh",
  showEnLink: true,
  premium: true,
};

export const useGlobalSettingsStore = create<GlobalSettingsStore>()(
  shared(
    persist(
      (set, get) => ({
        ...initialState,

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "dark" ? "light" : "dark",
          })),

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
