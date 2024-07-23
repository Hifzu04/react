import React, { useContext } from 'react'
import UserContext from './UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <p>not logged in </p>
  return (
    <div>Profile : {user.username}
    <div>password u entered : {user.password}</div>
    </div>

  )
}

export default Profile