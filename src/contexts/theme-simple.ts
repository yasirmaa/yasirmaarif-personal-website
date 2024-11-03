import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

export const ThemeContext = createContext({
  theme: 'light' as Theme,
  darkTheme: () => {},
  lightTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ThemeContext.Provider;

export default useTheme;
// not used in this project
