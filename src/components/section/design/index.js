import React, { Fragment } from "react";
import { Header, Layout, SectionHeader, DesignCard } from "../../common/index";
import data from "../../../data/index";
import "./style.scss";

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
  const { PersonalDesigns } = data;
  return (
    <Fragment>
      <div className="designs">
        {PersonalDesigns.map(design => (
          <DesignCard {...design} key={design.id} />
        ))}
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
