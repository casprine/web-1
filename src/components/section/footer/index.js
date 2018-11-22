import React, { Fragment } from "react";
import { Logo, Layout } from "../../common/index";
import "./style.scss";

const Footer = () => (
  <Fragment>
    <div className="footer">
      <Logo />
      <div className="text">
        Have a nice day
        <span role="img" aria-label="smile">
          😁
        </span>
      </div>

      <div className="links">
        <a
          href="https://dribbble.com/casprine"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inverse"
        >
          Dribbble
        </a>
        <a
          href="https://www.uplabs.com/casprine"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inverse"
        >
          {" "}
          UpLabs{" "}
        </a>
        <a
          href="https://twitter.com/casprine_ix"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inverse"
        >
          {" "}
          Twitter
        </a>
        <a
          href="https://twitter.com/casprine_ix"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inverse"
        >
          {" "}
          Github
        </a>
      </div>
    </div>
  </Fragment>
);

const FooterWithLayout = () => {
  return (
    <Fragment>
      <Layout>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default FooterWithLayout;
