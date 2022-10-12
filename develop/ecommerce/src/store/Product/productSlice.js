import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isGetting: false,
    products: [],
    active: null,
  },
  reducers: {
    setProducto: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducto } = productSlice.actions;
