import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./theme/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

library.add(fas);

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeToggle />
        <Sidebar />
      </ThemeProvider>
    );
  }
}
