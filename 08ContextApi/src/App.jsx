import { useState } from 'react'
import LoginPage from './LoginPage'
import './App.css'
import Profile from './Profile'
import UserContextProvider from './UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider> 
    <h1>REACT VIDEO FOR CONTEXT API</h1>                 
    <LoginPage/>
    <Profile/>
    </UserContextProvider>
 )
}

export default App
