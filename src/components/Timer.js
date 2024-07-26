// src/components/Timer.js
import React, { useEffect, useState } from 'react';

const Timer = ({ startGame, resetGame }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (startGame) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    if (resetGame) {
      setTime(0);
    }
    return () => clearInterval(timer);
  }, [startGame, resetGame]);

  return <div className="timer">เวลา: {time} วินาที</div>;
};

export default Timer;
