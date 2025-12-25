import React, { use } from 'react'
import TeamAndLineup from './TeamAndLineup'
import { MatchContext } from '../context/match-context';

const Teams = () => {

  const { lineup_home, lineup_away } = use(MatchContext);

  return (
    <div className="flex flex-col gap-15 items-center w-full md:flex-row md:justify-center md:gap-10">
      <TeamAndLineup team="home" lineup={lineup_home} />
      <TeamAndLineup team="away" lineup={lineup_away} />
    </div>
  )
}

export default Teams
