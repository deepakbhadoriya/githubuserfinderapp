import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import About from "./component/pages/About";
import Singleuser from "./component/users/Singleuser";
import GithubState from "./context/github/GithubState";
import Home from "./component/pages/Home";
import Notfound from "./component/users/Notfound";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={Singleuser}></Route>
              <Route render={Notfound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
