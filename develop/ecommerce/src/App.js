import Layout from "../src/components/Layout/Layout";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import "./App.css";

import { db, FirebaseAuth } from "./firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  // const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName } = user;
      dispatch(login({ uid, email, displayName }));
    });
  }, []);

  return <Layout />;
};

export default App;

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
