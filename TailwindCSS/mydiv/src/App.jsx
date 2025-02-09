import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className='flex justify-center items-center h-screen bg-slate-600  '>
        <div className='max-w-sm p-6 bg-white mx-auto rounded-xl  flex justify-center space-x-6'>
          <div className=''>
            <div className=' ' >
              <img className='w-12 h-12 ' src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="" />
            </div>
          </div>
          <div className='text-3xl font-semibold'>
            <h1 >hifzur rahman</h1>
            <h1 className='text-slate-500 text-xl'>its me</h1>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
