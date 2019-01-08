import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home.js";
// import Design from "../pages/design";
import Work from "../pages/work";

const MainView = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      {/* <Route exact path="/design" component={Design} /> */}
    </Switch>
  </Fragment>
);

export default MainView;
