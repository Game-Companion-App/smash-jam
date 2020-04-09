import React, { useState, useEffect } from 'react';
import './TournamentBracket.css'

function TournamentBracket(props) {
  const [firstRender, setFirstRender] = useState(true)
  const [seed, setSeed] = useState(8)
  // tournament entrants
  const [entrantName, setEntrantName] = useState([])
  const [entrantImg, setEntrantImg] = useState([])
  // entrants by round
  const [fightersR1, setFightersR1] = useState([])
  const [fightersR2, setFightersR2] = useState([])
  
  
  
  let dp = 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png'

  useEffect(() => {
    setEntrantName([ 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto',  'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto',])
    setEntrantImg([ `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`])
  }, [])

  useEffect(()=> {
    if(!firstRender){
      for(let i = 0; i < seed; i += 2){
        setFightersR1(fightersR1 => [...fightersR1, {
          one: {name: `${entrantName[i]}`, img: `${entrantImg[i]}`, pts: 0},
          two: {name: `${entrantName[i+1]}`, img: `${entrantImg[i+1]}`, pts: 0}
        }])
      }
    } else setFirstRender(false)
  }, [entrantName, entrantImg])

  const advanceFighter = fighterName => {
    let somethin = fightersR1.filter(fighter => fighter.name === fighterName)
    setFightersR1()
  }



  
  let bracketRoundOne = fightersR1.map((pair, i) => {
    return  <div className='bracket-round-one'>
              <div className='fighter-img'>
                <img src={pair.one.img} alt='' onClick={() => advanceFighter(pair.one.name)}/>
                <img src={pair.two.img} alt='' onClick={() => advanceFighter(pair.two.name)}/>
              </div>
              <p>{pair.one.name}</p>
              <svg height='60%' width='100%'>
                <path d='M5 5 h160 v50 h-160' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
              </svg>
              <p style={{transform: 'translateY(-35px)'}} >{pair.two.name}</p>
            </div>
  })
  let bracketRoundTwo = fightersR2.map((pair, i) => {
    if(i % 2 === 0){
      return  <div className='bracket-round-two'>
                <p>{pair.seed1}</p>
                <svg height='60%' width='100%'>
                  <path d='M5 5 h160 v100 h-160' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
                </svg>
                <p style={{transform: 'translateY(-45px)'}} >{pair.seed2}</p>
              </div>
    }
  })
  // let bracketLevelTwo = initialSeeds.map((pair, i) => {
  //   if(i % 4 === 0){
  //     return  <div className='bracket-level-two'>
  //               <p>{pair.seed1}</p>
  //               <svg height='60%' width='100%'>
  //                 <path d='M5 5 h120 v200 h-120' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
  //               </svg>
  //               <p style={{transform: 'translateY(-65px)'}} >{pair.seed2}</p>
  //             </div>
  //   }
  // })
  // let bracketLevelThree = initialSeeds.map((pair, i) => {
  //   if(i % 8 === 0){
  //     return  <div className='bracket-level-three'>
  //               <p>{pair.seed1}</p>
  //               <svg height='60%' width='100%'>
  //                 <path d='M5 5 h120 v400 h-120' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
  //               </svg>
  //               <p style={{transform: 'translateY(-105px)'}} >{pair.seed2}</p>
  //             </div>
  //   }
  // })
  // let bracketLevelFour = initialSeeds.map((pair, i) => {
  //   if(i % 16 === 0){
  //     return  <div className='bracket-level-four'>
  //               <p>{pair.seed1}</p>
  //               <svg height='60%' width='100%'>
  //                 <path d='M5 5 h120 v800 h-120' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
  //               </svg>
  //               <p style={{transform: 'translateY(-185px)'}} >{pair.seed2}</p>
  //             </div>
  //   }
  // })
  // let bracketLevelFive = initialSeeds.map((pair, i) => {
  //   if(i % 32 === 0){
  //     return  <div className='bracket-level-five'>
  //               <p>{pair.seed1}</p>
  //               <svg height='60%' width='100%'>
  //                 <path d='M5 5 h120 v1600 h-120' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
  //               </svg>
  //               <p style={{transform: 'translateY(-345px)'}} >{pair.seed2}</p>
  //             </div>
  //   }
  // })
  
  return (
    <>
      {/* bracket container */}
      <div className='bracket-container'>
        <div> {bracketRoundOne} </div>
        <div className='bracket-section-one'> {bracketRoundTwo} </div>
        {/* <div className='bracket-section-two'> {bracketLevelTwo} </div>
        <div className='bracket-section-three'> {bracketLevelThree} </div>
        <div className='bracket-section-four'> {bracketLevelFour} </div>
        <div className='bracket-section-five'> {bracketLevelFive} </div> */}
      </div>

      {/* chat container */}
      <div className='chat-container'>
        chat here
      </div>
    </>
  );
}

export default TournamentBracket;