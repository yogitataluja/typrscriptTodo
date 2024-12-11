import AddTodo from "./component/AddTodo"
import Navbar from "./component/Navbar"
import TodoList from "./component/TodoList"
import './index.css'
function App() {


  return (
    <main>
   <h1>TODO REACT + TYPESCRIPT </h1>
    <Navbar/>
    <AddTodo/>
    <TodoList/>
    </main>

  )
}

export default App
