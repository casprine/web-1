import React, { Fragment } from "react";
import { SectionHeader, Layout } from "../../common/index";
import Mobile from "../../../assets/svg/mobile.svg";
import js from "../../../assets/svg/js.svg";
import "./style.scss";

const About = () => {
  return (
    <Fragment>
      <div className="about">
        <SectionHeader />

        <div className="about-skills">
          <div className="skill">
            <div className="skill-icon">
              <img src={Mobile} alt="" className="img" />
            </div>
            <div className="skill-name">web design</div>
            <div className="skill-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati omnis, debitis consequuntur rem sapiente alias porro,
            </div>

            <div className="skill-skillsets">
              <span className="skillset">
                <img src={js} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const AboutSectionWithLayout = () => (
  <Fragment>
    <Layout>
      <div className="padding">
        <About />
      </div>
    </Layout>
  </Fragment>
);

export default AboutSectionWithLayout;
