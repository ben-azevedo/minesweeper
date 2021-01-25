import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import winnerGIF from "../images/classicRainbow.gif";

function Form(props) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a creature object
    // give this new object the correct properties
    const newPost = {
      name,
      time: props.score,
      difficulty: props.mines
    }
    // axios call to POST the new creature
    await axios.post(baseURL, { fields: newPost }, config);
    // toggling our GET request
    console.log("success!");
    props.setToggleFetch((prev) => !prev);
  };

  const formStyle = {
    style: {
      height: "30vh",
      width: "50vw",
      background: winnerGIF,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px"
    }
  }

  function goBack() {
    props.setPopUp(null);
  }

  const difficulty = props.difficulty[0].toUpperCase() + props.difficulty.slice(1);

  return (
    <form style={ formStyle.style } onSubmit={handleSubmit}>
      <h1 class="message" style={{ fontSize: "5vh" }}>You are a Minesweeper Champion! You had a time of {props.score}s on {difficulty}</h1>
      <label class="message" style={{fontSize: "3vh"}} htmlFor="name">Enter your name: </label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Load to the Leaderboard</button>
    </form>
  );
}

export default Form;