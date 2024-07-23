import { useState } from 'react'
import LoginPage from './LoginPage'
import './App.css'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>                          
    <LoginPage/>
    <Profile/>
     </>
  )
}

export default App
