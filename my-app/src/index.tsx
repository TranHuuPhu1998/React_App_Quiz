import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


import App from "./App";
import {appReducers} from "./reducers/index";

// const store: Store<any> & {
//   dispatch: DispatchType;
// } = createStore(appReducers, applyMiddleware(thunk));
const composeEnhancer = compose;

const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunk)),
);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);