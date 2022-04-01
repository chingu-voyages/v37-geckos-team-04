import * as api from '../api/Api';
import { isAuthenticated, isError } from './userSlice';

export const logInAsync = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch(isAuthenticated({ data }));
  } catch (error) {
    dispatch(isError(error.response.data));
  }
};

export const signUpAsync = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch(isAuthenticated({ data }));
  } catch (error) {
    dispatch(isError(error.response.data));
  }
};

// dispatch user log out action directly from the log out button
