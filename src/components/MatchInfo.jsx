import React from 'react'
import TeamInfo from './TeamInfo';
import { MatchContext } from '../context/match-context';
import { use } from 'react';

const MatchInfo = () => {

  const { date, competition, home_team, away_team, home_crest, away_crest, score, goals } = use(MatchContext)

  return (
      <div className="flex flex-col p-4 text-gray-800 bg-gray-300 m-7 rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">{competition}</h1>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div className="flex flex-row justify-around items-center">
          <TeamInfo team={home_team} crest={home_crest} />
          <div className="flex flex-col items-center">
            <h2 className="text-6xl">{score}</h2>
            <div className="mt-2">
              {goals.map((goal, index) => (
                <p key={index} className="text-sm">
                  {goal.minute}' - {goal.player} ({goal.team})
                </p>
              ))}
            </div>
          </div>
          <TeamInfo team={away_team} crest={away_crest} />
        </div>
      </div>
  );
}

export default MatchInfo
