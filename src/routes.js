import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AllFighters from "./components/AllFighters/AllFighters";
import Fighter from "./components/Fighter/Fighter";
import Bracket from "./components/Bracket/Bracket";
import Tournaments from "./components/Tournaments/Tournaments";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/fighters" component={AllFighters} />
    <Route path="/fighter/:fighter_id" component={Fighter} />
    <Route path='/tournaments' component={Tournaments}/>
    <Route path="/bracket/:bracket_id" component={Bracket} />
  </Switch>
);
