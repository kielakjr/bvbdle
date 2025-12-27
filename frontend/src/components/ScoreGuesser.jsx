import React from 'react'
import NumberInputGuess from './NumberInputGuess'
import { useState } from 'react';

const ScoreGuesser = ({ setGuess }) => {

  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const handleGuess = () => {
    setGuess({ home: homeScore, away: awayScore });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <NumberInputGuess value={homeScore} onChange={setHomeScore} />
        <span className="mx-2 -mt-2 text-6xl font-bold">:</span>
        <NumberInputGuess value={awayScore} onChange={setAwayScore} />
      </div>
      <button onClick={handleGuess} className="mt-4 px-4 py-2 bg-blue-500 text-white cursor-pointer rounded">Guess</button>
    </div>
  )
}

export default ScoreGuesser
