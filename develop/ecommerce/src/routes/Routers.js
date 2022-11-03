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
import { useSelector } from "react-redux";

const RutaPrivada = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Routes>
      {cartItems.length > 0 ? (
        <Route path="/" element={<Cart />} />
      ) : (
        <Route path="/" element={<Navigate to="/home" />} />
      )}
    </Routes>
  );
};

const LoginSesion = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Routes>
      {status !== "authenticated" ? (
        <Route path="/" element={<NewLogin />} />
      ) : (
        <Route path="/" element={<Navigate to="/home" />} />
      )}
    </Routes>
  );
};

const Routers = () => {
  const { status } = useSelector((state) => state.auth);

  /* ------ Falta armar logica ruteo------ */

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalleproducto" element={<Products />} />
      <Route path="/detalleproducto/:id" element={<ProductDetail />} />

      {status === "authenticated" && (
        <Route path="/cart" element={<RutaPrivada />} />
      )}

      {status === "authenticated" ? (
        <Route path="/login" element={<RutaPrivada />} />
      ) : (
        <Route path="/cart" element={<Navigate to="/login" />} />
      )}

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/login" element={<LoginSesion />} />

      <Route path="/register" element={<NewRegister />} />
    </Routes>
  );
};

export default Routers;
