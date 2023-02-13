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
  //Tidzonen är fel, måste åtgärdas innan den kan publicerass 
  const DATUM = new Date("2023-09-25");
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
        <p>dJubileet 2023</p>
      </header>

      <img src={logo} className="App-logo" alt="logo"/>
      {/* Inaktiverar timern pga tidzonproblem*/}
     <div className="countdown">
      <CountdownTimer targetDate={DATUM}/>
      </div>
      <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
        <Schema />
        <Linky/>
        <About/>
    </div>
  );
}

export default App;

