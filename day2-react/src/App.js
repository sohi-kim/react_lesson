import React from 'react';
import './App.css'
import CalculateV2 from './component/CalculateV2';
import CalculateRef from './component/CalculateRef';
import CounterRef from './component/CounterRef';

function App() {
  return (
    <div className='App'>
        <CalculateV2/>
        <CalculateRef/>
        <hr/>
        <CounterRef/>
    </div>
  );
}

export default App;