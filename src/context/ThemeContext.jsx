import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  // Force dark theme always
  const theme = 'dark';

  useEffect(() => {
    // Always set dark theme
    localStorage.setItem('sanziq-theme', 'dark');
    
    // Always add dark class to document
    document.documentElement.classList.add('dark');
    
    // Update meta theme-color to dark
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#111827');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 