import Layout from '../src/components/Layout/Layout';
import {useState, useEffect} from 'react';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

import './App.css';

import {db} from './firebase/firebaseConfig';

function App() {
  // const [productos, setProductos] = useState([]);
  // const productosCollectionRef = collection(db, 'productos');

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await getDocs(productosCollectionRef);
  //     console.log(data);
  //     setProductos(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  //   };

  //   getProducts();
  // }, []);

  // return (
  //   <div className="">
  //     {productos.map(product => {
  //       console.log(productos);
  //       return (
  //         <div>
  //           <p style={{color: 'black'}}>producto: {product.title}</p>
  //           <p style={{color: 'black'}}>producto: </p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return <Layout />;
}

export default App;
