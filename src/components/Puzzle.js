// src/components/Puzzle.js
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Hint from './Hint';
import { scramble } from '../utils/scramble';

const Puzzle = ({ puzzle, onCorrect, onNextPuzzle }) => {
  const [input, setInput] = useState('');
  const [hint, setHint] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [startGame, setStartGame] = useState(true);
  const [resetGame, setResetGame] = useState(false);
  const [scrambled, setScrambled] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setScrambled(scramble(puzzle));
    setShowAnswer(false);
    setErrorMessage('');
  }, [puzzle]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === puzzle) {
      onCorrect();
      setInput('');
      onNextPuzzle();
      setResetGame(true);
      setStartGame(true);
    } else {
      setErrorMessage('คำตอบไม่ถูกต้อง! จะไปที่คำถามถัดไป.');
      setTimeout(() => {
        setErrorMessage('');
        onNextPuzzle();
      }, 2000); // Wait 2 seconds before moving to the next puzzle
    }
  };

  const revealHint = () => {
    setHint(`ตัวอักษรแรก: ${puzzle.charAt(0)}`);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="puzzle">
      <h2>{scrambled}</h2>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>ส่งคำตอบ</button>
      <button onClick={revealAnswer}>เฉลย</button>
      <Timer startGame={startGame} resetGame={resetGame} />
      <Hint hint={hint} revealHint={revealHint} />
      {showAnswer && <p>คำตอบที่ถูกต้องคือ: {puzzle}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Puzzle;
