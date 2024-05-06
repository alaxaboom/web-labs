import React, { useState, useEffect } from 'react';

const SecondsLivedCalculator = () => {
  const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' });
  const [secondsLived, setSecondsLived] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBirthDate({ ...birthDate, [name]: value });
  };

  useEffect(() => {
    const calculateSecondsLived = () => {
      const { day, month, year } = birthDate;
      if (day && month && year) {
        const birthTimestamp = new Date(`${year}-${month}-${day}T00:00:00`).getTime() / 1000;
        const currentTimestamp = Math.floor(new Date().getTime() / 1000);
        const secondsLived = currentTimestamp - birthTimestamp;
        setSecondsLived(secondsLived);
      }
    };

    const interval = setInterval(calculateSecondsLived, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <div>
        <input type="number" name="day" placeholder="Day" value={birthDate.day} onChange={handleInputChange} />
        <input type="number" name="month" placeholder="Month" value={birthDate.month} onChange={handleInputChange} />
        <input type="number" name="year" placeholder="Year" value={birthDate.year} onChange={handleInputChange} />
      </div>
      <div>
        <p>прожито: {secondsLived} seconds.</p>
      </div>
    </div>
  );
};

export default SecondsLivedCalculator;
