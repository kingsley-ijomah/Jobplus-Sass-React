import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApplicationPage from './pages/ApplicationPage';
import ApplyPage from './pages/ApplyPage';
import ListingsPage from './pages/ListingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/applications" element={<ApplicationPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/listings" element={<ListingsPage />} />
    </Routes>
  );
}

export default App;
