import React, { useEffect, useRef } from 'react'
import PlayerSearch from './PlayerSearch';
import { MatchContext } from '../context/match-context';
import { use, useState } from 'react';

const MAX_GUESSES = 2;

const TeamSquadGuesser = () => {

  const {guessed_players, players_to_guess , addGuessedPlayer, revealed, reveal, addResults, toggleResults, results } = use(MatchContext);
  const [guesses, setGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const allCorrect = correctGuesses === players_to_guess.length;

  const handlePlayerSelect = (player) => {
    if (guesses >= MAX_GUESSES) return;
    if (guessed_players.includes(player)) return;
    addGuessedPlayer(player);
    setGuesses(prev => prev + 1);
  };

  const isPlayerCorrect = (playerName) => {
    return players_to_guess.some(player => player.name === playerName);
  }

  const revealAllPlayers = () => {
    if (results.find(result => result.type === 'goals') === undefined) return;
    players_to_guess.forEach(player => {
      if (!guessed_players.includes(player.name)) {
        addGuessedPlayer(player.name);
      }
    });
    addResults({
        correct: correctGuesses,
        total: players_to_guess.length,
        type: 'lineup'
      });
    toggleResults();
    reveal();
  }

  useEffect(() => {
    const correctCount = guessed_players.slice(0, MAX_GUESSES).filter(player => isPlayerCorrect(player)).length;
    setCorrectGuesses(correctCount);
  }, [guessed_players]);

  return (
    <div className="w-1/5 flex flex-col justify-center text-center items-center self-start">
      <label className="text-white mb-2 block">Guesses: {guesses} / {MAX_GUESSES}</label>
      <PlayerSearch disabled={guesses >= MAX_GUESSES || allCorrect} className="border-b-2 text-white border-gray-400 focus:border-yellow-500 outline-none" onSelect={handlePlayerSelect}/>
      <ul className="mt-2 text-white italic">
        {guessed_players.slice(0, MAX_GUESSES).map(player => (
          <li className={isPlayerCorrect(player) ? "text-green-500" : "text-red-500"} key={player}>{player}</li>
        ))}
      </ul>
      {guesses >= MAX_GUESSES && !allCorrect && !revealed && (
        <div className="mt-2 p-2 rounded">
          <p className="text-yellow-400">Maximum number of guesses reached!</p>
          <button onClick={revealAllPlayers} className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded cursor-pointer">Reveal All</button>
        </div>
      )}
      {allCorrect && (
        <div className="mt-2 p-2 bg-green-800 rounded">
          <p className="text-green-300">Congratulations! You guessed all players correctly!</p>
        </div>
      )}
    </div>
  )
}

export default TeamSquadGuesser
