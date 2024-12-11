import { useSearchParams } from "react-router-dom"
import { useTodo } from "../context/todoContext/TodoConsumer"


const TodoList = () => {
  const [searchParams] = useSearchParams();
 const status=searchParams.get('todo');

  const{todos, handleCheckbox, handleDelete}=useTodo()

const filteredTodoList=todos.filter((todo)=>status==="completed"? todo.completed:status==="active"?!todo.completed:true )


  return (
    <ul className="main-task">
      {filteredTodoList.map((todo) =>{ return<li key={todo.id}>
        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={(e)=>handleCheckbox(todo.id,e.target.checked )}></input>
        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
        {todo.completed &&<button type="button" onClick={()=>handleDelete(todo.id)}>Delete</button>}
      </li>})}
       
    </ul>
  )
}

export default TodoList