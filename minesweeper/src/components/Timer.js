import { useState, useEffect } from "react";

function Timer(props) {
  const { time, setTime, gameOver, chooseNewDifficulty, winner} = props;
  const [timeInterval, setTimeInterval] = useState("");

  useEffect(() => {
    setTimeInterval(setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000));
    return () => clearInterval(timeInterval);
  }, [chooseNewDifficulty]);
  
  useEffect(() => {
    if (!winner) {
      setTime(0);
    }
    clearInterval(timeInterval);
  }, [winner, gameOver, chooseNewDifficulty])

  return (
    <div>⏰ {time}</div>
  )
}

export default Timer;