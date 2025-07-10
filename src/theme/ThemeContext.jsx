import { createContext, useContext, useState, useMemo } from "react";
import { lightTheme, darkTheme } from "./theme";
import PropTypes from "prop-types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getDefaultTheme = () => {
    const stored = getLocalStorage("themeName");
    if (stored) return stored;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };
  const [themeName, setThemeName] = useState(getDefaultTheme);
  const theme = useMemo(
    () => (themeName === "light" ? lightTheme : darkTheme),
    [themeName]
  );
  const toggleTheme = () => {
    const otherTheme = themeName === "light" ? "dark" : "light";
    setThemeName(otherTheme);
    setLocalStorage("themeName", otherTheme);
  };
  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useTheme = () => useContext(ThemeContext);
