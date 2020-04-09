import React from 'react';
import './TournamentBracket.css'

function TournamentBracket(props) {

  let seedNum = 16
  let initialSeeds = []
  for(let i = 1; i <= seedNum; i += 2){
    initialSeeds.push({seed1: `player ${i}`, seed2: `player ${i + 1}`})
  }
  
  let bracketSeedPair = initialSeeds.map(pair => {
    return  <div className='bracket-seed-pair'>
              <p>{pair.seed1}</p>
              <svg height='60%' width='100%'>
                <path d='M5 5 h120 v50 h-120' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
              </svg>
              <p style={{transform: 'translateY(-35px)'}} >{pair.seed2}</p>
            </div>
  })
  let bracketLevelOne = initialSeeds.map((pair, i) => {
    if(i % 2 === 0){
      return  <div className='bracket-level-one'>
                <p>{pair.seed1}</p>
                <svg height='60%' width='100%'>
                  <path d='M5 5 h120 v100 h-120' fill='none' stroke-width='3' stroke-linecap='round' stroke='white'></path>
                </svg>
                <p style={{transform: 'translateY(-45px)'}} >{pair.seed2}</p>
              </div>
    }
  })
  
  return (
    <>
      {/* bracket container */}
      <div className='bracket-container'>
        <div> {bracketSeedPair} </div>
        <div className='bracket-section'> {bracketLevelOne} </div>
      </div>

      {/* chat container */}
      <div className='chat-container'>
        chat here
      </div>
    </>
  );
}

export default TournamentBracket;