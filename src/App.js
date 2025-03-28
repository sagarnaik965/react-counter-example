import React from 'react';
import logo from './advlogo.png';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Contact <code>Adv@cdac.in</code> for changes and reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
