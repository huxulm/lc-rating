export type OptionValue = {
  key: string;
  label: string;
  color: string;
};

export type OptionKey = string;
export type Options = Record<OptionKey, OptionValue>;

export interface OptionsStoreState {
  options: Options;
}

interface OptionsStoreActions {
  setOptions: (newOptions: Options) => void;
  getOption: (key?: OptionKey) => OptionValue;
}

export type OptionsStore = OptionsStoreState & OptionsStoreActions;
