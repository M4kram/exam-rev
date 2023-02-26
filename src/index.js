import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
