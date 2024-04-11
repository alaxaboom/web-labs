import React from 'react';
import FormComponent from "./tasks/task1";
function App() {
  return (
    <div className='flex-container'>
      <div className="flex-item"><FormComponent /></div>
      <div className="flex-item"></div>
    </div>
  );
}

export default App;
