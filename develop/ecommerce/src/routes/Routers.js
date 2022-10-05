import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import NewLogin from "../auth/pages/Login";
import NewRegister from "../auth/pages/Register";

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
      <Route path="/login" element={<NewLogin />} />
      <Route path="/register" element={<NewRegister />} />
    </Routes>
  );
};

export default Routers;
