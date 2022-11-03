import { collection, doc, setDoc } from "firebase/firestore/lite";
import { db } from "../firebase/firebaseConfig";
import { createComprador } from "../store/Buyer/buyerSlice";
import { cartActions } from "../store/Slices/cartSlice";
import { updateProducts } from "./updateProducts";

export const createBuyer = () => {
  return async (dispatch, getState) => {
    const { email, displayName } = getState().auth;
    const { cartItems } = getState().cart;

    const date = new Date().toLocaleDateString();

    const newBuyer = {
      email: email,
      name: displayName,
      date: date,
      items: cartItems,
    };

    const newDoc = doc(collection(db, `buyer`));
    await setDoc(newDoc, newBuyer);

    newBuyer.id = newDoc.id;
    dispatch(createComprador(newBuyer));
    dispatch(cartActions.clearCart());
    dispatch(updateProducts());
  };
};
