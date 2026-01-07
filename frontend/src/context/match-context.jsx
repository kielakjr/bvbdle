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
  results: [],
  isResultsShown: false,
  addGuessedPlayer: () => {},
  reveal: () => {},
  addResults: () => {},
  toggleResults: () => {}
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
  const [results, setResults] = useState([]);
  const [isResultsShown, setIsResultsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const fetchMatches = async () => {
    //   try {
    //     const response = await fetch("/api/matches/random");
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const match = await response.json();
    //     const matchData = extractData(match);
    //     setRandomMatch(matchData);
    //   } catch (error) {
    //     console.error("Error fetching matches:", error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchMatches();

    // Using local data for now
    const randomIndex = Math.floor(Math.random() * matches.length);
    const matchData = extractData(matches[randomIndex]);
    setRandomMatch(matchData);
    setIsLoading(false);
  }, []);

  const addGuessedPlayer = (player) => {
    setRandomMatch(prevState => ({
      ...prevState,
      guessed_players: [...prevState.guessed_players, player]
    }));
  }

  const addResults = (result) => {
    setResults(prevResults => ([...prevResults, result]));
  }

  const ctxValue = {
    ...randomMatch,
    revealed,
    results,
    isResultsShown,
    addGuessedPlayer,
    reveal: () => setRevealed(true),
    addResults,
    toggleResults: () => setIsResultsShown(prev => !prev),
  };

  return (
    isLoading ? <div>Loading match...</div> : (
      <MatchContext.Provider value={ctxValue}>
        {children}
      </MatchContext.Provider>
    )
  );
}


export default MatchContextProvider;
