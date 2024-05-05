import React, { useState, useEffect } from 'react';

const PrimeNumbers = () => {
  const [state, setState] = useState({
    count: 1,
    primes: [], 
  });

  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      let nextNumber = state.count + 1;
      while (!isPrime(nextNumber)) {
        nextNumber++;
      }
      setState((prevState) => ({
        count: nextNumber,
        primes: [...prevState.primes, nextNumber],
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [state.count, state.primes]);

  return (
    <div>
      <h2>Простые числа:</h2>
      <ul>
        {state.primes.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrimeNumbers;

