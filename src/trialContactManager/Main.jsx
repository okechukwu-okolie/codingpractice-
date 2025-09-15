import React,{useState} from 'react'
import ListingPage from './ListingPage'
import AddingUser from './AddingUser'

const Main = () => {
    const [userInfo, setUserInfo] = useState([])
    const [editingName, setEditingName] = useState(null)
    const [editingEmail, setEditingEmail] = useState(null)
    

   
   

    //this is a prop from the parent to the child,a callbackfunction that updates a usestate
    const collectUserInfo =(userDetail)=>{
        setUserInfo([...userInfo, userDetail])
    }
    const handleDelete =(id)=>{
      const deleteTodo = userInfo.filter((user)=> user.id !== id)
      setUserInfo(deleteTodo)
     
    }

    const handleEdit = (id)=>{
      const textToEdit = userInfo.filter((user)=>user.id === id)
      setEditingName(textToEdit[0].name)
      setEditingEmail(textToEdit[0].email)
    }

  return (
    <div>
        <AddingUser CollectUserInfo = {collectUserInfo} 
                    userInfo = {userInfo}
                    editingName = {editingName}
                    editingEmail = {editingEmail}/>
        <ListingPage UserInfo = {userInfo} HandleDelete = {handleDelete} HandleEdit = {handleEdit} />
    </div>
  )
}

export default Main
