// import {initializeApp} from 'firebase/app';
// import {firebaseConfig} from './firebaseConfig';
// import {collection, getDocs, getFirestore} from 'firebase/firestore';

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export const getProducts = async () => {
//   const productsCollection = collection(db, 'product');
//   const productsSnapshot = await getDocs(productsCollection);
//   const products = productsSnapshot.docs.map(doc => doc.data());
//   return products;
// };

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN + '.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET + '.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export default app;
