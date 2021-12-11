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
  headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU4N2MwMzNjMTEzZDc4NmZjNDg1YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzkxNzczNTMsImV4cCI6MTY0NDM2MTM1M30.1fNu_HNcewPGLmQivH25D4npGuGhuKVCXd3dKdTlGPs`}
}

export const createNewCart = async (dispatch, product) => {
  dispatch(addProductStart());
  try{
    const res = await axios.post("http://localhost:8080/api/cart", product, config);
    dispatch(addProduct(res.data))
  } catch(err){
    dispatch(addProductFailure())
  }
}

export const updateUserCart = async (dispatch, id, product, qty) => {
  dispatch(updateCartStart());
  try{
    const res = await axios.put(`http://localhost:8080/api/cart/`, product, config);
    dispatch(updateCartSuccess(res.data))
  } catch(err){
    dispatch(updateCartFailure())
  }
}


