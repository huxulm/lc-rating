import { useCallback, useMemo } from "react";
import { useGlobalSettingsStore } from "./useGlobalSettings";
import { Options, useOptions } from "./useOptions";
import { useProgressStore } from "./useProgress";

export function useSiteStorage() {
  const {
    tagLanguage,
    setTagLanguage,
    linkLanguage,
    setLinkLanguage,
    premium,
    setPremium,
  } = useGlobalSettingsStore();
  const { options, setOptions } = useOptions();
  const { progress, setAllProgress } = useProgressStore();

  const siteStorage = useMemo(
    () => ({
      tagLanguage,
      linkLanguage,
      premium,
      options,
      progress,
    }),
    [tagLanguage, linkLanguage, premium, options, progress]
  );

  const setSiteStorage = useCallback(
    (siteStorage: {
      tagLanguage: "zh" | "en";
      linkLanguage: "zh" | "en";
      premium: boolean;
      options: Options;
      progress: Record<string, string>;
    }) => {
      setTagLanguage(siteStorage.tagLanguage);
      setLinkLanguage(siteStorage.linkLanguage);
      setPremium(siteStorage.premium);
      setOptions(siteStorage.options);
      setAllProgress(siteStorage.progress);
    },
    []
  );

  return { siteStorage, setSiteStorage };
}
