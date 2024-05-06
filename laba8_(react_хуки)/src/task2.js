import React, { useState, useEffect } from 'react';

const InfiniteTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>Таймер: {count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>▶</button>
    </div>
  );
};

export default InfiniteTimer;