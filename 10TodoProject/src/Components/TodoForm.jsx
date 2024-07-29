import React from 'react'

function TodoForm() {
  return (
    <form className='flex'>
        <input type="text"
        placeholder='write your todo' 
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 hover:bg-white/25" />
    <button type="submit" className='bg-green-600 px-3 py-1 w-32 hover:bg-green-700 rounded-r-lg font-bold '>ADD</button>
    </form>
    
  )
}

export default TodoForm