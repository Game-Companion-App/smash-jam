import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
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
  }, [createdTournaments]);

  const handleBracketSize = (val) => {
    return bracketSize === val ? null : setBracketSize(val);
  };

  const createTournament = () => {
    axios
      .post("/api/tournaments", {
        host_username: props.user_name,
        tournament_name: tournamentName,
        tournament_password: password,
        tournament_size: bracketSize,
      })
      .then((res) => {
        let key = res.data
        props.history.push(`/tournament/${key}`);
      })
      .catch(() => alert("Tournament Name already taken."));
  };

  const deleteTournament = (id) => {
    axios.delete(`/api/tournaments/${id}`).then((res) => {
      setCreatedTournaments(res.data);
    });
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
                } else {
                  let key = tournament.tournament_key
                  props.history.push(
                    `/tournament/${key}`
                  );
                }
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
        <button
          onClick={() => {
            deleteTournament(tournament.tournament_id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="header-container">
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
      </div>

      <div className="tournaments-container">
        <div className="smash-container">
          <h2>Smash JAM Tournaments</h2>
        </div>

        {/* CREATE TOURNAMENT */}
        <div className="create-section">
          <h3 className="host-title">Host Your Own:</h3>
          <div className="create-tournament">
            <div>
              <h5>Tournament Name:</h5>
              <input
                type="text"
                onChange={(ev) => setTournamentName(ev.target.value)}
              />{" "}
            </div>
            <div>
              <h5>Password:</h5>
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
              <h5>Bracket Size:</h5>
              <select
                type="text"
                className="selector"
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
              <button type="submit" className="create-button">
                Create
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>{tournamentList}</div>
    </>
  );
}

const mapStateToProps = reduxState => {
  const {user_name, user_email} = reduxState
  return {user_name, user_email}
}

export default withRouter(connect(mapStateToProps)(AllTournaments));
