import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import "./AllTournaments.scss";

function AllTournaments(props) {
  const [tournamentName, setTournamentName] = useState("");
  const [password, setPassword] = useState("");
  const [createdTournaments, setCreatedTournaments] = useState([]);
  const [bracketSize, setBracketSize] = useState(4);

  useEffect(() => {
    axios.get("/api/tournaments").then((res) => {
      setCreatedTournaments(res.data);
    });
  }, []);

  const handleBracketSize = (val) => {
    return bracketSize === val ? null : setBracketSize(val);
  };

  const createTournament = () => {
    axios
      .post("/api/tournaments", {
        tournament_name: tournamentName,
        tournament_password: password,
        tournament_size: bracketSize,
      })
      .then((res) => {
        console.log(res);
        props.history.push(`/tournament/${res.data}`);
      })
      .catch(() => alert("Tournament Name already taken."));
  };

  let tournamentList = createdTournaments.map((tournament, i) => {
    return (
      <div key={i}>
        <div> Tournament Name: {tournament.tournament_name} </div>
        <div>
          Password:
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            onKeyUp={(ev) => {
              if (ev.keyCode === 13) {
                if (password !== tournament.tournament_password) {
                  alert("Incorrect password");
                  ev.preventDefault();
                } else
                  props.history.push(
                    `/tournament/${tournament.tournament_key}`
                  );
              } else return;
            }}
          />
        </div>
        <Link
          onClick={(ev) => {
            if (password !== tournament.tournament_password) {
              alert("Incorrect password");
              ev.preventDefault();
            }
          }}
          to={`/tournament/${tournament.tournament_key}`}
        >
          <button type="submit">Join</button>
        </Link>
        <button onClick={() => {}}>Delete</button>
      </div>
    );
  });

  return (
    <>
      <Link to="/">
        <button className="home-button">
          <img
            src="https://smash-app.s3-us-west-1.amazonaws.com/home-run.png"
            alt=""
            className="home-icon"
          />
          Home
        </button>
      </Link>

      <Link to="/fighters">
        <button className="fighters-button">
          <img
            src="https://smash-app.s3-us-west-1.amazonaws.com/fight.png"
            alt=""
            className="arrow-icon"
          />
          All Fighters
        </button>
      </Link>

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
          Password:
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            onKeyUp={(ev) => {
              if (ev.keyCode === 13) {
                if (!tournamentName || !password) {
                  alert("Please complete all fields");
                  ev.preventDefault();
                }
                setTournamentName("");
                setPassword("");
                setBracketSize(8);
                createTournament();
              }
            }}
          />
        </div>
        <div>
          Bracket Size:
          <select
            type="text"
            onClick={(ev) => handleBracketSize(ev.target.value)}
            defaultValue={4}
          >
            <option value={4}> 4 </option>
            <option value={8}> 8 </option>
            <option value={16}> 16 </option>
            <option value={32}> 32 </option>
            <option value={64}> 64 </option>
          </select>
        </div>

        <Link
          onClick={(ev) => {
            if (!tournamentName || !password) {
              alert("Please complete all fields");
              ev.preventDefault();
            }
            setTournamentName("");
            setPassword("");
            setBracketSize(8);
            createTournament();
          }}
          to="/tournaments"
        >
          <button type="submit">Create</button>
        </Link>
      </div>

      <div className="pro-tournaments">Pro Tournaments</div>

      <div>{tournamentList}</div>
    </>
  );
}

export default withRouter(AllTournaments);
