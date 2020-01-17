import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import RetRam from "./widgets/RetRam/RetRam";
// import Shop from "./widgets/shop/Shop";
// import Auth from "./widgets/Auth/Auth";
import Navigation from "./widgets/RetRam/Nav/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={RetRam} />
        {/* <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Auth} /> */}
      </Switch>
    </>
  );
}

export default App;
