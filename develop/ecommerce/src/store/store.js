import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { productSlice } from "./Product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer,
  },
});
