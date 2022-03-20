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
    update: (state, action) => {
      let sleepInstance = state.data.find(
        (sleep) => sleep._id === action.payload._id
      );
      if (sleepInstance) {
        return { ...state, ...action.payload };
      }
    },
    remove: (state, action) => {
      state.data.filter((sleep) => sleep._id === action.payload._id);
    },
  },
});

export const { get, create, update, remove } = sleepSlice.actions;

export default sleepSlice.reducer;
