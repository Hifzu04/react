import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen  '>
        <div className='max-w-sm bg-emerald-400 rounded-lg overflow-hidden md:flex '>
          <div className=''>
            <img
              className="w-full h-48 object-cover md:w-64 md:h-full"
              src="https://images.pexels.com/photos/301977/pexels-photo-301977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Facebook logo"
            />
          </div>
          <div>
          <div className='text-center p-2 text-green-1000 hover:text-green-900 '>this is me  Lorem ipsum onsectetur adipisicing elit. Animi optio quos fugiat dele</div>
          <div  className='text-center text-green-800 pb-3'>thhhos osfo fuckq</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
