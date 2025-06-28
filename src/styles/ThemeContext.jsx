import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";

// إنشاء Context
const ThemeContext = createContext();

// Provider لإدارة الثيم
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook مخصص لاستخدام الثيم
export const useTheme = () => useContext(ThemeContext);
