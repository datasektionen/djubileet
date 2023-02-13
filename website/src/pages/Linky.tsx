import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../Linktree.css'
import fb from '../img/fb.png';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Linky() {
  return (
    <div>
      <a href="https://www.facebook.com/dJubileet" target="_blank"><button className="button1">Facebook</button></a><br></br>
      <a href="https://www.instagram.com/dJubileet" target="_blank"><button className="button1">Instagram </button></a><br></br>
      <a href="https://www.tiktok.com/@djubileet" target="_blank"><button className="button1">TikTok</button></a>
    </div>
  );

}

export default Linky;