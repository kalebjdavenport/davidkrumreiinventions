import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import RetRam from "./widgets/RetRam/RetRam";
import LL25 from "./widgets/LL25/LL25";

import Navigation from "./widgets/Nav/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={RetRam} />
        <Route exact path="/ll25" component={LL25} />
        {/* <Route exact path="/occludedsight" component={OccludedSight} /> */}
      </Switch>
    </>
  );
}

export default App;
