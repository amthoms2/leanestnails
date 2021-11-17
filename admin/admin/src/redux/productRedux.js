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
      state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product;
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
