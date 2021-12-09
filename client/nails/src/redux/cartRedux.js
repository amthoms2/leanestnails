import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addProductStart: (state) => {
      state.isFetching = true;
    },
    addProduct: (state, action) => {
      state.qty += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qty;
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addProductStart, addProduct, addProductFailure } = cartSlice.actions;
export default cartSlice.reducer;
