import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from 'axios'

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8080/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export default login;
