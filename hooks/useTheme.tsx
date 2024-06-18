"use client";
import React, { createContext, useContext, useReducer } from "react";

const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = (theme: string) => localStorage.setItem('theme', theme)

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme()
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme: string) => {
  if (theme === 'auto') {
    document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
}

type ThemeStateType = {
  theme: "light" | "dark";
};

const initialState: ThemeStateType = {
  // @ts-ignore
  theme: getStoredTheme() || 'light',
};

const ThemeContext = createContext<ThemeStateType>(initialState);

type ThemeDispatchType = {
  toggleTheme: (theme: string) => void;
};

const ThemeDispatch = createContext<ThemeDispatchType>({
  toggleTheme: (theme: string) => {},
});

const ActionTypes = {
  TOGGLE_THEME: "toggle_theme",
};

type Action = {
  type: string;
  payload?: any;
};

const ACTIONS: Record<string, (state: ThemeStateType, action: Action) => any> =
  {
    [ActionTypes.TOGGLE_THEME]: (state, action) => {
      return { ...state, theme: action.payload };
    },
  };

function reducer(state: ThemeStateType, action: Action) {
  return ACTIONS[action.type](state, action);
}

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);
  const toggleTheme = (theme: string) => {
    dispath({ type: ActionTypes.TOGGLE_THEME, payload: theme });
    setTheme(theme);
    setStoredTheme(theme);
  };
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatch.Provider value={{ toggleTheme }}>
        {children}
      </ThemeDispatch.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeDispatch);
  return { theme, toggleTheme };
};

export { ThemeProvider, useTheme };
