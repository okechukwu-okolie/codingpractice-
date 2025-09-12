import React,{useState} from 'react'
import ListingPage from './ListingPage'
import AddingUser from './AddingUser'

const Main = () => {
    const [userInfo, setUserInfo] = useState([])


    //this is a prop from the parent to the child,a callbackfunction that updates a usestate
    const collectUserInfo =(userDetail)=>{
        setUserInfo([...userInfo, userDetail])
    }
    console.log(userInfo)

  return (
    <div>
        <AddingUser CollectUserInfo = {collectUserInfo}/>
        <ListingPage UserInfo = {userInfo}/>
    </div>
  )
}

export default Main
