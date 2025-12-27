import React from 'react'
import Marker from './Marker'

const PlayerMarkerUnkown = ({ player }) => {

  return (
    <div
      className="group absolute flex flex-col items-center z-10 hover:z-20"
      style={{
        top: `${player.team === 'home' ? 100 - player.coords.x * 2 + 5 : 100 - (200 - player.coords.x * 2) + 5}%`,
        left: `${player.team === 'home' ? player.coords.y : 100 - player.coords.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Marker team={player.team}>
      </Marker>
    </div>
  );
}

export default PlayerMarkerUnkown
