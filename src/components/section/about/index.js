import React, { Fragment } from "react";
import { SectionHeader, Layout, SkillSet } from "../../common/index";
import data from "../../../data/index";

const AboutHeader = () => {
  const { HeadersData } = data;
  return (
    <Fragment>
      <SectionHeader {...HeadersData[0]} />
    </Fragment>
  );
};

const Skills = () => {
  const { SkillSetData } = data;
  return (
    <Fragment>
      <div className="grid-3">
        {SkillSetData.map(data => {
          return <SkillSet {...data} key={data.id} />;
        })}
      </div>
    </Fragment>
  );
};
const AboutSectionWithLayout = () => (
  <Fragment>
    <Layout>
      <AboutHeader />
      <Skills />
    </Layout>
  </Fragment>
);

export default AboutSectionWithLayout;
