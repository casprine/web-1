import React, { Fragment } from "react";
import "./style.scss";

const Button = ({ content }) => (
  <Fragment>
    <button> {content} </button>
  </Fragment>
);

const Logo = () => (
  <Fragment>
    <div className="ca-log">
      <span> C </span>
    </div>
  </Fragment>
);

export { Button, Logo };
