import React from 'react';
import './Flash.css';



function Flash(props) {
  return (
    <div className="flash-message">
    <h1 className="emoji">{props.result === 'correct' ? '✔️' : '❌'}</h1>
    </div>
  )
}

export default Flash;
