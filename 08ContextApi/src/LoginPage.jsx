import React, { useContext, useState } from 'react'
import UserContext from './UserContext'

function loginPage() {
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    //prevent the page form refreshing
    e.preventDefault()
    setUser({username, password});

  }
  return (
    <div>
      <input
        type="text"
        placeholder='username' 
        value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <input
        type="text"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />  
      <div>
        <button
          type='submit'
          onClick={handleSubmit}
          
        >login</button>
      </div>

    </div>


  )
}

export default loginPage