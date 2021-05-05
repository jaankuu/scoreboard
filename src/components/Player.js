// src/components/Player.js

import './Player.scss'

export default function Player(props) {

  const onClickIncrement = () => {
    props.incrementScore(props.id)
  }


    return (
      <li className="Player">
        <div
          className="percentage_coloring"
          style={{ width: props.score + "%" }}
        />
       <p>
        {props.name} /  score: {props.score} 
        <button onClick={onClickIncrement}>Add</button>
        </p>
     </li>
    );
  }