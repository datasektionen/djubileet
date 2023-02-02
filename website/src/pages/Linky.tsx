import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Linky() {
  return (
    <div className="App">
      <header className="App-header2">Linktree</header>
      <div className='cent'>
        <button className="examplebutton">Länk till faceobok</button>
        <button className="examplebutton">Länk till insta</button>
        <button className="examplebutton">Länk till tiktok</button>
        <button className="examplebutton">Länk till youtube</button>
      </div>
      <footer className="App-footer"/>
    </div>
  );
}

export default Linky;
