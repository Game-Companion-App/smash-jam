import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./AllFighters.css";

function AllFighters(props) {
  const [dlcFighters, setDlcFighters] = useState([]);
  const [standardFighters, setStandardFighters] = useState([]);

  useEffect(() => {
    axios
      .get("/api/dlc")
      .then((res) => setDlcFighters(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/standard")
      .then((res) => setStandardFighters(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(dlcFighters);

  return (
    <div className="all-fighters-container">
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
      <div className="fighters-container">
        <div className="dlc-title">
          <h2>DLC Fighters</h2>
        </div>
        <div className="fighters-box">
          {dlcFighters.map((dlc) => {
            return (
              <Link to={`/fighter/${dlc.fighter_number}`}>
                <div className="fighter-block">
                  <h3>
                    #{dlc.fighter_number}
                    <br />
                    {dlc.fighter_name}
                  </h3>
                  <br />
                  <img src={dlc.icon_image} alt="" className="icon-image" />
                  <img src={dlc.skin_1} alt="" className="fighter-image" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="standard-title">
          <h2>Standard Fighters</h2>
        </div>
        <div className="fighters-box">
          {standardFighters.map((standard) => {
            return (
              <Link to={`/fighter/${standard.fighter_number}`}>
                <div className="fighter-block">
                  <h3>
                    #{standard.fighter_number}
                    <br />
                    {standard.fighter_name}
                  </h3>
                  <br />
                  <img
                    src={standard.icon_image}
                    alt=""
                    className="icon-image"
                  />
                  <img src={standard.skin_1} alt="" className="fighter-image" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(AllFighters);
