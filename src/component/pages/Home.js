import React, { Fragment } from "react";
import Alert from "../users/Alert";
import Search from "../users/Search";
import User from "../users/User";
import AlertState from "../../context/alert/AlertState";

const Home = () => {
  return (
    <Fragment>
      <AlertState>
        <Alert></Alert>
        <Search></Search>
        <User />
      </AlertState>
    </Fragment>
  );
};

export default Home;
