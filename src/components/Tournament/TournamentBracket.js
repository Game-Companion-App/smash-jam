import React, { useState, useEffect } from 'react';
import './TournamentBracket.css'

function TournamentBracket(props) {
  // const [firstRender, setFirstRender] = useState(true)
  // const [seed, setSeed] = useState(8)

  const [fightersImg, setFightersImg] = useState([])
  const [fightersR1, setFightersR1] = useState([])
  const [fightersR2, setFightersR2] = useState([])
  
  
  
  let dp = 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png'

  useEffect(() => {
    // setFightersR1([ 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto',  'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto', 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto',])
    setFightersR1([ 'Agentin', 'AngelFunny', 'BotKix', 'Brootium', 'DeskInca', 'Disoroma', 'Esooncock', 'Euphotto'])
    setFightersImg([ `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`, `${dp}`])
  }, [])

  const advanceFighter = i => {
    if(fightersR2.length <= fightersR1.length / 2){
      setFightersR2([...fightersR2, fightersR1[i]])
    } else return
  }

  let roundOne = fightersR1.map((el, i) => {
    if(i % 2 === 0){
      return  <div className='bracket-round-one'>
                <svg height='100%' width='100%'>
                  <path d='M5 5 h160 v50 h-160' fill='none' stroke-width='4' stroke='blue'></path>
                </svg>
              </div>
    }
  })
  let roundTwo = fightersR1.map((el, i) => {
    if(i % 4 === 0){
      return  <div className='bracket-round-two'>
                <svg height='100%' width='100%'>
                  <path d='M5 5 h160 v100 h-160' fill='none' stroke-width='4' stroke='green'></path>
                </svg>
              </div>
    }
  })


  let fightersRoundOne = fightersR1.map((name, i) => {
    return  <div className='fighters-round-one'>
              <img  src={fightersImg[i]} alt=''
                    onClick={() => advanceFighter(i)}
                    className='fighter-img' />
              <p>{name}</p>
            </div>
  })
  let fightersRoundTwo = fightersR2.map((name, i) => {
    if(fightersR2.length <= fightersR1.length / 2){
      return  <div className='fighters-round-two'>
                <img  src={fightersImg[i]} alt=''
                      onClick={() => advanceFighter(i)}
                      className='fighter-img' />
                <p>{name}</p>
              </div>
    }
  })


  
  return (
    <>
      {/* bracket container */}
      <div className='bracket-container'>
        <div className='bracket-round-container'> {roundOne} </div>
        <div className='bracket-round-container'> {roundTwo} </div>
        <div className='fighter-container'>
          <div className='fighters-round-container'> {fightersRoundOne} </div>
          <div className='fighters-round-container'> {fightersRoundTwo} </div>
        </div>
      </div>

      {/* chat container */}
      <div className='chat-container'>
        chat here
      </div>
    </>
  );
}

export default TournamentBracket;