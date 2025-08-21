import { Link } from 'react-router-dom'
import React,{useState} from 'react'
import { Button, Modal } from "antd";

const TopPage = () => {

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

  //    const showModal = () => {
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
    <div class='topPage'>
        <h1 class='topPage-title'>SCHEDULER <span class='pro'>PRO</span></h1>
        <div class='topPage-buttons'>
            <Link to='/signUp'><button class='topPage-btn1'>Sign Up</button></Link>
            <Link to='/signIn'><button class='topPage-btn2'> Sign In</button></Link>
             {/* <Button type="primary" onClick={showModal} class='topPagebtn1'>
              Sign Up
            </Button> */}
                  
        </div>
           
            {/* <Modal
              // title="Basic Modal"
              closable={{ 'aria-label': 'Custom Close Button' }}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              contentBg='pink'
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
        </div>
   
  )
}

export default TopPage
