import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../components/pages/home"));
const Design = lazy(() => import("../components/pages/design"));
const Work = lazy(() => import("../components/pages/work"));

const Main = () => (
  <Fragment>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/work" component={Design} />
      </Switch>
    </Suspense>
  </Fragment>
);

export default Main;
