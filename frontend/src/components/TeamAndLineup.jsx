import React from 'react'
import Team from './Team';
import Pitch from './Pitch';
import ListedTeam from './ListedTeam';

const TeamAndLineup = ({ team, lineup }) => {
  return (
    <div className={`flex ${team === "home" ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col-reverse items-center md:self-start gap-5 mx-10 w-4/10`}>
        <ListedTeam lineup={lineup} team={team}/>
        <Pitch>
          <Team lineup={lineup} team={team} />
        </Pitch>
      </div>
  )
}

export default TeamAndLineup
