import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import checkoutSlice from './slices/checkoutSlice';
import buyerSlice from './slices/buyerSlice';

const store = configureStore({
  reducer: {
    Cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    buyer: buyerSlice.reducer,
  },
});

export default store;
