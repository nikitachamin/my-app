import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  return (
    <div>
        <h1>Todo list</h1>
      <form>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo}>{todo}</li>
        ))
        }
        
      </ul>
    </div>
  );
}

export default TodoList;
