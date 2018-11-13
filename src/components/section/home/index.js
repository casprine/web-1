import React, { Fragment } from "react";
import { Header, Layout, Button } from "../../common/index";
import wavingHand from "../../../assets/waving.gif";
import "./style.scss";

const HomeHeader = () => {
  return (
    <Fragment>
      <div className="ca-homeHeader">
        <Header />
        <div className="ca-homeHeader-content padding">
          <div className="ca-emoji">
            <img src={wavingHand} alt="waving hand" />
          </div>

          <div className="ca-heading">
            <div className="ca-heading-big">
              Hi there , I'm Casprine, designer,
            </div>
            <div className="ca-heading-big">
              frontend developer and ui enthusiast
            </div>
          </div>
        </div>
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
