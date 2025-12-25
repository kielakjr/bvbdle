import React from 'react'

const GoalGuesser = ({ goal }) => {
  return (
    <li>
      <span className="mr-2">{goal.minute}' - </span>
      <input type="text" placeholder="Player Name" className="border-b-2 border-gray-400 focus:border-yellow-500 outline-none mr-2" />
    </li>
  )
}

export default GoalGuesser
