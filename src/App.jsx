import TopPage from "./component/TopPage"
import './app.css'
import { Route, Routes } from "react-router-dom"
import Signup from "./component/Signup"
import Signin from "./component/Signin"


function App() {
//  let searchSentence = 'this is the man he has a leg'
//  let result = searchSentence.match(/men/)
//  let result2 = searchSentence.replace(/man/,'woman')

//  if(result){
//   console.log(`the word man exists in the search sentence ${searchSentence}`)
//  }
//  if(result2){
//   console.log(`the text of man has been changed to woman in the search sentence ${result2}`)
//  }
//  else{
//   console.log(`the search word does `)
//  }

  return (
    <>
      
      <Routes>
        <Route path="/" element={<TopPage/>} />
        <Route path="/signIn" element={<Signin/>} />
        <Route path="/signUp" element ={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
