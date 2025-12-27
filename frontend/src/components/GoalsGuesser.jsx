import PlayerSearch from './PlayerSearch'
import { useState, useEffect, use } from 'react';
import { MatchContext } from '../context/match-context';

const mapGoalScorers = (goals) => {
  const scorers = [];
  goals.forEach(goal => {
    scorers.push({
      player: goal.player,
      type: goal.type,
      guessed: false,
      minute: goal.minute
    });
  });
  return scorers;
}


const GoalsGuesser = ({ goals }) => {

  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [goalScorers, setGoalScorers] = useState(mapGoalScorers(goals));
  const [isCorrect, setIsCorrect] = useState(null);
  const MAX_GUESSES = goals.length + Math.floor(goals.length / 2) + 1;
  const [guessCount, setGuessCount] = useState(0);
  const allGuessed = goalScorers.every(scorer => scorer.guessed);
  const noMoreGuesses = guessCount >= MAX_GUESSES;
  const canGuess = !allGuessed && !noMoreGuesses;
  const {revealed} = use(MatchContext);

  useEffect(() => {
    let found = false;
    if (selectedPlayer) {
      setGuessCount(prevCount => prevCount + 1);
      const updatedScorers = goalScorers.map(scorer => {
        if (!scorer.guessed && scorer.player === selectedPlayer && !found) {
          found = true;
          setTimeout(() => {
            setSelectedPlayer("");
          }, 500);
          return { ...scorer, guessed: true };
        }
        return scorer;
      });
      setGoalScorers(updatedScorers);
    }
    if (!found && selectedPlayer) {
      setIsCorrect(false);
      setTimeout(() => {
        setIsCorrect(null);
        setSelectedPlayer("");
      }, 500);
    }
  }, [selectedPlayer]);


  return (
    goals.length === 0 ? null :
    <>
    {canGuess &&
    <>
    <label className="font-bold mb-4">Guesses: {guessCount} / {MAX_GUESSES}</label>
    <PlayerSearch disabled={!canGuess} onSelect={setSelectedPlayer} className={`border-b-2 border-gray-400 focus:border-yellow-500 outline-none mb-2 ${isCorrect === false ? "animate-shake border-red-500" : ""}`} />
    </>
    }
    {canGuess && goalScorers.map((goal) =>
      <li key={`goal-${goal.minute}`} className="flex flex-row items-center mb-2">
        <span className="mr-2">{goal.minute}' - <p className={`inline ${!goal.guessed ? "px-1 text-gray-400 italic border-b-2 border-gray-400" : "text-green-500"}`}>{goal.guessed ? goal.player : "Guess the player"}</p></span>
      </li>
    )}
    {!canGuess && !revealed && goalScorers.map((goal) =>
      <li key={`goal-${goal.minute}`} className="flex flex-row items-center mb-2 self-end">
        <span className="mr-2">{goal.minute}' - <p className={`inline ${!goal.guessed ? "px-1 text-gray-400 italic border-b-2 border-gray-400" : "text-green-500"}`}>{goal.guessed ? goal.player : "Some player"}</p></span>
      </li>
    )}
    {revealed && goalScorers.map((goal) =>
      <li key={`goal-${goal.minute}`} className="flex flex-row items-center mb-2">
        <span className="mr-2">{goal.minute}' - <p className={`inline ${!goal.guessed ? "text-red-500" : "text-green-500"}`}>{goal.player}</p></span>
      </li>
    )}
    </>
  )
}

export default GoalsGuesser
