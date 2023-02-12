import React from 'react';
import logo from './Logga.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#about">About</a>
</div> 
<p className="header">dJubileet 2023</p>

      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="center">
        <table className="schema">
          <tr> 
            <th>Schema</th></tr>
            <tr>29/4 Halvårsfesten</tr>
            <tr>25/9 dJubileumsfirandet börjar</tr>
            <tr> 26/9 TBA</tr>
            <tr>30/9 Banquette</tr>
            <tr>4/10 XXL pub</tr>
            <tr>7/10 Slutfesten</tr>
        </table>
      </p>
    </div>

  );
}

export default App;
