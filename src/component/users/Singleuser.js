import React, { Fragment, useContext } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const Singleuser = () => {
  const githubContext = useContext(GithubContext);
  const { loading, repos, user } = githubContext;

  // useEffect(() => {
  //   getUser(match.params.login);
  //   getUserRepos(match.params.login);
  // }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <h4>Username:</h4> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <h4>Company:</h4> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <h4>Website:</h4> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos:{public_gists}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos}></Repos>
    </Fragment>
  );
};

export default Singleuser;
