import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./redux/store/index";
import Root from "./Root";
import theme from "./theme";

const APP = "app";

const root = createRoot(document.getElementById(APP));

root.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <Root />
    </ThemeProvider>
  </Provider>,
);
