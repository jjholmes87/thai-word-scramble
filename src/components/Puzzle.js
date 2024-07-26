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

  useEffect(() => {
    setScrambled(scramble(puzzle));
    setShowAnswer(false);
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
      alert('ลองอีกครั้ง!');
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
    </div>
  );
};

export default Puzzle;
