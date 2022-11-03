import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { db } from "../firebase/firebaseConfig";

const removeDuplicates = (inArray) => {
  let arr = inArray.concat();
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i]["id"] === arr[j]["id"]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

const id = "daWJeTJ7UJ0pmrlEMJNq";
export const updateProducts = () => {
  return async (dispatch, getState) => {
    const { cartItems } = getState().cart;
    const { products } = getState().product;

    const newStock = cartItems.map((item) => ({
      ...item,
      stock: item.stock - item.quantity,
    }));
    const deleteArray = newStock.map((item) => {
      delete item.quantity;
      delete item.totalPrice;
      return {
        ...item,
      };
    });
    const newProducts = [...deleteArray, ...products];
    const update = removeDuplicates(newProducts);
    console.log(update);
    const object = Object.assign({}, update);
    // const collectionRef = collection(db, "newproducts");
    // const docs = await getDocs(collectionRef);
    // console.log(docs._docs[0].id);
    const newDoc = doc(db, `newproducts/${id}`);
    await setDoc(newDoc, object, { merge: true });
  };
};
