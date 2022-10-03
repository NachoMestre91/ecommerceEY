import {createSlice} from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {cartIsVisible: false},

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
