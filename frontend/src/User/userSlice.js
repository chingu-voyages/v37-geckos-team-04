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
    // signUpFailure: (state) => {
    //   //   state.isLoggedIn = false;
    // },
    logInSuccess: (state, action) => {
      // Figure out what the action object is
      state.isLoggedIn = true;
    },
    // logInFailure: (state) => {
    //   //   state.isLoggedIn = false;
    // },
  },
});

// export const { signUpSuccess, signUpFailure, logInSuccess, logInFailure } =
export const { signUpSuccess, logInSuccess } = userSlice.actions;

export default userSlice.reducer;
