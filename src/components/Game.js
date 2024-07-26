// src/components/Game.js
import React, { useState } from 'react';
import { puzzles } from '../data/puzzles';
import Puzzle from './Puzzle';

const Game = () => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleCorrect = () => {
    setScore(score + 1);
  };

  const handleNextPuzzle = () => {
    setCurrentPuzzleIndex(currentPuzzleIndex + 1);
  };

  return (
    <div className="game">
      <h2>คะแนน: {score}</h2>
      {currentPuzzleIndex < puzzles.length ? (
        <Puzzle 
          puzzle={puzzles[currentPuzzleIndex]} 
          onCorrect={handleCorrect} 
          onNextPuzzle={handleNextPuzzle} 
        />
      ) : (
        <h2>ยินดีด้วย! คุณทำสำเร็จแล้วทุกคำ!</h2>
      )}
    </div>
  );
};

export default Game;
