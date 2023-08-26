import React from 'react';
import '../css/App.css';
import Deck from './Deck.js'

const App = () => (
  <div className="App">
      <div className="cards-wrapper">
        <Deck />
      </div>
  </div>
);

export default App;
