import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// const Home = lazy(() => import("../components/pages/home"));
import Home from  "../components/pages/home"
const Design = lazy(() => import("../components/pages/design"));
const Work = lazy(() => import("../components/pages/work"));

const Main = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />

      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/work" component={Work} />
      </Suspense>
      <Route exact path="/work" component={Design} />
    </Switch>
  </Fragment>
);

export default Main;
