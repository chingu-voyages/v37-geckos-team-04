import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, screen } from './test-utils';
import userEvent from '@testing-library/user-event';

import History from './History';
import mockSleepData from './mockSleepData';
// import mockUserData from './mockUserData';
import { waitFor, within } from '@testing-library/react';

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

describe('test history', () => {
  test('table renders history data', () => {
    setup();

    // confirm all column types
    const tableHeaders = document.querySelector('.ant-table-thead');
    expect(tableHeaders).toBeInTheDocument();

    // test first sleep instance
    const container = document.querySelector('.ant-table-row-level-0');

    const date = within(container).getByRole('cell', { name: /sat jan 01/i });
    expect(date).toHaveTextContent(/Sat Jan 01 2022/i);

    const moodStart = within(container).getByRole('cell', { name: '😖' });
    expect(moodStart).toHaveTextContent('😖');

    const editButton = within(container).getByRole('cell', { name: /edit/i });
    expect(editButton).toBeInTheDocument();
  });

  // This only tests the presence of the modal, not its functionality
  test('edit modal appears', async () => {
    setup();

    const edit = screen.getAllByRole('cell', { name: /edit/i })[0];

    userEvent.click(edit);
    // console.log(document.querySelector('ant-modal'));
    // queryByText to find modal; antd modals are rendered outside root div
    const modal = screen.queryByText(/editing sleep/i);
    console.log(modal);
    const close = screen.queryByText(/close/i);
  });
});
