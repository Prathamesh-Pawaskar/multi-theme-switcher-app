import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Theme, themes, ThemeName } from '../themes/themes';

interface ThemeContextType {
  theme: Theme;
  setThemeName: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem('appTheme') as ThemeName;
    return storedTheme || 'Theme 1';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('appTheme') as ThemeName;
    return themes.find(t => t.name === storedTheme) || themes[0];
  });


  useEffect(() => {
    const newTheme = themes.find(t => t.name === themeName);
    if (newTheme) {
      setTheme(newTheme);
      localStorage.setItem('appTheme', themeName);

      // Dynamically add the theme's class to the body element
      document.body.className = newTheme.className;
    }
  }, [themeName]);

  const value = {
    theme,
    setThemeName,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
