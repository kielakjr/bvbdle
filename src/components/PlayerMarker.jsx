import React from 'react';
import Marker from './Marker';

const PlayerMarker = ({ player }) => {
  const hasImage = player.image && player.image.length > 0;

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
        {player.shirt_number}
      </Marker>

      <div
        className="
          absolute bottom-full mb-3 hidden group-hover:flex
          flex-col items-center p-2 rounded-md bg-gray-900 bg-opacity-80
          shadow-xl transition-all duration-200 pointer-events-none
        "
      >
        {hasImage && (
          <img
            src={player.image}
            alt={player.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-400 mb-2"
          />
        )}

        <span className="text-white font-semibold text-sm whitespace-nowrap">
          {player.name}
        </span>
      </div>
    </div>
  );
};

export default PlayerMarker;
