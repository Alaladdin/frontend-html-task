import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

library.add(fas);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeColor: "light",
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      themeColor: prevState.themeColor === "light" ? "dark" : "light",
    }));
    document.documentElement.style.backgroundColor =
      this.state.themeColor === "light" ? "#202127" : "#e2e8f0";
  };

  render() {
    return (
      <Sidebar color={this.state.themeColor} toggleTheme={this.toggleTheme} />
    );
  }
}
