import { useState, useEffect, createContext } from 'react';
import matches from '../data/database.json';

export const MatchContext = createContext({
  date: null,
  competition: null,
  home_team: null,
  away_team: null,
  home_crest: null,
  away_crest: null,
  score: null,
  goals: [],
  away_goals: [],
  home_goals: [],
  lineup_home: [],
  lineup_away: [],
  formation_home: null,
  formation_away: null,
  id: null,
  season: null,
  bvb_side: null,
  players_to_guess: [],
  guessed_players: [],
  revealed: null,
  addGuessedPlayer: () => {},
  reveal: () => {}
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
    away_goals: match.goals.filter(goal => goal.team === "away"),
    home_goals: match.goals.filter(goal => goal.team === "home"),
    lineup_home: match.lineups.filter(player => player.team === "home"),
    lineup_away: match.lineups.filter(player => player.team === "away"),
    formation_home: match.formations.home,
    formation_away: match.formations.away,
    id: match.id,
    season: match.season,
    bvb_side: match.match_info.home_team === "Dortmund" ? "home" : "away",
    players_to_guess: match.lineups.filter(player => player.team === (match.match_info.home_team === "Dortmund" ? "home" : "away")),
    guessed_players: [],
  };
}

const MatchContextProvider = ({ children }) => {
  const [randomMatch, setRandomMatch] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * matches.length);
    const selectedMatch = matches[randomIndex];

    setRandomMatch(extractData(selectedMatch));
  }, []);

  const addGuessedPlayer = (player) => {
    setRandomMatch(prevState => ({
      ...prevState,
      guessed_players: [...prevState.guessed_players, player]
    }));
  }

  const ctxValue = {
    ...randomMatch,
    revealed: revealed,
    addGuessedPlayer,
    reveal: () => setRevealed(true)
  };

  return (
    randomMatch ? (
      <MatchContext.Provider value={ctxValue}>
        {children}
      </MatchContext.Provider>
    ) : <div>Loading match...</div>
  );
}


export default MatchContextProvider;
