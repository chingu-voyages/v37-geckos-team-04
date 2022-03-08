import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated, logOutSuccess } from './userSlice';

export const User = () => {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  // return dispatch(logInSuccess());
};
