// import React from 'react';
import * as api from '../api/Api';
// import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from './userSlice';

// export const logInAsync = (formData, history) => async (dispatch) => {
// console.log(formData, history);

export const logInAsync = (formData) => async (dispatch) => {
  // let navigate = useNavigate();
  console.log(formData);
  debugger;
  try {
    const { data } = await api.login(formData);
    debugger;
    dispatch(isAuthenticated({ data }));
    // change path name to dashboard, once the private route for the dashboard is set up
    // history.push('/dashboard');
    window.history.push('/dashboard');
  } catch (error) {
    alert(`Email or password is incorrect. Please try again.`);
  }
};

// export const signUpAsync = (formData, history) => async (dispatch) => {
// console.log(formData, history);
export const signUpAsync = (formData) => async (dispatch) => {
  // let navigate = useNavigate();
  // console.log(formData);
  // debugger;
  try {
    // const { data } = await api.signup(formData);
    const data = await api.signup(formData);
    console.log(data);
    debugger;
    dispatch(isAuthenticated({ data }));
    // history.push('/dashboard');
    window.history.push('/dashboard');
  } catch (error) {
    // More specific error handling for signing up.
    // alert(`Email or password is incorrect. Please try again.`);
  }
};

// dispatch user log out action directly from the log out button
