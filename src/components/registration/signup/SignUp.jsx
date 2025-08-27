import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './signup.css'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { BiUser } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [userCredentialList, setUserCredentialList] = useState([])
    const [credential, setCredential] = useState(false)
    const [eyeClicked, setEyeClicked] = useState(true)
    const navigate = useNavigate()


    const submit = (e) =>{
        e.preventDefault()

        if(!username || !password || !email){
          setCredential(credential)
         return  setMessage('....Please provide your username and password')
        }

        const digit = /^\d+\w+[a-zA-Z0-9_]$/
        const letter = /^\w$/
        // console.log(digit.test(password))
        // if(password !== passwordPattern ){

        // }

        // const Username = 
        localStorage.setItem('savedUsername', username)
      //  const Password =  
       localStorage.setItem('savedPassword',password)
        setCredential(!credential)
        setMessage('.....Successfully signed in')

        // const individualCredential = {
        //   id: Date.now(),
        //   username:Username,
        //   password:Password,
        // }

        // setUserCredentialList([...userCredentialList, individualCredential])
        // console.log(setUserCredentialList)


        setInterval(() => {
                  navigate('/signin')
                }, 2000);
            }

            const eyeClick = () =>{
                setEyeClicked(!eyeClicked)
            }


  return (
    <main>
      <form onSubmit={submit} style={{display:'flex',gap:'10px'}}>

        {/* username of the user */}

        <div style={{border:'1px solid grey', display:'flex',alignItems:'center', backgroundColor:'grey',color:'white'}}>
        <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)} 
            placeholder='Username......'
            /><BiUser/>
        </div>

        {/* password of the user */}
            <div style={{border:'1px solid grey', display:'flex',alignItems:'center', backgroundColor:'grey',color:'white'}}>
            <input
                type={eyeClicked ? "password" : 'text'} 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Password.....'/>
                {eyeClicked ? <EyeInvisibleFilled onClick={eyeClick} />: <EyeFilled onClick={eyeClick}/>}
            </div>

            {/* email of the user */}
            <div style={{border:'1px solid grey', display:'flex',alignItems:'center', backgroundColor:'grey',color:'white'}}>
              <input type="email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Email.....'/><TfiEmail/>
            </div>

        {/* submit button */}
        <button type='submit'>submit</button>

      </form>
      {credential ? <p style={{ color: 'green' }}>{message}</p> : <p style={{ color: 'red' }}>{message}</p>}
      <p>Already have an account? <Link to='/signin'>Click here to sign in</Link></p>
    </main>
  )
}

export default SignUp
