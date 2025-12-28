import React, { use } from 'react'
import MatchInfo from './MatchInfo'
import Teams from './Teams'
import ResultModal from './ResultModal';
import { MatchContext } from '../context/match-context';

const Game = () => {

  const {isResultsShown} = use(MatchContext);

  return (
    <>
      {isResultsShown && <ResultModal />}
      <MatchInfo />
      <Teams />
    </>
  )
}

export default Game
