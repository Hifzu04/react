import { useState } from 'react'             //use to imporrt hooks    
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    count = count + 1;
    setCount(count);                             //update the value in UI
    console.log("value added", count);          //modifiy the value in behind (backend)

  }
  const removeValue = () => {
    setCount(count - 1)
  }

  // let counter = 15;
  

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter Value : {count}</h2>

      <button onClick={addValue}>add Value to  {count}</button>
     
      <br />


      <button onClick={removeValue}>remove value from {count} </button>

    </>
  )
}
