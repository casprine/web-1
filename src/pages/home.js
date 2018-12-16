import React, { Fragment } from "react";
import HomeHeaderWithLayout from "../section/home/index";
import AboutSectionWithLayout from "../section/about/index";
import FooterWithLayout from "../section/footer/index";
const Home = () => {
  return (
    <Fragment>
      <HomeHeaderWithLayout />
      <AboutSectionWithLayout />
      <FooterWithLayout />
    </Fragment>
  );
};

export default Home;
