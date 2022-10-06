import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import { useSelector } from "react-redux";
import { AuthRoutes } from "../auth/routes/AuthRoutes";


const Routers = () => {
  const {status} = useSelector(state => state.auth);
  return (
    <Routes>
      {
        status!=='authenticated' ?
        <>
           <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </> : 
        <>
          <Route path="/detalleproducto" element={<Products />} />
          <Route path="/detalleproducto/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </>
      }
      {/* <Route path="/*" element={<Navigate to="/home" />} /> */}
    </Routes>
  );
};

export default Routers;
