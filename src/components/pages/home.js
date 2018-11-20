import React, { Fragment } from "react";
import HomeHeaderWithLayout from "../section/home/index";
import AboutSectionWithLayout from "../section/about/index";

const Home = () => {
  return (
    <Fragment>
      <HomeHeaderWithLayout />
      <AboutSectionWithLayout />
    </Fragment>
  );
};

export default Home;
