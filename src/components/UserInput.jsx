import React from 'react'

const UserInput = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] =useState('')
  return (
    <div>
        <form action="">
            <input 
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value())}
                placeholder=''
                class=''
                />

            <input 
                type="text"
                value={}
                onChange={}
                placeholder=''
                class=''
                />
        </form>
    </div>
  )
}

export default UserInput