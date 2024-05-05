import React from 'react';
import PostAndUserInfo from "./tasks/task1";
import RegistrationForm from './tasks/task2/task2';
function App() {
  return (
    <div className='flex-container'>
      <div className="flex-item"><PostAndUserInfo /></div>
      <div className="flex-item"><RegistrationForm/></div>
    </div>
  );
}

export default App;
