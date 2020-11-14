import React from "react";
import "./styles.css";
import ThemeToggleButton from "./ThemeToggleButton";
import { Router } from "@reach/router";
import Charts from "./ExpenseTracker/container";
import { Provider } from "react-redux";
import store from "./redux/store";
import ExpenseTracker from "./ExpenseTracker/container";

export default function App() {
  return (
    <>
      <ThemeToggleButton />
      <Provider store={store}>
        <Router>
          <ExpenseTracker exact path="/" />
          <Charts path="chart" />
        </Router>
      </Provider>
    </>
  );
}
