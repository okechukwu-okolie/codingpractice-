import React, { useState } from 'react'
import './scheduler.css'
import { PlusCircleFilled, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { BiAlarm, BiEdit, BiTrash } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import Time from '../../designComponents/Time'

const Scheduler = () => {
  const [schedule, setSchedule] = useState('')
  const [scheduleList, setScheduleList] = useState([])
  const [getTime, setGetTime] = useState(false)

  const addSchedule =()=>{
    //check to know if the input field has any text
    if(schedule !== ''){
      const eachSchedule = {
        id: Date.now(),
        text: schedule,

      }
      setScheduleList([...scheduleList, eachSchedule])
      setSchedule('')
    }
  }

  const setTime =()=>{
    setGetTime(!getTime)
  }


  return (
    <main class='scheduler-main'>
    <div class='scheduler-home'>
      <input 
        type="text"
        value={schedule}
        class='schedule-input'
        onChange={(e)=>setSchedule(e.target.value)}
        placeholder='Write your schedule here....'
         />
         <PlusCircleFilled type='submit' onClick={addSchedule}  style={{color:'white',fontSize:'30px',cursor:'pointer'}}/>

         <BiAlarm onClick={setTime} style={{color:'white',fontSize:'30px',cursor:'pointer'}}/>
          
    </div>
    <Time/>
    <div>
      <ul >
        {scheduleList.map((eachList)=>
        <li  key={eachList.id}><span>{eachList.text}</span><BiEdit/><BiTrash/></li>
        )}
      </ul>
      
    </div>
    </main>
  )
}

export default Scheduler
