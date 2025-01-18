import React, { useEffect, useState } from "react";

function TextDisplayForm() {
  const [inputs, setInput] = useState([]);
  const [submittedValue, setSubmittedValue] = useState("");

  function handleChange(e) {
    setSubmittedValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput([...inputs, submittedValue]);
    setSubmittedValue("");
  }
  
  return (
    <div>
        <h1>Todo list</h1>
      <form>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleSubmit}>Отобразить текст</button>
      </form>
      <ul>
        {inputs.map((input)=>(
          <li key={input}>{input}</li>
        ))
        }
        
      </ul>
    </div>
  );
}

export default TextDisplayForm;
