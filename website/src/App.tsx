import React from 'react';
import logo from './img/Logga.svg';
import './App.css';
import CountdownTimer from './CountdownTimer';
import Schema from './Schema';
import Linky from './pages/Linky';
import About from './pages/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Bilder from './Bilder';

function App() {
  const DATUM = new Date("2023-09-24T23:00:00Z");
  const NOW_IN_MS = new Date().getTime();
  const coundowndate = DATUM;
  return (
    <div className="App">
      <header className="App-header">
          {/*<div className="topnav">
          <a href="/">Home</a>
          <a href="/linktree">Social media</a>
          <a href="/about">About</a>
        </div> */}
    <p className="loadscreen">dJubileet 2023</p>      
    </header>
      <img src={logo} className="App-logo" alt="logo"/>
        <p className="bday">Konglig Datasektionen 40 år</p>
     <div>
      <CountdownTimer targetDate={DATUM}/>
      </div>
      <div id="schema"><Schema/></div>
      <div id="about"><About/></div>
      <div id="linktree"><Linky/></div>
      <footer className="App-footer">
        <p>Contact: <a href="mailto:marskalk@djubileet.se" className="App-link">marskalk@djubileet.se</a></p>
        <p className="name">Created by: FIPL Consulting</p>
        </footer>
    </div>
  );
}

export default App;

