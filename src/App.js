import React from "react";
import "./App.css";
import DankMemes from "./component/Dankmemes";
import Navbar from "./component/Navbar";
import MoreDeets from "./component/MoreDeets";
import Pie from "./component/pie";
import Bar from "./component/bar";
import Bubble from "./component/bubble";
import CrazyLine from "./component/crazyLine";
import Doughnut from "./component/doughnut";
import DynamicDoughnut from "./component/dynamic-doughnut";
import HorizontalBar from "./component/horizontal-bar";
import LegendOptions from "./component/legend-options";
import Line from "./component/line";
import Polar from "./component/polar";
import Radar from "./component/radar";
import RandomLine from "./component/randomizedLine";
import Scatter from "./component/scatter";

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
          <Route path="/horizontalbar" component={HorizontalBar}>
            <HorizontalBar />
          </Route>
          <Route path="/legendoptions" component={LegendOptions}>
            <LegendOptions />
          </Route>
          <Route path="/line" component={Line}>
            <Line />
          </Route>
          <Route path="/polar" component={Polar}>
            <Polar />
          </Route>
          <Route path="/radar" component={Radar}>
            <Radar />
          </Route>
          <Route path="/randomline" component={RandomLine}>
            <RandomLine />
          </Route>
          <Route path="/scatter" component={Scatter}>
            <Scatter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
