import React, { useEffect } from "react";

import {
  withRouter,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Three from "./Three";
import Navbar from "./Navbar";
import { Galaxy } from "./Galaxy";
import { Text } from "./Text";
import { Landing } from "./Landing";

const App = () => {
  useEffect(() => {
    Landing();
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/three" component={Three} />
        <Route path="/3D-text" component={Text} />
        <Route path="/galaxy" component={Galaxy} />
      </Switch>
    </Router>
  );
};

export default withRouter(App);
