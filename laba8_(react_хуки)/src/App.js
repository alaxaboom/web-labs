import React from 'react';
import Timer from './task1';
import InfiniteTimer from './task2';
import PrimeNumbers from './task3';
import Svetofor from './task4';
import Revert from './task5';

const App = () => {
  return (
    <div className='flex-container'>
      <div  className='flex-item'><Timer/></div>
      <div className='flex-item'> <InfiniteTimer /></div>
      <div className='flex-item'><PrimeNumbers/></div>
      <div className='flex-item'><Svetofor/></div>
      <div className='flex-item'><Revert/></div>
    </div>
  );
}

export default App;
