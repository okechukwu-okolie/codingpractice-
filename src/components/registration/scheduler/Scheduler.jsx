import React,{useState} from 'react'

const Scheduler = () => {
    const [schedule, setSchedule] = useState('')
  return (
    <main>
      <form action="">
        <input type="text"
                value={schedule}
                onChange={(e)=>setSchedule(e.target.value)}
                placeholder='....schedule your todo here.' />
      </form>
    </main>
  )
}

export default Scheduler
