import { safeParseJSON } from "@/utils/safeParseJSON";
import { Options, OptionsStoreState } from "./types_v2";
import { isBrowser } from "@/utils/client";

const LC_RATING_OPTION_KEY = "lc-rating-progress-config";

export const migrateFromLocalStorage = (): OptionsStoreState => {
  if (!isBrowser()) {
    return { options: {} };
  }
  try {
    const legacyData = localStorage.getItem(LC_RATING_OPTION_KEY);
    if (!legacyData) {
      return { options: {} };
    }
    const parsedData = safeParseJSON<Options>(legacyData) || {};
    return { options: parsedData };
  } catch (error) {
    console.error("Option migration from localStorage failed:", error);
    return { options: {} };
  }
};
