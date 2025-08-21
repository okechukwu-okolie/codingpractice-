import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import './signUp.css'

const Signup = () => {

 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')


  const handleSubmit=(e)=>{
    e.prevent.default()
  }

  return (

    <>
      <Link to='/'>
        <div class='signup-back' >
          <BsChevronDoubleLeft size={12} style={{fontWeight:'bolder'}}/>
          <p>back</p>
        </div>
      </Link>
    <div class='signUp'>


       <form onSubmit={handleSubmit} 
       class='signup-form'>
            <div style={{display:'flex',alignItem:'center'}}><p>Sign Up</p></div>
      
              <input 
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder='Username'
                class='Username'
                />
      
                <input 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Password'
                class='Password'
                />
                
                <button type='submit'> Submit</button>

               <Link to='/signIn'>
                  <div class='signup-signin'>
                      <p>Click to sign in here</p>
                  </div>
                </Link> 
      </form>
      
      
    </div>
    </>
  )
}

export default Signup
