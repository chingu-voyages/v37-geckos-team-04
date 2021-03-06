import { createSlice } from '@reduxjs/toolkit';

export const sleepSlice = createSlice({
  name: 'sleep',
  initialState: { data: [] },
  reducers: {
    get: (state, action) => {
      state.data = action.payload;
    },
    create: (state, action) => {
      state.data.push(action.payload);
    },
    update(state, action) {
      state.data.find((sleep) => {
        if (sleep._id === action.payload._id) {
          Object.assign(sleep, { ...action.payload });
        }
        return false;
      });
    },
    remove: (state, action) => {
      state.data = state.data.filter((sleep) => sleep._id !== action.payload);
    },
    logOut: (state) => {
      state.data = [];
    },
  },
});

export const { get, create, update, remove, logOut } = sleepSlice.actions;

export default sleepSlice.reducer;
