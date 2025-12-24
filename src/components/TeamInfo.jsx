import React from 'react'

const TeamInfo = ({ team, crest }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-2 h-24 w-24 object-contain mix-blend-multiply"
        src={crest}
        alt={`${team} crest`}
      />
      <h2>{team}</h2>
    </div>
  )
}

export default TeamInfo
