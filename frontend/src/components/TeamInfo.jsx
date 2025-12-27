import React from 'react'
import GoalGuesser from './GoalGuesser';

const TeamInfo = ({ team, crest, goals, isScoreGuessed, isHome }) => {

  return (
    <div className={isHome ? 'w-1/3 justify-start mx-17' : 'w-1/3 justify-end mx-17'}>
      <div className={`flex ${isHome ? "flex-row" : "flex-row-reverse"} items-center`}>
        <div className="flex flex-col items-center">
          <img
            className="mb-2 h-24 w-24 object-contain mix-blend-multiply"
            src={crest}
            alt={`${team} crest`}
          />
          <h2>{team}</h2>
        </div>
        {isScoreGuessed &&
        <ul className="text-md italic mx-6">
          {team !== "Dortmund" ? goals.map((goal) =>
            <li key={`${team}-goal-${goal.minute}`}>{goal.minute}' - {goal.player}</li>
          ) : goals.map((goal) => ( goal.type !== "own-goal" ?
            <GoalGuesser key={`${team}-goal-${goal.minute}`} goal={goal}/>
            : <li key={`${team}-goal-${goal.minute}`}>{goal.minute}' - {goal.player} (own goal)</li>)
          )}
        </ul>}
      </div>
    </div>
  )
}

export default TeamInfo
