import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link, withRouter } from "react-router-dom";
import Chat from "../Chat/Chat";
import "./TournamentBracket.css";

function TournamentBracket(props) {
  // all fighters to choose from
  const [seed, setSeed] = useState(0)
  const [fighters, setFighters] = useState([]);
  const [newPlayer, setNewPlayer] = useState('')
  const [newFighter, setNewFighter] = useState('')
  const [bracketSetup, setBracketSetup] = useState({
    seedNum: 0,
    playersToAdd: [],
    fightersToAdd: []
  })
  const [setupDropdown, setSetupDropdown] = useState('setupClosed')

  const [playerImgs, setPlayerImgs] = useState([]);
  const [playersR1, setplayersR1] = useState([]);
  const [playersR2, setplayersR2] = useState([]);
  const [playersR3, setplayersR3] = useState([]);
  const [playersR4, setplayersR4] = useState([]);
  const [playersR5, setplayersR5] = useState([]);
  const [playersR6, setplayersR6] = useState([]);
  const [playersR7, setplayersR7] = useState([]);


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

  useEffect(() => {
    setplayersR1(Array(+seed).fill(''))
    setplayersR2(Array(seed / 2).fill(""));
    if(seed >= 4){
      setplayersR3(Array(seed / 4).fill(""));
    } else setplayersR3([])
    if(seed >= 8){
      setplayersR4(Array(seed / 8).fill(""))
    } else setplayersR4([])
    if(seed >= 16){
      setplayersR5(Array(seed / 16).fill(""))
    } else setplayersR5([])
    if(seed >= 32){
      setplayersR6(Array(seed / 32).fill(""))
    } else setplayersR6([])
    if(seed >= 64){
      setplayersR7(Array(seed / 64).fill(""))
    } else setplayersR7([])
  }, [seed]);

  let fighterOptions = fighters.sort().map(fighter => {
    return <option value={fighter[1]}> {fighter[1]} </option>
  })

  const handleSeedChange = val => {
    return seed === val ? null : setSeed(val)
  }
  const handleAddPlayers = () => {
    let addedPlayer = Object.assign(bracketSetup);
    addedPlayer.playersToAdd.push(newPlayer);
    setBracketSetup(addedPlayer);
  };
  const handleAddFighters = () => {
    let addedFighter = Object.assign(bracketSetup)
    addedFighter.fightersToAdd.push(newFighter)
    setBracketSetup(addedFighter)
  }
  const generateBracket = () => {
    if(bracketSetup.playersToAdd.length < 4 || bracketSetup.fightersToAdd.length < 4){
      alert('Please add more players. A bracket must have at least 4 participants to generate.')
    } else {
      setplayersR1(bracketSetup.playersToAdd)
      let intersection = []
      bracketSetup.fightersToAdd.filter(fighterA => {
        fighters.filter((fighterB, i) => {
          if(fighterB[1] === fighterA){
            intersection.push(fighterB[0])
          }
        })
      })
      setPlayerImgs(intersection)
    }
  }
  
  const toggleSetupDropdown = () => {
    setupDropdown === "setupClosed"
      ? setSetupDropdown("setupOpen")
      : setSetupDropdown("setupClosed");
  };

  const advancePlayer = (i, round) => {
    if(seed % 4 !== 0) return 
    let advPlayerR2 = [...playersR2];
    let advPlayerR3 = [...playersR3];
    let advPlayerR4 = [...playersR4];
    let advPlayerR5 = [...playersR5];
    let advPlayerR6 = [...playersR6];
    let advPlayerR7 = [...playersR7];
    if (round === 1) {
      advPlayerR2[Math.floor(i / 2)] = [[...playersR1][i], playerImgs[i]];
      setplayersR2(advPlayerR2);
    }
    if (round === 2) {
      advPlayerR3[Math.floor(i / 2)] = [...playersR2][i];
      setplayersR3(advPlayerR3);
    }
    if (round === 3) {
      advPlayerR4[Math.floor(i / 2)] = [...playersR3][i];
      setplayersR4(advPlayerR4);
    }
    if (round === 4) {
      advPlayerR5[Math.floor(i / 2)] = [...playersR4][i];
      setplayersR5(advPlayerR5);
    }
    if (round === 5) {
      advPlayerR6[Math.floor(i / 2)] = [...playersR5][i];
      setplayersR6(advPlayerR6);
    }
    if (round === 6) {
      advPlayerR7[Math.floor(i / 2)] = [...playersR6][i];
      setplayersR7(advPlayerR7);
    }
  };

  let bracketRoundOne = playersR1.map((el, i) => {
    if (i % 2 === 0) {
      return (
        <div className="bracket-round-one">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160 v50 h-160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  let bracketRoundTwo = playersR2.map((el, i) => {
    if (i % 2 === 0) {
      return (
        <div className="bracket-round-two">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160 v100 h-160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  let bracketRoundThree = playersR3.map((el, i) => {
    if (seed < 8) {
      return (
        <div className="bracket-round-three">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
    else if (i % 2 === 0) {
      return (
        <div className="bracket-round-three">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160 v200 h-160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  let bracketRoundFour = playersR4.map((el, i) => {
    if (seed < 16) {
      return (
        <div className="bracket-round-four">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
    else if (i % 2 === 0) {
      return (
        <div className="bracket-round-four">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160 v400 h-160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  let bracketRoundFive = playersR5.map((el, i) => {
    if (seed < 32) {
      return (
        <div className="bracket-round-five">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
    else if (i % 2 === 0) {
      return (
        <div className="bracket-round-five">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160 v800 h-160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  let bracketRoundSix = playersR6.map((el, i) => {
    if (seed < 64) {
      return (
        <div className="bracket-round-six">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
    if (i % 2 === 0) {
      return (
        <div className="bracket-round-six">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160 v1600 h-160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  let bracketRoundSeven = playersR7.map((el, i) => {
    if (i % 64 === 0) {
      return (
        <div className="bracket-round-seven">
          <svg height="100%" width="100%">
            <path
              d="M5 5 h160"
              fill="none"
              stroke-width="4"
              stroke="whitesmoke"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      );
    }
  });
  // ALL PLAYERS
  let playersRoundOne = playersR1.map((name, i) => {
    let round = 1;
    if (name === "") return <div className="players-round-one"></div>;
    return (
      <div className="players-round-one">
        <div className="player-img-container">
          <img
            src={playerImgs[i]}
            alt=""
            onClick={() => advancePlayer(i, round)}
            className="player-img"
          />
        </div>
        <p>{name}</p>
      </div>
    );
  });
  let playersRoundTwo = playersR2.map((player, i) => {
    let round = 2;
    if (player[0] === "") return <div className="players-round-two"></div>;
    else if (playersR2.length <= playersR1.length / 2) {
      return (
        <div className="players-round-two">
          <div className="player-img-container">
            <img
              src={player[1]}
              alt=""
              onClick={() => advancePlayer(i, round)}
              className="player-img"
            />
          </div>
          <p>{player[0]}</p>
        </div>
      );
    }
  });
  let playersRoundThree = playersR3.map((player, i) => {
    let round = 3;
    if (player[0] === "") return <div className="players-round-three"></div>;
    else if (playersR3.length <= playersR2.length / 2) {
      return (
        <div className="players-round-three">
          <div className="player-img-container">
            <img
              src={player[1]}
              alt=""
              onClick={() => advancePlayer(i, round)}
              className="player-img"
            />
          </div>
          <p>{player[0]}</p>
        </div>
      );
    }
  });
  let playersRoundFour = playersR4.map((player, i) => {
    let round = 4;
    if (player[0] === "") return <div className="players-round-four"></div>;
    else if (playersR4.length <= playersR3.length / 2) {
      return (
        <div className="players-round-four">
          <div className="player-img-container">
            <img
              src={player[1]}
              alt=""
              onClick={() => advancePlayer(i, round)}
              className="player-img"
            />
          </div>
          <p>{player[0]}</p>
        </div>
      );
    }
  });
  let playersRoundFive = playersR5.map((player, i) => {
    let round = 5;
    if (player[0] === "") return <div className="players-round-five"></div>;
    else if (playersR5.length <= playersR4.length / 2) {
      return (
        <div className="players-round-five">
          <div className="player-img-container">
            <img
              src={player[1]}
              alt=""
              onClick={() => advancePlayer(i, round)}
              className="player-img"
            />
          </div>
          <p>{player[0]}</p>
        </div>
      );
    }
  });
  let playersRoundSix = playersR6.map((player, i) => {
    let round = 6;
    if (player[0] === "") return <div className="players-round-six"></div>;
    else if (playersR6.length <= playersR5.length / 2) {
      return (
        <div className="players-round-six">
          <div className="player-img-container">
            <img
              src={player[1]}
              alt=""
              onClick={() => advancePlayer(i, round)}
              className="player-img"
            />
          </div>
          <p>{player[0]}</p>
        </div>
      );
    }
  });
  let playersRoundSeven = playersR7.map((player, i) => {
    let round = 7;
    if (player[0] === "") return <div className="players-round-seven"></div>;
    else if (playersR4.length <= playersR3.length / 2) {
      return (
        <div className="players-round-seven">
          <div className="player-img-container">
            <img
              src={player[1]}
              alt=""
              onClick={() => advancePlayer(i, round)}
              className="player-img"
            />
          </div>
          <p>{player[0]}</p>
        </div>
      );
    }
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

      {/* bracket setup dropdown */}
      <button className="setup-button" onClick={toggleSetupDropdown}>
        Bracket Setup ˅
      </button>
      <div className={`setup-dropdown ${setupDropdown}`}>
        {/* seed # */}
        <div className='add-player'>
          <h3 style={{margin: '0'}}>Seed #</h3>
          <select style={{height: '35px', width: '50px'}} onClick={ev => handleSeedChange(ev.target.value)}>
            <option style={{fontSize: '18px'}} value={0}> - </option>
            <option style={{fontSize: '18px'}} value={4}> 4 </option>
            <option style={{fontSize: '18px'}} value={8}> 8 </option>
            <option style={{fontSize: '18px'}} value={16}> 16 </option>
            <option style={{fontSize: '18px'}} value={32}> 32 </option>
            <option style={{fontSize: '18px'}} value={64}> 64 </option>
          </select>
        </div>

        {/* added players & fighters shown here */}
        <div className="player-list">
          {bracketSetup.playersToAdd[0] && (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                  overflow: "hidden",
                }}
              >
                <h4>Players</h4>
                <ol style={{ marginLeft: "30px" }}>
                  {bracketSetup.playersToAdd.map((player) => (
                    <li
                      style={{
                        width: "fit-content",
                        maxHeight: "20px",
                        textOverflow: "clip",
                      }}
                    >
                      {" "}
                      {player}{" "}
                    </li>
                  ))}
                </ol>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                  overflow: "hidden",
                }}
              >
                <h4>Fighters</h4>
                <ol style={{ marginLeft: "30px" }}>
                  {bracketSetup.fightersToAdd.map((fighter) => (
                    <li
                      style={{
                        width: "fit-content",
                        maxHeight: "20px",
                        textOverflow: "clip",
                      }}
                    >
                      {" "}
                      {fighter}{" "}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}
        </div>

        {/* add a player to the tournament */}
        <div className="add-player">
          <input
            onChange={(ev) => setNewPlayer(ev.target.value)}
            value={newPlayer}
            placeholder="Player Name"
            style={{ height: "30px", width: "140px" }}
          ></input>
          <select
            style={{ height: "30px", width: "180px" }}
            onChange={(ev) => setNewFighter(ev.target.value)}
            value={newFighter}
          >
            <option value={0}> - Select A Fighter - </option>
            {fighterOptions}
          </select>
          <button
            style={{ height: "30px", padding: "0 5px" }}
            onClick={() => {
              handleAddPlayers();
              setNewPlayer("");
              handleAddFighters();
            }}
          >
            Add
          </button>
        </div>

        {/* generate new bracket */}
        <button
          className='generate-button'
          onClick={() => generateBracket()}>
          Generate Bracket
        </button>

      </div>

      <Chat />

      {/* bracket container */}
      <div className="bracket-container">
        <div className="bracket-round-container"> {bracketRoundOne} </div>
        <div className="bracket-round-container"> {bracketRoundTwo} </div>
        <div className="bracket-round-container"> {bracketRoundThree} </div>
        <div className="bracket-round-container"> {bracketRoundFour} </div>
        <div className="bracket-round-container"> {bracketRoundFive} </div>
        <div className="bracket-round-container"> {bracketRoundSix} </div>
        <div className="bracket-round-container"> {bracketRoundSeven} </div>
        <div className="players-container">
          <div className="players-round-container"> {playersRoundOne} </div>
          <div className="players-round-container"> {playersRoundTwo} </div>
          <div className="players-round-container"> {playersRoundThree} </div>
          <div className="players-round-container"> {playersRoundFour} </div>
          <div className="players-round-container"> {playersRoundFive} </div>
          <div className="players-round-container"> {playersRoundSix} </div>
          <div className="players-round-container"> {playersRoundSeven} </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(TournamentBracket);
