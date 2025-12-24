import { useState, useEffect } from 'react';
import matches from '../data/database.json';
import MatchInfo from './components/MatchInfo';
import Teams from './components/Teams';


const extractData = match => {
  return {
    date: match.date,
    competition: match.competition,
    home_team: match.match_info.home_team,
    away_team: match.match_info.away_team,
    home_crest: match.match_info.home_team_crest,
    away_crest: match.match_info.away_team_crest,
    score: match.match_info.score,
    goals: match.goals,
    lineup_home: match.lineups.filter(player => player.team === "home"),
    lineup_away: match.lineups.filter(player => player.team === "away"),
    formation_home: match.formations.home,
    formation_away: match.formations.away,
    id: match.id,
    season: match.season
  };
}

const App = () => {
  const [randomMatch, setRandomMatch] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * matches.length);
    const selectedMatch = matches[randomIndex];

    setRandomMatch(extractData(selectedMatch));
  }, []);


  return (
    <div>
      {randomMatch ?
        <>
          <MatchInfo match={randomMatch} />
          <Teams match={randomMatch} />
        </>
        :
        <div>Loading...</div>
      }
    </div>
  );
}

export default App;
