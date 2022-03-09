// import React from 'react';
import { isAuthenticated } from './userSlice';
import * as api from '../api/Api';

export const logIn = (formData, history) => async (dispatch) => {
  console.log(formData, history);
  try {
    const { data } = await api.login(formData);
    debugger;
    dispatch(isAuthenticated({ data }));
    // change path name to dashboard, once the private route for the dashboard is set up
    history.push('/');
  } catch (error) {
    alert(`Email or password is incorrect. Please try again.`);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  console.log(formData, history);
  try {
    const { data } = await api.signup(formData);
    debugger;
    dispatch(isAuthenticated({ data }));
    history.push('/');
  } catch (error) {
    // More specific error handling for signing up.
    // alert(`Email or password is incorrect. Please try again.`);
  }
};

// dispatch user log out action directly from the log out button
