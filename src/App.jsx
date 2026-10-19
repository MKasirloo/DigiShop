import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import PaymentSucceed from './pages/PaymentSucceed'
import Verification from './pages/Verification'
import Profile from './pages/Profile/Profile'
import Orders from './pages/Profile/Orders'
import Wishlist from './pages/Profile/Whislist'
import AccountInfo from './pages/Profile/AccountInfo'
import Notifications from './pages/Profile/Notifications'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-succeed" element={<PaymentSucceed />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/profile/dashboard" element={<Profile />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/wishlist" element={<Wishlist />} />
        <Route path="/profile/account" element={<AccountInfo />} />
        <Route path="/profile/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
