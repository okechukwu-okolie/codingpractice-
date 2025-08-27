import { EditFilled } from '@ant-design/icons'
import React,{useState} from 'react'
import { BiEdit, BiPowerOff, BiTrash } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


const Scheduler = () => {
    const [schedule, setSchedule] = useState('')
    const [schedulerList, setSchedulerList] = useState([])
    const [error, setError] = useState('')
    const [errorState, setErrorState] = useState(false)
    const navigate = useNavigate()

    const submit = (e) =>{
      e.preventDefault()
      if (schedule.trim() === ''){
        setErrorState(!errorState)
         return setError('.......please input a detail to schedule')
      }
      const userSchedules = {
        id:Date.now(),
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



  return (
    <main>
      <BiPowerOff style={{cursor:'pointer', color:'red'}} onClick={toSignInPage}/>
      <form onSubmit={submit}>
        <input type="text"
                value={schedule}
                onChange={(e)=>setSchedule(e.target.value)}
                placeholder='....schedule your todo here.' />

                <button type='submit'>Add Schedule</button>

      </form>
                {errorState && <p style={{color:'red'}}>{error}</p>}


                <ul>
                  {schedulerList.map((list)=>
                  <li key={list.id}>{list.text} <span><BiEdit/></span><span><BiTrash/></span> </li>
                  )}
                </ul>
    </main>
  )
}

export default Scheduler
