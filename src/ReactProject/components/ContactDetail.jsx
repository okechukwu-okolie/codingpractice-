import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const ContactDetail = ({contacts}) => {
const navigate = useNavigate()
const location = useLocation();
const {user} = location.state || {}
const {id, Name, Email} = contacts

const singleUser = contacts.filter((contact)=>{
    contact.id === user
})
    

  return (
   <div className="main">
    <button className='ui green right floated button' onClick={()=>navigate(-1)}>back</button>
    <div className="ui card centered">
        <div className="image">
            <img src="https://placehold.co/60x60" alt="user" />
        </div>
        <div className="content">
            <div className="header">{singleUser.Name}</div>
            <div className="description">{singleUser.Email}</div>
            
        </div>
    </div>
   </div>
  )
}

export default ContactDetail
