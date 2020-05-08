import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import "./AllTournaments.scss";

function AllTournaments(props) {
  const [tournamentName, setTournamentName] = useState("");
  const [password, setPassword] = useState("");
  const [createdTournaments, setCreatedTournaments] = useState([]);
  const [bracketSize, setBracketSize] = useState(0);
  const [fighters, setFighters] = useState([]);
  const [newFighter, setNewFighter] = useState("");

  useEffect(() => {
    axios.get("/api/tournaments").then((res) => {
      setCreatedTournaments(res.data);
    });
  }, [createdTournaments]);

  useEffect(() => {
    axios
      .get("/api/standard")
      .then((res1) => {
        let standardFighters = res1.data.map((fighter) => [
          fighter.skin_1,
          fighter.fighter_name,
        ]);
        axios
          .get("/api/dlc")
          .then((res2) => {
            let dlcFighters = res2.data.map((fighter) => [
              fighter.skin_1,
              fighter.fighter_name,
            ]);
            setFighters([...standardFighters, ...dlcFighters]);
          })
          .catch((err2) => console.log(err2));
      })
      .catch((err1) => console.log(err1));
  }, []);

  const handleBracketSize = (val) => {
    return setBracketSize(+val);
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
        let key = res.data;
        props.history.push(`/tournament/${key}`);
      })
      .catch(() => alert("Tournament Name already taken."));
  };

  const deleteTournament = (id) => {
    axios.delete(`/api/tournaments/${id}`).then((res) => {
      setCreatedTournaments(res.data);
    });
  };

  let fighterOptions = fighters.sort().map((fighter) => {
    return <option value={fighter[1]}> {fighter[1]} </option>;
  });

  let tournamentList = createdTournaments.map((tournament, i) => {
    return (
      <div className="tournament-list-item" key={i}>
        <div className="t-name">
          <h5>{tournament.tournament_name}</h5>
        </div>
        <div className="b-size">
          <h5>{tournament.tournament_size}</h5>
        </div>
        <div className="f-name">
          <select
            style={{ height: "30px", width: "180px" }}
            onChange={(ev) => setNewFighter(ev.target.value)}
            value={newFighter}
          >
            <option value={0}> - Select A Fighter </option>
            {fighterOptions}
          </select>
        </div>
        <div className="p-word">
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            onKeyUp={(ev) => {
              if (ev.keyCode === 13) {
                if (password !== tournament.tournament_password) {
                  alert("Incorrect password");
                  ev.preventDefault();
                } else {
                  let key = tournament.tournament_key;
                  props.history.push(`/tournament/${key}`);
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
          <button className="join-button" type="submit">
            Join
          </button>
        </Link>
        <button
          className="delete-button"
          onClick={() => {
            deleteTournament(tournament.tournament_id);
          }}
        >
          Delete
        </button>
        <hr />
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
          <h3 className="host-title">Host Your Own</h3>
          <div className="create-tournament">
            <div>
              <h4>Tournament Name:</h4>
              <input
                type="text"
                onChange={(ev) => setTournamentName(ev.target.value)}
              />{" "}
            </div>
            <div>
              <h4>Password:</h4>
              <input
                type="password"
                onChange={(ev) => setPassword(ev.target.value)}
                onKeyUp={(ev) => {
                  if (ev.keyCode === 13) {
                    if (!tournamentName || !password || bracketSize === 0) {
                      alert("Please complete all fields");
                      ev.preventDefault();
                    }
                    setTournamentName("");
                    setPassword("");
                    setBracketSize(0);
                    createTournament();
                  }
                }}
              />
            </div>
            <div>
              <h4>Bracket Size:</h4>
              <select
                style={{ height: "30px", width: "50px" }}
                type="text"
                className="selector"
                onClick={(ev) => handleBracketSize(ev.target.value)}
              >
                <option value={0}>-</option>
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={32}>32</option>
                <option value={64}>64</option>
              </select>
            </div>
            <Link
              onClick={(ev) => {
                if (!tournamentName || !password || bracketSize === 0) {
                  alert("Please complete all fields");
                  ev.preventDefault();
                } else {
                  setTournamentName("");
                  setPassword("");
                  setBracketSize(0);
                  createTournament();
                }
              }}
              to="/tournaments"
            >
              <button type="submit" className="create-button">
                Create
              </button>
            </Link>
          </div>
        </div>
        <div className="top-border"></div>
        <div className="tournament-list-container">
          <div className="table-titles">
            <div className="title-name">
              <h4>Tournament Name:</h4>
            </div>
            <div className="title-size">
              <h4>Bracket Size:</h4>
            </div>
            <div className="title-fighter">
              <h4>Fighter:</h4>
            </div>
            <div className="title-password">
              <h4>Password:</h4>
            </div>
          </div>
          <hr />
          {tournamentList}
        </div>
        <div className="bottom-border"></div>
      </div>
    </>
  );
}

const mapStateToProps = (reduxState) => {
  const { user_name, user_email } = reduxState;
  return { user_name, user_email };
};

export default withRouter(connect(mapStateToProps)(AllTournaments));
