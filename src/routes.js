import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProgressBar from "./components/CircularProgress/ProgressBar";

const Login = lazy(() => import("./views/login/Login"));

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="mt-5 pt-5">
          <ProgressBar />
        </div>
      }
    >
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
