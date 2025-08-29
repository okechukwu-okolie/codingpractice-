import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import React,{useState} from 'react'
import { BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'



const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] =useState('')
    const [eyeClicked, setEyeClicked] = useState(true)


    const savedUser = localStorage.getItem('savedUsername')
    const savedPass = localStorage.getItem('savedPassword')
    const navigate = useNavigate()


    const submit = (e) =>{

        e.preventDefault()

       
        //this code tests for the presence of the username and password
        if(!username || !password ){
            
          setError(!error)
          return setMessage('the username and password you provided are incorrect')
        }

        // const decryptUsername = CryptoJS.AES.decrypt('savedUser',"!@#$123").toString(CryptoJS.enc.Utf8);
        // console.log(decryptUsername)

        const bytes = CryptoJS.AES.decrypt(savedUser, "!@#$123");
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
     
        if (username !== originalText){
          
          console.log('wrong username inputed.')
          return;
        }
        console.log('test passed')
          navigate('/')

        // setInterval(() => {
        //     navigate('/')
        // }, 5000);

    }
      const eyeClick = () =>{
                setEyeClicked(!eyeClicked)
            }
  return (
    <main>
        <form onSubmit={submit} style={{display:'flex',gap:'10px'}}>
            <div style={{border:'1px solid grey', display:'flex',alignItems:'center', backgroundColor:'grey',color:'white'}}>
              <input type="text"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  placeholder='....input your username' /><BiUser/>
            </div>

            <div style={{border:'1px solid grey', display:'flex',alignItems:'center', backgroundColor:'grey',color:'white'}}>
              <input type={eyeClicked ? "password" : 'text'} 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      placeholder='....enter your password' />
                      {eyeClicked ? <EyeInvisibleFilled onClick={eyeClick} />: <EyeFilled onClick={eyeClick}/>}
            </div>


                <button type='submit'>enter</button>
        </form>
      {error ?<p style={{color:'green'}}>{message}</p>:<p style={{color:'red'}}>{message}</p>}
      <Link to='/signup'> Click here to register</Link>
      <Link to='/'>to main dashboard</Link>

    </main>
  )
}

export default SignIn
