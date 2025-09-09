import React from 'react'

const ContactCard = ({contacts}) => {

    const {id,Name,Email} = contacts//this is destructuring

  return (
   <div key={id} className="item" style={{display:'flex'}}>
    <div><img src="https://placehold.co/60x60" alt="" style={{borderRadius:'50%'}} /></div>
             <div>
                   <div className="content">
                    <div className="header">{Name}</div>
                    <div>{Email}</div>
                </div>
                <i className='trash alternate outline icon' 
                style={{color:'red',marginTop:'7px'}}></i>
             </div>
            </div>
  )
}

export default ContactCard
