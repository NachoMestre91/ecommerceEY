import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const buyerSlice = createSlice({
  name: 'buyer',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = buyerSlice.actions;

export default buyerSlice.reducer;
