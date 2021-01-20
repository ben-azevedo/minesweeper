import { useEffect, useState } from "react";
import createMap from "../services/CreateMap";
import Cell from "./Cell";

function Map(props) {
  const [array, setArray] = useState([]);

  const handleReveal = (e, x, y) => {
    e.preventDefault();
    let editedMap = array.slice();
    editedMap[x][y].revealed = true;
    setArray(editedMap);
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
      const newMap = createMap(10, 10, 20);
      setArray(newMap);
    }
    startGame();
  }, []);

  if (!array) {
    return (<h2>Loading...</h2>);
  }

  return array.map(row => {
    return (
      <div
        style={{ display: "flex" }}>
        {row.map((cell) => {
          return (
            <Cell
              info={cell}
              handleReveal={handleReveal}
              handleFlag={handleFlag}
            />);
        })}
      </div>
    );
  });
}

export default Map;