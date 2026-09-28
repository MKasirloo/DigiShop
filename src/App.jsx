import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/single-product" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
