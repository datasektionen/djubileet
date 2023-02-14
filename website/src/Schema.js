import React from 'react';
import './App.css';

const Schema = () => {
    return (
      <div className="App-schedule">
        <h1>Event</h1>
          <table className="center">
              <tr className="row"><u>29/4</u><br></br>Halvårsfesten</tr>
              <tr className="row"><u>25/9</u> – <u>29/9</u><br></br>TBA</tr>
              <tr className="row"><a href="https://dsekt.se/djub-banquette-web" target="_blank"><u>30/9</u><br></br>Banquette</a></tr>
              <tr className="row"><u>2/10</u> – <u>3/10</u> <br></br>TBA</tr>
              <tr className="row"><u>4/10</u> <br></br>XXL-pub feat. DKM</tr>
              <tr className="row"><u>5/10</u> – <u>6/10</u> <br></br>TBA</tr>
              <tr className="row"><a href="https://dsekt.se/djub-slutfest-web" target="_blank"><u>7/10</u><br></br>Slutfesten</a></tr>
          </table></div>
    );
  };
    
  export default Schema;