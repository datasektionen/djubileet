import React from 'react';
import animatedLogo from '../img/AnimeradLoggaDelta.gif'
import '../App.css';
import CountdownTimer from '../CountdownTimer';
import Schema from '../Schema';
import Linky from './Linky';
import About from './About';

function Home() {
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
                </div>*/}
            <p className="loadscreen">dJubileet 2023</p>
        </header>

        <div className='img-wrap'>
            <img src={animatedLogo} alt={"dJubileet Logo"} width={500}/>
        </div>

        <p className="bday">Konglig Datasektionen 40 år</p>
        <div>
            <CountdownTimer targetDate={DATUM}/>
        </div>
        <div id="schema"><Schema/></div>
        <div id="about"><About/></div>
        <div id="linktree"><Linky/></div>
        <footer className="App-footer">
            <p>Kontakt: <a href="mailto:marskalk@djubileet.se" className="App-link">marskalk@djubileet.se</a></p>
            <p className="name">Skapad av: FIPL Consulting</p>
        </footer>
    </div>
  );
}

export default Home;

