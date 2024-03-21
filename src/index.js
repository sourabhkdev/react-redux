import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { rootReducer } from "./reducers/index";
import { Provider } from "react-redux";
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // (globalised state) now store hase 'state' for toggle and counter

// // ACTION - JUST name/type of action(task).it does not perform any action. INCREMENT/DECREMET
// const incrementCounterAction = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrementCounterAction = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // REDUCER - responsible for taking care of action.It will handle actual 'state' change. eg.increment/decrement.
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// // STORE - globalised state..place where we store out data..any component wants to get state,will get from store.
// let store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//   console.log("state",store.getState());
//  });

// // DISPATCH - dispatch an Action
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
