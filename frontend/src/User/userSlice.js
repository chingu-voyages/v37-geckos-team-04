import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      // Figure out what the action object is
      state.isLoggedIn = true;
    },
    // signUpFailure: (state, action) => {
    //   // state.isLoggedIn = false;
    // },
    logInSuccess: (state, action) => {
      // Figure out what the action object is
      state.user = action.data;
      state.isLoggedIn = true;
    },
    // logInFailure: (state) => {
    //   //   state.isLoggedIn = false;
    // },
    logOutSuccess: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

// export const { signUpSuccess, signUpFailure, logInSuccess, logInFailure } =
export const { signUpSuccess, logInSuccess, logOutSuccess } = userSlice.actions;

export default userSlice.reducer;
