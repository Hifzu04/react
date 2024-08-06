import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';



function TodoItems(todo) {
  const [istodoEditible, setistodoEditible] = useState(false);
  const [todoMessage, settodoMessage] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleTodo } = useTodo()

  const editTodo = () => {
     updateTodo(todo.id ,{...todo , todo : todoMessage})
     setistodoEditible(false)
  }

  

  return (
    <div className={`flex border border-black/10 rounded-lg shadow-sm shadow-white/50 text-black `}>
      <input
        type='checkbox'
        className='cursor-pointer'

      />
      <input
        className='w-full bg-transparent rounded-lg'
        type='text '
      />
      {/*edit , save button */}
      <button
        className='bg-red-500'>
        edit or save
      </button>

      {/* delete button */}
      <button className='bg-red-200'>delete</button>
    </div>
  )
}

export default TodoItems