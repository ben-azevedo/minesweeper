import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Form from "./Form.js";

function Modal(props) {
  const [popUp, setPopUp] = useState(null);
  // one state for leaderboard
  const [leaderboard, setLeaderboard] = useState([]);
  // one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false);

  const modalStyle = {
    generalStyle: {
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
    winnerStyle: {
      background: "rgba(0, 0, 0, 0.8)",
      opacity: popUp ? 1 : 0,
    },
    gameOverStyle: {
      position: "relative",
      width: `${props.yCells * props.cellSize}px`,
      zIndex: 2,
      // backgroundRepeat: "no-repeat",
      // margin: "0 50px",
      // paddingTop: "20px",
      maxWidth: "90vw",
      top: popUp === null ? "40vh" : "0px",
      transition: "all 1s ease-in-out",
      opacity: 1,
    },
    // tryAgainStyle: {
    //   margin: "25px",
    //   height: "40px",
    //   width: "160px",
    //   fontSize: "25px",
    //   background: "red",
    //   color: "white",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
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
    <div style={modalStyle.generalStyle}>
      {popUp ? (
        <div></div>
      ) : (
        <img style={modalStyle.gameOverStyle} src={props.pic} />
      )}
      {popUp && (
        <div>
          <Form
            setToggleFetch={setToggleFetch}
            score={props.score}
            col={props.col}
            row={props.row}
            mines={props.mines}/>
        </div>
      )}
    </div>
  );
}

export default Modal;
