import {  FormEvent, useState } from 'react'
import {  useTodo } from '../context/todoContext/TodoConsumer'

const AddTodo = () => {
 const [todo, setTodo]=useState("")
const{handleAddTodo}=useTodo()
  const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    handleAddTodo(todo)
    setTodo("")
  }
  return (
    <form onSubmit={(e)=>{handleFormSubmit(e)}}>
      <input type="text" name="" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button  type="submit" >Add</button>
    </form>
  )
}

export default AddTodo