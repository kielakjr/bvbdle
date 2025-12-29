import React from 'react';
import { useState, useEffect } from 'react';


const normalizeString = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
};

const getHighlightedText = (text, highlight) => {
  const normalizedText = normalizeString(text);
  const normalizedHighlight = normalizeString(highlight);

  const startIndex = normalizedText.indexOf(normalizedHighlight);
  if (startIndex === -1) {
    return <span>{text}</span>;
  }

  if (highlight.toLowerCase() === 'ss' && text.includes('ß')) {
      const indexInOriginal = text.toLowerCase().indexOf('ß');
      if (indexInOriginal !== -1) {
          const before = text.substring(0, indexInOriginal);
          const match = text.substring(indexInOriginal, indexInOriginal + 1);
          const after = text.substring(indexInOriginal + 1);
          return <span>{before}<b>{match}</b>{after}</span>;
      }
  }

  const endIndex = startIndex + normalizedHighlight.length;
  const before = text.substring(0, startIndex);
  const match = text.substring(startIndex, endIndex);
  const after = text.substring(endIndex);

  return (
    <span>
      {before}
      <span className="font-bold">{match}</span>
      {after}
    </span>
  );
};

const PlayerSearch = ({ onSelect, ...props }) => {
  const [query, setQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  useEffect(() => {
    setFilteredPlayers(
      players.filter((player) => {
        const normalizedPlayer = normalizeString(player);
        const normalizedQuery = normalizeString(query);
        return normalizedPlayer.includes(normalizedQuery);
      })
    );
  }, [query]);

  const handleSelect = (player) => {
    setFilteredPlayers([]);
    onSelect(player);
    setQuery('');
  };

  return (
    <div className="group relative">
      <input
        type="text"
        placeholder="Player Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        {...props}
      />
      {query && (
        <ul className="absolute w-full z-50 border border-gray-300 max-h-40 overflow-y-auto mt-1 bg-white">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <li
                key={player}
                className="px-2 py-1 italic border-b border-gray-300 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  handleSelect(player);
                }}
              >
                {getHighlightedText(player, query)}
              </li>
            ))
          ) : (
            <li className="px-2 py-1 text-gray-500">No players found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default PlayerSearch;
