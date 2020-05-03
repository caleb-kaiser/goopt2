import React from 'react';
import './Button.css';

function Button(props) {
  const finalAnswer = () => {
    props.submitAnswer(props.isML);
  }
  return (
    <div className="button" onClick={finalAnswer}>
      {props.title}
    </div>
  )
}

export default Button;
