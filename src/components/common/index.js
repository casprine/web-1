import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";

const Button = ({ content }) => (
  <Fragment>
    <button> {content} </button>
  </Fragment>
);

const Logo = () => (
  <Fragment>
    <Link href="/" to="/">
      <div className="ca-logo center">
        <div> C </div>
      </div>
    </Link>
  </Fragment>
);

const Header = () => (
  <Fragment>
    <nav className="ca-header padding-top center">
      <Logo />
      <ul className="ca-routes">
        <NavLink activeClassName="active-link" className="link" to="/work">
          Work
        </NavLink>
        <NavLink activeClassName="active-link" className="link" to="/design">
          Design
        </NavLink>
        <NavLink activeClassName="active-link" className="link" to="/writings">
          Writings
        </NavLink>
      </ul>
    </nav>
  </Fragment>
);

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="padding-side">
        <div>{children}</div>
      </div>
    </Fragment>
  );
};

const SectionHeader = ({ title, about, description }) => {
  return (
    <Fragment>
      <div className="section">
        <div className="section-title"> {title}</div>
        <div className="section-about"> {about} </div>
        <div className="section-description">{description}</div>
      </div>
    </Fragment>
  );
};

const ProjectCard = ({ name, stacks, logoUrl: img, about, link }) => {
  return (
    <Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project">
          <div className="project-details">
            <span className="name">{name}</span>
            <span>
              <img src={img} alt={name} />
            </span>
          </div>
          <div className="project-description">{about}</div>
          <div className="project-stack wrap">
            {stacks.map(stack => {
              return (
                <span className="stack" key={stack}>
                  {stack}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </Fragment>
  );
};

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

const DesignCard = ({ img: imageUrl, name, description }) => {
  const style = {
    image: {
      backgroundImage: "url(" + imageUrl + ")"
    }
  };

  return (
    <div className="design-card">
      <div style={style.image} className="image" />
      <div className="details">
        <div>
          <span>{name},</span>
          {description}
        </div>
      </div>
    </div>
  );
};

export {
  Button,
  Logo,
  Header,
  Layout,
  SectionHeader,
  ProjectCard,
  SkillSet,
  DesignCard
};
