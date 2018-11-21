import React, { Fragment } from "react";
import { Logo, Layout } from "../../common/index";
import "./style.scss";

const Footer = () => (
  <Fragment>
    <div className="footer">
      <Logo />
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
