const { createSlice } = require("@reduxjs/toolkit");

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //RETRIEVE ALL DATA (get method)
    getProduct: (state) => {
      state.isFetching = true;
      state.error = false
    },
    //update product array
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const { getProduct, getProductSuccess, getProductFailure } = productSlice.actions;
export default productSlice.reducer;
