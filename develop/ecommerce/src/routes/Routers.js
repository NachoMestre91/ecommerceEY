import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const Routers = () => {
  /* ------ Ruteo ( falta armar logica con el login ) ------ */

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalleproducto" element={<Products />} />
      <Route path="/detalleproducto/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
