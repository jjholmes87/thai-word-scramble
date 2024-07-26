// src/components/Hint.js
import React from 'react';

const Hint = ({ hint, revealHint }) => {
  return (
    <div className="hint">
      <button onClick={revealHint}>ขอคำใบ้</button>
      {hint && <p>{hint}</p>}
    </div>
  );
};

export default Hint;
