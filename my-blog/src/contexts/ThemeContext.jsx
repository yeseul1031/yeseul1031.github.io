// ThemeContext.tsx
import { createContext, useState, useContext } from 'react';
const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);
    return (<ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>);
};
export const useTheme = () => useContext(ThemeContext);
