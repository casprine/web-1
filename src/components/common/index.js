import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ content }) => (
  <Fragment>
    <button> {content} </button>
  </Fragment>
);

const Logo = () => (
  <Fragment>
    <Link to="/">
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
        <Link className="link" to="/work">
          Work
        </Link>
        <Link className="link" to="/work">
          Design
        </Link>
        <Link className="link" to="/work">
          Writing
        </Link>
      </ul>
    </nav>
  </Fragment>
);

const Layout = ({ children, height }) => {
  const LayoutStyle = {
    wrapper: {
      height: height + "vh"
    }
  };

  return (
    <Fragment>
      <div className="ca-layout" style={LayoutStyle.wrapper}>
        <div className="ca-layout-children padding-side">{children}</div>
      </div>
    </Fragment>
  );
};

const SectionHeader = ({ title, about, description, className }) => {
  return (
    <Fragment>
      <div className={className + " section"}>
        <div className="section-title"> {title}</div>
        <div className="section-about"> {about} </div>
        <div className="section-description">{description}</div>
      </div>
    </Fragment>
  );
};

const ProjectCard = ({ name, stacks, logoUrl: img, about }) => {
  console.log(stacks);
  return (
    <Fragment>
      <div className="project">
        <div className="project-details">
          <span className="name">{name}</span>
          <span>
            <img src={img} alt="" />
          </span>
        </div>
        <div className="project-description">{about}</div>
        <div className="project-stack">
          {stacks.map(stack => (
            <span className="stack">{stack}</span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export { Button, Logo, Header, Layout, SectionHeader, ProjectCard };
