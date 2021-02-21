import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss";

// pages for this product
import Components from "./views/Components/Components.js";
import EmployerSignupPage from "./views/EmployerSignupPage/EmployerSignupPage.js";
import StudentSignupPage from "./views/StudentSignupPage/StudentSignupPage.js";
import EmployerProfilePage from "./views/ProfilePage/EmployerProfilePage.js";
import StudentProfilePage from "./views/ProfilePage/StudentProfilePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/student/:student_user" component={StudentProfilePage} />
      <Route path="/employer/:employer_user" component={EmployerProfilePage} />
      <Route path="/employer-signup" component={EmployerSignupPage} />
      <Route path="/student-signup" component={StudentSignupPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
