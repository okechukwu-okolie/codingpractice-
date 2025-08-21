import React,{useState} from 'react'
// import { Button, Modal } from "antd";
import './signUp.css'
import { BiChevronLeft } from 'react-icons/bi'

const Signup = () => {
//  const [isModalOpen, setIsModalOpen] = useState(false);
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const handleSubmit=(e)=>{
    e.prevent.default()
  }

  return (

    
    <div class='signUp'>
      <BiChevronLeft/>
    
    {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
      title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
<form onSubmit={handleSubmit}>

        <input 
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder='Username'
          class='Username'
          />

          <input 
          type="text"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Password'
          class='Password'
          />
          <br />
          <button type='submit'> Submit</button>
          </form>
          
          </Modal> */}


       <form onSubmit={handleSubmit} 
       class='signup-form'>
      
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

                <div class='signup-signin'>
                  <p>Sign in here</p>
                </div>
      </form>
      
      
    </div>
  )
}

export default Signup
