import React, { Fragment } from "react";
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
    <nav className="ca-header padding center">
      <Logo />
      <ul className="ca-routes center">
        <li>Work</li>
        <li>Design</li>
        <li>Blog</li>
      </ul>
    </nav>
  </Fragment>
);

const Layout = ({ children }) => (
  <Fragment>
    <div className="ca-layout">
      <div className="ca-layout-children">{children}</div>
    </div>
  </Fragment>
);

export { Button, Logo, Header, Layout };
