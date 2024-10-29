import { createContext, useState, ReactNode, useEffect } from 'react';

export type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setDarkTheme: () => {},
  setLightTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || savedTheme === 'light' ? (savedTheme as Theme) : 'light';
  });

  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html')?.classList.remove('dark', 'light');
    document.querySelector('html')?.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
