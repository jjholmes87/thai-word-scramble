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
      <header>
        <h1>เกมคำปริศนา</h1>
        <p>คำแนะนำ: ลองแก้ปริศนาโดยการจัดเรียงตัวอักษรที่ถูกต้องให้เป็นคำที่สมบูรณ์ เมื่อคุณตอบถูกคุณจะได้รับคะแนนเพิ่ม และปริศนาใหม่จะปรากฏขึ้นทันที ถ้าตอบผิดคุณจะเห็นข้อความผิดพลาดและไปที่ปริศนาใหม่โดยอัตโนมัติ</p>
      </header>
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
