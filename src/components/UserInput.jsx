import React from 'react'

const UserInput = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] =useState('')
    const [message, setMessage] = useState('')

    const submit =(e)=>{
        e.preventDefault()
        if(!username || !password){
            console.log('input the username and password')
        }
        localStorage.setItem('collectUsername', username)
        localStorage.setItem('collectPassword',password)
    }
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