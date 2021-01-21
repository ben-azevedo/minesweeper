import Map from "./components/Map.js";
import "./App.css";

// Original Minesweeper Difficulty Levels
// Beginner: 9x9 w/ 10 mines
// Intermediate: 16x16 w/ 40 mines
// Expert: 16x30 w/ 99 mines

function App() {
  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <Map col={20} row={20} mines={70} />
    </div>
  );
}

export default App;
