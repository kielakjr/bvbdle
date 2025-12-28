import React from 'react'
import { MatchContext } from '../context/match-context';
import { use } from 'react';

const ListedTeam = ({ lineup, team }) => {

  const {bvb_side, guessed_players} = use(MatchContext);

  return (
    <ul className="max-h-128 w-70 overflow-y-auto p-4 rounded-lg shadow-md bg-gradient-to-t from-yellow-200 via-yellow-300 to-yellow-400">
      {team !== bvb_side ? lineup.map((player) => (
        <li key={player.name} className="mb-2">
          {player.shirt_number ? `${player.shirt_number} ` : ''}{player.name}
        </li>
      )) : lineup.filter(player => guessed_players.includes(player.name)).map((player) => (
        <li key={player.name} className="mb-2">
          {player.shirt_number ? `${player.shirt_number} ` : ''}{player.name}
        </li>
      ))}
    </ul>
  )
}

export default ListedTeam
