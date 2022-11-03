import { createSlice } from "@reduxjs/toolkit";

export const buyerSlice = createSlice({
  name: "buyer",
  initialState: {
    buyer: {},
  },
  reducers: {
    createComprador: (state, action) => {
      state.buyer = action.payload;
    },
  },
});

export const { createComprador } = buyerSlice.actions;
