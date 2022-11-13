import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Lab from './components/Lab';
import Log from './components/Log';
import Footer from './components/Footer';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <Nav/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/lab"    element={<Lab/>} />
            <Route path="/log"    element={<Log/>} />
          </Routes>
        <Footer/>
		  </Router>
    </div>
  );
}

export default App;
