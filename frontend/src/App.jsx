import React from 'react'
import MatchContextProvider from './context/match-context'
import MatchInfo from './components/MatchInfo'
import Teams from './components/Teams'
import WelcomeModal from './components/WelcomeModal'

const App = () => {

  return (
    <>
    <WelcomeModal />
    <MatchContextProvider>
      <MatchInfo />
      <Teams />
    </MatchContextProvider>
    </>
  )
}

export default App
