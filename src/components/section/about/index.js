import React, { Fragment, Component } from "react";
import { SectionHeader, Layout } from "../../common/index";
import SkillSetData from "../../../data/index";

import "./style.scss";

const SkillSet = ({ name, description, image, skills }) => {
  console.log(skills);
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
            <span className="skillset">
              <img src={skill.imgLink} alt="" key={skill.id} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

class About extends Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div className="about">
          <SectionHeader />
          <div className="about-skills">
            {SkillSetData.map(data => (
              <SkillSet {...data} key={data.id} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

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
