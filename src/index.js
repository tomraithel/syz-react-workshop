import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { ThemeProvider } from "styled-components";

import "./index.css";

const theme = {
  color: {
    text: "#222",
    white: "#fff",
    green: "#6CEC6C"
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
