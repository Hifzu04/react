import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';



function TodoItems({todo}) {
  const [istodoEditable, setIstodoEditable] = useState(false);
  const [todoMessage, settodoMessage] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleTodo } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage })
    setIstodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleTodo(todo.id)

  }



  return (
    <div className={`flex border border-black/10 rounded-lg shadow-sm shadow-white/50 text-black 
    ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input
        type='checkbox'
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}


      />
      <input
        className={`w-full bg-transparent rounded-lg ${istodoEditable ? "border-black/10 px-2" : "border-transparent"} 
        ${todo.completed ? "line-through" : ""}`}
        value={todoMessage}
        onChange={(e) => settodoMessage(e.target.value)}
        readOnly={!istodoEditable}
        type='text '

      />
      {/*edit , save button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center
         bg-gray-50 hover:bg-gray-100
        shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (istodoEditable) {
            editTodo();
          }
          else {
            setIstodoEditable((prev) => !prev);
          }
        }}>
        {istodoEditable ? "📁" : "✏️"}
      </button>

      {/* delete button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center
       bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌ </button>
    </div>
  )
}

export default TodoItems