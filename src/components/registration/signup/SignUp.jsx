import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './signup.css'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [userCredentialList, setUserCredentialList] = useState([])
    const [credential, setCredential] = useState(false)
    const navigate = useNavigate()


    const submit = (e) =>{
        e.preventDefault()

        if(!username || !password){
          setCredential(credential)
         return  setMessage('....Please provide your username and password')
        }

        const Username = localStorage.setItem('savedUsername', username)
       const Password =  localStorage.setItem('savedPassword',password)
        setCredential(!credential)
        setMessage('.....Successfully signed in')

        const individualCredential = {
          id: Date.now(),
          username:Username,
          password:Password,
        }

        setUserCredentialList([...userCredentialList, individualCredential])
        console.log(setUserCredentialList)


        setInterval(() => {
                  navigate('/signin')
                }, 2000);
            }


  return (
    <main>
      <form onSubmit={submit}>
        <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)} 
            placeholder='Username......'
            />
        <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password.....'/>

        <button type='submit'>submit</button>

      </form>
      {credential ? <p style={{ color: 'green' }}>{message}</p> : <p style={{ color: 'red' }}>{message}</p>}
      <p>Already have an account? <Link to='/signin'>Click here to sign in</Link></p>
    </main>
  )
}

export default SignUp
