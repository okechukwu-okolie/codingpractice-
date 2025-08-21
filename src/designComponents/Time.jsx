import React from 'react';
import { DatePicker, TimePicker, Button, Form, message } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const SchedulerForm = ({ onSchedule }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Format the date and time values before sending them to the parent component
    const scheduledEvent = {
      date: values.date ? values.date.format('YYYY-MM-DD') : null,
      startTime: values.startTime ? values.startTime.format('HH:mm') : null,
      endTime: values.endTime ? values.endTime.format('HH:mm') : null,
      dateRange: values.dateRange ? values.dateRange.map(d => d.format('YYYY-MM-DD')) : null,
      // You can add more fields here like event title, description, etc.
    };

    onSchedule(scheduledEvent);
    message.success('Event scheduled successfully!');
    form.resetFields(); // Reset the form fields after successful submission
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  return (
    <Form
      form={form}
      name="scheduler-form"
      onFinish={onFinish}
      layout="vertical"
    >
      <h3>Single Day Scheduling</h3>
      <Form.Item
        name="date"
        label="Select Date"
        rules={[{ required: true, message: 'Please select a date!' }]}
      >
        <DatePicker disabledDate={disabledDate} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="startTime"
        label="Start Time"
        rules={[{ required: true, message: 'Please select a start time!' }]}
      >
        <TimePicker use12Hours format="h:mm a" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="endTime"
        label="End Time"
        rules={[{ required: true, message: 'Please select an end time!' }]}
      >
        <TimePicker use12Hours format="h:mm a" style={{ width: '100%' }} />
      </Form.Item>

      <h3>Date Range Scheduling</h3>
      <Form.Item
        name="dateRange"
        label="Select Date Range"
      >
        <RangePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Schedule Event
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SchedulerForm;