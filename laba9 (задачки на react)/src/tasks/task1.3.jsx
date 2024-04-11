import React, { useState } from 'react';

const NumberConverter = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [selectedBase, setSelectedBase] = useState('');
  const [inputBase, setInputBase] = useState('');
  const [result, setResult] = useState('');

  const convertNumber = () => {
    if (selectedBase === '2') {
      setResult(`${inputNumber} в 2-ичной системе = ${parseInt(inputNumber, inputBase).toString(2)}`);
    } else if (selectedBase === '10') {
      setResult(`${inputNumber} в 10-ичной системе = ${parseInt(inputNumber, inputBase).toString(10)}`);
    }
  };

  return (
    <div>
      <input type="text" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
      <label>из какого </label>
      <select value={inputBase} onChange={(e) => setInputBase(e.target.value)}>
        <option value="10">10-ичная</option>
        <option value="2">2-ичная</option>
      </select> <br/>
      <label>в какое</label>
      <select value={selectedBase} onChange={(e) => setSelectedBase(e.target.value)}>
        <option value="10">10-ичная</option>
        <option value="2">2-ичная</option>
      </select>
      <button onClick={convertNumber}>Преобразовать</button>
      <p>{result}</p>
    </div>
  );
};

export default NumberConverter;
