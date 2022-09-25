import React, {useEffect} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

import Home from '../../pages/Home.jsx';
import db from '../../firebase/firebaseConfig';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
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
      <Home></Home>
      <p>FIREBASE TESTs</p>
      {/* <Slider /> */}
      <Footer />
    </div>
  );
};

export default Layout;
