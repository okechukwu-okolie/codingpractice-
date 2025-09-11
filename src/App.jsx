import Header from '../src/ReactProject/components/Header'
import AddContact from '../src/ReactProject/components/AddContact'
import ContactList from '../src/ReactProject/components/ContactList'
import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';// this provides unique id for each item in the array
import {Routes,Route, useNavigate} from 'react-router-dom'
import ContactDetail from './ReactProject/components/ContactDetail';
import Remove from './ReactProject/components/Remove';
// import SignUp from './components/registration/signup/SignUp.jsx'
// import SignIn from './components/registration/siginin/SignIn.jsx'
// import Scheduler from './components/registration/scheduler/Scheduler.jsx'

const App = () => {
  const navigate = useNavigate()
  //this is the variable that holds the sting variable that represents the contact values being stored; coincidentally called 'contacts'
  const LOCAL_STORAGE_KEY = 'contacts'
  // const [contacts,setContacts] = useState([])// this format wasnt used because it makes the initial state always an empty array, however because we want persistency of the data on the browser, we make the retrieved data the first state of the usestate
    const [contacts, setContacts] = useState(() => {
    // This function runs only once during the initial render.
    // It's the ideal place to retrieve and set the initial state from localStorage.
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrieveContacts || [];
  });
  
  //function in the parent to act as prop for the child. the argument here holds the data that has been carried over to the parent.
  const addContactHandler =(userData)=>{
    // console.log(userData)
    // console.log(contacts)
    setContacts([...contacts, {id:uuidv4(), ...userData}])//creating a new property of id and using the spread operator allows adding that property to the already existing array of userData
  }



  const removeContactHandler = (id)=>{

    // navigate('/remove-page')

   
    setContacts(contacts.filter((contact)=>contact.id !== id))
     
  }
  
  
  


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
        <Routes>
            <Route path='/add-contact' element={ <AddContact ContactHandler={addContactHandler}/>}/>
         

            <Route path='/' element={<ContactList contacts={contacts} getContactId ={removeContactHandler}/>}/>

            <Route path='/contact/:id' element={<ContactDetail contacts ={contacts}/>}/>

            <Route path='/remove-page' element={<Remove />}/>

        </Routes>
        {/* the callback function use used here to get the data from the child component */}
      
        </div>
    
  )
}

export default App