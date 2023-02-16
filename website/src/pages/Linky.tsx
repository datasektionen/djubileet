import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../Linktree.css'
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import tiktok from '../img/tiktok.png';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Linky() {
  return (
    <div id="lankar" className="links">
      <h1>Sociala Medier</h1>
      <a href="https://www.facebook.com/dJubileet" target="_blank"><button className="button1"><span className="center"><img src={fb} className="icon"/><span className="some">Facebook</span></span></button></a>
      <a href="https://www.instagram.com/dJubileet" target="_blank"><button className="button1"><span><img src={insta} className="icon"/><span className="some">Instagram</span></span></button></a>
      <a href="https://www.tiktok.com/@djubileet" target="_blank"><button className="button1"><span><img src={tiktok} className="icon"/><span className="some">TikTok</span></span></button></a>
    </div>
  );

}

export default Linky;