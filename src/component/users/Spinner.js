import React, { Fragment } from "react";
import Spin from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Spin}
        alt=""
        style={{ width: "200px", display: "block", margin: "auto" }}
      ></img>
    </Fragment>
  );
};

export default Spinner;
