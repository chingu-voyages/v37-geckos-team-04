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
      const sleepInst = state.data.find((sleep) => {
        if (sleep._id === action.payload._id) {
          return sleep;
        }
      });
      Object.assign(sleepInst, { ...action.payload });
    },
    remove: (state, action) => {
      state.data = state.data.filter((sleep) => sleep._id !== action.payload);
    },
  },
});

export const { get, create, update, remove } = sleepSlice.actions;

export default sleepSlice.reducer;
