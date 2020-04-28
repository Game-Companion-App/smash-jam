import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AllFighters from "./components/AllFighters/AllFighters";
import Fighter from "./components/Fighter/Fighter";
import TournamentBracket from "./components/Tournament/TournamentBracket";
import AllTournaments from "./components/AllTournaments/AllTournaments";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/fighters" component={AllFighters} />
    <Route path="/fighter/:fighter_id" component={Fighter} />
    <Route path='/tournaments' component={AllTournaments}/>
    <Route path="/tournament/:room_id" component={TournamentBracket} />
  </Switch>
);
