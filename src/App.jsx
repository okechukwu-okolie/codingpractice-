import Header from '../src/ReactProject/components/Header'
import AddContact from '../src/ReactProject/components/AddContact'
import ContactList from '../src/ReactProject/components/ContactList'
import React,{useState,useEffect} from 'react'
// import SignUp from './components/registration/signup/SignUp.jsx'
// import { Router,Routes,Route } from 'react-router-dom'
// import SignIn from './components/registration/siginin/SignIn.jsx'
// import Scheduler from './components/registration/scheduler/Scheduler.jsx'

const App = () => {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts,setContacts] = useState([])
  
  //function in the parent to act as prop for the child. the argument here holds the data that has been carried over to the parent.
  const addContactHandler =(userData)=>{
    // console.log(userData)
    // console.log(contacts)
    setContacts([...contacts,userData])
  }

  //this useeffect and local storage retrieves the value of contact on local storage
    useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts) setContacts(retrieveContacts)
  },[])



  //this useeffect and local storage stores the value of contact on local storage
  useEffect(()=>{
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])





  // const contacts = [
  //   {
  //     id:1,
  //     name:'samuel',
  //     email:'samuel@gmail.com'
  //   },
  //      {
  //     id:2,
  //     name:'ibrahim',
  //     email:'ibrahim@gmail.com'
  //   },
  //  {
  //     id:3,
  //     name:'kunle',
  //     email:'kunle@gmail.com'
  //   },
  // ]


  
  return (
    // <Router>
      // <Routes>
      //   <Route path='/' element={<SignUp/>}/>
      //   <Route path='/signin' element ={<SignIn/>}/>
      //   <Route path='/home' element ={<Scheduler/>}/>
      // </Routes>
    // </Router>
    // <div>
    //   <SignUp/>
    // </div>



    <div className='ui container'>
      <Header/>
      {/* the callback function use used here to get the data from the child component */}
      <AddContact ContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App