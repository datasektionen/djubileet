import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './Logga.svg';
import './App.css';
import Temppage from './pages/Temppage';
import Linky from './pages/Linky';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temppage />}/>
        <Route path="/linktree" element={<Linky />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
