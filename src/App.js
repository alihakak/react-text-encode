import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Transform from './components/TextEncodeModule'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Simple Encoder
        </p>
      </header>
      <Transform></Transform>
    </div>
  );
}

export default App;
