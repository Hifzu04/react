import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {
  const [Todos , setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now() , ...todo}] , ...prev)
  }

  const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((eachprev) => (eachprev.id === id ? todo : eachprev)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ?
    {...prevtodo , completed : !prevtodo.completed } : prevtodo))
  } 


  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8 ">
        <div className="w-full max-w-2xl  mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className='className="text-3xl font-bold text-center mt-2'>Manage Your Todos</h1>
          <div className='mb-4'>
            <TodoForm />
          </div>
          <div className='mb-4'>
            <TodoItems />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
