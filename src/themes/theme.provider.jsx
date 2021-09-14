import React, { useState, createContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import themeCreator from "./base.theme";

export const ThemeContext = createContext((themeName) => {});

const CustomThemeProvider = ({ children }) => {
  const curThemeName = localStorage.getItem("appTheme") || "lightTheme";
  
  const [themeName, _setThemeName] = useState(curThemeName);

  const theme = themeCreator(themeName);
  
  const setThemeName = (themeName) => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
