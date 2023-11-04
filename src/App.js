import React from 'react';
import PlayersList from "./src/PlayersList.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Football Players App</h1>
      <PlayersList />
    </div>
  );
}

export default App;