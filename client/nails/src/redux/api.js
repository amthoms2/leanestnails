import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux";
import {addProductStart, addProduct, addProductFailure} from "./cartRedux";
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
  console.log('hit')
  dispatch(logoutStart());
  try {
    console.log('trying')
    await axios.post('http://localhost:8080/api/auth/logout');
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};

const config = {
  headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU4N2MwMzNjMTEzZDc4NmZjNDg1YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzg5ODk0MjYsImV4cCI6MTY0NDE3MzQyNn0.yNKiGPuG_Lur7Dmi7xQzEYM5Qy3RFkAAKkYNKqcyeGw`}
}

export const createNewCart = async (dispatch, product, qty, userId) => {
  dispatch(addProductStart());
  try{
    const res = await axios.post("http://localhost:8080/api/carts", product, config);
    dispatch(addProduct(res.data))
  } catch(err){
    dispatch(addProductFailure)
  }
}


