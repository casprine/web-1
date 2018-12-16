import React, { Fragment } from "react";
import { Header, Layout, SectionHeader, DesignCard } from "../../common/index";
import data from "../../../data/index";

const DesginHeader = () => {
  const { HeadersData } = data;
  return (
    <Fragment>
      <Header />
      <SectionHeader {...HeadersData[2]} cla />
    </Fragment>
  );
};

const Designs = () => {
  return (
    <Fragment>
      <div className="designs">
        <DesignCard />
      </div>
    </Fragment>
  );
};

const DesignWithLayout = () => (
  <Fragment>
    <Layout>
      <DesginHeader />
      <Designs />
    </Layout>
  </Fragment>
);

export default DesignWithLayout;