import React, { Fragment } from "react";
import { Header, Layout, SectionHeader, ProjectCard } from "../../common/index";
import data from "../../../data/index";
import "./style.scss";

const WorkHeader = () => {
  const { HeadersData } = data;
  return (
    <Fragment>
      <Header />
      <SectionHeader {...HeadersData[1]} />
    </Fragment>
  );
};

const Projects = () => {
  const { PersonalProjects } = data;
  return (
    <Fragment>
      <div className="personal-pro">
        {PersonalProjects.map(project => {
          return <ProjectCard {...project} key={project.id} />;
        })}
      </div>
    </Fragment>
  );
};

const WorkWithLayout = () => (
  <Fragment>
    <Layout>
      <WorkHeader />
      <Projects />
    </Layout>
  </Fragment>
);

export default WorkWithLayout;
