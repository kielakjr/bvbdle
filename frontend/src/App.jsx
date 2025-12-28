import React from 'react'
import MatchContextProvider from './context/match-context'
import MatchInfo from './components/MatchInfo'
import Teams from './components/Teams'
import WelcomeModal from './components/WelcomeModal'
import Game from './components/Game'

const App = () => {

  return (
    <>
    <WelcomeModal />
    <MatchContextProvider>
      <Game />
    </MatchContextProvider>
    </>
  )
}

export default App
