import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

// PROVIDER
import { Provider } from "react-redux";
// STORE

const reducerExample = () => {
  console.log("hithere");
};

// ----------------------------------------------

const store = createStore(reducerExample);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
