import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth';
import cartSlice from './shopping-cart/cartSlice';
import cartUiSlice from './shopping-cart/cartUiSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
