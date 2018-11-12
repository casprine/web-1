import React, { Fragment } from "react";
import { Button, Logo } from "../common/index";
import "./style.scss";

const HomeHeader = () => (
  <Fragment>
    <div className="ca-homeHeader">
      <p>Hello world</p>
      <Button content={"Hire Me"} />
      <Logo />
    </div>
  </Fragment>
);

export { HomeHeader };
