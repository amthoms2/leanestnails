import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { getProduct, getProductFailure, getProductSuccess, deleteProduct, deleteProductFailure, deleteProductSuccess, updateProduct, updateProductFailure, updateProductSuccess, addProductFailure, addProduct, addProductSuccess } from "./productRedux";
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

//DELETE PRODUCT
export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProduct());
  try {
    const res = await axios.delete(`http://localhost:8080/api/products/${id}`, config);
    await dispatch(deleteProductSuccess(id));
    console.log(res.data)
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

//UPDATE PRODUCT
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProduct());
  try {
    const res = await axios.update(`http://localhost:8080/api/products/${id}`, config);
    dispatch(updateProductSuccess({id, product}));
    console.log(res.data)
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

//ADD PRODUCT
export const addProducts = async (product, dispatch) => {
  dispatch(addProduct());
  try {
    const res = await axios.post(`http://localhost:8080/api/products/`, product, config);
    dispatch(addProductSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(addProductFailure());
  }
};
