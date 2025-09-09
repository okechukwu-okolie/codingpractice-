import Header from '../src/ReactProject/components/Header'
import AddContact from '../src/ReactProject/components/AddContact'
import ContactList from '../src/ReactProject/components/ContactList'
import React,{useState} from 'react'
// import SignUp from './components/registration/signup/SignUp.jsx'
import { Router,Routes,Route } from 'react-router-dom'
// import SignIn from './components/registration/siginin/SignIn.jsx'
// import Scheduler from './components/registration/scheduler/Scheduler.jsx'

const App = () => {
  const [contacts,useContacts] = useState([])



  //function in the parent to act as prop for the child. the argument here holds the data that has been carried over to the parent.
  const addContactHandler =(userData)=>{
    // console.log(userData)
    // console.log(contacts)
    useContacts([...contacts,userData])
  }
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