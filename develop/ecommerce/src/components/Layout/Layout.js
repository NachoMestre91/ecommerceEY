import React, {useEffect, useState} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routers from '../../routes/Routers';
import Cart from '../../pages/Cart';
import Carts from '../../components/UI/Cart/Carts.jsx';
import ProductCard from '../../components/UI/ProductCard/ProductCard.jsx';
import Products from '../../pages/Products';
import Home from '../../pages/Home';

// import db from '../../firebase/firebaseConfig';
// import {collection, getDocs, getFirestore} from 'firebase/firestore';
// import Slider from '../UI/Slider/Slider';

const Layout = () => {
  // useEffect(() => {
  //   const obtenerDatos = async () => {
  //     const data = await getDocs(collection(db, 'productos'));
  //     console.log(data);
  //   };
  //   obtenerDatos();
  // }, []);

  return (
    <div>
      <Header />

      <div>
        <Routers />
      </div>
      <Home />
      <Cart />
      <Products />
      {/* <Carts /> */}
      <Footer />
    </div>
  );
};

export default Layout;
