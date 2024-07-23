import React, { useState } from 'react'

function loginPage() {
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    //prevent the page form refreshing
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