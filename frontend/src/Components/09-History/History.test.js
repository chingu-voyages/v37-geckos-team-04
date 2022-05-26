import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, screen } from './test-utils';
import userEvent from '@testing-library/user-event';

import History from './History';
import mockSleepData from './mockSleepData';
// import mockUserData from './mockUserData';
import { waitFor } from '@testing-library/react';

// export const handlers = [
//   rest.get('/history', (req, res, ctx) => {
//     return res(ctx.json({ sleepData: mockSleepData }));
//   }),
// ];

// const server = setupServer(...handlers);
// const server = setupServer();

// Enable API mocking before tests.
// beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
// afterAll(() => server.close());

// jest.mock('../../reducers/Sleep', () => {
//   getSleepData: () => mockSleepData;
// });

const setup = () => {
  render(<History />, {
    preloadedState: { sleepData: { data: mockSleepData } },
  });
};

describe('test history table', () => {
  test('render history data', async () => {
    setup();

    const date = screen.getByRole('cell', { name: 'Sat Jan 01 2022' });
    screen.debug(date);
  });

  test('update history data', async () => {
    setup();

    const edit = screen.getAllByRole('cell', { name: /edit/i })[0];

    userEvent.click(edit);

    // queryByText to find modal; antd modals are rendered outside root div
    const modal = await waitFor(() => screen.queryByText(/editing sleep/i));

    // const close = screen.getByRole('button', { name: /close/i });
    // screen.debug(close);
  });
});
