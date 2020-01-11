import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { clearUser, users, searchuser } = githubContext;

  const alertContext = useContext(AlertContext);
  const { funalert } = alertContext;

  const [text, setText] = useState("");

  const onClick = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      funalert();
    } else {
      searchuser(text);

      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onClick}
          placeholder="Search User here..."
        />
        <button type="submit" className="btn btn-dark">
          Search
        </button>
        {users.length > 0 && (
          <button type="reset" className="btn btn-light" onClick={clearUser}>
            Reset
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
