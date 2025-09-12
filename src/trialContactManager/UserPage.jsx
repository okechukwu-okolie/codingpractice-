import React from 'react'

const UserPage = ({Info}) => {
    const {name,email} = Info
    
  return (
    <div >
        <img src="https://placehold.co/60x60" alt="" style={{borderRadius:'50%'}} />
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  )
}

export default UserPage
