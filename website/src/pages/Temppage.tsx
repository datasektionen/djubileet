import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../Logga.svg';
import '../App.css';

function Temppage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="djubdot">
          dJubileet, loading...
        </p>
        Scroll down to play!!!
      </header>
      <iframe src="https://funhtml5games.com?embed=spaceinvaders" className="game" scrolling="no"></iframe>
    </div>
  );
}

export default Temppage;
