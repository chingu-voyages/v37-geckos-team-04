import React, { useState } from 'react';
import {
  TimePicker,
  Button,
  Modal,
  message,
  Space,
  DatePicker,
  Input,
  Dropdown,
  Menu,
} from 'antd';
import moment from 'moment';

export default function Dashboard() {
  const [isSleeping, setIsSleeping] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Start Sleep');
  const [successMessage, setSuccessMessage] = React.useState(
    'Sleep Session Started!'
  );

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [selectedTime, setSelectedTime] = useState('00:00');
  console.log(selectedTime);
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
        height: '100vh',
      }}
    >
      <Button type="primary" onClick={showModal} size={'large'} shape={'round'}>
        {buttonText}
      </Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Space direction="vertical">
          <DatePicker defaultValue={moment()} />
          <TimePicker
            autoFocus={true}
            format="HH:mm"
            defaultValue={moment()}
            onSelect={(value) => {
              const timeString = moment(value).format('HH:mm');
              setSelectedTime(timeString);
              console.log(timeString);
            }}
            onChange={success}
            minuteStep={5}
          />
          <Space>
            <Dropdown overlay={emotions} placement="bottomLeft">
              <Button>Mood</Button>
            </Dropdown>
          </Space>
          <Input placeholder="Additional notes" />
        </Space>
      </Modal>
    </div>
  );
}
