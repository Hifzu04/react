import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  //const [data , setData] = useState([])
  const data = useLoaderData()

  // useEffect(()=> {
  //    fetch("https://api.github.com/users/Hifzu04")
  //    .then((response) => response.json())
  //    .then(data => {
  //     console.log(data)
  //     setData(data)
  //    })
  // },[])

  return (
    <div className='bg-gray-500 text-white text-center py-3 text-3xl'>GitHub Follower : {data.followers}
    <img src={data.avatar_url} width={200} alt='img'/>
    </div>
    
  )
}

export default Github

export const githubInfoloader = async() =>{
  const response = await fetch("https://api.github.com/users/Hifzu04")
  return response.json();
}