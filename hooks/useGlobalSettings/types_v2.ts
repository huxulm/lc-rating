type Language = "zh" | "en";

export interface GlobalSettingsStoreState {
  tagLanguage: Language;
  linkLanguage: Language;
  premium: boolean;
}

interface GlobalSettingsStoreActions {
  toggleTagLanguage: () => void;
  setTagLanguage: (lang: Language) => void;
  toggleLinkLanguage: () => void;
  setLinkLanguage: (lang: Language) => void;
  togglePremium: () => void;
  setPremium: (premium: boolean) => void;
}

export type GlobalSettingsStore = GlobalSettingsStoreState &
  GlobalSettingsStoreActions;
