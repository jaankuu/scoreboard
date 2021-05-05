// src/components/AddPlayer.js

import { useState } from "react";
import './AddPlayer.scss'


export default function AddPlayer(props) {

  // handleSubmit prevents a page from refreshing => so local data doesn't get lost

  const [name, setName] = useState(" ")

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!name){
      alert("please provide a name")
      return
    }

    props.addPlayer(name)
    setName("")
  }

    return (
      <div className="AddPlayer">
        <form onSubmit={handleSubmit}>
          Add name:
         <input 
         className = "AddPlayerBox"
            type="text" 
            value={name} 
            onChange={(event) => setName(event.target.value)}
          /> 
        <button>Add a player</button>
        </form>
      </div>
    );
  }