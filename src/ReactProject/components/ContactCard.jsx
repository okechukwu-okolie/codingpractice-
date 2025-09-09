import React from 'react'

const ContactCard = ({contacts}) => {

    const {id,name,email} = contacts//this is destructuring

  return (
   <div className="item" style={{display:'flex',justifyContent:'space-between'}}>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className='trash alternate outline icon' 
                style={{color:'red',marginTop:'7px'}}></i>
            </div>
  )
}

export default ContactCard
