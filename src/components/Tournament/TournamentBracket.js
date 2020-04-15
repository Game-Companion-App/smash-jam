import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Chat from "../Chat/Chat";
import "./TournamentBracket.css";

function TournamentBracket(props) {
  const [fightersImg, setFightersImg] = useState([]);
  const [fightersR1, setFightersR1] = useState([]);
  const [fightersR2, setFightersR2] = useState([]);
  const [fightersR3, setFightersR3] = useState([]);
  const [fightersR4, setFightersR4] = useState([]);
  const [fightersR5, setFightersR5] = useState([]);
  const [fightersR6, setFightersR6] = useState([]);
  const [fightersR7, setFightersR7] = useState([]);

  useEffect(() => {
    setFightersR2(Array(fightersR1.length / 2).fill(""));
    setFightersR3(Array(fightersR1.length / 4).fill(""));
    setFightersR4(Array(fightersR1.length / 8).fill(""));
    setFightersR5(Array(fightersR1.length / 16).fill(""));
    setFightersR6(Array(fightersR1.length / 32).fill(""));
    setFightersR7(Array(fightersR1.length / 64).fill(""));
  }, [fightersR1]);

  let dp =
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png";

  useEffect(() => {
    setFightersR1([
      "Grover",
      "Benton",
      "Neal",
      "Caitlin",
      "Daryl",
      "Ina",
      "Preston",
      "Ellen",
      "Johnnie",
      "Francisco",
      "Theodore",
      "Domingo",
      "Williams",
      "Adrian",
      "Alyce",
      "Ryan",
      "Consuelo",
      "Tommie",
      "John",
      "Landon",
      "Mervin",
      "Joyce",
      "Conrad",
      "Vince",
      "Jermaine",
      "Frank",
      "Julia",
      "Debra",
      "Wallace",
      "Bernie",
      "Lazaro",
      "Elisa",
      "Brenton",
      "Lowell",
      "Owen",
      "Rodolfo",
      "Ramona",
      "Blake",
      "Eliseo",
      "Geneva",
      "Ricardo",
      "Hector",
      "Benita",
      "Mildred",
      "Morton",
      "Derek",
      "Hester",
      "Thomas",
      "Leta",
      "Gaston",
      "Vicki",
      "Mamie",
      "Amelia",
      "Jose",
      "Amalia",
      "Fredric",
      "Cindy",
      "William",
      "Ladonna",
      "Rhea",
      "Rupert",
      "Everette",
      "Michael",
      "Loren",
    ]);
    setFightersImg(Array(64).fill(`${dp}`));
  }, []);

  let advFighterR2 = [...fightersR2];
  let advFighterR3 = [...fightersR3];
  let advFighterR4 = [...fightersR4];
  let advFighterR5 = [...fightersR5];
  let advFighterR6 = [...fightersR6];
  let advFighterR7 = [...fightersR7];
  const advanceFighter = (i, round) => {
    if (round === 1) {
      advFighterR2[Math.floor(i / 2)] = [...fightersR1][i];
      setFightersR2(advFighterR2);
    }
    if (round === 2) {
      advFighterR3[Math.floor(i / 2)] = [...fightersR2][i];
      setFightersR3(advFighterR3);
    }
    if (round === 3) {
      advFighterR4[Math.floor(i / 2)] = [...fightersR3][i];
      setFightersR4(advFighterR4);
    }
    if (round === 4) {
      advFighterR5[Math.floor(i / 2)] = [...fightersR4][i];
      setFightersR5(advFighterR5);
    }
    if (round === 5) {
      advFighterR6[Math.floor(i / 2)] = [...fightersR5][i];
      setFightersR6(advFighterR6);
    }
    if (round === 6) {
      advFighterR7[Math.floor(i / 2)] = [...fightersR6][i];
      setFightersR7(advFighterR7);
    }
  };

  let bracketRoundOne = fightersR1.map((el, i) => {
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
  let bracketRoundTwo = fightersR1.map((el, i) => {
    if (i % 4 === 0) {
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
  let bracketRoundThree = fightersR1.map((el, i) => {
    if (i % 8 === 0) {
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
  let bracketRoundFour = fightersR1.map((el, i) => {
    if (i % 16 === 0) {
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
  let bracketRoundFive = fightersR1.map((el, i) => {
    if (i % 32 === 0) {
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
  let bracketRoundSix = fightersR1.map((el, i) => {
    if (i % 64 === 0) {
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
  let bracketRoundSeven = fightersR1.map((el, i) => {
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

  let fightersRoundOne = fightersR1.map((name, i) => {
    let round = 1;
    return (
      <div className="fighters-round-one">
        <img
          src={fightersImg[i]}
          alt=""
          onClick={() => advanceFighter(i, round)}
          className="fighter-img"
        />
        <p>{name}</p>
      </div>
    );
  });
  let fightersRoundTwo = fightersR2.map((name, i) => {
    let round = 2;
    if (name === "") return <div className="fighters-round-two"></div>;
    else if (fightersR2.length <= fightersR1.length / 2) {
      return (
        <div className="fighters-round-two">
          <img
            src={fightersImg[i]}
            alt=""
            onClick={() => advanceFighter(i, round)}
            className="fighter-img"
          />
          <p>{name}</p>
        </div>
      );
    }
  });
  let fightersRoundThree = fightersR3.map((name, i) => {
    let round = 3;
    if (name === "") return <div className="fighters-round-three"></div>;
    else if (fightersR3.length <= fightersR2.length / 2) {
      return (
        <div className="fighters-round-three">
          <img
            src={fightersImg[i]}
            alt=""
            onClick={() => advanceFighter(i, round)}
            className="fighter-img"
          />
          <p>{name}</p>
        </div>
      );
    }
  });
  let fightersRoundFour = fightersR4.map((name, i) => {
    let round = 4;
    if (name === "") return <div className="fighters-round-four"></div>;
    else if (fightersR4.length <= fightersR3.length / 2) {
      return (
        <div className="fighters-round-four">
          <img
            src={fightersImg[i]}
            alt=""
            onClick={() => advanceFighter(i, round)}
            className="fighter-img"
          />
          <p>{name}</p>
        </div>
      );
    }
  });
  let fightersRoundFive = fightersR5.map((name, i) => {
    let round = 5;
    if (name === "") return <div className="fighters-round-five"></div>;
    else if (fightersR5.length <= fightersR4.length / 2) {
      return (
        <div className="fighters-round-five">
          <img
            src={fightersImg[i]}
            alt=""
            onClick={() => advanceFighter(i, round)}
            className="fighter-img"
          />
          <p>{name}</p>
        </div>
      );
    }
  });
  let fightersRoundSix = fightersR6.map((name, i) => {
    let round = 6;
    if (name === "") return <div className="fighters-round-six"></div>;
    else if (fightersR6.length <= fightersR5.length / 2) {
      return (
        <div className="fighters-round-six">
          <img
            src={fightersImg[i]}
            alt=""
            onClick={() => advanceFighter(i, round)}
            className="fighter-img"
          />
          <p>{name}</p>
        </div>
      );
    }
  });
  let fightersRoundSeven = fightersR7.map((name, i) => {
    let round = 7;
    if (name === "") return <div className="fighters-round-seven"></div>;
    else if (fightersR4.length <= fightersR3.length / 2) {
      return (
        <div className="fighters-round-seven">
          <img
            src={fightersImg[i]}
            alt=""
            onClick={() => advanceFighter(i, round)}
            className="fighter-img"
          />
          <p>{name}</p>
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
      {/* bracket container */}
      <div className="bracket-container">
        <div className="bracket-round-container"> {bracketRoundOne} </div>
        <div className="bracket-round-container"> {bracketRoundTwo} </div>
        <div className="bracket-round-container"> {bracketRoundThree} </div>
        <div className="bracket-round-container"> {bracketRoundFour} </div>
        <div className="bracket-round-container"> {bracketRoundFive} </div>
        <div className="bracket-round-container"> {bracketRoundSix} </div>
        <div className="bracket-round-container"> {bracketRoundSeven} </div>
        <div className="fighter-container">
          <div className="fighters-round-container"> {fightersRoundOne} </div>
          <div className="fighters-round-container"> {fightersRoundTwo} </div>
          <div className="fighters-round-container"> {fightersRoundThree} </div>
          <div className="fighters-round-container"> {fightersRoundFour} </div>
          <div className="fighters-round-container"> {fightersRoundFive} </div>
          <div className="fighters-round-container"> {fightersRoundSix} </div>
          <div className="fighters-round-container"> {fightersRoundSeven} </div>
        </div>
      </div>

      {/* chat container */}
      <div className="chat-container">
        <Chat />
      </div>
    </>
  );
}

export default withRouter(TournamentBracket);
