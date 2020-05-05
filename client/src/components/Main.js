import React, { useState, useEffect } from 'react';
import Button from './Button.js';
import Flash from './Flash.js';
import About from './About.js';
import './Main.css';

// Call API for sentences
const getSentences = async () => {
  let response = await fetch('/api/pull');
  let data = await response.json();
  for (let x = data.length - 1; x > 0; x--) {
    let y = Math.floor(Math.random() * (x - 1));
    let temp = data[x];
    data[x] = data[y];
    data[y] = temp;
  }
  return data;
}

function Main() {
  // State hooks
  const [sentences, setSentences] = useState([
    { text: 'Loading sentences. Please wait.', ml: false }
  ]);
  const [ended, setEnded] = useState(false);
  const [correct, setCorrect] = useState();
  const [rounds, setRounds] = useState(0);
  const [flash, setFlash] = useState(null);
  const [showAbout, setAbout] = useState(false);

  // Hook for refreshing game
  useEffect(() => {
    getSentences().then((sentences) => {
      setSentences(sentences);
      setEnded(false);
      setCorrect();
    });
  }, [ended]);

  // Hook for moving through rounds
  useEffect(() => {
    if (rounds > 0) {

      if (correct) {
        setFlash('correct');
      } else {
        setFlash('incorrect');
      }

      setTimeout(() => {
        if (sentences.length > 1) {
          let newSentences = [...sentences];
          newSentences.pop()
          setSentences(newSentences);
        } else {
          setEnded(true);
        }
        setFlash(null);
      }, 1500)
    }
  }, [rounds]);

  // Hook for showing About
  useEffect(() => {
    if (rounds == 3) {
      setAbout(true);
    }
  }, [rounds]);

  // Function for submitting answers
  const submitAnswer = (answer) => {
    if (answer === sentences[sentences.length - 1].ml) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setRounds(rounds + 1);
  }

  return (
    <div className="content">
      {flash && <Flash result={flash} />}
      <h2>{sentences[sentences.length - 1].text}</h2>
      <div className="button-row">
        <Button submitAnswer={submitAnswer} isML={false} title="Goop Published This"  />
        <Button submitAnswer={submitAnswer} isML={true} title="A Robot Wrote This" />
      </div>
      {showAbout && <About />}
    </div>
  )
}

export default Main;
