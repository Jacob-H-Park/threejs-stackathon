import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router history={history}>
    <App />
  </Router>
);

//React.Strict mode on => renders components twice (on dev but not production) in order to detect any problems with the code
