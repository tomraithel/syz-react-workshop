import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { ThemeProvider } from "styled-components";

import "./index.css";
import { ColorProvider } from "./lib/colorContext";

const theme = {
  color: {
    gray: "#EFF1F0",
    gray2: "#bbb",
    text: "#222",
    white: "#fff",
    green: "#6CEC6C"
  }
};

ReactDOM.render(
  <ColorProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ColorProvider>,

  document.getElementById("root")
);
