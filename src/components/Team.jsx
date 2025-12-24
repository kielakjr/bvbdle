import React from 'react'
import PlayerMarker from './PlayerMarker';

const Team = ({ lineup }) => {
  return (
    <div className="">
      {lineup.map((player) => (
        <PlayerMarker key={player.name} player={player} />
      ))}
    </div>
  )
}

export default Team
