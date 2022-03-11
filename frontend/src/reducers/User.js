import * as api from '../api/Api';
import { isAuthenticated } from './userSlice';

// export const logInAsync = (formData, history) => async (dispatch) => {
export const logInAsync = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch(isAuthenticated({ data }));
  } catch (error) {
    alert(`Email or password is incorrect. Please try again.`);
  }
};

// export const signUpAsync = (formData, history) => async (dispatch) => {
export const signUpAsync = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch(isAuthenticated({ data }));
  } catch (error) {
    // More specific error handling for signing up.
    // alert(`Email or password is incorrect. Please try again.`);
  }
};

// dispatch user log out action directly from the log out button
