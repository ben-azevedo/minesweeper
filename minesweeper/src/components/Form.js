import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

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
      height: "300px",
      width: "400px",
      background: "white",
    }
  }

  return (
    <form style={ formStyle.style }onSubmit={handleSubmit}>
      <h1>You are a Minesweeper Champion! You had a time of {props.score}</h1>
      <label htmlFor="name">Enter your name: </label>
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