import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-green-300 text-center px-4 py-4 '>your user id is "{userid}"</div>
  )
}

export default User