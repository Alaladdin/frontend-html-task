import { createContext, useContext, useState, useMemo } from "react";
import { lightTheme, darkTheme } from "./theme";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");
  const theme = useMemo(
    () => (themeName === "light" ? lightTheme : darkTheme),
    [themeName]
  );
  const toggleTheme = () =>
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
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
