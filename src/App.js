import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MemeMaker from './components/MemeMaker';
import History from './components/History';

function App() {
  return (
    <div>
      <Nav />
        <div className='container'>
          <MemeMaker />
        </div>
    </div>
  );
}

export default App;
