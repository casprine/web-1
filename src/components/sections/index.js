import React, { Fragment } from "react";
import { Header, Layout } from "../common/index";
import "./style.scss";

const HomeHeader = () => {
  return (
    <Fragment>
      <div className="ca-homeHeader">
        <Header />
      </div>
    </Fragment>
  );
};

const HomeHeaderWithLayout = () => {
  return (
    <Fragment>
      <Layout>
        <HomeHeader />
      </Layout>
    </Fragment>
  );
};

export { HomeHeaderWithLayout };
