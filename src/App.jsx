import React from 'react'
import Input from './components/Input'
import todoApphooks from './hooks/todoApphooks.js'

const App = () => {
    const {addTodos} = todoApphooks()
  return (
    <div>
        <Input addInputValue={addTodos}/>
    </div>
  )
}

export default App