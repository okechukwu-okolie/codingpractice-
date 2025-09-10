import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts,getContactId}) => {


const deleteContactHandler = (id)=>{
  // contacts.filter((contact)=> contact.id === id)
  getContactId(id)
}



//this is the mapped array that is redendered in this component.it is a component that originally was jsx in javascript
    const renderContactList = contacts.map((contact)=>{
        return <ContactCard contacts = {contact} 
                            clickHandler={deleteContactHandler} 
                            key={contact.id}/>
            
    })

  return (
    <div className='ui celled list' >
      {renderContactList}
    </div>
  )
}

export default ContactList
