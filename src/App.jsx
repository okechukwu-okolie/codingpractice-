import TopPage from "./component/TopPage"
// import './app.css'
// import { Route, Routes } from "react-router-dom"
// import Signup from "./component/signUp/Signup"
// import Signin from "./component/signIn/Signin"
// import Scheduler from "./component/scheduler/Scheduler"


// function App() {

//   return (
//     <>
      
//       <Routes>
//         <Route path="/" element={<TopPage/>} />
//         <Route path="/signIn" element={<Signin/>} />
//         <Route path="/signUp" element ={<Signup/>} />
//         <Route path="/scheduler" element={<Scheduler/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import useTodos from './hooks/useTodos';
// import TodoForm from './component/TodoForm';
// import TodoList from './component/TodoList';
// import './App.css'; 


// function App() {
//   const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

//   return (
//     <div className="App">
//       <h1>My To-Do List</h1>
//       <TodoForm onAdd={addTodo} />
//       <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
//     </div>
//   );
// }

// export default App;







import React, { useState, useEffect } from 'react';
import DateTimePicker from './component/DateTimePicker';
import TodoCalendar from './component/TodoCalendar';
import { scheduleAlarm, requestNotificationPermission } from './component/AlarmManager';
import { FaCalendarAlt, FaBell } from 'react-icons/fa';
import './App.css'; // For general app styling

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoDueDate, setNewTodoDueDate] = useState(null);
  const [isAlarmSet, setIsAlarmSet] = useState(false);

  useEffect(() => {
    requestNotificationPermission(); // Request permission on app load
  }, []);

  // Use a useEffect to monitor for new to-do items and schedule alarms
  useEffect(() => {
    todos.forEach(todo => {
      if (todo.isAlarmSet && todo.dueDate && !todo.alarmScheduled) {
        scheduleAlarm(todo);
        // Add a flag to prevent scheduling the same alarm multiple times
        // This is a simple implementation, a real app would be more robust
        setTodos(prevTodos =>
          prevTodos.map(item =>
            item.id === todo.id ? { ...item, alarmScheduled: true } : item
          )
        );
      }
    });
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
      dueDate: newTodoDueDate,
      isAlarmSet: isAlarmSet,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
    setNewTodoDueDate(null);
    setIsAlarmSet(false);
  };

  return (         
    <div className="app-container">
      <h1>My To-Do App</h1>

      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new to-do..."
        />
        <DateTimePicker
          selectedDate={newTodoDueDate}
          onDateChange={date => setNewTodoDueDate(date)}
        />
        <label>
          <input
            type="checkbox"
            checked={isAlarmSet}
            onChange={(e) => setIsAlarmSet(e.target.checked)}
          />
          <FaBell /> Set Alarm
        </label>
        <button type="submit">Add To-Do</button>
      </form>

      <div className="content-area">
        <div className="todo-list">
          <h2>Tasks</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                {todo.text}
                {todo.dueDate && (
                  <span className="due-date">
                    <FaCalendarAlt /> {new Date(todo.dueDate).toLocaleString()}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-calendar">
          <h2>Calendar View</h2>
          <TodoCalendar todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;