import React from "react";
import { Link, withRouter } from "react-router-dom";

function Tournaments() {
  return (
    <div className="tournaments-container">
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

      {/* Title */}
      <h1>Tournaments</h1>
    </div>
  );
}

export default withRouter(Tournaments);
