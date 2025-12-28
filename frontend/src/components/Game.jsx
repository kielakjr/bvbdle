import React from 'react'
import MatchInfo from './MatchInfo'
import Teams from './Teams'
import ResultModal from './ResultModal';
import { MatchContext } from '../context/match-context';
import { use } from 'react';

const Game = () => {

  const {isResultsShown} = use(MatchContext);

  return (
    <>
      <ResultModal />
      <MatchInfo />
      <Teams />
    </>
  )
}

export default Game
