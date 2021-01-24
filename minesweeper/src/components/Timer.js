import { useState, useEffect } from "react";

function Timer(props) {
  const { time, setTime, gameOver, chooseNewDifficulty} = props;

  useEffect(() => {
    if (!gameOver) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }, [time, gameOver, chooseNewDifficulty]);
  
  return (
    <div>⏰ {time}</div>
  )
}

export default Timer;