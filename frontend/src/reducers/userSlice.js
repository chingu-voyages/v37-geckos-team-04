import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authData: null,
    isError: null,
  },
  reducers: {
    fetchCurrentUser: (state, action) => {
      const profile = JSON.parse(action.payload);
      state.authData = { ...profile };
    },
    isError: (state, action) => {
      state.isError = !action.payload ? action.payload : action.payload.message;
    },
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
  },
});

export const { fetchCurrentUser, isAuthenticated, logOutSuccess, isError } =
  userSlice.actions;

export default userSlice.reducer;
