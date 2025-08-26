import React,{useState} from 'react'
import SignUp from './components/registration/signup/SignUp.jsx'
import { Router,Routes,Route } from 'react-router-dom'
import SignIn from './components/registration/siginin/SignIn.jsx'
import Scheduler from './components/registration/scheduler/Scheduler.jsx'

const App = () => {
  
  return (
    // <Router>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element ={<SignIn/>}/>
        <Route path='/' element ={<Scheduler/>}/>
      </Routes>
    // </Router>
    // <div>
    //   <SignUp/>
    // </div>
  )
}

export default App