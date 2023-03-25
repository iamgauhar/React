import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [todo, setTodo] = useState()
  const navigate = useNavigate()
  const getTodo = async()=>{
    try {
      const todo = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await todo.json()
    setTodo(res)
    console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

 useEffect(()=>{
  getTodo()
 },[])

  const remove = async(id)=>{
      // let list = [...todo]

     try {
      const rdata = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",

      })
      const res = await rdata.json()
      console.log(rdata);
     } catch (err) {
      console.log(err);
     }

      // list = list.filter((el)=>{
      //   return el.id !== id
      // })
      // setTodo(list)
  }

  return (
    <div>
        {todo?.map((el)=>{
          return (
            <div className="todo">
              <h1 key={el.id}>{el.username}</h1>
              <button onClick={()=> navigate(`/single-user/${el.id}`)} >View</button>
            </div>
          )
        })}
    </div>
  )
}

export default Home