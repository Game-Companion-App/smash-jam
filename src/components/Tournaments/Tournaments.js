import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

function Tournaments(props) {
  // const [tournamentId, setTournamentId] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [password, setPassword] = useState("");
  const [hostedTournaments, setHostedTournaments] = useState([]);

  const createTournament = ({ name, password }) => {
    let id = Math.random().toString(36).substr(2, 7);

    if (hostedTournaments.id === id) return createTournament();

    let allTournaments = [...hostedTournaments, { id, name, password }];

    setHostedTournaments(allTournaments);
  };

  let tournamentsList = hostedTournaments.map((tournament) => {
    return (
      <div>
        <div> Tournament Name: {tournament.name} </div>
        <div>
          {" "}
          Password:{" "}
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />{" "}
        </div>
        <Link
          onClick={(ev) => {
            if (!password) ev.preventDefault();
            if (password !== tournament.password) {
              alert("Incorrect password");
              ev.preventDefault();
            }
          }}
          to={`/bracket/${tournament.id}`}
        >
          <button type="submit">Join</button>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div>
        <h4>Host Tournament</h4>
        <div>
          {" "}
          Tournament Name:{" "}
          <input
            type="text"
            onChange={(ev) => setTournamentName(ev.target.value)}
          />{" "}
        </div>
        <div>
          {" "}
          Password:{" "}
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />{" "}
        </div>
        <Link
          onClick={(ev) => {
            if (!tournamentName || !password) {
              alert("Please complete all fields");
              ev.preventDefault();
            }
            createTournament({ name: tournamentName, password });
          }}
          // to={`/bracket/${tournamentId}`}
        >
          <button type="submit">Host</button>
        </Link>
      </div>

      <div>{tournamentsList}</div>
    </>
  );
}

export default withRouter(Tournaments);
