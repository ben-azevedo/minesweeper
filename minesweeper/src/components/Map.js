import { useEffect, useState } from "react";
import createMap from "../services/CreateMap";
import Cell from "./Cell";
import reveal from "../services/Reveal";

function Map(props) {
  const [array, setArray] = useState([]);
  const [nonMines, setNonMines] = useState((props.row * props.col) - props.mines);
  const [inventory, setInventory] = useState([]);

  const handleReveal = (e, x, y) => {
    e.preventDefault();
    let editedMap = array.slice();
    if (editedMap[x][y].value === '💣') {
      console.log(editedMap);
      editedMap.forEach((row) => {
        row.forEach((cell) => {
          editedMap[cell.x][cell.y].revealed = true;
        })
      });
      setArray(editedMap);
    } else if (!editedMap[x][y].revealed) {
      let result = reveal(editedMap, x, y, nonMines);
      setArray(result.map);
      setNonMines(result.nonMineCount);
    }
    console.log(`a left click was recieved from cell [${x}, ${y}]`);
  };

  const handleFlag = (e, x, y) => {
    e.preventDefault();
    console.log(`made it to flagger from cell [${x}, ${y}]`);
    // edit array
    let editedMap = array.slice();
    editedMap[x][y].flagged = !editedMap[x][y].flagged;
    setArray(editedMap);
    console.log(`editedMap flag for cell [${x}, ${y}] = ${editedMap[x][y].flagged}`);
    console.log(`array flag for cell [${x}, ${y}] = ${array[x][y].flagged}`);
  };

  useEffect(() => {
    function startGame() {
      setArray(createMap(props.row, props.col, props.mines));
    }
    startGame();
  }, [props]);

  if (!array) {
    return (<h2>Loading...</h2>);
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}>
      {nonMines}
      { array.map(row => {
        return (
          <div
            style={{ display: "flex" }}>
            {row.map((cell) => {
              return (
                <Cell
                  info={cell}
                  handleReveal={handleReveal}
                  handleFlag={handleFlag}
                />)
            })}
          </div>
        )
      })}
    </div>);
}

export default Map;