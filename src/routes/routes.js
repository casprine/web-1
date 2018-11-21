import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/pages/home";
import Design from "../components/pages/design";
import Work from "../components/pages/work";

const Main = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/work" component={Design} />
    </Switch>
  </Fragment>
);

export default Main;
