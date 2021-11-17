import { createSlice, current } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getTransaction: (state) => {
      state.isFetching = true;
      state.error = false
    },
    //update product array
    getTransactionSuccess: (state, action) => {
      state.isFetching = false;
      console.log(current(state))
      state.orders = action.payload
    },
    getTransactionFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getTransaction, getTransactionSuccess, getTransactionFailure } = transactionsSlice.actions;
export default transactionsSlice.reducer;
