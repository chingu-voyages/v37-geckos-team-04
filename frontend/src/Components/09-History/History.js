import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Sleep/Wake Time',
    dataIndex: 'time',
  },
  {
    title: 'Mood',
    dataIndex: 'mood',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
  },
];

const data = [
  {
    key: '1',
    date: '2021-03-16',
    time: '8:45',
    mood: '😇',
    notes: 'test 123',
  },
  {
    key: '2',
    date: '2021-03-17',
    time: '9:45',
    mood: '😇',
    notes: 'bla bla bla',
  },
  {
    key: '3',
    date: '2021-03-18',
    time: '10:45',
    mood: '😇',
    notes: 'something',
  },
  {
    key: '4',
    date: '2021-03-19',
    time: '11:45',
    mood: '😇',
    notes: 'bla bla',
  },
  {
    key: '1',
    date: '2021-03-16',
    time: '8:45',
    mood: '😇',
    notes: 'test 123',
  },
  {
    key: '2',
    date: '2021-03-17',
    time: '9:45',
    mood: '😇',
    notes: 'bla bla bla',
  },
  {
    key: '3',
    date: '2021-03-18',
    time: '10:45',
    mood: '😇',
    notes: 'something',
  },
  {
    key: '4',
    date: '2021-03-19',
    time: '11:45',
    mood: '😇',
    notes: 'bla bla',
  },
  {
    key: '1',
    date: '2021-03-16',
    time: '8:45',
    mood: '😇',
    notes: 'test 123',
  },
  {
    key: '2',
    date: '2021-03-17',
    time: '9:45',
    mood: '😇',
    notes: 'bla bla bla',
  },
  {
    key: '3',
    date: '2021-03-18',
    time: '10:45',
    mood: '😇',
    notes: 'something',
  },
  {
    key: '4',
    date: '2021-03-19',
    time: '11:45',
    mood: '😇',
    notes: 'bla bla',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
};

export default function History() {
  // const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
    />
  );
}
