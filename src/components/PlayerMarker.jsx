import React from 'react'

const PlayerMarker = ({ player }) => {
  return (
    <div
    className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
    style={{
      top: `${player.team === 'home' ? 100 - player.coords.x * 2 : 200 - player.coords.x * 2}%`,
      left: `${player.coords.y}%`,
    }}
  >
    <div className={`
      w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
      ${player.team === 'home' ? 'bg-blue-500' : 'bg-red-500'}
      border-2 border-white
    `}>
    </div>
  </div>
  )
}

export default PlayerMarker
