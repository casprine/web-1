import React, { Fragment } from "react";
import HomeHeaderWithLayout from "../components/section/home/index";
import AboutSectionWithLayout from "../components/section/about/index";
import FooterWithLayout from "../components/section/footer/index";

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
