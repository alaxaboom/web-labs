import React from 'react';
import FormComponent from "./tasks/task1";
import RegistrationForm from './tasks/task2';
function App() {
  return (
    <div className='flex-container'>
      <div className="flex-item"><FormComponent /></div>
      <div className="flex-item"><RegistrationForm/></div>
    </div>
  );
}

export default App;
