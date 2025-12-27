import React from 'react'
import MatchContextProvider from './context/match-context'
import MatchInfo from './components/MatchInfo'
import Teams from './components/Teams'

const App = () => {

  return (
    <MatchContextProvider>
      <MatchInfo />
      <Teams />
    </MatchContextProvider>
  )
}

export default App
