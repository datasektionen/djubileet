import React from 'react';
import './App.css';

const Schema = () => {
    return (
      <div className="App-schedule">
        <h1>Event</h1>
          <table className="center">
              <tr className="row">29/4 <br></br>Halvårsfesten</tr>
              <tr className="row">25/9 – 29/9<br></br>TBA</tr>
              <tr className="row"><a href="https://dsekt.se/banquette">30/9 <br></br>Banquette</a></tr>
              <tr className="row">2/10 – 3/10 <br></br>TBA</tr>
              <tr className="row">4/10 <br></br><a>XXL-pub feat. DKM</a></tr>
              <tr className="row">5/10 – 6/10 <br></br>TBA</tr>
              <tr className="row"><a href="https://dsekt.se/slutfest">7/10 <br></br>Slutfesten</a></tr>
          </table></div>
    );
  };
    
  export default Schema;