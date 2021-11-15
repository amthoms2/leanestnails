import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { getProduct, getProductFailure, getProductSuccess } from "./productRedux";
import axios from 'axios';

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

let config = {
  headers:  { token: `Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}` }
}


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8080/api/auth/login', user, config);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//get products from server, dispatch to productList
export const getProducts = async (dispatch) => {
  dispatch(getProduct());
  try {
    const res = await axios.get('http://localhost:8080/api/products', config);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

