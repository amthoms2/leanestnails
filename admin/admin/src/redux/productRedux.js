const { createSlice, current } = require("@reduxjs/toolkit");

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
    //DELETE PRODUCTS
    deleteProduct: (state) => {
      state.isFetching = true;
      state.error = false
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      const updatedProducts = current(state.products).filter(item => item._id !== action.payload);
      state.products = updatedProducts
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

     //UPDATE PRODUCTS
     updateProduct: (state) => {
      state.isFetching = true;
      state.error = false
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      // console.log('select',current(state.products)[current(state.products).findIndex((item) => item._id === action.payload._id)])
      const foundIdx = current(state.products).findIndex((item) => item._id === action.payload._id);
      console.log('idx', foundIdx);

      // current(state.products)[foundIdx] = action.payload;
      state.products[foundIdx] = action.payload;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD NEW PRODUCT
    addProduct: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const { getProduct, getProductSuccess, getProductFailure, deleteProduct, deleteProductFailure, deleteProductSuccess, updateProduct, updateProductFailure, updateProductSuccess, addProductFailure, addProduct, addProductSuccess } = productSlice.actions;
export default productSlice.reducer;
