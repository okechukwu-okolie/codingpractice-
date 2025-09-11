import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'



const AddContact = ({ContactHandler}) => {
  const [Name,setName] = useState('')
  const [Email,setEmail] = useState('')
  const navigate = useNavigate()


  const add =(e)=>{

      e.preventDefault()
      if(Name === '' || Email === ''){
        alert('provide the name and email')
        return;
      }
      const user ={
       // id:Date.now(),                    originally this property and its value was added to provide a unique id for each user information
        Name,
        Email,
      }
      ContactHandler(user)
      setName('')
      setEmail('')
      navigate('/')
      
  
  }




  return (
    <div className='ui main'>
      <h2 style={{display:'inline'}}>Add Contact</h2>
       <button className='ui green right floated button' onClick={()=>navigate(-1)}>back</button>
        <button className='ui pink right floated button' onClick={()=>navigate(+1)}>forward</button>
      <form className='ui form' onSubmit={add}>
        <div className="field">
            <label>Name</label>
            <input type="text" name='name' placeholder='Name' value={Name} onChange={(e)=>setName( e.target.value)} />
        </div>

        <div className="field">
            <label>Email</label>
            <input type="email" name='email' placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  )
}

export default AddContact
 