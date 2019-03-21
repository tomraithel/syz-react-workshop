import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ColorProvider } from "./lib/colorContext";
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
  <BrowserRouter>
    <Provider store={store}>
      <ColorProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ColorProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
