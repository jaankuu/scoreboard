// src/components/Scoreboard.js

import './Scoreboard.scss'
import { useState } from "react";
import AddPlayer from "./AddPlayer";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name)
}



export default function Scoreboard(props) {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState(""); 


  const players_sorted = [...players].sort(
    sort_by==="name" ? compare_name : compare_score
  )
  

 const change_sorting = (event) => {
  console.log("new sort order:", event.target.value);
  set_sort_by(event.target.value);
};


const addPlayer = (name) => {
  
  const newPlayer = {id: players.length + 1, name: name, score: 0}

  const newArray = [newPlayer, ...players]
  set_players(newArray)
}

const incrementScore = (id) => {
  console.log("player to update:", id)

  const updatedArray = players.map(player => {
    if(player.id === id){
      return {
        ...player,
        score: player.score +1
      }
    } else {
     return player 
    }})
    set_players(updatedArray)
}

const resetScore = () => {

  const updatedArray = players.map(player => {
    
      return {
        ...player,
        score: player.score = 0
      }
    })
    set_players(updatedArray)
}

const randomiseScore = () => {

  const updatedArray = players.map(player => {
      return {
        ...player,
        score: player.score = Math.floor(Math.random() * (100-0 +1)) + 0
      }
      })
    set_players(updatedArray)
}

const onClickReset = () => {
  resetScore(players.id)
}

const onClickRandomise = () => {
  randomiseScore(players.id)
}


  return (
    <div className="Scoreboard">
      <p> 
        Sort order: {""}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's scores:
        <button onClick={onClickReset}>Reset</button>
        <button onClick={onClickRandomise}>Randomise</button>
      </p>
      <ul>
         {players_sorted.map(player => (
           <Player 
              key={player.id}
              id={player.id}
              name={player.name} 
              score={player.score}
              incrementScore={incrementScore}
              resetScore={resetScore}
              randomiseScore={randomiseScore}
            />
         ))}
        </ul>
          <AddPlayer addPlayer={addPlayer} />
    </div>
  
  );
}
