import { useState, useEffect } from 'react';
import matches from '../data/database.json';

const App = () => {
  const [randomMatch, setRandomMatch] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * matches.length);
    const selectedMatch = matches[randomIndex];

    setRandomMatch(selectedMatch);
  }, []);


  return (
    <div>
      {randomMatch?.date}
    </div>
  );
}

export default App;
