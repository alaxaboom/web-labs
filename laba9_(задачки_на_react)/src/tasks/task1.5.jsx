import React, { useState } from 'react';

const NumberFilter = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [numbers, setNumbers] = useState([1, 13, 6, 52, 4, 14]);
  const [filter, setFilter] = useState('all');

  const handleAddNumber = () => {
    if (inputNumber !== '') {
      setNumbers([...numbers, parseInt(inputNumber)]);
      setInputNumber('');
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNumbers = numbers.filter((number) => {
    if (filter === 'even') {
      return number % 2 === 0;
    } else if (filter === 'odd') {
      return number % 2 !== 0;
    } else {
      return true;
    }
  });

  return (
    <div>
      <div>
        <input type="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
        <button onClick={handleAddNumber}>+</button>
      </div>
      <div>
        <label>
          <input type="radio" value="all" checked={filter === 'all'} onChange={handleFilterChange} />
          Все
        </label>
        <label>
          <input type="radio" value="even" checked={filter === 'even'} onChange={handleFilterChange} />
          Четные
        </label>
        <label>
          <input type="radio" value="odd" checked={filter === 'odd'} onChange={handleFilterChange} />
          Нечетные
        </label>
      </div>
      <div>
        <p>Список чисел: {filteredNumbers.join(', ')}</p>
      </div>
    </div>
  );
};

export default NumberFilter;
