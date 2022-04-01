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
    update(_state, action) {
      // const sleepInst = state.data.find((sleep) => {
      //   if (sleep._id === action.payload._id) {
      //     return Object.assign(sleep, { ...action.payload });
      //   }
      // });
      return action.payload
      // return sleepInst;
    },
    remove: (state, action) => {
      state.data = state.data.filter((sleep) => sleep._id !== action.payload);
    },
  },
});

export const { get, create, update, remove } = sleepSlice.actions;

export default sleepSlice.reducer;
