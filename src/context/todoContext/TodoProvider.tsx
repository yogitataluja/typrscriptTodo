import { ReactNode, useState } from 'react'
import { ITodo, todoContext } from './TodoContext';

export type TodoproviderProps={
  children:ReactNode
}
//ReactNode means it can be jsx number object anything

export const Todoprovider=({children}:TodoproviderProps)=>{
  const [todos, setTodos]=useState<ITodo[]>(()=>{
    try{
      const newTodos=localStorage.getItem('todos') ||"[]";
      return JSON.parse(newTodos) as ITodo[];
    } catch {
      return []
    }
  });
  const handleAddTodo=(task:string)=>{
   
    setTodos((prev)=>{
      const newTodo:ITodo[] = [{
        id: Math.random(),
        task,
        completed: false,
        createdAt: new Date(),
      }, ...prev];
      localStorage.setItem('todos', JSON.stringify(newTodo));
      return newTodo;

    })
  }
  const handleCheckbox=(id:number, status:boolean)=>{
   setTodos((prev)=>{
    const updatedTodos=prev.map((todo:ITodo)=>{
      if(todo.id===id){
       return  {...todo, completed:status}
      }
      return todo;
    })
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return updatedTodos
   })
   

  }
  const handleDelete=(id:number)=>{
    setTodos((prev)=>{
      const filtereddata=prev.filter((todo)=>todo.id!==id)
      localStorage.setItem('todos', JSON.stringify(filtereddata));
      return filtereddata
    })

  }
  return<todoContext.Provider value={{todos,handleAddTodo, handleCheckbox,handleDelete}}>
    {children}
  </todoContext.Provider>

}

