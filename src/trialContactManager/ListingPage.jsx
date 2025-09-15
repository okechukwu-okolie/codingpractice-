import React from 'react'
import UserPage from './UserPage'

const ListingPage = ({UserInfo, HandleDelete, HandleEdit}) => {
    

    // const UserDetailsList = UserInfo.map((userInfo)=>{
    //     return <UserPage Info={userInfo} key={userInfo.id}/>
    // })
  return (
    <div >  
        <h3 className="ui   header">
            User Contact Information
        </h3>
        <div>
            {UserInfo.map((userInfo)=>{
        return <UserPage Info={userInfo} 
                        key={userInfo.id} 
                        HandleDelete = {HandleDelete}
                        HandleEdit={HandleEdit} 
                        
                         />
    })}
        </div>
    </div>
  )
}

export default ListingPage
