import './App.css';

import { Navigate, Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { Login } from './pages/login';
import { Menu } from './pages/menu/Menu';
import React from 'react';
import { CardSell } from './pages/cardSell/CardSell';
import { CardBuy } from './pages/cardBuy/CardBuy';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to={'/login'} replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/menu" element={<Menu />} />
      <Route path="/sell" element={<CardSell />} />
      <Route path="/buy" element={<CardBuy />} />
      <Route path="/play" element={<Login />} />
    </Routes>
  );
}

export default App;
