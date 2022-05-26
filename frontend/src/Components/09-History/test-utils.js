// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
// import userReducer from '../../reducers/userSlice';
import sleepReducer from '../../reducers/sleepSlice';
import mockSleepData from './mockSleepData';

function render(
  ui,
  {
    // preloadedState = {
    //   sleepData: { data: mockSleepData },
    // },
    preloadedState,
    store = configureStore({
      reducer: { sleepData: sleepReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  // console.log(renderOptions);
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
