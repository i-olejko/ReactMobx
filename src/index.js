import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "mobx-react";
import BirdStore from "./stores/BirdStore";

import "./styles.css";

const Root = (
  <Provider BirdStore={BirdStore}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(Root, rootElement);
