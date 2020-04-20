import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./AllFighters.css";

function AllFighters() {
  const [dlcFighters, setDlcFighters] = useState([]);
  const [standardFighters, setStandardFighters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  const handleChange = (value) => {
    setSearchInput(value);
  };

  const allFighters = [...dlcFighters, ...standardFighters];
  let searchedFighters = allFighters.filter((element) => {
    return element.fighter_name.includes(searchInput.toUpperCase());
  });

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
      {/* INPUT BOX SECTION */}
      <div className="input-container">
        <input
          type="text"
          onChange={(event) => handleChange(event.target.value)}
          placeholder="Search Fighters"
          className="input-box"
        />
      </div>
      {searchInput[0] ? (
        <div className="searched-content">
          {searchedFighters.map((element) => {
            return (
              <div className="searched-fighter">
                <Link
                  to={`/fighter/${element.fighter_number}`}
                  params={{ fighterID: element.fighter_number }}
                >
                  <div className="fighter-block">
                    <h3>
                      #{element.fighter_number}
                      <br />
                      {element.fighter_name}
                    </h3>
                    {element.fighter_number === 36 ? (
                      <img
                        src={element.icon_image}
                        alt=""
                        className="snake-icon-image"
                      />
                    ) : (
                      <img
                        src={element.icon_image}
                        alt=""
                        className="icon-image"
                      />
                    )}
                    <div className="fighter-image-box">
                      <img
                        src={element.skin_1}
                        alt=""
                        className="fighter-image"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="fighters-container">
          <div className="title">
            <h2>DLC Fighters</h2>
          </div>
          <div className="fighters-box">
            {dlcFighters.map((dlc) => {
              return (
                //DLC SECTION
                <Link
                  to={`/fighter/${dlc.fighter_number}`}
                  params={{ fighterID: dlc.fighter_number }}
                >
                  <div className="fighter-block">
                    <div className="column-1">
                      <h3>
                        #{dlc.fighter_number}
                        <br />
                        {dlc.fighter_name}
                      </h3>
                      {dlc.fighter_number >= 79 && dlc.fighter_number <= 81 ? (
                        <img
                          src={dlc.icon_image}
                          alt=""
                          className="icon-image"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      ) : (
                        <img
                          src={dlc.icon_image}
                          alt=""
                          className="icon-image"
                        />
                      )}
                    </div>
                    <div className="column-2">
                      <img src={dlc.skin_1} alt="" className="fighter-image" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="title">
            <h2>Standard Fighters</h2>
          </div>
          <div className="fighters-box">
            {standardFighters.map((standard) => {
              return (
                //STANDARD SECTION
                <Link
                  to={`/fighter/${standard.fighter_number}`}
                  params={{ fighterID: standard.fighter_number }}
                >
                  <div className="fighter-block">
                    <h3>
                      #{standard.fighter_number}
                      <br />
                      {standard.fighter_name}
                    </h3>
                    {standard.fighter_number === 36 ? (
                      <img
                        src={standard.icon_image}
                        alt=""
                        className="snake-icon-image"
                      />
                    ) : (
                      <img
                        src={standard.icon_image}
                        alt=""
                        className="icon-image"
                      />
                    )}
                    <div className="fighter-image-box">
                      <img
                        src={standard.skin_1}
                        alt=""
                        className="fighter-image"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(AllFighters);
