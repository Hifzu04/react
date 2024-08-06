import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';

const [todo, setTodo] = useState("")
const { addTodo } = useTodo()
const add = (e) => {
  e.preventDefault();
  if (!todo) return
  addTodo({ todo: todo, completed: false })
  setTodo("")
}



function TodoForm() {

  return (
    <form onSubmit={add} className='flex'>
      <input type="text"
        placeholder='write your todo'
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150
         bg-white/20 py-1.5 hover:bg-white/25" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
         />
      <button type="submit" className='bg-green-600 px-3 py-1 w-32
     hover:bg-green-700 rounded-r-lg font-bold '>ADD</button>
    </form>

  )
}

export default TodoForm