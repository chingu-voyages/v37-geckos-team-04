import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { authData: null },
  reducers: {
    isAuthenticated: (state, action) => {
      // Local storage is to maintain user's session and check if the token is saved in there
      localStorage.setItem(
        'profile',
        JSON.stringify({ ...action.payload.data })
      );
      state.authData = { ...action.payload.data };
    },
    logOutSuccess: (state) => {
      state.authData = null;
      localStorage.clear();
    },
  },
});

export const { isAuthenticated, logOutSuccess } = userSlice.actions;

export default userSlice.reducer;
