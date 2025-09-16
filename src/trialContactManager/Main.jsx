import React,{useState} from 'react'
import ListingPage from './ListingPage'
import AddingUser from './AddingUser'

const Main = () => {
    const [userInfo, setUserInfo] = useState([])
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    
    

   
   

    // //this is a prop from the parent to the child,a callbackfunction that updates a usestate
    const collectUserInfo =(userDetail)=>{
        setUserInfo([...userInfo, userDetail])
    }
    const handleDelete =(id)=>{
      const deleteTodo = userInfo.filter((user)=> user.id !== id)
      setUserInfo(deleteTodo)
     
    }

    const handleEdit =(id)=>{
      const editText = userInfo.find(user=> user.id === id)
      handleInputs(name,email)
    }
    const handleInputs=(nameInput,emailInput)=>{
      setName(nameInput)
      setEmail(emailInput)
    }

  return (
    <div>
        <AddingUser CollectUserInfo = {collectUserInfo} handleInputs={handleInputs}/> 
        <ListingPage UserInfo = {userInfo} HandleDelete = {handleDelete} handleEdit={handleEdit}/>
       
       
    </div>
  )
}

export default Main
