import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import MainContent from "./components/MainContent";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/content">
        <MainContent />
      </Route>
    </Switch>
  </BrowserRouter>
);
