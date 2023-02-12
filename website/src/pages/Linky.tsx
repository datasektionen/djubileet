import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../Linktree.css'
import fb from '../img/fb.png';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Linky() {
  return (<div>
    <button className="button1"><img src={fb} className="icon"/> Facebook </button><br></br>
    <button className="button1">[icon] Instagram </button><br></br>
    <button className="button1">Länk till TikTok [icon]</button>
    </div>
  );

}

export default Linky;