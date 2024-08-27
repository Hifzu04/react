import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' text-green-800 bg-blue-700'>learn about redux toolkit</h1>
    <AddTodo/>
    <Todos/>
   </>
  )
}

export default App
