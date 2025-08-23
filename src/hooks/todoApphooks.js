
import React,{useState} from 'react'

const todoApphooks = () => {
    // const [todos, setTodos] = useState('')
    const [todoLists,setTodoLists] = useState([])
    // const [dueDate, setDueDate] = useState(null)
    // const [alarm,setAlarm] = useState(false)


    const addTodos =(todos)=>{
        if(todos.trim() !== ''){
            todoObject = {
                id: Date.now(),
                text:todos,
                completed:false,
                // dueDate,
                // alarm,
            }
        } return console.log('input data into the input')
        setTodoLists([...todoLists, todoObject])
        setTodos('')
        // setDueDate(null)
        // setAlarm(false)

    }









  return {
    addTodos,
  }
}

export default todoApphooks