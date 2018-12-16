import React, { Fragment, Component } from "react";
import { SectionHeader, Layout, SkillSet } from "../../common/index";
import data from "../../../data/index";
import "./style.scss";

class About extends Component {
  render() {
    const { SkillSetData, HeadersData } = data;
    return (
      <Fragment>
        <div className="about">
          <SectionHeader {...HeadersData[0]} />
          <div className="about-skills">
            {SkillSetData.map(data => {
              return <SkillSet {...data} key={data.id} />;
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

const AboutSectionWithLayout = () => (
  <Fragment>
    <Layout>
      <About />
    </Layout>
  </Fragment>
);

export default AboutSectionWithLayout;
