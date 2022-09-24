import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import banner from '../../components/UI/Slider/banner.jsx';
import Home from '../../pages/Home.jsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <Home></Home>
      <h1>Layout productos</h1>
      <Footer />
    </div>
  );
};

export default Layout;
