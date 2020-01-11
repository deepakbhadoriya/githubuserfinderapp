import React, { useContext } from "react";
import Useritem from "./Useritem";
import Spinner from "./Spinner";
import GithubContext from "../../context/github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={boxstyle}>
        {users.map(user => (
          <Useritem key={user.id} user={user}></Useritem>
        ))}
      </div>
    );
  }
};

const boxstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default User;
