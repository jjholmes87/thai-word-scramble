// src/App.js
import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Game />
    </div>
  );
};

export default App;
