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

