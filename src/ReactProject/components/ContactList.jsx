import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts}) => {

    const renderContactList = contacts.map((contact)=>{
        return (
            <>
            <ContactCard contacts = {contact}/>
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
