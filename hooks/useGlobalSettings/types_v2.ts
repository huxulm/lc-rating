type Language = "zh" | "en";

export interface GlobalSettingsStoreState {
  language: Language;
  showEnLink: boolean;
  premium: boolean;
}

interface GlobalSettingsStoreActions {
  toggleLanguage: () => void;
  toggleShowEnLink: () => void;
  togglePremium: () => void;
}

export type GlobalSettingsStore = GlobalSettingsStoreState &
  GlobalSettingsStoreActions;
