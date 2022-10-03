import React, {useEffect, useState} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routers from '../../routes/Routers';
import Cart from '../../pages/Cart';
import Carts from '../../components/UI/Cart/Carts.jsx';
import ProductCard from '../../components/UI/ProductCard/ProductCard.jsx';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig.js';
// import {collection, getDocs, getFirestore} from 'firebase/firestore';

const Layout = () => {
  const [Users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'usuarios');

  useEffect(() => {
    const getUsuarios = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };

    getUsuarios();
  }, []);

  // const [productos, setProductos] = useState([]);
  // const usersCollectionRef = collection(db, 'productos');

  // useEffect(() => {
  //   const getProductos = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);
  //     setProductos(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  //   };

  //   getProductos();
  // }, []);

  return (
    <div>
      <Header />
      {Users.map(user => {
        return (
          <div>
            {' '}
            <p>ID: {user.id}</p>
            <p>usuario: {user.email}</p>
            <p>password: {user.password}</p>
          </div>
        );
      })}

      {/* {productos.map(products => {
        return (
          <div>
            {' '}
            <p>ID: {products.id}</p>
            <p>titulo: {products.title}</p>
            <p>imagen: {products.image}</p>
            <p>descripcion larga: {products.largeDescription}</p>
            <p>Precio: {products.price}</p>
            <p>Descripcion corta: {products.shortDescription}</p>
            <p>stock: {products.stock}</p>
          </div>
        );
      })} */}

      <div>
        <Routers />
      </div>

      <Cart />
      <Products />
      {/* <Carts /> */}
      <Footer />
    </div>
  );
};

export default Layout;
