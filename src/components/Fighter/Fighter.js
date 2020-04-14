import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import "./Fighter.css";

function Fighter(props) {
  const [fighter, setFighter] = useState({});
  // const [strong, setStrong] = useState([]);

  useEffect(() => {
    const { fighter_id } = props.match.params;

    axios
      .get(`/api/fighters/${fighter_id}`)
      .then((res) => setFighter(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`/api/fighters/${fighter.strong_1}`)
  //     .then((res) => setFighter(res.data[0]))
  //     .catch((err) => console.log(err));
  // }, []);

  console.log(fighter);

  if (fighter) {
    return (
      <div className="fighter-container">
        {/* HEADER SECTION */}
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

        {/* FIGHTER SECTION */}
        <div className="fighter-total">
          <div className="fighter-title">
            <div className="fighter-number">
              <h2>#{fighter.fighter_number}</h2>
            </div>
            <img src={fighter.icon_image} className="fighter-icon" alt="" />
            <h1>{fighter.fighter_name}</h1>
          </div>

          {/* LOGO SECTION */}
          <div className="logo-container">
            <img src={fighter.logo_image} className="fighter-logo" alt="" />
          </div>

          {/* VIDEO SECTION */}
          <div className="video-container">
            <ReactPlayer url={fighter.fighter_video} width={370} height={250} />
          </div>

          {/* COUNTER-PICKS SECTION */}
          <div className="counters-container">
            <div className="section-header">
              <h1>COUNTER-PICKS</h1>
            </div>
            <div className="counters">
              <div className="each-counter">
                <h5>Strong Against</h5>
                {fighter.strong_1}
                <br />
                {fighter.strong_2}
                <br />
                {fighter.strong_3}
              </div>
              <div className="each-counter">
                <h5>Weak Against</h5>
                {fighter.weak_1}
                <br />
                {fighter.weak_2}
                <br />
                {fighter.weak_3}
              </div>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="stats-container">
            <div className="section-header">
              <h1>CHARACTER STATS</h1>
            </div>
            <div className="all-stats">
              <div className="stats">
                <div className="single-stat">
                  <h4>Walk Speed:</h4>
                  <h4>{fighter.walk_speed}</h4>
                </div>
                <div className="single-stat">
                  <h4>Run Speed:</h4>
                  <h4>{fighter.run_speed}</h4>
                </div>
                <div className="single-stat">
                  <h4>Air Speed:</h4>
                  <h4>{fighter.air_speed}</h4>
                </div>
                <div className="single-stat">
                  <h4>Weight:</h4>
                  <h4>{fighter.weight}</h4>
                </div>
                <div className="single-stat">
                  <h4>Fall Speed:</h4>
                  <h4>{fighter.fall_speed}</h4>
                </div>
                <div className="single-stat">
                  <h4>Fast Fall Speed:</h4>
                  <h4>{fighter.fast_fall_speed}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* SKINS SECTION */}
          {/* <div className="skins-section">
            <img src={fighter.skin_1} className="fighter-skins" alt="" />
          </div> */}

          {/* <div className="fighter-logo">
            <img src={fighter.logo_image} alt="" />
          </div> */}
          {/* <div className="fighter-stats"></div>
          <div className="fighter-counter-picks"></div> */}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default withRouter(Fighter);
