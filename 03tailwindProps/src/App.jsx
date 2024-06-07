import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name : "hrk" ,
    age : 22 
  }
 
  return (
    <>

      <h1 className='text-sky-400 bg-zinc-700 rounded-md'>Tailwind test</h1>
      <h2>now props test</h2>
      <Card firstPass="this is first" obj={myobj}/>
      <Card/>
    
          </>
  )
}

export default App
