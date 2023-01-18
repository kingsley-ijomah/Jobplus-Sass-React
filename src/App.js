import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
}

export default App;
