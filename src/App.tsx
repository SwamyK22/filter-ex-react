import React from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductOverView from './pages/ProductOverView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<ProductOverView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
