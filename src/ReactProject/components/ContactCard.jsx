import React from 'react'

const ContactCard = ({contacts , delete}) => {

    const {id, Name,Email} = contacts//this is destructuring

  return (
   <div  className="item" style={{display:'flex'}}>
    <div>
    <div><img src="https://placehold.co/60x60" alt="" style={{borderRadius:'50%'}} /></div>
             <div>
                   <div className="content">
                    <div className="header">{Name}</div>
                    <div>{Email}</div>
                </div>
                <i className='trash alternate outline icon' 
                style={{color:'red',marginTop:'7px'}} onClick={delete}></i>

                  {/* <i className='trash alternate outline icon' 
                style={{color:'red',marginTop:'7px'}} onClick={delete}></i> */}
             </div>
    </div>
            </div>
  )
}

export default ContactCard
