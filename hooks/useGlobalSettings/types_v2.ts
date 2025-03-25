type Language = "zh" | "en";

export interface GlobalSettingsStoreState {
  tagLanguage: Language;
  linkLanguage: Language;
  premium: boolean;
}

interface GlobalSettingsStoreActions {
  toggleTagLanguage: () => void;
  toggleLinkLanguage: () => void;
  togglePremium: () => void;
}

export type GlobalSettingsStore = GlobalSettingsStoreState &
  GlobalSettingsStoreActions;
