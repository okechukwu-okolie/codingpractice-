import { EditFilled } from '@ant-design/icons'
import React,{useState} from 'react'
import { BiEdit, BiPowerOff, BiTrash } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const schedulerInput = document.getElementById('schedulerInput')
const listLine = document.getElementById('listLine')


const Scheduler = () => {
    const [schedule, setSchedule] = useState('')
    const [error, setError] = useState('')
    const [schedulerList, setSchedulerList] = useState([])
    const [errorState, setErrorState] = useState(false)
    const navigate = useNavigate()

    
    const submit = (e) =>{
      e.preventDefault()
    
      if (schedule.trim() === ''){
        setErrorState(!errorState)
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
    }

    const toSignInPage = () =>{
      navigate('/signin')
    }
  
    const deleteOne = (id) =>{
      setSchedulerList(schedulerList.filter((list)=>
        list.id !== id 
      ))
    }


    const editSchedule = (id) =>{
     
      // the line of code filters out the actual object from which the text to be edited is.
      const edit = schedulerList.filter((list)=>list.id === id)
      // this line of code extracts the actual text from the object and changes it to a string
      const getString = edit.map((info)=>info.text).toString()
        // this line of code uses DOM to input into the IPUT element.
      schedulerInput.value= getString.toString()


      
      
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

                <button type='submit'>Add Schedule</button>

      </form>
                {errorState && <p style={{color:'red'}}>{error}</p>}


                <ul>
                  {schedulerList.map(list=>
                  <li key={list.id} id='listLine'>{list.text} <span><BiEdit onClick={()=>editSchedule(list.id)} /></span> <span><BiTrash onClick={()=>deleteOne(list.id)}/> </span> </li>
                  )}
                </ul>
    </main>
  )

}
export default Scheduler





