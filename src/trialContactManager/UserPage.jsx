import React from 'react'

const UserPage = ({UserInfo}) => {
    
    console.log('this is the single page:', UserInfo)
  return (
    <div>
        <img src="https://placehold.co/60x60" alt="" style={{borderRadius:'50%'}} />
      <ul>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    </div>
  )
}

export default UserPage
