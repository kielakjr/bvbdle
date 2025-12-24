import React from 'react'
import TeamInfo from './TeamInfo';

const MatchInfo = ({ match }) => {

  const { date, competition, home_team, away_team, home_crest, away_crest, score } = match;

  return (
    <div className="flex flex-col p-4 text-gray-800 bg-gray-300 m-7 rounded-lg shadow-lg">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">{competition}</h1>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
      <div className="flex flex-row justify-around items-cente">
        <TeamInfo team={home_team} crest={home_crest} />
        <h2 className="mt-6 text-6xl">{score}</h2>
        <TeamInfo team={away_team} crest={away_crest} />
      </div>
    </div>
  )
}

export default MatchInfo
