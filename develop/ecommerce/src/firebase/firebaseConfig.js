// Import the functions you need from the SDKs you need

// import {initializeApp} from 'firebase/app';

export const firebaseConfig = {
  // apiKey: 'AIzaSyDiGPQqzS4oCN75ojPquD43K1Zh8LVJVto',
  // authDomain: 'ecommerce-ey.firebaseapp.com',
  // projectId: 'ecommerce-ey',
  // storageBucket: 'ecommerce-ey.appspot.com',
  // messagingSenderId: '711964670543',
  // appId: '1:711964670543:web:6734cce96540ba7d66883a',
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
