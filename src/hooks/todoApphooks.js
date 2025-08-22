

import React, { useState } from 'react'

const todoApphooks = () => {

    const addSchedule =(text,alarm)=>{
        const [schedule, setSchedule] = useState('')
        const [scheduleList, setScheduleList] = useState([])

        if(text.trim()!==''){
            if(alarm === false){
                alert('the alarm has not been set yet')
            }
            const addInformation = {
                id:Date.now(),
                text,
                alarm,
                completed:false,
            }
            setScheduleList([...scheduleList, addInformation])
            setSchedule('')

        }
    }






  return {
    addSchedule,
  }
}

export default todoApphooks
