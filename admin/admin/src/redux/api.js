import { loginFailure, loginStart, loginSuccess, getUser, getUserSuccess, getUserFailure } from "./userRedux";
import { getProduct, getProductFailure, getProductSuccess, deleteProduct, deleteProductFailure, deleteProductSuccess, updateProduct, updateProductFailure, updateProductSuccess, addProductFailure, addProduct, addProductSuccess, } from "./productRedux";
import{ getTransaction, getTransactionSuccess, getTransactionFailure } from "./transactionsRedux";
import config from "../config";
import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8080/api/auth/login', user, config);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//get users from db, dispatch to UserList
export const getUsers = async (dispatch) => {
  dispatch(getUser());
  try {
    const res = await axios.get('http://localhost:8080/api/users', config);
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

//get transactions from db, dispatch to Transactions
export const getTransactions = async (dispatch) => {
  dispatch(getTransaction());
  try {
    const res = await axios.get('http://localhost:8080/api/orders', config);
    dispatch(getTransactionSuccess(res.data));
  } catch (err) {
    dispatch(getTransactionFailure());
  }
};


//get products from db, dispatch to productList
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
    const res = await axios.put(`http://localhost:8080/api/products/${id}`, product, config);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(updateProductFailure());
  }
};

//ADD PRODUCT
export const addProducts = async (product, dispatch) => {
  dispatch(addProduct());
  try {
    const res = await axios.post(`http://localhost:8080/api/products/`, product, config);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
