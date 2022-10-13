import Layout from "../src/components/Layout/Layout";
import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { startLoadingNotes } from "./store/Product/thunks";
import { FirebaseAuth } from "./firebase/firebaseConfig";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingNotes());
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName } = user;
      dispatch(login({ uid, email, displayName }));
    });
  });

  return <Layout />;
};

export default App;
