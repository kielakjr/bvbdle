import React from 'react'
import PlayerMarker from './PlayerMarker';
import PlayerMarkerUnkown from './PlayerMarkerUnkown';
import { MatchContext } from '../context/match-context';
import { use } from 'react';

const Team = ({ lineup, team }) => {

  const {bvb_side} = use(MatchContext);

  console.log('BVB side:', bvb_side);
  console.log('Current team:', team);

  return (
    <div>
      { team === bvb_side ? (
      lineup.map((player) => (
        <PlayerMarkerUnkown key={player.name} player={player} />
      ))
      ) : (
        lineup.map((player) => (
          <PlayerMarker key={player.name} player={player} />
        ))
      )}
    </div>
  )
}

export default Team
