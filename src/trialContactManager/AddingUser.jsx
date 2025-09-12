import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const AddingUser = ({CollectUserInfo}) => {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
   

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!name || !email){
            alert('Input the name and email of the user')
            return;
        }
        const userInfo = {
            id: uuidv4(),
            name,
            email
        }
        CollectUserInfo(userInfo)
        setName('')
        setEmail('')

    }

  return (
    <div>
      <h1>Add Users Here</h1>
      <form onSubmit={handleSubmit}>
        <div className="ui fluid icon input">
            <input type="text"
                value={name}
                placeholder='....input your name here' 
                onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className="ui fluid icon input">
            <input type="email"
                value={email}
                placeholder='....input your email here'
                onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button  className="ui yellow button">Add User Detail</button>
      </form>
    </div>
  )
}

export default AddingUser
