import React, { Fragment } from "react";
import { Header, Layout, Button } from "../../common/index";
import "./style.scss";

const HomeHeader = () => {
  return (
    <Fragment>
      <div className="ca-homeHeader">
        <Header />
        <div className="ca-homeHeader-content padding">Hello</div>
        <div className="ca-homeHeader-footer padding center">
          <div className="more"> More</div>

          <Button content="Hire Me 👨🏿‍💻" />
        </div>
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
