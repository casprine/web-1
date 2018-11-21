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
          className="link"
        >
          {" "}
          Dribbble{" "}
        </a>
        <a href="https://www.uplabs.com/casprine"> UpLabs </a>
        <a href="https://twitter.com/casprine_ix"> Twitter</a>
        <a href="https://twitter.com/casprine_ix"> Github</a>
      </div>
    </div>
  </Fragment>
);

const FooterWithLayout = () => {
  return (
    <Fragment>
      <Layout height={10}>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default FooterWithLayout;
