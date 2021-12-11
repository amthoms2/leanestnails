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
      // console.log('cart',localStorage.getItem("persist:root"))
      const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
      console.log('hit', persistRoot)
      const updatedPersistRoot =
      {
        ...persistRoot,
        cart: {
          ...persistRoot.cart,
          products: action.payload
        }
      };
      console.log(JSON.stringify(updatedPersistRoot));
      localStorage.setItem("persist:root", JSON.stringify(updatedPersistRoot));
      // state.cart = action.payload;

      state.qty += 1;
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
      state.isFetching = false;

    },
    updateCartFailure: (state) => {

    },
  },
});

export const { addProductStart, addProduct, addProductFailure, updateCartStart, updateCartSuccess, updateCartFailure } = cartSlice.actions;
export default cartSlice.reducer;
