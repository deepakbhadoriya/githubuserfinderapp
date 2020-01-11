import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./Repositem";

const Newrepos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

repos.propType = {
  repos: PropTypes.array.isRequired
};

export default Newrepos;
