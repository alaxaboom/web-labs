import React, { useState } from 'react';

const CitySelectComponent = () => {
  const [selectedCity, setSelectedCity] = useState();

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <label htmlFor="citySelect">выберите город:</label>
      <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
        <option value="rio">рио</option>
        <option value="other" selected>другои город</option>
      </select>
      {selectedCity !== 'rio' ? <p>это не рио</p> : <p>это рио</p> }
    </div>
  );
};

export default CitySelectComponent;