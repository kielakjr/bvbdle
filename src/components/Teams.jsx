import React from 'react'
import Team from './Team';
import Pitch from './Pitch';

const Teams = ({ match }) => {

  const { lineup_home, lineup_away } = match;

  return (
    <div className="flex flex-row justify-around items-center w-full">
      <Pitch>
        <Team lineup={lineup_home} />
      </Pitch>
      <Pitch>
        <Team lineup={lineup_away} />
      </Pitch>
    </div>
  )
}

export default Teams
