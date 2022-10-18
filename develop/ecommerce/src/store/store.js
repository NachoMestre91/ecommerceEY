import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice';

import {productSlice} from './Product/productSlice';
import {cartUiSlice} from './Slices/cartUiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cartUi: cartUiSlice.reducer,
    product: productSlice.reducer,
  },
});
