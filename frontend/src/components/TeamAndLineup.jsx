import React from 'react'
import Team from './Team';
import Pitch from './Pitch';
import ListedTeam from './ListedTeam';

const TeamAndLineup = ({ team, lineup }) => {
  return (
    <div className="flex flex-col-reverse items-center self-start gap-5">
        <ListedTeam lineup={lineup} team={team}/>
        <Pitch>
          <Team lineup={lineup} team={team} />
        </Pitch>
      </div>
  )
}

export default TeamAndLineup
