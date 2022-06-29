import React from 'react';
import * as rrd from 'react-router-dom';
import { render, screen } from './test-utils';

import History from './History';
import mockSleepData from './mockSleepData';
import { waitFor, within } from '@testing-library/react';

jest.mock('react-router-dom');

const setup = () => {
  rrd.useOutletContext.mockReturnValue({ data: mockSleepData });
  render(<History />);
};

describe('test history', () => {
  test('table renders history data', () => {
    setup();

    // confirm all column types
    const tableHeaders = document.querySelector('.ant-table-thead');
    expect(tableHeaders).toBeInTheDocument();

    // test first sleep instance
    const container = document.querySelector('.ant-table-row-level-0');

    const date = within(container).getByRole('cell', { name: /sat, jan 01/i });
    expect(date).toHaveTextContent(/Sat Jan 01 2022/i);

    const moodStart = within(container).getByRole('cell', { name: '😖' });
    expect(moodStart).toHaveTextContent('😖');

    const editButton = within(container).getByRole('cell', { name: /edit/i });
    expect(editButton).toBeInTheDocument();
  });

  // This only tests the presence of the modal, not its functionality
  // test('edit modal appears', async () => {
  //   setup();

  //   const edit = screen.getAllByRole('cell', { name: /edit/i })[0];

  //   userEvent.click(edit);
  //   // console.log(document.querySelector('ant-modal'));
  //   // queryByText to find modal; antd modals are rendered outside root div
  //   const modal = screen.queryByText(/editing sleep/i);
  //   console.log(modal);
  //   const close = screen.queryByText(/close/i);
  // });
});
