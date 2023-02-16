import React from 'react';
import logo from './img/Logga.svg';
import animatedLogo from './img/AnimeradLoggaDelta.gif'
import './App.css';
import CountdownTimer from './CountdownTimer';
import Schema from './Schema';
import Linky from './pages/Linky';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Bilder from './Bilder';
import BigCountdown from "./pages/BigCountdown";

function App() {
  const DATUM = new Date("2023-09-24T23:00:00Z");
  const NOW_IN_MS = new Date().getTime();
  const coundowndate = DATUM;


  return (
      <BrowserRouter>
        <Routes>
            <Route path={"*"} element={<Home/>} />
            <Route path="countdown" element={<BigCountdown/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

