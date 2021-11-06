import './App.css';

import Home from './pages/home/Home';
import ProductList from './pages/products/ProductList';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login'
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import axios from "axios";

import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  {user ? axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}` : axios.defaults.headers.common['Authorization'] = `Bearer `};

  return (
    
  
    <div className="app">
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="products/:cat" element={<ProductList/>} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={user ? <Navigate replace to="/" /> : <Login />} />
        </Routes>
      </Router>
    </div>
    
  )
}
