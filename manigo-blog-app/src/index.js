import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { watchFetchArticles } from "./sagas/saga";

// const logAction = store => {
//   return next => {
//     return action => {
//       const result = next(action);
//       console.log(`Caught in the middleware ${JSON.stringify(result)}`);
//       return result;
//     };
//   };
// };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchArticles);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
