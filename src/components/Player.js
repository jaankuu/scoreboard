// src/components/Player.js

export default function Player(props) {
    return (
      <li className="Player">
        <p> Name : {props.name}, score: {props.score} </p>
      </li>
    );
  }