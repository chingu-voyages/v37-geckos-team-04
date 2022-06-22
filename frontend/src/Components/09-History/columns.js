const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    editable: true,
  },
  {
    title: 'Sleep Time',
    dataIndex: 'sleepStart',
    editable: true,
    responsive: ['sm'],
  },
  {
    title: 'Wake Time',
    dataIndex: 'sleepEnd',
    editable: true,
    responsive: ['md'],
  },
  {
    title: 'Sleep Mood',
    dataIndex: 'moodStart',
    editable: true,
    responsive: ['lg'],
  },
  {
    title: 'Wake Mood',
    dataIndex: 'moodWake',
    editable: true,
    responsive: ['lg'],
  },
  {
    title: 'Sleep Goal',
    dataIndex: 'sleepGoal',
    editable: true,
    responsive: ['lg'],
  },
  {
    title: 'Sleep Duration',
    dataIndex: 'sleepDuration',
    responsive: ['lg'],
  },
  {
    title: 'Sleep Notes',
    dataIndex: 'notesSleep',
    editable: true,
    responsive: ['xl'],
  },
  {
    title: 'Wake Notes',
    dataIndex: 'notesWake',
    editable: true,
    responsive: ['xl'],
  },
  {
    dataIndex: 'Edit',
  },
  {
    dataIndex: 'Delete',
  },
];

export default columns;
