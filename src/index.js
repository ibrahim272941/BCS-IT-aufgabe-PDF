import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux/auhtRedux/store";

import { Provider } from "react-redux";
import { BasePovider } from "./contexts/BaseContext";

ReactDOM.render(
  <Provider store={store}>
    <BasePovider>
      <App />
    </BasePovider>
  </Provider>,
  document.getElementById("root")
);
