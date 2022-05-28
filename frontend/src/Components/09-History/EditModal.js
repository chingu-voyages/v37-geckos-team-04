import React from 'react';
import {
  Form,
  Modal,
  Radio,
  InputNumber,
  Input,
  DatePicker,
  TimePicker,
} from 'antd';

export default function EditModal({ editModal, form, cancel, save }) {
  return (
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
  );
}
