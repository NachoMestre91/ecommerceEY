import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routes from '../../routes/Routers';
import Carts from '../UI/cart/Carts.jsx';
import {useSelector} from 'react-redux';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';

const Layout = () => {
  const [productos, setProductos] = useState([]);

  const usersCollectionRef = collection(db, 'productos');

  // useEffect(() => {
  //   const getProductos = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);

  //     setProductos(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  //   };

  //   getProductos();
  // }, []);

  useEffect(() => {
    const getProductos = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setProductos(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };

    getProductos();
  }, []);

  /* ------ Construccion de Layout  ------ */

  const showCart = useSelector(state => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />
      <>
        <p style={{color: 'black'}}> Respuesta firebase</p>
        {productos.map(product => {
          console.log(product);
          return (
            <h1 key={product.id} style={{color: 'black'}}>
              titulo: {product.titulo}
            </h1>
          );
        })}
      </>
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
