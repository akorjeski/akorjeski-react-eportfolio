import React from 'react';
import dragonite from './dragonite.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dragonite} className="App-logo" alt="logo" />
        <p>
          Alex is building his own e-Portfolio. Stay tuned!
        </p>
      </header>
    </div>
  );
}

export default App;
