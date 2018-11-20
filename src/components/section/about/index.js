import React, { Fragment } from "react";
import { SectionHeader, Layout } from "../../common/index";
import Mobile from "../../../assets/svg/mobile.svg";
import jsSvg from "../../../assets/svg/js.svg";
import reactSvg from "../../../assets/svg/react.svg";
import htmlSvg from "../../../assets/svg/html.svg";
import pwaSvg from "../../../assets/svg/pwa.png";
import gatsbySvg from "../../../assets/svg/gatsby.png";
import vueSvg from "../../../assets/svg/vue.png";
import vuexSvg from "../../../assets/svg/vuex.png";
import nextSvg from "../../../assets/svg/next.png";
import cssSvg from "../../../assets/svg/css.png";
import sassSvg from "../../../assets/svg/sass.png";

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
                <img src={jsSvg} alt="" />
              </span>
              <span className="skillset">
                <img src={reactSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={htmlSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={pwaSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={gatsbySvg} alt="" />
              </span>

              <span className="skillset">
                <img src={vueSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={vuexSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={nextSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={cssSvg} alt="" />
              </span>

              <span className="skillset">
                <img src={sassSvg} alt="" />
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
