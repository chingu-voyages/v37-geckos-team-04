import {
  Form,
  Modal,
  Table,
  Typography,
  Radio,
  InputNumber,
  Input,
  DatePicker,
  TimePicker,
} from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSleep } from '../../reducers/Sleep.js';
import columns from './columns.js';

const moods = ['😖', '🙁', '🙂', '😀', '😇'];

export default function History() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sleepData.data);
  const [sleepData, setSleepData] = useState(data);
  const [form] = Form.useForm();
  const [currSleep, setCurrSleep] = useState();
  const [editModal, setEditModal] = useState(false);

  // Fetches if new sleep data
  useEffect(() => {
    setSleepData(data);
  }, [data]);

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
  });

  const edit = (record) => {
    const findSleep = sleepData.find((sleep) => sleep._id === record._id);

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
  const formatData = sleepData.map((sleep) => {
    if (!sleep.sleepEnd) return null;
    const renderSleep = { ...sleep };

    renderSleep.key = renderSleep._id.toString();
    renderSleep.date = new Date(renderSleep.date).toDateString();
    // prettier-ignore
    renderSleep.sleepStart = new Date(renderSleep.sleepStart).toLocaleTimeString();
    renderSleep.sleepEnd = new Date(renderSleep.sleepEnd).toLocaleTimeString();
    renderSleep.moodStart = moods[renderSleep.moodStart];
    renderSleep.moodWake = moods[renderSleep.moodWake];

    return renderSleep;
  });

  return (
    <div>
      <Table columns={columns} dataSource={formatData} />
      <Modal
        title="Editing Sleep"
        onCancel={cancel}
        onOk={() => {
          form
            .validateFields()
            .then((vals) => {
              save(vals);
            })
            .catch((info) => console.log('Validation Failed: ', info));
        }}
        visible={editModal}
      >
        <Form form={form} name="form_in_modal">
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="sleepStart"
            label="Sleep Time"
            rules={[{ required: true }]}
          >
            <TimePicker use12Hours format="h:mm A" />
          </Form.Item>
          <Form.Item
            name="sleepEnd"
            label="Wake Time"
            rules={[{ required: true }]}
            use12Hours
          >
            <TimePicker use12Hours format="h:mm A" />
          </Form.Item>
          <Form.Item
            name="sleepGoal"
            label="Sleep Goal"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} max={24} />
          </Form.Item>
          <Form.Item
            name="moodStart"
            label="Sleep Mood"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value={4}>😇</Radio>
              <Radio value={3}>😀</Radio>
              <Radio value={2}>🙂</Radio>
              <Radio value={1}>🙁</Radio>
              <Radio value={0}>😖</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="moodWake"
            label="Wake Mood"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value={4}>😇</Radio>
              <Radio value={3}>😀</Radio>
              <Radio value={2}>🙂</Radio>
              <Radio value={1}>🙁</Radio>
              <Radio value={0}>😖</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="notesSleep" label="Sleep Notes">
            <Input />
          </Form.Item>
          <Form.Item name="notesWake" label="Wake Notes">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
