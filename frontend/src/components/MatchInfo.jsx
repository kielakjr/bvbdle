import React from 'react'
import TeamInfo from './TeamInfo';
import { MatchContext } from '../context/match-context';
import { use, useState } from 'react';
import ScoreGuesser from './ScoreGuesser';

const MatchInfo = () => {

  const [guess, setGuess] = useState({ home: '', away: '' });

  const { date, competition, home_team, away_team, home_crest, away_crest, score, away_goals, home_goals } = use(MatchContext)

  const isScoreGuessed = guess.home !== '' && guess.away !== '';

  return (
      <div className="flex flex-col p-4 text-gray-800 m-7 rounded-lg shadow-lg bg-gradient-to-t from-yellow-200 via-yellow-200 to-yellow-400">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">{competition}</h1>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <TeamInfo isHome={true} team={home_team} crest={home_crest} goals={home_goals} isScoreGuessed={isScoreGuessed} />
          <div className="flex flex-col justify-center items-center">
            {isScoreGuessed ? (
              <h2 className="text-6xl -mt-5 font-bold">
                {score}
              </h2> )
              : <ScoreGuesser setGuess={setGuess} />}
          </div>
            <TeamInfo isHome={false} team={away_team} crest={away_crest} goals={away_goals} isScoreGuessed={isScoreGuessed} />
        </div>
      </div>
  );
}

export default MatchInfo
