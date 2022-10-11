import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice';
import cartUiSlice from './Slices/cartUiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});
