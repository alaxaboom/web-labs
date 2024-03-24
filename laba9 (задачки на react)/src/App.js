import './App.css';
import React, { useState } from 'react';
function Task1() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="rio">Рио-де-Жанейро</option>
        <option value="other">Другой город</option>
      </select>
      {selectedCity !== 'rio' && <p>Нет, это не Рио-де-Жанейро!</p>}
    </div>
  );
}
function Task2(){
  return <a>asdasdasda</a>
}
function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>  
      <Task1 />
      </div>
      <div style={{ flex: 1 }}>   
      <Task2 />
      </div>
      
    </div>
  );
}

export default App;

