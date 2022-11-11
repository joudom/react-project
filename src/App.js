import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MemeMaker from './components/MemeMaker';
import Footer from './components/Footer';
import History from './components/History';

function App() {
  return (
    <div className='App'>
      <Nav />
        <div className='container'>
          <MemeMaker />
        </div>
      <Footer />
    </div>
  );
}

export default App;
