import React from "react";
import News from "../News/News";
import { Link, withRouter } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="slideshow">
        <div className="images" />
        <img
          src="https://smash-app.s3-us-west-1.amazonaws.com/panoramic.png"
          alt=""
        />
      </div>
      <div className="nav-section">
        <img
          className="logo"
          src="https://smash-app.s3-us-west-1.amazonaws.com/Smash+Bros+Logo.png"
          alt=""
        />
        <div className="nav">
          <Link to="/fighters">
            <button className="nav-button">
              <img
                className="button-icon"
                src="https://smash-app.s3-us-west-1.amazonaws.com/fight.png"
                alt=""
              />
              <br />
              <p className='button-title'>Fighters</p>
            </button>
          </Link>
          <Link to="/tournaments">
            <button className="nav-button">
              <img
                className="button-icon"
                src="https://smash-app.s3-us-west-1.amazonaws.com/tournament.png"
                alt=""
              />
              <br />
              <p className='button-title'>Tournaments</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="game-info">
        <div>
          Super Smash Bros. is a series of crossover fighting video games
          published by Nintendo, and primarily features characters from various
          Nintendo franchises. The gameplay objective differs from that of
          traditional fighters in that the aim is to knock opponents off the
          stage instead of depleting life bars.
        </div>
      </div>
      <News />
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
    </div>
  );
}

export default withRouter(Home);
