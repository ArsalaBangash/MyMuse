import React from "react";
import { Route, Switch } from "react-router-dom";

// Component Imports
import LandingPage from "../Containers/LandingPage/index";

const Router = () => (
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
);

export default Router;
