import React from 'react'
import Team from './Team';
import Pitch from './Pitch';

const Teams = ({ match }) => {

  const { lineup_home, lineup_away } = match;

  return (
    <div className="flex flex-col gap-15 items-center w-full md:flex-row md:justify-around">
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
