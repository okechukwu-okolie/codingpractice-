import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const ContactCard = ({contacts,clickHandler }) => {
  const navigate =useNavigate()
    const {id, Name,Email} = contacts//this is destructuring

    //this is a function that is activated on a click action. it moves to another page and carries data from this page to the other page where it uses useLocation to access the data
   const singleContactInfo = ()=>{
     navigate(`/contact/${id}`, {state:{user:contacts.id}})
   }

  return (
   <div  className="item" style={{display:'flex'}}>
    <div>
    <div><img src="https://placehold.co/60x60" alt="" style={{borderRadius:'50%'}} /></div>
             <div>
                   <div className="content" onClick={singleContactInfo}>
                    <div className="header">{Name}</div>
                    <div>{Email}</div>
                </div>
                <i className='trash alternate outline icon' 
                style={{color:'red',marginTop:'7px'}} 
                onClick={()=>clickHandler(id)}></i>

             </div>
    </div>
            </div>
  )
}

export default ContactCard
