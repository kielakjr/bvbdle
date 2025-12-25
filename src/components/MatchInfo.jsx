import React from 'react'
import TeamInfo from './TeamInfo';
import { MatchContext } from '../context/match-context';
import { use, useState } from 'react';
import ScoreGuesser from './ScoreGuesser';

const MatchInfo = () => {

  const [guess, setGuess] = useState({ home: '', away: '' });

  const { date, competition, home_team, away_team, home_crest, away_crest, score, goals } = use(MatchContext)

  return (
      <div className="flex flex-col p-4 text-gray-800 bg-gray-300 m-7 rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">{competition}</h1>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div className="flex flex-row justify-around items-center">
          <TeamInfo team={home_team} crest={home_crest} />
          <div className="flex flex-col justify-center items-center">
            {guess.home !== '' && guess.away !== '' ? (
              <h2 className="text-6xl -mt-5 font-bold">
                {score}
              </h2> )
              : <ScoreGuesser setGuess={setGuess} />}
          </div>
          <TeamInfo team={away_team} crest={away_crest} />
        </div>
      </div>
  );
}

export default MatchInfo
