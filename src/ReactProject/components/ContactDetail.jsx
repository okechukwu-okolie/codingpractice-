import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const ContactDetail = ({contacts}) => {
    //use navigate helps us to route to other pages
const navigate = useNavigate()

//use location in conjunction with use navigate helps us to route between pages and carry data(payload) from that page to the intended page
const location = useLocation();

const {user} = location.state || {}
console.log('this is the user id:',user)
const {id, Name, Email} = contacts// not that this is an array of objects and as such has a position within the array itself


//this filter helps us narrow down the object in the array to the one we need based on the id
const singleUser = contacts.filter((contact)=>contact.id === user)

//here we are picking the first item in the array from which we can get the properties of the object in it and the value that we want. we assign it to a variable for ease of manipulation
const userId = singleUser[0]


  return (
   <div className="main">
    <button className='ui green right floated button' onClick={()=>navigate(-1)}>back</button>
    <div className="ui card centered">
        <div className="image">
            <img src="https://placehold.co/60x60" alt="user" />
        </div>
        <div className="content">
            <div className="header">{userId.Name}</div>
            <div className="description">{userId.Email}</div>
            
        </div>
    </div>
   </div>
  )
}

export default ContactDetail
