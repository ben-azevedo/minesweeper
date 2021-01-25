import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import leaderPic from "../images/leaderboardTitle.png";
import backToGamePic from "../images/backButton.png";
import { baseURL, config } from "../services";
import styled, { css, keyframes } from "styled-components";
//import "./Leaderboard.css";

function Leaderboard(props) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const resp = await axios.get(baseURL, config);
      setEntries(resp.data.records);
    };
    apiCall();
  }, []);

  let leaders = [];
  entries.forEach((entry) => {
    let newEntry = {
      name: entry.fields.name,
      time: entry.fields.time,
      difficulty: entry.fields.difficulty,
      score: score(entry.fields.time, entry.fields.difficulty),
    };
    leaders.push(newEntry);
  });

  function score(time, difficulty) {
    return Math.ceil(difficulty * (1000 - time));
  }

  let finalTen = mergeSort(leaders.slice());

  function mergeSort(arr) {
    return sort(arr);
  }

  function merge(arr1, arr2) {
    let results = [];
    while (arr1.length !== 0 && arr2.length !== 0) {
      if (arr1[0].score > arr2[0].score) {
        results.push(arr1[0]);
        arr1.shift();
      } else {
        results.push(arr2[0]);
        arr2.shift();
      }
    }
    if (arr1.length === 0) {
      results = [...results, ...arr2];
    } else {
      results = [...results, ...arr1];
    }
    return results;
  }

  function sort(arr) {
    // base case
    if (arr.length <= 1) {
      return arr;
    }
    let m = Math.floor(arr.length / 2);
    // left recursion
    let l = sort(arr.slice(0, m));
    // right recursion
    let r = sort(arr.slice(m));
    // put em back together
    return merge(l, r);
  }

  if (leaders.length >= 10) {
    finalTen = finalTen.slice(0, 10);
  }

  let vw = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let vh = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  let sizing = vh > vw ? "5vh" : "5vw";
  let label = vh > vw ? "6vh" : "6vw";

  const style = {
    leader: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      fontSize: sizing,
    },
    button: {
      color: "white",
    },
    title: {
      width: "70vw",
      padding: "4vh",
    },
    backToGame: {
      marginTop: "5vh",
      width: "35vw",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  function suffix(num) {
    if (num % 10 === 1) {
      return "st";
    } else if (num % 10 === 2) {
      return "nd";
    } else if (num % 10 === 3) {
      return "rd";
    } else {
      return "th";
    }
  }

  return (
    <div style={style.main}>
      <Link to="/">
        <img style={style.title} src={leaderPic} />
      </Link>
      <div style={style.leader}>
        <div
          class="glowTitles" 
          style={{
            display: "flex",
            flexDirection: "row",
            fontStyle: "bold",
            fontSize: label,
          }}
        >
          <div style={{ width: "15vw" }}>RANK</div>
          <div style={{ width: "50vw" }}>NAME</div>
          <div style={{ width: "15vw" }}>SCORE</div>
        </div>
        {finalTen.map((item, key) => (
          <div
            class={`glow${key + 1}`}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "15vw" }}>
              {key + 1}
              {suffix(key + 1)}
            </div>
            <div style={{ width: "50vw" }}>{item.name}</div>
            <div style={{ width: "15vw" }}>{item.score}</div>
          </div>
        ))}
      </div>
      <Link to="/minesweeper_game">
        <img style={style.backToGame} src={backToGamePic} />
      </Link>
    </div>
  );
}

export default Leaderboard;
