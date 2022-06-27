import { Form, Table, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSleep, removeSleep } from '../../reducers/Sleep.js';
import columns from './columns.js';
import EditModal from './EditModal.js';
import './style.css';

const moods = ['😖', '🙁', '🙂', '😀', '😇'];

export default function History() {
  const dispatch = useDispatch();
  const data = useOutletContext();
  const [form] = Form.useForm();
  const [currSleep, setCurrSleep] = useState();
  const [editModal, setEditModal] = useState(false);

  // Add edit button in **columns** here as it requires local state
  columns.forEach((col) => {
    if (col.dataIndex === 'Edit') {
      col.render = (_, record) => {
        if (!record) return null;
        return (
          <Typography.Link disabled={editModal} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      };
    }
    if (col.dataIndex === 'Delete') {
      col.render = (_, record) => {
        if (!record) return null;
        return (
          <Typography.Link onClick={() => dispatch(removeSleep(record._id))}>
            Delete
          </Typography.Link>
        );
      };
    }
  });

  const edit = (record) => {
    const findSleep = data.find((sleep) => sleep._id === record._id);

    const update = Object.assign({}, findSleep);
    update.date = moment(update.date);
    update.sleepStart = moment(update.sleepStart);
    update.sleepEnd = moment(update.sleepEnd);

    form.setFieldsValue({
      ...update,
    });
    setEditModal(true);
    setCurrSleep(update);
  };

  const cancel = () => {
    setEditModal(false);
  };

  // calculate sleepDuration
  function msToTime(duration) {
    let minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      seconds = Math.floor((duration / 1000) % 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hours + ':' + minutes + ':' + seconds;
  }

  const save = (vals) => {
    const update = Object.assign({}, vals);
    update.sleepDuration = msToTime(
      Math.abs(update.sleepStart - update.sleepEnd)
    );
    setCurrSleep((prev) => Object.assign(prev, update));
    dispatch(updateSleep(currSleep._id, currSleep));
    setEditModal(false);
  };

  // format sleepData for table
  const formatData = data.map((sleep) => {
    if (!sleep.sleepEnd) return null;
    const renderSleep = { ...sleep };

    renderSleep.key = renderSleep._id.toString();
    // prettier-ignore
    renderSleep.date = new Date(renderSleep.date).toLocaleString('default', { day: 'numeric', month: 'short', weekday: 'short' });
    // prettier-ignore
    renderSleep.sleepStart = new Date(renderSleep.sleepStart).toLocaleTimeString('default', { hour: 'numeric', minute: 'numeric' });
    // prettier-ignore
    renderSleep.sleepEnd = new Date(renderSleep.sleepEnd).toLocaleTimeString('default', { hour: 'numeric', minute: 'numeric' });
    renderSleep.moodStart = moods[renderSleep.moodStart];
    renderSleep.moodWake = moods[renderSleep.moodWake];

    return renderSleep;
  });

  return (
    <div className="container">
      <Table bordered columns={columns} dataSource={formatData} />
      <EditModal
        editModal={editModal}
        form={form}
        save={save}
        cancel={cancel}
      />
    </div>
  );
}
