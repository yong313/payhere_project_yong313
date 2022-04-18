import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reportWebVitals from "./reportWebVitals";

const rootNode = document.getElementById("root");
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
