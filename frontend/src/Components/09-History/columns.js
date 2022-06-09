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
  },
  {
    title: 'Wake Time',
    dataIndex: 'sleepEnd',
    editable: true,
  },
  {
    title: 'Sleep Mood',
    dataIndex: 'moodStart',
    editable: true,
  },
  {
    title: 'Wake Mood',
    dataIndex: 'moodWake',
    editable: true,
  },
  {
    title: 'Sleep Goal',
    dataIndex: 'sleepGoal',
    editable: true,
  },
  {
    title: 'Sleep Duration',
    dataIndex: 'sleepDuration',
  },
  {
    title: 'Sleep Notes',
    dataIndex: 'notesSleep',
    editable: true,
  },
  {
    title: 'Wake Notes',
    dataIndex: 'notesWake',
    editable: true,
  },
  {
    dataIndex: 'Edit',
  },
  {
    dataIndex: 'Delete',
  },
];

export default columns;
