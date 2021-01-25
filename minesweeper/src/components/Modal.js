import { useState, useEffect } from "react";
import Form from "./Form.js";

function Modal(props) {
  const [popUp, setPopUp] = useState(null);
  // one state for leaderboard
  const [leaderboard, setLeaderboard] = useState([]);
  // one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false);

  const style = {
    general: {
      height: "100vh",
      width: "100vw",
      position: "absolute",
      background: "rgba(0, 0, 0, 0.8)",
      opacity: (popUp === true) ^ (popUp === false) ? 1 : 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.5s ease-in-out",
    },
    winner: {
      opacity: popUp ? 1 : 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    gameOver: {
      position: "relative",
      width: `${props.yCells * props.cellSize}px`,
      zIndex: 2,
      maxWidth: "90vw",
      top: popUp === null ? "40vh" : "0px",
      transition: "all 1s ease-in-out",
      opacity: 1,
    },
  };

  useEffect(() => {
    if (!props.winner) {
      setTimeout(() => {
        setPopUp(false);
      }, 750);
    } else if (props.winner) {
      setTimeout(() => {
        setPopUp(true);
      }, 750);
    } else {
      setPopUp(null);
    }
    console.log(popUp);
  }, []);

  return (
    <div style={style.general}>
      {popUp ? (
        <div></div>
      ) : (
        <img style={style.gameOver} src={props.pic} />
      )}
      {popUp && (
        <div style={style.winner}>
          <Form
            setToggleFetch={setToggleFetch}
            score={props.score}
            col={props.col}
            row={props.row}
            mines={props.mines}
            difficulty={props.difficulty}
            shut={setPopUp}/>
        </div>
      )}
      <div class="close" onClick={props.restart}>Back to Game</div>
    </div>
  );
}

export default Modal;
