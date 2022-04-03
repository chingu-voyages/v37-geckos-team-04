import React, { useState } from 'react';
import {
  TimePicker,
  Button,
  Modal,
  message,
  Space,
  DatePicker,
  Input,
  Radio,
  // Menu,
} from 'antd';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutSuccess } from '../../reducers/userSlice';
import {
  getSleepData,
  createSleep,
  updateSleep,
  removeSleep,
} from '../../reducers/Sleep';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.authData);
  const sleepData = useSelector((state) => state.sleepData.data);
  // console.log('sleepData: ', sleepData);

  const initialState = {
    creator: '',
    date: "1970/01/01",
    sleepStart: '00:00',
    sleepEnd: '00:00',
    moodStart: 0,
    moodWake: 0,
    sleepGoal: 8,
    notes: notesFull
  };

  const [currSleep, setCurrSleep] = useState(initialState);
  function clear () {
    setCurrSleep(initialState);
  }
  function submit () {
    dispatch(createSleep(currSleep));
  }

  const id = JSON.parse(localStorage.getItem("profile")).data.result._id

  const [isSleeping, setIsSleeping] = useState(false);
  const [buttonText, setButtonText] = useState('Start Sleep');
  const [successMessage, setSuccessMessage] = useState(
    'Sleep Session Started!'
  );

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [date, setDate] = useState(moment().format("YYYY/MM/DD"));

  const [sleepStart, setSleepStart] = useState(moment().format('HH:mm'));
  const [sleepEnd, setSleepEnd] = useState('00:00');

  const [moodStart, setMoodStart] = useState(5);
  const [moodEnd, setMoodEnd] = useState(5);

  const [notesStart, setNotesStart] = useState("");
  const [notesEnd, setNotesEnd] = useState("");
  
  var notesFull = [notesStart, notesEnd]

  const data = {
    creator: id,
    date: date,
    sleepStart: sleepStart,
    sleepEnd: sleepEnd,
    moodStart: moodStart,
    moodWake: moodEnd,
    sleepGoal: 8,
    notes: notesFull
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setCurrSleep(data)

      if (isSleeping) {
        setSuccessMessage('Sleep Session Started!');
        success(successMessage);
        setIsSleeping(false);
        setButtonText('Start Sleep');
      } else {
        setSuccessMessage('Sleep Session Successfully Recorded!');
        success(successMessage);
        setIsSleeping(true);
        setButtonText('Stop Sleep');
        submit()
      }

      console.log(data)
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
    clear();
    failure();
  };

  const success = (text) => {
    message.success(text);
  };

  const failure = () => {
    message.warning('Data not recorded!', 2);
  };

  const onMoodChange = (e) => {
    if(isSleeping) {
      setMoodEnd(e.target.value);
    } else {
      setMoodStart(e.target.value);
    }
    setCurrSleep(data)
  };

  const onNotesChange = (e) => {
    if(isSleeping) {
      setNotesEnd(e.target.value);
    } else {
      setNotesStart(e.target.value);
    }
    setCurrSleep(data)
  };

  return (
    <div
      style={{
        textAlign: 'right',
        backgroundColor: isSleeping === true ? '#31263E' : '#F7F4F3',
      }}
    >
      <Button type="primary" onClick={showModal} size={'large'} shape={'round'}>
        {buttonText}
      </Button>
      <Modal
        title={buttonText}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Space direction="vertical">
          <Space direction="horizontal">
            Today's Date
            <DatePicker 
              defaultValue={moment()} 
              onSelect={(value) => {
                const dateString = moment(value).format('YYYY/MM/DD')
                setDate(dateString)
                console.log(dateString);
              }}
            />
          </Space>

          <Space direction="horizontal">
            {buttonText}Time
            <TimePicker
              autoFocus={true}
              format="HH:mm"
              defaultValue={moment()}
              onSelect={(value) => {
                const timeString = moment(value).format('HH:mm');
                if (isSleeping) {
                  setSleepEnd(timeString);
                } else {
                  setSleepStart(timeString);
                }
                setCurrSleep(data)
                console.log(timeString);
              }}
              onChange={success}
              minuteStep={5}
            />
          </Space>

          <Space direction="horizontal">
            Select Mood
            <Radio.Group onChange={onMoodChange}>
              <Radio value={5}>😇</Radio>
              <Radio value={4}>😀</Radio>
              <Radio value={3}>🙂</Radio>
              <Radio value={2}>🙁</Radio>
              <Radio value={1}>😖</Radio>
            </Radio.Group>
          </Space>

          <Input 
            placeholder="Additional notes" 
            onChange={onNotesChange}
          />
        </Space>
      </Modal>
    </div>
  );
}
