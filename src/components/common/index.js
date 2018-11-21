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
        <NavLink activeClassName="active-link" className="link" to="/work">
          Work
        </NavLink>
        <NavLink activeClassName="active-link" className="link" to="/design">
          Design
        </NavLink>
        <NavLink activeClassName="active-link" className="link" to="/writings">
          Writing
        </NavLink>
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

const ProjectCard = ({ name, stacks, logoUrl: img, about, link }) => {
  return (
    <Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project">
          <div className="project-details">
            <span className="name">{name}</span>
            <span>
              <img src={img} alt="" />
            </span>
          </div>
          <div className="project-description">{about}</div>
          <div className="project-stack">
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

export { Button, Logo, Header, Layout, SectionHeader, ProjectCard };
