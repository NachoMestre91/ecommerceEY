import { collection, doc, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebaseConfig";

export const loadProductos = async () => {
  // const collectionRef = collection(db, "productos");
  // const docs = await getDocs(collectionRef);
  // const productos = [];
  // docs.forEach((doc) => {
  //   productos.push({ ...doc.data() });
  //   // console.log(productos);
  // });

  const collectionRef = collection(db, "newproducts");
  const docs = await getDocs(collectionRef);
  let productos;
  docs.forEach((doc) => {
    productos = Object.values(doc.data());
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
