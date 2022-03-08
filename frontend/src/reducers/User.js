// import React from 'react';
import { isAuthenticated } from './userSlice';

export const logIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    dispatch(isAuthenticated({ data }));
    // change path name to dashboard, once the private route for the dashboard is set up
    history.push('/');
  } catch (error) {
    alert(`Email or password is incorrect. Please try again.`);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(isAuthenticated({ data }));
    history.push('/');
  } catch (error) {
    // More specific error handling for signing up.
    // alert(`Email or password is incorrect. Please try again.`);
  }
};

// dispatch user log out action directly from the log out button
