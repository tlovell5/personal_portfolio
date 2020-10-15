import React from 'react';
import useWordGame from './hooks/wordGame';
import './index.css';

function App() {
  const {
    timeRemaining,
    isTimeRunning,
    handleChange,
    startClock,
    textBoxRef,
    wordCount,
    text
  } = useWordGame(5);
  return (
    <div class='game'>
      <br />
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h1>Time remaining: {timeRemaining}</h1>
      <button onClick={startClock} disabled={isTimeRunning}>
        {wordCount > 0 ? 'Play again' : 'Start'}
      </button>
      {wordCount > 0 && <h1>Word count: {wordCount}</h1>}
    </div>
  );
}

export default App;
