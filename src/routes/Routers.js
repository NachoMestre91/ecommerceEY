import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Productos from '../pages/Productos';
// import FoodDetails from '../pages/FoodDetails';
import DetalleProducto from '../pages/DetalleProducto';

import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routers = () => {
  /* ------ Ruteo ( falta armar logica con el login ) ------ */

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalleproducto" element={<Productos />} />
      <Route path="/detalleproducto/:id" element={<DetalleProducto />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
