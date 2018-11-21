import React, { Fragment, Component } from "react";
import { SectionHeader, Layout } from "../../common/index";
import data from "../../../data/index";

import "./style.scss";

const SkillSet = ({ name, description, image, skills }) => {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={image} alt="" className="img" />
      </div>
      <div className="skill-name"> {name} </div>
      <div className="skill-description">{description} </div>

      <div className="skill-skillsets">
        {skills.map(skill => {
          return (
            <span className="skillset" key={skill.id}>
              <img src={skill.imgLink} alt="" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

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
    <Layout height={100}>
      <About />
    </Layout>
  </Fragment>
);

export default AboutSectionWithLayout;
