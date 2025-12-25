import { useState, useEffect, createContext } from 'react';
import matches from '../../data/database.json';

export const MatchContext = createContext({
  date: null,
  competition: null,
  home_team: null,
  away_team: null,
  home_crest: null,
  away_crest: null,
  score: null,
  goals: [],
  lineup_home: [],
  lineup_away: [],
  formation_home: null,
  formation_away: null,
  id: null,
  season: null
});

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

const MatchContextProvider = ({ children }) => {
  const [randomMatch, setRandomMatch] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * matches.length);
    const selectedMatch = matches[randomIndex];

    setRandomMatch(extractData(selectedMatch));
  }, []);

  const ctxValue = randomMatch || {
    date: null,
    competition: null,
    home_team: null,
    away_team: null,
    home_crest: null,
    away_crest: null,
    score: null,
    goals: [],
    lineup_home: [],
    lineup_away: [],
    formation_home: null,
    formation_away: null,
    id: null,
    season: null
  };

  return (
    randomMatch ? (
      <MatchContext.Provider value={ctxValue}>
        {children}
      </MatchContext.Provider>
    ) : null
  );
}


export default MatchContextProvider;
