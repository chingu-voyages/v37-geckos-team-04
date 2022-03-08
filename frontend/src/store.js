import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import sleepReducer from './reducers/sleepSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sleepData: sleepReducer,
  },
});
