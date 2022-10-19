import {collection, getDocs} from 'firebase/firestore/lite';
import {db} from '../firebase/firebaseConfig';

export const loadProductos = async () => {
  const collectionRef = collection(db, 'productos');
  const docs = await getDocs(collectionRef);
  const productos = [];
  docs.forEach(doc => {
    productos.push({...doc.data()});
    // console.log(productos);
  });
  return productos;
};

// export const loadBuyer = async () => {
//   const collectionRef = collection(db, 'buyer');
//   const docs = await getDocs(collectionRef);
//   const productos = [];
//   docs.forEach(doc => {
//     productos.push({...doc.data()});
//     console.log(productos);
//   });
//   return productos;
// };
