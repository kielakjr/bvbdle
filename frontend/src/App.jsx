import MatchContextProvider from './context/match-context'
import WelcomeModal from './components/WelcomeModal'
import Game from './components/Game'
import { useState } from 'react';

const App = () => {

  const [isWelcomeShown, setIsWelcomeShown] = useState(true);

  return (
    <>
    {isWelcomeShown && <WelcomeModal onClose={() => setIsWelcomeShown(false)} />}
    <MatchContextProvider>
      <Game />
    </MatchContextProvider>
    </>
  )
}

export default App
