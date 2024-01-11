import { useEffect, useState } from "react"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

let App = ()=>{
  // component state setup
    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState(()=>{
      const localValues = localStorage.getItem("ITEMS");
      if (localValues == null){
        return []
      }
      return JSON.parse(localValues);
    });

useEffect(()=>{
  localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])

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
<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
</>
)
}

export default App