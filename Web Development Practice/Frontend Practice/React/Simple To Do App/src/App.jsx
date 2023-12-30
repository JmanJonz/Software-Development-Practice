import { useState } from "react"

let App = ()=>{
  // component state setup
    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault()
  }

    setTodos
return (
<>
<form onSubmit={handleSubmit} className="new-item-form">
  <div className="form-row">
    <label htmlFor="item">New Item</label> 
    <input value={newItem} onChange={(e)=>(setNewItem(e.target.value))} type="text" id="item"/>
    <button className="btn">Add</button>
  </div>
</form>
<h1 className="header">Todo List</h1>
<ul className="list">
  <li>
    <label>
      <input type="checkbox" />
      Item 1
      <button className="btn btn-danger">Delete</button>
    </label>
  </li>
</ul>
</>
)
}

export default App