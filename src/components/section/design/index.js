import React, { Fragment } from "react";
import { Header, Layout, SectionHeader, ProjectCard } from "../../common/index";
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

const DesignWithLayout = () => (
  <Fragment>
    <Layout>
      <DesginHeader />
    </Layout>
  </Fragment>
);

export default DesignWithLayout;
