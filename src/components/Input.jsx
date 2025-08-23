import React,{useState} from 'react'


const Input = ({addInputValue}) => {

   const [inputValue, setInputValue] = useState('')

    const submit = (e) =>{
      e.prevent.default()
      addInputValue(inputValue)
    }
  return (
    <div>
     <form onSubmit={submit}>
      <input type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
             />

             <button type='submit'>Add Schedule</button>
     </form>
    </div>
  )
}

export default Input
     