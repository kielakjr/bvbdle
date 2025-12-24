import React from 'react'
import Team from './Team';
import Pitch from './Pitch';
import ListedTeam from './ListedTeam';

const Teams = ({ match }) => {

  const { lineup_home, lineup_away } = match;

  return (
    <div className="flex flex-col gap-15 items-center w-full md:flex-row md:justify-around">
      <div className="flex flex-row items-center gap-5">
        <ListedTeam team={lineup_home}/>
        <Pitch>
          <Team lineup={lineup_home} />
        </Pitch>
      </div>
      <div className="flex flex-row-reverse items-center gap-5">
        <ListedTeam team={lineup_away}/>
        <Pitch>
          <Team lineup={lineup_away} />
        </Pitch>
      </div>
    </div>
  )
}

export default Teams
