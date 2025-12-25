import { use, useEffect, useState } from 'react'
import TeamAndLineup from './TeamAndLineup'
import { MatchContext } from '../context/match-context';
import PlayerSearch from './PlayerSearch';

const Teams = () => {

  const { lineup_home, lineup_away, addGuessedPlayer } = use(MatchContext);

  const handlePlayerSelect = (player) => {
    addGuessedPlayer(player);
  }

  return (
    <div className="flex flex-col gap-15 items-center w-full md:flex-row md:justify-center md:gap-10">
      <TeamAndLineup team="home" lineup={lineup_home} />
      <div className="self-start">
        <PlayerSearch className="border-b-2 text-white border-gray-400 focus:border-yellow-500 outline-none" onSelect={handlePlayerSelect}/>
      </div>
      <TeamAndLineup team="away" lineup={lineup_away} />
    </div>
  )
}

export default Teams
