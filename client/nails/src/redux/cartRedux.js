import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  products: [],
  qty: 0,
  total: 0
};
const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    clearCart: () => {
      return defaultState
    }
    ,
    addProductStart: (state) => {
      state.isFetching = true;
    },
    addProduct: (state, action) => {
      // console.log('cart',localStorage.getItem("persist:root"))
      const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
      const updatedPersistRoot = {
        ...persistRoot,
        cart: {
          ...persistRoot.cart,
          products: action.payload,
        },
      };
      localStorage.setItem("persist:root", JSON.stringify(updatedPersistRoot));
      // state.cart = action.payload;

      state.qty += action.payload.qty;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qty;
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateCartStart: (state) => {
      state.isFetching = true;
    },
    updateCartSuccess: (state, action) => {
      const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
      const updatedPersistRoot = {
        ...persistRoot,
        cart: {
          ...persistRoot.cart,
          products: action.payload,
        },
      };
      // console.log(JSON.stringify(updatedPersistRoot));
      localStorage.setItem("persist:root", JSON.stringify(updatedPersistRoot));
      // state.cart = action.payload;

      state.qty += action.payload.qty;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qty;
    },
    updateCartFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  addProductStart,
  addProduct,
  addProductFailure,
  updateCartStart,
  updateCartSuccess,
  updateCartFailure,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
