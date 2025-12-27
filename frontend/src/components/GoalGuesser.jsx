import PlayerSearch from './PlayerSearch'
import { useState, useEffect } from 'react';

const GoalGuesser = ({ goal }) => {

  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (selectedPlayer) {
      setIsCorrect(selectedPlayer === goal.player);
    }
  }, [selectedPlayer, goal.player]);

  return (
    <li className="flex flex-row items-center mb-2">
      <span className="mr-2">{goal.minute}' - </span>
      {selectedPlayer ? <p className={isCorrect ? 'text-green-500' : 'text-red-500'}>{goal.player}</p> :
        <PlayerSearch onSelect={setSelectedPlayer} className="border-b-2 border-gray-400 focus:border-yellow-500 outline-none" />
      }
    </li>
  )
}

export default GoalGuesser
