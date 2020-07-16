import React from "react";
import "./App.css";
// import * as ReactBootStrap from "react-bootstrap";
import DankMemes from "./component/Dankmemes";
import Navbar from "./component/Navbar";
// import Pricing from "./component/Pricing";
import MoreDeets from "./component/MoreDeets";
import Pie from "./component/pie";
import Bar from "./component/bar";
import Bubble from "./component/bubble";
import CrazyLine from "./component/crazyLine";
import Doughnut from "./component/doughnut";
import DynamicDoughnut from "./component/dynamic-doughnut";
// import Features from "./component/Features";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/Features" component={Features}>
            <Features />
          </Route> */}
          {/* <Route path="/Pricing" component={Pricing}>
            <Pricing />
          </Route> */}
          <Route path="/Moredeets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/Dankmemes" component={DankMemes}>
            <DankMemes />
          </Route>
          <Route path="/pie" component={Pie}>
            <Pie />
          </Route>
          <Route path="/bar" component={Bar}>
            <Bar />
          </Route>
          <Route path="/bubble" component={Bubble}>
            <Bubble />
          </Route>
          <Route path="/crazyline" component={CrazyLine}>
            <CrazyLine />
          </Route>
          <Route path="/doughnut" component={Doughnut}>
            <Doughnut />
          </Route>
          <Route path="/dynamicdoughnut" component={DynamicDoughnut}>
            <DynamicDoughnut />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
