import React, { Fragment } from "react";
import { Header, Layout, Button } from "../../common/index";
import wavingHand from "../../../assets/waving.gif";
import "./style.scss";

const HomeHeader = () => {
  return (
    <Fragment>
      <div className="ca-homeHeader">
        <Header className="header" />

        <div className="ca-homeHeader-content padding-side ">
          <div className="ca-emoji">
            <img src={wavingHand} alt="waving hand" />
          </div>

          <div className="ca-heading">
            <div className="ca-heading-big">
              Hi there, I'm Casprine, designer,
            </div>
            <div className="ca-heading-big">
              frontend developer and ui enthusiast.
            </div>

            <div className="ca-sub-heading">
              <span>
                I design and develop experiences that make people's lives simple
              </span>
              <br />
              <span>
                Let me help you grow your business & make your product look
                pretty while I'm at it.
              </span>
            </div>
          </div>
        </div>

        <div className="ca-homeHeader-footer  padding-side center">
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
