import React, { useState } from 'react';
import { TimePicker, Button, Modal, message, Space, DatePicker, Input, Radio, Menu } from "antd";
import moment from "moment"; 

export default function Dashboard() {
  const [isSleeping, setIsSleeping] = useState(false);
  const [buttonText, setButtonText] = useState('Start Sleep');
  const [successMessage, setSuccessMessage] = useState(
    'Sleep Session Started!'
  );

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState('00:00');
  const [mood, setMood] = useState(5);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);

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
      }
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
    failure();
  };

  const success = (text) => {
    message.success(text);
  };

  const failure = () => {
    message.warning('Data not recorded!', 2);
  };

  const onMoodChange = e => {
    setMood(e.target.value);
  };

  const emotions = (
    <Menu>
      <Menu.Item key={5}>😇</Menu.Item>
      <Menu.Item key={4}>😀</Menu.Item>
      <Menu.Item key={3}>🙂</Menu.Item>
      <Menu.Item key={2}>🙁</Menu.Item>
      <Menu.Item key={1}>😖</Menu.Item>
    </Menu>
  );

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
        <Space direction='vertical'>

          <Space direction='horizontal'>
            Today's Date
            <DatePicker defaultValue={moment()} />
          </Space>
          
          <Space direction='horizontal'>
              {buttonText}Time
              <TimePicker 
                autoFocus={true}
                format="HH:mm"
                defaultValue={moment()}
                onSelect={(value) => {
                  const timeString = moment(value).format("HH:mm");
                  setSelectedTime(timeString);
                  console.log(timeString);
                }}
                onChange={success}
                minuteStep={5}
              />
          </Space>
          
          <Space direction='horizontal'>
            Select Mood
            <Radio.Group onMoodChange={onMoodChange}>
              <Radio value={5}>😇</Radio>
              <Radio value={4}>😀</Radio>
              <Radio value={3}>🙂</Radio>
              <Radio value={2}>🙁</Radio>
              <Radio value={1}>😖</Radio>
            </Radio.Group>
          </Space>
          
          <Input placeholder="Additional notes" />
        </Space>
      </Modal>
    </div>
  );
}
