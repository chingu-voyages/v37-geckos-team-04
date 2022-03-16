import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authData: null,
    // passwordVerification: { match: null, filled: null },
  },
  reducers: {
    isAuthenticated: (state, action) => {
      console.log('signed up/logged in!');
      // Local storage is to maintain user's session and check if the token is saved in there
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.authData = { ...action.payload };
    },
    logOutSuccess: (state) => {
      console.log('logged out!');
      state.authData = null;
      localStorage.clear();
    },
    // passwordVerification: (state, action) => {
    //   state.passwordVerification = action;
    // },
  },
});

// export const { isAuthenticated, logOutSuccess, passwordVerification } =
export const { isAuthenticated, logOutSuccess } = userSlice.actions;

export default userSlice.reducer;
