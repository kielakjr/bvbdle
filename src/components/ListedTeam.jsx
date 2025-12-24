import React from 'react'

const ListedTeam = ({ team }) => {
  return (
    <ul className="max-h-128 w-70 overflow-y-auto border p-4 bg-white rounded-lg shadow-md">
      {team.map((player) => (
        <li key={player.name} className="mb-2">
          {player.name}
        </li>
      ))}
    </ul>
  )
}

export default ListedTeam
