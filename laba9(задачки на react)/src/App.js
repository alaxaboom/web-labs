import React from 'react';
import CitySelectComponent from './tasks/task1.1';
import Calculator from './tasks/task1.2';
import NumberConverter from './tasks/task1.3';
import SecondsLivedCalculator from './tasks/task1.4';
import NumberFilter from './tasks/task1.5';
import RegistrationForm from './tasks/task2.1';
import ProfileEditForm from './tasks/task2.2';
const App = () => {
  return (
    <div className='flex-container'>
      <div className="flex-item"><CitySelectComponent /></div>
      <div className="flex-item"><Calculator/></div>
      <div className="flex-item"><NumberConverter/></div>
      <div className="flex-item"><SecondsLivedCalculator/></div>
      <div className="flex-item"><NumberFilter/></div>
      <div className="flex-item"><RegistrationForm/></div>
      <div className="flex-item"><ProfileEditForm/></div>
    </div>
  );
}

export default App;
