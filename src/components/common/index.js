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
    <div className="ca-logo center">
      <div> C </div>
    </div>
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
  console.log(children, height);

  const LayoutStyle = {
    wrapper: {
      height: height + "vh"
    }
  };

  console.log(LayoutStyle);

  return (
    <Fragment>
      <div className="ca-layout" style={LayoutStyle.wrapper}>
        <div className="ca-layout-children padding-side">{children}</div>
      </div>
    </Fragment>
  );
};

const SectionHeader = props => {
  return (
    <Fragment>
      <div className="section">
        <div className="section-title"> What I do </div>
        <div className="section-about"> desgin. frontend. mobile. </div>
        <div className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab
          rerum! Sit ipsa odit, eveniet omnis autem quas nihil sunt suscipit
          iure dignissimos eligendi harum, animi vitae nostrum officia alias.
        </div>
      </div>
    </Fragment>
  );
};

export { Button, Logo, Header, Layout, SectionHeader };
