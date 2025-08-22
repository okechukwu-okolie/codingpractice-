import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TodoCalendar.css'; // Custom CSS for highlighting dates

const TodoCalendar = ({ todos }) => {
  const [date, setDate] = useState(new Date());

  // Function to highlight dates that have to-do items
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toLocaleDateString();
      const hasTodo = todos.some(todo => {
        if (todo.dueDate) {
          return new Date(todo.dueDate).toLocaleDateString() === formattedDate;
        }
        return false;
      });
      return hasTodo ? 'highlight' : null;
    }
  };
       
  return (
    <div className="todo-calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default TodoCalendar;
