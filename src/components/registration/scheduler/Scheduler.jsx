import { EditFilled } from '@ant-design/icons'
import React,{useState} from 'react'
import { BiEdit, BiPowerOff, BiTrash } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const schedulerInput = document.getElementById('schedulerInput')
const addBtn = document.getElementById('addBtn')


const Scheduler = () => {          
  
    const [schedule, setSchedule] = useState('')//this is the input for the scheduler
    const [error, setError] = useState('')//this displays error message when no input text
    const [schedulerList, setSchedulerList] = useState([])//this holds the array
    const [errorState, setErrorState] = useState(false)// this sets error conditions
    // this use state is for editing becuae the data has to be retrieved from somewhere
    const [edit, setEdit] = useState(null)
    const navigate = useNavigate()// this varuable is used for navigating within javascript

    //this is the form function that keeps theoutput from just disappearing
    const submit = (e) =>{
      e.preventDefault()
    
      if (schedule.trim() === ''){
        setErrorState(!errorState)
        addBtn.innerHTML = 'Add todo'
         return setError('.......please input a detail to schedule')
      }
      const userSchedules = {
        id: Date.now(),
        text:schedule,
        completed:false
      }
      setErrorState(false)
      setSchedulerList([...schedulerList, userSchedules])
      setSchedule('')
      addBtn.innerHTML = 'Add todo'
    }

    const toSignInPage = () =>{
      navigate('/signin')
    }
  
    const deleteOne = (id) =>{
      setSchedulerList(schedulerList.filter((list)=>
        list.id !== id 
      ))
    }
// the handledit function takes in one object from the array of objects we created
    const handleEdit = (schedulerList, schedulerListObject,listId)=>{
      setSchedule(schedulerListObject.text) 

      addBtn.innerHTML = 'update todo'
      
      if (schedulerListObject.id === listId){
           setSchedulerList(schedulerList.filter((list)=>
           list.id !== listId 
      ))
      }
    }


   
    
  

  return (
    <main>
      <BiPowerOff style={{cursor:'pointer', color:'red'}} onClick={toSignInPage}/>
      <form onSubmit={submit}>
        <input type="text"
                value={schedule}
                onChange={(e)=>setSchedule(e.target.value)}
                placeholder='....schedule your todo here.' 
                id='schedulerInput'/>

                <button type='submit'id='addBtn'>Add Schedule</button>

      </form>
                {errorState && <p style={{color:'red'}}>{error}</p>}


                <ul>
                  {schedulerList.map(list=>
                  <li key={list.id} id='listLine'>{list.text} <span><BiEdit onClick={()=>handleEdit(schedulerList,list,list.id)} /></span> <span><BiTrash onClick={()=>deleteOne(list.id)}/> </span> </li>
                  )} 
                </ul>
    </main>
  )

}
export default Scheduler





