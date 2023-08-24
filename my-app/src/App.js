// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

// Import other components here

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects/>
      
      {/* Add other components here */}
    </div>
  );
};

export default App;
