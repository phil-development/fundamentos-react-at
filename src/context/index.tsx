import usePersistedState from "../utils/usePersistedState";

import { createContext, useCallback, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

import { MainProps, ThemeContextData } from "./types";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: MainProps) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

    const toggleTheme = useCallback(() => setTheme(theme.title === 'light' ? dark : light), [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;