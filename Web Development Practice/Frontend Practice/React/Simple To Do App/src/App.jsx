import { useState } from "react"
import TodoForm from "./TodoForm";

let App = ()=>{
  // component state setup
    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([]);

function AddListItem(title){
  setTodos((prevTodos)=>{
    return [...prevTodos, {id: Date.now(), title, completed: false}]
  })
  setNewItem("");
}

const toggleTodo = (id, completed)=>{
  setTodos(currentTodos=>{
    return currentTodos.map(todo =>{
      if (todo.id === id){
        return {...todo, completed}
      }
      return todo;
    })
  })
}

const deleteTodo = (id)=>{
   setTodos((currentTodos)=>{
    return currentTodos.filter(todo => todo.id !== id)
   })
}
return (
<>
<TodoForm onSubmit={AddListItem}/>
<h1 className="header">Todo List</h1>
<ul className="list">
  {todos.length === 0 && "No Todos"}
  {todos.map((todo)=>{
    return (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed} onChange={(e)=>toggleTodo(todo.id, e.target.checked)}/>
          {todo.title}
          <button className="btn btn-danger" onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
        </label>
      </li>
    )
  })}
</ul>
</>
)
}

export default App