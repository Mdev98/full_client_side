import './App.css';

import Home from './pages/home/Home';
import ProductList from './pages/products/ProductList';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login'
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  

  return (
    
  
    <div className="app">
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="products/:cat" element={<ProductList/>} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
    
  )
}
