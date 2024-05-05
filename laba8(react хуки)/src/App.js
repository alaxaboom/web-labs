import React from 'react';
import Timer from './task1';
import InfiniteTimer from './task2';
import PrimeNumbers from './task3';
import Svetofor from './task4';
import Revert from './task5';

const App = () => {
  return (
    <div className='flex-container'>
      <Timer className='flex-item'/>
      <div className='divider'></div>
      <InfiniteTimer className='flex-item'/>
      <div className='divider'></div>
      <PrimeNumbers className='flex-item'/>
      <div className='divider'></div>
      <Svetofor className='flex-item'/>
      <div className='divider'></div>
      <Revert s="abcdefg" className='flex-item'/>
    </div>
  );
}

export default App;
