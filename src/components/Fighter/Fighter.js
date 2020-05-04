import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ReactPlayer from "react-player";
import axios from "axios";
import "./Fighter.scss";

function Fighter(props) {
  const [fighter, setFighter] = useState({});
  const [strongs, setStrongs] = useState({});
  const [weaks, setWeaks] = useState({});
  const [skinCounter, setSkinCounter] = useState(0);

  useEffect(() => {
    const { fighter_id } = props.match.params;

    axios
      .get(`/api/fighters/${fighter_id}`)
      .then((res) => {
        setFighter(res.data.fighter[0]);
        setStrongs({
          strong1: res.data.strong1[0],
          strong2: res.data.strong2[0],
          strong3: res.data.strong3[0],
        });
        setWeaks({
          weak1: res.data.weak1[0],
          weak2: res.data.weak2[0],
          weak3: res.data.weak3[0],
        });
        // window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.fighter_id]);

  const fighterSkins = [
    fighter.skin_1,
    fighter.skin_2,
    fighter.skin_3,
    fighter.skin_4,
    fighter.skin_5,
    fighter.skin_6,
    fighter.skin_7,
    fighter.skin_8,
  ];

  if (weaks.weak3) {
    return (
      <div className="header-container">
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
            {fighter.fighter_number === 36 ? (
              <img
                src={fighter.icon_image}
                className="icon-snake-image"
                alt=""
              />
            ) : fighter.fighter_number >= 79 && fighter.fighter_number <= 81 ? (
              <img
                src={fighter.icon_image}
                className="fighter-icon"
                style={{ filter: "brightness(0) invert(1)" }}
                alt=""
              />
            ) : (
              <img src={fighter.icon_image} className="fighter-icon" alt="" />
            )}
            <h1>{fighter.fighter_name}</h1>
          </div>

          {/* LOGO SECTION */}
          <div className="logo-container">
            {fighter.fighter_series_logo === 12 ||
            fighter.fighter_series_logo === 16 ? (
              <img
                src={fighter.logo_image}
                className="special-logo"
                style={{ backgroundColor: "black" }}
                alt=""
              />
            ) : (
              <img src={fighter.logo_image} className="fighter-logo" alt="" />
            )}
          </div>

          {/* VIDEO SECTION */}
          <div className="video-container">
            <ReactPlayer
              url={fighter.fighter_video}
              key={fighter.fighter_video}
              width={"100%"}
              height={"100%"}
              controls={true}
            />
          </div>

          {/* COUNTER-PICKS SECTION */}
          <div className="counters-container">
            <div className="section-header">
              <h1>COUNTER-PICKS</h1>
            </div>
            <div className="counters">
              <div className="each-counter">
                <h4>Strong Against</h4>
                <br />
                <Link
                  to={`/fighter/${strongs.strong1.fighter_id}`}
                  params={{ fighterID: strongs.strong1.fighter_id }}
                  onClick={() => setSkinCounter(0)}
                >
                  <div className="counters-image-holder">
                    <h5>{strongs.strong1.fighter_name}</h5>
                    <img
                      src={strongs.strong1.skin_1}
                      className="counters-image"
                      alt=""
                      onClick={() => {
                        scroll.scrollTo(0);
                      }}
                    />
                  </div>
                </Link>
                <br />
                <Link
                  to={`/fighter/${strongs.strong2.fighter_id}`}
                  params={{ fighterID: strongs.strong2.fighter_id }}
                  onClick={() => setSkinCounter(0)}
                >
                  <div className="counters-image-holder">
                    <h5>{strongs.strong2.fighter_name}</h5>
                    <img
                      src={strongs.strong2.skin_1}
                      className="counters-image"
                      alt=""
                      onClick={() => {
                        scroll.scrollTo(0);
                      }}
                    />
                  </div>
                </Link>
                <br />
                <Link
                  to={`/fighter/${strongs.strong3.fighter_id}`}
                  params={{ fighterID: strongs.strong3.fighter_id }}
                  onClick={() => setSkinCounter(0)}
                >
                  <div className="counters-image-holder">
                    <h5>{strongs.strong3.fighter_name}</h5>
                    <img
                      src={strongs.strong3.skin_1}
                      className="counters-image"
                      alt=""
                      onClick={() => {
                        scroll.scrollTo(0);
                      }}
                    />
                  </div>
                </Link>
              </div>
              <div className="each-counter">
                <h4>Weak Against</h4>
                <br />
                <Link
                  to={`/fighter/${weaks.weak1.fighter_id}`}
                  params={{ fighterID: weaks.weak1.fighter_id }}
                  onClick={() => setSkinCounter(0)}
                >
                  <div className="counters-image-holder">
                    <h5>{weaks.weak1.fighter_name}</h5>
                    <img
                      src={weaks.weak1.skin_1}
                      className="counters-image"
                      alt=""
                      onClick={() => {
                        scroll.scrollTo(0);
                      }}
                    />
                  </div>
                </Link>
                <br />
                <Link
                  to={`/fighter/${weaks.weak2.fighter_id}`}
                  params={{ fighterID: weaks.weak2.fighter_id }}
                  onClick={() => setSkinCounter(0)}
                >
                  <div className="counters-image-holder">
                    <h5>{weaks.weak2.fighter_name}</h5>
                    <img
                      src={weaks.weak2.skin_1}
                      className="counters-image"
                      alt=""
                      onClick={() => {
                        scroll.scrollTo(0);
                      }}
                    />
                  </div>
                </Link>
                <br />
                <Link
                  to={`/fighter/${weaks.weak3.fighter_id}`}
                  params={{ fighterID: weaks.weak3.fighter_id }}
                  onClick={() => setSkinCounter(0)}
                >
                  <div className="counters-image-holder">
                    <h5>{weaks.weak3.fighter_name}</h5>
                    <img
                      src={weaks.weak3.skin_1}
                      className="counters-image"
                      alt=""
                      onClick={() => {
                        scroll.scrollTo(0);
                      }}
                    />
                  </div>
                </Link>
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
          <div className="skins-container">
            <div className="section-header">
              <h1>CHARACTER SKINS</h1>
            </div>
            <div className="character-skins">
              <img
                src={fighterSkins[skinCounter]}
                className="fighter-skins"
                alt=""
                onClick={() => {
                  if (skinCounter > 6) {
                    setSkinCounter(0);
                  } else {
                    setSkinCounter(skinCounter + 1);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default withRouter(Fighter);
