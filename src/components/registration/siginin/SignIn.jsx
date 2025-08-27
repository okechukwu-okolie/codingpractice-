import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] =useState('')


    const savedUser = localStorage.getItem('savedUsername')
    const savedPass = localStorage.getItem('savedPassword')
    const navigate = useNavigate()


    const submit = (e) =>{

        e.preventDefault()
        console.log(savedPass)
        if(username !== savedUser && password !== savedPass ){
            
          setError(!error)
          return setMessage('the username and password you provided are incorrect')
        }
        setInterval(() => {
          console.log('error')
            navigate('/')
        }, 2000);
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
      {error ?<p style={{color:'green'}}>{message}</p>:<p style={{color:'red'}}>{message}</p>}
      <Link to='/signup'> Click here to register</Link>
      <Link to='/'>to main dashboard</Link>

    </main>
  )
}

export default SignIn
