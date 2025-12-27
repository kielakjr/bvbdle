import PlayerSearch from './PlayerSearch'
import { useState, useEffect, use } from 'react';

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

  useEffect(() => {
    let found = false;
    if (selectedPlayer) {
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
    <PlayerSearch onSelect={setSelectedPlayer} className={`border-b-2 border-gray-400 focus:border-yellow-500 outline-none mb-2 ${isCorrect === false ? "animate-shake border-red-500" : ""}`} />
    {goalScorers.map((goal) =>
      <li key={`goal-${goal.minute}`} className="flex flex-row items-center mb-2">
        <span className="mr-2">{goal.minute}' - <p className={`inline ${!goal.guessed ? "px-1 text-gray-400 italic border-b-2 border-gray-400" : "text-green-500"}`}>{goal.guessed ? goal.player : "Guess the player"}</p></span>
      </li>
    )}
    </>
  )
}

export default GoalsGuesser
