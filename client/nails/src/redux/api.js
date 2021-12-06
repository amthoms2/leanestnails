import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux";
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
    console.log('trying')
    await axios.post('http://localhost:8080/api/auth/logout');
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};


