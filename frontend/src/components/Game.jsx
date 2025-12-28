import React from 'react'
import MatchInfo from './MatchInfo'
import Teams from './Teams'
import ResultModal from './ResultModal';

const Game = () => {

  return (
    <>
      <ResultModal />
      <MatchInfo />
      <Teams />
    </>
  )
}

export default Game
