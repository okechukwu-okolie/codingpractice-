import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] =useState('')


    const savedUsername = localStorage.getItem('savedUsername')
    const savedPassword = localStorage.getItem('savedPassword')
    const navigate = useNavigate()


    const submit = (e) =>{
        e.preventDefault
        if(username === savedUsername && password === savedPassword){
            setError(error)
            setMessage('Welcome to the SCHEDULER')
             setInterval(() => {
                navigate('/')
            }, 5000);
        }
        setError(!error)
        setMessage()
    }
  return (
    <main>
        <form onSubmit={submit}>
            <input type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder='....input your username' />

            <input type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='....enter your password' />


                <button type='submit'>enter</button>
        </form>
      {error ?`${message}`:`${message}`}
      <Link to='/signup'> Click here to register</Link>

    </main>
  )
}

export default SignIn
