import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpSuccess: (state) => {
      state.user;
      //   need to figure out what to configure state.user to;
      state.isLoggedIn = true;
    },
    signUpFailure: (state) => {
      //   state.isLoggedIn = false;
    },
    logInSuccess: (state) => {
      state.user;
      state.isLoggedIn = true;
    },
    logInFailure: (state) => {
      //   state.isLoggedIn = false;
    },
  },
});

export const { signUpSuccess, signUpFailure, logInSuccess, logInFailure } =
  userSlice.actions;

export default userSlice.reducer;
