import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//1. import from react-redux and redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store";
// 2. create user reducer function
//{type:'LOGGED_IN_USER', payload:{name:'Kalana', role:'admin'}}
// 3. combine multiple reducers
// 4. create redux store

//5. provide redux store to entire app

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
