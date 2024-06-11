import React, { createContext, useContext, useReducer } from "react";

const getStoredLang = () => localStorage.getItem('lang')
const setStoredLang = (lang: string) => localStorage.setItem('lang', lang)

const siteMap = {
"zh": "https://leetcode.cn",
"en": "https://leetcode.com",
};

type SiteStateType = {
  lang: "zh" | "en";
  site: "https://leetcode.cn" | "https://leetcode.com";
};

const initialState: SiteStateType = {
  // @ts-ignore
  lang: getStoredLang() || 'zh',
  site: siteMap[getStoredLang() || 'zh'],
};

const SiteContext = createContext<SiteStateType>(initialState);

type SiteDispatchType = {
  toggleSite: (lang: string) => void;
};

const SiteDispatch = createContext<SiteDispatchType>({
  toggleSite: (lang: string) => {},
});


const ActionTypes = {
  TOGGLE_SITE: "toggle_site",
};

type Action = {
  type: string;
  payload: "zh" | "en";
};

const ACTIONS: Record<string, (state: SiteStateType, action: Action) => any> =
{
  [ActionTypes.TOGGLE_SITE]: (state, action) => {
    const newSite = siteMap[action.payload];
    return { ...state, lang: action.payload, site: newSite };
  },
};

function reducer(state: SiteStateType, action: Action) {
  return ACTIONS[action.type](state, action);
}


const SiteProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);
  const toggleSite = (lang: "zh" | "en") => {
    dispath({ type: ActionTypes.TOGGLE_SITE, payload: lang });
    setStoredLang(lang);
  };

  return (
    <SiteContext.Provider value={state}>
      <SiteDispatch.Provider value={{ toggleSite }}>
        {children}
      </SiteDispatch.Provider>
    </SiteContext.Provider>
  );
};


const useSite = () => {
  const { lang, site } = useContext(SiteContext);
  const { toggleSite } = useContext(SiteDispatch);
  return { lang, site, toggleSite };
};

export { SiteProvider, useSite };
