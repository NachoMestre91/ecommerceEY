import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice';

import {productSlice} from './Product/productSlice';
import cartSlice from './Slices/cartSlice';
import {cartUiSlice} from './Slices/cartUiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cartUi: cartUiSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
