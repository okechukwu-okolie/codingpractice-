import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className="date-time-picker">
      <label>Due Date & Time:</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        showTimeSelect
        dateFormat="Pp" // Displays both date and time
        placeholderText="Select a due date"
      />
    </div>
  );
};

export default DateTimePicker;