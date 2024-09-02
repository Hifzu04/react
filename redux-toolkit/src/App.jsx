import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-600 min-h-screen'>
    <h1 className=' text-green-800 bg-slate-300'>learn about redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </div>
   </>
  )
}

export default App
