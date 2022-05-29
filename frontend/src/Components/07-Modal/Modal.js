import React, { useEffect, useState } from 'react';
import { Button, Modal, message, Input, InputNumber, Radio, Form } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { createSleep, updateSleep } from '../../reducers/Sleep';

export default function SleepModal({ id }) {
  const dispatch = useDispatch();
  // [form] allows <Form /> container validation and other things like resetting fields to default
  const [form] = Form.useForm();

  // mongo adds data like push() => currSleep = latest sleep session
  const currSleep = useSelector(
    (state) => state.sleepData.data[state.sleepData.data.length - 1]
  );

  useEffect(() => {
    // restore active sleep session if user logs out
    if (currSleep) {
      if (currSleep.sleepStart && !currSleep.sleepEnd) {
        setData((prev) => Object.assign(prev, currSleep));
        setIsSleeping(true);
      }
    }
  }, [currSleep, id]);

  const initialState = {
    creator: id,
    date: null,
    sleepStart: null,
    sleepEnd: null,
    moodStart: null,
    moodWake: null,
    sleepGoal: null,
    sleepDuration: null,
    notesSleep: '',
    notesWake: '',
  };

  const [isSleeping, setIsSleeping] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(initialState);

  const showModal = () => {
    setVisible(true);
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

  const handleOk = (vals) => {
    setIsLoading(true);

    setTimeout(() => {
      setVisible(false);
      setIsLoading(false);

      if (isSleeping) {
        setData((prev) => {
          const date = new Date();
          // sleepStart entered as Date type but Mongo stores as BSON type
          prev.sleepDuration = msToTime(
            Math.abs(new Date(prev.sleepStart) - date)
          );
          prev.sleepEnd = date; //.toLocaleTimeString();
          return Object.assign(prev, vals);
        });

        message.success('Sleep Session Successfully Recorded!');
        setIsSleeping(false);
        dispatch(updateSleep(currSleep._id, data));
        setData(initialState);
      } else {
        setData((prev) => {
          const date = new Date();

          prev.sleepStart = date; //.toLocaleTimeString();
          prev.date = date;
          return Object.assign(prev, vals);
        });

        message.success('Sleep Session Started!');
        setIsSleeping(true);
        dispatch(createSleep(data));
      }
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
    setData(initialState);
    message.warning('Data not recorded!', 2);
  };

  return (
    <div
      style={{
        textAlign: 'right',
        backgroundColor: isSleeping ? '#31263E' : '#F7F4F3',
      }}
    >
      <Button type="primary" onClick={showModal} size={'large'} shape={'round'}>
        {isSleeping ? 'Stop Sleep' : 'Start Sleep'}
      </Button>
      <Modal
        title={isSleeping ? 'Stop Sleep' : 'Start Sleep'}
        visible={visible}
        onOk={() => {
          form
            .validateFields()
            .then((vals) => {
              handleOk(vals);
              form.resetFields();
            })
            .catch((info) => console.log('Validation Failed: ', info));
        }}
        confirmLoading={isLoading}
        onCancel={handleCancel}
      >
        <Form form={form} name="form_in_modal">
          {!isSleeping && (
            <Form.Item
              name="sleepGoal"
              label="sleepGoal"
              rules={[{ required: true }]}
            >
              <InputNumber min={1} max={24} />
            </Form.Item>
          )}
          <Form.Item
            name={isSleeping ? 'moodWake' : 'moodStart'}
            label="Mood"
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
            name={isSleeping ? 'notesWake' : 'notesSleep'}
            label="Additional Notes"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
