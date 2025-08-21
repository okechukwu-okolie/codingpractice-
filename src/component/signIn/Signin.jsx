
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import './signin.css'

const Signin = () => {

   const [signinusername, setSigninUsername] = useState('')
   const [signinpassword, setSigninPassword] = useState('')
  
  
    const handleSubmit=(e)=>{
      e.prevent.default()
    }
  return (
    <>
          <Link to='/signUp'>
            <div class='signup-back' >
              <BsChevronDoubleLeft size={12} style={{fontWeight:'bolder'}}/>
              <p>back</p>
            </div>
          </Link>
          
        <div class='signUp'>
    
    
           <form onSubmit={handleSubmit} 
           
           class='signin-form'>
            <div style={{display:'flex',alignItem:'center'}}><p>Sign In</p></div>
          
                  <input 
                    type="text"
                    value={signinusername}
                    onChange={(e)=>setSigninUsername(e.target.value)}
                    placeholder='Username'
                    class='Username'
                    />
          
                    <input 
                    type="password"
                    value={signinpassword}
                    onChange={(e)=>setSigninPassword(e.target.value)}
                    placeholder='Password'
                    class='Password'
                    />
                    
                    <button type='submit'> Submit</button>
    
                   <Link to='/signIn'>
                      <div class='signin-signin'>
                          <p>Click to sign in here</p>
                      </div>
                    </Link> 
          </form>
          
          
        </div>
    </>
  )
}

export default Signin
