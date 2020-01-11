import React, { useReducer } from "react";
import Axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from "../types";

//setting client id and client secret variable
let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const intitalState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, intitalState);

  //Search Users
  const searchuser = async value => {
    dispatch({ type: SET_LOADING });

    const x = await Axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: x.data.items
    });
  };

  //Get Single User
  const getUser = async username => {
    dispatch({ type: SET_LOADING });

    const userdata = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_USER, payload: userdata.data });
  };

  //get Repos
  const getUserRepos = async username => {
    dispatch({ type: SET_LOADING });

    const userdata = await Axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_REPOS, payload: userdata.data });
  };

  //Clear Users
  const clearUser = () => dispatch({ type: CLEAR_USERS });

  //Set Loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchuser,
        clearUser,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
