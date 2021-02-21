import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss";

// pages for this product
import Components from "./views/Components/Components.js";
import EmployerSignupPage from "./views/EmployerSignupPage/EmployerSignupPage.js";
import StudentSignupPage from "./views/StudentSignupPage/StudentSignupPage.js";
import ProfilePage from "./views/ProfilePage/ProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile/:student_user" component={ProfilePage} />
      <Route path="/employer-signup" component={EmployerSignupPage} />
      <Route path="/student-signup" component={StudentSignupPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
