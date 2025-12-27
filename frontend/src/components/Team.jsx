import React from 'react'
import PlayerMarker from './PlayerMarker';
import PlayerMarkerUnknown from './PlayerMarkerUnknown';
import { MatchContext } from '../context/match-context';
import { use } from 'react';

const Team = ({ lineup, team }) => {

  const {bvb_side, guessed_players} = use(MatchContext);

  return (
    <div>
      { team === bvb_side ? (
      lineup.map((player) => {
        if (guessed_players.includes(player.name)) {
          return <PlayerMarker key={player.name} player={player} />;
        } else {
          return <PlayerMarkerUnknown key={player.name} player={player} />;
        }
      })
      ) : (
        lineup.map((player) => (
          <PlayerMarker key={player.name} player={player} />
        ))
      )}
    </div>
  )
}

export default Team
