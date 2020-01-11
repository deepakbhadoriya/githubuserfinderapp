import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const Useritem = ({ user }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, getUserRepos } = githubContext;
  const { login, avatar_url } = user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          onClick={() => getUser(login) && getUserRepos(login)}
          className="btn btn-dark btn-sm my-1"
        >
          MORE
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired
};

export default Useritem;
