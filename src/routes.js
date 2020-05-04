import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AllFighters from "./components/AllFighters/AllFighters";
import Fighter from "./components/Fighter/Fighter";
import Tournaments from "./components/Tournaments/Tournaments";
import TournamentBracket from "./components/TournamentBracket/TournamentBracket";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/fighters" component={AllFighters} />
    <Route path="/fighter/:fighter_id" component={Fighter} />
    <Route path="/tournaments" component={Tournaments} />
    <Route path="/bracket" component={TournamentBracket} />
  </Switch>
);
