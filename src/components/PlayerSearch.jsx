import React from 'react'
import players from '../data/players.json';
import { useState, useEffect } from 'react';

const PlayerSearch = ({ onSelect, ...props }) => {

  const [query, setQuery] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  useEffect(() => {
    setFilteredPlayers(
      players.filter(player =>
        player.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const handleSelect = (player) => {
    setFilteredPlayers([]);
    onSelect(player);
    setQuery("");
  };


  return (
    <div className="group relative">
      <input
        type="text"
        placeholder="Player Name"
        value={query}
        onChange={e => setQuery(e.target.value)}
        {...props}
      />
      {query && (
        <ul className="absolute w-full z-50 border border-gray-300 max-h-40 overflow-y-auto mt-1 bg-white">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map(player => (
              <li
                key={player}
                className="px-2 py-1 italic border-b border-gray-300 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  handleSelect(player);
                }}
              >
                {player}
              </li>
            ))
          ) : (
            <li className="px-2 py-1 text-gray-500">No players found</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default PlayerSearch
