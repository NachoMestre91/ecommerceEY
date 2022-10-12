import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN_FIREBASE,
//   projectId: process.env.REACT_APP_PROJECT_ID_FIREBASE,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FIREBASE,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_KEY_FIREBASE,
//   appId: process.env.REACT_APP_APP_ID_FIREBASE,
// };
const firebaseConfig = {
  apiKey: "AIzaSyArB1bJ-2kH1uEXXbgqvNUNP8DQhg2_k20",
  authDomain: "react-cursos-e9700.firebaseapp.com",
  projectId: "react-cursos-e9700",
  storageBucket: "react-cursos-e9700.appspot.com",
  messagingSenderId: "555196376138",
  appId: "1:555196376138:web:fbffb887398b938d4a32b3",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const db = getFirestore(FirebaseApp);
