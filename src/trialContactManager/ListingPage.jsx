import React from 'react'
import UserPage from './UserPage'

const ListingPage = ({UserInfo}) => {

  return (
    <div >  
        <h3 class="ui   header">
            User Contact Information
        </h3>
        {UserInfo.map((info)=>{  
            <UserPage />
        })}
 
    </div>
  )
}

export default ListingPage
