import React, { use } from 'react'
import Team from './Team';
import Pitch from './Pitch';
import ListedTeam from './ListedTeam';
import { MatchContext } from '../context/match-context';

const Teams = () => {

  const { lineup_home, lineup_away } = use(MatchContext);

  return (
    <div className="flex flex-col gap-15 items-center w-full md:flex-row md:justify-center md:gap-10">
      <div className="flex flex-col-reverse items-center gap-5">
        <ListedTeam team={lineup_home}/>
        <Pitch>
          <Team lineup={lineup_home} />
        </Pitch>
      </div>
      <div className="flex flex-col-reverse items-center gap-5">
        <ListedTeam team={lineup_away}/>
        <Pitch>
          <Team lineup={lineup_away} />
        </Pitch>
      </div>
    </div>
  )
}

export default Teams
