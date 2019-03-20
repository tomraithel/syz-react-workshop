import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { ThemeProvider } from "styled-components";
import { ColorProvider } from "./lib/colorContext";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

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
  <Provider store={store}>
    <ColorProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorProvider>
  </Provider>,

  document.getElementById("root")
);
