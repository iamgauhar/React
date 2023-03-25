import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
    const [user, setUser] = useState()    
    const {id} = useParams()
    const getUser = async()=>{
        try {
          const todo = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const res = await todo.json()
        setUser(res)
        console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    
     useEffect(()=>{
      getUser()
     },[id])
  return (
    <div>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
        <p>{user?.website}</p>
    </div>
  )
}

export default SingleUser