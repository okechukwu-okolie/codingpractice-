import React from 'react'
import ContactCard from './ContactCard'
import { Link, useNavigate } from 'react-router-dom'

const ContactList = ({contacts,getContactId}) => {
  const navigate = useNavigate()


const deleteContactHandler = (id)=>{
  // contacts.filter((contact)=> contact.id === id)
  getContactId(id)
}
// const contacts = [
//     {
//       id:1,
//       name:'samuel',
//       email:'samuel@gmail.com'
//     },
//        {
//       id:2,
//       name:'ibrahim',
//       email:'ibrahim@gmail.com'
//     },
//    {
//       id:3,
//       name:'kunle',
//       email:'kunle@gmail.com'
//     },
//   ]



//this is the mapped array that is redendered in this component.it is a component that originally was jsx in javascript
    const renderContactList = contacts.map((contact)=>{
        return <ContactCard contacts = {contact} 
                            clickHandler={deleteContactHandler} 
                            key={contact.id}/>
            
    })

  return (
    <div className="main">
      <h2>Contact List 
        <Link to={'/add-contact'}><button className='ui blue right floated button'>Add</button></Link>
        <button className='ui green right floated button' onClick={()=>navigate(-1)}>back</button>
        <button className='ui pink right floated button' onClick={()=>navigate(+1)}>forward</button>
      </h2>
      <div className='ui celled list' >
      {renderContactList}
    </div>
    </div>
  )
}

export default ContactList
