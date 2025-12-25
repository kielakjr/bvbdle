import React from 'react'
import { MatchContext } from '../context/match-context';
import { use } from 'react';

const ListedTeam = ({ lineup, team }) => {

  const {bvb_side} = use(MatchContext);

  return (
    <ul className="max-h-128 w-70 overflow-y-auto border p-4 bg-white rounded-lg shadow-md">
      {team !== bvb_side ? lineup.map((player) => (
        <li key={player.name} className="mb-2">
          {player.shirt_number ? `${player.shirt_number} ` : ''}{player.name}
        </li>
      )) : null}
    </ul>
  )
}

export default ListedTeam
