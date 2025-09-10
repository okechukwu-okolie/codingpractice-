import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts,delete}) => {
//this is the mapped array that is redendered in this component 
    const renderContactList = contacts.map((contact)=>{
        return (
            <>
            <ContactCard contacts = {contact} delete={delete}/>
            </>
        )
    })

  return (
    <div className='ui celled list' >
      {renderContactList}
    </div>
  )
}

export default ContactList
