import Map from "./components/Map.js";
import Leaderboard from "./components/Leaderboard.js";
import titlePic from "./images/minesweeperTitle.png";
import startButton from "./images/startButton.png";
import leaderboardButton from "./images/leaderboardButton.png";
import { Link, Route } from "react-router-dom";
import "./App.css";

// Original Minesweeper Difficulty Levels
// Beginner: 9x9 w/ 10 mines
// Intermediate: 16x16 w/ 40 mines
// Expert: 16x30 w/ 99 mines

function App() {

  const style = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      width: "100vw"
    },
    title: {
      width: "90vw",
    },
    start: {
      marginTop: "10vh",
      width: "35vw",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    leaderboard: {
      marginTop: "5vh",
      width: "35vw",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  }

  return (
    <div className="App">
      <Route exact path="/">
        <div style={style.page}>
          <img style={style.title} src={titlePic} />
          <Link to="/minesweeper_game">
            <img style={style.start} src={startButton}/>
          </Link>
          <Link to="/leaderboard">
            <img style={style.leaderboard} src={leaderboardButton}/>
          </Link>
        </div>
      </Route>
      <Route path="/minesweeper_game">
        <Map col={16} row={16} mines={10} />
      </Route>
      <Route path="/leaderboard">
        <Leaderboard />
      </Route>
    </div>
  );
}

export default App;

// TO MAKE MODAL WORK CORRECTLY
// for the three states of gameplay
// 1. regular
// 2. gameover
// 3. winningForm
// set them as a boolean where the three states are
// 1. null
// 2. false
// 3. true
