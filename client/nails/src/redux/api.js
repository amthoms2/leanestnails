import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux";
import {addProductStart, addProduct, addProductFailure, updateCartStart, updateCartSuccess, updateCartFailure} from "./cartRedux";
import axios from 'axios'



export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8080/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    await axios.post('http://localhost:8080/api/auth/logout');
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};

const config = {
  headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU4N2MwMzNjMTEzZDc4NmZjNDg1YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk2NzU5NzUsImV4cCI6MTY0NDg1OTk3NX0.3XboNIQAKuqaJx1x3D22Evl-fWOdORcLKGFi6DYVS0k`}
}

export const createNewCart = async (dispatch, product, qty) => {
  dispatch(addProductStart());
  try{
    const res = await axios.post("http://localhost:8080/api/cart", {product: product, qty: qty }, config);
    dispatch(addProduct(res.data))
  } catch(err){
    dispatch(addProductFailure())
  }
}

export const updateUserCart = async (dispatch, product, qty) => {
  dispatch(updateCartStart());
  try{
    const res = await axios.put(`http://localhost:8080/api/cart/`, {product: product, qty: qty }, config);
    console.log('qtyyyy', qty)
    dispatch(updateCartSuccess(res.data))
  } catch(err){
    dispatch(updateCartFailure())
  }
}

// export const getCartId = async (userId) => {
//   try {
//     const res = await axios.get(
//       "http://localhost:8080/api/cart/find/" + userId, config
//     );
//     console.log('backend received something?', res.data)
//     return res.data
//   } catch (err) {
//     console.log('getCart something wrong', err)
//   }
// }

